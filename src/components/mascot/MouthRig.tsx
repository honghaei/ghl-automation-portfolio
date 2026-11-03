import { useEffect, useId, useRef } from 'react'
import { shapeFor, type Pose } from './mascotModel'
import type { PlaybackFrame } from './audioTimeline'

type Props = { speaking: boolean; readFrame: React.MutableRefObject<() => PlaybackFrame>; pose: Pose }
/** Recording-time/amplitude-driven visual speech; not phoneme alignment. */
export default function MouthRig({ speaking, readFrame, pose }: Props) {
  const rig = useRef<SVGSVGElement>(null)
  const id = useId().replace(/:/g, '')
  useEffect(() => {
    const node = rig.current
    if (!node) return
    node.dataset.mouth = 'rest'
    if (!speaking) return
    let beat = 0
    const draw = () => {
      const frame = readFrame.current()
      node.dataset.level = frame.level.toFixed(3)
      node.dataset.mouth = !frame.active || frame.level < .09 ? 'rest'
        : shapeFor(frame.text, frame.charIndex, beat++)
    }
    draw()
    const timer = window.setInterval(draw, 75)
    return () => { window.clearInterval(timer); node.dataset.mouth = 'rest'; node.dataset.level = '0' }
  }, [speaking, readFrame])
  // All four source poses share the same 360x560 body frame.
  const mouthY = pose === 'thinking' ? 142 : pose === 'idle' || pose === 'greeting' ? 164 : 168
  return (
    <svg ref={rig} className="mascot-face-rig" viewBox="0 0 360 560" aria-hidden="true" data-mouth="rest">
      <defs>
        <radialGradient id={id}><stop offset="82%" stopColor="#fcc596"/><stop offset="100%" stopColor="#fcc596" stopOpacity="0"/></radialGradient>
      </defs>
      <g transform={`translate(180 ${mouthY}) scale(${pose === 'thinking' ? .75 : 1})`}>
        <ellipse rx="31" ry="19" fill={`url(#${id})`}/>
        <g className="viseme viseme-rest"><path d="M-20-2 Q0 10 20-2" fill="none" stroke="#3e231b" strokeWidth="2.2" strokeLinecap="round"/></g>
        <g className="viseme viseme-mbp"><path d="M-18 1 Q0 5 18 1" fill="none" stroke="#5c3027" strokeWidth="2.6" strokeLinecap="round"/></g>
        <g className="viseme viseme-aa"><path d="M-20-5 Q0-10 20-5 Q18 16 0 16 Q-18 16-20-5" fill="#51231f" stroke="#362019" strokeWidth="2"/><path d="M-17-4 Q0-7 17-4 L14 1 Q0 4-14 1Z" fill="#fff8ec"/><path d="M-11 11 Q0 3 11 11 Q0 17-11 11" fill="#ee827a"/></g>
        <g className="viseme viseme-ee"><path d="M-21-3 Q0 1 21-3 Q16 12 0 12 Q-16 12-21-3" fill="#54231f" stroke="#362019" strokeWidth="2"/><path d="M-18-2 Q0 2 18-2 L14 3 Q0 7-14 3Z" fill="#fff8ec"/><path d="M-9 9 Q0 5 9 9" fill="none" stroke="#ee827a" strokeWidth="3"/></g>
        <g className="viseme viseme-oh"><ellipse rx="10" ry="13" cy="3" fill="#51231f" stroke="#6c3729" strokeWidth="2"/><path d="M-5 12 Q0 6 5 12" fill="#ee827a"/></g>
        <g className="viseme viseme-oo"><ellipse rx="6" ry="8" cy="3" fill="#51231f" stroke="#9a513a" strokeWidth="2"/></g>
        <g className="viseme viseme-fv"><path d="M-17-2 Q0-5 17-2 Q11 8 0 8 Q-11 8-17-2" fill="#6c3029" stroke="#4e2a20" strokeWidth="2"/><path d="M-14-1 Q0-3 14-1 L10 3 H-10Z" fill="#fff8ec"/></g>
      </g>
      {pose === 'idle' && <g className="mascot-blink"><ellipse cx="155" cy="130" rx="15" ry="14" fill="#fcc596"/><ellipse cx="207" cy="130" rx="15" ry="14" fill="#fcc596"/><path d="M143 132 Q155 137 167 132 M195 132 Q207 137 219 132" fill="none" stroke="#3e281f" strokeWidth="2.4" strokeLinecap="round"/></g>}
    </svg>
  )
}
