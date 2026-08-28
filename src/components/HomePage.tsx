import { Link } from 'react-router-dom'
import Nav from './Nav'
import Hero from './Hero'
import Ticker from './Ticker'
import TrustedBy from './TrustedBy'
import BlogTeaser from './BlogTeaser'
import Newsletter from './Newsletter'
import CTA from './CTA'
import Footer from './Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

// Quick-nav cards that link to every major page
const pageCards = [
  {
    label: 'About',
    to: '/about',
    headline: 'Who We Are',
    desc: 'How a broken agency model led us to build AI systems that actually work — and the proof that followed.',
    accent: 'rgba(138,43,226,0.7)',
  },
  {
    label: 'Modules',
    to: '/modules',
    headline: '5 AI Systems',
    desc: 'Creative Lead Agent, Prospect Intelligence, Lead Qualification, Conversion Nurture, Revenue Ops.',
    accent: 'var(--color-tertiary)',
  },
  {
    label: 'Results',
    to: '/results',
    headline: 'Real Numbers',
    desc: 'Outcomes from live client deployments — not projections. ROAS, CPL, CTR figures from real campaigns.',
    accent: 'rgba(138,43,226,0.7)',
  },
  {
    label: 'Process',
    to: '/process',
    headline: 'How It Works',
    desc: 'From diagnosis to deployment in 5 stages. No guesswork, no bloated retainers — just systems that run.',
    accent: 'var(--color-tertiary)',
  },
  {
    label: 'Biashara Mjini',
    to: '/biashara-mjini',
    headline: 'Local Business',
    desc: 'Digital systems built for Nairobi SMBs. Start with Google Business Profile. Scale from there.',
    accent: 'rgba(138,43,226,0.7)',
  },
  {
    label: 'Blog',
    to: '/blog',
    headline: 'The Journal',
    desc: 'Expert thinking on AI agents, automation, and digital systems for African business owners.',
    accent: 'var(--color-tertiary)',
  },
]

export default function HomePage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main id="main-content" tabIndex={-1}>
      <Nav />
      <Hero />
      <Ticker />
      <TrustedBy />

      {/* ── Page Navigation Grid ── */}
      <section
        style={{
          background: 'var(--color-primary)',
          padding: '100px 60px',
          borderTop: '0.5px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Header */}
          <div className="reveal" style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
              Explore
            </div>
            <h2 style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(36px,4.5vw,72px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}>
              Everything{' '}
              <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>
                Codcentral
              </span>
            </h2>
          </div>

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 2,
            background: 'rgba(255,255,255,0.05)',
          }}>
            {pageCards.map((card, i) => (
              <Link
                key={card.to}
                to={card.to}
                className={`reveal d${Math.min(i + 1, 6)}`}
                style={{
                  background: 'var(--color-primary)',
                  padding: '40px 36px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.3s',
                  borderTop: `2px solid transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderTopColor = card.accent
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)'
                  e.currentTarget.style.borderTopColor = 'transparent'
                }}
              >
                {/* Ghost number */}
                <div style={{
                  position: 'absolute', bottom: -8, right: 16,
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900, fontSize: 96, lineHeight: 1,
                  color: 'rgba(255,255,255,0.025)',
                  letterSpacing: '-0.05em', userSelect: 'none', pointerEvents: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                  {card.label}
                </span>
                <span style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900, fontSize: 24, textTransform: 'uppercase',
                  letterSpacing: '-0.02em', color: 'var(--color-secondary)', lineHeight: 1.05,
                }}>
                  {card.headline}
                </span>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', flex: 1 }}>
                  {card.desc}
                </p>
                <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: card.accent, display: 'flex', alignItems: 'center', gap: 6 }}>
                  Explore
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlogTeaser />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  )
}
