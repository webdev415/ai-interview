# Next.js Client Components Documentation

## Source
URL: https://nextjs.org/docs/app/building-your-application/rendering/client-components

## Client Components in Next.js

Client Components allow you to write interactive UI that can be pre-rendered on the server and use client-side JavaScript in the browser.

### What are Client Components?

Client Components are components that render on the client (browser) and can use client-side features like:
- Interactive event handlers (onClick, onChange, etc.)
- Browser-only APIs (localStorage, sessionStorage, geolocation, etc.)
- React hooks (useState, useEffect, useContext, etc.)

### Using Client Components

To mark a component as a client component, add the `'use client'` directive at the top:

```typescript
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

### WebSocket Usage in Client Components

For WebSocket applications, client components are essential:

```typescript
'use client'

import { useEffect, useState } from 'react'

export default function WebSocketComponent() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<string[]>([])
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL!)
    
    ws.onopen = () => {
      setIsConnected(true)
      console.log('Connected to WebSocket')
    }
    
    ws.onmessage = (event) => {
      setMessages(prev => [...prev, event.data])
    }
    
    ws.onclose = () => {
      setIsConnected(false)
      console.log('Disconnected from WebSocket')
    }
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }
    
    setSocket(ws)
    
    return () => {
      ws.close()
    }
  }, [])

  const sendMessage = (message: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message)
    }
  }

  return (
    <div>
      <div>Status: {isConnected ? 'Connected' : 'Disconnected'}</div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <button onClick={() => sendMessage('Hello Server!')}>
        Send Message
      </button>
    </div>
  )
}
```

### Client Component Best Practices

1. **Move Components Down the Tree**: Only use `'use client'` where you need interactivity
2. **Server and Client Component Composition**: You can import Server Components into Client Components as children
3. **Passing Props**: When passing data from Server to Client Components, props must be serializable

### Error Boundaries for WebSocket Apps

```typescript
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class WebSocketErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('WebSocket error:', error)
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong with the WebSocket connection.</h2>
    }

    return this.props.children
  }
}
```

### TypeScript Patterns for Client Components

```typescript
'use client'

import { useCallback, useEffect, useState } from 'react'

interface WebSocketMessage {
  type: string
  payload: any
  timestamp: number
}

interface UseWebSocketReturn {
  socket: WebSocket | null
  isConnected: boolean
  lastMessage: WebSocketMessage | null
  sendMessage: (message: WebSocketMessage) => void
}

export function useWebSocket(url: string): UseWebSocketReturn {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null)

  useEffect(() => {
    const ws = new WebSocket(url)
    
    ws.onopen = () => setIsConnected(true)
    ws.onclose = () => setIsConnected(false)
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)
        setLastMessage(message)
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error)
      }
    }

    setSocket(ws)
    
    return () => {
      ws.close()
    }
  }, [url])

  const sendMessage = useCallback((message: WebSocketMessage) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message))
    }
  }, [socket])

  return { socket, isConnected, lastMessage, sendMessage }
}
```

### Client-Side State Management

For complex WebSocket applications, consider using state management libraries:

```typescript
'use client'

import { create } from 'zustand'

interface WebSocketStore {
  isConnected: boolean
  messages: WebSocketMessage[]
  setConnected: (connected: boolean) => void
  addMessage: (message: WebSocketMessage) => void
}

export const useWebSocketStore = create<WebSocketStore>((set) => ({
  isConnected: false,
  messages: [],
  setConnected: (connected) => set({ isConnected: connected }),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
}))
```

### Performance Considerations

- Use `useCallback` and `useMemo` to prevent unnecessary re-renders
- Consider using `React.memo` for components that receive stable props
- Implement proper cleanup in `useEffect` to prevent memory leaks