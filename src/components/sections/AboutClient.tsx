'use client'
import Reveal from '@/components/ui/Reveal'

export function ValueCards() {
  const values = [
    { n: '01', title: 'Ability',   desc: "It's not about what you've done. It's about what you always could. The Gafle was in you before you knew the word. We're just making it wearable." },
    { n: '02', title: 'Restraint', desc: 'Three tees. Rotating. No drops at midnight, no artificial scarcity theatre, no newsletter with a dramatic subject line. Good product, honestly offered.' },
    { n: '03', title: 'Humor',     desc: "We take the message seriously. The marketing? Slightly less so. Life is funnier than most brands will ever admit on their Instagram grid." },
  ]
  return (
    <div className="grid grid-cols-3" style={{ gap: 1, background: 'rgba(255,255,255,0.06)' }}>
      {values.map(({ n, title, desc }, i) => (
        <Reveal key={n} delay={i * 0.1}>
          <div
            className="px-10 py-[52px] transition-colors duration-400"
            style={{ background: 'var(--ink)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--char)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            <div
              className="text-[64px] leading-none mb-5 transition-colors duration-400"
              style={{ fontFamily: "'Abril Fatface',serif", color: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.05)')}
            >
              {n}
            </div>
            <div className="text-[22px] mb-3" style={{ fontFamily: "'Playfair Display',serif" }}>{title}</div>
            <div className="text-[11px] leading-loose" style={{ color: 'var(--muted)' }}>{desc}</div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
