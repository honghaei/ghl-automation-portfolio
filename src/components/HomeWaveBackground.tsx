
export default function HomeWaveBackground() {
  const waves = [1, 2, 3]

  return (
    <div className="home-blue-backdrop" aria-hidden="true">
      <div className="home-blue-atmosphere" />

      {waves.map((number) => (
        <svg
          key={number}
          className={`home-blue-wave home-blue-wave--${number}`}
          viewBox="0 0 1600 300"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            d="M0 148 C220 80 350 220 570 148 S950 77 1170 148 S1450 215 1600 148"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M0 174 C200 245 390 95 610 174 S1000 240 1230 174 S1460 105 1600 174"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.5"
          />
        </svg>
      ))}
    </div>
  )
}
