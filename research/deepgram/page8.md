Title: Live Audio | Deepgram's Docs

URL Source: https://developers.deepgram.com/reference/listen-live

Markdown Content:
### Headers

Authorization string Required

API key for authentication. Format should be be either ‘token <DEEPGRAM_API_KEY>’ or ‘Bearer <JWT_TOKEN>’

### Query parameters

callback string Optional

URL to which we'll make the callback request

callback_method enum Optional Defaults to `POST`

HTTP method by which the callback request will be made

Allowed values:

channels string Optional Defaults to `1`

The number of channels in the submitted audio

diarize boolean Optional

Defaults to `false`. Recognize speaker changes. Each word in the transcript will be assigned a speaker number starting at 0

dictation enum Optional Defaults to `false`

Identify and extract key entities from content in submitted audio

Allowed values:

encoding enum Optional

Specify the expected encoding of your submitted audio

endpointing string Optional Defaults to `10`

Indicates how long Deepgram will wait to detect whether a speaker has finished speaking or pauses for a significant period of time. When set to a value, the streaming endpoint immediately finalizes the transcription for the processed time range and returns the transcript with a speech_final parameter set to true. Can also be set to false to disable endpointing

extra string Optional

Arbitrary key-value pairs that are attached to the API response for usage in downstream processing

filler_words enum Optional Defaults to `false`

Filler Words can help transcribe interruptions in your audio, like "uh" and "um"

Allowed values:

interim_results enum Optional Defaults to `false`

Specifies whether the streaming endpoint should provide ongoing transcription updates as more audio is received. When set to true, the endpoint sends continuous updates, meaning transcription results may evolve over time

Allowed values:

keyterm list of strings Optional

Key term prompting can boost specialized terminology and brands. Only compatible with Nova-3

keywords string Optional

Keywords can boost or suppress specialized terminology and brands

language enum Optional Defaults to `en`

The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model you choose only certain languages are available

mip_opt_out string Optional Defaults to `false`

Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. [https://dpgr.am/deepgram-mip](https://dpgr.am/deepgram-mip)

model enum Optional

AI model to use for the transcription

multichannel enum Optional Defaults to `false`

Transcribe each audio channel independently

Allowed values:

numerals enum Optional Defaults to `false`

Convert numbers from written format to numerical format

Allowed values:

profanity_filter enum Optional Defaults to `false`

Profanity Filter looks for recognized profanity and converts it to the nearest recognized non-profane word or removes it from the transcript completely

Allowed values:

punctuate enum Optional Defaults to `false`

Add punctuation and capitalization to the transcript

Allowed values:

redact enum Optional Defaults to `false`

Redaction removes sensitive information from your transcripts

replace string Optional

Search for terms or phrases in submitted audio and replaces them

sample_rate string Optional

Sample rate of submitted audio. Required (and only read) when a value is provided for encoding

search string Optional

Search for terms or phrases in submitted audio

smart_format enum Optional Defaults to `false`

Apply formatting to transcript output. When set to true, additional formatting will be applied to transcripts to improve readability

Allowed values:

tag string Optional

Label your requests for the purpose of identification during usage reporting

utterance_end_ms string Optional

Indicates how long Deepgram will wait to send an UtteranceEnd message after a word has been transcribed. Use with interim_results

vad_events enum Optional Defaults to `false`

Indicates that speech has started. You'll begin receiving Speech Started messages upon speech starting

Allowed values:

version string Optional Defaults to `latest`

Version of an AI model to use
