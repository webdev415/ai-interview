Title: Getting Started: Fetching Data

URL Source: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

Markdown Content:
Getting Started: Fetching Data | Next.js

===============
[Skip to content](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#geist-skip-nav)

[](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=docs_app_getting-started_fetching-data "Go to Vercel homepage")

[![Image 11: Next.js uwu logo by SAWARATSUKI](https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1714730590%2Ffront%2Fnextjs%2Fuwu%2Fnext-uwu-logo.png&w=128&q=75)](https://nextjs.org/?uwu=true "Go to the homepage")

[](https://nextjs.org/ "Go to the homepage")

Search documentation...CtrlK Search...⌘K

[](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=docs_app_getting-started_fetching-data "Go to Vercel homepage")

[![Image 12: Next.js uwu logo by SAWARATSUKI](https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1714730590%2Ffront%2Fnextjs%2Fuwu%2Fnext-uwu-logo.png&w=128&q=75)](https://nextjs.org/?uwu=true "Go to the homepage")

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

*   [Fetching data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#fetching-data)
*   [Server Components](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#server-components)
*   [With the fetch API](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-the-fetch-api)
*   [With an ORM or database](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-an-orm-or-database)
*   [Client Components](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#client-components)
*   [Streaming data with the use hook](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming-data-with-the-use-hook)
*   [Community libraries](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#community-libraries)
*   [Deduplicate requests and cache data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#deduplicate-requests-and-cache-data)
*   [Streaming](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming)
*   [With loading.js](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-loadingjs)
*   [With <Suspense>](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-suspense)
*   [Creating meaningful loading states](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#creating-meaningful-loading-states)
*   [Examples](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#examples)
*   [Sequential data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#sequential-data-fetching)
*   [Parallel data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#parallel-data-fetching)
*   [Preloading data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#preloading-data)
*   [API Reference](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#api-reference)

[Edit this page on GitHub](https://github.com/vercel/next.js/edit/canary/docs/01-app/01-getting-started/07-fetching-data.mdx)Scroll to top 

[App Router](https://nextjs.org/docs/app)[Getting Started](https://nextjs.org/docs/app/getting-started)Fetching Data

Copy page

Fetching Data
=============

This page will walk you through how you can fetch data in [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), and how to [stream](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming) components that depend on data.

[Fetching data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#fetching-data)
-----------------------------------------------------------------------------------------------------------

### [Server Components](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#server-components)

You can fetch data in Server Components using:

1.   The [`fetch` API](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-the-fetch-api)
2.   An [ORM or database](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-an-orm-or-database)

#### [With the `fetch` API](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-the-fetch-api)

To fetch data with the `fetch` API, turn your component into an asynchronous function, and await the `fetch` call. For example:

app/blog/page.tsx

TypeScript

```
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

> **Good to know:**
> 
> 
> *   `fetch` responses are not cached by default. However, Next.js will [prerender](https://nextjs.org/docs/app/getting-started/partial-prerendering#static-rendering) the route and the output will be cached for improved performance. If you'd like to opt into [dynamic rendering](https://nextjs.org/docs/app/getting-started/partial-prerendering#dynamic-rendering), use the `{ cache: 'no-store' }` option. See the [`fetch` API Reference](https://nextjs.org/docs/app/api-reference/functions/fetch).
> *   During development, you can log `fetch` calls for better visibility and debugging. See the [`logging` API reference](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging).

#### [With an ORM or database](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-an-orm-or-database)

Since Server Components are rendered on the server, you can safely make database queries using an ORM or database client. Turn your component into an asynchronous function, and await the call:

app/blog/page.tsx

TypeScript

```
import { db, posts } from '@/lib/db'
 
export default async function Page() {
  const allPosts = await db.select().from(posts)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

### [Client Components](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#client-components)

There are two ways to fetch data in Client Components, using:

1.   React's [`use` hook](https://react.dev/reference/react/use)
2.   A community library like [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/latest)

#### [Streaming data with the `use` hook](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming-data-with-the-use-hook)

You can use React's [`use` hook](https://react.dev/reference/react/use) to [stream](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming) data from the server to client. Start by fetching data in your Server component, and pass the promise to your Client Component as prop:

app/blog/page.tsx

TypeScript

```
import Posts from '@/app/ui/posts'
import { Suspense } from 'react'
 
export default function Page() {
  // Don't await the data fetching function
  const posts = getPosts()
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}
```

Then, in your Client Component, use the `use` hook to read the promise:

app/ui/posts.tsx

TypeScript

```
'use client'
import { use } from 'react'
 
export default function Posts({
  posts,
}: {
  posts: Promise<{ id: string; title: string }[]>
}) {
  const allPosts = use(posts)
 
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

In the example above, the `<Posts>` component is wrapped in a [`<Suspense>` boundary](https://react.dev/reference/react/Suspense). This means the fallback will be shown while the promise is being resolved. Learn more about [streaming](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming).

#### [Community libraries](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#community-libraries)

You can use a community library like [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/latest) to fetch data in Client Components. These libraries have their own semantics for caching, streaming, and other features. For example, with SWR:

app/blog/page.tsx

TypeScript

```
'use client'
import useSWR from 'swr'
 
const fetcher = (url) => fetch(url).then((r) => r.json())
 
export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    'https://api.vercel.app/blog',
    fetcher
  )
 
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
 
  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

[Deduplicate requests and cache data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#deduplicate-requests-and-cache-data)
-------------------------------------------------------------------------------------------------------------------------------------------------------

One way to deduplicate `fetch` requests is with [request memoization](https://nextjs.org/docs/app/guides/caching#request-memoization). With this mechanism, `fetch` calls using `GET` or `HEAD` with the same URL and options in a single render pass are combined into one request. This happens automatically, and you can [opt out](https://nextjs.org/docs/app/guides/caching#opting-out) by passing an Abort signal to `fetch`.

Request memoization is scoped to the lifetime of a request.

You can also deduplicate `fetch` requests by using Next.js’ [Data Cache](https://nextjs.org/docs/app/guides/caching#data-cache), for example by setting `cache: 'force-cache'` in your `fetch` options.

Data Cache allows sharing data across the current render pass and incoming requests.

If you are _not_ using `fetch`, and instead using an ORM or database directly, you can wrap your data access with the [React `cache`](https://react.dev/reference/react/cache) function.

app/lib/data.ts

TypeScript

```
import { cache } from 'react'
import { db, posts, eq } from '@/lib/db'
 
export const getPost = cache(async (id: string) => {
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, parseInt(id)),
  })
})
```

[Streaming](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming)
---------------------------------------------------------------------------------------------------

> **Warning:** The content below assumes the [`cacheComponents` config option](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) is enabled in your application. The flag was introduced in Next.js 15 canary.

When using `async/await` in Server Components, Next.js will opt into [dynamic rendering](https://nextjs.org/docs/app/getting-started/partial-prerendering#dynamic-rendering). This means the data will be fetched and rendered on the server for every user request. If there are any slow data requests, the whole route will be blocked from rendering.

To improve the initial load time and user experience, you can use streaming to break up the page's HTML into smaller chunks and progressively send those chunks from the server to the client.

![Image 13: How Server Rendering with Streaming Works](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fserver-rendering-with-streaming.png&w=3840&q=75)![Image 14: How Server Rendering with Streaming Works](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Fserver-rendering-with-streaming.png&w=3840&q=75)
There are two ways you can implement streaming in your application:

1.   Wrapping a page with a [`loading.js` file](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-loadingjs)
2.   Wrapping a component with [`<Suspense>`](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-suspense)

### [With `loading.js`](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-loadingjs)

You can create a `loading.js` file in the same folder as your page to stream the **entire page** while the data is being fetched. For example, to stream `app/blog/page.js`, add the file inside the `app/blog` folder.

![Image 15: Blog folder structure with loading.js file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Floading-file.png&w=3840&q=75)![Image 16: Blog folder structure with loading.js file](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Floading-file.png&w=3840&q=75)

app/blog/loading.tsx

TypeScript

```
export default function Loading() {
  // Define the Loading UI here
  return <div>Loading...</div>
}
```

On navigation, the user will immediately see the layout and a [loading state](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#creating-meaningful-loading-states) while the page is being rendered. The new content will then be automatically swapped in once rendering is complete.

![Image 17: Loading UI](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Floading-ui.png&w=3840&q=75)![Image 18: Loading UI](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Floading-ui.png&w=3840&q=75)
Behind-the-scenes, `loading.js` will be nested inside `layout.js`, and will automatically wrap the `page.js` file and any children below in a `<Suspense>` boundary.

![Image 19: loading.js overview](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Floading-overview.png&w=3840&q=75)![Image 20: loading.js overview](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Floading-overview.png&w=3840&q=75)
This approach works well for route segments (layouts and pages), but for more granular streaming, you can use `<Suspense>`.

### [With `<Suspense>`](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#with-suspense)

`<Suspense>` allows you to be more granular about what parts of the page to stream. For example, you can immediately show any page content that falls outside of the `<Suspense>` boundary, and stream in the list of blog posts inside the boundary.

app/blog/page.tsx

TypeScript

```
import { Suspense } from 'react'
import BlogList from '@/components/BlogList'
import BlogListSkeleton from '@/components/BlogListSkeleton'
 
export default function BlogPage() {
  return (
    <div>
      {/* This content will be sent to the client immediately */}
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  )
}
```

### [Creating meaningful loading states](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#creating-meaningful-loading-states)

An instant loading state is fallback UI that is shown immediately to the user after navigation. For the best user experience, we recommend designing loading states that are meaningful and help users understand the app is responding. For example, you can use skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc.

In development, you can preview and inspect the loading state of your components using the [React Devtools](https://react.dev/learn/react-developer-tools).

[Examples](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#examples)
-------------------------------------------------------------------------------------------------

### [Sequential data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#sequential-data-fetching)

Sequential data fetching happens when nested components in a tree each fetch their own data and the requests are not [deduplicated](https://nextjs.org/docs/app/guides/caching#request-memoization), leading to longer response times.

![Image 21: Sequential and Parallel Data Fetching](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fsequential-parallel-data-fetching.png&w=3840&q=75)![Image 22: Sequential and Parallel Data Fetching](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Fsequential-parallel-data-fetching.png&w=3840&q=75)
There may be cases where you want this pattern because one fetch depends on the result of the other.

For example, the `<Playlists>` component will only start fetching data once the `<Artist>` component has finished fetching data because `<Playlists>` depends on the `artistID` prop:

app/artist/[username]/page.tsx

TypeScript

```
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  // Get artist information
  const artist = await getArtist(username)
 
  return (
    <>
      <h1>{artist.name}</h1>
      {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  )
}
 
async function Playlists({ artistID }: { artistID: string }) {
  // Use the artist ID to fetch playlists
  const playlists = await getArtistPlaylists(artistID)
 
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}
```

To improve the user experience, you should use [React `<Suspense>`](https://nextjs.org/docs/app/getting-started/linking-and-navigating#streaming) to show a `fallback` while data is being fetch. This will enable [streaming](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#streaming) and prevent the whole route from being blocked by the sequential data requests.

### [Parallel data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#parallel-data-fetching)

Parallel data fetching happens when data requests in a route are eagerly initiated and start at the same time.

By default, [layouts and pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages) are rendered in parallel. So each segment starts fetching data as soon as possible.

However, within _any_ component, multiple `async`/`await` requests can still be sequential if placed after the other. For example, `getAlbums` will be blocked until `getArtist` is resolved:

app/artist/[username]/page.tsx

TypeScript

```
import { getArtist, getAlbums } from '@/app/lib/data'
 
export default async function Page({ params }) {
  // These requests will be sequential
  const { username } = await params
  const artist = await getArtist(username)
  const albums = await getAlbums(username)
  return <div>{artist.name}</div>
}
```

Start multiple requests by calling `fetch`, then await them with [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Requests begin as soon as `fetch` is called.

app/artist/[username]/page.tsx

TypeScript

```
import Albums from './albums'
 
async function getArtist(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}`)
  return res.json()
}
 
async function getAlbums(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`)
  return res.json()
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
 
  // Initiate requests
  const artistData = getArtist(username)
  const albumsData = getAlbums(username)
 
  const [artist, albums] = await Promise.all([artistData, albumsData])
 
  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums} />
    </>
  )
}
```

> **Good to know:** If one request fails when using `Promise.all`, the entire operation will fail. To handle this, you can use the [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) method instead.

### [Preloading data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#preloading-data)

You can preload data by creating an utility function that you eagerly call above blocking requests. `<Item>` conditionally renders based on the `checkIsAvailable()` function.

You can call `preload()` before `checkIsAvailable()` to eagerly initiate `<Item/>` data dependencies. By the time `<Item/>` is rendered, its data has already been fetched.

app/item/[id]/page.tsx

TypeScript

```
import { getItem, checkIsAvailable } from '@/lib/data'
 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  // starting loading item data
  preload(id)
  // perform another asynchronous task
  const isAvailable = await checkIsAvailable()
 
  return isAvailable ? <Item id={id} /> : null
}
 
export const preload = (id: string) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void getItem(id)
}
export async function Item({ id }: { id: string }) {
  const result = await getItem(id)
  // ...
}
```

Additionally, you can use React's [`cache` function](https://react.dev/reference/react/cache) and the [`server-only` package](https://www.npmjs.com/package/server-only) to create a reusable utility function. This approach allows you to cache the data fetching function and ensure that it's only executed on the server.

utils/get-item.ts

TypeScript

```
import { cache } from 'react'
import 'server-only'
import { getItem } from '@/lib/data'
 
export const preload = (id: string) => {
  void getItem(id)
}
 
export const getItem = cache(async (id: string) => {
  // ...
})
```

API Reference
-------------

Learn more about the features mentioned in this page by reading the API Reference.

[### Data Security Learn the built-in data security features in Next.js and learn best practices for protecting your application's data.](https://nextjs.org/docs/app/guides/data-security)[### fetch API reference for the extended fetch function.](https://nextjs.org/docs/app/api-reference/functions/fetch)[### loading.js API reference for the loading.js file.](https://nextjs.org/docs/app/api-reference/file-conventions/loading)[### logging Configure how data fetches are logged to the console when running Next.js in development mode.](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)[### taint Enable tainting Objects and Values.](https://nextjs.org/docs/app/api-reference/config/next-config-js/taint)

[Previous Partial Prerendering](https://nextjs.org/docs/app/getting-started/partial-prerendering)[Next Updating Data](https://nextjs.org/docs/app/getting-started/updating-data)

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

[Docs](https://nextjs.org/docs)[Support Policy](https://nextjs.org/support-policy)[Learn](https://nextjs.org/learn)[Showcase](https://nextjs.org/showcase)[Blog](https://nextjs.org/blog)[Team](https://nextjs.org/team)[Analytics](https://vercel.com/analytics?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_getting-started_fetching-data)[Next.js Conf](https://nextjs.org/conf)[Previews](https://vercel.com/products/previews?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_getting-started_fetching-data)

#### More

[Next.js Commerce](https://vercel.com/templates/next.js/nextjs-commerce?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_getting-started_fetching-data)[Contact Sales](https://vercel.com/contact/sales?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_getting-started_fetching-data)[Community](https://community.vercel.com/)[GitHub](https://github.com/vercel/next.js)[Releases](https://github.com/vercel/next.js/releases)[Telemetry](https://nextjs.org/telemetry)[Governance](https://nextjs.org/governance)

#### About Vercel

[Next.js + Vercel](https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_getting-started_fetching-data)[Open Source Software](https://vercel.com/oss?utm_source=next-site&utm_medium=footer&utm_campaign=docs_app_getting-started_fetching-data)[GitHub](https://github.com/vercel)[Bluesky](https://bsky.app/profile/vercel.com)[X](https://x.com/vercel)

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
