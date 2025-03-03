import {
    parseRoutesFromFile,
    processDynamicRoutes,
    generateSitemap,
} from "../src/lib/sitemap/sitemap-generator.ts";

// Step 1: Parse routes from main router file
const parsedRoutes = parseRoutesFromFile("src/main.tsx");

// Step 2: Add overrides for certain routes' priorities
// const routePriorities = {
//     "/": 1,
//     "/about": 0.8,
//     "/pricing": 0.7,
//     "/faq": 0.6,
//     "/cookie-policy": 0.5,
//     "/terms-of-service": 0.4,
//     "/privacy-policy": 0.3,
// };

// parsedRoutes.staticRoutes = parsedRoutes.staticRoutes.map((route) => {
//     if (route in routePriorities) {
//         return { route, priority: routePriorities[route] };
//     }
// });

// Step 3: Define dynamic route value providers
const dynamicRouteValueProviders = {
    "/projects/:id": async () => [{ id: "1" }, { id: "3" }, { id: "5" }],
    "/blog/:slug": async () => [
        { slug: "react-tips" },
        { slug: "typescript-best-practices" },
    ],
};

// Step 4: Process routes
processDynamicRoutes(parsedRoutes, dynamicRouteValueProviders)
    .then((allRoutes) => {
        // Step 4: Generate sitemap with priorities
        return generateSitemap(allRoutes, {
            baseUrl: "https://devconnect.uk",
            outputPath: "public/sitemap.xml",
            defaultPriority: 0.5,
            changefreq: "weekly",
        });
    })
    .then(() => console.log("Sitemap generated successfully"))
    .catch(console.error);
