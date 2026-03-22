'use client'
import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { IDLE_TOASTS } from '@/lib/data'
import { useKonami } from '@/hooks'

// ── IDLE TOAST ──────────────────────────────────────────────────
export function IdleToast() {
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)
  const idxRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const hide = useCallback(() => setShow(false), [])

  const showNext = useCallback(() => {
    setMsg(IDLE_TOASTS[idxRef.current % IDLE_TOASTS.length])
    idxRef.current++
    setShow(true)
    timerRef.current = setTimeout(hide, 7000)
  }, [hide])

  const reset = useCallback(() => {
    clearTimeout(timerRef.current)
    setShow(false)
    timerRef.current = setTimeout(showNext, 5500)
  }, [showNext])

  useEffect(() => {
    const initTimer = setTimeout(() => {
      timerRef.current = setTimeout(showNext, 5500)
    }, 4000)
    window.addEventListener('mousemove', reset)
    window.addEventListener('keydown', reset)
    window.addEventListener('scroll', reset)
    return () => {
      clearTimeout(initTimer)
      clearTimeout(timerRef.current)
      window.removeEventListener('mousemove', reset)
      window.removeEventListener('keydown', reset)
      window.removeEventListener('scroll', reset)
    }
  }, [reset, showNext])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-10 left-1/2 z-[9000] text-[11px] tracking-wide text-center max-w-[92vw] whitespace-nowrap px-7 py-[14px]"
          style={{ background: 'var(--char)', border: '1px solid rgba(255,255,255,0.09)', color: 'var(--cream)', translateX: '-50%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.45 }}
          dangerouslySetInnerHTML={{ __html: msg.replace(/<b>/g, '<span style="color:var(--gold)">').replace(/<\/b>/g, '</span>') }}
        />
      )}
    </AnimatePresence>
  )
}

// ── CONTEXT MENU ─────────────────────────────────────────────────
export function ContextMenu() {
  const router = useRouter()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onCtx = (e: MouseEvent) => {
      e.preventDefault()
      setPos({
        x: Math.min(e.clientX, window.innerWidth - 250),
        y: Math.min(e.clientY, window.innerHeight - 200),
      })
      setOpen(true)
    }
    const onClose = () => setOpen(false)
    document.addEventListener('contextmenu', onCtx)
    document.addEventListener('click', onClose)
    return () => {
      document.removeEventListener('contextmenu', onCtx)
      document.removeEventListener('click', onClose)
    }
  }, [])

  const items = [
    { label: '→ Home',        href: '/' },
    { label: '→ The Tees',    href: '/tees' },
    { label: '→ About',       href: '/about' },
    { label: '→ Track Order', href: '/track-order' },
    { label: '→ Jobs',        href: '/jobs' },
    { label: '→ Contact',     href: '/contact' },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed z-[99990] min-w-[230px] py-2"
          style={{ left: pos.x, top: pos.y, background: 'var(--char)', border: '1px solid rgba(255,255,255,0.1)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          <div className="px-5 py-2 text-[8px] tracking-[0.35em] uppercase border-b mb-1" style={{ color: 'var(--muted)', borderColor: 'rgba(255,255,255,0.06)' }}>iHadGafle</div>
          {items.map(({ label, href }) => (
            <button key={href}
              className="block w-full text-left px-5 py-[10px] text-[11px] tracking-wide transition-all duration-200 hover:pl-7"
              style={{ color: 'var(--cream)', opacity: 0.65, background: 'none', border: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}
              onClick={() => router.push(href)}>
              {label}
            </button>
          ))}
          <div className="px-5 py-2 text-[9px] border-t mt-1" style={{ color: 'var(--muted)', borderColor: 'rgba(255,255,255,0.06)', opacity: 0.4 }}>
            Right-clicking won't give you more tees.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── KONAMI EGG ────────────────────────────────────────────────────
export function KonamiEgg() {
  const [show, setShow] = useState(false)
  useKonami(useCallback(() => setShow(true), []))

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center gap-4 cursor-none"
          style={{ background: 'var(--gold)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
        >
          <h2 style={{ fontFamily: "'Abril Fatface', serif", fontSize: 'clamp(40px,8vw,100px)', color: 'var(--ink)', textAlign: 'center', lineHeight: 0.95 }}>
            Maximum<br/>Gafle<br/>Unlocked.
          </h2>
          <p className="text-[11px] tracking-[0.3em] uppercase" style={{ color: 'rgba(0,0,0,0.45)' }}>↑↑↓↓←→←→BA — respect.</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
