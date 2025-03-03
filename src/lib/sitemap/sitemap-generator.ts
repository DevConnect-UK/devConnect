/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import { visit } from "ast-types";
import * as babelParser from "@babel/parser";
import { URL } from "url";

// Update type definitions
export type ParsedRoute = {
    path: string;
    priority?: number;
};

export type ParsedRoutes = {
    staticRoutes: ParsedRoute[];
    dynamicRoutes: ParsedRoute[];
};

export type DynamicRouteValueProviders = {
    [routePath: string]: () => Promise<Array<Record<string, string>>>;
};

export type SitemapConfig = {
    baseUrl: string;
    outputPath: string;
    defaultPriority?: number;
    changefreq?: string;
    lastmod?: string;
};

// Helper function to extract priority from JSX attribute
const getPriorityFromAttribute = (attr: any): number | undefined => {
    if (!attr?.value) return undefined;

    if (attr.value.type === "JSXExpressionContainer") {
        const expr = attr.value.expression;
        if (expr.type === "NumericLiteral") {
            return expr.value;
        }
    }

    return undefined;
};

export function parseRoutesFromFile(filePath: string): ParsedRoutes {
    const code = fs.readFileSync(filePath, "utf-8");
    const ast = babelParser.parse(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
    });

    const staticRoutes = new Map<string, number | undefined>();
    const dynamicRoutes = new Map<string, number | undefined>();

    const extractRoutesFromJSX = (path: any, parentPath = "") => {
        const { node } = path;

        if (
            node.openingElement &&
            node.openingElement.name &&
            node.openingElement.name.name === "Route"
        ) {
            const pathAttribute = node.openingElement.attributes.find(
                (attr: any) => attr.name?.name === "path"
            );
            const priorityAttribute = node.openingElement.attributes.find(
                (attr: any) => attr.name?.name === "priority"
            );

            const priority = getPriorityFromAttribute(priorityAttribute);
            let currentPath = parentPath;

            if (pathAttribute?.value?.value) {
                const routePath = pathAttribute.value.value;

                if (routePath.startsWith("/")) {
                    currentPath = routePath;
                } else {
                    currentPath =
                        parentPath === "/"
                            ? `/${routePath}`
                            : `${parentPath}/${routePath}`;
                }

                // Store route with priority
                if (currentPath.includes(":")) {
                    dynamicRoutes.set(currentPath, priority);
                } else {
                    staticRoutes.set(currentPath, priority);
                }
            }

            node.children?.forEach((child: any) => {
                if (child.type === "JSXElement") {
                    extractRoutesFromJSX({ node: child }, currentPath);
                }
            });
        } else {
            node.children?.forEach((child: any) => {
                if (child.type === "JSXElement") {
                    extractRoutesFromJSX({ node: child }, parentPath);
                }
            });
        }
    };

    visit(ast, {
        visitJSXElement(path) {
            extractRoutesFromJSX(path);
            this.traverse(path);
        },
    });

    return {
        staticRoutes: Array.from(staticRoutes.entries()).map(
            ([path, priority]) => ({ path, priority })
        ),
        dynamicRoutes: Array.from(dynamicRoutes.entries()).map(
            ([path, priority]) => ({ path, priority })
        ),
    };
}

export async function processDynamicRoutes(
    parsedRoutes: ParsedRoutes,
    providers: DynamicRouteValueProviders
): Promise<ParsedRoute[]> {
    const expandedRoutes: ParsedRoute[] = [...parsedRoutes.staticRoutes];

    for (const dynamicRoute of parsedRoutes.dynamicRoutes) {
        const { path: routePath, priority } = dynamicRoute;
        const provider = providers[routePath];
        if (!provider) continue;

        try {
            const paramsArray = await provider();
            for (const params of paramsArray) {
                const expandedPath = expandDynamicRoute(routePath, params);
                expandedRoutes.push({ path: expandedPath, priority });
            }
        } catch (error) {
            console.error(`Error processing ${routePath}:`, error);
        }
    }

    return expandedRoutes;
}

function expandDynamicRoute(
    routePath: string,
    params: Record<string, string>
): string {
    let expanded = routePath;
    for (const [key, value] of Object.entries(params)) {
        expanded = expanded.replace(`:${key}`, value);
    }
    return expanded;
}

export async function generateSitemap(
    routes: ParsedRoute[],
    config: SitemapConfig
): Promise<void> {
    const {
        baseUrl,
        outputPath,
        defaultPriority = 0.8,
        changefreq = "monthly",
        lastmod = new Date().toISOString(),
    } = config;

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
      .map((route) => {
          const url = new URL(route.path, baseUrl).href;
          const priority = route.priority ?? defaultPriority;
          return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority.toFixed(1)}</priority>
    </url>`;
      })
      .join("")}
</urlset>`;

    await fs.promises.writeFile(outputPath, sitemapContent);
}
