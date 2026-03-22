import type { Metadata } from 'next'
import Loader from '@/components/ui/Loader'
import Reveal from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'
import { ComplianceNav } from '@/components/sections/ComplianceClient'

export const metadata: Metadata = { title: 'Compliance — iHadGafle' }

export default function CompliancePage() {
  return (
    <>
      <Loader subtitle="Loading compliance documents..." />

      {/* Header */}
      <div className="px-[52px] pt-[140px] pb-16" style={{background:'var(--ink)',borderBottom:'3px solid var(--gold)'}}>
        <h1 style={{fontFamily:"'Abril Fatface',serif",fontSize:'clamp(48px,8vw,100px)',color:'var(--cream)',lineHeight:0.9,marginBottom:20}}>
          Compliance &amp;<br/>Responsibility.
        </h1>
        <p className="text-[11px] leading-loose max-w-[600px] mt-5" style={{color:'var(--muted)'}}>
          iHadGafle takes its obligations to people, planet, and law seriously. This page documents our certifications, manufacturing standards, environmental commitments, and safeguarding positions. No brand language. No spin. Just the facts.
        </p>
        <div className="inline-flex items-center gap-2 mt-7 px-5 py-[10px] text-[9px] tracking-[0.3em] uppercase"
          style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'var(--gold)'}}>
          ✓ &nbsp; Last reviewed: January 2025 &nbsp;·&nbsp; Next review: January 2026
        </div>
      </div>

      <ComplianceNav />

      {/* CERT */}
      <section id="cert" className="px-[52px] py-20" style={{borderBottom:'1px solid rgba(0,0,0,0.08)',background:'var(--paper)',color:'var(--ink)'}}>
        <div className="max-w-[860px]">
          <Reveal><div className="flex items-center gap-3 mb-5 text-[8px] tracking-[0.5em] uppercase" style={{color:'var(--muted)'}}><span className="w-6 h-px bg-current block"/>Section 01</div></Reveal>
          <Reveal><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1,marginBottom:28}}>Certification &amp; Registration</h2></Reveal>
          <Reveal delay={0.1}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'#5a5045'}}>iHadGafle is a registered business operating under South African law. Our registration and compliance documentation is maintained and available upon formal request by relevant authorities or verified business partners.</p></Reveal>
          <Reveal delay={0.15}><p className="text-[12px] leading-[2.4] mb-8" style={{color:'#5a5045'}}><strong style={{color:'var(--ink)'}}>All garments sold under the iHadGafle brand are subject to the Consumer Protection Act 68 of 2008</strong>, and we adhere to all applicable consumer rights and disclosure obligations as set out therein.</p></Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-8 p-10 mb-8" style={{background:'var(--ink)',color:'var(--cream)'}}>
              {[
                {label:'Business Registration',val:'Registered — CIPC'},
                {label:'Tax Compliance',val:'SARS Compliant'},
                {label:'Trading Status',val:'Active'},
                {label:'Consumer Protection',val:'CPA 68 of 2008 — Compliant'},
              ].map(({label,val})=>(
                <div key={label}>
                  <div className="text-[8px] tracking-[0.35em] uppercase mb-2" style={{color:'var(--muted)'}}>{label}</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:18,color:'var(--sage)'}}>{val}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.25}><p className="text-[12px] leading-[2.4]" style={{color:'#5a5045'}}>For formal certification requests, contact us at <strong style={{color:'var(--ink)'}}>compliance@ihadgafle.co</strong>. We will respond within five business days.</p></Reveal>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section id="manufacturing" className="px-[52px] py-20" style={{borderBottom:'1px solid rgba(0,0,0,0.08)',background:'rgba(0,0,0,0.02)'}}>
        <div className="max-w-[860px]" style={{color:'var(--paper)'}}>
          <Reveal><div className="flex items-center gap-3 mb-5 text-[8px] tracking-[0.5em] uppercase" style={{color:'var(--muted)'}}><span className="w-6 h-px bg-current block"/>Section 02</div></Reveal>
          <Reveal><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1,marginBottom:28,color:'var(--cream)'}}>Manufacturing Properties &amp; Standards</h2></Reveal>
          <Reveal delay={0.1}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'var(--muted)'}}>iHadGafle sources and produces garments under conditions we would be comfortable disclosing publicly — because we are disclosing them publicly, here.</p></Reveal>
          <Reveal delay={0.15}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'var(--muted)'}}><strong style={{color:'var(--cream)'}}>Fabric:</strong> Our garments are produced using ring-spun cotton of medium to heavy weight (180g–260g/m²), selected for durability, comfort, and print retention. We do not use blended synthetic fabrics without explicit labelling.</p></Reveal>
          <Reveal delay={0.2}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'var(--muted)'}}><strong style={{color:'var(--cream)'}}>Production:</strong> All garments are screen-printed or direct-to-garment printed using water-based, OEKO-TEX® compliant inks where applicable. We do not use PVC-based plastisol printing.</p></Reveal>
          <Reveal delay={0.25}><p className="text-[12px] leading-[2.4] mb-6" style={{color:'var(--muted)'}}><strong style={{color:'var(--cream)'}}>Labour:</strong> We do not knowingly source from manufacturers that employ forced labour, child labour, or operate in violation of applicable minimum wage and labour hours legislation.</p></Reveal>
          <Reveal delay={0.3}>
            <ul className="pl-5 mb-6" style={{listStyleType:'disc'}}>
              {['Country of manufacture: Republic of South Africa','Fabric sourcing: Local-first; international where specified on label','Print method: Water-based screen print / DTG','Wash care: Detailed on garment label — cold wash recommended','Quality assurance: Each batch inspected prior to dispatch'].map(item=>(
                <li key={item} className="text-[12px] leading-loose mb-2" style={{color:'var(--muted)'}}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* GREEN */}
      <section id="green" className="px-[52px] py-20" style={{borderBottom:'1px solid rgba(0,0,0,0.08)',background:'var(--paper)'}}>
        <div className="max-w-[860px]" style={{color:'var(--ink)'}}>
          <Reveal><div className="flex items-center gap-3 mb-5 text-[8px] tracking-[0.5em] uppercase" style={{color:'#2e7d5e'}}><span className="w-6 h-px bg-current block"/>Section 03</div></Reveal>
          <Reveal><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1,marginBottom:28,color:'#2e7d5e'}}>Green Awareness &amp; Environmental Position</h2></Reveal>
          <Reveal delay={0.1}><p className="text-[12px] leading-[2.4] mb-8" style={{color:'#5a5045'}}>We are a small brand. We don't claim carbon neutrality — we don't have the verification infrastructure for that claim yet. What we do claim is intentionality: every decision we make considers environmental impact, and we are moving toward verifiable commitments.</p></Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-px mb-8" style={{background:'rgba(0,0,0,0.08)'}}>
              {[
                {title:'Limited Runs',    desc:"Three tees at a time. This isn't just aesthetic — it's waste reduction. Overproduction is one of fashion's worst habits. We don't do it."},
                {title:'Packaging',       desc:'All packaging is plastic-free. We use recycled mailer materials and avoid unnecessary packaging entirely where possible.'},
                {title:'Water-Based Inks',desc:'Our print processes use water-based inks that are lower in volatile organic compounds than conventional plastisol alternatives.'},
                {title:'Local Production',desc:'Sourcing and manufacturing locally reduces freight emissions and supports the domestic economy simultaneously.'},
              ].map(({title,desc})=>(
                <div key={title} className="p-7" style={{background:'var(--paper)'}}>
                  <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:10,color:'#2e7d5e'}}>{title}</h4>
                  <p className="text-[11px] leading-loose" style={{color:'#6a6055'}}>{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}><p className="text-[12px] leading-[2.4]" style={{color:'#5a5045'}}>We will publish a formal environmental impact statement when we have the verified data to do so responsibly. We will not publish greenwashing in its place.</p></Reveal>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="px-[52px] py-20" style={{borderBottom:'1px solid rgba(0,0,0,0.08)',background:'rgba(0,0,0,0.02)'}}>
        <div className="max-w-[860px]">
          <Reveal><div className="flex items-center gap-3 mb-5 text-[8px] tracking-[0.5em] uppercase" style={{color:'#1a4a6b'}}><span className="w-6 h-px bg-current block"/>Section 04</div></Reveal>
          <Reveal><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1,marginBottom:28,color:'#1a4a6b'}}>Community Empowerment</h2></Reveal>
          <Reveal delay={0.1}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'var(--muted)'}}>iHadGafle was built on the belief that ability is universal — and that belief extends to how we operate in our community. We are a Cape Town brand, and we take that identity seriously.</p></Reveal>
          <Reveal delay={0.15}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'var(--muted)'}}><strong style={{color:'var(--cream)'}}>We commit to the following:</strong></p></Reveal>
          <Reveal delay={0.2}>
            <ul className="pl-5 mb-6">
              {['Prioritising local suppliers, printers, and service providers in our procurement','Ensuring fair and timely payment to all suppliers and contractors — we do not exploit payment terms','Supporting youth skills development through periodic pro bono collaboration opportunities in design, photography, and digital marketing','Not participating in exploitative pricing or conditions in our supply chain','Being transparent with our community about our practices, limitations, and commitments'].map(item=>(
                <li key={item} className="text-[12px] leading-loose mb-3" style={{color:'var(--muted)'}}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}><p className="text-[12px] leading-[2.4]" style={{color:'var(--muted)'}}>If you are a young creative from Cape Town and would like to collaborate, reach out at <strong style={{color:'var(--cream)'}}>community@ihadgafle.co</strong>. We will respond to every genuine inquiry.</p></Reveal>
        </div>
      </section>

      {/* CHILD PROTECTION */}
      <section id="child" className="px-[52px] py-20" style={{borderBottom:'1px solid rgba(0,0,0,0.08)',background:'var(--paper)'}}>
        <div className="max-w-[860px]" style={{color:'var(--ink)'}}>
          <Reveal><div className="flex items-center gap-3 mb-5 text-[8px] tracking-[0.5em] uppercase" style={{color:'#c0392b'}}><span className="w-6 h-px bg-current block"/>Section 05</div></Reveal>
          <Reveal><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1,marginBottom:28,color:'#c0392b'}}>Child Exploitation Awareness Program</h2></Reveal>
          <Reveal delay={0.1}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'#5a5045'}}>iHadGafle has a zero-tolerance position on child exploitation in any form — within our supply chain, our operations, and our broader conduct as a business.</p></Reveal>
          <Reveal delay={0.12}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'#5a5045'}}><strong style={{color:'var(--ink)'}}>We do not employ individuals under the age of 18 in any capacity.</strong></p></Reveal>
          <Reveal delay={0.15}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'#5a5045'}}><strong style={{color:'var(--ink)'}}>We do not source from suppliers we know or suspect to employ child labour.</strong> Where we become aware of such practices, we will terminate that supplier relationship immediately and report the matter to the appropriate authorities.</p></Reveal>
          <Reveal delay={0.2}>
            <ul className="pl-5 mb-6">
              {['Conducting supplier due diligence with direct disclosure requirements regarding labour practices','Requiring written confirmation from new suppliers of compliance with the Basic Conditions of Employment Act and the Children\'s Act 38 of 2005','Maintaining an open reporting channel for any party to flag concerns about our supply chain'].map(item=>(
                <li key={item} className="text-[12px] leading-loose mb-3" style={{color:'#5a5045'}}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex items-start gap-6 px-11 py-8 mb-6" style={{background:'var(--ink)',borderLeft:'4px solid var(--gold)'}}>
              <p className="text-[12px] leading-loose" style={{color:'rgba(255,255,255,0.6)'}}>
                <strong style={{color:'var(--gold)'}}>If you have concerns about child exploitation linked to any of our suppliers or operations,</strong> please contact us immediately at <strong style={{color:'var(--cream)'}}>safeguarding@ihadgafle.co</strong> or use the crime reporting channels in Section 06.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}><p className="text-[12px] leading-[2.4]" style={{color:'#5a5045'}}>This is not performative compliance. Children's safety is not a marketing position — it is a non-negotiable operating standard.</p></Reveal>
        </div>
      </section>

      {/* REPORT CRIME */}
      <section id="report-crime" className="px-[52px] py-20" style={{background:'rgba(0,0,0,0.02)'}}>
        <div className="max-w-[860px]">
          <Reveal><div className="flex items-center gap-3 mb-5 text-[8px] tracking-[0.5em] uppercase" style={{color:'var(--muted)'}}><span className="w-6 h-px bg-current block"/>Section 06</div></Reveal>
          <Reveal><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1,marginBottom:28,color:'var(--cream)'}}>Report Crime</h2></Reveal>
          <Reveal delay={0.1}><p className="text-[12px] leading-[2.4] mb-4" style={{color:'var(--muted)'}}>iHadGafle is committed to operating within the law and to supporting those who report criminal activity. If you have witnessed or suspect criminal conduct linked to our operations, supply chain, or any individual associated with our brand, please report it.</p></Reveal>
          <Reveal delay={0.15}><p className="text-[12px] leading-[2.4] mb-8" style={{color:'var(--muted)'}}>You will not face retaliation for good-faith reporting. We take all disclosures seriously.</p></Reveal>

          {/* Direct report */}
          <Reveal delay={0.2}>
            <div className="p-12 mb-8" style={{background:'#c0392b'}}>
              <h3 style={{fontFamily:"'Abril Fatface',serif",fontSize:28,color:'#fff',marginBottom:16}}>Report to iHadGafle Directly</h3>
              <p className="text-[12px] leading-loose mb-5" style={{color:'rgba(255,255,255,0.8)'}}>For concerns related specifically to our business, supply chain, or staff conduct — report directly and confidentially. All reports are reviewed by a responsible individual, not an automated system.</p>
              <a href="mailto:report@ihadgafle.co"
                className="inline-block px-8 py-[14px] text-[9px] tracking-[0.25em] uppercase no-underline"
                style={{background:'#fff',color:'#c0392b',fontFamily:"'DM Mono',monospace"}}>
                report@ihadgafle.co
              </a>
            </div>
          </Reveal>

          {/* Hotlines */}
          <Reveal delay={0.25}>
            <p className="text-[12px] mb-4" style={{color:'var(--muted)'}}><strong style={{color:'var(--cream)'}}>National Crime Reporting Channels — South Africa:</strong></p>
            <div className="grid grid-cols-3 mb-6" style={{gap:1,background:'rgba(255,255,255,0.08)'}}>
              {[
                {name:'SAPS Crime Stop',     num:'08600 10111'},
                {name:'Childline SA',        num:'0800 055 555'},
                {name:'SAPS Emergency',      num:'10111'},
              ].map(({name,num})=>(
                <div key={name} className="px-5 py-6" style={{background:'rgba(0,0,0,0.2)'}}>
                  <div className="text-[9px] tracking-[0.2em] uppercase mb-2" style={{color:'rgba(255,255,255,0.5)'}}>{name}</div>
                  <div style={{fontFamily:"'Abril Fatface',serif",fontSize:22,letterSpacing:'0.04em'}}>{num}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}><p className="text-[12px] leading-[2.4]" style={{color:'var(--muted)'}}>All of the above channels are available 24 hours a day. If you are in immediate danger, call <strong style={{color:'var(--cream)'}}>10111</strong>.</p></Reveal>
        </div>
      </section>

      <Footer light />
    </>
  )
}
