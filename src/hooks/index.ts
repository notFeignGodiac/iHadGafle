'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { TAB_TAUNTS } from '@/lib/data'

export function useCursorPosition() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
  return pos
}

export function useIdle(delay = 5500) {
  const [isIdle, setIsIdle] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const reset = useCallback(() => {
    setIsIdle(false)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setIsIdle(true), delay)
  }, [delay])

  useEffect(() => {
    timer.current = setTimeout(() => setIsIdle(true), 4000)
    window.addEventListener('mousemove', reset)
    window.addEventListener('keydown', reset)
    window.addEventListener('scroll', reset)
    return () => {
      clearTimeout(timer.current)
      window.removeEventListener('mousemove', reset)
      window.removeEventListener('keydown', reset)
      window.removeEventListener('scroll', reset)
    }
  }, [reset])

  return isIdle
}

export function useTabTaunt() {
  const idx = useRef(0)
  const original = useRef('')
  useEffect(() => {
    original.current = document.title
    const handler = () => {
      if (document.hidden) {
        document.title = TAB_TAUNTS[idx.current % TAB_TAUNTS.length]
        idx.current++
      } else {
        document.title = original.current
      }
    }
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [])
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handler = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return progress
}

export function useKonami(callback: () => void) {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
  const idx = useRef(0)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === seq[idx.current]) {
        idx.current++
        if (idx.current === seq.length) { idx.current = 0; callback() }
      } else {
        idx.current = 0
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [callback])
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}
