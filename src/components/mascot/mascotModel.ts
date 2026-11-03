export const INTRO_LINES = [
  { pose: 'greeting', text: "Hi! I'm Charles Jacob Lat." },
  { pose: 'explaining', text: "I'm a GoHighLevel specialist, automation specialist, web developer, and app developer." },
  { pose: 'explaining', text: 'I build practical systems that help businesses work smarter, save time, and grow.' },
  { pose: 'closing', text: "Explore my projects to see what I've built!" },
] as const
export const INQUIRY = "Have a project in mind or a question? I'd love to hear from you! Send me a message."
export type Pose = 'idle' | 'greeting' | 'explaining' | 'closing' | 'thinking'
export type MascotState = { step: number; inquiry: boolean }
export type MascotAction = { type: 'start' | 'advance' | 'open' | 'close' }
export const initialState: MascotState = { step: -1, inquiry: false }
export const introFinished = (state: MascotState) => state.step === INTRO_LINES.length
export function mascotReducer(state: MascotState, action: MascotAction): MascotState {
  switch (action.type) {
    case 'start': return state.step === -1 ? { step: 0, inquiry: false } : state
    case 'advance': return { step: Math.min(state.step + 1, INTRO_LINES.length), inquiry: false }
    case 'open': return introFinished(state) ? { ...state, inquiry: true } : state
    case 'close': return { ...state, inquiry: false }
  }
}
export function poseFor(state: MascotState): Pose {
  if (introFinished(state)) return state.inquiry ? 'thinking' : 'idle'
  return state.step < 0 ? 'idle' : INTRO_LINES[state.step].pose
}
// About 18 seconds for the approved 53-word introduction, including pauses.
export const captionDuration = (text: string) => Math.max(1800, text.split(/\s+/).length * 315 + 220)
export type MouthShape = 'rest' | 'aa' | 'ee' | 'oh' | 'oo' | 'mbp' | 'fv'
export function shapeFor(text: string, charIndex: number, beat: number): MouthShape {
  const c = text[Math.min(text.length - 1, Math.max(0, charIndex))]?.toLowerCase() || ''
  if (/[\s.,!?]/.test(c)) return 'rest'
  if (/[mbp]/.test(c)) return 'mbp'
  if (/[fv]/.test(c)) return 'fv'
  if (/[ou]/.test(c)) return beat % 2 ? 'oh' : 'oo'
  if (/[ei]/.test(c)) return 'ee'
  return beat % 3 === 0 ? 'ee' : 'aa'
}
