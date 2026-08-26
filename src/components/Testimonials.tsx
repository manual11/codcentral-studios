import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      'Before Codcentral, I was spending 4 hours a day just responding to WhatsApp. Now the AI handles it, qualifies leads, and books calls automatically. I got those hours back — and my conversion rate tripled.',
    name: 'Amina K.',
    role: 'Founder, Service Business',
    modules: ['WhatsApp AI', 'Lead Qualification'],
  },
  {
    quote:
      "The social media system they built posts every day across five platforms, responds to comments, and generates content I'm actually proud of. I haven't touched it in three weeks and our following grew by 2,000.",
    name: 'David O.',
    role: 'CEO, E-Commerce Brand',
    modules: ['Social Media AI', 'Content System'],
  },
  {
    quote:
      'We raised more in six months than we had in the previous two years combined. The website, the donor emails, the social content — it all worked together in a way our old presence never did.',
    name: 'Grace M.',
    role: 'Director, NGO',
    modules: ['Digital Presence', 'Donor Automation'],
  },
]

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const goTo = (idx: number) =>
    setCurrent(Math.max(0, Math.min(idx, testimonials.length - 1)))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const delta = touchStartX.current - touchEndX.current
    if (delta > 50) goTo(current + 1)
    if (delta < -50) goTo(current - 1)
  }

  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: isMobile ? '80px 0 60px' : '120px 60px',
      }}
    >
      {/* Header */}
      <div
        className="reveal"
        style={{
          marginBottom: isMobile ? 40 : 72,
          padding: isMobile ? '0 24px' : '0',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.35)',
            marginBottom: 20,
          }}
        >
          Client Stories
        </div>
        <h2
          style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? 'clamp(36px,10vw,52px)' : 'clamp(40px,5vw,72px)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}
        >
          What{' '}
          <span
            style={{
              color: 'transparent',
              WebkitTextStroke: isMobile ? '1.5px var(--color-primary)' : '2px var(--color-primary)',
            }}
          >
            Clients
          </span>{' '}
          Say
        </h2>
      </div>

      {/* ── MOBILE CAROUSEL ── */}
      {isMobile ? (
        <div>
          {/* Slide area */}
          <div
            style={{ overflow: 'hidden' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                display: 'flex',
                transform: `translateX(calc(-${current * 100}% - ${current * 16}px))`,
                transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                gap: 16,
                paddingLeft: 24,
                paddingRight: 24,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    flex: '0 0 calc(100vw - 48px)',
                    background: 'var(--color-secondary)',
                    border: '0.5px solid rgba(0,0,0,0.08)',
                    borderRadius: 12,
                    padding: '36px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
                    opacity: i === current ? 1 : 0.45,
                    transform: i === current ? 'scale(1)' : 'scale(0.97)',
                    transition: 'opacity 0.4s, transform 0.4s',
                  }}
                >
                  {/* Large quote mark */}
                  <div
                    style={{
                      fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                      fontWeight: 900,
                      fontSize: 64,
                      lineHeight: 0.8,
                      color: 'rgba(0,0,0,0.06)',
                      marginBottom: 12,
                      letterSpacing: '-0.04em',
                      userSelect: 'none',
                    }}
                  >
                    "
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: 'rgba(0,0,0,0.7)',
                      fontWeight: 300,
                      flex: 1,
                      marginBottom: 32,
                    }}
                  >
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: 32,
                      height: 1,
                      background: 'rgba(0,0,0,0.12)',
                      marginBottom: 20,
                    }}
                  />

                  {/* Person */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span
                      style={{
                        fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                        fontWeight: 900,
                        fontSize: 15,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: 'rgba(0,0,0,0.4)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t.role}
                    </span>

                    {/* Module tags */}
                    <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                      {t.modules.map((m) => (
                        <span
                          key={m}
                          style={{
                            fontSize: 10,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            padding: '4px 9px',
                            border: '0.5px solid rgba(0,0,0,0.12)',
                            borderRadius: 2,
                            color: 'rgba(0,0,0,0.4)',
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '28px 24px 0',
            }}
          >
            {/* Prev / Next */}
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                style={{
                  width: 40,
                  height: 40,
                  border: '1px solid rgba(0,0,0,0.15)',
                  borderRadius: '50%',
                  background: 'transparent',
                  color: 'var(--color-primary)',
                  fontSize: 16,
                  cursor: current === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: current === 0 ? 0.25 : 1,
                  transition: 'opacity 0.2s',
                }}
              >
                ←
              </button>
              <button
                onClick={() => goTo(current + 1)}
                disabled={current === testimonials.length - 1}
                style={{
                  width: 40,
                  height: 40,
                  border: '1px solid rgba(0,0,0,0.15)',
                  borderRadius: '50%',
                  background: 'transparent',
                  color: 'var(--color-primary)',
                  fontSize: 16,
                  cursor: current === testimonials.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: current === testimonials.length - 1 ? 0.25 : 1,
                  transition: 'opacity 0.2s',
                }}
              >
                →
              </button>
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 24 : 6,
                    height: 6,
                    borderRadius: i === current ? 3 : '50%',
                    background: i === current ? 'var(--color-primary)' : 'rgba(0,0,0,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span
              style={{
                fontSize: 11,
                color: 'rgba(0,0,0,0.3)',
                letterSpacing: '0.1em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      ) : (
        /* ── DESKTOP GRID ── */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 2,
            background: 'rgba(0,0,0,0.08)',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testi-card reveal d${i + 1}`}
              style={{
                background: 'var(--color-secondary)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900,
                  fontSize: 80,
                  lineHeight: 0.8,
                  color: 'rgba(0,0,0,0.07)',
                  marginBottom: 16,
                  letterSpacing: '-0.04em',
                  userSelect: 'none',
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: 'rgba(0,0,0,0.65)',
                  fontWeight: 300,
                  flex: 1,
                  marginBottom: 40,
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: 'rgba(0,0,0,0.15)',
                  marginBottom: 28,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{
                    fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                    fontWeight: 900,
                    fontSize: 16,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: 'rgba(0,0,0,0.4)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t.role}
                </span>
                <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
                  {t.modules.map((m) => (
                    <span
                      key={m}
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '5px 10px',
                        border: '0.5px solid rgba(0,0,0,0.15)',
                        borderRadius: 2,
                        color: 'rgba(0,0,0,0.4)',
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
