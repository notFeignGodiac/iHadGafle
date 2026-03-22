import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Cursor from '@/components/ui/Cursor'
import { IdleToast, ContextMenu, KonamiEgg } from '@/components/ui/Interactions'
import TabTaunt from '@/components/ui/TabTaunt'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'iHadGafle — You Already Had It',
  description: 'A Cape Town T-shirt brand built on one truth: you already had the ability.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Playfair+Display:ital,wght@0,700;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Cursor />
        <TabTaunt />
        <Nav />
        <main>{children}</main>
        <IdleToast />
        <ContextMenu />
        <KonamiEgg />
        <Analytics />
      </body>
    </html>
  )
}
