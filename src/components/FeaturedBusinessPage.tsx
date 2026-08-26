import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

const transformationSteps = [
  { num: '01', title: 'Diagnosis', desc: 'Codcentral approached DrFarm and mapped every digital gap — no website, no Google presence, no online leads.' },
  { num: '02', title: 'Branding', desc: 'Professional brand identity built to position DrFarm as the go-to industrial fabricator in the region.' },
  { num: '03', title: 'Google Business Profile', desc: 'Verified GBP listing live on Google Maps — customers in Nairobi can now find DrFarm the moment they search.' },
  { num: '04', title: 'Website', desc: 'A fast, mobile-first website showcasing their full machine catalogue and driving enquiries directly to the team.', link: 'https://drfarm.co.ke/' },
]

const machines = [
  'Animal Feed Mixers',
  'Posho Mills',
  'Bar Soap Machines',
  'Industrial Fabrications',
  'Custom Engineering Works',
]

export default function FeaturedBusinessPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main id="featured-business-page" tabIndex={-1}>
      <Nav />

      {/* ── HERO ── */}
      <section
        style={{
          background: 'var(--color-primary)',
          position: 'relative',
          overflow: 'hidden',
          padding: '160px 60px 100px',
          borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Orbs */}
        <div style={{ position: 'absolute', top: '-5%', right: '0%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(138,43,226,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,28,46,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="noise-bg" style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }} />

        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(138,43,226,0.7) 40%, var(--color-tertiary) 65%, transparent)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 36 }}>
            <a href="/biashara-mjini" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-secondary)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.3)')}
            >Biashara Mjini</a>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>Featured Business</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 72, alignItems: 'center' }} className="fb-hero-grid">

            {/* Left: text */}
            <div>
              {/* Week badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(230,28,46,0.1)', border: '0.5px solid rgba(230,28,46,0.4)', borderRadius: 100, padding: '6px 16px', marginBottom: 32 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-tertiary)', boxShadow: '0 0 8px var(--color-tertiary)', display: 'inline-block', animation: 'livePulse 2s ease-in-out infinite', flexShrink: 0 }} />
                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
                  Featured Business · This Week
                </span>
              </div>

              <h1 style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(36px,5vw,76px)', lineHeight: 0.92, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 24 }}>
                DrFarm<br />
                <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Fabricators</span><br />
                <span style={{ color: 'var(--color-tertiary)', fontSize: '0.55em', letterSpacing: '-0.01em' }}>& Engineering Works</span>
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 7 4.25a1.75 1.75 0 0 1 0 3.5z" fill="var(--color-tertiary)" />
                </svg>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                  Kariobangi Light Industries, Nairobi
                </span>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: 500, marginBottom: 36 }}>
                DrFarm Fabricators & Engineering Works builds industrial machines — from animal feed mixers and posho mills to bar soap machines and custom fabrications. When Codcentral approached them, they had zero digital presence. They took action immediately and are now live online.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a
                  href="https://drfarm.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '13px 32px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 0 }}
                >
                  <span>Visit DrFarm Website</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  style={{ padding: '13px 28px', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)', transition: 'color 0.2s, border-color 0.2s', borderRadius: 0 }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-secondary)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.4)' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)' }}
                >
                  Get the Same for My Business →
                </a>
              </div>
            </div>

            {/* Right: image */}
            <div style={{ position: 'relative' }}>
              {/* Glow behind image */}
              <div style={{ position: 'absolute', inset: -20, background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', border: '0.5px solid rgba(138,43,226,0.3)', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', display: 'inline-block' }}>
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--color-tertiary), rgba(138,43,226,0.8), transparent)', zIndex: 2 }} />
                <img
                  src="/mjini entreprenuer winner 1.webp"
                  alt="DrFarm Fabricators & Engineering Works — Kariobangi Light Industries"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
                {/* Winner stamp overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px', background: 'linear-gradient(to top, rgba(26,5,51,0.95) 0%, transparent 100%)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, background: 'var(--color-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                        <path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Mjini Entrepreneur</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-secondary)', letterSpacing: '0.04em' }}>Winner of the Week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT THE BUSINESS ── */}
      <section style={{ background: 'var(--color-primary)', padding: '80px 60px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 72 }} className="fb-two-col">

          {/* What they build */}
          <div className="reveal">
            <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>What They Build</div>
            <h2 style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 28 }}>
              Industrial Machines<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>Made in Kenya</span>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>
              DrFarm designs and fabricates machines for small and medium-scale enterprises across Kenya. Every machine is built locally in Kariobangi Light Industries — one of Nairobi's most active industrial hubs — and delivered ready to run.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {machines.map((m) => (
                <li key={m} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 14, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-tertiary)', flexShrink: 0, boxShadow: '0 0 6px rgba(230,28,46,0.5)' }} />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Why they won */}
          <div className="reveal d2">
            <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Why They Were Chosen</div>
            <h2 style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 28 }}>
              They Took<br />
              <span style={{ color: 'var(--color-tertiary)' }}>Action</span>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>
              Every week, Codcentral walks into businesses across Nairobi and diagnoses their digital gaps. Most business owners say they will think about it. A few take action immediately.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>
              DrFarm is this week's winner because when Codcentral approached them at their workshop in Kariobangi, they understood the stakes immediately. Digital trading is not coming — it is already here. The businesses that move now will be the ones still standing in five years.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              DrFarm did not wait. They are now online, on Google Maps, and reaching customers they could never have reached from their workshop floor alone.
            </p>
          </div>

        </div>
      </section>

      {/* ── TRANSFORMATION TIMELINE ── */}
      <section style={{ background: 'rgba(255,255,255,0.015)', padding: '80px 60px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>The Transformation</div>
            <h2 style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(28px,3.5vw,52px)', lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              From Zero Presence<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--color-secondary)' }}>to Fully Online</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2, background: 'rgba(255,255,255,0.04)' }}>
            {transformationSteps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal d${i + 1}`}
                style={{ background: 'var(--color-primary)', padding: '36px 28px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: i === transformationSteps.length - 1 ? 'var(--color-tertiary)' : 'rgba(138,43,226,0.5)' }} />
                {/* Ghost num */}
                <div style={{ position: 'absolute', bottom: -10, right: 12, fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 80, color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{step.num}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-tertiary)', fontWeight: 700 }}>{step.num}</div>
                <div style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 18, textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'var(--color-secondary)', lineHeight: 1.1 }}>{step.title}</div>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', flex: 1 }}>{step.desc}</p>
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-tertiary)', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                  >
                    Visit Site →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE PROGRAMME ── */}
      <section style={{ background: 'var(--color-primary)', padding: '80px 60px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,460px)', gap: 72, alignItems: 'center' }} className="fb-two-col">

            <div className="reveal">
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>The Mjini Entrepreneur Programme</div>
              <h2 style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(28px,3.5vw,52px)', lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 28 }}>
                We Come to You.<br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--color-secondary)' }}>We Build with You.</span>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
                The Codcentral team walks into businesses across Nairobi every week — workshops, salons, restaurants, retail shops, clinics — and runs a free on-the-spot digital diagnosis. No form. No waiting list. No obligation.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
                The business owner who takes action fastest becomes the featured Mjini Entrepreneur of the week — a public showcase of their transformation, with a profile on this page, a website link, and a case study that future customers will read before they decide to buy.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                Every small step counts. You do not need to be ready for everything at once. You just need to be ready to start.
              </p>
            </div>

            {/* CTA card */}
            <div className="reveal d2" style={{ background: 'rgba(138,43,226,0.06)', border: '0.5px solid rgba(138,43,226,0.2)', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(22px,2.5vw,34px)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0 }}>
                Is Your Business<br />
                <span style={{ color: 'var(--color-tertiary)' }}>Next?</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)' }}>
                If Codcentral has not reached your business yet, do not wait. Book a free diagnosis call now and take the same first step DrFarm took this week.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a
                  href="/contact"
                  className="btn-primary"
                  style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '14px 28px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, borderRadius: 0 }}
                >
                  <span>Book a Free Diagnosis</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/biashara-mjini"
                  style={{ padding: '14px 28px', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.1)', textAlign: 'center', transition: 'color 0.2s, border-color 0.2s', borderRadius: 0 }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-secondary)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.3)' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  Learn About Biashara Mjini →
                </a>
              </div>

              <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', gap: 24 }}>
                {[{ val: 'Free', label: 'Diagnosis' }, { val: '100%', label: 'Digital' }, { val: '1 Step', label: 'At a time' }].map((s) => (
                  <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--color-secondary)', lineHeight: 1 }}>{s.val}</span>
                    <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
