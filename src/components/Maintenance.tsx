import { useEffect, useState } from 'react'

const items = [
  {
    name: 'System Updates',
    desc: 'Regular updates to AI models, automation flows, and integrations to keep your systems performing at peak.',
    sub: 'Monthly cadence',
  },
  {
    name: 'Performance Monitoring',
    desc: 'Continuous monitoring of lead volumes, conversion rates, and automation health with weekly reporting.',
    sub: 'Real-time dashboards',
  },
  {
    name: 'Rapid Response',
    desc: 'Any issues with your AI agents or automation flows are resolved within 24 hours of detection.',
    sub: '24h SLA guarantee',
  },
  {
    name: 'AI Retraining',
    desc: 'As your business evolves, we retrain your AI agents to reflect new products, pricing, and processes.',
    sub: 'Quarterly retraining',
  },
  {
    name: 'Growth Optimisation',
    desc: 'Monthly strategy sessions to identify new automation opportunities and expand your leverage stack.',
    sub: 'Monthly strategy call',
  },
  {
    name: 'Data & Security',
    desc: 'Regular audits of data handling practices and security configurations across all connected systems.',
    sub: 'Quarterly security review',
  },
]

export default function Maintenance() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section
      id="maintenance"
      style={{
        background: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: isMobile ? '80px 24px' : '120px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: isMobile ? 80 : 200,
          color: 'rgba(0,0,0,0.03)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.05em',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        MAINTAIN
      </div>

      {/* Header */}
      <div className="reveal" style={{ position: 'relative', zIndex: 1, marginBottom: isMobile ? 48 : 60 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.35)',
            marginBottom: 20,
          }}
        >
          Ongoing Partnership
        </div>
        <h2
          style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? 'clamp(32px,9vw,48px)' : 'clamp(40px,5vw,72px)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}
        >
          We Don't Just Build.{isMobile ? <br /> : ' '}We Maintain.
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
          gap: 2,
          background: 'rgba(0,0,0,0.08)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {items.map((item, i) => (
          <MaintItem key={item.name} item={item} delay={i} />
        ))}
      </div>
    </section>
  )
}

function MaintItem({ item, delay }: { item: typeof items[0]; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`reveal d${Math.min(delay + 1, 5)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--color-primary)' : 'var(--color-secondary)',
        color: hovered ? 'var(--color-secondary)' : 'var(--color-primary)',
        padding: '36px 40px',
        transition: 'background 0.3s, color 0.3s',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      {/* Index line */}
      <div
        style={{
          fontSize: 10,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)',
          marginBottom: 20,
          transition: 'color 0.3s',
        }}
      >
        {String(delay + 1).padStart(2, '0')}
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: 18,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          marginBottom: 12,
        }}
      >
        {item.name}
      </div>

      {/* Divider */}
      <div
        style={{
          width: hovered ? 48 : 32,
          height: 1,
          background: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)',
          marginBottom: 16,
          transition: 'width 0.3s, background 0.3s',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: 13,
          color: hovered ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)',
          lineHeight: 1.7,
          flex: 1,
          transition: 'color 0.3s',
          marginBottom: 20,
        }}
      >
        {item.desc}
      </p>

      {/* Sub tag */}
      <div
        style={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '5px 10px',
          border: `0.5px solid ${hovered ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)'}`,
          borderRadius: 2,
          color: hovered ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)',
          transition: 'border-color 0.3s, color 0.3s',
        }}
      >
        {item.sub}
      </div>
    </div>
  )
}
