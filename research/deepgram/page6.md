Title: Authenticating | Deepgram's Docs

URL Source: https://developers.deepgram.com/docs/authenticating

Markdown Content:
Authenticating | Deepgram's Docs

===============

[![Image 1: Logo](https://files.buildwithfern.com/https://deepgram.docs.buildwithfern.com/2025-08-29T23:32:31.192Z/assets/logo-light.svg)![Image 2: Logo](https://files.buildwithfern.com/https://deepgram.docs.buildwithfern.com/2025-08-29T23:32:31.192Z/assets/logo-dark.svg)](https://developers.deepgram.com/)

Search

/

Ask AI

[Playground](https://playground.deepgram.com/)[Console](https://console.deepgram.com/)[Community](https://community.deepgram.com/)[Support](https://developers.deepgram.com/docs/support)[Free API Key](https://console.deepgram.com/signup)

[Home](https://developers.deepgram.com/home)[API Reference](https://developers.deepgram.com/reference/deepgram-api-overview)[Voice Agent](https://developers.deepgram.com/docs/voice-agent)[Speech-to-Text](https://developers.deepgram.com/docs/pre-recorded-audio)[Text-to-Speech](https://developers.deepgram.com/docs/tts-rest)[Intelligence](https://developers.deepgram.com/docs/audio-intelligence)[Self-Hosted Deployments](https://developers.deepgram.com/docs/self-hosted-introduction)

[Home](https://developers.deepgram.com/home)[API Reference](https://developers.deepgram.com/reference/deepgram-api-overview)[Voice Agent](https://developers.deepgram.com/docs/voice-agent)[Speech-to-Text](https://developers.deepgram.com/docs/pre-recorded-audio)[Text-to-Speech](https://developers.deepgram.com/docs/tts-rest)[Intelligence](https://developers.deepgram.com/docs/audio-intelligence)[Self-Hosted Deployments](https://developers.deepgram.com/docs/self-hosted-introduction)

*       *   [Home](https://developers.deepgram.com/home)
    *   [Support](https://developers.deepgram.com/support)
    *   [Changelogs](https://developers.deepgram.com/changelog) 

*   Trust & Security 
    *   [Security Policy](https://developers.deepgram.com/trust-security/security-policy)
    *   [Data Privacy Compliance](https://developers.deepgram.com/trust-security/data-privacy-compliance)
    *   [Information Security & Privacy](https://developers.deepgram.com/trust-security/information-security-privacy)

*   SDKs 
    *   [SDK Features](https://developers.deepgram.com/sdks/sdk-features)
    *   JavaScript SDK 
    *   Python SDK 
    *   .NET SDK 
    *   Go SDK 

*   Guides 
    *   
Fundamentals

        *   [Make Your First API Request](https://developers.deepgram.com/guides/fundamentals/make-your-first-api-request)
        *   [Authenticating](https://developers.deepgram.com/guides/fundamentals/authenticating)
        *   [Token-based Auth](https://developers.deepgram.com/guides/fundamentals/token-based-authentication)
        *   [Model Metadata](https://developers.deepgram.com/guides/fundamentals/model-metadata)
        *   [Using Custom Add On Parameters with SDKs](https://developers.deepgram.com/guides/fundamentals/using-custom-parameters-sdks)

    *   Deep Dives 
    *   Use Cases 
    *   Integrations 

[Playground](https://playground.deepgram.com/)[Console](https://console.deepgram.com/)[Community](https://community.deepgram.com/)[Support](https://developers.deepgram.com/docs/support)[Free API Key](https://console.deepgram.com/signup)

System

On this page

*   [Authenticating with the API Key](https://developers.deepgram.com/guides/fundamentals/authenticating#authenticating-with-the-api-key)
*   [Test Request](https://developers.deepgram.com/guides/fundamentals/authenticating#test-request)
*   [Additional Keys](https://developers.deepgram.com/guides/fundamentals/authenticating#additional-keys)

[Guides](https://developers.deepgram.com/guides/fundamentals/make-your-first-api-request)[Fundamentals](https://developers.deepgram.com/guides/fundamentals/make-your-first-api-request)

Authenticating
==============

Copy page

Learn how to authenticate with Deepgram's API.

If you need to create and distribute short-lived tokens for API requests, you can use the [token-based Auth API](https://developers.deepgram.com/reference/ephemeral-auth-api/grant-token).

Deepgram’s API uses API keys to authenticate requests. You can view and manage your API keys in the [Deepgram Console](https://console.deepgram.com/) or through the [Deepgram API](https://developers.deepgram.com/reference).

Your API keys grant many privileges, so be sure to keep them secure. Do not share your secret API keys in publicly accessible areas such as GitHub or client-side code.

For best results, use different API keys for testing and production. To help filter usage, you can also use different API keys for different consumers or teams at your organization.

If you still need an API key, you can [sign up to Deepgram today for free](https://console.deepgram.com/signup)!

Authenticating with the API Key
-------------------------------

Once you have created an API key, you can use it as credentials to call Deepgram’s API.

Send requests to the API with an `Authorization` header that references your project’s API key:

Text

`Authorization: Token YOUR_DEEPGRAM_API_KEY`

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests made without authentication will also fail.

Test Request
------------

A quick test to see if your key is validating correctly, is to make a request to the `/auth/token` endpoint on our API. This will return an `invalid credentials` error if your key is invalid, and a `JSON` response with details about your key if it’s valid.

cURL

`$curl https://api.deepgram.com/v1/auth/token \>  -H "Authorization: Token YOUR_DEEPGRAM_API_KEY"`

Additional Keys
---------------

To create additional API keys, be sure that the API key you are using to authenticate your request has been assigned either the `administrator` role or the following permissions: `keys:read`, `keys:write`.

Make sure you are sending API requests over HTTPS. Calls made over plain HTTP will fail. API requests made without authentication will also fail.

* * *

Was this page helpful?

Yes No

[Previous](https://developers.deepgram.com/guides/fundamentals/make-your-first-api-request)[#### Token-Based Auth Generates a temporary JSON Web Token (JWT) with a 30-second TTL (Time To Live) for Deepgram APIs. Next](https://developers.deepgram.com/guides/fundamentals/token-based-authentication)[Built with](https://buildwithfern.com/?utm_campaign=buildWith&utm_medium=docs&utm_source=developers.deepgram.com)

Ask AI 

Assistant

Hi, I'm an AI assistant with access to documentation and other content.

Tip: you can toggle this pane with

⌘
+

/

Suggestions

![Image 3](https://t.co/1/i/adsct?bci=4&dv=UTC%26en-US%26Google%20Inc.%26Linux%20x86_64%26255%26800%26600%264%2624%26800%26600%260%26na&eci=3&event=%7B%7D&event_id=d4250766-37a9-4a65-b971-ac58d435da02&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=8d487a91-14a4-47d7-ace4-c40366af8de3&tw_document_href=https%3A%2F%2Fdevelopers.deepgram.com%2Fguides%2Ffundamentals%2Fauthenticating&tw_iframe_status=0&txn_id=o6k8v&type=javascript&version=2.3.33)![Image 4](https://analytics.twitter.com/1/i/adsct?bci=4&dv=UTC%26en-US%26Google%20Inc.%26Linux%20x86_64%26255%26800%26600%264%2624%26800%26600%260%26na&eci=3&event=%7B%7D&event_id=d4250766-37a9-4a65-b971-ac58d435da02&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=8d487a91-14a4-47d7-ace4-c40366af8de3&tw_document_href=https%3A%2F%2Fdevelopers.deepgram.com%2Fguides%2Ffundamentals%2Fauthenticating&tw_iframe_status=0&txn_id=o6k8v&type=javascript&version=2.3.33)
