import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import GafleDefinition from '@/components/sections/GafleDefinition'
import { StatRow, TeesPreview, AboutPreview, HomeMarquee2 } from '@/components/sections/HomeClient'
import Marquee from '@/components/ui/Marquee'
import Reveal from '@/components/ui/Reveal'
import Loader from '@/components/ui/Loader'
import Footer from '@/components/layout/Footer'
import { MARQUEE_ITEMS_1 } from '@/lib/data'

export const metadata: Metadata = {
  title: 'iHadGafle — You Already Had It',
  description: 'A Cape Town T-shirt brand built on one truth: you already had the ability.',
}

export default function HomePage() {
  return (
    <>
      <Loader subtitle="Confirming your Gafle..." />
      <HeroSection />
      <Marquee items={MARQUEE_ITEMS_1} />

      {/* Tagline */}
      <section className="grid grid-cols-2 gap-20 items-center px-[52px] py-[120px]" style={{borderTop:'1px solid rgba(255,255,255,0.06)'}}>
        <Reveal>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(36px,5vw,72px)',fontStyle:'italic',fontWeight:900,lineHeight:1.05}}>
            You<br/>already<br/><span style={{color:'var(--rust)',fontStyle:'normal'}}>had</span><br/>it.
          </p>
        </Reveal>
        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}><p className="text-[12px] leading-loose" style={{color:'var(--muted)'}}><strong style={{color:'var(--cream)'}}>Gafle</strong> is the ability to do. Not the desire. Not the plan. The raw, unbothered ability that sits inside you — mostly ignored, occasionally underestimated, always there.</p></Reveal>
          <Reveal delay={0.2}><p className="text-[12px] leading-loose" style={{color:'var(--muted)'}}>We make three T-shirts. They rotate. We don't send countdown emails or do artificial scarcity theatre. When they're here, they're here. When they're gone — you had Gafle, you'll figure it out.</p></Reveal>
          <Reveal delay={0.3}><p className="text-[10px] tracking-[0.1em]" style={{color:'var(--muted)'}}>For everyone. No exceptions. No demographics. No asterisks.</p></Reveal>
        </div>
      </section>

      <GafleDefinition />
      <StatRow />

      {/* Humor strip */}
      <Reveal>
        <div className="px-[52px] py-20 flex items-center justify-between gap-10 flex-wrap" style={{background:'var(--rust)'}}>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(22px,3.5vw,44px)',fontStyle:'italic',color:'var(--cream)',maxWidth:600,lineHeight:1.35}}>
            "We almost called it iCanDoThings. Then we sat with that for four seconds."
          </p>
          <p className="text-[9px] tracking-[0.2em] uppercase text-right max-w-[240px] leading-loose" style={{color:'rgba(255,255,255,0.45)'}}>
            — The iHadGafle team, in a voice note nobody asked for
          </p>
        </div>
      </Reveal>

      <TeesPreview />
      <HomeMarquee2 />
      <AboutPreview />
      <Footer />
    </>
  )
}
