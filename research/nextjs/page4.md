# Next.js Environment Variables Documentation

## Source
URL: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables

## Environment Variables in Next.js

Environment variables in Next.js provide a way to securely manage configuration and secrets in your application. Here are the key concepts:

### Loading Environment Variables

Next.js has built-in support for loading environment variables from `.env.local` into `process.env`. Example:

```env
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
```

### Environment Variable Prefix

By default, environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser.

In order to expose a variable to the browser, you must prefix the variable with `NEXT_PUBLIC_`:

```env
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

### Usage in Client Components

For WebSocket applications and client components, you'll need to use `NEXT_PUBLIC_` prefixed variables:

```typescript
// This will work in client components
const websocketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

// This will NOT work in client components (returns undefined)
const apiSecret = process.env.API_SECRET;
```

### Default Environment Variables

Next.js allows you to set defaults in `.env` (all environments), `.env.development` (development environment), and `.env.production` (production environment).

### Environment Variables in next.config.js

You can also use environment variables in your `next.config.js` file:

```javascript
module.exports = {
  env: {
    customKey: 'my-value',
  },
}
```

### Runtime Environment Variables

Environment variables can also be accessed at runtime in API routes and server components:

```typescript
// In API routes or server components
const dbUrl = process.env.DATABASE_URL;
```

### Security Considerations

- Never expose secrets (API keys, database credentials) with the `NEXT_PUBLIC_` prefix
- Use server-side environment variables for sensitive data
- Client-side environment variables are publicly accessible in the browser

### WebSocket Configuration Example

For WebSocket applications, you might configure environment variables like:

```env
# Server-side only
WEBSOCKET_SECRET=your-secret-key
DATABASE_URL=postgresql://...

# Client-side accessible
NEXT_PUBLIC_WEBSOCKET_URL=wss://your-websocket-server.com
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
```

This configuration allows your client components to connect to WebSocket servers while keeping sensitive server configuration secure.