import { useEffect, useRef, useState } from 'react'
import MouthRig from './MouthRig'
import GreetingArt from './GreetingArt'
import { INQUIRY, INTRO_LINES, type Pose } from './mascotModel'
import { AUDIO_TRACKS, frameAt, type PlaybackFrame } from './audioTimeline'
import { INITIAL_PLAYBACK, PlaybackController } from './PlaybackController'
import './TalkingMascot.css'
import { isTourPlaying, subscribeTourPriority } from '../tour/tourAudioPriority'

const ASSETS = '/assets/mascot/'
const POSES: Pose[] = ['idle', 'greeting', 'explaining', 'closing', 'thinking']
const CROP: Record<Pose, [number, number]> = { idle: [-270, 9], greeting: [-800, 9], explaining: [-270, -530], closing: [-800, -530], thinking: [66.7, -1] }
const MESSAGES = [...INTRO_LINES.map(l => l.text), INQUIRY]
type Props = { contactHref?: string }
export default function TalkingMascot({ contactHref = '#contact' }: Props) {
  const [playback, setPlayback] = useState(INITIAL_PLAYBACK)
  const [tourPlaying, setTourPlaying] = useState(isTourPlaying)
  const [ready, setReady] = useState(false)
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const media = useRef<HTMLAudioElement>(null)
  const controller = useRef<PlaybackController | null>(null)
  const readFrame = useRef<() => PlaybackFrame>(() => frameAt('intro', 0, false))
  const hoverTimer = useRef<number>()
  const openRef = useRef(false)
  const pointerType = useRef('')
  const tapWasOpen = useRef(false)
  const complete = playback.introComplete
  const inquiryVisible = complete && inquiryOpen
  const introActive = !complete && playback.cueIndex >= 0
  const line = introActive ? INTRO_LINES[Math.min(playback.cueIndex, 3)].text : inquiryVisible ? INQUIRY : ''
  const pose: Pose = introActive ? INTRO_LINES[Math.min(playback.cueIndex, 3)].pose : inquiryVisible ? 'thinking' : 'idle'
  const speaking = playback.phase === 'playing'

  useEffect(() => {
    if (!media.current) return
    media.current.setAttribute('playsinline', '')
    const c = new PlaybackController(media.current)
    controller.current = c; readFrame.current = c.playbackFrame
    const update = () => setPlayback(c.snapshot())
    const unsubscribe = c.subscribe(update); update()
    const unsubscribeTour = subscribeTourPriority(active => {
      setTourPlaying(active)
      if (active) c.mute()
    })
    const leavePage = () => c.mute()
    window.addEventListener('pagehide', leavePage)
    return () => {
      window.removeEventListener('pagehide', leavePage)
      unsubscribeTour(); unsubscribe(); window.clearTimeout(hoverTimer.current); c.destroy()
      controller.current = null; readFrame.current = () => frameAt('intro', 0, false)
    }
  }, [])
  useEffect(() => {
    let alive = true
    const img = new Image(); img.src = `${ASSETS}approved-poses.png`
    img.decode().catch(() => undefined).then(() => { if (alive) setReady(true) })
    return () => { alive = false }
  }, [])
  useEffect(() => {
    if (!ready) return
    const timer = window.setTimeout(() => controller.current?.startSilentIntro(), 650)
    return () => window.clearTimeout(timer)
  }, [ready])
  useEffect(() => {
    if (playback.cueIndex < 2) return
    const img = new Image(); img.src = `${ASSETS}think-cutout.png`
  }, [playback.cueIndex >= 2])

  const closeInquiry = () => {
    window.clearTimeout(hoverTimer.current)
    openRef.current = false; setInquiryOpen(false)
    // Dismissing the cloud is separate from stopping an already-playing recording.
  }
  const openInquiry = (source: 'hover' | 'focus' | 'tap') => {
    const c = controller.current
    if (!c?.snapshot().introComplete || openRef.current) return
    openRef.current = true; setInquiryOpen(true)
    if (source === 'hover') hoverTimer.current = window.setTimeout(() => c.activateInquiry(), 220)
    else c.activateInquiry()
  }
  useEffect(() => {
    if (!inquiryVisible) return
    const outside = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) closeInquiry() }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [inquiryVisible])
  const toggleVoice = () => {
    const c = controller.current
    if (!c || isTourPlaying()) return
    if (c.snapshot().voiceEnabled) { c.mute(); return }
    window.clearTimeout(hoverTimer.current)
    if (inquiryVisible) c.enableVoice('inquiry')
    else {
      openRef.current = false; setInquiryOpen(false)
      c.enableVoice('intro') // play() runs here, in the click/tap gesture, from zero.
    }
  }

  return (
    <div ref={root} className="talking-mascot" data-state={pose} data-intro-complete={complete}
      data-audio-phase={playback.phase} data-audio-kind={playback.kind} data-audio-run={playback.runId}
      onPointerLeave={e => { if (e.pointerType !== 'touch' && !root.current?.contains(document.activeElement)) closeInquiry() }}
      onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeInquiry() }}
      onKeyDown={e => { pointerType.current = ''; if (e.key === 'Escape') { e.preventDefault(); closeInquiry() } }}>
      <audio ref={media} src={AUDIO_TRACKS.intro.src} preload="metadata" hidden aria-hidden="true" tabIndex={-1}/>
      <div className="mascot-caption-space">
        {/* All variants share a natural grid track. Even the longest message/CTA
            has its own space; browser chrome, focus and scroll never move it. */}
        {MESSAGES.map((message, i) => <div key={i} className="mascot-cloud-sizer" aria-hidden="true">
          <span className="mascot-bubble-label">{i === 4 ? "Let's talk" : 'Meet Charles'}</span>
          <p>{message}</p>
          {i === 4 && <span className="mascot-contact-reserve">Send me a message <span>↗</span></span>}
          <span className="mascot-voice-bars"><i/><i/><i/><i/><i/><i/><i/></span>
        </div>)}
        {line && <div className={`mascot-bubble ${inquiryVisible ? 'mascot-bubble--inquiry' : ''}`} id="mascot-caption" role="status" aria-live="polite" aria-atomic="true">
          <svg className="mascot-cloud-art" viewBox="0 0 320 240" preserveAspectRatio="none" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" d="M35 36 C33 17 59 8 77 20 C89 2 119 1 136 16 C154 2 183 3 200 18 C220 7 247 13 253 29 C278 20 307 39 301 61 C324 76 325 101 310 120 C325 141 311 165 291 172 C290 195 262 211 241 198 C224 215 195 216 178 205 C156 221 127 215 112 202 C88 214 61 204 55 185 C33 186 16 166 26 148 C8 131 11 108 24 96 C10 76 16 49 35 46 Z"/>
            <path className="mascot-cloud-tail-side" vectorEffect="non-scaling-stroke" d="M29 105 L4 131 L30 125"/>
            <path className="mascot-cloud-tail-down" vectorEffect="non-scaling-stroke" d="M135 210 L151 236 L170 208"/>
          </svg>
          <span className="mascot-bubble-label">{inquiryVisible ? "Let's talk" : 'Meet Charles'}</span>
          <p>{line}</p>
          {inquiryVisible && <a href={contactHref} className="mascot-contact" onClick={closeInquiry}>Send me a message <span aria-hidden="true">↗</span></a>}
          <span className={`mascot-voice-bars ${speaking ? 'is-speaking' : ''}`} aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></span>
        </div>}
      </div>
      <button type="button" className="mascot-character" aria-label={complete ? 'Ask Charles about a project' : 'Charles is introducing himself'}
        aria-expanded={inquiryVisible} aria-controls={inquiryVisible ? 'mascot-caption' : undefined}
        onPointerEnter={e => { if (e.pointerType !== 'touch') openInquiry('hover') }}
        onPointerDown={e => { pointerType.current = e.pointerType; tapWasOpen.current = inquiryVisible }}
        onFocus={() => { if (pointerType.current !== 'touch') openInquiry('focus') }}
        onClick={e => {
          if (!controller.current?.snapshot().introComplete) return
          if (e.detail === 0) openInquiry('focus')
          else if (pointerType.current === 'touch' ? tapWasOpen.current : inquiryVisible) closeInquiry()
          else openInquiry('tap')
        }}>
        <span key={playback.runId} className="mascot-body" data-speaking={speaking}>
          {POSES.filter(p => p !== 'thinking' || playback.cueIndex >= 2).map(p => <svg key={p} viewBox="0 0 360 560" className={`mascot-pose ${pose === p ? 'is-active' : ''}`} aria-hidden="true" width="360" height="560">
            {p === 'greeting' ? <GreetingArt href={`${ASSETS}approved-poses.png`}/> : <image href={`${ASSETS}${p === 'thinking' ? 'think-cutout.png' : 'approved-poses.png'}`} x={CROP[p][0]} y={CROP[p][1]} width={p === 'thinking' ? 225.7 : 1448} height={p === 'thinking' ? 582 : 1086}/>}
          </svg>)}
          <MouthRig speaking={speaking} readFrame={readFrame} pose={pose}/>
        </span>
        <span className="mascot-platform" aria-hidden="true"/>
      </button>
      <div className="mascot-controls">
        <span className="mascot-hint">{tourPlaying ? 'Chovy’s tour is playing below' : playback.phase === 'starting' ? 'Loading voice…' : playback.phase === 'buffering' ? 'Voice is buffering…' : complete ? 'Hover, focus or tap to chat' : 'A quick hello from Charles'}</span>
        <button className="mascot-audio-toggle" type="button" disabled={tourPlaying} aria-pressed={playback.voiceEnabled}
          title={inquiryVisible ? 'Play inquiry from the beginning' : 'Play introduction from the beginning'} onClick={toggleVoice}>
          {playback.voiceEnabled ? '◖ Mute voice' : '♪ Voice on'}
        </button>
        <p className="mascot-playback-feedback" role="status" aria-live="polite">{playback.error}</p>
      </div>
    </div>
  )
}
