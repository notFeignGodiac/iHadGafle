'use client'

const SECTIONS = [
  { href: '#cert',         label: 'Certification' },
  { href: '#manufacturing',label: 'Manufacturing' },
  { href: '#green',        label: 'Green Awareness' },
  { href: '#community',    label: 'Community' },
  { href: '#child',        label: 'Child Protection' },
  { href: '#report-crime', label: 'Report Crime' },
]

export function ComplianceNav() {
  return (
    <div
      className="flex flex-wrap overflow-x-auto sticky top-[80px] z-[100]"
      style={{ background: 'var(--char)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      {SECTIONS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="px-6 py-5 text-[9px] tracking-[0.25em] uppercase no-underline whitespace-nowrap transition-all duration-300"
          style={{ color: 'rgba(255,255,255,0.4)', borderBottom: '2px solid transparent' }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLElement).style.color = 'var(--cream)'
            ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--gold)'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'
            ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent'
          }}
        >
          {label}
        </a>
      ))}
    </div>
  )
}
