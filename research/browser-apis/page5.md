# MediaStreamTrack - MDN Documentation

**URL**: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack

## Key Properties:

### Core Properties:
- **id**: Read-only string containing unique identifier (GUID)
- **kind**: Read-only string - "audio" or "video"
- **label**: Read-only string describing the source (e.g., "internal microphone")
- **enabled**: Boolean - true allows rendering, false mutes/blacks out
- **muted**: Read-only Boolean - unable to provide data due to technical issue
- **readyState**: Read-only enum - "live" (active) or "ended"

### Content Hint:
- **contentHint**: String hint for content type, guides API consumer behavior
- Values depend on track.kind property

## Key Methods:

### Constraint Management:
- **applyConstraints()**: Apply ideal/acceptable value ranges
- **getCapabilities()**: Get accepted values/ranges for constrainable properties  
- **getConstraints()**: Get currently set constraints
- **getSettings()**: Get current values of constrainable properties

### Track Control:
- **clone()**: Create duplicate of the track
- **stop()**: Stop playing source, disassociate track, set state to "ended"

## Events:
- **ended**: Track playback ends (readyState becomes "ended")
- **mute**: Track becomes unable to provide data (muted becomes true)
- **unmute**: Track can provide data again (muted becomes false)

## Important Notes:
- **enabled vs muted**: 
  - `enabled = false` implements standard "mute" functionality
  - `muted = true` indicates technical issue preventing data flow
- **Constrainable Properties**: Must use applyConstraints(), getConstraints(), getSettings() correctly or code will be unreliable
- **Label Changes**: Label doesn't change when track is disassociated from source