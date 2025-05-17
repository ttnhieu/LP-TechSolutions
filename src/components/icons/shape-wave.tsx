'use client'
function ShapeWave() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1478 219"
      width="100%"
      height="auto"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <path
        fill="url(#waveGradient)"
        fillRule="evenodd"
        d="m1286.4 17.7q47.8-1.4 94.8 7.5 52.2 11.6 102.8 28.8 0 82.6 0 165.3-745 0-1490 0 0-82.1 0-164.3 125.4 44.2 257.1 63.5 318.7 50.5 631.1-29.2 72.5-18.9 145.1-37.8 106.7-24 215.8-32.3 21.6-1.3 43.3-1.5z"
      />
    </svg>
  )
}

export default ShapeWave
