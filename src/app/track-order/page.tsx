import type { Metadata } from 'next'
import Loader from '@/components/ui/Loader'
import TrackOrderForm from '@/components/ui/TrackOrderForm'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = { title: 'Track Order — iHadGafle' }

export default function TrackOrderPage() {
  return (
    <>
      <Loader subtitle="Locating your order..." />

      <div className="min-h-screen grid grid-cols-2">
        {/* Left — form */}
        <div className="px-[60px] pt-[140px] pb-20 flex flex-col justify-center" style={{background:'var(--ink)',borderRight:'1px solid rgba(255,255,255,0.06)'}}>
          <h1 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(48px,7vw,88px)',lineHeight:0.9,marginBottom:28}}>
            Track<br/>Your<br/><span style={{color:'var(--gold)'}}>Order.</span>
          </h1>
          <p className="text-[12px] leading-loose max-w-[360px] mb-12" style={{color:'var(--muted)'}}>
            Enter your order number and email address to see where your tee is. Order numbers are included in your confirmation email.
          </p>
          <TrackOrderForm />
        </div>

        {/* Right — static status guide */}
        <div className="px-[60px] pt-[140px] pb-20 flex flex-col justify-center" style={{background:'var(--char)'}}>
          <p className="text-[8px] tracking-[0.4em] uppercase mb-12" style={{color:'var(--muted)'}}>How orders move</p>
          <div className="flex flex-col">
            {[
              {n:'01',title:'Order Confirmed',  desc:'Your order has been received and payment confirmed.'},
              {n:'02',title:'In Production',    desc:'Your tee is being printed and quality checked.'},
              {n:'03',title:'Dispatched',       desc:'Your order has left our hands and is on its way to yours.'},
              {n:'04',title:'Out for Delivery', desc:'Your courier has it. Should be today or tomorrow.'},
              {n:'05',title:'Delivered',        desc:'Your Gafle has arrived. Wear it like a fact.'},
            ].map(({n,title,desc})=>(
              <div key={n} className="py-7 flex items-start gap-6" style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                <span style={{fontFamily:"'Abril Fatface',serif",fontSize:18,color:'rgba(255,255,255,0.1)',minWidth:32,paddingTop:2}}>{n}</span>
                <div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:'rgba(255,255,255,0.3)',marginBottom:6}}>{title}</div>
                  <div className="text-[10px] leading-loose" style={{color:'rgba(255,255,255,0.2)'}}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[9px] leading-loose mt-10" style={{color:'rgba(255,255,255,0.2)'}}>
            Having trouble? Email <span style={{color:'var(--gold)'}}>orders@ihadgafle.co</span> with your order number and we'll sort it personally.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
