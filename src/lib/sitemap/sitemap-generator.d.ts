export type ParsedRoutes = {
    staticRoutes: string[];
    dynamicRoutes: string[];
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

export declare function parseRoutesFromFile(filePath: string): ParsedRoutes;
export declare function processDynamicRoutes(
    parsedRoutes: ParsedRoutes,
    providers: DynamicRouteValueProviders
): Promise<string[]>;
export declare function generateSitemap(
    routes: string[],
    config: SitemapConfig
): Promise<void>;
