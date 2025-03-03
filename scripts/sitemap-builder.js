import fs from "fs";
import { visit } from "ast-types";
import * as babelParser from "@babel/parser"; // Import Babel parser

// Read your App.js or route definition file
const code = fs.readFileSync("src/main.tsx", "utf-8"); // Corrected file name

// Parse the code into an AST using Babel parser
const ast = babelParser.parse(code, {
    sourceType: "module", // Specify that it's a module
    plugins: ["jsx", "typescript"], // Enable JSX and TypeScript parsing
});

const routes = new Set(); // Use a Set to store unique routes
const dynamicRoutes = new Set(); // Store dynamic routes separately

// Define a mapping of dynamic routes to their value-fetching functions
const dynamicRouteValueProviders = {
    "projects/:id": async (path) => {
        console.log(path);
        // Replace this with your actual data fetching logic
        // This is just a placeholder example
        return ["1", "3", "5"];
    },
    "student/inbox/:jobId": async () => {
        return ["job1", "job2", "job3"];
    },
    "student/profile/:id": async () => {
        return ["user1", "user2", "user3"];
    },
    "business/projects/:id": async () => {
        return ["project1", "project2", "project3"];
    },
    // Add more dynamic routes and their providers here
};

const extractRoutesFromJSX = (path, parentPath = "") => {
    const { node } = path;

    if (
        node.openingElement &&
        node.openingElement.name &&
        node.openingElement.name.name === "Route"
    ) {
        const pathAttribute = node.openingElement.attributes.find(
            (attr) => attr.name && attr.name.name === "path"
        );

        let currentPath = parentPath;
        if (pathAttribute && pathAttribute.value && pathAttribute.value.value) {
            const routePath = pathAttribute.value.value;
            currentPath +=
                parentPath && !routePath.startsWith("/")
                    ? "/" + routePath
                    : routePath; // Add slash if needed

            // Check if this route is dynamic
            if (dynamicRouteValueProviders[currentPath]) {
                dynamicRoutes.add(currentPath); // Store the dynamic route
            } else {
                routes.add(currentPath); // Add to the Set
            }
        }

        // Traverse children of the Route component
        if (node.children) {
            node.children.forEach((child) => {
                if (child.type === "JSXElement") {
                    extractRoutesFromJSX(
                        { node: child, parent: path },
                        currentPath // Pass the current path to the child
                    );
                }
            });
        }
    } else {
        // Traverse other JSX elements
        if (node.children) {
            node.children.forEach((child) => {
                if (child.type === "JSXElement") {
                    extractRoutesFromJSX(
                        { node: child, parent: path },
                        parentPath
                    );
                }
            });
        }
    }
};

// Traverse the AST to find <Route> components
visit(ast, {
    visitJSXElement: function (path) {
        extractRoutesFromJSX(path);
        this.traverse(path);
    },
});

// Now you have the routes array, generate the sitemap
const generateSitemap = async () => {
    const baseUrl = "https://devconnect.uk"; // Corrected base URL
    const currentDate = new Date().toISOString();

    // Generate dynamic routes
    const generatedDynamicRoutes = new Set(); // Store generated dynamic routes
    for (const routePath of dynamicRoutes) {
        if (dynamicRouteValueProviders[routePath]) {
            const valueProvider = dynamicRouteValueProviders[routePath];
            try {
                const values = await valueProvider();
                values.forEach((value) => {
                    let dynamicRoute = routePath.replace(":id", value); // Replace :id with the actual value
                    // Remove leading slash if it exists to avoid double slashes
                    if (dynamicRoute.startsWith("/")) {
                        dynamicRoute = dynamicRoute.slice(1);
                    }
                    generatedDynamicRoutes.add(dynamicRoute);
                });
            } catch (error) {
                console.error(`Error fetching values for ${routePath}:`, error);
            }
        }
    }

    // Combine static and dynamic routes
    const allRoutes = new Set([...routes, ...generatedDynamicRoutes]);

    // Convert the Set to an array for sitemap generation
    const routesArray = Array.from(allRoutes);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routesArray
          .map(
              (route) => `
        <url>
          <loc>${baseUrl}/${route}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `
          )
          .join("")}
    </urlset>`;

    fs.writeFileSync("public/sitemap.xml", sitemap);
    console.log("sitemap.xml generated successfully!");
};

generateSitemap();
