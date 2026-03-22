'use client'
import Link from 'next/link'

const QUICK_LINKS = [
  { href: '/compliance', label: 'Compliance' },
  { href: '/track-order', label: 'Track Order' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/compliance#report-crime', label: 'Report Crime' },
  { href: '/compliance#green', label: 'Green Awareness' },
  { href: '/compliance#community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer({ light = false }: { light?: boolean }) {
  const textFaint = light ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)'
  const textFainter = light ? 'rgba(0,0,0,0.13)' : 'rgba(255,255,255,0.09)'
  const tagColor = light ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.11)'
  const border = light ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)'
  const bg = light ? 'var(--paper)' : 'transparent'
  const qlBg = light ? 'var(--char)' : 'var(--char)'
  const qlText = 'rgba(255,255,255,0.3)'

  return (
    <>
      {/* Quick links bar */}
      <div className="flex flex-wrap gap-6 items-center px-[52px] py-8" style={{ background: qlBg, borderTop: `1px solid ${border}` }}>
        {QUICK_LINKS.map(({ href, label }, i) => (
          <span key={href} className="flex items-center gap-6">
            {i > 0 && <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: 9 }}>·</span>}
            <Link href={href} className="no-underline transition-colors duration-300"
              style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: qlText }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = qlText)}>
              {label}
            </Link>
          </span>
        ))}
      </div>

      {/* Main footer */}
      <footer className="flex justify-between items-center flex-wrap gap-3 px-[52px] py-8"
        style={{ background: bg, borderTop: `1px solid ${border}` }}>
        <span style={{ fontFamily: "'Abril Fatface', serif", fontSize: 14, letterSpacing: '0.15em', color: textFaint }}>iHadGafle</span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 11, color: tagColor }}>You already had it.</span>
        <span style={{ fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: textFainter }}>© 2025 iHadGafle · All Gafle reserved.</span>
      </footer>
    </>
  )
}
