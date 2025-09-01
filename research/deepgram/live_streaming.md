Title: Getting Started | Deepgram's Docs

URL Source: https://developers.deepgram.com/docs/live-streaming-audio

Markdown Content:
In this guide, you’ll learn how to automatically transcribe live streaming audio in real time using Deepgram’s SDKs, which are supported for use with the [Deepgram API](https://developers.deepgram.com/reference). (If you prefer not to use a Deepgram SDK, jump to the section [Non-SDK Code Examples](https://developers.deepgram.com/docs/getting-started-with-live-streaming-audio#non-sdk-code-examples).)

Before you start, you’ll need to follow the steps in the [Make Your First API Request](https://developers.deepgram.com/docs/make-your-first-api-request) guide to obtain a Deepgram API key, and configure your environment if you are choosing to use a Deepgram SDK.

SDKs
----

To transcribe audio from an audio stream using one of Deepgram’s SDKs, follow these steps.

### Install the SDK

Open your terminal, navigate to the location on your drive where you want to create your project, and install the Deepgram SDK.

`1# Install the Deepgram Python SDK2# https://github.com/deepgram/deepgram-python-sdk34# $ pip install deepgram-sdk`

### Add Dependencies

`1# Install python-dotenv to protect your API key23# $ pip install python-dotenv`

### Transcribe Audio from a Remote Stream

The following code shows how to transcribe audio from a remote audio stream.

`1# Example filename: main.py23import httpx4import logging5from deepgram.utils import verboselogs6import threading78from deepgram import (9    DeepgramClient,10    DeepgramClientOptions,11    LiveTranscriptionEvents,12    LiveOptions,13)1415# URL for the realtime streaming audio you would like to transcribe16URL = "http://stream.live.vc.bbcmedia.co.uk/bbc_world_service"1718def main():19    try:20        # use default config21        deepgram: DeepgramClient = DeepgramClient()2223        # Create a websocket connection to Deepgram24        dg_connection = deepgram.listen.websocket.v("1")2526        def on_message(self, result, **kwargs):27            sentence = result.channel.alternatives[0].transcript28            if len(sentence) == 0:29                return30            print(f"speaker: {sentence}")3132        dg_connection.on(LiveTranscriptionEvents.Transcript, on_message)3334        # connect to websocket35        options = LiveOptions(model="nova-3")3637        print("\n\nPress Enter to stop recording...\n\n")38        if dg_connection.start(options) is False:39            print("Failed to start connection")40            return4142        lock_exit = threading.Lock()43        exit = False4445        # define a worker thread46        def myThread():47            with httpx.stream("GET", URL) as r:48                for data in r.iter_bytes():49                    lock_exit.acquire()50                    if exit:51                        break52                    lock_exit.release()5354                    dg_connection.send(data)5556        # start the worker thread57        myHttp = threading.Thread(target=myThread)58        myHttp.start()5960        # signal finished61        input("")62        lock_exit.acquire()63        exit = True64        lock_exit.release()6566        # Wait for the HTTP thread to close and join67        myHttp.join()6869        # Indicate that we've finished70        dg_connection.finish()7172        print("Finished")7374    except Exception as e:75        print(f"Could not open socket: {e}")76        return7778if __name__ == "__main__":79    main()`

The above example includes the parameter `model=nova-3`, which tells the API to use Deepgram’s latest model. Removing this parameter will result in the API using the default model, which is currently `model=base`.

It also includes Deepgram’s [Smart Formatting](https://developers.deepgram.com/docs/smart-format) feature, `smart_format=true`. This will format currency amounts, phone numbers, email addresses, and more for enhanced transcript readability.

Non-SDK Code Examples
---------------------

If you would like to try out making a Deepgram speech-to-text request in a specific language (but not using Deepgram’s SDKs), we offer a library of code-samples in this [Github repo](https://github.com/deepgram-devs/code-samples). However, we recommend first trying out our SDKs.

Results
-------

In order to see the results from Deepgram, you must run the application. Run your application from the terminal. Your transcripts will appear in your shell.

`1# Run your application using the file you created in the previous step2# Example: node index.js34node YOUR_PROJECT_NAME.js`

### Analyze the Response

The responses that are returned will look similar to this:

JSON

`1{2  "type": "Results",3  "channel_index": [4    0,5    16  ],7  "duration": 1.98,8  "start": 5.99,9  "is_final": true,10  "speech_final": true,11  "channel": {12    "alternatives": [13      {14        "transcript": "Tell me more about this.",15        "confidence": 0.99964225,16        "words": [17          {18            "word": "tell",19            "start": 6.0699997,20            "end": 6.3499994,21            "confidence": 0.99782443,22            "punctuated_word": "Tell"23          },24          {25            "word": "me",26            "start": 6.3499994,27            "end": 6.6299996,28            "confidence": 0.9998324,29            "punctuated_word": "me"30          },31          {32            "word": "more",33            "start": 6.6299996,34            "end": 6.79,35            "confidence": 0.9995466,36            "punctuated_word": "more"37          },38          {39            "word": "about",40            "start": 6.79,41            "end": 7.0299997,42            "confidence": 0.99984455,43            "punctuated_word": "about"44          },45          {46            "word": "this",47            "start": 7.0299997,48            "end": 7.2699995,49            "confidence": 0.99964225,50            "punctuated_word": "this"51          }52        ]53      }54    ]55  },56  "metadata": {57    "request_id": "52cc0efe-fa77-4aa7-b79c-0dda09de2f14",58    "model_info": {59      "name": "2-general-nova",60      "version": "2024-01-18.26916",61      "arch": "nova-2"62    },63    "model_uuid": "c0d1a568-ce81-4fea-97e7-bd45cb1fdf3c"64  },65  "from_finalize": false66}`

In this default response, we see:

*   `transcript`: the transcript for the audio segment being processed.

*   `confidence`: a floating point value between 0 and 1 that indicates overall transcript reliability. Larger values indicate higher confidence.

*   `words`: an object containing each `word` in the transcript, along with its `start` time and `end` time (in seconds) from the beginning of the audio stream, and a `confidence` value.

    *   Because we passed the `smart_format: true` option to the `transcription.prerecorded` method, each word object also includes its `punctuated_word` value, which contains the transformed word after punctuation and capitalization are applied.

*   `speech_final`: tells us this segment of speech naturally ended at this point. By default, Deepgram live streaming looks for any deviation in the natural flow of speech and returns a finalized response at these places. To learn more about this feature, see [Endpointing](https://developers.deepgram.com/docs/endpointing).

*   `is_final`: If this says `false`, it is indicating that Deepgram will continue waiting to see if more data will improve its predictions. Deepgram live streaming can return a series of interim transcripts followed by a final transcript. To learn more, see [Interim Results](https://developers.deepgram.com/docs/interim-results).

If your scenario requires you to keep the connection alive even while data is not being sent to Deepgram, you can send periodic KeepAlive messages to essentially “pause” the connection without closing it. To learn more, see [KeepAlive](https://developers.deepgram.com/docs/keep-alive).

What’s Next?
------------

Now that you’ve gotten transcripts for streaming audio, enhance your knowledge by exploring the following areas. You can also check out our [Live Streaming API Reference](https://developers.deepgram.com/reference/streaming) for a list of all possible parameters.

### Read the Feature Guides

Deepgram’s features help you to customize your transcripts.

*   [Language](https://developers.deepgram.com/docs/language): Learn how to transcribe audio in other languages.
*   [Feature Overview](https://developers.deepgram.com/docs/stt-streaming-feature-overview): Review the list of features available for streaming speech-to-text. Then, dive into individual guides for more details.

### Tips and tricks

*   [End of speech detection](https://developers.deepgram.com/docs/understanding-end-of-speech-detection) - Learn how to pinpoint end of speech post-speaking more effectively.
*   [Using interim results](https://developers.deepgram.com/docs/using-interim-results) - Learn how to use preliminary results provided during the streaming process which can help with speech detection.
*   [Measuring streaming latency](https://developers.deepgram.com/docs/measuring-streaming-latency) - Learn how to measure latency in real-time streaming of audio.

### Add Your Audio

*   Ready to connect Deepgram to your own audio source? Start by reviewing [how to determine your audio format](https://developers.deepgram.com/docs/determining-your-audio-format-for-live-streaming-audio) and format your API request accordingly.
*   Then, check out our [Live Streaming Starter Kit](https://developers.deepgram.com/docs/getting-started-with-the-streaming-test-suite). It’s the perfect “102” introduction to integrating your own audio.

### Explore Use Cases

*   Learn about the different ways you can use Deepgram products to help you meet your business objectives. [Explore Deepgram’s use cases](https://developers.deepgram.com/use-cases).

### Transcribe Pre-recorded Audio

*   Now that you know how to transcribe streaming audio, check out how you can use Deepgram to transcribe pre-recorded audio. To learn more, see [Getting Started with Pre-recorded Audio](https://developers.deepgram.com/docs/getting-started-with-pre-recorded-audio).

* * *
