// Development-only test entry. Never imported by the production application.
import React from 'react'
import { createRoot } from 'react-dom/client'
import TalkingMascot from '../src/components/mascot/TalkingMascot'
const mode = new URLSearchParams(location.search).get('mode')
const timers = new Set<number>()
let starts = 0
let cancels = 0
const spoken: string[] = []
if (mode !== 'native') {
Object.defineProperty(window, 'qaSpeech', { configurable: true, value: { get starts() { return starts }, get cancels() { return cancels }, spoken } })
Object.defineProperty(window, 'SpeechSynthesisUtterance', { configurable: true, value: class { text: string; constructor(text: string) { this.text = text } } })
Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: {
  getVoices: () => [{lang: 'en-US', localService: true}],
  cancel: () => { for (const t of timers) clearTimeout(t); timers.clear(); cancels++ },
  speak: (u: SpeechSynthesisUtterance) => {
    spoken.push(u.text)
    if (mode === 'blocked') return
    if (mode === 'error') { timers.add(window.setTimeout(() => u.onerror?.({ error: 'synthesis-failed' } as SpeechSynthesisErrorEvent), 40)); return }
    timers.add(window.setTimeout(() => {
      starts++; u.onstart?.({} as SpeechSynthesisEvent)
      for (let i = 0; i < 15; i++) timers.add(window.setTimeout(() => u.onboundary?.({ name: 'word', charIndex: i * 2 } as SpeechSynthesisEvent), i * 80))
      timers.add(window.setTimeout(() => u.onend?.({} as SpeechSynthesisEvent), mode === 'long' ? 6500 : 1450))
    }, 40))
  },
} })
}
const reactRoot = createRoot(document.getElementById('test-root')!)
reactRoot.render(<React.StrictMode><TalkingMascot /></React.StrictMode>)
const unmount = document.createElement('button'); unmount.textContent = 'Unmount mascot'; unmount.id = 'unmount'; unmount.onclick = () => reactRoot.unmount(); document.body.append(unmount)
if (mode === 'native') {
  const log = document.createElement('pre'); log.id = 'native-log'; log.style.color = 'white'; document.body.append(log)
  const record = (text: string) => { log.textContent += text + '\n' }
  if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis; const original = synth.speak.bind(synth)
    record(`Native voices: ${synth.getVoices().length}`)
    synth.addEventListener('voiceschanged', () => record(`Native voices: ${synth.getVoices().length}`))
    synth.speak = u => {
      record(`Native speak requested: ${u.text}`)
      const start = u.onstart, end = u.onend, error = u.onerror
      u.onstart = e => { record('Native onstart'); start?.call(u, e) }
      u.onend = e => { record('Native onend'); end?.call(u, e) }
      u.onerror = e => { record(`Native onerror: ${e.error}`); error?.call(u, e) }
      original(u)
    }
  } else record('Native speech unsupported')
}

