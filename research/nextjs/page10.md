# Next.js Lazy Loading and Dynamic Imports (2025)

## Source
Research compilation from Next.js documentation and latest 2025 practices

## Lazy Loading in Next.js 14+

Next.js provides several methods to implement lazy loading, including dynamic imports for components and libraries. This is essential for WebSocket applications to optimize bundle sizes and loading performance.

### Dynamic Imports with next/dynamic

#### Basic Client Component Lazy Loading
```typescript
'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// Lazy load WebSocket components
const WebSocketChat = dynamic(() => import('./WebSocketChat'), {
  loading: () => <p>Loading chat...</p>,
  ssr: false // Disable SSR for WebSocket components
})

const WebSocketDashboard = dynamic(() => import('./WebSocketDashboard'))

export default function Page() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div>
      <h1>Real-time Application</h1>
      
      {showChat && <WebSocketChat />}
      
      <button onClick={() => setShowChat(true)}>
        Load Chat
      </button>
      
      <WebSocketDashboard />
    </div>
  )
}
```

#### Advanced Dynamic Import with Named Exports
```typescript
// For WebSocket utilities
const WebSocketManager = dynamic(
  () => import('./websocket-utils').then(mod => ({ default: mod.WebSocketManager })),
  { ssr: false }
)

// For specific WebSocket hooks
const useWebSocketHook = dynamic(
  () => import('./hooks/useWebSocket').then(mod => ({ default: mod.useWebSocket })),
  { ssr: false }
)
```

### External Library Lazy Loading

#### Conditional WebSocket Library Loading
```typescript
'use client'

import { useState, useCallback } from 'react'

export default function WebSocketComponent() {
  const [socket, setSocket] = useState(null)
  
  const connectWebSocket = useCallback(async () => {
    // Dynamically import WebSocket library only when needed
    const { io } = await import('socket.io-client')
    
    const socketConnection = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL)
    setSocket(socketConnection)
  }, [])

  const loadAdvancedFeatures = useCallback(async () => {
    // Load heavy WebSocket utilities only when required
    const { WebSocketReconnect } = await import('./websocket-advanced')
    const { MessageQueue } = await import('./message-queue')
    
    // Initialize advanced features
    return { WebSocketReconnect, MessageQueue }
  }, [])

  return (
    <div>
      <button onClick={connectWebSocket}>
        Connect to WebSocket
      </button>
      
      <button onClick={loadAdvancedFeatures}>
        Load Advanced Features
      </button>
    </div>
  )
}
```

### WebSocket-Specific Lazy Loading Patterns

#### Lazy Loading WebSocket Components Based on User Interaction
```typescript
'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// Lazy load different WebSocket features
const AudioWebSocket = dynamic(() => import('./AudioWebSocket'), {
  loading: () => <div>Loading audio features...</div>,
  ssr: false
})

const VideoWebSocket = dynamic(() => import('./VideoWebSocket'), {
  loading: () => <div>Loading video features...</div>,
  ssr: false
})

const FileShareWebSocket = dynamic(() => import('./FileShareWebSocket'), {
  loading: () => <div>Loading file sharing...</div>,
  ssr: false
})

export default function WebSocketApp() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  return (
    <div>
      <div>
        <button onClick={() => setActiveFeature('audio')}>
          Enable Audio Chat
        </button>
        <button onClick={() => setActiveFeature('video')}>
          Enable Video Chat
        </button>
        <button onClick={() => setActiveFeature('files')}>
          Enable File Sharing
        </button>
      </div>

      {activeFeature === 'audio' && <AudioWebSocket />}
      {activeFeature === 'video' && <VideoWebSocket />}
      {activeFeature === 'files' && <FileShareWebSocket />}
    </div>
  )
}
```

#### Route-Based Lazy Loading for WebSocket Features
```typescript
// app/chat/page.tsx
import dynamic from 'next/dynamic'

const ChatInterface = dynamic(() => import('../../components/ChatInterface'), {
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <span className="ml-2">Loading chat...</span>
    </div>
  ),
  ssr: false
})

export default function ChatPage() {
  return (
    <div>
      <h1>Chat Application</h1>
      <ChatInterface />
    </div>
  )
}
```

### Performance Optimization for WebSocket Apps

#### Lazy Loading with Suspense Boundaries
```typescript
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const WebSocketMonitor = dynamic(() => import('./WebSocketMonitor'), {
  ssr: false
})

export default function MonitoringPage() {
  return (
    <div>
      <h1>WebSocket Monitoring</h1>
      
      <Suspense fallback={<div>Loading monitoring tools...</div>}>
        <WebSocketMonitor />
      </Suspense>
    </div>
  )
}
```

#### Code Splitting for WebSocket Utilities
```typescript
// utils/websocket-lazy.ts
export const getWebSocketUtils = async () => {
  const { WebSocketManager } = await import('./websocket-manager')
  const { MessageEncoder } = await import('./message-encoder')
  const { ConnectionPool } = await import('./connection-pool')
  
  return {
    WebSocketManager,
    MessageEncoder,
    ConnectionPool
  }
}

// Usage in component
'use client'

import { useState, useCallback } from 'react'

export default function WebSocketController() {
  const [utils, setUtils] = useState(null)

  const initializeWebSocket = useCallback(async () => {
    const wsUtils = await import('./utils/websocket-lazy').then(
      mod => mod.getWebSocketUtils()
    )
    setUtils(wsUtils)
  }, [])

  return (
    <button onClick={initializeWebSocket}>
      Initialize WebSocket System
    </button>
  )
}
```

### Image and Media Lazy Loading for WebSocket Apps

#### Lazy Loading User Avatars in Chat
```typescript
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ChatMessageProps {
  message: string
  user: {
    id: string
    name: string
    avatar: string
  }
}

export function ChatMessage({ message, user }: ChatMessageProps) {
  return (
    <div className="flex items-start space-x-3 p-3">
      <Image
        src={user.avatar}
        alt={user.name}
        width={40}
        height={40}
        className="rounded-full"
        loading="lazy" // Native lazy loading
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..." // Blur placeholder
      />
      
      <div>
        <h4 className="font-semibold">{user.name}</h4>
        <p>{message}</p>
      </div>
    </div>
  )
}
```

### Bundle Analysis for WebSocket Applications

#### Analyzing Bundle Size Impact
```typescript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    if (!isServer) {
      // Optimize WebSocket client bundles
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
      }
    }
    
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
```

### Error Boundaries for Lazy-Loaded WebSocket Components

```typescript
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class LazyWebSocketErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Lazy WebSocket component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 border border-red-300 rounded">
          <h3 className="text-red-600">WebSocket component failed to load</h3>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
```

### Best Practices for WebSocket Lazy Loading

1. **Disable SSR for WebSocket Components**: Always use `ssr: false` for components that use WebSocket APIs
2. **Load on User Interaction**: Only load WebSocket features when users actually need them
3. **Use Loading States**: Provide meaningful loading indicators for better UX
4. **Bundle Analysis**: Regularly analyze bundle sizes to ensure lazy loading is effective
5. **Error Boundaries**: Implement error boundaries for graceful degradation when lazy-loaded components fail
6. **Progressive Enhancement**: Start with basic functionality and lazy load advanced features
7. **Route-Based Splitting**: Split WebSocket features across different routes when appropriate