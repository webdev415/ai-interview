Title: GitHub - deepgram/deepgram-js-sdk: Official JavaScript SDK for Deepgram.

URL Source: https://github.com/deepgram/deepgram-js-sdk/

Markdown Content:
Deepgram JavaScript SDK
-----------------------

[](https://github.com/deepgram/deepgram-js-sdk/#deepgram-javascript-sdk)
[![Image 1: Static Badge](https://camo.githubusercontent.com/32a2a341049b3f668f198edc55c4832b786668abb1842f4143fc4686d03339e8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2532345f5f2d446973636f72642d626c75653f6c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465266c696e6b3d6874747073253341253246253246646973636f72642e6767253246646565706772616d)](https://discord.gg/deepgram)[![Image 2: CI](https://github.com/deepgram/node-sdk/actions/workflows/CI.yml/badge.svg)](https://github.com/deepgram/node-sdk/actions/workflows/CI.yml)[![Image 3: npm (scoped)](https://camo.githubusercontent.com/b2d6144fa433317e8520d05c615c3564321a3d14cdffbfcc2b7dc25fe73324e6/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f40646565706772616d2f73646b)](https://www.npmjs.com/package/@deepgram/sdk)[![Image 4: Contributor Covenant](https://camo.githubusercontent.com/0e8fffce8bf627ee0ab89d704c908f43af30b7d3a098c2f90e00512c48edd555/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f6e7472696275746f72253230436f76656e616e742d76322e3025323061646f707465642d6666363962342e7376673f7374796c653d666c61742d726f756e646564)](https://github.com/deepgram/deepgram-js-sdk/blob/main/CODE_OF_CONDUCT.md)

> 🎯 **Development Setup**: This project uses [Corepack](https://nodejs.org/api/corepack.html) for package manager consistency. Run `corepack enable` once, then use `pnpm` commands normally. See [DEVELOPMENT.md](https://github.com/deepgram/deepgram-js-sdk/blob/main/DEVELOPMENT.md) for details.

*   [Documentation](https://github.com/deepgram/deepgram-js-sdk/#documentation)
*   [Migrating from earlier versions](https://github.com/deepgram/deepgram-js-sdk/#migrating-from-earlier-versions)
    *   [V2 to V3](https://github.com/deepgram/deepgram-js-sdk/#v2-to-v3)
    *   [V3.* to V3.4](https://github.com/deepgram/deepgram-js-sdk/#v3-to-v34)
    *   [V3.* to V4](https://github.com/deepgram/deepgram-js-sdk/#v3-to-v4)

*   [Installation](https://github.com/deepgram/deepgram-js-sdk/#installation)
    *   [UMD](https://github.com/deepgram/deepgram-js-sdk/#umd)
    *   [ESM](https://github.com/deepgram/deepgram-js-sdk/#esm)

*   [Authentication](https://github.com/deepgram/deepgram-js-sdk/#authentication)
    *   [1. API Key Authentication (Recommended)](https://github.com/deepgram/deepgram-js-sdk/#1-api-key-authentication-recommended)
    *   [2. Access Token Authentication](https://github.com/deepgram/deepgram-js-sdk/#2-access-token-authentication)
    *   [3. Proxy Authentication](https://github.com/deepgram/deepgram-js-sdk/#3-proxy-authentication)
    *   [Getting Credentials](https://github.com/deepgram/deepgram-js-sdk/#getting-credentials)
        *   [API Keys](https://github.com/deepgram/deepgram-js-sdk/#api-keys)
        *   [Access Tokens](https://github.com/deepgram/deepgram-js-sdk/#access-tokens)

    *   [Environment Variables](https://github.com/deepgram/deepgram-js-sdk/#environment-variables)
    *   [Getting an API Key](https://github.com/deepgram/deepgram-js-sdk/#getting-an-api-key)

*   [Scoped Configuration](https://github.com/deepgram/deepgram-js-sdk/#scoped-configuration)
    *   [Global Defaults](https://github.com/deepgram/deepgram-js-sdk/#global-defaults)
    *   [Namespace-specific Configurations](https://github.com/deepgram/deepgram-js-sdk/#namespace-specific-configurations)
    *   [Transport Options](https://github.com/deepgram/deepgram-js-sdk/#transport-options)
    *   [Examples](https://github.com/deepgram/deepgram-js-sdk/#examples)
        *   [Change the API url used for all SDK methods](https://github.com/deepgram/deepgram-js-sdk/#change-the-api-url-used-for-all-sdk-methods)
        *   [Change the API url used for the Voice Agent websocket](https://github.com/deepgram/deepgram-js-sdk/#change-the-api-url-used-for-the-voice-agent-websocket)
        *   [Change the API url used for transcription only](https://github.com/deepgram/deepgram-js-sdk/#change-the-api-url-used-for-transcription-only)
        *   [Override fetch transmitter](https://github.com/deepgram/deepgram-js-sdk/#override-fetch-transmitter)
        *   [Proxy requests in the browser](https://github.com/deepgram/deepgram-js-sdk/#proxy-requests-in-the-browser)
        *   [Set custom headers for fetch](https://github.com/deepgram/deepgram-js-sdk/#set-custom-headers-for-fetch)

*   [Browser Usage](https://github.com/deepgram/deepgram-js-sdk/#browser-usage)
*   [Transcription](https://github.com/deepgram/deepgram-js-sdk/#transcription)
    *   [Remote Files](https://github.com/deepgram/deepgram-js-sdk/#remote-files)
    *   [Local Files](https://github.com/deepgram/deepgram-js-sdk/#local-files)
    *   [Callbacks / Async](https://github.com/deepgram/deepgram-js-sdk/#callbacks--async)
    *   [Live Transcription (WebSocket)](https://github.com/deepgram/deepgram-js-sdk/#live-transcription-websocket)
    *   [Captions](https://github.com/deepgram/deepgram-js-sdk/#captions)

*   [Voice Agent](https://github.com/deepgram/deepgram-js-sdk/#voice-agent)
*   [Text to Speech](https://github.com/deepgram/deepgram-js-sdk/#text-to-speech)
    *   [Single-Request](https://github.com/deepgram/deepgram-js-sdk/#single-request)
    *   [Continuous Text Stream (WebSocket)](https://github.com/deepgram/deepgram-js-sdk/#continuous-text-stream-websocket)

*   [Text Intelligence](https://github.com/deepgram/deepgram-js-sdk/#text-intelligence)
*   [Token Management](https://github.com/deepgram/deepgram-js-sdk/#token-management)
    *   [Get Token Details](https://github.com/deepgram/deepgram-js-sdk/#get-token-details)
    *   [Grant Access Token](https://github.com/deepgram/deepgram-js-sdk/#grant-access-token)

*   [Projects](https://github.com/deepgram/deepgram-js-sdk/#projects)
    *   [Get Projects](https://github.com/deepgram/deepgram-js-sdk/#get-projects)
    *   [Get Project](https://github.com/deepgram/deepgram-js-sdk/#get-project)
    *   [Update Project](https://github.com/deepgram/deepgram-js-sdk/#update-project)
    *   [Delete Project](https://github.com/deepgram/deepgram-js-sdk/#delete-project)

*   [Keys](https://github.com/deepgram/deepgram-js-sdk/#keys)
    *   [List Keys](https://github.com/deepgram/deepgram-js-sdk/#list-keys)
    *   [Get Key](https://github.com/deepgram/deepgram-js-sdk/#get-key)
    *   [Create Key](https://github.com/deepgram/deepgram-js-sdk/#create-key)
    *   [Delete Key](https://github.com/deepgram/deepgram-js-sdk/#delete-key)

*   [Members](https://github.com/deepgram/deepgram-js-sdk/#members)
    *   [Get Members](https://github.com/deepgram/deepgram-js-sdk/#get-members)
    *   [Remove Member](https://github.com/deepgram/deepgram-js-sdk/#remove-member)

*   [Scopes](https://github.com/deepgram/deepgram-js-sdk/#scopes)
    *   [Get Member Scopes](https://github.com/deepgram/deepgram-js-sdk/#get-member-scopes)
    *   [Update Scope](https://github.com/deepgram/deepgram-js-sdk/#update-scope)

*   [Invitations](https://github.com/deepgram/deepgram-js-sdk/#invitations)
    *   [List Invites](https://github.com/deepgram/deepgram-js-sdk/#list-invites)
    *   [Send Invite](https://github.com/deepgram/deepgram-js-sdk/#send-invite)
    *   [Delete Invite](https://github.com/deepgram/deepgram-js-sdk/#delete-invite)
    *   [Leave Project](https://github.com/deepgram/deepgram-js-sdk/#leave-project)

*   [Usage](https://github.com/deepgram/deepgram-js-sdk/#usage)
    *   [Get All Requests](https://github.com/deepgram/deepgram-js-sdk/#get-all-requests)
    *   [Get Request](https://github.com/deepgram/deepgram-js-sdk/#get-request)
    *   [Summarize Usage](https://github.com/deepgram/deepgram-js-sdk/#summarize-usage)
    *   [Get Fields](https://github.com/deepgram/deepgram-js-sdk/#get-fields)
    *   [Summarize Usage (Deprecated)](https://github.com/deepgram/deepgram-js-sdk/#summarize-usage-1)

*   [Billing](https://github.com/deepgram/deepgram-js-sdk/#billing)
    *   [Get All Balances](https://github.com/deepgram/deepgram-js-sdk/#get-all-balances)
    *   [Get Balance](https://github.com/deepgram/deepgram-js-sdk/#get-balance)

*   [Models](https://github.com/deepgram/deepgram-js-sdk/#models)
    *   [Get All Models](https://github.com/deepgram/deepgram-js-sdk/#get-all-models)
    *   [Get All Project Models](https://github.com/deepgram/deepgram-js-sdk/#get-all-project-models)
    *   [Get Model](https://github.com/deepgram/deepgram-js-sdk/#get-model)

*   [On-Prem APIs](https://github.com/deepgram/deepgram-js-sdk/#on-prem-apis)
    *   [List On-Prem credentials](https://github.com/deepgram/deepgram-js-sdk/#list-on-prem-credentials)
    *   [Get On-Prem credentials](https://github.com/deepgram/deepgram-js-sdk/#get-on-prem-credentials)
    *   [Create On-Prem credentials](https://github.com/deepgram/deepgram-js-sdk/#create-on-prem-credentials)
    *   [Delete On-Prem credentials](https://github.com/deepgram/deepgram-js-sdk/#delete-on-prem-credentials)

*   [Backwards Compatibility](https://github.com/deepgram/deepgram-js-sdk/#backwards-compatibility)
*   [Development and Contributing](https://github.com/deepgram/deepgram-js-sdk/#development-and-contributing)
    *   [Debugging and making changes locally](https://github.com/deepgram/deepgram-js-sdk/#debugging-and-making-changes-locally)

*   [Getting Help](https://github.com/deepgram/deepgram-js-sdk/#getting-help)

Documentation
-------------

[](https://github.com/deepgram/deepgram-js-sdk/#documentation)
You can learn more about the Deepgram API at [developers.deepgram.com](https://developers.deepgram.com/docs).

Migrating from earlier versions
-------------------------------

[](https://github.com/deepgram/deepgram-js-sdk/#migrating-from-earlier-versions)
### V2 to V3

[](https://github.com/deepgram/deepgram-js-sdk/#v2-to-v3)
We have published [a migration guide on our docs](https://developers.deepgram.com/docs/js-sdk-v2-to-v3-migration-guide), showing how to move from v2 to v3.

### V3.* to V3.4

[](https://github.com/deepgram/deepgram-js-sdk/#v3-to-v34)
We recommend using only documented interfaces, as we strictly follow semantic versioning (semver) and breaking changes may occur for undocumented interfaces. To ensure compatibility, consider pinning your versions if you need to use undocumented interfaces.

### V3.* to V4

[](https://github.com/deepgram/deepgram-js-sdk/#v3-to-v4)
The Voice Agent interfaces have been updated to use the new Voice Agent V1 API. Please refer to our [Documentation](https://developers.deepgram.com/docs/voice-agent-v1-migration) on Migration to new V1 Agent API.

Installation
------------

[](https://github.com/deepgram/deepgram-js-sdk/#installation)
You can install this SDK directly from [[npm](https://www.npmjs.com/package/@deepgram/sdk)]([https://www.npmjs.com/package/@deepgram/sdk](https://www.npmjs.com/package/@deepgram/sdk)).

npm install @deepgram/sdk

or

pnpm install @deepgram/sdk

or

yarn add @deepgram/sdk

### UMD

[](https://github.com/deepgram/deepgram-js-sdk/#umd)
You can now use plain `<script>`s to import deepgram from CDNs, like:

<script src="https://cdn.jsdelivr.net/npm/@deepgram/sdk"></script>

or even:

<script src="https://unpkg.com/@deepgram/sdk"></script>

Then you can use it from a global deepgram variable:

<script>
  const { createClient } = deepgram;
  const deepgramClient = createClient("deepgram-api-key");

  console.log("Deepgram client instance: ", deepgramClient);
  // ...
</script>

### ESM

[](https://github.com/deepgram/deepgram-js-sdk/#esm)
You can now use type="module" `<script>`s to import deepgram from CDNs, like:

<script type="module">
  import { createClient } from "https://cdn.jsdelivr.net/npm/@deepgram/sdk/+esm";
  const deepgramClient = createClient("deepgram-api-key");

  console.log("Deepgram client instance: ", deepgramClient);
  // ...
</script>

Authentication
--------------

[](https://github.com/deepgram/deepgram-js-sdk/#authentication)
The Deepgram SDK supports three authentication methods:

### 1. API Key Authentication (Recommended)

[](https://github.com/deepgram/deepgram-js-sdk/#1-api-key-authentication-recommended)
Uses `Token` scheme in Authorization header.

import { createClient } from "@deepgram/sdk";

// Method 1: Pass API key as first parameter
const deepgramClient = createClient("YOUR_DEEPGRAM_API_KEY");

// Method 2: Pass API key in options object
const deepgramClient = createClient({ key: "YOUR_DEEPGRAM_API_KEY" });

// Method 3: Use environment variable (DEEPGRAM_API_KEY)
const deepgramClient = createClient();

### 2. Access Token Authentication

[](https://github.com/deepgram/deepgram-js-sdk/#2-access-token-authentication)
Uses `Bearer` scheme in Authorization header. Access tokens are temporary (30-second TTL) and must be obtained using an API key.

import { createClient } from "@deepgram/sdk";

// Must use accessToken property in options object
const deepgramClient = createClient({ accessToken: "YOUR_ACCESS_TOKEN" });

// Or use environment variable (DEEPGRAM_ACCESS_TOKEN)
const deepgramClient = createClient();

### 3. Proxy Authentication

[](https://github.com/deepgram/deepgram-js-sdk/#3-proxy-authentication)
For browser environments or custom proxy setups. Pass `"proxy"` as the API key.

import { createClient } from "@deepgram/sdk";

const deepgramClient = createClient("proxy", {
  global: { fetch: { options: { proxy: { url: "http://localhost:8080" } } } },
});

> **Important**: Your proxy must set the `Authorization: token DEEPGRAM_API_KEY` header and forward requests to Deepgram's API.

### Getting Credentials

[](https://github.com/deepgram/deepgram-js-sdk/#getting-credentials)
#### API Keys

[](https://github.com/deepgram/deepgram-js-sdk/#api-keys)
Create API keys via the Management API:

const { result, error } = await deepgramClient.manage.createProjectKey(projectId, {
  comment: "My API key",
  scopes: ["usage:write"],
});

**Endpoint**: `POST https://api.deepgram.com/v1/projects/:projectId/keys`

#### Access Tokens

[](https://github.com/deepgram/deepgram-js-sdk/#access-tokens)
Generate temporary access tokens (requires existing API key):

const { result, error } = await deepgramClient.auth.grantToken();
// Returns: { access_token: string, expires_in: 30 }

**Endpoint**: `POST https://api.deepgram.com/v1/auth/grant`

### Environment Variables

[](https://github.com/deepgram/deepgram-js-sdk/#environment-variables)
The SDK automatically checks for credentials in this priority order:

1.   `DEEPGRAM_ACCESS_TOKEN` (highest priority)
2.   `DEEPGRAM_API_KEY` (fallback)

### Getting an API Key

[](https://github.com/deepgram/deepgram-js-sdk/#getting-an-api-key)
🔑 To access the Deepgram API you will need a [free Deepgram API Key](https://console.deepgram.com/signup?jump=keys).

Scoped Configuration
--------------------

[](https://github.com/deepgram/deepgram-js-sdk/#scoped-configuration)
The SDK supports scoped configuration. You'll be able to configure various aspects of each namespace of the SDK from the initialization. Below outlines a flexible and customizable configuration system for the Deepgram SDK. Here's how the namespace configuration works:

### Global Defaults

[](https://github.com/deepgram/deepgram-js-sdk/#global-defaults)
*   The `global` namespace serves as the foundational configuration applicable across all other namespaces unless overridden.
*   Includes general settings like URL and headers applicable for all API calls.
*   If no specific configurations are provided for other namespaces, the `global` defaults are used.

### Namespace-specific Configurations

[](https://github.com/deepgram/deepgram-js-sdk/#namespace-specific-configurations)
*   Each namespace (`listen`, `manage`, `onprem`, `read`, `speak`) can have its specific configurations which override the `global` settings within their respective scopes.
*   Allows for detailed control over different parts of the application interacting with various Deepgram API endpoints.

### Transport Options

[](https://github.com/deepgram/deepgram-js-sdk/#transport-options)
*   Configurations for both `fetch` and `websocket` can be specified under each namespace, allowing different transport mechanisms for different operations.
*   For example, the `fetch` configuration can have its own URL and proxy settings distinct from the `websocket`.
*   The generic interfaces define a structure for transport options which include a client (like a `fetch` or `WebSocket` instance) and associated options (like headers, URL, proxy settings).

This configuration system enables robust customization where defaults provide a foundation, but every aspect of the client's interaction with the API can be finely controlled and tailored to specific needs through namespace-specific settings. This enhances the maintainability and scalability of the application by localizing configurations to their relevant contexts.

### Examples

[](https://github.com/deepgram/deepgram-js-sdk/#examples)
#### Change the API url used for all SDK methods

[](https://github.com/deepgram/deepgram-js-sdk/#change-the-api-url-used-for-all-sdk-methods)
Useful for using different API environments (for e.g. beta).

import { createClient } from "@deepgram/sdk";
// - or -
// const { createClient } = require("@deepgram/sdk");

const deepgramClient = createClient(DEEPGRAM_API_KEY, {
  global: { fetch: { options: { url: "https://api.beta.deepgram.com" } } },
});

#### Change the API url used for the Voice Agent websocket

[](https://github.com/deepgram/deepgram-js-sdk/#change-the-api-url-used-for-the-voice-agent-websocket)
Useful for using a voice agent proxy (for e.g. 3rd party provider auth).

import { createClient } from "@deepgram/sdk";
// - or -
// const { createClient } = require("@deepgram/sdk");

const deepgramClient = createClient(DEEPGRAM_API_KEY, {
  global: { websocket: { options: { url: "ws://localhost:8080" } } },
});

#### Change the API url used for transcription only

[](https://github.com/deepgram/deepgram-js-sdk/#change-the-api-url-used-for-transcription-only)
Useful for on-prem installations. Only affects requests to `/listen` endpoints.

import { createClient } from "@deepgram/sdk";
// - or -
// const { createClient } = require("@deepgram/sdk");

const deepgramClient = createClient(DEEPGRAM_API_KEY, {
  listen: { fetch: { options: { url: "http://localhost:8080" } } },
});

#### Override fetch transmitter

[](https://github.com/deepgram/deepgram-js-sdk/#override-fetch-transmitter)
Useful for providing a custom http client.

import { createClient } from "@deepgram/sdk";
// - or -
// const { createClient } = require("@deepgram/sdk");

const yourFetch = async () => {
  return Response("...etc");
};

const deepgramClient = createClient(DEEPGRAM_API_KEY, {
  global: { fetch: { client: yourFetch } },
});

#### Proxy requests in the browser

[](https://github.com/deepgram/deepgram-js-sdk/#proxy-requests-in-the-browser)
This SDK now works in the browser. If you'd like to make REST-based requests (pre-recorded transcription, on-premise, and management requests), then you'll need to use a proxy as we do not support custom CORS origins on our API. To set up your proxy, you configure the SDK like so:

import { createClient } from "@deepgram/sdk";

const deepgramClient = createClient("proxy", {
  global: { fetch: { options: { proxy: { url: "http://localhost:8080" } } } },
});

> Important: You must pass `"proxy"` as your API key, and use the proxy to set the `Authorization` header to your Deepgram API key.

Your proxy service should replace the Authorization header with `Authorization: token <DEEPGRAM_API_KEY>` and return results verbatim to the SDK.

Check out our example Node-based proxy here: [Deepgram Node Proxy](https://github.com/deepgram-devs/deepgram-node-proxy).

#### Set custom headers for fetch

[](https://github.com/deepgram/deepgram-js-sdk/#set-custom-headers-for-fetch)
Useful for many things.

import { createClient } from "@deepgram/sdk";

const deepgramClient = createClient({
  global: { fetch: { options: { headers: { "x-custom-header": "foo" } } } },
});

Browser Usage
-------------

[](https://github.com/deepgram/deepgram-js-sdk/#browser-usage)
The SDK works in modern browsers with some considerations:

### WebSocket Features (Full Support)

[](https://github.com/deepgram/deepgram-js-sdk/#websocket-features-full-support)
*   **Live Transcription**: ✅ Direct connection to `wss://api.deepgram.com`
*   **Voice Agent**: ✅ Direct connection to `wss://agent.deepgram.com`
*   **Live Text-to-Speech**: ✅ Direct connection to `wss://api.deepgram.com`

### REST API Features (Proxy Required)

[](https://github.com/deepgram/deepgram-js-sdk/#rest-api-features-proxy-required)
*   **Pre-recorded Transcription**: ⚠️ Requires proxy due to CORS
*   **Text Intelligence**: ⚠️ Requires proxy due to CORS
*   **Management APIs**: ⚠️ Requires proxy due to CORS

### Setup Options

[](https://github.com/deepgram/deepgram-js-sdk/#setup-options)
#### Option 1: CDN (UMD)

[](https://github.com/deepgram/deepgram-js-sdk/#option-1-cdn-umd)

<script src="https://cdn.jsdelivr.net/npm/@deepgram/sdk"></script>
<script>
  const { createClient } = deepgram;
  const deepgramClient = createClient("YOUR_API_KEY");
</script>

#### Option 2: CDN (ESM)

[](https://github.com/deepgram/deepgram-js-sdk/#option-2-cdn-esm)

<script type="module">
  import { createClient } from "https://cdn.jsdelivr.net/npm/@deepgram/sdk/+esm";
  const deepgramClient = createClient("YOUR_API_KEY");
</script>

#### Option 3: Proxy for REST APIs

[](https://github.com/deepgram/deepgram-js-sdk/#option-3-proxy-for-rest-apis)
See [proxy requests in the browser](https://github.com/deepgram/deepgram-js-sdk/#proxy-requests-in-the-browser) for REST API access.

Transcription
-------------

[](https://github.com/deepgram/deepgram-js-sdk/#transcription)
### Remote Files

[](https://github.com/deepgram/deepgram-js-sdk/#remote-files)
Transcribe audio from a URL.

const { result, error } = await deepgramClient.listen.prerecorded.transcribeUrl(
  { url: "https://dpgr.am/spacewalk.wav" },
  {
    model: "nova-3",
    // pre-recorded transcription options
  }
);

**API Endpoint**: `POST https://api.deepgram.com/v1/listen`

[See our API reference for more info](https://developers.deepgram.com/reference/speech-to-text-api/listen).

### Local Files

[](https://github.com/deepgram/deepgram-js-sdk/#local-files)
Transcribe audio from a file.

const { result, error } = await deepgramClient.listen.prerecorded.transcribeFile(
  fs.createReadStream("./examples/spacewalk.wav"),
  {
    model: "nova-3",
    // pre-recorded transcription options
  }
);

**API Endpoint**: `POST https://api.deepgram.com/v1/listen`

[See our API reference for more info](https://developers.deepgram.com/reference/speech-to-text-api/listen).

### Callbacks / Async

[](https://github.com/deepgram/deepgram-js-sdk/#callbacks--async)
We have a `Callback` version of both `transcribeFile` and `transcribeUrl`, which simply takes a `CallbackUrl` class.

import { CallbackUrl } from "@deepgram/sdk";

const { result, error } = await deepgramClient.listen.prerecorded.transcribeUrlCallback(
  { url: "https://dpgr.am/spacewalk.wav" },
  new CallbackUrl("http://callback/endpoint"),
  {
    model: "nova-3",
    // pre-recorded transcription options
  }
);

**API Endpoint**: `POST https://api.deepgram.com/v1/listen?callback=http://callback/endpoint`

[See our API reference for more info](https://developers.deepgram.com/reference/speech-to-text-api/listen).

### Live Transcription (WebSocket)

[](https://github.com/deepgram/deepgram-js-sdk/#live-transcription-websocket)
Connect to our websocket and transcribe live streaming audio.

const deepgramConnection = deepgramClient.listen.live({
  model: "nova-3",
  // live transcription options
});

deepgramConnection.on(LiveTranscriptionEvents.Open, () => {
  deepgramConnection.on(LiveTranscriptionEvents.Transcript, (data) => {
    console.log(data);
  });

  source.addListener("got-some-audio", async (event) => {
    deepgramConnection.send(event.raw_audio_data);
  });
});

**WebSocket Endpoint**: `wss://api.deepgram.com/v1/listen`

[See our API reference for more info](https://developers.deepgram.com/reference/speech-to-text-api/listen-streaming).

### Captions

[](https://github.com/deepgram/deepgram-js-sdk/#captions)
Convert deepgram transcriptions to captions.

import { webvtt, srt } from "@deepgram/sdk";

const { result, error } = await deepgramClient.listen.prerecorded.transcribeUrl({
  model: "nova-3",
  // pre-recorded transcription options
});

const vttResult = webvtt(result);
const srtResult = srt(result);

[See our standalone captions library for more information](https://github.com/deepgram/deepgram-node-captions).

Voice Agent
-----------

[](https://github.com/deepgram/deepgram-js-sdk/#voice-agent)
Configure a Voice Agent.

import { AgentEvents } from "@deepgram/sdk";

// Create an agent connection
const deepgramConnection = deepgramClient.agent();

// Set up event handlers
deepgramConnection.on(AgentEvents.Open, () => {
  console.log("Connection opened");

  // Set up event handlers
  deepgramConnection.on(AgentEvents.ConversationText, (data) => {
    console.log(data);
  });

  // other events

  // Configure the agent once connection is established
  deepgramConnection.configure({
    // agent configuration
  });

  // etc...
});

**WebSocket Endpoint**: `wss://agent.deepgram.com/v1/agent/converse`

[See our API reference for more info](https://developers.deepgram.com/reference/voice-agent-api/agent).

Text to Speech
--------------

[](https://github.com/deepgram/deepgram-js-sdk/#text-to-speech)
### Single-Request

[](https://github.com/deepgram/deepgram-js-sdk/#single-request)
Convert text into speech using the REST API.

const { result } = await deepgramClient.speak.request(
  { text },
  {
    model: "aura-2-thalia-en",
    // text to speech options
  }
);

**API Endpoint**: `POST https://api.deepgram.com/v1/speak`

[See our API reference for more info](https://developers.deepgram.com/reference/text-to-speech-api/speak).

### Continuous Text Stream (WebSocket)

[](https://github.com/deepgram/deepgram-js-sdk/#continuous-text-stream-websocket)
Connect to our websocket and send a continuous text stream to generate speech.

const deepgramConnection = deepgramClient.speak.live({
  model: "aura-2-thalia-en",
  // live text to speech options
});

deepgramConnection.on(LiveTTSEvents.Open, () => {
  console.log("Connection opened");

  // Send text data for TTS synthesis
  deepgramConnection.sendText(text);

  // Send Flush message to the server after sending the text
  deepgramConnection.flush();

  deepgramConnection.on(LiveTTSEvents.Close, () => {
    console.log("Connection closed");
  });
});

**WebSocket Endpoint**: `wss://api.deepgram.com/v1/speak`

[See our API reference for more info](https://developers.deepgram.com/reference/text-to-speech-api/speak-streaming).

Text Intelligence
-----------------

[](https://github.com/deepgram/deepgram-js-sdk/#text-intelligence)
Analyze text using our intelligence AI features.

const text = `The history of the phrase 'The quick brown fox jumps over the
lazy dog'. The earliest known appearance of the phrase was in The Boston
Journal...`;

const { result, error } = await deepgramClient.read.analyzeText(
  { text },
  {
    language: "en",
    // text intelligence options
  }
);

**API Endpoint**: `POST https://api.deepgram.com/v1/read`

[See our API reference for more info](https://developers.deepgram.com/reference/text-intelligence-api/text-read).

Token Management
----------------

[](https://github.com/deepgram/deepgram-js-sdk/#token-management)
### Get Token Details

[](https://github.com/deepgram/deepgram-js-sdk/#get-token-details)
Retrieves the details of the current authentication token.

const { result, error } = await deepgramClient.manage.getTokenDetails();

**API Endpoint**: `GET https://api.deepgram.com/v1/auth/token`

[See our API reference for more info](https://developers.deepgram.com/reference/authentication)

### Grant Access Token

[](https://github.com/deepgram/deepgram-js-sdk/#grant-access-token)
Creates a temporary access token with a 30-second TTL. Requires an existing API key for authentication.

// Create a temporary access token
const { result, error } = await deepgramClient.auth.grantToken();
// Returns: { access_token: string, expires_in: 30 }

// Use the access token in a new client instance
const tempClient = createClient({ accessToken: result.access_token });

**API Endpoint**: `POST https://api.deepgram.com/v1/auth/grant`

> **Important**: You _must_ pass an `accessToken` property to use a temporary token. Passing the token as a raw string will treat it as an API key and use the incorrect authorization scheme.

[See our API reference for more info](https://developers.deepgram.com/reference/token-based-auth-api/grant-token).

Projects
--------

[](https://github.com/deepgram/deepgram-js-sdk/#projects)
### Get Projects

[](https://github.com/deepgram/deepgram-js-sdk/#get-projects)
Returns all projects accessible by the API key.

const { result, error } = await deepgramClient.manage.getProjects();

**API Endpoint**: `GET https://api.deepgram.com/v1/projects`

[See our API reference for more info](https://developers.deepgram.com/reference/get-projects).

### Get Project

[](https://github.com/deepgram/deepgram-js-sdk/#get-project)
Retrieves a specific project based on the provided project_id.

const { result, error } = await deepgramClient.manage.getProject(projectId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId`

[See our API reference for more info](https://developers.deepgram.com/reference/get-project).

### Update Project

[](https://github.com/deepgram/deepgram-js-sdk/#update-project)
Update a project.

const { result, error } = await deepgramClient.manage.updateProject(projectId, options);

**API Endpoint**: `PATCH https://api.deepgram.com/v1/projects/:projectId`

[See our API reference for more info](https://developers.deepgram.com/reference/update-project).

### Delete Project

[](https://github.com/deepgram/deepgram-js-sdk/#delete-project)
Delete a project.

const { error } = await deepgramClient.manage.deleteProject(projectId);

**API Endpoint**: `DELETE https://api.deepgram.com/v1/projects/:projectId`

[See our API reference for more info](https://developers.deepgram.com/reference/delete-project).

Keys
----

[](https://github.com/deepgram/deepgram-js-sdk/#keys)
### List Keys

[](https://github.com/deepgram/deepgram-js-sdk/#list-keys)
Retrieves all keys associated with the provided project_id.

const { result, error } = await deepgramClient.manage.getProjectKeys(projectId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/keys`

[See our API reference for more info](https://developers.deepgram.com/reference/list-keys).

### Get Key

[](https://github.com/deepgram/deepgram-js-sdk/#get-key)
Retrieves a specific key associated with the provided project_id.

const { result, error } = await deepgramClient.manage.getProjectKey(projectId, projectKeyId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/keys/:keyId`

[See our API reference for more info](https://developers.deepgram.com/reference/get-key).

### Create Key

[](https://github.com/deepgram/deepgram-js-sdk/#create-key)
Creates an API key with the provided scopes.

const { result, error } = await deepgramClient.manage.createProjectKey(projectId, {
  comment: "My API key",
  scopes: ["usage:write"], // Required: array of scope strings
  tags: ["production"], // Optional: array of tag strings
  time_to_live_in_seconds: 86400, // Optional: TTL in seconds
  // OR use expiration_date: "2024-12-31T23:59:59Z" // Optional: ISO date string
});

**API Endpoint**: `POST https://api.deepgram.com/v1/projects/:projectId/keys`

[See our API reference for more info](https://developers.deepgram.com/reference/create-key).

### Delete Key

[](https://github.com/deepgram/deepgram-js-sdk/#delete-key)
Deletes a specific key associated with the provided project_id.

const { error } = await deepgramClient.manage.deleteProjectKey(projectId, projectKeyId);

**API Endpoint**: `DELETE https://api.deepgram.com/v1/projects/:projectId/keys/:keyId`

[See our API reference for more info](https://developers.deepgram.com/reference/delete-key).

Members
-------

[](https://github.com/deepgram/deepgram-js-sdk/#members)
### Get Members

[](https://github.com/deepgram/deepgram-js-sdk/#get-members)
Retrieves account objects for all of the accounts in the specified project_id.

const { result, error } = await deepgramClient.manage.getProjectMembers(projectId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/members`

[See our API reference for more info](https://developers.deepgram.com/reference/get-members).

### Remove Member

[](https://github.com/deepgram/deepgram-js-sdk/#remove-member)
Removes member account for specified member_id.

const { error } = await deepgramClient.manage.removeProjectMember(projectId, projectMemberId);

**API Endpoint**: `DELETE https://api.deepgram.com/v1/projects/:projectId/members/:memberId`

[See our API reference for more info](https://developers.deepgram.com/reference/remove-member).

Scopes
------

[](https://github.com/deepgram/deepgram-js-sdk/#scopes)
### Get Member Scopes

[](https://github.com/deepgram/deepgram-js-sdk/#get-member-scopes)
Retrieves scopes of the specified member in the specified project.

const { result, error } = await deepgramClient.manage.getProjectMemberScopes(
  projectId,
  projectMemberId
);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/members/:memberId/scopes`

[See our API reference for more info](https://developers.deepgram.com/reference/get-member-scopes).

### Update Scope

[](https://github.com/deepgram/deepgram-js-sdk/#update-scope)
Updates the scope for the specified member in the specified project.

const { result, error } = await deepgramClient.manage.updateProjectMemberScope(
  projectId,
  projectMemberId,
  options
);

**API Endpoint**: `PUT https://api.deepgram.com/v1/projects/:projectId/members/:memberId/scopes`

[See our API reference for more info](https://developers.deepgram.com/reference/update-scope).

Invitations
-----------

[](https://github.com/deepgram/deepgram-js-sdk/#invitations)
### List Invites

[](https://github.com/deepgram/deepgram-js-sdk/#list-invites)
Retrieves all invitations associated with the provided project_id.

const { result, error } = await deepgramClient.manage.getProjectInvites(projectId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/invites`

[See our API reference for more info](https://developers.deepgram.com/reference/list-invites).

### Send Invite

[](https://github.com/deepgram/deepgram-js-sdk/#send-invite)
Sends an invitation to the provided email address.

const { result, error } = await deepgramClient.manage.sendProjectInvite(projectId, options);

**API Endpoint**: `POST https://api.deepgram.com/v1/projects/:projectId/invites`

[See our API reference for more info](https://developers.deepgram.com/reference/send-invites).

### Delete Invite

[](https://github.com/deepgram/deepgram-js-sdk/#delete-invite)
Removes the specified invitation from the project.

const { error } = await deepgramClient.manage.deleteProjectInvite(projectId, email);

**API Endpoint**: `DELETE https://api.deepgram.com/v1/projects/:projectId/invites/:email`

[See our API reference for more info](https://developers.deepgram.com/reference/delete-invite).

### Leave Project

[](https://github.com/deepgram/deepgram-js-sdk/#leave-project)
Removes the authenticated user from the project.

const { result, error } = await deepgramClient.manage.leaveProject(projectId);

**API Endpoint**: `DELETE https://api.deepgram.com/v1/projects/:projectId/leave`

[See our API reference for more info](https://developers.deepgram.com/reference/leave-project).

Usage
-----

[](https://github.com/deepgram/deepgram-js-sdk/#usage)
### Get All Requests

[](https://github.com/deepgram/deepgram-js-sdk/#get-all-requests)
Retrieves all requests associated with the provided project_id based on the provided options.

const { result, error } = await deepgramClient.manage.getProjectUsageRequests(projectId, options);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/requests`

### Get Request

[](https://github.com/deepgram/deepgram-js-sdk/#get-request)
Retrieves a specific request associated with the provided project_id.

const { result, error } = await deepgramClient.manage.getProjectUsageRequest(projectId, requestId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/requests/:requestId`

[See our API reference for more info](https://developers.deepgram.com/reference/get-request).

### Summarize Usage

[](https://github.com/deepgram/deepgram-js-sdk/#summarize-usage)
Retrieves usage associated with the provided project_id based on the provided options.

const { result, error } = await deepgramClient.manage.getProjectUsageSummary(projectId, options);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/usage`

[See our API reference for more info](https://developers.deepgram.com/reference/summarize-usage).

### Get Fields

[](https://github.com/deepgram/deepgram-js-sdk/#get-fields)
Lists the features, models, tags, languages, and processing method used for requests in the specified project.

const { result, error } = await deepgramClient.manage.getProjectUsageFields(projectId, options);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/usage/fields`

[See our API reference for more info](https://developers.deepgram.com/reference/get-fields).

### Summarize Usage

[](https://github.com/deepgram/deepgram-js-sdk/#summarize-usage-1)
`Deprecated` Retrieves the usage for a specific project. Use Get Project Usage Breakdown for a more comprehensive usage summary.

const { result, error } = await deepgramClient.manage.getProjectUsage(projectId, options);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/usage` (deprecated)

[See our API reference for more info](https://developers.deepgram.com/reference/management-api/usage/get).

Billing
-------

[](https://github.com/deepgram/deepgram-js-sdk/#billing)
### Get All Balances

[](https://github.com/deepgram/deepgram-js-sdk/#get-all-balances)
Retrieves the list of balance info for the specified project.

const { result, error } = await deepgramClient.manage.getProjectBalances(projectId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/balances`

[See our API reference for more info](https://developers.deepgram.com/reference/get-all-balances).

### Get Balance

[](https://github.com/deepgram/deepgram-js-sdk/#get-balance)
Retrieves the balance info for the specified project and balance_id.

const { result, error } = await deepgramClient.manage.getProjectBalance(projectId, balanceId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/balances/:balanceId`

[See our API reference for more info](https://developers.deepgram.com/reference/get-balance).

Models
------

[](https://github.com/deepgram/deepgram-js-sdk/#models)
### Get All Models

[](https://github.com/deepgram/deepgram-js-sdk/#get-all-models)
Retrieves all models available globally.

const { result, error } = await deepgramClient.models.getAll();

**API Endpoint**: `GET https://api.deepgram.com/v1/models`

### Get All Project Models

[](https://github.com/deepgram/deepgram-js-sdk/#get-all-project-models)
Retrieves all models available for a given project.

const { result, error } = await deepgramClient.manage.getAllModels(projectId, {});

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/models`

[See our API reference for more info](https://developers.deepgram.com/reference/management-api/projects/list-models).

### Get Model

[](https://github.com/deepgram/deepgram-js-sdk/#get-model)
Retrieves details of a specific model.

const { result, error } = await deepgramClient.manage.getModel(projectId, modelId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/models/:modelId`

[See our API reference for more info](https://developers.deepgram.com/reference/management-api/models/get)

On-Prem APIs
------------

[](https://github.com/deepgram/deepgram-js-sdk/#on-prem-apis)
### List On-Prem credentials

[](https://github.com/deepgram/deepgram-js-sdk/#list-on-prem-credentials)
Lists sets of distribution credentials for the specified project.

const { result, error } = await deepgramClient.onprem.listCredentials(projectId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/onprem/distribution/credentials`

[See our API reference for more info](https://developers.deepgram.com/reference/self-hosted-api/list-credentials)

### Get On-Prem credentials

[](https://github.com/deepgram/deepgram-js-sdk/#get-on-prem-credentials)
Returns a set of distribution credentials for the specified project.

const { result, error } = await deepgramClient.onprem.getCredentials(projectId, credentialId);

**API Endpoint**: `GET https://api.deepgram.com/v1/projects/:projectId/onprem/distribution/credentials/:credentialsId`

[See our API reference for more info](https://developers.deepgram.com/reference/self-hosted-api/get-credentials)

### Create On-Prem credentials

[](https://github.com/deepgram/deepgram-js-sdk/#create-on-prem-credentials)
Creates a set of distribution credentials for the specified project.

const { result, error } = await deepgramClient.onprem.createCredentials(projectId, options);

**API Endpoint**: `POST https://api.deepgram.com/v1/projects/:projectId/onprem/distribution/credentials`

[See our API reference for more info](https://developers.deepgram.com/reference/self-hosted-api/create-credentials)

### Delete On-Prem credentials

[](https://github.com/deepgram/deepgram-js-sdk/#delete-on-prem-credentials)
Deletes a set of distribution credentials for the specified project.

const { result, error } = await deepgramClient.onprem.deleteCredentials(projectId, credentialId);

**API Endpoint**: `DELETE https://api.deepgram.com/v1/projects/:projectId/onprem/distribution/credentials/:credentialsId`

[See our API reference for more info](https://developers.deepgram.com/reference/self-hosted-api/delete-credentials)

Backwards Compatibility
-----------------------

[](https://github.com/deepgram/deepgram-js-sdk/#backwards-compatibility)
Older SDK versions will receive Priority 1 (P1) bug support only. Security issues, both in our code and dependencies, are promptly addressed. Significant bugs without clear workarounds are also given priority attention.

Development and Contributing
----------------------------

[](https://github.com/deepgram/deepgram-js-sdk/#development-and-contributing)
Interested in contributing? We ❤️ pull requests!

To make sure our community is safe for all, be sure to review and agree to our [Code of Conduct](https://github.com/deepgram/deepgram-js-sdk/blob/main/CODE_OF_CONDUCT.md). Then see the [Contribution](https://github.com/deepgram/deepgram-js-sdk/blob/main/CONTRIBUTING.md) guidelines for more information.

### Debugging and making changes locally

[](https://github.com/deepgram/deepgram-js-sdk/#debugging-and-making-changes-locally)
If you want to make local changes to the SDK and run the [`examples/`](https://github.com/deepgram/deepgram-js-sdk/blob/main/examples), you'll need to `pnpm build` first, to ensure that your changes are included in the examples that are running.

Getting Help
------------

[](https://github.com/deepgram/deepgram-js-sdk/#getting-help)
We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

*   [Open an issue in this repository](https://github.com/deepgram/deepgram-node-sdk/issues/new)
*   [Join the Deepgram Discord Community](https://discord.gg/xWRaCDBtW4)
*   [Join the Deepgram Github Discussions Community](https://github.com/orgs/deepgram/discussions)
