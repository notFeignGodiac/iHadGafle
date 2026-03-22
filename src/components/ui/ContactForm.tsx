'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'

const schema = z.object({
  name:    z.string().min(1, 'Name is required'),
  email:   z.string().email('Valid email required'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit more (10+ chars)'),
})
type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
        setErrMsg(json.message || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrMsg('Could not reach the server. Try emailing us directly.')
    }
  }

  const fieldStyle = {
    width: '100%',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    padding: '12px 0',
    fontFamily: "'DM Mono', monospace",
    fontSize: 13,
    color: 'var(--cream)',
    outline: 'none',
    resize: 'none' as const,
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9">
      <p className="text-[8px] tracking-[0.4em] uppercase mb-2" style={{color:'var(--muted)'}}>Drop us a message</p>

      <div>
        <label className="block text-[8px] tracking-[0.35em] uppercase mb-[10px]" style={{color:'rgba(255,255,255,0.28)'}}>Your name</label>
        <input {...register('name')} placeholder="The one who had Gafle" style={fieldStyle}
          onFocus={e=>(e.target.style.borderBottomColor='var(--gold)')} onBlur={e=>(e.target.style.borderBottomColor='rgba(255,255,255,0.1)')}/>
        {errors.name && <p className="text-[9px] mt-1" style={{color:'var(--rust)'}}>{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-[8px] tracking-[0.35em] uppercase mb-[10px]" style={{color:'rgba(255,255,255,0.28)'}}>Email</label>
        <input {...register('email')} type="email" placeholder="yours@somewhere.com" style={fieldStyle}
          onFocus={e=>(e.target.style.borderBottomColor='var(--gold)')} onBlur={e=>(e.target.style.borderBottomColor='rgba(255,255,255,0.1)')}/>
        {errors.email && <p className="text-[9px] mt-1" style={{color:'var(--rust)'}}>{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-[8px] tracking-[0.35em] uppercase mb-[10px]" style={{color:'rgba(255,255,255,0.28)'}}>Subject (optional)</label>
        <input {...register('subject')} placeholder="Ordering, collab, saying hi..." style={fieldStyle}
          onFocus={e=>(e.target.style.borderBottomColor='var(--gold)')} onBlur={e=>(e.target.style.borderBottomColor='rgba(255,255,255,0.1)')}/>
      </div>

      <div>
        <label className="block text-[8px] tracking-[0.35em] uppercase mb-[10px]" style={{color:'rgba(255,255,255,0.28)'}}>What's on your mind</label>
        <textarea {...register('message')} rows={4} placeholder="All welcome." style={fieldStyle}
          onFocus={e=>(e.target.style.borderBottomColor='var(--gold)')} onBlur={e=>(e.target.style.borderBottomColor='rgba(255,255,255,0.1)')}/>
        {errors.message && <p className="text-[9px] mt-1" style={{color:'var(--rust)'}}>{errors.message.message}</p>}
      </div>

      <div className="flex items-center gap-6 mt-2">
        <button type="submit" disabled={status==='loading'}
          className="px-10 py-[15px] text-[9px] tracking-[0.25em] uppercase transition-colors duration-300"
          style={{background: status==='loading' ? 'var(--muted)' : 'var(--gold)', color:'var(--ink)', border:'none'}}
          onMouseEnter={e=>status!=='loading'&&((e.currentTarget as HTMLElement).style.background='var(--cream)')}
          onMouseLeave={e=>status!=='loading'&&((e.currentTarget as HTMLElement).style.background='var(--gold)')}>
          {status === 'loading' ? 'Sending...' : 'Send It'}
        </button>
        <p className="text-[9px] leading-loose" style={{color:'rgba(255,255,255,0.18)'}}>No spam.<br/>No unsolicited newsletter.<br/>Promise.</p>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}}
            className="text-[12px] leading-loose py-4 px-5" style={{background:'rgba(122,140,114,0.15)',borderLeft:'2px solid var(--sage)',color:'var(--sage)'}}>
            Message received. We'll be in touch. The Gafle is strong with this one.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}}
            className="text-[12px] leading-loose py-4 px-5" style={{background:'rgba(184,92,42,0.12)',borderLeft:'2px solid var(--rust)',color:'var(--rust)'}}>
            {errMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
