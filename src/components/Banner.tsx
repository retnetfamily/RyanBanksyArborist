import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  phone?: string
  businessName?: string
}

export default function Banner({
  phone = '(856) 429-5792',
  businessName = 'Ryan Bansky Expert Tree Service',
}: Props) {
  const telHref = 'tel:' + phone.replace(/[^\d+]/g, '')

  return (
    <header className="relative overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-sky-300 to-sky-100" />

      {/* Animated clouds */}
      <svg className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1200 300" aria-hidden="true">
        <g className="cloud cloud--slow opacity-70">
          <ellipse cx="100" cy="80" rx="60" ry="26" fill="white" />
          <ellipse cx="140" cy="80" rx="45" ry="20" fill="white" />
          <ellipse cx="70" cy="86" rx="35" ry="18" fill="white" />
        </g>
        <g className="cloud cloud--med opacity-70">
          <ellipse cx="380" cy="60" rx="60" ry="26" fill="white" />
          <ellipse cx="420" cy="60" rx="45" ry="20" fill="white" />
          <ellipse cx="350" cy="66" rx="35" ry="18" fill="white" />
        </g>
        <g className="cloud cloud--fast opacity-60">
          <ellipse cx="720" cy="100" rx="70" ry="30" fill="white" />
          <ellipse cx="765" cy="98" rx="50" ry="22" fill="white" />
          <ellipse cx="685" cy="108" rx="40" ry="18" fill="white" />
        </g>
        <g className="cloud cloud--med opacity-60">
          <ellipse cx="1020" cy="70" rx="65" ry="28" fill="white" />
          <ellipse cx="1062" cy="70" rx="48" ry="20" fill="white" />
          <ellipse cx="985" cy="76" rx="38" ry="16" fill="white" />
        </g>
      </svg>

      {/* Readability scrims (above clouds, below content) */}
      <div className="absolute inset-0 -z-[5] pointer-events-none">
        {/* darken behind the left content so text pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent md:from-black/25" />
        {/* a gentle bottom fade so tree line doesn't clash with text */}
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-black/15 to-transparent" />
      </div>

      {/* Tree line */}
      <div className="absolute bottom-0 inset-x-0 -z-10 h-[60px] md:h-[80px]">
        <svg className="h-full w-full" viewBox="0 0 1200 100" aria-hidden="true">
          <rect x="0" y="70" width="1200" height="40" fill="#8BB174" />
          {[
            { x: 80 }, { x: 200 }, { x: 320 }, { x: 450 }, { x: 590 },
            { x: 720 }, { x: 860 }, { x: 1000 }, { x: 1120 }
          ].map((t, i) => (
            <g key={i} className={`tree tree--${i % 3}`}>
              <rect x={t.x} y={30} width="6" height="42" fill="#725C3A" />
              <circle cx={t.x + 3} cy="30" r="15" fill="#2E7D32" />
              <circle cx={t.x - 8} cy="38" r="13" fill="#2E7D32" />
              <circle cx={t.x + 14} cy="39" r="12" fill="#2E7D32" />
            </g>
          ))}
        </svg>
      </div>

      {/* Content row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 relative">
        <div className="flex items-center justify-between">
          {/* Left: brand/name wrapped in a tiny “glass” pill for contrast */}
          <Link to="/" className="group">
            <div className="inline-block rounded-xl bg-white/75 backdrop-blur-sm ring-1 ring-black/5 px-3 py-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2f5132] group-hover:opacity-90">
                {businessName}
              </h1>
              <p className="text-xs md:text-sm text-[#3f6b40]">
                Certified Arborist • Fully Insured • 55′ Bucket Service
              </p>
            </div>
          </Link>

          {/* Right: phone — click-to-call on mobile */}
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#679966] text-white px-3 py-1.5 md:px-4 md:py-2 font-medium shadow-soft
                       ring-1 ring-white/40 hover:ring-white/60
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#679966]/40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.3 22 2 12.7 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.02l-2.23 2.2z"/>
            </svg>
            <span className="hidden sm:inline">{phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  )
}
