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

const routes = [];

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
            routes.push(currentPath);
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
const generateSitemap = () => {
    const baseUrl = "https://devconnect.uk"; // Corrected base URL
    const currentDate = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
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
