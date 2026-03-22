'use client'
import Link from 'next/link'
import { TEES, MARQUEE_ITEMS_2 } from '@/lib/data'
import Marquee from '@/components/ui/Marquee'
import Reveal from '@/components/ui/Reveal'

export function StatRow() {
  const stats = [
    { num: '3',  label: "Tees at any given time.\nThat's the whole catalogue." },
    { num: '∞',  label: "Gafle you already possess.\nWe didn't give you that." },
    { num: '0',  label: "Excuses accepted.\nYou had it all along." },
    { num: '1',  label: "Rule: wear it like\na confirmed fact." },
  ]
  return (
    <div className="grid grid-cols-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {stats.map(({ num, label }, i) => (
        <Reveal key={num} delay={i * 0.08}>
          <div
            className="px-10 py-16 transition-colors duration-300"
            style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--char)')}
            onMouseLeave={e => (e.currentTarget.style.background = '')}
          >
            <div style={{ fontFamily: "'Abril Fatface',serif", fontSize: 'clamp(48px,7vw,88px)', lineHeight: 1, marginBottom: 12 }}>{num}</div>
            <div className="text-[10px] leading-loose whitespace-pre-line" style={{ color: 'var(--muted)' }}>{label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function TeesPreview() {
  return (
    <section className="px-[52px] py-[110px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center gap-3 mb-12 text-[9px] tracking-[0.4em] uppercase" style={{ color: 'var(--muted)' }}>
        <span className="w-7 h-px bg-current block" />Current three
      </div>
      <div className="grid grid-cols-3" style={{ gap: 1, background: 'rgba(255,255,255,0.06)' }}>
        {TEES.map((tee, i) => (
          <Reveal key={tee.id} delay={i * 0.1}>
            <div
              className="p-[52px] transition-colors duration-400"
              style={{ background: 'var(--ink)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--char)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
            >
              <div style={{ fontFamily: "'Abril Fatface',serif", fontSize: 72, color: 'rgba(255,255,255,0.04)', lineHeight: 1, marginBottom: 24 }}>{tee.num}</div>
              <div
                className="w-11 h-11 rounded-full mb-5 transition-transform duration-500"
                style={{ background: tee.swatch, border: tee.swatchBorder ? '1px solid rgba(255,255,255,0.1)' : undefined }}
              />
              <div style={{ fontFamily: "'Abril Fatface',serif", fontSize: 24, marginBottom: 10 }}>{tee.name}</div>
              <p className="text-[11px] leading-loose mb-7" style={{ color: 'var(--muted)' }}>{tee.desc}</p>
              <Link href="/tees" className="text-[9px] tracking-[0.25em] uppercase no-underline" style={{ color: 'var(--gold)' }}>
                View Tees →
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function AboutPreview() {
  const values = [
    { n: '01', title: 'Ability',   desc: "The Gafle was in you before you knew the word. We're just making it wearable." },
    { n: '02', title: 'Restraint', desc: 'Three tees. No exceptions. No midnight drops, no artificial scarcity.' },
    { n: '03', title: 'Humor',     desc: 'We take the message seriously. The marketing? Slightly less so.' },
  ]
  return (
    <div className="grid grid-cols-2 min-h-[60vh]">
      <div className="px-[52px] py-[100px] flex flex-col justify-center" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Abril Fatface',serif", fontSize: 'clamp(32px,4.5vw,56px)', lineHeight: 1, marginBottom: 24 }}>
            Built on one<br /><span style={{ color: 'var(--rust)' }}>truth.</span>
          </h2>
          <p className="text-[12px] leading-loose mb-4 max-w-[380px]" style={{ color: '#6a6055' }}>
            <strong style={{ color: 'var(--ink)' }}>You didn't need us to tell you.</strong> But here we are, on a tee, in earthy cotton, confirming what you already knew.
          </p>
          <p className="text-[12px] leading-loose mb-7 max-w-[380px]" style={{ color: '#6a6055' }}>
            iHadGafle is a T-shirt brand from Cape Town. Three varieties. Rotating inventory. No fluff, no drops, no hype calendar. Just the ability — stitched in.
          </p>
          <Link href="/about" className="text-[9px] tracking-[0.3em] uppercase" style={{ color: 'var(--rust)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
            Read the full story →
          </Link>
        </Reveal>
      </div>
      <div className="px-[52px] py-[100px] flex flex-col justify-center" style={{ background: 'var(--char)' }}>
        {values.map(({ n, title, desc }, i) => (
          <Reveal key={n} delay={i * 0.1}>
            <div className="py-6 flex items-start gap-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontFamily: "'Abril Fatface',serif", fontSize: 22, color: 'rgba(255,255,255,0.12)', minWidth: 36, paddingTop: 2 }}>{n}</span>
              <div>
                <div style={{ fontFamily: "'Abril Fatface',serif", fontSize: 18, marginBottom: 6 }}>{title}</div>
                <div className="text-[10px] leading-loose" style={{ color: 'var(--muted)' }}>{desc}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function HomeMarquee2() {
  return <Marquee items={MARQUEE_ITEMS_2} reverse />
}
