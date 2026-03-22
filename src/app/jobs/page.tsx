'use client'
import { useState } from 'react'
import Loader from '@/components/ui/Loader'
import Reveal from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { JOBS } from '@/lib/data'
import { motion, AnimatePresence } from 'framer-motion'

type Level = 'entry' | 'experienced' | 'professional'
const LEVELS: { key: Level; label: string }[] = [
  { key: 'entry',        label: 'Entry Level' },
  { key: 'experienced',  label: 'Experienced' },
  { key: 'professional', label: 'Professional' },
]

export default function JobsPage() {
  const [level, setLevel] = useState<Level>('entry')
  const jobs = JOBS[level]

  return (
    <>
      <Loader subtitle="Finding your role..." />

      {/* Header */}
      <div className="px-[52px] pt-[140px] pb-[72px]" style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
        <h1 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(56px,10vw,120px)',lineHeight:0.9,marginBottom:24}}>
          Work at<br/><span style={{color:'var(--gold)'}}>iHadGafle.</span>
        </h1>
        <p className="text-[12px] leading-loose max-w-[560px]" style={{color:'var(--muted)'}}>
          We're a small brand that believes in the ability to do. If you have Gafle — and you do — and you want to put it somewhere that gives a damn, we might be looking for each other.
        </p>
      </div>

      {/* Level tabs */}
      <div className="flex" style={{background:'var(--char)',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
        {LEVELS.map(({key,label})=>(
          <button key={key} onClick={()=>setLevel(key)}
            className="px-9 py-5 text-[9px] tracking-[0.3em] uppercase relative transition-colors duration-300"
            style={{background:'none',border:'none',color:level===key?'var(--cream)':'rgba(255,255,255,0.35)',borderBottom:level===key?'2px solid var(--gold)':'2px solid transparent'}}>
            {label}
          </button>
        ))}
      </div>

      {/* Listings */}
      <div className="px-[52px] py-20">
        <AnimatePresence mode="wait">
          <motion.div key={level} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:0.3}}>
            <div className="max-w-[640px] mb-14">
              <h2 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(32px,5vw,56px)',lineHeight:0.95,marginBottom:20}}>
                {level === 'entry' && <>Entry <span style={{color:'var(--rust)'}}>Level.</span></>}
                {level === 'experienced' && <>Experienced <span style={{color:'var(--rust)'}}>Level.</span></>}
                {level === 'professional' && <>Professional <span style={{color:'var(--rust)'}}>Level.</span></>}
              </h2>
              <p className="text-[12px] leading-loose" style={{color:'var(--muted)'}}>
                {level === 'entry' && "You don't need a CV that makes us dizzy. You need Gafle, a willingness to learn, and the ability to do the work honestly. We'll take it from there."}
                {level === 'experienced' && "You've done this before. You know the craft. You're looking for a brand that isn't going to make you do things you'd be embarrassed to show your portfolio. That's us."}
                {level === 'professional' && "Senior contributors who bring strategic thinking alongside execution. We're a small operation — if you join at this level, you'll have real influence. That's the offer."}
              </p>
            </div>

            <div className="flex flex-col" style={{gap:1,background:'rgba(255,255,255,0.06)'}}>
              {jobs.map((job,i)=>(
                <Reveal key={job.title} delay={i*0.08}>
                  <div className="px-12 py-11 transition-colors duration-400" style={{background:'var(--ink)'}}
                    onMouseEnter={e=>(e.currentTarget.style.background='var(--char)')} onMouseLeave={e=>(e.currentTarget.style.background='var(--ink)')}>
                    <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(20px,2.5vw,28px)',fontWeight:700}}>{job.title}</div>
                      <div className="flex gap-4 flex-wrap">
                        <span className="text-[8px] tracking-[0.25em] uppercase px-[14px] py-[6px]"
                          style={{border:`1px solid ${job.status==='open'?'var(--sage)':'var(--muted)'}`,color:job.status==='open'?'var(--sage)':'rgba(255,255,255,0.2)'}}>
                          {job.status === 'open' ? 'Open' : 'Filled'}
                        </span>
                        <span className="text-[8px] tracking-[0.25em] uppercase px-[14px] py-[6px]" style={{border:'1px solid rgba(255,255,255,0.1)',color:'var(--muted)'}}>{job.type}</span>
                        <span className="text-[8px] tracking-[0.25em] uppercase px-[14px] py-[6px]" style={{border:'1px solid rgba(255,255,255,0.1)',color:'var(--muted)'}}>{job.location}</span>
                      </div>
                    </div>
                    <p className="text-[11px] leading-loose mb-6 max-w-[700px]" style={{color:'var(--muted)'}}>{job.desc}</p>
                    <Link href="/contact" className="text-[9px] tracking-[0.25em] uppercase no-underline transition-all duration-300"
                      style={{color:'var(--gold)'}}
                      onMouseEnter={e=>(e.currentTarget.style.letterSpacing='0.35em')} onMouseLeave={e=>(e.currentTarget.style.letterSpacing='0.25em')}>
                      {job.status === 'open' ? 'Apply via Contact →' : 'Send Portfolio →'}
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </>
  )
}
