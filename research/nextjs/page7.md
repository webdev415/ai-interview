# Next.js Deployment Documentation

## Source
URL: https://nextjs.org/docs/app/building-your-application/deploying

## Deploying Next.js Applications

Next.js provides several deployment options, each with specific considerations for WebSocket applications.

### Production Build

Before deploying, create a production build:

```bash
npm run build
npm run start
```

The build process:
1. Optimizes and bundles your application
2. Generates static files where possible
3. Creates server-side rendered pages
4. Minifies code and assets

### Deployment Platforms

#### 1. Vercel (Recommended)

Vercel is the platform created by the Next.js team and provides seamless deployment:

```bash
npm i -g vercel
vercel
```

**Environment Variables for WebSocket Apps:**
```bash
vercel env add NEXT_PUBLIC_WEBSOCKET_URL
vercel env add DATABASE_URL
vercel env add WEBSOCKET_SECRET
```

**Vercel Configuration (vercel.json):**
```json
{
  "functions": {
    "app/api/websocket/route.ts": {
      "maxDuration": 300
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Connection",
          "value": "Upgrade"
        },
        {
          "key": "Upgrade",
          "value": "websocket"
        }
      ]
    }
  ]
}
```

#### 2. Docker Deployment

Create a Dockerfile for containerized deployments:

```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Docker Compose for WebSocket Apps:**
```yaml
version: '3.8'
services:
  nextjs:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_WEBSOCKET_URL=wss://localhost:8080
      - DATABASE_URL=postgresql://...
    depends_on:
      - websocket-server
      
  websocket-server:
    image: your-websocket-server:latest
    ports:
      - "8080:8080"
    environment:
      - PORT=8080
```

#### 3. Self-Hosting

For self-hosted deployments, you can use the standalone build:

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // WebSocket configuration
  async headers() {
    return [
      {
        source: '/api/websocket',
        headers: [
          { key: 'Connection', value: 'Upgrade' },
          { key: 'Upgrade', value: 'websocket' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

**Server Setup:**
```javascript
// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const WebSocket = require('ws')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  // WebSocket server
  const wss = new WebSocket.Server({ server, path: '/api/websocket' })
  
  wss.on('connection', (ws) => {
    console.log('Client connected')
    
    ws.on('message', (message) => {
      console.log('Received:', message)
      // Handle WebSocket messages
    })
    
    ws.on('close', () => {
      console.log('Client disconnected')
    })
  })

  const port = process.env.PORT || 3000
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
```

#### 4. Static Exports

For static-only applications (not suitable for WebSocket apps):

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Environment Variables in Production

#### Server-side Variables
```bash
# .env.production
DATABASE_URL=postgresql://production-db
API_SECRET=production-secret
WEBSOCKET_SECRET=production-websocket-secret
```

#### Client-side Variables
```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_WEBSOCKET_URL=wss://ws.yourdomain.com
```

### Performance Considerations for WebSocket Apps

#### 1. Bundle Analysis
```bash
npm install -D @next/bundle-analyzer
```

**next.config.js:**
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

#### 2. Code Splitting for WebSocket Components
```typescript
import dynamic from 'next/dynamic'

const WebSocketComponent = dynamic(() => import('./WebSocketComponent'), {
  ssr: false, // Disable SSR for WebSocket components
  loading: () => <p>Loading WebSocket connection...</p>
})
```

#### 3. Optimize WebSocket Libraries
```javascript
// next.config.js
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude server-only WebSocket libraries from client bundle
      config.externals = config.externals || []
      config.externals.push('ws')
    }
    return config
  },
}
```

### Monitoring and Logging

#### Health Check Endpoints
```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    websocket: process.env.NEXT_PUBLIC_WEBSOCKET_URL ? 'configured' : 'missing'
  })
}
```

#### Error Tracking
```typescript
// app/layout.tsx
'use client'

import { useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Global error handler for WebSocket errors
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason)
      // Send to monitoring service
    })
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Security Considerations

#### 1. Content Security Policy
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self' wss://your-websocket-domain.com"
          }
        ],
      },
    ]
  },
}
```

#### 2. Environment Variable Security
- Never expose secrets with `NEXT_PUBLIC_` prefix
- Use secure secret management for production
- Rotate WebSocket authentication tokens regularly

### Deployment Checklist

- [ ] Build passes without errors
- [ ] Environment variables configured
- [ ] WebSocket connection works in production
- [ ] HTTPS/WSS certificates configured
- [ ] CORS headers properly set
- [ ] Error monitoring setup
- [ ] Health checks implemented
- [ ] Performance monitoring enabled
- [ ] Security headers configured
- [ ] Domain/subdomain configured
- [ ] CDN configured (if needed)
- [ ] Database connections tested
- [ ] WebSocket server scaling configured