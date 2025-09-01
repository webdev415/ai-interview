# MediaDevices.getDisplayMedia() - MDN Documentation

**URL**: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia

**Key Information**:

## Syntax & Parameters

### Options Object:
- **video**: Boolean or MediaTrackConstraints (default: true, required)
- **audio**: Boolean or MediaTrackConstraints (default: false)
- **controller**: CaptureController object (experimental)
- **monitorTypeSurfaces**: "include" | "exclude" (experimental)
- **preferCurrentTab**: Boolean (non-standard, experimental)
- **selfBrowserSurface**: "include" | "exclude" (experimental)
- **surfaceSwitching**: "include" | "exclude" (experimental)
- **systemAudio**: "include" | "exclude" (experimental) - CRITICAL FOR SYSTEM AUDIO

### Return Value:
Promise that resolves to a MediaStream containing:
- Video track (required)
- Optional audio track

## System Audio Support
The `systemAudio` parameter is experimental but critical:
- `"include"`: Browser should include system audio in choices
- `"exclude"`: Browser should exclude system audio
- Default value not mandated by spec, browser-specific

## Security Requirements:
- Transient user activation required (must be called from user event)
- Permission cannot be persisted - user prompted every time
- Options applied AFTER user selection, not for limiting choices

## Exceptions:
- `AbortError`: General error/failure
- `InvalidStateError`: Not called from transient activation or context issues
- `NotAllowedError`: Permission denied or policy blocked
- `NotFoundError`: No screen sources available
- `NotReadableError`: Hardware/OS level error
- `OverconstrainedError`: Constraints cannot be satisfied
- `TypeError`: Invalid options (e.g., video: false)

## Browser Compatibility Note:
"Browser support for audio tracks varies, both in terms of whether or not they're supported at all by the media recorder and in terms of the audio sources supported."