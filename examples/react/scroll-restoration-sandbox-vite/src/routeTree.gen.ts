/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NormalPageImport } from './routes/normal-page'
import { Route as LazyWithLoaderPageImport } from './routes/lazy-with-loader-page'
import { Route as LazyPageImport } from './routes/lazy-page'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const VirtualPageLazyImport = createFileRoute('/virtual-page')()

// Create/Update Routes

const VirtualPageLazyRoute = VirtualPageLazyImport.update({
  path: '/virtual-page',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/virtual-page.lazy').then((d) => d.Route))

const NormalPageRoute = NormalPageImport.update({
  path: '/normal-page',
  getParentRoute: () => rootRoute,
} as any)

const LazyWithLoaderPageRoute = LazyWithLoaderPageImport.update({
  path: '/lazy-with-loader-page',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/lazy-with-loader-page.lazy').then((d) => d.Route),
)

const LazyPageRoute = LazyPageImport.update({
  path: '/lazy-page',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/lazy-page.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/lazy-page': {
      id: '/lazy-page'
      path: '/lazy-page'
      fullPath: '/lazy-page'
      preLoaderRoute: typeof LazyPageImport
      parentRoute: typeof rootRoute
    }
    '/lazy-with-loader-page': {
      id: '/lazy-with-loader-page'
      path: '/lazy-with-loader-page'
      fullPath: '/lazy-with-loader-page'
      preLoaderRoute: typeof LazyWithLoaderPageImport
      parentRoute: typeof rootRoute
    }
    '/normal-page': {
      id: '/normal-page'
      path: '/normal-page'
      fullPath: '/normal-page'
      preLoaderRoute: typeof NormalPageImport
      parentRoute: typeof rootRoute
    }
    '/virtual-page': {
      id: '/virtual-page'
      path: '/virtual-page'
      fullPath: '/virtual-page'
      preLoaderRoute: typeof VirtualPageLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LazyPageRoute,
  LazyWithLoaderPageRoute,
  NormalPageRoute,
  VirtualPageLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/lazy-page",
        "/lazy-with-loader-page",
        "/normal-page",
        "/virtual-page"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/lazy-page": {
      "filePath": "lazy-page.tsx"
    },
    "/lazy-with-loader-page": {
      "filePath": "lazy-with-loader-page.tsx"
    },
    "/normal-page": {
      "filePath": "normal-page.tsx"
    },
    "/virtual-page": {
      "filePath": "virtual-page.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
