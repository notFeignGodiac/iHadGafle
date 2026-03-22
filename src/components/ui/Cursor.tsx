'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-cursor-hover]')) setHovered(true)
    }
    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-cursor-hover]')) setHovered(false)
    }
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <>
      {/* Petal cursor */}
      <motion.div
        className="fixed pointer-events-none z-[99999]"
        style={{ x: pos.x, y: pos.y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hovered ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <ellipse cx="14" cy="9"  rx="6" ry="9" fill="#c9922a" transform="rotate(-30 14 9)"/>
          <ellipse cx="20" cy="14" rx="6" ry="9" fill="#b85c2a" transform="rotate(90 20 14)"/>
          <ellipse cx="8"  cy="14" rx="6" ry="9" fill="#7a8c72" transform="rotate(210 8 14)"/>
          <circle cx="14" cy="14" r="2.5" fill="#2c2416"/>
          <line x1="14" y1="16.5" x2="14" y2="26" stroke="#2c2416" strokeWidth="1.5"/>
        </svg>
      </motion.div>

      {/* Dot */}
      <motion.div
        className="fixed w-[6px] h-[6px] rounded-full pointer-events-none z-[99999]"
        style={{
          background: 'var(--rust)',
          x: pos.x,
          y: pos.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </>
  )
}
