import type { Metadata } from 'next'
import Loader from '@/components/ui/Loader'
import ContactForm from '@/components/ui/ContactForm'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = { title: 'Contact — iHadGafle' }

export default function ContactPage() {
  return (
    <>
      <Loader subtitle="Opening the line..." />

      <div className="min-h-screen grid grid-cols-2">
        {/* Left */}
        <div className="px-[60px] pt-[140px] pb-20 flex flex-col justify-between" style={{background:'var(--ink)',borderRight:'1px solid rgba(255,255,255,0.06)'}}>
          <div>
            <h1 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(48px,7vw,88px)',lineHeight:0.9,marginBottom:28}}>
              Let's<br/>Talk<br/><span style={{color:'var(--gold)'}}>Gafle.</span>
            </h1>
            <p className="text-[12px] leading-loose max-w-[360px]" style={{color:'var(--muted)'}}>
              We're not a corporation. We're people who believe the same thing you do — the ability was always there. Talk to us like people.
            </p>

            <div className="mt-14">
              {[
                {label:'Email',       val:'hello@ihadgafle.co'},
                {label:'Instagram',   val:'@ihadgafle'},
                {label:'Based in',    val:'Cape Town, ZA'},
                {label:'Response',    val:'Quickly. Probably.'},
                {label:'Vibe check',  val:'Gafle confirmed.'},
              ].map(({label,val})=>(
                <div key={label} className="flex justify-between items-center py-[18px] transition-all duration-300 hover:pl-[10px]"
                  style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                  <span className="text-[8px] tracking-[0.3em] uppercase" style={{color:'var(--muted)'}}>{label}</span>
                  <span style={{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:15}}>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[9px] tracking-[0.15em] uppercase leading-loose mt-12" style={{color:'rgba(255,255,255,0.18)'}}>
            We read every message.<br/>We are not a bot.<br/>(This message was not written by a bot.)
          </p>
        </div>

        {/* Right — form */}
        <div className="px-[60px] pt-[140px] pb-20 flex flex-col justify-center" style={{background:'var(--char)'}}>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  )
}
