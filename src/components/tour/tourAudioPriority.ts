/** The tour owns voice priority until paused, ended, errored or unmounted.
 * Releasing priority never restarts mascot narration. */
let tourPlaying = false
const listeners = new Set<(active: boolean) => void>()
export function isTourPlaying() { return tourPlaying }
export function setTourPlaying(active: boolean) {
  if (tourPlaying === active) return
  tourPlaying = active
  listeners.forEach(listener => listener(active))
}
export function subscribeTourPriority(listener: (active: boolean) => void) {
  listeners.add(listener)
  listener(tourPlaying)
  return () => { listeners.delete(listener) }
}
