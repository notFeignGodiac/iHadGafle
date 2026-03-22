'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'

const schema = z.object({
  orderNumber: z.string().min(1,'Order number required'),
  email:       z.string().email('Valid email required'),
})
type FormData = z.infer<typeof schema>

const STEPS = ['','Order Confirmed','In Production','Dispatched','Out for Delivery','Delivered']

export default function TrackOrderForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'found'|'error'>('idle')
  const [order, setOrder] = useState<any>(null)
  const [errMsg, setErrMsg] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    setOrder(null)
    try {
      const res = await fetch('/api/track-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) { setOrder(json.order); setStatus('found') }
      else { setErrMsg(json.message); setStatus('error') }
    } catch {
      setErrMsg('Could not connect. Email orders@ihadgafle.co directly.')
      setStatus('error')
    }
  }

  const iStyle = {
    width:'100%', background:'none', border:'none',
    borderBottom:'1px solid rgba(255,255,255,0.1)',
    padding:'12px 0', fontFamily:"'DM Mono',monospace",
    fontSize:14, color:'var(--cream)', outline:'none',
  }

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div>
          <label className="block text-[8px] tracking-[0.35em] uppercase mb-[10px]" style={{color:'rgba(255,255,255,0.28)'}}>Order Number</label>
          <input {...register('orderNumber')} placeholder="e.g. IHG-00142" style={iStyle}
            onFocus={e=>(e.target.style.borderBottomColor='var(--gold)')} onBlur={e=>(e.target.style.borderBottomColor='rgba(255,255,255,0.1)')}/>
          {errors.orderNumber && <p className="text-[9px] mt-1" style={{color:'var(--rust)'}}>{errors.orderNumber.message}</p>}
        </div>
        <div>
          <label className="block text-[8px] tracking-[0.35em] uppercase mb-[10px]" style={{color:'rgba(255,255,255,0.28)'}}>Email Address</label>
          <input {...register('email')} type="email" placeholder="yours@somewhere.com" style={iStyle}
            onFocus={e=>(e.target.style.borderBottomColor='var(--gold)')} onBlur={e=>(e.target.style.borderBottomColor='rgba(255,255,255,0.1)')}/>
          {errors.email && <p className="text-[9px] mt-1" style={{color:'var(--rust)'}}>{errors.email.message}</p>}
        </div>
        <button type="submit" disabled={status==='loading'}
          className="w-fit px-10 py-[15px] text-[9px] tracking-[0.25em] uppercase transition-colors duration-300"
          style={{background:status==='loading'?'var(--muted)':'var(--gold)',color:'var(--ink)',border:'none'}}
          onMouseEnter={e=>status!=='loading'&&((e.currentTarget as HTMLElement).style.background='var(--cream)')}
          onMouseLeave={e=>status!=='loading'&&((e.currentTarget as HTMLElement).style.background='var(--gold)')}>
          {status === 'loading' ? 'Locating...' : 'Track It'}
        </button>
      </form>

      <AnimatePresence>
        {status==='error' && (
          <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}}
            className="text-[12px] leading-loose py-4 px-5" style={{borderLeft:'2px solid var(--rust)',color:'var(--rust)'}}>
            {errMsg}
          </motion.div>
        )}
        {status==='found' && order && (
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="flex flex-col gap-0">
            <div className="mb-6 py-4 px-5" style={{background:'rgba(201,146,42,0.1)',borderLeft:'2px solid var(--gold)'}}>
              <p className="text-[9px] tracking-[0.25em] uppercase mb-2" style={{color:'var(--gold)'}}>Order Found</p>
              <p className="text-[13px]" style={{color:'var(--cream)'}}>{order.number} — {order.tee}</p>
              <p className="text-[10px]" style={{color:'var(--muted)'}}>Ordered: {order.date}</p>
            </div>
            <div className="flex flex-col">
              {STEPS.slice(1).map((label,i)=>{
                const step = i+1
                const done = step < order.statusStep
                const active = step === order.statusStep
                return (
                  <div key={step} className="py-6 flex items-start gap-6" style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                    <span style={{fontFamily:"'Abril Fatface',serif",fontSize:18,minWidth:32,paddingTop:2,color:done?'var(--sage)':active?'var(--gold)':'rgba(255,255,255,0.1)'}}>
                      {String(step).padStart(2,'0')}
                    </span>
                    <div>
                      <div style={{fontSize:18,fontFamily:"'Playfair Display',serif",color:active?'var(--cream)':done?'rgba(255,255,255,0.45)':'rgba(255,255,255,0.25)',marginBottom:4}}>{label}</div>
                      {active && <div className="text-[10px]" style={{color:'var(--muted)'}}>Current status</div>}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
