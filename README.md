# React + TypeScript + Vite + Tailwind + React Router

## Overview

This project is a modern web application built with the following technologies:

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Vite**: A fast build tool and development server.
-   **Tailwind CSS**: A utility-first CSS framework.
-   **React Router**: A collection of navigational components for React applications.

## Installation

### Prerequisites

-   **Node.js**: Ensure you have Node.js installed. Required version: `>= 22.6.0`, Reccomended version: `latest lts`
-   **npm**: Node package manager, which comes with Node.js.

### Steps

1. Clone the repository:

```sh
git clone https://github.com/your-repo/dev-connect-v6.git
cd dev-connect-v6
```

2. Install dependencies:

```sh
npm install
```

## Running the Project

To start the development server, run:

```sh
npm run dev
```

This will start Vite's development server and you can view the application at `http://localhost:3000`.

## Build Scripts

-   **Development**: `npm run dev` - Starts the development server.
-   **Build**: `npm run build` - Builds the project for production.
-   **Post Build**: `npm run postbuild` - Runs post-build tasks like generating sitemaps.
-   **Lint**: `npm run lint` - Lints the codebase using ESLint.
-   **Preview**: `npm run preview` - Previews the production build locally.
-   **SiteMap**: `npm run sitemap` - Builds an updated sitemap for the pages on the router.

## Deploying

To deploy the application, you need to build it first:

```sh
npm run build
```

The build output will be in the `dist` directory. You can then deploy the contents of this directory to your preferred hosting service.

## Dependencies

### Main Dependencies

### Main Dependencies

These dependencies are the main ones used by the application.

-   **@ory/client**: `^1.16.7` - Client library for the Ory Cloud, used to handle authentication and authorization.
-   **@radix-ui/react-[something]**: `^1.2.3` - A component library for building components, used by the Shadcn components.
-   **@tailwindcss/vite**: `^4.0.7` - A plugin for Vite to integrate Tailwind CSS.
-   **react**: `^19.0.0` - A JavaScript library for building user interfaces.
-   **react-dom**: `^19.0.0` - A companion library to React for working with the DOM.
-   **react-hook-form**: `^7.54.2` - A library for building form components.
-   **react-router**: `^7.2.0` - A library for managing client-side routing.
-   **recharts**: `^2.15.1` - A library for building charts and graphs.
-   **tailwindcss-animate**: `^1.0.7` - A plugin for Tailwind CSS to add animation classes.

### Development Dependencies

These dependencies are used for development purposes only.

-   **@babel/parser**: `^7.26.9` - A parser for JavaScript code.
-   **@eslint/js**: `^9.19.0` - A parser for JavaScript code, used by ESLint.
-   **@types/node**: `^22.13.4` - Type definitions for Node.js.
-   **@types/react**: `^19.0.8` - Type definitions for React.
-   **@types/react-dom**: `^19.0.3` - Type definitions for React DOM.
-   **@vitejs/plugin-react-swc**: `^3.5.0` - A plugin for Vite to use SWC compiler.
-   **autoprefixer**: `^10.4.20` - A plugin for PostCSS to add vendor prefixes to CSS properties.
-   **eslint**: `^9.19.0` - A linter for JavaScript code.
-   **eslint-plugin-react-hooks**: `^5.0.0` - A plugin for ESLint to check React hooks.
-   **eslint-plugin-react-refresh**: `^0.4.18` - A plugin for ESLint to check React Refresh.
-   **globals**: `^15.14.0` - A list of global variables for ESLint.
-   **postcss**: `^8.5.2` - A plugin for Vite to use PostCSS.
-   **recast**: `^0.23.11` - A library to work with JavaScript source code.
-   **tailwindcss**: `^3.4.17` - A utility-first CSS framework.
-   **typescript**: `~5.7.2` - A superset of JavaScript that adds type annotations.
-   **typescript-eslint**: `^8.22.0` - A linter for TypeScript code.
-   **vite**: `^6.1.0` - A fast build tool and development server.
