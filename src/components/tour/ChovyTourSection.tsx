import { useEffect, useRef, useState } from 'react'
import { TOUR_CHAPTERS, TOUR_DURATION } from './tourData'
import { setTourPlaying } from './tourAudioPriority'
import './ChovyTourSection.css'

const BASE = '/assets/chovy-tour/'
const timeLabel = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`
export default function ChovyTourSection() {
  const video = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(0)
  const [feedback, setFeedback] = useState('Press play for the full tour. Captions and chapters are available.')
  const [failed, setFailed] = useState(false)
  const pendingSeek = useRef<number | null>(null)
  const [captions, setCaptions] = useState(true)
  const [caption, setCaption] = useState('')
  const captionPreference = useRef(true)
  useEffect(() => {
    const node = video.current
    if (!node) return
    const track = node.textTracks[0]
    if (!track) return
    const syncCaption = () => setCaption(Array.from(track.activeCues ?? []).map(cue => (cue as VTTCue).text).join(' '))
    const isNative = () => document.fullscreenElement === node || Boolean((node as HTMLVideoElement & { webkitDisplayingFullscreen?: boolean }).webkitDisplayingFullscreen)
    const syncMode = () => {
      // Inline captions own a reserved text row. Fullscreen/PiP use the native VTT track.
      const native = isNative()
      track.mode = !captionPreference.current ? 'disabled' : native ? 'showing' : 'hidden'
      syncCaption()
    }
    const nativeCaptionChoice = () => {
      if (isNative()) { captionPreference.current = track.mode === 'showing'; setCaptions(captionPreference.current) }
      if (track.mode === 'showing' && !isNative()) {
        captionPreference.current = true; setCaptions(true); track.mode = 'hidden'
      }
      syncCaption()
    }
    node.textTracks.addEventListener('change', nativeCaptionChoice)
    track.addEventListener('cuechange', syncCaption)
    node.addEventListener('loadedmetadata', syncMode)
    document.addEventListener('fullscreenchange', syncMode)
    node.addEventListener('webkitbeginfullscreen', syncMode)
    node.addEventListener('webkitendfullscreen', syncMode)
    syncMode()
    return () => {
      node.textTracks.removeEventListener('change', nativeCaptionChoice)
      track.removeEventListener('cuechange', syncCaption)
      node.removeEventListener('loadedmetadata', syncMode)
      document.removeEventListener('fullscreenchange', syncMode)
      node.removeEventListener('webkitbeginfullscreen', syncMode)
      node.removeEventListener('webkitendfullscreen', syncMode)
    }
  }, [])
  const toggleCaptions = () => {
    const enabled = !captionPreference.current
    captionPreference.current = enabled
    setCaptions(enabled)
    if (video.current?.textTracks[0]) video.current.textTracks[0].mode = enabled ? 'hidden' : 'disabled'
    if (!enabled) setCaption('')
  }
  useEffect(() => {
    const node = video.current
    return () => { node?.pause(); setTourPlaying(false) }
  }, [])
  const playbackError = () => {
    setTourPlaying(false); setFailed(true)
    setFeedback('The tour could not load. Check your connection, then retry playback.')
  }
  const chapter = (start: number) => {
    const node = video.current
    if (!node) return
    if (failed) { node.load(); setFailed(false) }
    // Seek to the first rendered 30 fps frame of this scene, including when paused immediately.
    const target = start === 0 ? 0 : Math.ceil(start * 30) / 30 + .001
    pendingSeek.current = target
    try { node.currentTime = target; if (node.readyState > 0) pendingSeek.current = null } catch { /* apply once metadata arrives */ }
    node.play().catch(() => {
      setTourPlaying(false)
      setFeedback('Playback could not start. Use the video’s play control to try again.')
    })
  }
  const retry = () => {
    const node = video.current
    if (!node) return
    pendingSeek.current = 0
    node.load(); setFailed(false)
    node.play().catch(() => setFeedback('Playback could not start. Check your connection and try again.'))
  }
  return <section className="chovy-tour-section" id="ai-voice" aria-labelledby="chovy-tour-heading">
    <header className="chovy-tour-heading">
      <p className="portfolio-home-eyebrow">Voice, motion & practical storytelling</p>
      <h2 id="chovy-tour-heading">AI Voice &amp; Interactive Experiences</h2>
      <p>A guided look at the systems Charles builds, presented by Chovy. ElevenLabs-generated narration, an animated character, speech-synchronized movement and interactive chapters come together in React and TypeScript.</p>
      <div className="chovy-tour-technology"><span>AI voice created with <strong>ElevenLabs</strong></span><span>React + TypeScript</span></div>
      <p className="chovy-tour-recording-note">Approved, prerecorded narration plays locally on this website.</p>
    </header>
    <div className="chovy-tour-title"><span className="chovy-tour-badge">Presented by Chovy</span><span>{timeLabel(TOUR_DURATION)} · 11 chapters · CC</span></div>
        <h3 className="chovy-tour-video-title">Meet Chovy — Your Guided Portfolio Tour</h3>
    <div className="chovy-tour-grid">
      <div className="chovy-tour-feature">
        <div className="chovy-tour-video-frame">
          <video ref={video} controls playsInline preload="none" poster={`${BASE}chovy-tour-poster.webp?v=2`}
            aria-label="Meet Chovy — Your Guided Portfolio Tour" aria-describedby="chovy-tour-feedback"
            onLoadedMetadata={() => {
              if (pendingSeek.current !== null && video.current) {
                try { video.current.currentTime = pendingSeek.current; pendingSeek.current = null } catch { setFeedback('Use the player timeline to choose a chapter once the video loads.') }
              }
            }}
            onPlay={() => { setTourPlaying(true); setFailed(false); setFeedback('Tour playing. Homepage mascot voice is paused.') }}
            onPause={() => { setTourPlaying(false); if (!video.current?.ended) setFeedback('Tour paused. Resume with the play control.') }}
            onEnded={() => { setTourPlaying(false); setFeedback('Thanks for exploring with Chovy. Choose a chapter to revisit a project.') }}
            onWaiting={() => setFeedback('Loading the tour…')}
            onPlaying={() => { setTourPlaying(true); setFeedback('Tour playing. Homepage mascot voice is paused.') }}
            onTimeUpdate={event => {
              const seconds = event.currentTarget.currentTime
              let index = 0
              for (let i = 1; i < TOUR_CHAPTERS.length; i++) if (seconds >= TOUR_CHAPTERS[i].start) index = i
              setActive(current => current === index ? current : index)
            }}
            onError={playbackError}>
            <source src={`${BASE}Chovy_Portfolio_Guided_Tour_Web.mp4?v=2`} type="video/mp4" onError={playbackError}/>
            <track kind="captions" src={`${BASE}Chovy_Portfolio_Guided_Tour.vtt?v=2`} srcLang="en" label="English" default/>
            Your browser does not support embedded video. <a href={`${BASE}Chovy_Portfolio_Guided_Tour_Web.mp4?v=2`}>Open the guided tour</a>.
          </video>
        </div>
        <div className="chovy-tour-caption-bar">
          <p className="chovy-tour-caption" aria-live="off">{captions ? caption || 'English captions appear here during playback.' : 'Captions off'}</p>
          <button className="chovy-tour-cc" type="button" aria-label="English captions" aria-pressed={captions} onClick={toggleCaptions}>CC</button>
        </div>
        <p className="chovy-tour-feedback" id="chovy-tour-feedback" role="status" aria-live="polite">{feedback} {failed && <button type="button" onClick={retry}>Retry video</button>}</p>
      </div>
      <nav className="chovy-tour-chapters" aria-label="Guided tour chapters">
        <p>Explore the tour <span>11 chapters</span></p>
        <ol>{TOUR_CHAPTERS.map((item, index) => <li key={item.id}>
          <button type="button" onClick={() => chapter(item.start)} aria-current={active === index ? 'true' : undefined}>
            <span className="chovy-tour-chapter-number">{String(item.id).padStart(2, '0')}</span>
            <span>{item.title}</span><time>{timeLabel(item.start)}</time>
          </button>
        </li>)}</ol>
      </nav>
    </div>
    <details className="chovy-tour-transcript"><summary>Read the tour transcript</summary>
      {TOUR_CHAPTERS.map(item => <section key={item.id}><h3>{item.title}</h3><p>{item.transcript}</p></section>)}
    </details>
  </section>
}
