Title: MediaStream Recording API - Web APIs | MDN

URL Source: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API

Markdown Content:
[Concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#concepts_and_usage)
-------------------------------------------------------------------------------------------------------------------

The MediaStream Recording API is comprised of a single major interface, [`MediaRecorder`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder), which does all the work of taking the data from a [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) and delivering it to you for processing. The data is delivered by a series of [`dataavailable`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/dataavailable_event "dataavailable") events, already in the format you specify when creating the `MediaRecorder`. You can then process the data further or write it to file as desired.

### [Overview of the recording process](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#overview_of_the_recording_process)

The process of recording a stream is simple:

1.   Set up a [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) or [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) (in the form of an [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio) or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) element) to serve as the source of the media data.
2.   Create a [`MediaRecorder`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) object, specifying the source stream and any desired options (such as the container's MIME type or the desired bit rates of its tracks).
3.   Set [`ondataavailable`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/dataavailable_event "ondataavailable") to an event handler for the [`dataavailable`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/dataavailable_event "dataavailable") event; this will be called whenever data is available for you.
4.   Once the source media is playing and you've reached the point where you're ready to record video, call [`MediaRecorder.start()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start) to begin recording.
5.   Your [`dataavailable`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/dataavailable_event "dataavailable") event handler gets called every time there's data ready for you to do with as you will; the event has a `data` attribute whose value is a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) that contains the media data. You can force a `dataavailable` event to occur, thereby delivering the latest sound to you so you can filter it, save it, or whatever.
6.   Recording stops automatically when the source media stops playing.
7.   You can stop recording at any time by calling [`MediaRecorder.stop()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stop).

**Note:** Individual [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)s containing slices of the recorded media will not necessarily be individually playable. The media needs to be reassembled before playback.

If anything goes wrong during recording, an [`error`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/error_event "error") event is sent to the `MediaRecorder`. You can listen for `error` events by setting up a [`onerror`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/error_event "onerror") event handler.

Example here, we use an HTML Canvas as source of the [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream), and stop recording after 9 seconds.

```
const canvas = document.querySelector("canvas");

// Optional frames per second argument.
const stream = canvas.captureStream(25);
const recordedChunks = [];

console.log(stream);
const options = { mimeType: "video/webm; codecs=vp9" };
const mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // …
  }
}
function download() {
  const blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout((event) => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### [Examining and controlling the recorder status](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#examining_and_controlling_the_recorder_status)

You can also use the properties of the `MediaRecorder` object to determine the state of the recording process, and its [`pause()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/pause "pause()") and [`resume()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/resume "resume()") methods to pause and resume recording of the source media.

If you need or want to check to see if a specific MIME type is supported, that's possible as well. Just call [`MediaRecorder.isTypeSupported()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/isTypeSupported_static "MediaRecorder.isTypeSupported()").

### [Examining potential input sources](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#examining_potential_input_sources)

If your goal is to record camera and/or microphone input, you may wish to examine the available input devices before beginning the process of constructing the `MediaRecorder`. To do so, you'll need to call [`navigator.mediaDevices.enumerateDevices()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices "navigator.mediaDevices.enumerateDevices()") to get a list of the available media devices. You can then examine that list and identify the potential input sources, and even filter the list based on desired criteria.

In this code snippet, `enumerateDevices()` is used to examine the available input devices, locate those which are audio input devices, and create [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option) elements that are then added to a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) element representing an input source picker.

```
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    const menu = document.getElementById("input-devices");
    if (device.kind === "audioinput") {
      const item = document.createElement("option");
      item.textContent = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
```

Code similar to this can be used to let the user restrict the set of devices they wish to use.

### [For more information](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#for_more_information)

To learn more about using the MediaStream Recording API, see [Using the MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), which shows how to use the API to record audio clips. A second article, [Recording a media element](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), describes how to receive a stream from an [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio) or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) element and use the captured stream (in this case, recording it and saving it to a local disk).

[Interfaces](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#interfaces)
---------------------------------------------------------------------------------------------------

[`BlobEvent`](https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent)
Each time a chunk of media data is finished being recorded, it's delivered to consumers in [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) form using a [`BlobEvent`](https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent) of type `dataavailable`.

[`MediaRecorder`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
The primary interface that implements the MediaStream Recording API.

[`MediaRecorderErrorEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent)Deprecated Non-standard
The interface that represents errors thrown by the MediaStream Recording API. Its [`error`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent/error "error") property is a [`DOMException`](https://developer.mozilla.org/en-US/docs/Web/API/DOMException) that specifies that error occurred.

[Examples](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#examples)
-----------------------------------------------------------------------------------------------

### [Basic video recording](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#basic_video_recording)

```
<button id="record-btn">Start</button>
<video id="player" src="" autoplay controls></video>
```

```
const recordBtn = document.getElementById("record-btn");
const video = document.getElementById("player");

let chunks = [];
let isRecording = false;
let mediaRecorder = null;

const constraints = { video: true };

recordBtn.addEventListener("click", async () => {
  if (!isRecording) {
    // Acquire a recorder on load
    if (!mediaRecorder) {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.addEventListener("dataavailable", (e) => {
        console.log("data available");
        chunks.push(e.data);
      });
      mediaRecorder.addEventListener("stop", (e) => {
        console.log("onstop fired");
        const blob = new Blob(chunks, { type: "video/ogv; codecs=opus" });
        video.src = window.URL.createObjectURL(blob);
      });
      mediaRecorder.addEventListener("error", (e) => {
        console.error("An error occurred:", e);
      });
    }
    isRecording = true;
    recordBtn.textContent = "Stop";
    chunks = [];
    mediaRecorder.start();
    console.log("recorder started");
  } else {
    isRecording = false;
    recordBtn.textContent = "Start";
    mediaRecorder.stop();
    console.log("recorder stopped");
  }
});
```

[Specifications](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#specifications)
-----------------------------------------------------------------------------------------------------------

| Specification |
| --- |
| [MediaStream Recording](https://w3c.github.io/mediacapture-record/) |

[Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#browser_compatibility)
-------------------------------------------------------------------------------------------------------------------------

[See also](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API#see_also)
-----------------------------------------------------------------------------------------------

*   [Media Capture and Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API) landing page
*   [`MediaDevices.getUserMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
*   [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://github.com/samdutton)
*   [HTML5's Media Recorder API in Action on Chrome and Firefox](https://blog.addpipe.com/mediarecorder-api/)
*   [MediaRecorder polyfill](https://github.com/ai/audio-recorder-polyfill) for Safari and Edge
*   [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML video capture/playback/download using getUserMedia and the MediaStream Recording API ([source on GitHub](https://github.com/chrisjohndigital/TutorRoom))
*   [Advanced media stream recorder sample](https://quickblox.github.io/javascript-media-recorder/sample/)
*   [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML video language lab web application using MediaDevices and the MediaStream Recording API for video recording ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))
*   [MediaStream Recorder API Now Available in Safari Technology Preview 73](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
