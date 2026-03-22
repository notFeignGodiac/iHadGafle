'use client'
import { ReactNode, useState, CSSProperties } from 'react'

interface HoverCardProps {
  children: ReactNode
  from?: string
  to?: string
  className?: string
  style?: CSSProperties
}

export default function HoverCard({
  children,
  from = 'var(--ink)',
  to = 'var(--char)',
  className = '',
  style = {},
}: HoverCardProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={className}
      style={{ ...style, background: hovered ? to : from, transition: 'background 0.4s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  )
}
