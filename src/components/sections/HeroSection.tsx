'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const LETTERS = [
  { char: 'i', small: true,  dx: -1300, dy: -280, rot: -190 },
  { char: 'H', small: false, dx: -850,  dy: -550, rot: -85  },
  { char: 'a', small: false, dx:  180,  dy: -820, rot:  50  },
  { char: 'd', small: false, dx:  650,  dy: -180, rot:  130 },
  { char: 'G', small: false, dx: -720,  dy:  420, rot: -65  },
  { char: 'a', small: false, dx: -180,  dy:  880, rot:  210 },
  { char: 'f', small: false, dx:  820,  dy:  320, rot: -145 },
  { char: 'l', small: false, dx:  420,  dy:  720, rot:   95 },
  { char: 'e', small: false, dx: 1180,  dy:  480, rot:  265 },
]

const ROW1 = LETTERS.slice(0, 4)
const ROW2 = LETTERS.slice(4)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const { scrollY } = useScroll()
  const heroH = typeof window !== 'undefined' ? window.innerHeight : 800
  const scatterProgress = useTransform(scrollY, [0, heroH * 0.6], [0, 1])

  // Magnetic effect
  useEffect(() => {
    const handler = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section
      ref={containerRef}
      className="h-screen flex items-center justify-center relative overflow-hidden select-none grid-lines"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      {/* Brand stack */}
      <div className="flex flex-col items-center relative z-10" style={{ lineHeight: 0.88 }}>
        {/* Row 1: iHad */}
        <div className="flex items-baseline overflow-visible">
          {ROW1.map((l, i) => (
            <ScatterLetter
              key={`r1-${i}`}
              {...l}
              index={i}
              mouse={mouse}
              scatterProgress={scatterProgress}
              refCallback={el => { letterRefs.current[i] = el }}
            />
          ))}
        </div>
        {/* Row 2: Gafle */}
        <div className="flex items-baseline overflow-visible">
          {ROW2.map((l, i) => (
            <ScatterLetter
              key={`r2-${i}`}
              {...l}
              index={i + 4}
              mouse={mouse}
              scatterProgress={scatterProgress}
              refCallback={el => { letterRefs.current[i + 4] = el }}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span className="text-[8px] tracking-[0.4em] uppercase" style={{ color: 'var(--muted)' }}>Scroll</span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--muted), transparent)' }}
          animate={{ scaleY: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}

interface LetterProps {
  char: string
  small: boolean
  dx: number
  dy: number
  rot: number
  index: number
  mouse: { x: number; y: number }
  scatterProgress: any
  refCallback: (el: HTMLSpanElement | null) => void
}

function ScatterLetter({ char, small, dx, dy, rot, mouse, scatterProgress, refCallback }: LetterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [mag, setMag] = useState({ x: 0, y: 0 })

  const x = useTransform(scatterProgress, [0, 1], [0, dx])
  const y = useTransform(scatterProgress, [0, 1], [0, dy])
  const rotate = useTransform(scatterProgress, [0, 1], [0, rot])
  const opacity = useTransform(scatterProgress, [0, 1], [1, 0])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const ddx = mouse.x - cx
    const ddy = mouse.y - cy
    const dist = Math.sqrt(ddx * ddx + ddy * ddy)
    const RADIUS = 180
    if (dist < RADIUS) {
      const force = (RADIUS - dist) / RADIUS
      setMag({ x: ddx * force * 0.28, y: ddy * force * 0.28 })
    } else {
      setMag({ x: 0, y: 0 })
    }
  }, [mouse])

  const bigSize = 'clamp(80px, 16vw, 220px)'
  const smallSize = 'clamp(50px, 9vw, 130px)'

  return (
    <motion.span
      ref={el => { ref.current = el; refCallback(el) }}
      style={{
        fontFamily: "'Abril Fatface', serif",
        fontSize: small ? smallSize : bigSize,
        color: small ? 'var(--gold)' : 'var(--cream)',
        display: 'inline-block',
        x: useTransform(x, v => v + mag.x),
        y: useTransform(y, v => v + mag.y),
        rotate,
        opacity,
        willChange: 'transform, opacity',
      }}
    >
      {char}
    </motion.span>
  )
}
