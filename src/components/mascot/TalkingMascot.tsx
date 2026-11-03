import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'
import MouthRig from './MouthRig'
import GreetingArt from './GreetingArt'
import { captionDuration, INQUIRY, initialState, introFinished, INTRO_LINES, mascotReducer, poseFor, type Pose } from './mascotModel'
import './TalkingMascot.css'

const ASSETS = '/assets/mascot/'
const POSES: Pose[] = ['idle', 'greeting', 'explaining', 'closing', 'thinking']
const CROP: Record<Pose, [number, number]> = { idle: [-270, 9], greeting: [-800, 9], explaining: [-270, -530], closing: [-800, -530], thinking: [66.7, -1] }

type Props = { contactHref?: string }
export default function TalkingMascot({ contactHref = '#contact' }: Props) {
  const [state, dispatch] = useReducer(mascotReducer, initialState)
  const [ready, setReady] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [audioStatus, setAudioStatus] = useState('Enable voice')
  const [speaking, setSpeaking] = useState(false)
  const [speechAvailable, setSpeechAvailable] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const utterance = useRef<SpeechSynthesisUtterance | null>(null)
  const boundary = useRef(0)
  const lastInquiry = useRef(-Infinity)
  const playInquiry = useRef(false)
  const pointerType = useRef('')
  const tapWasOpen = useRef(false)
  const complete = introFinished(state)
  const inquiryVisible = complete && state.inquiry
  const pose = poseFor(state)
  const line = state.step >= 0 && !complete ? INTRO_LINES[state.step].text : inquiryVisible ? INQUIRY : ''

  useEffect(() => {
    setSpeechAvailable('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window)
    // Decode the shared transparent sheet once; all four exact-pixel viewports reuse it.
    const img = new Image(); img.src = `${ASSETS}approved-poses.png`
    const images = [img.decode().catch(() => undefined)]
    let alive = true
    Promise.all(images).then(() => { if (alive) setReady(true) })
    return () => { alive = false }
  }, [])

  useEffect(() => {
    if (!ready) return
    const timer = window.setTimeout(() => dispatch({ type: 'start' }), 650)
    return () => window.clearTimeout(timer)
  }, [ready])

  useEffect(() => {
    if (state.step < 2) return
    const img = new Image(); img.src = `${ASSETS}think-cutout.png`
  }, [state.step >= 2])

  useEffect(() => {
    if (!line) { setSpeaking(false); return }
    let alive = true
    let started = false
    let fallback: number | undefined
    let startTimeout: number | undefined
    let watchdog: number | undefined
    let u: SpeechSynthesisUtterance | null = null
    boundary.current = 0
    setSpeaking(false)
    const finish = () => {
      if (!alive) return
      alive = false
      setSpeaking(false)
      if (!complete) dispatch({ type: 'advance' })
    }
    const captionFallback = () => {
      if (!alive) return
      setSpeaking(false)
      fallback = window.setTimeout(finish, captionDuration(line))
    }
    const shouldSpeak = audioEnabled && speechAvailable && (!complete || playInquiry.current)
    if (!shouldSpeak) captionFallback()
    else {
      // A brief dwell avoids speaking on accidental hover; user audio clicks stay synchronous.
      const speak = () => {
        if (!alive) return
        u = new SpeechSynthesisUtterance(line)
        utterance.current = u
        u.lang = 'en-US'; u.rate = 1.08; u.pitch = 1
        const voices = window.speechSynthesis.getVoices()
        const voice = voices.find(v => /^en[-_]US/i.test(v.lang) && v.localService) || voices.find(v => /^en/i.test(v.lang))
        if (voice) u.voice = voice
        u.onstart = () => {
          if (!alive) return
          started = true
          window.clearTimeout(startTimeout)
          setSpeaking(true); setAudioStatus('Voice on')
          if (complete) lastInquiry.current = Date.now()
          watchdog = window.setTimeout(() => {
            if (!alive) return
            // Avoid a stuck mouth/state if an engine loses its end event.
            u!.onend = null; u!.onerror = null
            window.speechSynthesis.cancel(); finish()
          }, Math.max(12000, captionDuration(line) * 2.5))
        }
        u.onboundary = e => { if (alive && e.name === 'word') boundary.current = e.charIndex }
        u.onend = finish
        u.onerror = () => {
          if (!alive) return
          window.clearTimeout(startTimeout); window.clearTimeout(watchdog)
          setAudioStatus('Voice unavailable · captions on'); setAudioEnabled(false); captionFallback()
        }
        startTimeout = window.setTimeout(() => {
          if (!alive || started) return
          u!.onend = null; u!.onerror = null
          window.speechSynthesis.cancel()
          setAudioStatus('Enable voice'); setAudioEnabled(false)
        }, 1600)
        try { window.speechSynthesis.speak(u) } catch {
          window.clearTimeout(startTimeout)
          setAudioStatus('Voice unavailable · captions on'); setAudioEnabled(false); captionFallback()
        }
      }
      if (complete) fallback = window.setTimeout(speak, 220)
      else speak()
    }
    return () => {
      alive = false
      window.clearTimeout(fallback); window.clearTimeout(startTimeout); window.clearTimeout(watchdog)
      if (u) {
        u.onstart = null; u.onend = null; u.onerror = null; u.onboundary = null
        if (utterance.current === u) { window.speechSynthesis.cancel(); utterance.current = null }
      }
    }
  }, [line, complete, audioEnabled, speechAvailable])

  const openInquiry = () => {
    if (!complete || state.inquiry) return
    playInquiry.current = Date.now() - lastInquiry.current >= 12000
    dispatch({ type: 'open' })
  }
  const closeInquiry = () => dispatch({ type: 'close' })
  useLayoutEffect(() => {
    const bubble = root.current?.querySelector<HTMLElement>('.mascot-bubble')
    if (!bubble) return
    let frame = 0
    const place = () => {
      frame = 0
      const viewportHeight = window.visualViewport?.height || window.innerHeight
      const navBottom = document.querySelector('.portfolio-navbar-wrap')?.getBoundingClientRect().bottom || 0
      const clearance = Math.max(12, navBottom + 12)
      const stage = root.current!.getBoundingClientRect()
      // Offscreen content remains in normal document flow. As the visitor scrolls
      // the presentation into view, both narration and inquiry use this same rail.
      bubble.style.setProperty('--mascot-cloud-shift', '0px')
      if (stage.bottom < clearance || stage.top > viewportHeight) return
      const rect = bubble.getBoundingClientRect()
      const target = Math.max(clearance, Math.min(rect.top, viewportHeight - 12 - rect.height))
      bubble.style.setProperty('--mascot-cloud-shift', `${target - rect.top}px`)
    }
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(place) }
    // Native keyboard focus (or a phone tap) may bring only the control into
    // view. Reveal its presentation once on deliberate focus/audio interaction.
    // Ordinary wheel/touch scrolling never triggers this adjustment.
    if (root.current?.contains(document.activeElement)) {
      const navBottom = document.querySelector('.portfolio-navbar-wrap')?.getBoundingClientRect().bottom || 0
      const natural = bubble.getBoundingClientRect()
      if (root.current!.getBoundingClientRect().top < navBottom + 12 || natural.bottom > window.innerHeight - 12) {
        window.scrollBy({ top: root.current!.getBoundingClientRect().top - navBottom - 12, behavior: 'instant' })
      }
    }
    place(); schedule()
    const resize = new ResizeObserver(schedule); resize.observe(bubble)
    window.addEventListener('scroll', schedule, { passive: true, capture: true })
    window.addEventListener('resize', schedule)
    window.visualViewport?.addEventListener('resize', schedule)
    return () => {
      window.cancelAnimationFrame(frame); resize.disconnect()
      window.removeEventListener('scroll', schedule, true)
      window.removeEventListener('resize', schedule)
      window.visualViewport?.removeEventListener('resize', schedule)
    }
  }, [line, audioEnabled])
  useEffect(() => {
    if (!inquiryVisible) return
    const outside = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) dispatch({ type: 'close' }) }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [inquiryVisible])
  useEffect(() => {
    const hide = () => {
      if (!document.hidden) return
      // Mute cancels our speech and continues visual captions without background audio.
      setAudioEnabled(false); dispatch({ type: 'close' })
    }
    document.addEventListener('visibilitychange', hide)
    return () => document.removeEventListener('visibilitychange', hide)
  }, [])

  return (
    <div ref={root} className="talking-mascot" data-state={pose} data-intro-complete={complete}
      onPointerLeave={e => {
        if (e.pointerType !== 'touch' && !root.current?.contains(document.activeElement)) closeInquiry()
      }}
      onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeInquiry() }}
      onKeyDown={e => { pointerType.current = ''; if (e.key === 'Escape') { e.preventDefault(); closeInquiry() } }}>
      <div className="mascot-caption-space">
        {line && (!complete || inquiryVisible) && (
          <div className={`mascot-bubble ${inquiryVisible ? 'mascot-bubble--inquiry' : ''}`} id="mascot-caption" role="status" aria-live="polite" aria-atomic="true">
            <svg className="mascot-cloud-art" viewBox="0 0 320 240" preserveAspectRatio="none" aria-hidden="true">
              <path vectorEffect="non-scaling-stroke" d="M35 36 C33 17 59 8 77 20 C89 2 119 1 136 16 C154 2 183 3 200 18 C220 7 247 13 253 29 C278 20 307 39 301 61 C324 76 325 101 310 120 C325 141 311 165 291 172 C290 195 262 211 241 198 C224 215 195 216 178 205 C156 221 127 215 112 202 C88 214 61 204 55 185 C33 186 16 166 26 148 C8 131 11 108 24 96 C10 76 16 49 35 46 Z"/>
              <path className="mascot-cloud-tail-side" vectorEffect="non-scaling-stroke" d="M29 105 L4 131 L30 125"/>
              <path className="mascot-cloud-tail-down" vectorEffect="non-scaling-stroke" d="M135 210 L151 236 L170 208"/>
            </svg>
            <span className="mascot-bubble-label">{inquiryVisible ? "Let's talk" : "Meet Charles"}</span>
            <p>{line}</p>
            {inquiryVisible && <a href={contactHref} className="mascot-contact" onClick={closeInquiry}>Send me a message <span aria-hidden="true">↗</span></a>}
            <span className={`mascot-voice-bars ${speaking ? 'is-speaking' : ''}`} aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></span>
          </div>
        )}
      </div>
      <button type="button" className="mascot-character" aria-label={complete ? 'Ask Charles about a project' : "Charles is introducing himself"}
        aria-expanded={inquiryVisible} aria-controls={inquiryVisible ? 'mascot-caption' : undefined}
        onPointerEnter={e => { if (e.pointerType !== 'touch') openInquiry() }}
        onPointerDown={e => { pointerType.current = e.pointerType; tapWasOpen.current = inquiryVisible }}
        onFocus={openInquiry}
        onClick={e => {
          if (!complete) return
          if (e.detail === 0) openInquiry()
          else if (pointerType.current === 'touch' ? tapWasOpen.current : inquiryVisible) closeInquiry()
          else openInquiry()
        }}>
        <span className="mascot-body" data-speaking={speaking}>
          {POSES.filter(p => p !== 'thinking' || state.step >= 2).map(p => <svg key={p} viewBox="0 0 360 560" className={`mascot-pose ${pose === p ? 'is-active' : ''}`} aria-hidden="true" width="360" height="560">
            {p === 'greeting' ? <GreetingArt href={`${ASSETS}approved-poses.png`}/> : <image href={`${ASSETS}${p === 'thinking' ? 'think-cutout.png' : 'approved-poses.png'}`} x={CROP[p][0]} y={CROP[p][1]} width={p === 'thinking' ? 225.7 : 1448} height={p === 'thinking' ? 582 : 1086}/>}
          </svg>)}
          <MouthRig speaking={speaking} text={line} boundary={boundary} pose={pose}/>
        </span>
        <span className="mascot-platform" aria-hidden="true"/>
      </button>
      <div className="mascot-controls">
        <span className="mascot-hint">{complete ? 'Hover, focus or tap to chat' : 'A quick hello from Charles'}</span>
        {speechAvailable && <button className="mascot-audio-toggle" type="button" aria-pressed={audioEnabled}
          onClick={() => {
            if (inquiryVisible) playInquiry.current = true
            setAudioEnabled(v => !v); setAudioStatus(audioEnabled ? 'Enable voice' : 'Voice on')
          }}>{audioEnabled ? '◖' : '♪'} {audioEnabled ? 'Mute voice' : audioStatus}</button>}
        {!speechAvailable && <span className="mascot-hint">Captions on · voice unavailable</span>}
      </div>
    </div>
  )
}
