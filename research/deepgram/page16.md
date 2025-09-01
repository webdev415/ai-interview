Title: Audio Keep Alive | Deepgram's Docs

URL Source: https://developers.deepgram.com/docs/keep-alive

Markdown Content:
Streaming

Use the `KeepAlive` message to keep your WebSocket connection open during periods of silence, preventing timeouts and optimizing costs.

Purpose
-------

Send a `KeepAlive` message every 3-5 seconds to prevent the 10-second timeout that triggers a `NET-0001` error and closes the connection. Ensure the message is sent as a text WebSocket frame—sending it as binary may result in incorrect handling and potential connection issues.

Example Payloads
----------------

To send the `KeepAlive` message, send the following JSON message to the server:

JSON

`1{2  "type": "KeepAlive"3}`

The server will not send a response back when you send a `KeepAlive` message. If no audio data or `KeepAlive` messages are sent within a 10-second window, the connection will close with a `NET-0001` error.

Language Specific Implementations
---------------------------------

Below are code examples to help you get started using `KeepAlive`.

### Sending a `KeepAlive` message in JSON Format

Construct a JSON message containing the `KeepAlive` type and send it over the WebSocket connection in each respective language.

`1const WebSocket = require("ws");23// Assuming 'headers' is already defined for authorization4const ws = new WebSocket("wss://api.deepgram.com/v1/listen", { headers });56// Assuming 'ws' is the WebSocket connection object7const keepAliveMsg = JSON.stringify({ type: "KeepAlive" });8ws.send(keepAliveMsg);`

### Streaming Examples

Make a streaming request and use `KeepAlive` to keep the connection open.

`1const WebSocket = require("ws");23const authToken = "DEEPGRAM_API_KEY"; // Replace 'DEEPGRAM_API_KEY' with your actual authorization token4const headers = {5  Authorization: `Token ${authToken}`,6};78// Initialize WebSocket connection9const ws = new WebSocket("wss://api.deepgram.com/v1/listen", { headers });1011// Handle WebSocket connection open event12ws.on("open", function open() {13  console.log("WebSocket connection established.");1415  // Send audio data (replace this with your audio streaming logic)16  // Example: Read audio from a microphone and send it over the WebSocket17  // For demonstration purposes, we're just sending a KeepAlive message1819  setInterval(() => {20    const keepAliveMsg = JSON.stringify({ type: "KeepAlive" });21    ws.send(keepAliveMsg);22    console.log("Sent KeepAlive message");23  }, 3000); // Sending KeepAlive messages every 3 seconds24});2526// Handle WebSocket message event27ws.on("message", function incoming(data) {28  console.log("Received:", data);29  // Handle received data (transcription results, errors, etc.)30});3132// Handle WebSocket close event33ws.on("close", function close() {34  console.log("WebSocket connection closed.");35});3637// Handle WebSocket error event38ws.on("error", function error(err) {39  console.error("WebSocket error:", err.message);40});4142// Gracefully close the WebSocket connection when done43function closeWebSocket() {44  const closeMsg = JSON.stringify({ type: "CloseStream" });45  ws.send(closeMsg);46}4748// Call closeWebSocket function when you're finished streaming audio49// For example, when user stops recording or when the application exits50// closeWebSocket();`

Using Deepgram SDKs
-------------------

Deepgram’s SDKs make it easier to build with Deepgram in your preferred language. For more information on using Deepgram SDKs, refer to the SDKs documentation in the GitHub Repository.

`1const { createClient, LiveTranscriptionEvents } = require("@deepgram/sdk");23const live = async () => {4  const deepgram = createClient("DEEPGRAM_API_KEY");5  let connection;6  let keepAlive;78  const setupDeepgram = () => {9    connection = deepgram.listen.live({10      model: "nova-3",11      utterance_end_ms: 1500,12      interim_results: true,13    });1415    if (keepAlive) clearInterval(keepAlive);16    keepAlive = setInterval(() => {17      console.log("KeepAlive sent.");18      connection.keepAlive();19    }, 3000); // Sending KeepAlive messages every 3 seconds2021    connection.on(LiveTranscriptionEvents.Open, () => {22      console.log("Connection opened.");23    });2425    connection.on(LiveTranscriptionEvents.Close, () => {26      console.log("Connection closed.");27      clearInterval(keepAlive);28    });2930    connection.on(LiveTranscriptionEvents.Metadata, (data) => {31      console.log(data);32    });3334    connection.on(LiveTranscriptionEvents.Transcript, (data) => {35      console.log(data.channel);36    });3738    connection.on(LiveTranscriptionEvents.UtteranceEnd, (data) => {39      console.log(data);40    });4142    connection.on(LiveTranscriptionEvents.SpeechStarted, (data) => {43      console.log(data);44    });4546    connection.on(LiveTranscriptionEvents.Error, (err) => {47      console.error(err);48    });49  };5051  setupDeepgram();52};5354live();`

Word Timings
------------

Word timings in streaming transcription results are based on the audio stream itself, not the lifetime of the WebSocket connection. If you send KeepAlive messages without any audio payloads for a period of time, then resume sending audio, the timestamps will continue from where the audio left off—not from when the KeepAlive messages were sent.

Here is an example timeline demonstrating the behavior.

| Event | Wall Time | Word Timing Range on Results Response |
| --- | --- | --- |
| Websocket opened, begin sending audio payloads | 0 seconds | 0 seconds |
| Results received | 5 seconds | 0-5 seconds |
| Results received | 10 seconds | 5-10 seconds |
| Pause sending audio payloads, while sending `KeepAlive` messages | 10 seconds | _n/a_ |
| Resume sending audio payloads | 30 seconds | _n/a_ |
| Results received | 35 seconds | 10-15 seconds |

* * *
