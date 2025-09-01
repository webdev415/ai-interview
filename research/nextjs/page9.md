# Next.js Examples Repository Research

## Source
URL: https://github.com/vercel/next.js/tree/canary/examples

## Next.js WebSocket-Related Examples

Based on the extensive Next.js examples repository, here are the key examples that relate to WebSocket and real-time applications:

### Real-time Communication Examples

#### 1. **with-ably**
- Real-time messaging and collaboration platform
- WebSocket-like functionality through Ably's realtime messaging
- Good example for chat applications and live updates

#### 2. **with-mqtt-js**
- MQTT protocol implementation for IoT and messaging
- Useful for real-time data streaming
- Alternative to WebSocket for certain use cases

#### 3. **with-firebase-cloud-messaging**
- Real-time push notifications
- Firebase integration for live updates
- Client-server communication patterns

#### 4. **with-web-worker**
- Background processing for WebSocket applications
- Offloading WebSocket message processing
- Non-blocking real-time operations

### Database and State Management for WebSocket Apps

#### 5. **with-redis**
- Redis integration for WebSocket session management
- Pub/Sub patterns for real-time messaging
- Session storage for WebSocket connections

#### 6. **with-supabase**
- Real-time database subscriptions
- WebSocket-like functionality through Supabase
- Live data synchronization

#### 7. **with-mongodb**
- Database integration patterns
- Useful for storing WebSocket message history
- Real-time data persistence

### Authentication for WebSocket Applications

#### 8. **with-auth0**
- Authentication patterns for WebSocket apps
- Securing real-time connections
- JWT tokens for WebSocket authentication

#### 9. **with-clerk**
- Modern authentication for real-time apps
- User management for chat applications
- Session handling for WebSocket connections

### API and Server Examples

#### 10. **api-routes-middleware**
- Middleware patterns for API routes
- Useful for WebSocket connection handling
- Request/response processing

#### 11. **with-custom-server**
- Custom server implementation
- Essential for WebSocket server setup
- Server-side WebSocket handling

#### 12. **api-routes-rest**
- RESTful API patterns
- Complementary to WebSocket APIs
- Hybrid WebSocket/REST architecture

### Real-time UI and State Management

#### 13. **with-zustand**
- State management for real-time applications
- WebSocket state synchronization
- Reactive UI updates

#### 14. **with-recoil**
- Facebook's state management solution
- Real-time state updates
- WebSocket data flow management

#### 15. **with-redux**
- Redux patterns for WebSocket applications
- Action/reducer patterns for real-time data
- Middleware for WebSocket integration

### Performance and Optimization

#### 16. **with-service-worker**
- Background synchronization
- Offline support for WebSocket apps
- Cache management for real-time data

#### 17. **with-prefetching**
- Data prefetching strategies
- Optimizing WebSocket application performance
- Reducing connection overhead

### Testing and Development

#### 18. **with-jest**
- Testing WebSocket functionality
- Unit tests for real-time components
- Mocking WebSocket connections

#### 19. **with-playwright**
- End-to-end testing for WebSocket apps
- Real-time interaction testing
- WebSocket connection testing

#### 20. **with-msw (Mock Service Worker)**
- Mocking WebSocket connections for development
- Testing real-time functionality
- Development environment setup

### Key WebSocket Implementation Patterns from Examples

#### Client-Side WebSocket Hook Pattern
```typescript
// Based on patterns from with-ably and with-supabase examples
'use client'

import { useEffect, useState } from 'react'

export function useWebSocket(url: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    const ws = new WebSocket(url)
    
    ws.onopen = () => {
      setIsConnected(true)
      setSocket(ws)
    }
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages(prev => [...prev, message])
    }
    
    ws.onclose = () => {
      setIsConnected(false)
    }
    
    return () => {
      ws.close()
    }
  }, [url])

  return { socket, isConnected, messages }
}
```

#### State Management Integration Pattern
```typescript
// Based on with-zustand patterns
import { create } from 'zustand'

interface WebSocketStore {
  isConnected: boolean
  messages: Message[]
  sendMessage: (message: string) => void
  setConnected: (connected: boolean) => void
}

export const useWebSocketStore = create<WebSocketStore>((set, get) => ({
  isConnected: false,
  messages: [],
  
  sendMessage: (message: string) => {
    // WebSocket send logic
  },
  
  setConnected: (connected: boolean) => {
    set({ isConnected: connected })
  },
}))
```

#### Custom Server Pattern
```typescript
// Based on with-custom-server example
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

  const wss = new WebSocket.Server({ server })
  
  wss.on('connection', (ws) => {
    // WebSocket logic here
  })

  server.listen(3000)
})
```

### Authentication Pattern for WebSocket
```typescript
// Based on with-auth0 and with-clerk patterns
import { useAuth } from '@clerk/nextjs'

export function useAuthenticatedWebSocket(url: string) {
  const { getToken } = useAuth()
  const [socket, setSocket] = useState<WebSocket | null>(null)
  
  useEffect(() => {
    const connectWithAuth = async () => {
      const token = await getToken()
      const ws = new WebSocket(`${url}?token=${token}`)
      setSocket(ws)
    }
    
    connectWithAuth()
  }, [url])
  
  return socket
}
```

These examples provide comprehensive patterns for building WebSocket applications with Next.js, covering authentication, state management, testing, and deployment scenarios.