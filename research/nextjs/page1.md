Title: File-system conventions: route.js

URL Source: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

Markdown Content:
File-system conventions: route.js | Next.js

===============
[Skip to content](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#geist-skip-nav)

[](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=docs_app_api-reference_file-conventions_route "Go to Vercel homepage")

[![Image 1: Next.js uwu logo by SAWARATSUKI](https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1714730590%2Ffront%2Fnextjs%2Fuwu%2Fnext-uwu-logo.png&w=128&q=75)](https://nextjs.org/?uwu=true "Go to the homepage")

[](https://nextjs.org/ "Go to the homepage")

Search documentation...CtrlK Search...⌘K

[](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=docs_app_api-reference_file-conventions_route "Go to Vercel homepage")

[![Image 2: Next.js uwu logo by SAWARATSUKI](https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1714730590%2Ffront%2Fnextjs%2Fuwu%2Fnext-uwu-logo.png&w=128&q=75)](https://nextjs.org/?uwu=true "Go to the homepage")

[](https://nextjs.org/ "Go to the homepage")

[Showcase](https://nextjs.org/showcase)[Docs](https://nextjs.org/docs "Documentation")[Blog](https://nextjs.org/blog)[Templates](https://vercel.com/templates/next.js?utm_source=next-site&utm_medium=navbar&utm_campaign=next_site_nav_templates)[Enterprise](https://vercel.com/contact/sales/nextjs?utm_source=next-site&utm_medium=navbar&utm_campaign=next_site_nav_enterprise)

Search documentation...CtrlK Search...⌘K Feedback[Learn](https://nextjs.org/learn)

Menu

Using App Router

Features available in /app

Using Latest Version

15.5.2

*   [Getting Started](https://nextjs.org/docs/app/getting-started)

    *   [Installation](https://nextjs.org/docs/app/getting-started/installation)
    *   [Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)
    *   [Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
    *   [Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating)
    *   [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
    *   [Partial Prerendering](https://nextjs.org/docs/app/getting-started/partial-prerendering)
    *   [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
    *   [Updating Data](https://nextjs.org/docs/app/getting-started/updating-data)
    *   [Caching and Revalidating](https://nextjs.org/docs/app/getting-started/caching-and-revalidating)
    *   [Error Handling](https://nextjs.org/docs/app/getting-started/error-handling)
    *   [CSS](https://nextjs.org/docs/app/getting-started/css)
    *   [Image Optimization](https://nextjs.org/docs/app/getting-started/images)
    *   [Font Optimization](https://nextjs.org/docs/app/getting-started/fonts)
    *   [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
    *   [Route Handlers and Middleware](https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware)
    *   [Deploying](https://nextjs.org/docs/app/getting-started/deploying)
    *   [Upgrading](https://nextjs.org/docs/app/getting-started/upgrading)

*   [Guides](https://nextjs.org/docs/app/guides)

    *   [Analytics](https://nextjs.org/docs/app/guides/analytics)
    *   [Authentication](https://nextjs.org/docs/app/guides/authentication)
    *   [Backend for Frontend](https://nextjs.org/docs/app/guides/backend-for-frontend)
    *   [Caching](https://nextjs.org/docs/app/guides/caching)
    *   [CI Build Caching](https://nextjs.org/docs/app/guides/ci-build-caching)
    *   [Content Security Policy](https://nextjs.org/docs/app/guides/content-security-policy)
    *   [CSS-in-JS](https://nextjs.org/docs/app/guides/css-in-js)
    *   [Custom Server](https://nextjs.org/docs/app/guides/custom-server)
    *   [Data Security](https://nextjs.org/docs/app/guides/data-security)
    *   [Debugging](https://nextjs.org/docs/app/guides/debugging)
    *   [Draft Mode](https://nextjs.org/docs/app/guides/draft-mode)
    *   [Environment Variables](https://nextjs.org/docs/app/guides/environment-variables)
    *   [Forms](https://nextjs.org/docs/app/guides/forms)
    *   [ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration)
    *   [Instrumentation](https://nextjs.org/docs/app/guides/instrumentation)
    *   [Internationalization](https://nextjs.org/docs/app/guides/internationalization)
    *   [JSON-LD](https://nextjs.org/docs/app/guides/json-ld)
    *   [Lazy Loading](https://nextjs.org/docs/app/guides/lazy-loading)
    *   [Development Environment](https://nextjs.org/docs/app/guides/local-development)
    *   [MDX](https://nextjs.org/docs/app/guides/mdx)
    *   [Memory Usage](https://nextjs.org/docs/app/guides/memory-usage)
    *   [Migrating](https://nextjs.org/docs/app/guides/migrating)

        *   [App Router](https://nextjs.org/docs/app/guides/migrating/app-router-migration)
        *   [Create React App](https://nextjs.org/docs/app/guides/migrating/from-create-react-app)
        *   [Vite](https://nextjs.org/docs/app/guides/migrating/from-vite)

    *   [Multi-tenant](https://nextjs.org/docs/app/guides/multi-tenant)
    *   [Multi-zones](https://nextjs.org/docs/app/guides/multi-zones)
    *   [OpenTelemetry](https://nextjs.org/docs/app/guides/open-telemetry)
    *   [Package Bundling](https://nextjs.org/docs/app/guides/package-bundling)
    *   [Prefetching](https://nextjs.org/docs/app/guides/prefetching)
    *   [Production](https://nextjs.org/docs/app/guides/production-checklist)
    *   [PWAs](https://nextjs.org/docs/app/guides/progressive-web-apps)
    *   [Redirecting](https://nextjs.org/docs/app/guides/redirecting)
    *   [Sass](https://nextjs.org/docs/app/guides/sass)
    *   [Scripts](https://nextjs.org/docs/app/guides/scripts)
    *   [Self-Hosting](https://nextjs.org/docs/app/guides/self-hosting)
    *   [SPAs](https://nextjs.org/docs/app/guides/single-page-applications)
    *   [Static Exports](https://nextjs.org/docs/app/guides/static-exports)
    *   [Tailwind CSS v3](https://nextjs.org/docs/app/guides/tailwind-v3-css)
    *   [Testing](https://nextjs.org/docs/app/guides/testing)

        *   [Cypress](https://nextjs.org/docs/app/guides/testing/cypress)
        *   [Jest](https://nextjs.org/docs/app/guides/testing/jest)
        *   [Playwright](https://nextjs.org/docs/app/guides/testing/playwright)
        *   [Vitest](https://nextjs.org/docs/app/guides/testing/vitest)

    *   [Third Party Libraries](https://nextjs.org/docs/app/guides/third-party-libraries)
    *   [Upgrading](https://nextjs.org/docs/app/guides/upgrading)

        *   [Codemods](https://nextjs.org/docs/app/guides/upgrading/codemods)
        *   [Version 14](https://nextjs.org/docs/app/guides/upgrading/version-14)
        *   [Version 15](https://nextjs.org/docs/app/guides/upgrading/version-15)

    *   [Videos](https://nextjs.org/docs/app/guides/videos)

*   [API Reference](https://nextjs.org/docs/app/api-reference)

    *   [Directives](https://nextjs.org/docs/app/api-reference/directives)

        *   [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache)
        *   [use client](https://nextjs.org/docs/app/api-reference/directives/use-client)
        *   [use server](https://nextjs.org/docs/app/api-reference/directives/use-server)

    *   [Components](https://nextjs.org/docs/app/api-reference/components)

        *   [Font](https://nextjs.org/docs/app/api-reference/components/font)
        *   [Form Component](https://nextjs.org/docs/app/api-reference/components/form)
        *   [Image Component](https://nextjs.org/docs/app/api-reference/components/image)
        *   [Link Component](https://nextjs.org/docs/app/api-reference/components/link)
        *   [Script Component](https://nextjs.org/docs/app/api-reference/components/script)

    *   [File-system conventions](https://nextjs.org/docs/app/api-reference/file-conventions)

        *   [default.js](https://nextjs.org/docs/app/api-reference/file-conventions/default)
        *   [Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
        *   [error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error)
        *   [forbidden.js](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
        *   [instrumentation.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation)
        *   [instrumentation-client.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client)
        *   [Intercepting Routes](https://nextjs.org/docs/app/api-reference/file-conventions/intercepting-routes)
        *   [layout.js](https://nextjs.org/docs/app/api-reference/file-conventions/layout)
        *   [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading)
        *   [mdx-components.js](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components)
        *   [middleware.js](https://nextjs.org/docs/app/api-reference/file-conventions/middleware)
        *   [not-found.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
        *   [page.js](https://nextjs.org/docs/app/api-reference/file-conventions/page)
        *   [Parallel Routes](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes)
        *   [public](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder)
        *   [route.js](https://nextjs.org/docs/app/api-reference/file-conventions/route)
        *   [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups)
        *   [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
        *   [src](https://nextjs.org/docs/app/api-reference/file-conventions/src-folder)
        *   [template.js](https://nextjs.org/docs/app/api-reference/file-conventions/template)
        *   [unauthorized.js](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
        *   [Metadata Files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)

            *   [favicon, icon, and apple-icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
            *   [manifest.json](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest)
            *   [opengraph-image and twitter-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
            *   [robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
            *   [sitemap.xml](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

    *   [Functions](https://nextjs.org/docs/app/api-reference/functions)

        *   [after](https://nextjs.org/docs/app/api-reference/functions/after)
        *   [cacheLife](https://nextjs.org/docs/app/api-reference/functions/cacheLife)
        *   [cacheTag](https://nextjs.org/docs/app/api-reference/functions/cacheTag)
        *   [connection](https://nextjs.org/docs/app/api-reference/functions/connection)
        *   [cookies](https://nextjs.org/docs/app/api-reference/functions/cookies)
        *   [draftMode](https://nextjs.org/docs/app/api-reference/functions/draft-mode)
        *   [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch)
        *   [forbidden](https://nextjs.org/docs/app/api-reference/functions/forbidden)
        *   [generateImageMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata)
        *   [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
        *   [generateSitemaps](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps)
        *   [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
        *   [generateViewport](https://nextjs.org/docs/app/api-reference/functions/generate-viewport)
        *   [headers](https://nextjs.org/docs/app/api-reference/functions/headers)
        *   [ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response)
        *   [NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-request)
        *   [NextResponse](https://nextjs.org/docs/app/api-reference/functions/next-response)
        *   [notFound](https://nextjs.org/docs/app/api-reference/functions/not-found)
        *   [permanentRedirect](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect)
        *   [redirect](https://nextjs.org/docs/app/api-reference/functions/redirect)
        *   [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
        *   [revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
        *   [unauthorized](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
        *   [unstable_cache](https://nextjs.org/docs/app/api-reference/functions/unstable_cache)
        *   [unstable_noStore](https://nextjs.org/docs/app/api-reference/functions/unstable_noStore)
        *   [unstable_rethrow](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
        *   [useLinkStatus](https://nextjs.org/docs/app/api-reference/functions/use-link-status)
        *   [useParams](https://nextjs.org/docs/app/api-reference/functions/use-params)
        *   [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
        *   [useReportWebVitals](https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals)
        *   [useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router)
        *   [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
        *   [useSelectedLayoutSegment](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment)
        *   [useSelectedLayoutSegments](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments)
        *   [userAgent](https://nextjs.org/docs/app/api-reference/functions/userAgent)

    *   [Configuration](https://nextjs.org/docs/app/api-reference/config)

        *   [next.config.js](https://nextjs.org/docs/app/api-reference/config/next-config-js)

            *   [allowedDevOrigins](https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins)
            *   [appDir](https://nextjs.org/docs/app/api-reference/config/next-config-js/appDir)
            *   [assetPrefix](https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix)
            *   [authInterrupts](https://nextjs.org/docs/app/api-reference/config/next-config-js/authInterrupts)
            *   [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
            *   [browserDebugInfoInTerminal](https://nextjs.org/docs/app/api-reference/config/next-config-js/browserDebugInfoInTerminal)
            *   [cacheComponents](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents)
            *   [cacheLife](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheLife)
            *   [compress](https://nextjs.org/docs/app/api-reference/config/next-config-js/compress)
            *   [crossOrigin](https://nextjs.org/docs/app/api-reference/config/next-config-js/crossOrigin)
            *   [cssChunking](https://nextjs.org/docs/app/api-reference/config/next-config-js/cssChunking)
            *   [devIndicators](https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators)
            *   [distDir](https://nextjs.org/docs/app/api-reference/config/next-config-js/distDir)
            *   [env](https://nextjs.org/docs/app/api-reference/config/next-config-js/env)
            *   [eslint](https://nextjs.org/docs/app/api-reference/config/next-config-js/eslint)
            *   [expireTime](https://nextjs.org/docs/app/api-reference/config/next-config-js/expireTime)
            *   [exportPathMap](https://nextjs.org/docs/app/api-reference/config/next-config-js/exportPathMap)
            *   [generateBuildId](https://nextjs.org/docs/app/api-reference/config/next-config-js/generateBuildId)
            *   [generateEtags](https://nextjs.org/docs/app/api-reference/config/next-config-js/generateEtags)
            *   [headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers)
            *   [htmlLimitedBots](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots)
            *   [httpAgentOptions](https://nextjs.org/docs/app/api-reference/config/next-config-js/httpAgentOptions)
            *   [images](https://nextjs.org/docs/app/api-reference/config/next-config-js/images)
            *   [cacheHandler](https://nextjs.org/docs/app/api-reference/config/next-config-js/incrementalCacheHandlerPath)
            *   [inlineCss](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss)
            *   [logging](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)
            *   [mdxRs](https://nextjs.org/docs/app/api-reference/config/next-config-js/mdxRs)
            *   [onDemandEntries](https://nextjs.org/docs/app/api-reference/config/next-config-js/onDemandEntries)
            *   [optimizePackageImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports)
            *   [output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)
            *   [pageExtensions](https://nextjs.org/docs/app/api-reference/config/next-config-js/pageExtensions)
            *   [poweredByHeader](https://nextjs.org/docs/app/api-reference/config/next-config-js/poweredByHeader)
            *   [ppr](https://nextjs.org/docs/app/api-reference/config/next-config-js/ppr)
            *   [productionBrowserSourceMaps](https://nextjs.org/docs/app/api-reference/config/next-config-js/productionBrowserSourceMaps)
            *   [reactCompiler](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler)
            *   [reactMaxHeadersLength](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactMaxHeadersLength)
            *   [reactStrictMode](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactStrictMode)
            *   [redirects](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects)
            *   [rewrites](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites)
            *   [sassOptions](https://nextjs.org/docs/app/api-reference/config/next-config-js/sassOptions)
            *   [serverActions](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions)
            *   [serverComponentsHmrCache](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverComponentsHmrCache)
            *   [serverExternalPackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverExternalPackages)
            *   [staleTimes](https://nextjs.org/docs/app/api-reference/config/next-config-js/staleTimes)
            *   [staticGeneration*](https://nextjs.org/docs/app/api-reference/config/next-config-js/staticGeneration)
            *   [taint](https://nextjs.org/docs/app/api-reference/config/next-config-js/taint)
            *   [trailingSlash](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash)
            *   [transpilePackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
            *   [turbopack](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack)
            *   [turbopackPersistentCaching](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackPersistentCaching)
            *   [typedRoutes](https://nextjs.org/docs/app/api-reference/config/next-config-js/typedRoutes)
            *   [typescript](https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript)
            *   [urlImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/urlImports)
            *   [useCache](https://nextjs.org/docs/app/api-reference/config/next-config-js/useCache)
            *   [useLightningcss](https://nextjs.org/docs/app/api-reference/config/next-config-js/useLightningcss)
            *   [viewTransition](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition)
            *   [webpack](https://nextjs.org/docs/app/api-reference/config/next-config-js/webpack)
            *   [webVitalsAttribution](https://nextjs.org/docs/app/api-reference/config/next-config-js/webVitalsAttribution)

        *   [TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript)
        *   [ESLint](https://nextjs.org/docs/app/api-reference/config/eslint)

    *   [CLI](https://nextjs.org/docs/app/api-reference/cli)

        *   [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
        *   [next CLI](https://nextjs.org/docs/app/api-reference/cli/next)

    *   [Edge Runtime](https://nextjs.org/docs/app/api-reference/edge)
    *   [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack)

*   [Getting Started](https://nextjs.org/docs/pages/getting-started)

    *   [Installation](https://nextjs.org/docs/pages/getting-started/installation)
    *   [Project Structure](https://nextjs.org/docs/pages/getting-started/project-structure)
    *   [Images](https://nextjs.org/docs/pages/getting-started/images)
    *   [Fonts](https://nextjs.org/docs/pages/getting-started/fonts)
    *   [CSS](https://nextjs.org/docs/pages/getting-started/css)
    *   [Deploying](https://nextjs.org/docs/pages/getting-started/deploying)

*   [Guides](https://nextjs.org/docs/pages/guides)

    *   [AMP](https://nextjs.org/docs/pages/guides/amp)
    *   [Analytics](https://nextjs.org/docs/pages/guides/analytics)
    *   [Authentication](https://nextjs.org/docs/pages/guides/authentication)
    *   [Babel](https://nextjs.org/docs/pages/guides/babel)
    *   [CI Build Caching](https://nextjs.org/docs/pages/guides/ci-build-caching)
    *   [Content Security Policy](https://nextjs.org/docs/pages/guides/content-security-policy)
    *   [CSS-in-JS](https://nextjs.org/docs/pages/guides/css-in-js)
    *   [Custom Server](https://nextjs.org/docs/pages/guides/custom-server)
    *   [Debugging](https://nextjs.org/docs/pages/guides/debugging)
    *   [Draft Mode](https://nextjs.org/docs/pages/guides/draft-mode)
    *   [Environment Variables](https://nextjs.org/docs/pages/guides/environment-variables)
    *   [Forms](https://nextjs.org/docs/pages/guides/forms)
    *   [ISR](https://nextjs.org/docs/pages/guides/incremental-static-regeneration)
    *   [Instrumentation](https://nextjs.org/docs/pages/guides/instrumentation)
    *   [Internationalization](https://nextjs.org/docs/pages/guides/internationalization)
    *   [Lazy Loading](https://nextjs.org/docs/pages/guides/lazy-loading)
    *   [MDX](https://nextjs.org/docs/pages/guides/mdx)
    *   [Migrating](https://nextjs.org/docs/pages/guides/migrating)

        *   [App Router](https://nextjs.org/docs/pages/guides/migrating/app-router-migration)
        *   [Create React App](https://nextjs.org/docs/pages/guides/migrating/from-create-react-app)
        *   [Vite](https://nextjs.org/docs/pages/guides/migrating/from-vite)

    *   [Multi-Zones](https://nextjs.org/docs/pages/guides/multi-zones)
    *   [OpenTelemetry](https://nextjs.org/docs/pages/guides/open-telemetry)
    *   [Package Bundling](https://nextjs.org/docs/pages/guides/package-bundling)
    *   [PostCSS](https://nextjs.org/docs/pages/guides/post-css)
    *   [Preview Mode](https://nextjs.org/docs/pages/guides/preview-mode)
    *   [Production](https://nextjs.org/docs/pages/guides/production-checklist)
    *   [Redirecting](https://nextjs.org/docs/pages/guides/redirecting)
    *   [Sass](https://nextjs.org/docs/pages/guides/sass)
    *   [Scripts](https://nextjs.org/docs/pages/guides/scripts)
    *   [Self-Hosting](https://nextjs.org/docs/pages/guides/self-hosting)
    *   [Static Exports](https://nextjs.org/docs/pages/guides/static-exports)
    *   [Tailwind CSS](https://nextjs.org/docs/pages/guides/tailwind-v3-css)
    *   [Testing](https://nextjs.org/docs/pages/guides/testing)

        *   [Cypress](https://nextjs.org/docs/pages/guides/testing/cypress)
        *   [Jest](https://nextjs.org/docs/pages/guides/testing/jest)
        *   [Playwright](https://nextjs.org/docs/pages/guides/testing/playwright)
        *   [Vitest](https://nextjs.org/docs/pages/guides/testing/vitest)

    *   [Third Party Libraries](https://nextjs.org/docs/pages/guides/third-party-libraries)
    *   [Upgrading](https://nextjs.org/docs/pages/guides/upgrading)

        *   [Codemods](https://nextjs.org/docs/pages/guides/upgrading/codemods)
        *   [Version 10](https://nextjs.org/docs/pages/guides/upgrading/version-10)
        *   [Version 11](https://nextjs.org/docs/pages/guides/upgrading/version-11)
        *   [Version 12](https://nextjs.org/docs/pages/guides/upgrading/version-12)
        *   [Version 13](https://nextjs.org/docs/pages/guides/upgrading/version-13)
        *   [Version 14](https://nextjs.org/docs/pages/guides/upgrading/version-14)
        *   [Version 9](https://nextjs.org/docs/pages/guides/upgrading/version-9)

*   [Building Your Application](https://nextjs.org/docs/pages/building-your-application)

    *   [Routing](https://nextjs.org/docs/pages/building-your-application/routing)

        *   [Pages and Layouts](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)
        *   [Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
        *   [Linking and Navigating](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)
        *   [Custom App](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)
        *   [Custom Document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)
        *   [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
        *   [Custom Errors](https://nextjs.org/docs/pages/building-your-application/routing/custom-error)

    *   [Rendering](https://nextjs.org/docs/pages/building-your-application/rendering)

        *   [Server-side Rendering (SSR)](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)
        *   [Static Site Generation (SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
        *   [Automatic Static Optimization](https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization)
        *   [Client-side Rendering (CSR)](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering)

    *   [Data Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching)

        *   [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)
        *   [getStaticPaths](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths)
        *   [Forms and Mutations](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations)
        *   [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)
        *   [Client-side Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side)

    *   [Configuring](https://nextjs.org/docs/pages/building-your-application/configuring)

        *   [Error Handling](https://nextjs.org/docs/pages/building-your-application/configuring/error-handling)

*   [API Reference](https://nextjs.org/docs/pages/api-reference)

    *   [Components](https://nextjs.org/docs/pages/api-reference/components)

        *   [Font](https://nextjs.org/docs/pages/api-reference/components/font)
        *   [Form](https://nextjs.org/docs/pages/api-reference/components/form)
        *   [Head](https://nextjs.org/docs/pages/api-reference/components/head)
        *   [Image](https://nextjs.org/docs/pages/api-reference/components/image)
        *   [Image (Legacy)](https://nextjs.org/docs/pages/api-reference/components/image-legacy)
        *   [Link](https://nextjs.org/docs/pages/api-reference/components/link)
        *   [Script](https://nextjs.org/docs/pages/api-reference/components/script)

    *   [File-system conventions](https://nextjs.org/docs/pages/api-reference/file-conventions)

        *   [instrumentation.js](https://nextjs.org/docs/pages/api-reference/file-conventions/instrumentation)
        *   [Middleware](https://nextjs.org/docs/pages/api-reference/file-conventions/middleware)
        *   [public](https://nextjs.org/docs/pages/api-reference/file-conventions/public-folder)
        *   [src Directory](https://nextjs.org/docs/pages/api-reference/file-conventions/src-folder)

    *   [Functions](https://nextjs.org/docs/pages/api-reference/functions)

        *   [getInitialProps](https://nextjs.org/docs/pages/api-reference/functions/get-initial-props)
        *   [getServerSideProps](https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props)
        *   [getStaticPaths](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths)
        *   [getStaticProps](https://nextjs.org/docs/pages/api-reference/functions/get-static-props)
        *   [NextRequest](https://nextjs.org/docs/pages/api-reference/functions/next-request)
        *   [NextResponse](https://nextjs.org/docs/pages/api-reference/functions/next-response)
        *   [useAmp](https://nextjs.org/docs/pages/api-reference/functions/use-amp)
        *   [useReportWebVitals](https://nextjs.org/docs/pages/api-reference/functions/use-report-web-vitals)
        *   [useRouter](https://nextjs.org/docs/pages/api-reference/functions/use-router)
        *   [userAgent](https://nextjs.org/docs/pages/api-reference/functions/userAgent)

    *   [Configuration](https://nextjs.org/docs/pages/api-reference/config)

        *   [next.config.js Options](https://nextjs.org/docs/pages/api-reference/config/next-config-js)

            *   [allowedDevOrigins](https://nextjs.org/docs/pages/api-reference/config/next-config-js/allowedDevOrigins)
            *   [assetPrefix](https://nextjs.org/docs/pages/api-reference/config/next-config-js/assetPrefix)
            *   [basePath](https://nextjs.org/docs/pages/api-reference/config/next-config-js/basePath)
            *   [bundlePagesRouterDependencies](https://nextjs.org/docs/pages/api-reference/config/next-config-js/bundlePagesRouterDependencies)
            *   [compress](https://nextjs.org/docs/pages/api-reference/config/next-config-js/compress)
            *   [crossOrigin](https://nextjs.org/docs/pages/api-reference/config/next-config-js/crossOrigin)
            *   [devIndicators](https://nextjs.org/docs/pages/api-reference/config/next-config-js/devIndicators)
            *   [distDir](https://nextjs.org/docs/pages/api-reference/config/next-config-js/distDir)
            *   [env](https://nextjs.org/docs/pages/api-reference/config/next-config-js/env)
            *   [eslint](https://nextjs.org/docs/pages/api-reference/config/next-config-js/eslint)
            *   [exportPathMap](https://nextjs.org/docs/pages/api-reference/config/next-config-js/exportPathMap)
            *   [generateBuildId](https://nextjs.org/docs/pages/api-reference/config/next-config-js/generateBuildId)
            *   [generateEtags](https://nextjs.org/docs/pages/api-reference/config/next-config-js/generateEtags)
            *   [headers](https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers)
            *   [httpAgentOptions](https://nextjs.org/docs/pages/api-reference/config/next-config-js/httpAgentOptions)
            *   [images](https://nextjs.org/docs/pages/api-reference/config/next-config-js/images)
            *   [onDemandEntries](https://nextjs.org/docs/pages/api-reference/config/next-config-js/onDemandEntries)
            *   [optimizePackageImports](https://nextjs.org/docs/pages/api-reference/config/next-config-js/optimizePackageImports)
            *   [output](https://nextjs.org/docs/pages/api-reference/config/next-config-js/output)
            *   [pageExtensions](https://nextjs.org/docs/pages/api-reference/config/next-config-js/pageExtensions)
            *   [poweredByHeader](https://nextjs.org/docs/pages/api-reference/config/next-config-js/poweredByHeader)
            *   [productionBrowserSourceMaps](https://nextjs.org/docs/pages/api-reference/config/next-config-js/productionBrowserSourceMaps)
            *   [reactStrictMode](https://nextjs.org/docs/pages/api-reference/config/next-config-js/reactStrictMode)
            *   [redirects](https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects)
            *   [rewrites](https://nextjs.org/docs/pages/api-reference/config/next-config-js/rewrites)
            *   [Runtime Config](https://nextjs.org/docs/pages/api-reference/config/next-config-js/runtime-configuration)
            *   [serverExternalPackages](https://nextjs.org/docs/pages/api-reference/config/next-config-js/serverExternalPackages)
            *   [trailingSlash](https://nextjs.org/docs/pages/api-reference/config/next-config-js/trailingSlash)
            *   [transpilePackages](https://nextjs.org/docs/pages/api-reference/config/next-config-js/transpilePackages)
            *   [turbo](https://nextjs.org/docs/pages/api-reference/config/next-config-js/turbo)
            *   [typescript](https://nextjs.org/docs/pages/api-reference/config/next-config-js/typescript)
            *   [urlImports](https://nextjs.org/docs/pages/api-reference/config/next-config-js/urlImports)
            *   [useLightningcss](https://nextjs.org/docs/pages/api-reference/config/next-config-js/useLightningcss)
            *   [webpack](https://nextjs.org/docs/pages/api-reference/config/next-config-js/webpack)
            *   [webVitalsAttribution](https://nextjs.org/docs/pages/api-reference/config/next-config-js/webVitalsAttribution)

        *   [TypeScript](https://nextjs.org/docs/pages/api-reference/config/typescript)
        *   [ESLint](https://nextjs.org/docs/pages/api-reference/config/eslint)

    *   [CLI](https://nextjs.org/docs/pages/api-reference/cli)

        *   [create-next-app CLI](https://nextjs.org/docs/pages/api-reference/cli/create-next-app)
        *   [next CLI](https://nextjs.org/docs/pages/api-reference/cli/next)

    *   [Edge Runtime](https://nextjs.org/docs/pages/api-reference/edge)
    *   [Turbopack](https://nextjs.org/docs/pages/api-reference/turbopack)

*   [Architecture](https://nextjs.org/docs/architecture)

    *   [Accessibility](https://nextjs.org/docs/architecture/accessibility)
    *   [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh)
    *   [Next.js Compiler](https://nextjs.org/docs/architecture/nextjs-compiler)
    *   [Supported Browsers](https://nextjs.org/docs/architecture/supported-browsers)

*   [Community](https://nextjs.org/docs/community)

    *   [Contribution Guide](https://nextjs.org/docs/community/contribution-guide)
    *   [Rspack](https://nextjs.org/docs/community/rspack)

Using App Router

Features available in /app

Using Latest Version

15.5.2

*   [Getting Started](https://nextjs.org/docs/app/getting-started)

    *   [Installation](https://nextjs.org/docs/app/getting-started/installation)
    *   [Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)
    *   [Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
    *   [Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating)
    *   [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
    *   [Partial Prerendering](https://nextjs.org/docs/app/getting-started/partial-prerendering)
    *   [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
    *   [Updating Data](https://nextjs.org/docs/app/getting-started/updating-data)
    *   [Caching and Revalidating](https://nextjs.org/docs/app/getting-started/caching-and-revalidating)
    *   [Error Handling](https://nextjs.org/docs/app/getting-started/error-handling)
    *   [CSS](https://nextjs.org/docs/app/getting-started/css)
    *   [Image Optimization](https://nextjs.org/docs/app/getting-started/images)
    *   [Font Optimization](https://nextjs.org/docs/app/getting-started/fonts)
    *   [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
    *   [Route Handlers and Middleware](https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware)
    *   [Deploying](https://nextjs.org/docs/app/getting-started/deploying)
    *   [Upgrading](https://nextjs.org/docs/app/getting-started/upgrading)

*   [Guides](https://nextjs.org/docs/app/guides)

    *   [Analytics](https://nextjs.org/docs/app/guides/analytics)
    *   [Authentication](https://nextjs.org/docs/app/guides/authentication)
    *   [Backend for Frontend](https://nextjs.org/docs/app/guides/backend-for-frontend)
    *   [Caching](https://nextjs.org/docs/app/guides/caching)
    *   [CI Build Caching](https://nextjs.org/docs/app/guides/ci-build-caching)
    *   [Content Security Policy](https://nextjs.org/docs/app/guides/content-security-policy)
    *   [CSS-in-JS](https://nextjs.org/docs/app/guides/css-in-js)
    *   [Custom Server](https://nextjs.org/docs/app/guides/custom-server)
    *   [Data Security](https://nextjs.org/docs/app/guides/data-security)
    *   [Debugging](https://nextjs.org/docs/app/guides/debugging)
    *   [Draft Mode](https://nextjs.org/docs/app/guides/draft-mode)
    *   [Environment Variables](https://nextjs.org/docs/app/guides/environment-variables)
    *   [Forms](https://nextjs.org/docs/app/guides/forms)
    *   [ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration)
    *   [Instrumentation](https://nextjs.org/docs/app/guides/instrumentation)
    *   [Internationalization](https://nextjs.org/docs/app/guides/internationalization)
    *   [JSON-LD](https://nextjs.org/docs/app/guides/json-ld)
    *   [Lazy Loading](https://nextjs.org/docs/app/guides/lazy-loading)
    *   [Development Environment](https://nextjs.org/docs/app/guides/local-development)
    *   [MDX](https://nextjs.org/docs/app/guides/mdx)
    *   [Memory Usage](https://nextjs.org/docs/app/guides/memory-usage)
    *   [Migrating](https://nextjs.org/docs/app/guides/migrating)

        *   [App Router](https://nextjs.org/docs/app/guides/migrating/app-router-migration)
        *   [Create React App](https://nextjs.org/docs/app/guides/migrating/from-create-react-app)
        *   [Vite](https://nextjs.org/docs/app/guides/migrating/from-vite)

    *   [Multi-tenant](https://nextjs.org/docs/app/guides/multi-tenant)
    *   [Multi-zones](https://nextjs.org/docs/app/guides/multi-zones)
    *   [OpenTelemetry](https://nextjs.org/docs/app/guides/open-telemetry)
    *   [Package Bundling](https://nextjs.org/docs/app/guides/package-bundling)
    *   [Prefetching](https://nextjs.org/docs/app/guides/prefetching)
    *   [Production](https://nextjs.org/docs/app/guides/production-checklist)
    *   [PWAs](https://nextjs.org/docs/app/guides/progressive-web-apps)
    *   [Redirecting](https://nextjs.org/docs/app/guides/redirecting)
    *   [Sass](https://nextjs.org/docs/app/guides/sass)
    *   [Scripts](https://nextjs.org/docs/app/guides/scripts)
    *   [Self-Hosting](https://nextjs.org/docs/app/guides/self-hosting)
    *   [SPAs](https://nextjs.org/docs/app/guides/single-page-applications)
    *   [Static Exports](https://nextjs.org/docs/app/guides/static-exports)
    *   [Tailwind CSS v3](https://nextjs.org/docs/app/guides/tailwind-v3-css)
    *   [Testing](https://nextjs.org/docs/app/guides/testing)

        *   [Cypress](https://nextjs.org/docs/app/guides/testing/cypress)
        *   [Jest](https://nextjs.org/docs/app/guides/testing/jest)
        *   [Playwright](https://nextjs.org/docs/app/guides/testing/playwright)
        *   [Vitest](https://nextjs.org/docs/app/guides/testing/vitest)

    *   [Third Party Libraries](https://nextjs.org/docs/app/guides/third-party-libraries)
    *   [Upgrading](https://nextjs.org/docs/app/guides/upgrading)

        *   [Codemods](https://nextjs.org/docs/app/guides/upgrading/codemods)
        *   [Version 14](https://nextjs.org/docs/app/guides/upgrading/version-14)
        *   [Version 15](https://nextjs.org/docs/app/guides/upgrading/version-15)

    *   [Videos](https://nextjs.org/docs/app/guides/videos)

*   [API Reference](https://nextjs.org/docs/app/api-reference)

    *   [Directives](https://nextjs.org/docs/app/api-reference/directives)

        *   [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache)
        *   [use client](https://nextjs.org/docs/app/api-reference/directives/use-client)
        *   [use server](https://nextjs.org/docs/app/api-reference/directives/use-server)

    *   [Components](https://nextjs.org/docs/app/api-reference/components)

        *   [Font](https://nextjs.org/docs/app/api-reference/components/font)
        *   [Form Component](https://nextjs.org/docs/app/api-reference/components/form)
        *   [Image Component](https://nextjs.org/docs/app/api-reference/components/image)
        *   [Link Component](https://nextjs.org/docs/app/api-reference/components/link)
        *   [Script Component](https://nextjs.org/docs/app/api-reference/components/script)

    *   [File-system conventions](https://nextjs.org/docs/app/api-reference/file-conventions)

        *   [default.js](https://nextjs.org/docs/app/api-reference/file-conventions/default)
        *   [Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
        *   [error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error)
        *   [forbidden.js](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
        *   [instrumentation.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation)
        *   [instrumentation-client.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client)
        *   [Intercepting Routes](https://nextjs.org/docs/app/api-reference/file-conventions/intercepting-routes)
        *   [layout.js](https://nextjs.org/docs/app/api-reference/file-conventions/layout)
        *   [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading)
        *   [mdx-components.js](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components)
        *   [middleware.js](https://nextjs.org/docs/app/api-reference/file-conventions/middleware)
        *   [not-found.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
        *   [page.js](https://nextjs.org/docs/app/api-reference/file-conventions/page)
        *   [Parallel Routes](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes)
        *   [public](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder)
        *   [route.js](https://nextjs.org/docs/app/api-reference/file-conventions/route)
        *   [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups)
        *   [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
        *   [src](https://nextjs.org/docs/app/api-reference/file-conventions/src-folder)
        *   [template.js](https://nextjs.org/docs/app/api-reference/file-conventions/template)
        *   [unauthorized.js](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
        *   [Metadata Files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)

            *   [favicon, icon, and apple-icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
            *   [manifest.json](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest)
            *   [opengraph-image and twitter-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
            *   [robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
            *   [sitemap.xml](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

    *   [Functions](https://nextjs.org/docs/app/api-reference/functions)

        *   [after](https://nextjs.org/docs/app/api-reference/functions/after)
        *   [cacheLife](https://nextjs.org/docs/app/api-reference/functions/cacheLife)
        *   [cacheTag](https://nextjs.org/docs/app/api-reference/functions/cacheTag)
        *   [connection](https://nextjs.org/docs/app/api-reference/functions/connection)
        *   [cookies](https://nextjs.org/docs/app/api-reference/functions/cookies)
        *   [draftMode](https://nextjs.org/docs/app/api-reference/functions/draft-mode)
        *   [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch)
        *   [forbidden](https://nextjs.org/docs/app/api-reference/functions/forbidden)
        *   [generateImageMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata)
        *   [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
        *   [generateSitemaps](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps)
        *   [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
        *   [generateViewport](https://nextjs.org/docs/app/api-reference/functions/generate-viewport)
        *   [headers](https://nextjs.org/docs/app/api-reference/functions/headers)
        *   [ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response)
        *   [NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-request)
        *   [NextResponse](https://nextjs.org/docs/app/api-reference/functions/next-response)
        *   [notFound](https://nextjs.org/docs/app/api-reference/functions/not-found)
        *   [permanentRedirect](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect)
        *   [redirect](https://nextjs.org/docs/app/api-reference/functions/redirect)
        *   [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
        *   [revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
        *   [unauthorized](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
        *   [unstable_cache](https://nextjs.org/docs/app/api-reference/functions/unstable_cache)
        *   [unstable_noStore](https://nextjs.org/docs/app/api-reference/functions/unstable_noStore)
        *   [unstable_rethrow](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
        *   [useLinkStatus](https://nextjs.org/docs/app/api-reference/functions/use-link-status)
        *   [useParams](https://nextjs.org/docs/app/api-reference/functions/use-params)
        *   [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
        *   [useReportWebVitals](https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals)
        *   [useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router)
        *   [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
        *   [useSelectedLayoutSegment](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment)
        *   [useSelectedLayoutSegments](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments)
        *   [userAgent](https://nextjs.org/docs/app/api-reference/functions/userAgent)

    *   [Configuration](https://nextjs.org/docs/app/api-reference/config)

        *   [next.config.js](https://nextjs.org/docs/app/api-reference/config/next-config-js)

            *   [allowedDevOrigins](https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins)
            *   [appDir](https://nextjs.org/docs/app/api-reference/config/next-config-js/appDir)
            *   [assetPrefix](https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix)
            *   [authInterrupts](https://nextjs.org/docs/app/api-reference/config/next-config-js/authInterrupts)
            *   [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
            *   [browserDebugInfoInTerminal](https://nextjs.org/docs/app/api-reference/config/next-config-js/browserDebugInfoInTerminal)
            *   [cacheComponents](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents)
            *   [cacheLife](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheLife)
            *   [compress](https://nextjs.org/docs/app/api-reference/config/next-config-js/compress)
            *   [crossOrigin](https://nextjs.org/docs/app/api-reference/config/next-config-js/crossOrigin)
            *   [cssChunking](https://nextjs.org/docs/app/api-reference/config/next-config-js/cssChunking)
            *   [devIndicators](https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators)
            *   [distDir](https://nextjs.org/docs/app/api-reference/config/next-config-js/distDir)
            *   [env](https://nextjs.org/docs/app/api-reference/config/next-config-js/env)
            *   [eslint](https://nextjs.org/docs/app/api-reference/config/next-config-js/eslint)
            *   [expireTime](https://nextjs.org/docs/app/api-reference/config/next-config-js/expireTime)
            *   [exportPathMap](https://nextjs.org/docs/app/api-reference/config/next-config-js/exportPathMap)
            *   [generateBuildId](https://nextjs.org/docs/app/api-reference/config/next-config-js/generateBuildId)
            *   [generateEtags](https://nextjs.org/docs/app/api-reference/config/next-config-js/generateEtags)
            *   [headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers)
            *   [htmlLimitedBots](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots)
            *   [httpAgentOptions](https://nextjs.org/docs/app/api-reference/config/next-config-js/httpAgentOptions)
            *   [images](https://nextjs.org/docs/app/api-reference/config/next-config-js/images)
            *   [cacheHandler](https://nextjs.org/docs/app/api-reference/config/next-config-js/incrementalCacheHandlerPath)
            *   [inlineCss](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss)
            *   [logging](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)
            *   [mdxRs](https://nextjs.org/docs/app/api-reference/config/next-config-js/mdxRs)
            *   [onDemandEntries](https://nextjs.org/docs/app/api-reference/config/next-config-js/onDemandEntries)
            *   [optimizePackageImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports)
            *   [output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)
            *   [pageExtensions](https://nextjs.org/docs/app/api-reference/config/next-config-js/pageExtensions)
            *   [poweredByHeader](https://nextjs.org/docs/app/api-reference/config/next-config-js/poweredByHeader)
            *   [ppr](https://nextjs.org/docs/app/api-reference/config/next-config-js/ppr)
            *   [productionBrowserSourceMaps](https://nextjs.org/docs/app/api-reference/config/next-config-js/productionBrowserSourceMaps)
            *   [reactCompiler](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler)
            *   [reactMaxHeadersLength](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactMaxHeadersLength)
            *   [reactStrictMode](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactStrictMode)
            *   [redirects](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects)
            *   [rewrites](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites)
            *   [sassOptions](https://nextjs.org/docs/app/api-reference/config/next-config-js/sassOptions)
            *   [serverActions](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions)
            *   [serverComponentsHmrCache](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverComponentsHmrCache)
            *   [serverExternalPackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverExternalPackages)
            *   [staleTimes](https://nextjs.org/docs/app/api-reference/config/next-config-js/staleTimes)
            *   [staticGeneration*](https://nextjs.org/docs/app/api-reference/config/next-config-js/staticGeneration)
            *   [taint](https://nextjs.org/docs/app/api-reference/config/next-config-js/taint)
            *   [trailingSlash](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash)
            *   [transpilePackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
            *   [turbopack](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack)
            *   [turbopackPersistentCaching](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackPersistentCaching)
            *   [typedRoutes](https://nextjs.org/docs/app/api-reference/config/next-config-js/typedRoutes)
            *   [typescript](https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript)
            *   [urlImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/urlImports)
            *   [useCache](https://nextjs.org/docs/app/api-reference/config/next-config-js/useCache)
            *   [useLightningcss](https://nextjs.org/docs/app/api-reference/config/next-config-js/useLightningcss)
            *   [viewTransition](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition)
            *   [webpack](https://nextjs.org/docs/app/api-reference/config/next-config-js/webpack)
            *   [webVitalsAttribution](https://nextjs.org/docs/app/api-reference/config/next-config-js/webVitalsAttribution)

        *   [TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript)
        *   [ESLint](https://nextjs.org/docs/app/api-reference/config/eslint)

    *   [CLI](https://nextjs.org/docs/app/api-reference/cli)

        *   [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
        *   [next CLI](https://nextjs.org/docs/app/api-reference/cli/next)

    *   [Edge Runtime](https://nextjs.org/docs/app/api-reference/edge)
    *   [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack)

*   [Getting Started](https://nextjs.org/docs/pages/getting-started)

    *   [Installation](https://nextjs.org/docs/pages/getting-started/installation)
    *   [Project Structure](https://nextjs.org/docs/pages/getting-started/project-structure)
    *   [Images](https://nextjs.org/docs/pages/getting-started/images)
    *   [Fonts](https://nextjs.org/docs/pages/getting-started/fonts)
    *   [CSS](https://nextjs.org/docs/pages/getting-started/css)
    *   [Deploying](https://nextjs.org/docs/pages/getting-started/deploying)

*   [Guides](https://nextjs.org/docs/pages/guides)

    *   [AMP](https://nextjs.org/docs/pages/guides/amp)
    *   [Analytics](https://nextjs.org/docs/pages/guides/analytics)
    *   [Authentication](https://nextjs.org/docs/pages/guides/authentication)
    *   [Babel](https://nextjs.org/docs/pages/guides/babel)
    *   [CI Build Caching](https://nextjs.org/docs/pages/guides/ci-build-caching)
    *   [Content Security Policy](https://nextjs.org/docs/pages/guides/content-security-policy)
    *   [CSS-in-JS](https://nextjs.org/docs/pages/guides/css-in-js)
    *   [Custom Server](https://nextjs.org/docs/pages/guides/custom-server)
    *   [Debugging](https://nextjs.org/docs/pages/guides/debugging)
    *   [Draft Mode](https://nextjs.org/docs/pages/guides/draft-mode)
    *   [Environment Variables](https://nextjs.org/docs/pages/guides/environment-variables)
    *   [Forms](https://nextjs.org/docs/pages/guides/forms)
    *   [ISR](https://nextjs.org/docs/pages/guides/incremental-static-regeneration)
    *   [Instrumentation](https://nextjs.org/docs/pages/guides/instrumentation)
    *   [Internationalization](https://nextjs.org/docs/pages/guides/internationalization)
    *   [Lazy Loading](https://nextjs.org/docs/pages/guides/lazy-loading)
    *   [MDX](https://nextjs.org/docs/pages/guides/mdx)
    *   [Migrating](https://nextjs.org/docs/pages/guides/migrating)

        *   [App Router](https://nextjs.org/docs/pages/guides/migrating/app-router-migration)
        *   [Create React App](https://nextjs.org/docs/pages/guides/migrating/from-create-react-app)
        *   [Vite](https://nextjs.org/docs/pages/guides/migrating/from-vite)

    *   [Multi-Zones](https://nextjs.org/docs/pages/guides/multi-zones)
    *   [OpenTelemetry](https://nextjs.org/docs/pages/guides/open-telemetry)
    *   [Package Bundling](https://nextjs.org/docs/pages/guides/package-bundling)
    *   [PostCSS](https://nextjs.org/docs/pages/guides/post-css)
    *   [Preview Mode](https://nextjs.org/docs/pages/guides/preview-mode)
    *   [Production](https://nextjs.org/docs/pages/guides/production-checklist)
    *   [Redirecting](https://nextjs.org/docs/pages/guides/redirecting)
    *   [Sass](https://nextjs.org/docs/pages/guides/sass)
    *   [Scripts](https://nextjs.org/docs/pages/guides/scripts)
    *   [Self-Hosting](https://nextjs.org/docs/pages/guides/self-hosting)
    *   [Static Exports](https://nextjs.org/docs/pages/guides/static-exports)
    *   [Tailwind CSS](https://nextjs.org/docs/pages/guides/tailwind-v3-css)
    *   [Testing](https://nextjs.org/docs/pages/guides/testing)

        *   [Cypress](https://nextjs.org/docs/pages/guides/testing/cypress)
        *   [Jest](https://nextjs.org/docs/pages/guides/testing/jest)
        *   [Playwright](https://nextjs.org/docs/pages/guides/testing/playwright)
        *   [Vitest](https://nextjs.org/docs/pages/guides/testing/vitest)

    *   [Third Party Libraries](https://nextjs.org/docs/pages/guides/third-party-libraries)
    *   [Upgrading](https://nextjs.org/docs/pages/guides/upgrading)

        *   [Codemods](https://nextjs.org/docs/pages/guides/upgrading/codemods)
        *   [Version 10](https://nextjs.org/docs/pages/guides/upgrading/version-10)
        *   [Version 11](https://nextjs.org/docs/pages/guides/upgrading/version-11)
        *   [Version 12](https://nextjs.org/docs/pages/guides/upgrading/version-12)
        *   [Version 13](https://nextjs.org/docs/pages/guides/upgrading/version-13)
        *   [Version 14](https://nextjs.org/docs/pages/guides/upgrading/version-14)
        *   [Version 9](https://nextjs.org/docs/pages/guides/upgrading/version-9)

*   [Building Your Application](https://nextjs.org/docs/pages/building-your-application)

    *   [Routing](https://nextjs.org/docs/pages/building-your-application/routing)

        *   [Pages and Layouts](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)
        *   [Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
        *   [Linking and Navigating](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)
        *   [Custom App](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)
        *   [Custom Document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)
        *   [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
        *   [Custom Errors](https://nextjs.org/docs/pages/building-your-application/routing/custom-error)

    *   [Rendering](https://nextjs.org/docs/pages/building-your-application/rendering)

        *   [Server-side Rendering (SSR)](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)
        *   [Static Site Generation (SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
        *   [Automatic Static Optimization](https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization)
        *   [Client-side Rendering (CSR)](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering)

    *   [Data Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching)

        *   [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)
        *   [getStaticPaths](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths)
        *   [Forms and Mutations](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations)
        *   [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)
        *   [Client-side Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side)

    *   [Configuring](https://nextjs.org/docs/pages/building-your-application/configuring)

        *   [Error Handling](https://nextjs.org/docs/pages/building-your-application/configuring/error-handling)

*   [API Reference](https://nextjs.org/docs/pages/api-reference)

    *   [Components](https://nextjs.org/docs/pages/api-reference/components)

        *   [Font](https://nextjs.org/docs/pages/api-reference/components/font)
        *   [Form](https://nextjs.org/docs/pages/api-reference/components/form)
        *   [Head](https://nextjs.org/docs/pages/api-reference/components/head)
        *   [Image](https://nextjs.org/docs/pages/api-reference/components/image)
        *   [Image (Legacy)](https://nextjs.org/docs/pages/api-reference/components/image-legacy)
        *   [Link](https://nextjs.org/docs/pages/api-reference/components/link)
        *   [Script](https://nextjs.org/docs/pages/api-reference/components/script)

    *   [File-system conventions](https://nextjs.org/docs/pages/api-reference/file-conventions)

        *   [instrumentation.js](https://nextjs.org/docs/pages/api-reference/file-conventions/instrumentation)
        *   [Middleware](https://nextjs.org/docs/pages/api-reference/file-conventions/middleware)
        *   [public](https://nextjs.org/docs/pages/api-reference/file-conventions/public-folder)
        *   [src Directory](https://nextjs.org/docs/pages/api-reference/file-conventions/src-folder)

    *   [Functions](https://nextjs.org/docs/pages/api-reference/functions)

        *   [getInitialProps](https://nextjs.org/docs/pages/api-reference/functions/get-initial-props)
        *   [getServerSideProps](https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props)
        *   [getStaticPaths](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths)
        *   [getStaticProps](https://nextjs.org/docs/pages/api-reference/functions/get-static-props)
        *   [NextRequest](https://nextjs.org/docs/pages/api-reference/functions/next-request)
        *   [NextResponse](https://nextjs.org/docs/pages/api-reference/functions/next-response)
        *   [useAmp](https://nextjs.org/docs/pages/api-reference/functions/use-amp)
        *   [useReportWebVitals](https://nextjs.org/docs/pages/api-reference/functions/use-report-web-vitals)
        *   [useRouter](https://nextjs.org/docs/pages/api-reference/functions/use-router)
        *   [userAgent](https://nextjs.org/docs/pages/api-reference/functions/userAgent)

    *   [Configuration](https://nextjs.org/docs/pages/api-reference/config)

        *   [next.config.js Options](https://nextjs.org/docs/pages/api-reference/config/next-config-js)

            *   [allowedDevOrigins](https://nextjs.org/docs/pages/api-reference/config/next-config-js/allowedDevOrigins)
            *   [assetPrefix](https://nextjs.org/docs/pages/api-reference/config/next-config-js/assetPrefix)
            *   [basePath](https://nextjs.org/docs/pages/api-reference/config/next-config-js/basePath)
            *   [bundlePagesRouterDependencies](https://nextjs.org/docs/pages/api-reference/config/next-config-js/bundlePagesRouterDependencies)
            *   [compress](https://nextjs.org/docs/pages/api-reference/config/next-config-js/compress)
            *   [crossOrigin](https://nextjs.org/docs/pages/api-reference/config/next-config-js/crossOrigin)
            *   [devIndicators](https://nextjs.org/docs/pages/api-reference/config/next-config-js/devIndicators)
            *   [distDir](https://nextjs.org/docs/pages/api-reference/config/next-config-js/distDir)
            *   [env](https://nextjs.org/docs/pages/api-reference/config/next-config-js/env)
            *   [eslint](https://nextjs.org/docs/pages/api-reference/config/next-config-js/eslint)
            *   [exportPathMap](https://nextjs.org/docs/pages/api-reference/config/next-config-js/exportPathMap)
            *   [generateBuildId](https://nextjs.org/docs/pages/api-reference/config/next-config-js/generateBuildId)
            *   [generateEtags](https://nextjs.org/docs/pages/api-reference/config/next-config-js/generateEtags)
            *   [headers](https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers)
            *   [httpAgentOptions](https://nextjs.org/docs/pages/api-reference/config/next-config-js/httpAgentOptions)
            *   [images](https://nextjs.org/docs/pages/api-reference/config/next-config-js/images)
            *   [onDemandEntries](https://nextjs.org/docs/pages/api-reference/config/next-config-js/onDemandEntries)
            *   [optimizePackageImports](https://nextjs.org/docs/pages/api-reference/config/next-config-js/optimizePackageImports)
            *   [output](https://nextjs.org/docs/pages/api-reference/config/next-config-js/output)
            *   [pageExtensions](https://nextjs.org/docs/pages/api-reference/config/next-config-js/pageExtensions)
            *   [poweredByHeader](https://nextjs.org/docs/pages/api-reference/config/next-config-js/poweredByHeader)
            *   [productionBrowserSourceMaps](https://nextjs.org/docs/pages/api-reference/config/next-config-js/productionBrowserSourceMaps)
            *   [reactStrictMode](https://nextjs.org/docs/pages/api-reference/config/next-config-js/reactStrictMode)
            *   [redirects](https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects)
            *   [rewrites](https://nextjs.org/docs/pages/api-reference/config/next-config-js/rewrites)
            *   [Runtime Config](https://nextjs.org/docs/pages/api-reference/config/next-config-js/runtime-configuration)
            *   [serverExternalPackages](https://nextjs.org/docs/pages/api-reference/config/next-config-js/serverExternalPackages)
            *   [trailingSlash](https://nextjs.org/docs/pages/api-reference/config/next-config-js/trailingSlash)
            *   [transpilePackages](https://nextjs.org/docs/pages/api-reference/config/next-config-js/transpilePackages)
            *   [turbo](https://nextjs.org/docs/pages/api-reference/config/next-config-js/turbo)
            *   [typescript](https://nextjs.org/docs/pages/api-reference/config/next-config-js/typescript)
            *   [urlImports](https://nextjs.org/docs/pages/api-reference/config/next-config-js/urlImports)
            *   [useLightningcss](https://nextjs.org/docs/pages/api-reference/config/next-config-js/useLightningcss)
            *   [webpack](https://nextjs.org/docs/pages/api-reference/config/next-config-js/webpack)
            *   [webVitalsAttribution](https://nextjs.org/docs/pages/api-reference/config/next-config-js/webVitalsAttribution)

        *   [TypeScript](https://nextjs.org/docs/pages/api-reference/config/typescript)
        *   [ESLint](https://nextjs.org/docs/pages/api-reference/config/eslint)

    *   [CLI](https://nextjs.org/docs/pages/api-reference/cli)

        *   [create-next-app CLI](https://nextjs.org/docs/pages/api-reference/cli/create-next-app)
        *   [next CLI](https://nextjs.org/docs/pages/api-reference/cli/next)

    *   [Edge Runtime](https://nextjs.org/docs/pages/api-reference/edge)
    *   [Turbopack](https://nextjs.org/docs/pages/api-reference/turbopack)

*   [Architecture](https://nextjs.org/docs/architecture)

    *   [Accessibility](https://nextjs.org/docs/architecture/accessibility)
    *   [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh)
    *   [Next.js Compiler](https://nextjs.org/docs/architecture/nextjs-compiler)
    *   [Supported Browsers](https://nextjs.org/docs/architecture/supported-browsers)

*   [Community](https://nextjs.org/docs/community)

    *   [Contribution Guide](https://nextjs.org/docs/community/contribution-guide)
    *   [Rspack](https://nextjs.org/docs/community/rspack)

On this page

*   [Reference](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#reference)
*   [HTTP Methods](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#http-methods)
*   [Parameters](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#parameters)
*   [request (optional)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-optional)
*   [context (optional)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#context-optional)
*   [Route Context Helper](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#route-context-helper)
*   [Examples](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#examples)
*   [Cookies](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cookies)
*   [Headers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#headers)
*   [Revalidating Cached Data](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#revalidating-cached-data)
*   [Redirects](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#redirects)
*   [Dynamic Route Segments](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments)
*   [URL Query Parameters](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#url-query-parameters)
*   [Streaming](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming)
*   [Request Body](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body)
*   [Request Body FormData](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body-formdata)
*   [CORS](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cors)
*   [Webhooks](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#webhooks)
*   [Non-UI Responses](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#non-ui-responses)
*   [Segment Config Options](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#segment-config-options)
*   [Version History](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#version-history)

[Edit this page on GitHub](https://github.com/vercel/next.js/edit/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx)Scroll to top 

[API Reference](https://nextjs.org/docs/app/api-reference)[File-system conventions](https://nextjs.org/docs/app/api-reference/file-conventions)route.js

Copy page

route.js
========

Route Handlers allow you to create custom request handlers for a given route using the Web [Request](https://developer.mozilla.org/docs/Web/API/Request) and [Response](https://developer.mozilla.org/docs/Web/API/Response) APIs.

route.ts

TypeScript

```
export async function GET() {
  return Response.json({ message: 'Hello World' })
}
```

[Reference](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#reference)
---------------------------------------------------------------------------------------------------

### [HTTP Methods](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#http-methods)

A **route** file allows you to create custom request handlers for a given route. The following [HTTP methods](https://developer.mozilla.org/docs/Web/HTTP/Methods) are supported: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`.

route.ts

TypeScript

```
export async function GET(request: Request) {}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request: Request) {}
```

### [Parameters](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#parameters)

#### [`request` (optional)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-optional)

The `request` object is a [NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-request) object, which is an extension of the Web [Request](https://developer.mozilla.org/docs/Web/API/Request) API. `NextRequest` gives you further control over the incoming request, including easily accessing `cookies` and an extended, parsed, URL object `nextUrl`.

route.ts

TypeScript

```
import type { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const url = request.nextUrl
}
```

#### [`context` (optional)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#context-optional)

*   **`params`**: a promise that resolves to an object containing the [dynamic route parameters](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) for the current route.

app/dashboard/[team]/route.ts

TypeScript

```
export async function GET(
  request: Request,
  { params }: { params: Promise<{ team: string }> }
) {
  const { team } = await params
}
```

| Example | URL | `params` |
| --- | --- | --- |
| `app/dashboard/[team]/route.js` | `/dashboard/1` | `Promise<{ team: '1' }>` |
| `app/shop/[tag]/[item]/route.js` | `/shop/1/2` | `Promise<{ tag: '1', item: '2' }>` |
| `app/blog/[...slug]/route.js` | `/blog/1/2` | `Promise<{ slug: ['1', '2'] }>` |

### [Route Context Helper](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#route-context-helper)

You can type the Route Handler context using `RouteContext` to get strongly typed `params` from a route literal. `RouteContext` is a globally available helper.

app/users/[id]/route.ts

TypeScript

```
import type { NextRequest } from 'next/server'
 
export async function GET(_req: NextRequest, ctx: RouteContext<'/users/[id]'>) {
  const { id } = await ctx.params
  return Response.json({ id })
}
```

> **Good to know**
> 
> 
> *   Types are generated during `next dev`, `next build` or `next typegen`.

[Examples](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#examples)
-------------------------------------------------------------------------------------------------

### [Cookies](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cookies)

You can read or set cookies with [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies) from `next/headers`.

route.ts

TypeScript

```
import { cookies } from 'next/headers'
 
export async function GET(request: NextRequest) {
  const cookieStore = await cookies()
 
  const a = cookieStore.get('a')
  const b = cookieStore.set('b', '1')
  const c = cookieStore.delete('c')
}
```

Alternatively, you can return a new `Response` using the [`Set-Cookie`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie) header.

app/api/route.ts

TypeScript

```
import { cookies } from 'next/headers'
 
export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token.value}` },
  })
}
```

You can also use the underlying Web APIs to read cookies from the request ([`NextRequest`](https://nextjs.org/docs/app/api-reference/functions/next-request)):

app/api/route.ts

TypeScript

```
import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
}
```

### [Headers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#headers)

You can read headers with [`headers`](https://nextjs.org/docs/app/api-reference/functions/headers) from `next/headers`.

route.ts

TypeScript

```
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const headersList = await headers()
  const referer = headersList.get('referer')
}
```

This `headers` instance is read-only. To set headers, you need to return a new `Response` with new `headers`.

app/api/route.ts

TypeScript

```
import { headers } from 'next/headers'
 
export async function GET(request: Request) {
  const headersList = await headers()
  const referer = headersList.get('referer')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}
```

You can also use the underlying Web APIs to read headers from the request ([`NextRequest`](https://nextjs.org/docs/app/api-reference/functions/next-request)):

app/api/route.ts

TypeScript

```
import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
}
```

### [Revalidating Cached Data](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#revalidating-cached-data)

You can [revalidate cached data](https://nextjs.org/docs/app/guides/incremental-static-regeneration) using the `revalidate` route segment config option.

app/posts/route.ts

TypeScript

```
export const revalidate = 60
 
export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
 
  return Response.json(posts)
}
```

### [Redirects](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#redirects)

app/api/route.ts

TypeScript

```
import { redirect } from 'next/navigation'
 
export async function GET(request: Request) {
  redirect('https://nextjs.org/')
}
```

### [Dynamic Route Segments](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments)

Route Handlers can use [Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) to create request handlers from dynamic data.

app/items/[slug]/route.ts

TypeScript

```
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params // 'a', 'b', or 'c'
}
```

| Route | Example URL | `params` |
| --- | --- | --- |
| `app/items/[slug]/route.js` | `/items/a` | `Promise<{ slug: 'a' }>` |
| `app/items/[slug]/route.js` | `/items/b` | `Promise<{ slug: 'b' }>` |
| `app/items/[slug]/route.js` | `/items/c` | `Promise<{ slug: 'c' }>` |

### [URL Query Parameters](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#url-query-parameters)

The request object passed to the Route Handler is a `NextRequest` instance, which includes [some additional convenience methods](https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl), such as those for more easily handling query parameters.

app/api/search/route.ts

TypeScript

```
import { type NextRequest } from 'next/server'
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}
```

### [Streaming](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming)

Streaming is commonly used in combination with Large Language Models (LLMs), such as OpenAI, for AI-generated content. Learn more about the [AI SDK](https://sdk.vercel.ai/docs/introduction).

app/api/chat/route.ts

TypeScript

```
import { openai } from '@ai-sdk/openai'
import { StreamingTextResponse, streamText } from 'ai'
 
export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  })
 
  return new StreamingTextResponse(result.toAIStream())
}
```

These abstractions use the Web APIs to create a stream. You can also use the underlying Web APIs directly.

app/api/route.ts

TypeScript

```
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
 
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}
 
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
 
const encoder = new TextEncoder()
 
async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}
 
export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)
 
  return new Response(stream)
}
```

### [Request Body](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body)

You can read the `Request` body using the standard Web API methods:

app/items/route.ts

TypeScript

```
export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}
```

### [Request Body FormData](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body-formdata)

You can read the `FormData` using the `request.formData()` function:

app/items/route.ts

TypeScript

```
export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  return Response.json({ name, email })
}
```

Since `formData` data are all strings, you may want to use [`zod-form-data`](https://www.npmjs.com/zod-form-data) to validate the request and retrieve data in the format you prefer (e.g. `number`).

### [CORS](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cors)

You can set CORS headers for a specific Route Handler using the standard Web API methods:

app/api/route.ts

TypeScript

```
export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
```

> **Good to know**:
> 
> 
> *   To add CORS headers to multiple Route Handlers, you can use [Middleware](https://nextjs.org/docs/app/api-reference/file-conventions/middleware#cors) or the [`next.config.js` file](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers#cors).
> *   Alternatively, see our [CORS example](https://github.com/vercel/examples/blob/main/edge-functions/cors/lib/cors.ts) package.

### [Webhooks](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#webhooks)

You can use a Route Handler to receive webhooks from third-party services:

app/api/route.ts

TypeScript

```
export async function POST(request: Request) {
  try {
    const text = await request.text()
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
  })
}
```

Notably, unlike API Routes with the Pages Router, you do not need to use `bodyParser` to use any additional configuration.

### [Non-UI Responses](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#non-ui-responses)

You can use Route Handlers to return non-UI content. Note that [`sitemap.xml`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generating-a-sitemap-using-code-js-ts), [`robots.txt`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file), [`app icons`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx), and [open graph images](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) all have built-in support.

app/rss.xml/route.ts

TypeScript

```
export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
 
<channel>
  <title>Next.js Documentation</title>
  <link>https://nextjs.org/docs</link>
  <description>The React Framework for the Web</description>
</channel>
 
</rss>`,
    {
      headers: {
        'Content-Type': 'text/xml',
      },
    }
  )
}
```

### [Segment Config Options](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#segment-config-options)

Route Handlers use the same [route segment configuration](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config) as pages and layouts.

app/items/route.ts

TypeScript

```
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
```

See the [API reference](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config) for more details.

[Version History](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#version-history)
---------------------------------------------------------------------------------------------------------------

| Version | Changes |
| --- | --- |
| `v15.0.0-RC` | `context.params` is now a promise. A [codemod](https://nextjs.org/docs/app/guides/upgrading/codemods#150) is available |
| `v15.0.0-RC` | The default caching for `GET` handlers was changed from static to dynamic |
| `v13.2.0` | Route Handlers are introduced. |

[Previous public](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder)[Next Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups)

Was this helpful?

supported.

Send

[](https://vercel.com/home?utm_source=next-site&utm_medium=footer&utm_campaign=next-website "Go to the Vercel website")

[](https://github.com/vercel/next.js)

* * *

[](https://x.com/nextjs)

* * *

[](https://bsky.app/profile/nextjs.org)

#### Resources

[Docs](https://nextjs.org/docs)[Support Policy](https://nextjs.org/support-policy)[Learn](https://nextjs.org/learn)[Showcase](https://nextjs.org/showcase)[Blog](https://nextjs.org/blog)[Team](https://nextjs.org/team)[Analytics](https://vercel.com/analytics?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_api-reference_file-conventions_route)[Next.js Conf](https://nextjs.org/conf)[Previews](https://vercel.com/products/previews?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_api-reference_file-conventions_route)

#### More

[Next.js Commerce](https://vercel.com/templates/next.js/nextjs-commerce?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_api-reference_file-conventions_route)[Contact Sales](https://vercel.com/contact/sales?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_api-reference_file-conventions_route)[Community](https://community.vercel.com/)[GitHub](https://github.com/vercel/next.js)[Releases](https://github.com/vercel/next.js/releases)[Telemetry](https://nextjs.org/telemetry)[Governance](https://nextjs.org/governance)

#### About Vercel

[Next.js + Vercel](https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_api-reference_file-conventions_route)[Open Source Software](https://vercel.com/oss?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_api-reference_file-conventions_route)[GitHub](https://github.com/vercel)[Bluesky](https://bsky.app/profile/vercel.com)[X](https://x.com/vercel)

#### Legal

[Privacy Policy](https://vercel.com/legal/privacy-policy)Cookie Preferences

#### Subscribe to our newsletter

Stay updated on new releases and features, guides, and case studies.

Subscribe

© 2025 Vercel, Inc.

[](https://github.com/vercel/next.js)

* * *

[](https://x.com/nextjs)

* * *

[](https://bsky.app/profile/nextjs.org)
