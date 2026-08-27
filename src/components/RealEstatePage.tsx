import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { assetUrl } from '../lib/assetUrl'

// ── Accent colour for this page ──
const RE = '#c5001a'
const RE_DIM = 'rgba(197,0,26,0.16)'

export default function RealEstatePage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useScrollReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    window.scrollTo(0, 0)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <main id="real-estate-page" tabIndex={-1} style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', fontFamily: "'DM Sans',sans-serif", overflowX: 'hidden' }}>
      <RENav scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} isMobile={isMobile} />
      <REHero isMobile={isMobile} />
      <RETicker />
      <REProblem isMobile={isMobile} />
      <RESystem isMobile={isMobile} />
      <RECaseStudy isMobile={isMobile} />
      <RETestimonial />
      <REPricing isMobile={isMobile} />
      <REFAQ isMobile={isMobile} />
      <RECTA isMobile={isMobile} />
      <REFooter />
    </main>
  )
}

// ── NAV ──────────────────────────────────────────────────────────────────────
function RENav({ scrolled, menuOpen, setMenuOpen, isMobile }: {
  scrolled: boolean; menuOpen: boolean; setMenuOpen: (v: boolean) => void; isMobile: boolean
}) {
  const links = [
    { label: 'The Problem', href: '#re-problem' },
    { label: 'Our System', href: '#re-system' },
    { label: 'Results', href: '#re-case' },
    { label: 'Pricing', href: '#re-pricing' },
    { label: 'FAQ', href: '#re-faq' },
  ]
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? (isMobile ? '14px 24px' : '14px 60px') : (isMobile ? '20px 24px' : '26px 60px'),
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.4s',
        borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={assetUrl('/logo.jpeg')} alt="Codcentral Studios" style={{ width: 60, height: 60, borderRadius: 5, objectFit: 'cover', display: 'block' }} />
          <span style={{
            fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
            fontSize: 12, color: 'var(--color-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>Codcentral</span>
        </Link>
        {!isMobile && (
          <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} style={{
                  color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                  fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        )}
        {!isMobile ? (
          <a href="#re-cta" style={{
            background: RE, color: 'var(--color-primary)', padding: '9px 22px', borderRadius: 4,
            fontSize: 11, fontWeight: 700, textDecoration: 'none',
            letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >Book Free Audit</a>
        ) : (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, width: 40, height: 40,
            alignItems: 'center', justifyContent: 'center', padding: 4,
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 1.5, background: 'var(--color-secondary)', borderRadius: 2,
                transition: 'transform 0.3s, opacity 0.25s',
                transform: menuOpen ? (i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none') : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </nav>
      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', inset: 0, background: 'var(--color-primary)', zIndex: 1050,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.35s',
      }}>
        {links.map((l, i) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
            fontSize: 'clamp(32px,10vw,52px)', letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: 'var(--color-secondary)', textDecoration: 'none', padding: '12px 24px',
            opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.4s ${0.05 + i * 0.05}s, transform 0.4s ${0.05 + i * 0.05}s`,
          }}>{l.label}</a>
        ))}
        <a href="#re-cta" onClick={() => setMenuOpen(false)} style={{
          marginTop: 24, background: RE, color: 'var(--color-primary)', padding: '14px 36px',
          borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: 'none',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.4s 0.3s, transform 0.4s 0.3s',
        }}>Book Free Audit →</a>
      </div>
    </>
  )
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function REHero({ isMobile }: { isMobile: boolean }) {
  const stats = [
    { num: '50×', label: 'Ad Variants' },
    { num: '30m', label: 'Trend Response' },
    { num: '6.2×', label: 'Avg ROAS' },
    { num: '4min', label: 'Lead Response' },
  ]
  const pains = [
    { title: 'Posting and Getting Nothing Back', desc: 'You share listings on Facebook and WhatsApp groups but serious buyers rarely enquire. You\'re broadcasting, not targeting.' },
    { title: 'Chasing Cold Leads for Months', desc: 'Most enquiries come from window shoppers. You spend hours on calls that go nowhere, losing time you could spend closing.' },
    { title: 'Listings Sitting Too Long', desc: 'Properties sit for weeks with no serious viewings. Landlords and developers are pushing you for results you can\'t guarantee.' },
  ]
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: isMobile ? '120px 24px 80px' : '140px 60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Noise */}
      <div className="noise-bg" style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }} />
      {/* Lime glow */}
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: `radial-gradient(circle, ${RE_DIM} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: RE, marginBottom: 28,
          opacity: 0, animation: 'fadeUp 0.8s 0.2s forwards',
        }}>
          <span style={{ width: 24, height: 1, background: RE, display: 'inline-block' }} />
          For Nairobi Real Estate Agents · Residential & Commercial
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: isMobile ? 'clamp(56px,14vw,80px)' : 'clamp(72px,7vw,112px)',
          lineHeight: 0.88, letterSpacing: '-0.03em', textTransform: 'uppercase',
          marginBottom: 32,
        }}>
          {[
            { t: 'More Listings.', a: false },
            { t: 'More Closings.', a: true },
          ].map((l, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{
                display: 'inline-block',
                color: l.a ? RE : 'var(--color-secondary)',
                animation: `slideUp 0.9s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s both`,
              }}>{l.t}</span>
            </span>
          ))}
        </h1>

        <p style={{
          maxWidth: 520, fontSize: 15, lineHeight: 1.75,
          color: 'rgba(255,255,255,0.5)', fontWeight: 300,
          opacity: 0, animation: 'fadeUp 0.8s 0.65s forwards', marginBottom: 40,
        }}>
          CodCentral deploys AI marketing systems built for Nairobi property agents —
          generating qualified buyer and tenant leads on autopilot while you focus on closing deals.
        </p>

        {/* CTA */}
        <div style={{
          display: 'flex', gap: 20, flexWrap: 'wrap',
          opacity: 0, animation: 'fadeUp 0.8s 0.85s forwards', marginBottom: 64,
        }}>
          <a href="#re-pricing" style={{
            background: RE, color: 'var(--color-primary)', padding: '14px 36px', borderRadius: 4,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
            letterSpacing: '0.07em', textTransform: 'uppercase',
          }}>See What It Costs</a>
          <a href="#re-cta" style={{
            background: 'transparent', color: 'var(--color-secondary)', padding: '14px 36px', borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.2)', fontSize: 13, fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.07em', textTransform: 'uppercase',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-secondary)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
          >Get a Free Audit</a>
        </div>

        {/* Pain cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
          gap: 2, background: 'rgba(255,255,255,0.05)',
          opacity: 0, animation: 'fadeUp 0.8s 1s forwards',
        }}>
          {pains.map((p, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', padding: '24px 24px',
              borderTop: `2px solid ${i === 0 ? RE : 'transparent'}`,
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor = RE }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor = i === 0 ? RE : 'transparent' }}
            >
              <div style={{
                fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
                fontSize: 14, textTransform: 'uppercase', letterSpacing: '-0.01em',
                color: 'var(--color-secondary)', marginBottom: 8,
              }}>{p.title}</div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        position: isMobile ? 'relative' : 'absolute',
        bottom: isMobile ? undefined : 40, right: isMobile ? undefined : 60,
        marginTop: isMobile ? 40 : 0,
        display: 'flex', gap: isMobile ? 24 : 40, flexWrap: 'wrap',
        opacity: 0, animation: 'fadeUp 0.8s 1.1s forwards',
      }}>
        {stats.map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
              fontSize: isMobile ? 32 : 40, color: RE, lineHeight: 1, letterSpacing: '-0.03em',
            }}>{s.num}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── TICKER ───────────────────────────────────────────────────────────────────
function RETicker() {
  const items = [
    '✦ QUALIFIED BUYER LEADS ONLY', '✦ 50 AD VARIANTS PER LISTING',
    '✦ RESIDENTIAL & COMMERCIAL', '✦ WHATSAPP LEAD AUTOMATION',
    '✦ REACTIVE ADS IN 30 MINUTES', '✦ NAIROBI MARKET SPECIALISTS',
    '✦ DIASPORA BUYER TARGETING',
  ]
  const doubled = [...items, ...items]
  return (
    <div style={{ background: RE, color: 'var(--color-primary)', padding: '14px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 48, animation: 'ticker 25s linear infinite', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', flexShrink: 0 }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── PROBLEM ───────────────────────────────────────────────────────────────────
function REProblem({ isMobile }: { isMobile: boolean }) {
  const problems = [
    { num: '01', title: 'One Message to Everyone', desc: "A first-time buyer in Ruaka has completely different needs from a diaspora investor looking for rental yield in Westlands. Sending the same listing to both converts neither." },
    { num: '02', title: 'No Lead Qualification System', desc: "Every enquiry hits your WhatsApp raw. You spend hours separating serious buyers from curious browsers with no system to filter, score, or route leads automatically." },
    { num: '03', title: 'Missing Seasonal & Market Moments', desc: "Infrastructure announcements, interest rate changes, new estate launches — these create 48-hour windows of high buyer intent. Most agents miss them entirely." },
  ]
  return (
    <section id="re-problem" style={{ background: '#050505', padding: isMobile ? '80px 24px' : '120px 60px' }}>
      <div className="reveal" style={{ marginBottom: isMobile ? 48 : 72 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: RE, marginBottom: 16 }}>
          Why Most Agents Struggle Online
        </div>
        <h2 style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: isMobile ? 'clamp(36px,10vw,56px)' : 'clamp(48px,5vw,80px)',
          lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase',
        }}>
          The Real Problem<br />
          <span style={{ color: RE }}>With Your Pipeline</span>
        </h2>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
        gap: 2, background: 'rgba(255,255,255,0.05)',
      }}>
        {problems.map((p, i) => (
          <div key={i} className={`reveal d${i + 1}`} style={{
            background: '#0a0a0a', padding: '40px 32px',
            borderTop: `2px solid rgba(200,255,0,0.0)`,
            transition: 'border-color 0.3s, background 0.3s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderTopColor = RE
              ;(e.currentTarget as HTMLDivElement).style.background = '#111'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderTopColor = 'rgba(200,255,0,0)'
              ;(e.currentTarget as HTMLDivElement).style.background = '#0a0a0a'
            }}
          >
            <div style={{
              fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
              fontSize: 48, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em',
              marginBottom: 20, lineHeight: 1,
            }}>{p.num}</div>
            <div style={{
              fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
              fontSize: 18, textTransform: 'uppercase', letterSpacing: '-0.01em',
              marginBottom: 12, color: 'var(--color-secondary)',
            }}>{p.title}</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── SYSTEM ───────────────────────────────────────────────────────────────────
function RESystem({ isMobile }: { isMobile: boolean }) {
  const steps = [
    { num: '01', title: 'We Map Your Buyers', desc: 'Every property type has a different buyer. We segment your audience — first-time buyers, investors, diaspora, corporate tenants, developers — and build separate campaigns for each one.' },
    { num: '02', title: '50 Variants Per Listing', desc: 'For every listing, we generate 50 targeted ad variants. Investors see ROI projections. Families see lifestyle. Tenants see value. All running simultaneously, all optimised in real time.' },
    { num: '03', title: 'Pre-Qualified Leads to WhatsApp', desc: 'Every enquiry is captured and pre-qualified automatically — budget range, timeline, property type. You only speak to serious prospects. Response time drops from hours to under 4 minutes.' },
    { num: '04', title: 'React to Market Events', desc: 'Infrastructure news, rate changes, estate launches — we produce reactive ad content within 30 minutes of a market trigger so your listings always ride the news cycle.' },
  ]
  return (
    <section id="re-system" style={{ background: 'var(--color-primary)', padding: isMobile ? '80px 24px' : '120px 60px' }}>
      <div className="reveal" style={{ marginBottom: isMobile ? 48 : 72 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: RE, marginBottom: 16 }}>
          The Codcentral System
        </div>
        <h2 style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: isMobile ? 'clamp(36px,10vw,56px)' : 'clamp(48px,5vw,80px)',
          lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase',
        }}>
          How We Fill Your<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Pipeline</span>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((s, i) => (
          <div key={i} className={`step-row reveal d${i + 1}`} style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '48px 1fr' : '80px 1fr 1.4fr',
            gap: isMobile ? 16 : 40,
            alignItems: 'center',
            padding: '36px 0',
            borderBottom: '0.5px solid rgba(255,255,255,0.07)',
          }}>
            <span style={{
              fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
              fontSize: isMobile ? 36 : 48, color: RE, letterSpacing: '-0.04em',
              opacity: 0.5, lineHeight: 1,
            }}>{s.num}</span>
            <span style={{
              fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
              fontSize: isMobile ? 18 : 22, textTransform: 'uppercase', letterSpacing: '-0.02em',
              ...(isMobile ? { gridColumn: '2', gridRow: '1' } : {}),
            }}>{s.title}</span>
            <span style={{
              fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
              ...(isMobile ? { gridColumn: '1 / -1' } : {}),
            }}>{s.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── CASE STUDY ───────────────────────────────────────────────────────────────
function RECaseStudy({ isMobile }: { isMobile: boolean }) {
  const built = [
    { n: '1', title: '10 Buyer Microgroup Campaigns', desc: 'Split the market into 10 distinct audience segments — each receiving different creative, copy, and offers tailored to their specific need and intent level.' },
    { n: '2', title: '50 Ad Variants Deployed Simultaneously', desc: 'Volume of targeting is what drives qualified enquiries — not a single boosted post. 50 variants running at once across Facebook and Instagram.' },
    { n: '3', title: 'WhatsApp Automation Flow Built', desc: 'Every lead captured, pre-qualified, and routed to WhatsApp automatically. Response time cut from 6 hours to 4 minutes.' },
    { n: '4', title: '12 Reactive Ads — All Under 30 Minutes', desc: 'Trend triggers monitored 24/7. New reactive ad creative deployed within 30 minutes of every relevant market event.' },
  ]
  const metrics = [
    { num: '18', label: 'Contracts signed' },
    { num: '4 min', label: 'Response time' },
    { num: '5.1×', label: 'ROAS' },
  ]
  return (
    <section id="re-case" style={{ background: '#050505', padding: isMobile ? '80px 24px' : '120px 60px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
      <div className="reveal" style={{ marginBottom: isMobile ? 48 : 72 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: RE, marginBottom: 16 }}>Proof It Works</div>
        <h2 style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: isMobile ? 'clamp(36px,10vw,56px)' : 'clamp(48px,5vw,80px)',
          lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase',
        }}>Walk-Ins to<br /><span style={{ color: RE }}>18 Contracts</span></h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 80, alignItems: 'start' }}>
        {/* Left */}
        <div className="reveal-left">
          <div style={{
            background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)',
            borderLeft: `2px solid ${RE}`, borderRadius: 8, padding: '28px 32px', marginBottom: 32,
          }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: RE, marginBottom: 12 }}>
              Case Study · Retail · Nairobi · B2B + B2C
            </div>
            <div style={{
              fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
              fontSize: 28, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: 8,
            }}>Uniform Kingdom</div>
            <div style={{
              fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
              fontSize: 56, color: RE, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6,
            }}>340%</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 16 }}>
              Increase in qualified enquiries · 90 days
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontWeight: 300 }}>
              Zero digital presence — all revenue from walk-ins only. CodCentral built a full campaign system with WhatsApp automation and B2B outreach.{' '}
              <strong style={{ color: 'var(--color-secondary)', fontWeight: 500 }}>18 major contracts were signed in a single term.</strong>{' '}
              The exact same pipeline system is now available for Nairobi property agents.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 2, background: 'rgba(255,255,255,0.05)' }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ flex: 1, background: '#0a0a0a', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
                  fontSize: 28, color: 'var(--color-secondary)', letterSpacing: '-0.03em', marginBottom: 4,
                }}>{m.num}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="reveal-right">
          <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: RE, marginBottom: 24 }}>What We Built</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {built.map((b, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '28px 1fr', gap: 16,
                padding: '20px 0', borderBottom: '0.5px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
                  fontSize: 13, color: RE, paddingTop: 2,
                }}>{b.n}</div>
                <div>
                  <div style={{
                    fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
                    fontSize: 14, textTransform: 'uppercase', letterSpacing: '-0.01em',
                    color: 'var(--color-secondary)', marginBottom: 6,
                  }}>{b.title}</div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── TESTIMONIAL ──────────────────────────────────────────────────────────────
function RETestimonial() {
  return (
    <section style={{
      background: 'var(--color-primary)', padding: '80px 60px',
      borderTop: '0.5px solid rgba(255,255,255,0.07)',
      borderBottom: '0.5px solid rgba(255,255,255,0.07)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 680 }}>
        <div style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: 72, color: 'rgba(200,255,0,0.12)', lineHeight: 0.8,
          marginBottom: 16, letterSpacing: '-0.04em',
        }}>"</div>
        <p style={{
          fontSize: 18, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)',
          fontWeight: 300, fontStyle: 'italic', marginBottom: 32,
        }}>
          Before CodCentral, we relied entirely on word of mouth. Now clients reach out to us
          directly — procurement officers, decision-makers, serious buyers. The system does
          the selling while we focus on delivering.
        </p>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: RE }}>
          — Eliza Wangechi, Managing Director · Uniform Kingdom · Nairobi
        </div>
      </div>
    </section>
  )
}

// ── PRICING ───────────────────────────────────────────────────────────────────
function REPricing({ isMobile }: { isMobile: boolean }) {
  const plans = [
    {
      badge: '', name: 'Listing Starter', price: '', period: '',
      desc: 'For agents with 1–3 active listings who want to start generating consistent digital enquiries.',
      features: [
        { on: true, text: 'Up to 3 listing campaigns/month' }, { on: true, text: '20 ad variants per campaign' },
        { on: true, text: 'Facebook & Instagram targeting' }, { on: true, text: 'WhatsApp lead capture setup' },
        { on: true, text: 'Buyer & tenant audience targeting' }, { on: true, text: 'Monthly performance report' },
        { on: true, text: 'Dedicated WhatsApp support' },
        { on: false, text: 'Budget allocation dashboard' }, { on: false, text: 'Reactive market ads' }, { on: false, text: 'Lead pre-qualification flow' },
      ],
      cta: 'Start on WhatsApp →', href: '#re-cta', highlight: false,
    },
    {
      badge: 'Most Popular', name: 'Pipeline Pro', price: '', period: '',
      desc: 'The full system. 50 variants, microgroup targeting, live budget management, and reactive market ads.',
      features: [
        { on: true, text: 'Up to 8 listing campaigns/month' }, { on: true, text: '50 ad variants · 10 buyer microgroups' },
        { on: true, text: 'Facebook, Instagram & TikTok' }, { on: true, text: 'Live budget allocation dashboard' },
        { on: true, text: 'Reactive market ads — 30 min' }, { on: true, text: 'WhatsApp lead pre-qualification' },
        { on: true, text: 'Investor & diaspora targeting' }, { on: true, text: 'Weekly performance reports' },
        { on: true, text: 'Monthly strategy call' }, { on: false, text: 'Branded agent landing page' },
      ],
      cta: 'Get Started →', href: '#re-cta', highlight: true,
    },
    {
      badge: 'Agency Package', name: 'Agency System', price: '', period: '',
      desc: 'For agencies managing multiple agents and high-value portfolios. Includes a lead guarantee.',
      features: [
        { on: true, text: 'Everything in Pipeline Pro' }, { on: true, text: 'Unlimited listing campaigns' },
        { on: true, text: 'Branded agent landing page' }, { on: true, text: 'Full WhatsApp automation flow' },
        { on: true, text: 'Lead nurture sequence setup' }, { on: true, text: 'Diaspora targeting (UK/US/UAE)' },
        { on: true, text: 'Bi-weekly strategy calls' }, { on: true, text: 'Priority 2hr WhatsApp response' },
        { on: true, text: 'Monthly competitor market audit' }, { on: true, text: '40-lead monthly guarantee' },
      ],
      cta: 'Talk to Us →', href: '#re-cta', highlight: false,
    },
  ]

  return (
    <section id="re-pricing" style={{ background: '#050505', padding: isMobile ? '80px 24px' : '120px 60px' }}>
      <div className="reveal" style={{ marginBottom: isMobile ? 48 : 72 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: RE, marginBottom: 16 }}>
          Transparent Pricing · Real Estate Packages
        </div>
        <h2 style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: isMobile ? 'clamp(36px,10vw,56px)' : 'clamp(48px,5vw,80px)',
          lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase',
        }}>Choose Your<br /><span style={{ color: RE }}>Pipeline Plan</span></h2>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 520, marginTop: 16 }}>
          Priced for Nairobi agents. No lock-in to start. Cancel any time after Month 2.
          All packages include onboarding and a dedicated WhatsApp support line.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
        gap: 2, background: 'rgba(255,255,255,0.06)',
      }}>
        {plans.map((p, i) => (
          <div key={i} className={`reveal d${i + 1}`} style={{
            background: p.highlight ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
            padding: '40px 32px', display: 'flex', flexDirection: 'column',
            borderTop: `2px solid ${p.highlight ? RE : 'transparent'}`,
            position: 'relative',
          }}>
            {p.badge && (
              <div style={{
                position: 'absolute', top: 16, right: 20,
                background: RE, color: 'var(--color-primary)', fontSize: 9, fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2,
              }}>{p.badge}</div>
            )}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{p.badge || 'Entry Level'}</div>
              <div style={{
                fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
                fontSize: 22, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: 16,
              }}>{p.name}</div>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 28 }}>{p.desc}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1, marginBottom: 32 }}>
              {p.features.map((f, fi) => (
                <li key={fi} style={{ fontSize: 12, color: f.on ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.2)', display: 'flex', gap: 10, alignItems: 'flex-start', lineHeight: 1.5 }}>
                  <span style={{ color: f.on ? RE : 'rgba(255,255,255,0.15)', flexShrink: 0, marginTop: 1 }}>{f.on ? '✓' : '—'}</span>
                  {f.text}
                </li>
              ))}
            </ul>
            <a href={p.href} style={{
              display: 'block', textAlign: 'center',
              background: p.highlight ? RE : 'transparent',
              color: p.highlight ? 'var(--color-primary)' : 'var(--color-secondary)',
              border: `1px solid ${p.highlight ? RE : 'rgba(255,255,255,0.2)'}`,
              padding: '14px', borderRadius: 4, fontSize: 12, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >{p.cta}</a>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.8 }}>
          50% deposit to start · Cancel any time after Month 2 · Results guarantee on Agency System
        </p>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function REFAQ({ isMobile }: { isMobile: boolean }) {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    { q: 'Do you work with individual agents or only agencies?', a: 'Both. Listing Starter and Pipeline Pro are built for individual agents. Agency System is for firms managing multiple agents or large portfolios. We tailor every setup to your specific situation.' },
    { q: 'What ad budget do I need on top of your fee?', a: 'We recommend KES 15,000–30,000/month in ad spend on Facebook and Instagram, paid directly to the platform. For high-value commercial listings, a higher budget produces faster results. We advise you on the right amount for your property type and location.' },
    { q: 'How are leads delivered — and are they pre-qualified?', a: 'On Pipeline Pro and Agency System, every lead is pre-qualified via an automated WhatsApp flow before reaching you. We capture budget range, timeline, preferred location, and property type. You only speak to serious prospects.' },
    { q: 'Can you target diaspora buyers in the UK, US, or UAE?', a: 'Yes — and this is one of our strongest capabilities. Diaspora buyers are one of the highest-converting segments for Nairobi property. On Agency System, diaspora targeting across UK, US, UAE, and Canada is included as a dedicated microgroup campaign.' },
    { q: 'How long before I see real enquiries?', a: 'Most agents see their first qualified WhatsApp enquiries within 5–10 days of campaigns going live. Significant pipeline volume builds in Week 2 to Week 3. The reactive ads system means we capitalise on market events from Day 1.' },
    { q: 'Do you handle both residential and commercial listings?', a: 'Yes — they require completely different strategies. Residential targets families, first-time buyers, and tenants. Commercial targets investors, corporates, and business owners. We run both simultaneously with separate microgroup campaigns if needed.' },
  ]
  return (
    <section id="re-faq" style={{ background: 'var(--color-primary)', padding: isMobile ? '80px 24px' : '120px 60px' }}>
      <div className="reveal" style={{ marginBottom: isMobile ? 48 : 72 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: RE, marginBottom: 16 }}>Common Questions</div>
        <h2 style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: isMobile ? 'clamp(36px,10vw,56px)' : 'clamp(48px,5vw,80px)',
          lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase',
        }}>Things Agents<br /><span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Ask Us</span></h2>
      </div>
      <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column' }}>
        {faqs.map((f, i) => (
          <div key={i} className={`reveal d${Math.min(i + 1, 4)}`} style={{ borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '24px 0', textAlign: 'left', gap: 16,
            }}>
              <span style={{
                fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
                fontSize: isMobile ? 16 : 18, textTransform: 'uppercase', letterSpacing: '-0.01em',
                color: open === i ? RE : 'var(--color-secondary)', transition: 'color 0.3s',
              }}>{f.q}</span>
              <span style={{
                width: 28, height: 28, border: `1px solid ${open === i ? RE : 'rgba(255,255,255,0.2)'}`,
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: open === i ? RE : 'rgba(255,255,255,0.4)',
                fontSize: 18, transition: 'all 0.3s',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}>+</span>
            </button>
            <div style={{
              overflow: 'hidden', maxHeight: open === i ? 300 : 0,
              opacity: open === i ? 1 : 0,
              transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.35s',
            }}>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, paddingBottom: 24, fontWeight: 300 }}>
                {f.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function RECTA({ isMobile }: { isMobile: boolean }) {
  return (
    <section id="re-cta" style={{
      background: '#050505', padding: isMobile ? '80px 24px' : '120px 60px',
      borderTop: '0.5px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column',
      alignItems: isMobile ? 'flex-start' : 'center',
      textAlign: isMobile ? 'left' : 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: `radial-gradient(circle, ${RE_DIM} 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
        <h2 className="reveal" style={{
          fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
          fontSize: isMobile ? 'clamp(48px,13vw,72px)' : 'clamp(56px,6vw,96px)',
          lineHeight: 0.88, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 24,
        }}>
          Ready to Fill<br /><span style={{ color: RE }}>Your Pipeline?</span>
        </h2>
        <p className="reveal" style={{
          fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontWeight: 300, marginBottom: 40,
        }}>
          WhatsApp us now. Tell us what you're selling and where. We'll send back a free audit
          of your current marketing and exactly what we'd change — within the hour.
        </p>
        <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: isMobile ? 'flex-start' : 'center' }}>
          <a href="https://wa.me/254754138667" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: RE, color: 'var(--color-primary)', padding: '16px 36px', borderRadius: 4,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
            letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            WhatsApp Us for a Free Audit
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function REFooter() {
  return (
    <footer style={{
      background: 'var(--color-primary)', padding: '40px 60px',
      borderTop: '0.5px solid rgba(255,255,255,0.07)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 20,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={assetUrl('/logo.jpeg')} alt="Codcentral Studios" style={{ width: 56, height: 56, borderRadius: 4, objectFit: 'cover', display: 'block' }} />
        <div>
          <div style={{
            fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900,
            fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
          }}>CodCentral Studios</div>
          <div style={{ fontSize: 11, color: RE, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            AI Marketing · Nairobi Real Estate
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em', marginBottom: 4 }}>
          codcentral.top · Nairobi, Kenya
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.05em' }}>
          © 2025 CodCentral Studios. All rights reserved.
        </div>
      </div>
      <Link to="/" style={{
        fontSize: 11, color: 'rgba(255,255,255,0.25)', textDecoration: 'none',
        letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s',
      }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
      >← Back to Main Site</Link>
      <div style={{ display: 'flex', gap: 20 }}>
        <Link to="/terms" style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Terms</Link>
        <Link to="/privacy" style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Privacy</Link>
      </div>
    </footer>
  )
}
