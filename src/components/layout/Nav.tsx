'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[52px] py-7"
      style={{ background: 'rgba(13,11,8,0.95)', backdropFilter: 'blur(8px)' }}>
      <Link href="/"
        className="no-underline"
        style={{ fontFamily: "'Abril Fatface', serif", fontSize: 16, letterSpacing: '0.1em', color: 'var(--cream)' }}>
        <span style={{ color: 'var(--gold)' }}>i</span>HadGafle
      </Link>

      <ul className="flex gap-7 list-none flex-wrap">
        {NAV_LINKS.map(({ href, label }) => {
          const active = pathname === href
          return (
            <li key={href}>
              <Link href={href} className="relative no-underline group"
                style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--cream)', opacity: active ? 1 : 0.45, transition: 'opacity 0.3s' }}>
                {label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px"
                  style={{ background: 'var(--gold)' }}
                  initial={{ width: active ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  animate={{ width: active ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
