Title: Interim Results | Deepgram's Docs

URL Source: https://developers.deepgram.com/docs/interim-results

Markdown Content:
`interim_results`_boolean_. Default: `false`

Pre-recorded Streaming All available languages

Deepgram’s Interim Results monitors streaming audio and provides interim transcripts, which are preliminary results provided during the real-time streaming process which can help with speech detection.

Deepgram will identify a point at which its transcript has reached maximum accuracy and send a definitive, or final, transcript of all audio up to that point. It will then continue to process audio.

When working with real-time streaming audio, streams flow from your capture source (for example, microphone, browser, or telephony system) to Deepgram’s servers in irregular pieces. In some cases the collected audio can end abruptly—perhaps even mid-word—which means that Deepgram’s predictions, particularly for words near the tip of the audio stream, are more likely to be wrong.

When Interim Results is enabled Deepgram guesses about the words being spoken and sends these guesses to you as interim transcripts. As more audio enters the server, Deepgram corrects and improves the transcriptions, increasing its accuracy, until it reaches the end of the stream, at which point it sends one last, cumulative transcript.

Enable Feature
--------------

To enable Interim Results, when you call Deepgram’s API, add an `interim_results` parameter set to `true` in the query string:

`interim_results=true`

Python

`1# see https://github.com/deepgram/deepgram-python-sdk/blob/main/examples/streaming/async_microphone/main.py2# for complete example code34   options: LiveOptions = LiveOptions(5            model="nova-3",6            language="en-US",7            # Apply smart formatting to the output8            smart_format=True,9            # Raw audio format details10            encoding="linear16",11            channels=1,12            sample_rate=16000,13            # To get UtteranceEnd, the following must be set:14            interim_results=True,15            utterance_end_ms="1000",16            vad_events=True,17            # Time in milliseconds of silence to wait for before finalizing speech18            endpointing=30019        )`

Analyze Interim Transcripts
---------------------------

Let’s look at some interim transcripts and analyze their content.

Our first interim result has the following content:

JSON

`1{2  "channel_index": [3    0,4    15  ],6  "duration": 1.039875,7  "start": 0,8  "is_final": false,9  "channel": {10    "alternatives": [11      {12        "transcript": "another big",13        "confidence": 0.9600255,14        "words": [15          {16            "word": "another",17            "start": 0.2971154,18            "end": 0.7971154,19            "confidence": 0.958830320          },21          {22            "word": "big",23            "start": 0.85173076,24            "end": 1.039875,25            "confidence": 0.960025526          }27        ]28      }29    ]30  }31}`

In this response, we see that:

*   `start` (the number of seconds into the audio stream) is `0.0`, indicating that this is the very beginning of the real-time stream.
*   `start` + `duration` (the entire length of this response) is `1.039875` seconds, and the word “big” ends at `1.039875` seconds (which matches the `duration` value), indicating that the stream cuts off the word.
*   `confidence` for the word “big” is approximately 96%, indicating that even though the word is cut off, Deepgram is still pretty certain that its prediction is correct.
*   `is_final` is `false`, indicating that Deepgram will continue waiting to see if more data will improve its predictions.

The next interim response has the following content:

JSON

`1{2  "channel_index": [3    0,4    15  ],6  "duration": 2.039875,7  "start": 0,8  "is_final": false,9  "channel": {10    "alternatives": [11      {12        "transcript": "another big problem",13        "confidence": 0.9939844,14        "words": [15          {16            "word": "another",17            "start": 0.29852942,18            "end": 0.7985294,19            "confidence": 0.993984420          },21          {22            "word": "big",23            "start": 0.8557843,24            "end": 1.3557843,25            "confidence": 0.9822036626          },27          {28            "word": "problem",29            "start": 1.5722549,30            "end": 2.039875,31            "confidence": 0.995344132          }33        ]34      }35    ]36  }37}`

In this response, we see that:

*   `start` (the number of seconds into the audio stream) is 0, indicating that this is the very beginning of the real-time stream.
*   `start` + `duration` (the entire length of this response) is `2.039875` seconds, and the word “problem” ends at `2.039875` seconds (which matches the `duration` value), indicating that the stream cuts off the word.
*   `confidence` for the word “big” has improved to almost 98%.
*   the `end` timestamp for “big” now indicates that the word has not been cut off.
*   `confidence` for the word “problem” is almost 100%, so can likely be trusted.
*   `is_final` is `false`, indicating that Deepgram will continue waiting to see if more data will improve its predictions.

* * *
