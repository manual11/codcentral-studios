import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assetUrl'

const journey = [
  {
    num: '01',
    label: 'The Starting Point',
    text: 'We started as a digital marketing agency, running paid campaigns for Nairobi businesses. The model worked — until it didn\'t. Generic ads, broad targeting, the same creatives week after week. Clicks came in but they didn\'t convert. That was the traditional playbook in 2026.',
  },
  {
    num: '02',
    label: 'The Breaking Point',
    text: 'Working with City Choice Properties Limited in Kikuyu exposed the core problem. We couldn\'t scale their business running the same generic ads in rotation. Unintentional clicks piled up, CPM and CPA rose sharply, ROAS dropped. The system was broken and we knew it.',
  },
  {
    num: '03',
    label: 'The Research Phase',
    text: 'We went back. Researched deeply. Worked alongside stakeholders in the AI field and brought together some of the best minds to rebuild the way creative advertising works — from the ground up. The result was the Creative Agentic Lead system.',
  },
  {
    num: '04',
    label: 'The Proof',
    text: 'We piloted on Pawslova — a premium pet e-commerce brand. Then Uniform Kingdom. Both proved the system: high ROAS, lower CPA, better CTR. The problems that ended the agency model became the exact problems our AI system solves.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: '120px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
        fontWeight: 900, fontSize: 200,
        color: 'rgba(0,0,0,0.025)',
        textTransform: 'uppercase', whiteSpace: 'nowrap',
        letterSpacing: '-0.05em', pointerEvents: 'none', userSelect: 'none',
      }}>ORIGIN</div>

      {/* Header */}
      <div className="reveal about-hero-panel" style={{ marginBottom: 72, position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.35)', marginBottom: 20,
        }}>
          About Codcentral
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <h2 style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900, fontSize: 'clamp(40px,5vw,72px)',
            lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase',
          }}>
            We Build{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Leverage</span>
            <br />Not Websites
          </h2>
          <p style={{
            fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,0.55)', fontWeight: 300,
          }}>
            Codcentral Studios is an AI marketing systems company based in Nairobi. We
            exist because we lived the problem — and built the solution that most agencies
            never thought to find.
          </p>
        </div>
      </div>

      {/* Journey timeline */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: 72 }}>
        {journey.map((step, i) => (
          <div
            key={i}
            className={`reveal d${i + 1} about-step-card`}
            style={{
              display: 'grid',
              gridTemplateColumns: '72px 1fr',
              gap: 32,
              padding: '36px 0',
              borderBottom: '0.5px solid rgba(0,0,0,0.08)',
              transition: 'padding 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.paddingLeft = '12px')}
            onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0px')}
          >
            {/* Number */}
            <div style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900, fontSize: 40,
              color: 'rgba(0,0,0,0.08)', letterSpacing: '-0.04em', lineHeight: 1,
              paddingTop: 4,
            }}>{step.num}</div>

            {/* Content */}
            <div>
              <div style={{
                fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.35)', marginBottom: 10,
              }}>{step.label}</div>
              <p style={{
                fontSize: 14, lineHeight: 1.85, color: 'rgba(0,0,0,0.6)', fontWeight: 300,
              }}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row: stats + team + case study CTA */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2,
        background: 'rgba(0,0,0,0.08)', position: 'relative', zIndex: 1,
      }}>
        {/* Stat 1 */}
        <div className="reveal d1 about-card-3d" style={{ background: 'var(--color-secondary)', padding: '36px 32px' }}>
          <div style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900, fontSize: 64, lineHeight: 1,
            letterSpacing: '-0.04em', color: 'var(--color-primary)', marginBottom: 6,
          }}>2025</div>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Founded · Nairobi
          </div>
        </div>

        {/* Stat 2 */}
        <div className="reveal d2 about-card-3d" style={{ background: 'var(--color-secondary)', padding: '36px 32px' }}>
          <div style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900, fontSize: 64, lineHeight: 1,
            letterSpacing: '-0.04em', color: 'var(--color-primary)', marginBottom: 6,
          }}>50+</div>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            AI Systems Deployed
          </div>
        </div>

        {/* Case study CTA */}
        <div
          className="reveal d3 about-card-3d"
          style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>
              Proof Of System
            </div>
            <div style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900, fontSize: 20, textTransform: 'uppercase',
              letterSpacing: '-0.02em', marginBottom: 10, lineHeight: 1.1,
            }}>
              Pawslova: $4K → $30K in One Month
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 24 }}>
              Our first pilot. The Creative Agentic Lead system solved high CPA, low CTR, and poor ROAS in 30 days.
            </p>
          </div>
          <Link
            to="/case-study"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--color-secondary)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: 4, width: 'fit-content', transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-secondary)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
          >
            See Case Study →
          </Link>
        </div>

        {/* Team card */}
        <a
          href="/codcentral team.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal d4 about-card-3d"
          style={{
            background: 'var(--color-primary)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            textDecoration: 'none',
            position: 'relative',
          }}
        >
          {/* Image fills top portion */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative', minHeight: 140 }}>
            <img
              src={assetUrl('/codcentral team.jpg')}
              alt="Codcentral team"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
              onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
            />
            {/* Overlay gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,5,51,0.85) 0%, transparent 60%)', pointerEvents: 'none' }} />
          </div>

          {/* Label strip */}
          <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 5 }}>
                The People
              </div>
              <div style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900, fontSize: 16, textTransform: 'uppercase',
                letterSpacing: '-0.02em', color: 'var(--color-secondary)', lineHeight: 1.1,
              }}>
                Meet the Team
              </div>
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
              <path d="M3 15L15 3M15 3H6M15 3v9" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </a>
      </div>

      {/* Values row */}
      <div className="reveal" style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginTop: 40, position: 'relative', zIndex: 1 }}>
        {[
          { name: 'AI-First', desc: 'Every system we build has AI at its core' },
          { name: 'Results-Led', desc: 'We measure success in revenue and time' },
          { name: 'African', desc: 'Built for this market, built for the world' },
        ].map((v) => (
          <div key={v.name} className="about-value-chip" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900, fontSize: 16, textTransform: 'uppercase',
            }}>{v.name}</span>
            <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.05em' }}>
              {v.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
