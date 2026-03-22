import type { Metadata } from 'next'
import Loader from '@/components/ui/Loader'
import Reveal from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'
import { ValueCards } from '@/components/sections/AboutClient'

export const metadata: Metadata = { title: 'About — iHadGafle' }

export default function AboutPage() {
  return (
    <>
      <Loader subtitle="Loading the story..." />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-end relative overflow-hidden px-[52px] pb-[72px] pt-[140px]" style={{background:'var(--ink)'}}>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(140px,22vw,300px)',color:'rgba(255,255,255,0.025)',letterSpacing:'-0.02em',whiteSpace:'nowrap',animation:'drift 25s ease-in-out infinite alternate'}}>
            GAFLE
          </span>
        </div>
        <style>{`@keyframes drift{from{transform:translateX(-3%)}to{transform:translateX(3%)}}`}</style>
        <div className="relative z-10">
          <h1 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(60px,11vw,140px)',color:'var(--cream)',lineHeight:0.9,marginBottom:24}}>
            The<br/><span style={{color:'var(--gold)'}}>Gafle</span><br/>Story.
          </h1>
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{color:'var(--muted)'}}>Cape Town · No bias · Just vibes</p>
        </div>
      </section>

      {/* Body */}
      <div className="grid grid-cols-2" style={{borderBottom:'1px solid rgba(0,0,0,0.08)',background:'var(--paper)',color:'var(--ink)'}}>
        <div className="px-[60px] py-[88px]" style={{borderRight:'1px solid rgba(0,0,0,0.08)'}}>
          <Reveal>
            <div className="flex items-center gap-3 mb-7 text-[8px] tracking-[0.45em] uppercase" style={{color:'#9a8f7e'}}><span className="w-6 h-px bg-current block"/>Origin</div>
            <h2 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(28px,3.5vw,44px)',lineHeight:1.05,marginBottom:24}}>What even is a <span style={{color:'var(--rust)'}}>Gafle?</span></h2>
            <p className="text-[12px] leading-[2.3] mb-4" style={{color:'#6a6055'}}><strong style={{color:'var(--ink)'}}>Gafle is the ability to do.</strong> Not the desire. Not the plan. Not the mood board. The raw, unbothered ability that sits inside you — mostly ignored, occasionally underestimated, always there.</p>
            <p className="text-[12px] leading-[2.3] mb-4" style={{color:'#6a6055'}}>iHadGafle is a statement, not a brand. Well, it's both. But more a statement. The "i" is lowercase because ability doesn't need to announce itself. The rest is loud because sometimes, the reminder needs to be.</p>
            <p className="text-[12px] leading-[2.3]" style={{color:'#6a6055'}}>We make T-shirts. Three at a time. They rotate. If you missed one, you had Gafle — you'll figure it out.</p>
          </Reveal>
        </div>
        <div className="px-[60px] py-[88px]">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-7 text-[8px] tracking-[0.45em] uppercase" style={{color:'#9a8f7e'}}><span className="w-6 h-px bg-current block"/>Philosophy</div>
            <h2 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(28px,3.5vw,44px)',lineHeight:1.05,marginBottom:24}}>For everyone.<br/><span style={{color:'var(--rust)'}}>No fine print.</span></h2>
            <p className="text-[12px] leading-[2.3] mb-4" style={{color:'#6a6055'}}>iHadGafle has no target audience. Not because we didn't think about it — we did, for about four minutes — but because Gafle is not demographic-specific.</p>
            <p className="text-[12px] leading-[2.3] mb-4" style={{color:'#6a6055'}}>It doesn't care about your age, your budget, your playlist, or whether you use a planner or a napkin. If you exist and you wear clothes, you qualify.</p>
            <p className="text-[12px] leading-[2.3]" style={{color:'#6a6055'}}><strong style={{color:'var(--ink)'}}>Three tees. Rotating inventory. One confirmation. That's the whole thing.</strong></p>
          </Reveal>
        </div>
      </div>

      {/* Values */}
      <div className="px-[52px] py-[100px]" style={{background:'var(--ink)'}}>
        <Reveal><h2 className="mb-14" style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(32px,5vw,64px)',letterSpacing:'0.04em'}}>What We Stand On</h2></Reveal>
        <ValueCards />
      </div>

      {/* Humor row */}
      <div className="grid grid-cols-2 gap-16 items-center px-[52px] py-20" style={{background:'var(--paper)',color:'var(--ink)',borderTop:'1px solid rgba(0,0,0,0.08)'}}>
        <Reveal><p style={{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'clamp(20px,2.8vw,32px)',lineHeight:1.45}}>"Okay but what does it actually mean when I wear it?"</p></Reveal>
        <Reveal delay={0.1}><p className="text-[12px] leading-[2.3] pl-7" style={{color:'#6a6055',borderLeft:'2px solid var(--rust)'}}>It means you <strong style={{color:'var(--ink)'}}>had</strong> Gafle. Past tense because it's already confirmed. You're not aspiring — you're acknowledging. Wear it like a fact, not a wish. There's a difference and you already know which one feels better.</p></Reveal>
      </div>

      <Footer light />
    </>
  )
}
