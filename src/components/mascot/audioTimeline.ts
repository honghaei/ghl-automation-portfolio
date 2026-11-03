import { AUDIO_MANIFEST } from './audioManifest.js'
import { INTRO_LINES, INQUIRY } from './mascotModel.js'
export type AudioKind = 'intro' | 'inquiry'
export const AUDIO_TRACKS = AUDIO_MANIFEST.tracks
export const INTRO_CUE_STARTS = AUDIO_MANIFEST.introCueStarts
export type PlaybackFrame = { kind: AudioKind; seconds: number; active: boolean; level: number; charIndex: number; text: string }
export function cueAt(seconds: number): number {
  for (let i = INTRO_CUE_STARTS.length - 1; i >= 0; i--) if (seconds >= INTRO_CUE_STARTS[i]) return i
  return 0
}
export function frameAt(kind: AudioKind, seconds: number, active: boolean): PlaybackFrame {
  const track = AUDIO_TRACKS[kind]
  const index = Math.min(track.rms.length - 1, Math.max(0, Math.floor(seconds / AUDIO_MANIFEST.frameSeconds)))
  const cue = kind === 'intro' ? cueAt(seconds) : 0
  const text = kind === 'intro' ? INTRO_LINES[cue].text : INQUIRY
  const start = kind === 'intro' ? INTRO_CUE_STARTS[cue] : 0
  const end = kind === 'intro' ? INTRO_CUE_STARTS[cue + 1] ?? track.duration : track.duration
  const charIndex = Math.min(text.length - 1, Math.max(0, Math.floor((seconds - start) / (end - start) * text.length)))
  return { kind, seconds, active, level: active ? track.rms[index] / 255 : 0, charIndex, text }
}
