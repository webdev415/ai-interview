# Vercel Next.js Documentation

## Source
URL: https://vercel.com/docs/frameworks/nextjs

## Next.js on Vercel

Vercel provides first-class support for Next.js applications with optimized deployment and hosting.

### Key Features

#### 1. Zero Configuration Deployment
- Automatic Next.js detection
- Built-in build optimization
- Edge caching and CDN distribution
- Automatic SSL certificate provisioning

#### 2. Performance Optimization
- Automatic code splitting
- Image optimization with Next.js Image component
- Edge caching for static assets
- Incremental Static Regeneration (ISR)

#### 3. Serverless Functions
- API routes automatically become serverless functions
- Automatic scaling based on demand
- Global edge deployment
- Cold start optimization

### Deployment Process

#### Connecting Your Repository
1. Import your Next.js project from Git
2. Vercel automatically detects the framework
3. Configure build settings (usually automatic)
4. Deploy with zero configuration

#### Build Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Environment Variables for WebSocket Apps

#### Development Environment
```bash
# Local development
NEXT_PUBLIC_WEBSOCKET_URL=ws://localhost:8080
DATABASE_URL=postgresql://localhost:5432/dev
```

#### Production Environment
```bash
# Production on Vercel
NEXT_PUBLIC_WEBSOCKET_URL=wss://your-websocket-domain.com
DATABASE_URL=postgresql://prod-db-url
WEBSOCKET_SECRET=production-secret
```

#### Vercel Environment Variables Management
```bash
# Add environment variables via CLI
vercel env add NEXT_PUBLIC_WEBSOCKET_URL
vercel env add DATABASE_URL
vercel env add WEBSOCKET_SECRET

# Pull environment variables to local
vercel env pull .env.local
```

### Vercel Configuration for WebSocket Apps

#### vercel.json Configuration
```json
{
  "functions": {
    "app/api/websocket/route.ts": {
      "maxDuration": 300
    }
  },
  "headers": [
    {
      "source": "/api/websocket",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods", 
          "value": "GET, POST, OPTIONS"
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
  ],
  "rewrites": [
    {
      "source": "/ws",
      "destination": "/api/websocket"
    }
  ]
}
```

### Edge Functions vs Serverless Functions

#### Serverless Functions (Node.js Runtime)
- Full Node.js API support
- WebSocket server capabilities
- Database connections
- File system access

```typescript
// app/api/websocket/route.ts (Serverless)
import { NextRequest } from 'next/server'
import WebSocket from 'ws'

export async function GET(req: NextRequest) {
  // Full Node.js WebSocket server implementation
  const wss = new WebSocket.Server({ port: 8080 })
  
  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('Received:', message)
    })
  })
  
  return new Response('WebSocket server started')
}
```

#### Edge Functions (Edge Runtime)
- Lightweight and fast
- Limited APIs
- Better for simple WebSocket proxying

```typescript
// app/api/websocket-edge/route.ts (Edge)
export const runtime = 'edge'

export async function GET(request: Request) {
  // Limited WebSocket support
  // Better for proxying or simple operations
  
  return new Response('Edge function response')
}
```

### Performance Features for WebSocket Apps

#### 1. Image Optimization
```typescript
import Image from 'next/image'

export default function ChatMessage({ user, avatar }) {
  return (
    <div className="message">
      <Image
        src={avatar}
        alt={user.name}
        width={40}
        height={40}
        priority={user.isActive}
      />
    </div>
  )
}
```

#### 2. Code Splitting for WebSocket Components
```typescript
import dynamic from 'next/dynamic'

const WebSocketChat = dynamic(() => import('./WebSocketChat'), {
  ssr: false,
  loading: () => <div>Loading chat...</div>
})

export default function Page() {
  return (
    <div>
      <h1>Chat Application</h1>
      <WebSocketChat />
    </div>
  )
}
```

#### 3. Edge Caching for Static Assets
```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      }
    ]
  }
}
```

### Database Integration

#### Vercel Postgres
```typescript
// lib/db.ts
import { sql } from '@vercel/postgres'

export async function getUserMessages(userId: string) {
  const { rows } = await sql`
    SELECT * FROM messages 
    WHERE user_id = ${userId} 
    ORDER BY created_at DESC
  `
  return rows
}
```

#### Connection Management for WebSocket Apps
```typescript
// lib/websocket-db.ts
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export async function handleWebSocketMessage(message: any) {
  const client = await pool.connect()
  
  try {
    await client.query('INSERT INTO messages (content) VALUES ($1)', [message])
  } finally {
    client.release()
  }
}
```

### Monitoring and Analytics

#### 1. Vercel Analytics
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

#### 2. Speed Insights
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

#### 3. WebSocket Connection Monitoring
```typescript
'use client'

import { useEffect, useState } from 'react'

export function useWebSocketMonitoring(url: string) {
  const [connectionState, setConnectionState] = useState('connecting')
  const [reconnectCount, setReconnectCount] = useState(0)
  
  useEffect(() => {
    // Track connection metrics
    const ws = new WebSocket(url)
    
    ws.onopen = () => {
      setConnectionState('connected')
      // Send analytics event
      if (typeof window !== 'undefined' && window.va) {
        window.va('track', 'websocket_connected', {
          reconnect_count: reconnectCount
        })
      }
    }
    
    ws.onclose = () => {
      setConnectionState('disconnected')
      setReconnectCount(prev => prev + 1)
    }
    
    return () => ws.close()
  }, [url, reconnectCount])
  
  return { connectionState, reconnectCount }
}
```

### Security Best Practices

#### 1. Environment Variable Security
- Use Vercel's encrypted environment variables
- Never expose secrets with NEXT_PUBLIC_ prefix
- Separate development and production environments

#### 2. CORS Configuration
```typescript
// app/api/websocket/route.ts
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
        ? 'https://yourdomain.com' 
        : '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
```

#### 3. Rate Limiting
```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'),
})

export async function checkRateLimit(identifier: string) {
  const { success } = await ratelimit.limit(identifier)
  return success
}
```

### Deployment Checklist for WebSocket Apps

- [ ] Environment variables configured
- [ ] WebSocket URLs updated for production
- [ ] CORS headers configured
- [ ] Database connections optimized
- [ ] Error monitoring setup
- [ ] Performance monitoring enabled
- [ ] Security headers configured
- [ ] Rate limiting implemented
- [ ] WebSocket reconnection logic tested
- [ ] Vercel functions timeout configured
- [ ] SSL/WSS certificates working
- [ ] Load testing completed