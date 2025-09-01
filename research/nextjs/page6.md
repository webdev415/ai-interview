# Next.js Configuration (next.config.js) Documentation

## Source
URL: https://nextjs.org/docs/app/api-reference/next-config-js

## Next.js Configuration File

The `next.config.js` file is a regular Node.js module that gets loaded by the Next.js server and build phases. It allows you to customize various aspects of your Next.js application.

### Basic Configuration Structure

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration options go here
}

module.exports = nextConfig
```

### Key Configuration Options for WebSocket Apps

#### 1. Environment Variables

```javascript
const nextConfig = {
  env: {
    CUSTOM_KEY: 'my-value',
    WEBSOCKET_URL: process.env.WEBSOCKET_URL,
  },
}
```

#### 2. Headers Configuration

Essential for WebSocket applications to handle CORS and upgrade headers:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ]
      }
    ]
  },
}
```

#### 3. Rewrites for WebSocket Proxying

```javascript
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/websocket',
        destination: 'http://localhost:8080/websocket' // Proxy to WebSocket server
      }
    ]
  },
}
```

#### 4. webpack Configuration

For custom WebSocket client bundling:

```javascript
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Add WebSocket polyfills for browser compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
      }
    }
    
    return config
  },
}
```

#### 5. Server Configuration

```javascript
const nextConfig = {
  // Enable experimental features if needed
  experimental: {
    serverActions: true,
  },
  
  // Configure server runtime
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET,
  },
  
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}
```

#### 6. TypeScript Configuration

```javascript
const nextConfig = {
  typescript: {
    // Dangerously allow production builds to complete even if
    // there are TypeScript type checking errors.
    ignoreBuildErrors: false,
  },
}
```

#### 7. ESLint Configuration

```javascript
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
    
    // Run ESLint on these directories during `next lint` and `next build`
    dirs: ['pages', 'utils', 'components', 'lib'],
  },
}
```

#### 8. Image Configuration

```javascript
const nextConfig = {
  images: {
    domains: ['example.com'],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

#### 9. Redirects and Rewrites for API Routes

```javascript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-websocket',
        destination: '/api/websocket',
        permanent: true,
      },
    ]
  },
}
```

#### 10. Development Specific Configuration

```javascript
const nextConfig = {
  // Development indicators
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Compress responses
  compress: true,
  
  // Generate source maps in production
  productionBrowserSourceMaps: true,
}
```

### Complete WebSocket Application Configuration Example

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBSOCKET_URL: process.env.WEBSOCKET_URL,
  },
  
  async headers() {
    return [
      {
        source: '/api/websocket',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Connection', value: 'Upgrade' },
          { key: 'Upgrade', value: 'websocket' },
        ]
      }
    ]
  },
  
  async rewrites() {
    return [
      {
        source: '/ws',
        destination: 'http://localhost:8080/websocket'
      }
    ]
  },
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
      }
    }
    return config
  },
  
  experimental: {
    serverActions: true,
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
```

### Runtime Configuration Access

```javascript
// pages/_app.js or components
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

// serverRuntimeConfig is only available on the server-side
// publicRuntimeConfig is available on both server and client-side
```

### Environment-Specific Configuration

```javascript
const nextConfig = {
  // Different configurations based on environment
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
  }),
  
  ...(process.env.NODE_ENV === 'development' && {
    devIndicators: {
      buildActivity: true,
    },
  }),
}
```