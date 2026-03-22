'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GAFLE_DEFINITIONS } from '@/lib/data'
import Reveal from '@/components/ui/Reveal'

export default function GafleDefinition() {
  const [idx, setIdx] = useState(0)
  const [def, setDef] = useState(GAFLE_DEFINITIONS[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(i => {
        const next = (i + 1) % GAFLE_DEFINITIONS.length
        setDef(GAFLE_DEFINITIONS[next])
        return next
      })
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="grid grid-cols-2 gap-20 items-center px-[52px] py-[110px]"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

      {/* Left — animated word */}
      <Reveal>
        <h2 style={{ fontFamily: "'Abril Fatface', serif", fontSize: 'clamp(36px,5vw,64px)', lineHeight: 0.95, marginBottom: 20 }}>
          What's a<br/>
          <span className="overflow-hidden inline-block" style={{ verticalAlign: 'bottom' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={def.word}
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 900, color: 'var(--rust)', display: 'block' }}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-110%', opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {def.word}
              </motion.span>
            </AnimatePresence>
          </span>
          <br/>anyway?
        </h2>
        <p className="text-[11px] leading-loose mt-7 max-w-[380px]" style={{ color: 'var(--muted)' }}>
          It's not a product. Not a lifestyle. Not a movement with a manifesto. It's a word that means the thing you already had — sitting quietly inside you, waiting for nobody's permission.
        </p>
      </Reveal>

      {/* Right — definition card */}
      <Reveal delay={0.15}>
        <div className="p-12" style={{ background: 'var(--char)', borderLeft: '2px solid var(--rust)' }}>
          <p className="text-[8px] tracking-[0.4em] uppercase mb-5" style={{ color: 'var(--muted)' }}>Current definition</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={def.def}
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(16px,2vw,24px)', lineHeight: 1.6, color: 'var(--cream)', marginBottom: 20 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {def.def}
            </motion.p>
          </AnimatePresence>
          <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>iHadGafle Dictionary · Vol. 1</p>
        </div>
      </Reveal>
    </section>
  )
}
