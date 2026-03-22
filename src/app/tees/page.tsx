import type { Metadata } from 'next'
import Loader from '@/components/ui/Loader'
import Reveal from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'
import { TeeCards } from '@/components/sections/TeesClient'

export const metadata: Metadata = { title: 'The Tees — iHadGafle' }

export default function TeesPage() {
  return (
    <>
      <Loader subtitle="Picking your size..." />

      <div className="px-[52px] pb-[72px] pt-[140px] flex justify-between items-end flex-wrap gap-8" style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
        <h1 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(56px,10vw,130px)',lineHeight:0.9}}>
          The<br/><em style={{color:'var(--rust)',fontStyle:'italic'}}>Current</em><br/>Three.
        </h1>
        <p className="text-[11px] leading-loose max-w-[300px] text-right" style={{color:'var(--muted)'}}>
          We only carry three at a time. Not because we can't make more — we choose not to. Pick wisely. Or don't — either way, the Gafle's yours.
        </p>
      </div>

      <TeeCards />

      <Reveal>
        <div className="px-[52px] py-[72px] flex justify-between items-center flex-wrap gap-8" style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          <p className="text-[12px] leading-loose max-w-[500px]" style={{color:'var(--muted)'}}>
            These three are <em style={{color:'var(--rust)',fontStyle:'italic'}}>current</em>. The lineup rotates — no schedule, no countdown timer, no newsletter with a dramatic subject line. When they change, they change. Best to act on your Gafle while it's stocked.
          </p>
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" style={{animation:'spin 10s linear infinite'}}>
            <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            <circle cx="44" cy="44" r="38" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <path id="bp" d="M44,44 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" fill="none"/>
            <text fontFamily="DM Mono" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="3">
              <textPath href="#bp">ONLY THREE · ROTATING · GAFLE ·</textPath>
            </text>
            <text x="44" y="49" textAnchor="middle" fontFamily="Abril Fatface" fontSize="16" fill="#b85c2a" letterSpacing="1">G</text>
          </svg>
        </div>
      </Reveal>

      <Footer />
    </>
  )
}
