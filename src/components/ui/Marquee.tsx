interface MarqueeProps {
  items: string[]
  reverse?: boolean
  accent?: string
}

export default function Marquee({ items, reverse = false, accent = '◆' }: MarqueeProps) {
  return (
    <div className="overflow-hidden py-[18px]" style={{ background: 'var(--char)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className={`flex w-max ${reverse ? 'marquee-track-rev' : 'marquee-track'}`}>
        {items.map((item, i) => (
          <span key={i}
            className="px-10 whitespace-nowrap"
            style={{
              fontFamily: "'Abril Fatface', serif",
              fontSize: 15,
              letterSpacing: '0.15em',
              color: item === '◆' || item === '◇' ? 'var(--gold)' : 'rgba(255,255,255,0.13)',
            }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
