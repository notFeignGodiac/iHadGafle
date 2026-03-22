'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  subtitle?: string
}

export default function Loader({ subtitle = 'Confirming your Gafle...' }: LoaderProps) {
  const [visible, setVisible] = useState(true)
  const [lettersUp, setLettersUp] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setLettersUp(true), 200)
    const t2 = setTimeout(() => setVisible(false), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center gap-4"
          style={{ background: 'var(--ink)' }}
          exit={{ opacity: 0, transition: { duration: 0.9 } }}
        >
          {/* Brand name */}
          <div className="overflow-hidden leading-none">
            <motion.div
              className="flex"
              style={{ fontFamily: "'Abril Fatface', serif", fontSize: 'clamp(24px,6vw,56px)', letterSpacing: '0.05em', color: 'var(--cream)' }}
              initial={{ y: '110%' }}
              animate={lettersUp ? { y: 0 } : { y: '110%' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{ color: 'var(--gold)' }}>i</span>HadGafle
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="w-40 h-px mt-2 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <motion.div
              className="h-full"
              style={{ background: 'var(--gold)' }}
              initial={{ x: '-100%' }}
              animate={lettersUp ? { x: 0 } : { x: '-100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-[9px] tracking-[0.4em] uppercase"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
