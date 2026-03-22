'use client'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { TEES } from '@/lib/data'

export function TeeCards() {
  return (
    <div className="grid grid-cols-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {TEES.map((tee, i) => (
        <Reveal key={tee.id} delay={i * 0.1}>
          <div
            className="px-12 py-16 pb-[72px] relative overflow-hidden group transition-colors duration-400"
            style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', background: 'var(--ink)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--char)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            <div
              className="transition-colors duration-400"
              style={{ fontFamily: "'Abril Fatface',serif", fontSize: 80, color: 'rgba(255,255,255,0.04)', lineHeight: 1, marginBottom: 28 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.04)')}
            >
              {tee.num}
            </div>

            <div
              className="w-14 h-14 rounded-full mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
              style={{ background: tee.swatch, border: tee.swatchBorder ? '1px solid rgba(255,255,255,0.1)' : undefined }}
            />

            <div style={{ fontFamily: "'Abril Fatface',serif", fontSize: 28, marginBottom: 10, lineHeight: 1.1 }}>{tee.name}</div>
            <div className="text-[8px] tracking-[0.3em] uppercase mb-[18px]" style={{ color: 'var(--muted)' }}>{tee.tag}</div>
            <p className="text-[11px] leading-loose mb-8" style={{ color: 'var(--muted)' }}>{tee.desc}</p>

            <div className="flex items-baseline gap-1 mb-6" style={{ fontFamily: "'Abril Fatface',serif", fontSize: 32 }}>
              <sub className="text-[12px]" style={{ color: 'var(--muted)', fontFamily: "'DM Mono',monospace" }}>R</sub>
              {tee.price}
            </div>

            <Link
              href="/contact"
              className="block w-full py-[15px] text-center text-[9px] tracking-[0.25em] uppercase no-underline transition-colors duration-300"
              style={{ background: 'var(--cream)', color: 'var(--ink)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--rust)'; (e.currentTarget as HTMLElement).style.color = 'var(--cream)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cream)'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)' }}
            >
              Inquire to Order
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
