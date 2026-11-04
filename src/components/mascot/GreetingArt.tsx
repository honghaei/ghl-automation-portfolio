import { useId } from 'react'
/** Independent arm and accent masks exclude the ear, face, hair and shoulder. */
export default function GreetingArt({ href }: { href: string }) {
  const key = useId().replace(/:/g, '')
  const arm = 'M850 153 L854 149 L855 141 L862 136 L865 138 L865 131 L870 128 L876 130 L883 144 L884 136 L890 132 L897 133 L901 140 L902 160 L905 160 L908 156 L917 157 L923 160 L924 165 L918 173 L913 185 L905 195 L906 208 L912 223 L912 239 L908 246 L897 250 L885 251 L878 248 L872 240 L868 226 L869 199 L866 194 L860 184 L853 173 L848 162Z'
  const accents = 'M816 100 L854 100 L863 127 L858 147 L850 161 L858 186 L848 205 L817 205Z'
  return <g transform="translate(-800 9)">
    <defs>
      <clipPath id={`${key}arm`}><path d={arm}/></clipPath>
      <clipPath id={`${key}accents`}><path d={accents}/></clipPath>
      <mask id={`${key}accentOnly`} maskUnits="userSpaceOnUse" x="0" y="0" width="1448" height="1086"><rect width="1448" height="1086" fill="white"/><path d={arm} fill="black"/></mask>
      <mask id={`${key}body`} maskUnits="userSpaceOnUse" x="0" y="0" width="1448" height="1086"><rect width="1448" height="1086" fill="white"/><path d={arm} fill="black"/><path d={accents} fill="black"/></mask>
    </defs>
    <image href={href} width="1448" height="1086" mask={`url(#${key}body)`}/>
    <g className="mascot-wave-accents"><image href={href} width="1448" height="1086" clipPath={`url(#${key}accents)`} mask={`url(#${key}accentOnly)`}/></g>
    <g className="mascot-wave-arm"><image href={href} width="1448" height="1086" clipPath={`url(#${key}arm)`}/></g>
  </g>
}
