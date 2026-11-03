import { AUDIO_TRACKS, cueAt, frameAt, type AudioKind, type PlaybackFrame } from './audioTimeline.js'

export interface MediaTransport {
  src: string; currentTime: number; duration: number; paused: boolean; ended: boolean
  error: { code: number } | null; playbackRate: number
  play(): Promise<void>; pause(): void; load(): void
  addEventListener(type: string, listener: EventListener): void
  removeEventListener(type: string, listener: EventListener): void
}
export type PlaybackPhase = 'idle' | 'silent' | 'starting' | 'playing' | 'buffering' | 'ended'
export type PlaybackSnapshot = { kind: AudioKind; phase: PlaybackPhase; cueIndex: number; introComplete: boolean; voiceEnabled: boolean; error: string; runId: number }
export const INITIAL_PLAYBACK: PlaybackSnapshot = { kind: 'intro', phase: 'idle', cueIndex: -1, introComplete: false, voiceEnabled: false, error: '', runId: 0 }

/** One transport, one timeline. Only explicit playback actions/unmount affect audio.
 * No scroll, intersection, viewport, focus-layout or visibility listeners live here. */
export class PlaybackController {
  private state: PlaybackSnapshot = { ...INITIAL_PLAYBACK }
  private listeners = new Set<() => void>()
  private frame: PlaybackFrame = frameAt('intro', 0, false)
  private timer: ReturnType<typeof setInterval> | undefined
  private disposed = false
  private replacing = false
  private token = 0
  private initialStarted = false
  private silentAt = 0
  private silentSeconds = 0
  private lastInquiryAt = -Infinity
  private now: () => number
  private autoTick: boolean
  private events: [string, EventListener][]

  constructor(private media: MediaTransport, options: { now?: () => number; autoTick?: boolean } = {}) {
    this.now = options.now ?? (() => performance.now())
    this.autoTick = options.autoTick !== false
    this.events = [
      ['playing', () => { if (this.liveAudio() && !this.media.paused) { this.change({ phase: 'playing' }); this.sample() } }],
      ['waiting', () => { if (this.liveAudio()) { this.change({ phase: 'buffering' }); this.sample() } }],
      ['timeupdate', () => this.sample()], ['seeked', () => this.sample()],
      ['ended', () => { if (this.liveAudio() && this.media.ended) this.finish() }],
      ['error', () => { if (this.liveAudio() && this.media.error) this.fail(this.token, new Error('media-load-error')) }],
      ['pause', () => {
        if (!this.replacing && this.liveAudio() && this.media.paused && !this.media.ended) this.fail(this.token, new Error('browser-paused'))
      }],
    ]
    this.events.forEach(([name, handler]) => media.addEventListener(name, handler))
  }
  snapshot = () => this.state
  playbackFrame = () => this.frame
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener) } }
  private change(patch: Partial<PlaybackSnapshot>) {
    if (this.disposed) return
    const next = { ...this.state, ...patch }
    if ((Object.keys(next) as (keyof PlaybackSnapshot)[]).every(key => next[key] === this.state[key])) return
    this.state = next; this.listeners.forEach(fn => fn())
  }
  private liveAudio() { return !this.disposed && this.state.voiceEnabled && ['starting', 'playing', 'buffering'].includes(this.state.phase) }
  private loop() { if (this.autoTick && this.timer === undefined) this.timer = setInterval(() => this.sample(), 60) }
  private stopLoop() { if (this.timer !== undefined) clearInterval(this.timer); this.timer = undefined }
  startSilentIntro() {
    if (this.disposed || this.initialStarted) return
    this.initialStarted = true; this.silentAt = this.now(); this.silentSeconds = 0
    this.frame = frameAt('intro', 0, false)
    this.change({ kind: 'intro', phase: 'silent', cueIndex: 0, runId: this.state.runId + 1 })
    this.loop()
  }
  /** Called directly in the Voice on click/tap handler, never after await. */
  enableVoice(context: AudioKind = 'intro') { this.play(context === 'inquiry' && this.state.introComplete ? 'inquiry' : 'intro') }
  activateInquiry(): boolean {
    if (this.disposed || !this.state.introComplete || !this.state.voiceEnabled) return false
    if (this.state.kind === 'inquiry' && this.liveAudio()) return false
    if (this.now() - this.lastInquiryAt < 12000) return false
    this.play('inquiry'); return true
  }
  private play(kind: AudioKind) {
    if (this.disposed) return
    const token = ++this.token
    this.initialStarted = true
    this.replacing = true; this.media.pause(); this.replacing = false
    this.media.src = AUDIO_TRACKS[kind].src; this.media.playbackRate = 1; this.media.load()
    try { this.media.currentTime = 0 } catch { /* a newly loaded source starts at zero */ }
    this.frame = frameAt(kind, 0, false)
    if (kind === 'inquiry') this.lastInquiryAt = this.now()
    this.change({ kind, phase: 'starting', cueIndex: kind === 'intro' ? 0 : 4, introComplete: kind === 'inquiry', voiceEnabled: true, error: '', runId: this.state.runId + 1 })
    this.loop()
    // play() itself stays synchronous with user activation, including on iOS.
    try {
      const promise = this.media.play()
      Promise.resolve(promise).then(() => {
        if (this.disposed || token !== this.token || !this.state.voiceEnabled) return
        if (!this.media.paused) { this.change({ phase: 'playing' }); this.sample() }
      }).catch(error => this.fail(token, error))
    } catch (error) { this.fail(token, error) }
  }
  mute() {
    if (this.disposed) return
    const time = this.liveAudio() ? this.media.currentTime || 0 : this.frame.seconds
    ++this.token
    const silent = !this.state.introComplete && this.state.kind === 'intro'
    this.change({ voiceEnabled: false, phase: silent ? 'silent' : 'ended', error: '' })
    this.replacing = true; this.media.pause(); this.replacing = false
    this.frame = frameAt(this.state.kind, time, false)
    this.silentAt = this.now(); this.silentSeconds = time
    if (silent) this.loop(); else this.stopLoop()
  }
  private fail(token: number, error: unknown) {
    if (this.disposed || token !== this.token) return
    const time = this.media.currentTime || 0
    const name = error instanceof Error ? error.name : ''
    const message = error instanceof Error ? error.message : ''
    const text = name === 'NotAllowedError' ? 'Audio was blocked. Tap Voice on to restart.'
      : message === 'browser-paused' ? 'Playback paused by your browser. Tap Voice on to restart.'
      : 'Voice file could not be played. Tap Voice on to retry.'
    const silent = this.state.kind === 'intro' && !this.state.introComplete
    ++this.token
    this.change({ voiceEnabled: false, phase: silent ? 'silent' : 'ended', error: text })
    this.replacing = true; this.media.pause(); this.replacing = false
    this.frame = frameAt(this.state.kind, time, false)
    this.silentAt = this.now(); this.silentSeconds = time
    if (silent) this.loop(); else this.stopLoop()
  }
  sample() {
    if (this.disposed || this.state.phase === 'idle' || this.state.phase === 'ended') return
    const silent = this.state.phase === 'silent'
    const time = silent ? this.silentSeconds + (this.now() - this.silentAt) / 1000 : this.media.currentTime || 0
    const duration = AUDIO_TRACKS[this.state.kind].duration
    if (silent && time >= duration) { this.finish(); return }
    this.frame = frameAt(this.state.kind, Math.min(time, duration), this.state.phase === 'playing' && !this.media.paused && !this.media.ended)
    this.change({ cueIndex: this.state.kind === 'intro' ? cueAt(time) : 4 })
    if (this.liveAudio() && this.media.ended) this.finish()
  }
  private finish() {
    this.frame = frameAt(this.state.kind, AUDIO_TRACKS[this.state.kind].duration, false)
    this.stopLoop(); this.change({ phase: 'ended', introComplete: true, cueIndex: 4 })
  }
  destroy() {
    this.disposed = true; ++this.token; this.stopLoop()
    this.events.forEach(([name, handler]) => this.media.removeEventListener(name, handler))
    this.media.pause(); this.frame.active = false; this.frame.level = 0; this.listeners.clear()
  }
}
