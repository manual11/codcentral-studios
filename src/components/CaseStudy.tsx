import { useEffect, useState } from 'react'

const actions = [
  {
    title: 'Audience Microgroup Segmentation',
    desc: "Split Pawslova's audience into 9 microgroups — dog owners, cat owners, gift buyers, first-time pet parents, and 5 others — each receiving completely different ad creative, copy, and offers.",
  },
  {
    title: 'Reactive Creative Engine',
    desc: 'Deployed the Codcentral Creative Lead Agent to produce trend-reactive content within 30 minutes — hooking viral pet moments, seasonal events, and cultural trends to Pawslova product drops.',
  },
  {
    title: 'Abandoned Cart Recovery Automation',
    desc: 'Built a 3-step automated recovery sequence via email and WhatsApp — recovering 28% of abandoned carts with personalised pet-name messaging and time-limited discount nudges.',
  },
  {
    title: 'Bundle Architecture & Upsell Flows',
    desc: 'Redesigned the product page with strategic bundles and post-purchase upsells — increasing average order value from $18 to $47 per transaction.',
  },
]

const metrics = [
  { num: '$30,000', label: 'Total revenue in Month 1', sub: '↑ from $4,000 baseline', large: true },
  { num: '7.5×', label: 'Revenue multiple', sub: '' },
  { num: '28%', label: 'Cart recovery rate', sub: '' },
  { num: '$47', label: 'Avg. order value', sub: '' },
  { num: '6.2×', label: 'ROAS on paid ads', sub: '' },
]

export default function CaseStudy() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section
      id="case-study"
      style={{
        background: 'var(--color-primary)',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        padding: isMobile ? '80px 24px' : '120px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,0,26,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Header ── */}
      <div className="reveal" style={{ marginBottom: isMobile ? 48 : 72 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 20,
        }}>
          <span style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-tertiary)',
          }}>
            Case Study · 01 of 01
          </span>
          <span style={{ width: 24, height: 1, background: 'rgba(255,100,60,0.4)', display: 'inline-block' }} />
          <span style={{
            fontSize: 10,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
          }}>
            E-Commerce · AI Automation · Growth
          </span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 24,
        }}>
          {/* Brand name */}
          <div>
            <h2 style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? 'clamp(52px,14vw,72px)' : 'clamp(64px,7vw,100px)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
            }}>
              Pawslova
            </h2>
            <h2 style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? 'clamp(52px,14vw,72px)' : 'clamp(64px,7vw,100px)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'transparent',
              WebkitTextStroke: '2px var(--color-tertiary)',
            }}>
              E-Commerce
            </h2>
          </div>

          {/* Hero metric */}
          <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
            <div style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? 72 : 96,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'rgba(255,100,60,0.9)',
            }}>
              $30K
            </div>
            <div style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginTop: 8,
            }}>
              Revenue Generated
            </div>
            <div style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(197,0,26,0.7)',
            }}>
              In a single month
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: '0.5px',
        background: 'rgba(255,255,255,0.07)',
        marginBottom: isMobile ? 48 : 72,
      }} />

      {/* ── Body: two columns ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 56 : 80,
        alignItems: 'start',
      }}>

        {/* LEFT: challenge + what we did */}
        <div>
          {/* Challenge */}
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,100,60,0.7)',
              marginBottom: 20,
            }}>
              Challenge & Context
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '0.5px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              padding: '28px 32px',
            }}>
              <p style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.6)',
                fontWeight: 300,
              }}>
                Pawslova — a premium pet lifestyle e-commerce brand — had a strong product
                line and a loyal micro-audience but had never broken past{' '}
                <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>$4,000/month</strong>{' '}
                in revenue. Their ad creatives were generic, targeting was broad, and their
                store had a high cart abandonment rate with no recovery system in place.
              </p>
            </div>
          </div>

          {/* What Codcentral Did */}
          <div className="reveal">
            <div style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,100,60,0.7)',
              marginBottom: 24,
            }}>
              What Codcentral Did
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {actions.map((action, i) => (
                <ActionRow key={i} action={action} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: results + quote */}
        <div>
          <div className="reveal">
            <div style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,100,60,0.7)',
              marginBottom: 20,
            }}>
              Results — 30 Days
            </div>

            {/* Big metric */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '0.5px solid rgba(255,255,255,0.1)',
              borderLeft: '2px solid var(--color-tertiary)',
              borderRadius: 8,
              padding: '28px 32px',
              marginBottom: 2,
            }}>
              <div style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 56,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--color-tertiary)',
                marginBottom: 8,
              }}>
                $30,000
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                Total revenue in Month 1
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,100,60,0.6)', marginTop: 4 }}>
                ↑ from $4,000 baseline
              </div>
            </div>

            {/* 2×2 metric grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 2,
              marginBottom: 28,
            }}>
              {metrics.slice(1).map((m, i) => (
                <div
                  key={i}
                  className={`reveal d${i + 1}`}
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '0.5px solid rgba(255,255,255,0.07)',
                    borderRadius: 4,
                    padding: '20px 24px',
                  }}
                >
                  <div style={{
                    fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                    fontWeight: 900,
                    fontSize: 36,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    color: 'var(--color-secondary)',
                    marginBottom: 6,
                  }}>
                    {m.num}
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

              {/* Quote */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '0.5px solid rgba(255,255,255,0.07)',
              borderRadius: 8,
              padding: '28px 32px',
            }}>
              <p style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 300,
                fontStyle: 'italic',
                marginBottom: 20,
              }}>
                "We'd been stuck under $5K for over a year. Codcentral came in, rebuilt
                everything — ads, store, automations — and we crossed $30K in our first
                month together. I genuinely didn't think that was possible."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <img
                  src="/Joy Caters-creative director pawslova.jpg"
                  alt="Joy Caters"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid rgba(197,0,26,0.4)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: 'var(--color-secondary)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  }}>
                    Joy Caters
                  </div>
                  <div style={{
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(197,0,26,0.75)',
                    marginTop: 2,
                  }}>
                    Creative Director · Pawslova
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div style={{
        marginTop: isMobile ? 56 : 72,
        paddingTop: 32,
        borderTop: '0.5px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.jpeg" alt="Codcentral Studios" style={{ width: 56, height: 56, borderRadius: 4, objectFit: 'cover', display: 'block' }} />
          <span style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900, fontSize: 13,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
          }}>
            Codcentral Studios
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['E-Commerce', 'AI Automation', 'Growth'].map((tag) => (
            <span key={tag} style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '6px 12px',
              border: '0.5px solid rgba(255,255,255,0.15)',
              borderRadius: 2,
              color: 'rgba(255,255,255,0.35)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActionRow({ action, index }: { action: typeof actions[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`reveal d${Math.min(index + 1, 4)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr',
        gap: 16,
        padding: '20px 0',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        transition: 'padding 0.3s',
        paddingLeft: hovered ? 8 : 0,
        cursor: 'default',
      }}
    >
      {/* Index */}
      <div style={{
        fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
        fontWeight: 900,
        fontSize: 13,
        color: hovered ? 'var(--color-tertiary)' : 'rgba(255,255,255,0.15)',
        paddingTop: 3,
        transition: 'color 0.3s',
        letterSpacing: '-0.02em',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Text */}
      <div>
        <div style={{
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: 15,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          color: 'var(--color-secondary)',
          marginBottom: 6,
        }}>
          {action.title}
        </div>
        <p style={{
          fontSize: 13,
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.45)',
          fontWeight: 300,
        }}>
          {action.desc}
        </p>
      </div>
    </div>
  )
}
