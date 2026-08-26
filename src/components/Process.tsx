const steps = [
  {
    index: '01',
    name: 'Discovery Call',
    desc: 'A focused 30-minute session to understand your business, your biggest constraints, and where automation or AI will have the highest impact.',
  },
  {
    index: '02',
    name: 'System Design',
    desc: 'We map your workflows, identify automation opportunities, and design a bespoke digital leverage system tailored to your goals and budget.',
  },
  {
    index: '03',
    name: 'Build & Deploy',
    desc: 'We build and deploy your system — AI agents, automation flows, digital infrastructure — with a typical turnaround of 2–4 weeks.',
  },
  {
    index: '04',
    name: 'Train & Hand Over',
    desc: 'We train you and your team on the new system, document every workflow, and ensure you have full ownership and understanding of what we built.',
  },
  {
    index: '05',
    name: 'Maintain & Optimise',
    desc: 'Monthly maintenance, performance monitoring, and continuous optimisation to ensure your systems keep improving as your business grows.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: 'var(--color-primary)',
        padding: '120px 60px',
      }}
    >
      <div style={{ marginBottom: 80 }} className="reveal">
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 20,
          }}
        >
          How It Works
        </div>
        <h2
          style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(40px,5vw,72px)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}
        >
          Our Process
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((step, i) => (
          <div
            key={step.index}
            className={`step-row reveal d${Math.min(i + 1, 5)}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr',
              gap: 40,
              alignItems: 'center',
              padding: '40px 0',
              borderBottom: '0.5px solid rgba(255,255,255,0.08)',
            }}
          >
            <span
              style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 48,
                color: 'rgba(255,255,255,0.1)',
                letterSpacing: '-0.04em',
                transition: 'color 0.3s',
              }}
            >
              {step.index}
            </span>
            <span
              style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 22,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
              }}
            >
              {step.name}
            </span>
            <span
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
              }}
            >
              {step.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
