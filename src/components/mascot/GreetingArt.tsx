import { useId } from 'react'
/** A clipped hand/forearm cut directly from the approved sheet, pivoted at its wrist. */
export default function GreetingArt({ href }: { href: string }) {
  const key = useId().replace(/:/g, '')
  const arm = 'M845 110 L914 113 L933 164 L913 207 L878 207 L858 184Z'
  return <g transform="translate(-800 9)">
    <defs>
      <clipPath id={`${key}arm`}><path d={arm}/></clipPath>
      <mask id={`${key}body`} maskUnits="userSpaceOnUse" x="0" y="0" width="1448" height="1086"><rect width="1448" height="1086" fill="white"/><path d={arm} fill="black"/></mask>
    </defs>
    <image href={href} width="1448" height="1086" mask={`url(#${key}body)`}/>
    <g className="mascot-wave-arm"><image href={href} width="1448" height="1086" clipPath={`url(#${key}arm)`}/></g>
  </g>
}
