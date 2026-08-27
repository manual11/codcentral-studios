import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { assetUrl } from '../lib/assetUrl'

// ── Single module card on the page ──────────────────────────────────────────
function GBPModule() {
  const navigate = useNavigate()

  const steps = [
    { num: '01', title: 'Claim Your Listing', body: 'Appear on Google Search and Maps the moment a customer searches for what you sell in your area.' },
    { num: '02', title: 'Build Instant Trust', body: 'Reviews, photos, and accurate hours turn a casual searcher into a caller before they ever visit your website.' },
    { num: '03', title: 'Outrank Competitors', body: 'A complete, active profile consistently ranks above competitors who haven\'t optimised theirs — at zero ad spend.' },
    { num: '04', title: 'Drive Calls & Directions', body: 'The "Call" and "Directions" buttons sit right on your listing. Customers act without friction.' },
  ]

  const features = [
    'Full GBP setup and verification',
    'Business description written for local SEO',
    'Category selection and attribute optimisation',
    'Photo strategy and upload (up to 20 images)',
    'Service / product catalogue listing',
    'Review generation playbook',
    'Monthly post schedule to keep the profile active',
    'Ongoing monitoring and Q&A management',
  ]

  return (
    <div
      id="google-business-profile"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '0.5px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        overflow: 'hidden',
      }}
    >
      {/* Module header band */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(138,43,226,0.2) 0%, rgba(26,5,51,0.6) 100%)',
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
          padding: '48px 56px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ghost number */}
        <div
          style={{
            position: 'absolute',
            right: 32,
            bottom: -20,
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900,
            fontSize: 160,
            lineHeight: 1,
            color: 'rgba(255,255,255,0.03)',
            letterSpacing: '-0.05em',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          01
        </div>

        {/* Two-column: copy left, image right */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)',
            gap: 48,
            alignItems: 'center',
          }}
          className="gbp-card-grid"
        >
          {/* Left: text */}
          <div>
          {/* Module label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(138,43,226,0.2)',
              border: '0.5px solid rgba(138,43,226,0.4)',
              borderRadius: 100,
              padding: '5px 14px',
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--color-tertiary)',
                boxShadow: '0 0 8px var(--color-tertiary)',
                display: 'inline-block',
                animation: 'livePulse 2s ease-in-out infinite',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Module 01 · Biashara Mjini
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px,4vw,56px)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
              marginBottom: 20,
            }}
          >
            Google Business<br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px var(--color-secondary)',
              }}
            >
              Profile
            </span>
          </h2>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 560,
            }}
          >
            Google Business Profile is the free tool that puts your business on Google
            Maps and in local search results. For Nairobi businesses, it is the single
            highest-return digital action you can take — it costs nothing and puts you
            directly in front of customers who are already searching for what you sell,
            in your neighbourhood, right now.
          </p>
          </div>

          {/* Right: illustration */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={assetUrl('/google business profile.webp')}
              alt="Google Business Profile illustration"
              style={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>

      {/* Why it matters — 4 cards */}
      <div style={{ padding: '48px 56px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: 32,
          }}
        >
          Why It Matters for Nairobi Businesses
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.07)',
                borderRadius: 12,
                padding: '28px 24px',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(138,43,226,0.08)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(138,43,226,0.3)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              <div
                style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900,
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'var(--color-tertiary)',
                  marginBottom: 14,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900,
                  fontSize: 18,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: 'var(--color-secondary)',
                  marginBottom: 10,
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)' }}>
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What we do + CTA */}
      <div
        style={{
          padding: '48px 56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 56,
          alignItems: 'start',
        }}
      >
        {/* Features list */}
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 24,
            }}
          >
            What's Included
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {features.map((f) => (
              <li
                key={f}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'rgba(138,43,226,0.25)',
                    border: '0.5px solid rgba(138,43,226,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 1,
                    fontSize: 9,
                    color: 'var(--color-secondary)',
                  }}
                >
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA panel */}
        <div
          style={{
            background: 'rgba(138,43,226,0.08)',
            border: '0.5px solid rgba(138,43,226,0.25)',
            borderRadius: 12,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 22,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: 'var(--color-secondary)',
                marginBottom: 10,
                lineHeight: 1.1,
              }}
            >
              Want to set it up yourself?
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
              Read our step-by-step guide — written specifically for Nairobi business
              owners — and have your Google Business Profile live today.
            </p>
          </div>

          <button
            onClick={() => navigate('/blog', { state: { openArticle: 'gbp-setup' } })}
            style={{
              background: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              border: 'none',
              borderRadius: 6,
              padding: '13px 24px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              transition: 'opacity 0.2s',
              width: 'fit-content',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
          >
            Read the Setup Guide
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 11L11 2M11 2H4M11 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)', paddingTop: 20 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
              Prefer we handle everything for you?
            </div>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-tertiary)',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
            >
              Book a free call →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── GBP FAQ Accordion ────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Is Google Business Profile really free?',
    a: 'Yes — completely free. Google charges nothing to create, claim, or maintain a Business Profile. You can list your address, phone number, opening hours, photos, services, and collect reviews at zero cost. The only time you pay Google anything related to GBP is if you choose to run paid Google Ads, which is a separate product.',
  },
  {
    q: 'How long does verification take?',
    a: 'It depends on the method Google offers your account. Postcard verification (the most common for Nairobi businesses) takes 5–14 days — Google mails a card with a 5-digit code to your business address. Some accounts qualify for instant verification by phone call, SMS, or email, which takes under five minutes. Video verification is increasingly common and usually processes within a few days.',
  },
  {
    q: 'What happens if someone else claims my business?',
    a: 'If you search for your business and find it already claimed by someone else — which can happen if a previous owner, employee, or even a random user claimed it — you can request ownership through the "Claim this business" button. Google will notify the current owner and give them 7 days to respond. If they do not respond, ownership transfers to you. If they dispute it, Google reviews the case and usually sides with the legitimate business owner when you can provide proof (business registration, utility bills, photos).',
  },
  {
    q: 'My business moves around — can I still use GBP?',
    a: 'Yes. If you serve customers at their location rather than a fixed premises — for example a mobile caterer, a plumber, a photographer, or a delivery service — you can set a service area instead of a physical address. You can define your service area by city, neighbourhood, or a radius in kilometres. Your listing will still appear in local searches for your service area without displaying a specific street address.',
  },
  {
    q: 'How do I get more reviews?',
    a: 'The most effective method is direct asking. After completing a job or sale, send the customer your GBP review link on WhatsApp with a short message like: "Thank you for choosing us — if you have a minute, a Google review would mean a lot to us. Here is the link." Make it two taps. Do not ask for a five-star review specifically — Google can penalise businesses that do. Just ask for an honest review. Consistency matters more than volume: five reviews a month over six months is better than 30 reviews in one week.',
  },
  {
    q: 'Can I remove a bad review?',
    a: 'You cannot delete a genuine customer review — and attempting to fake or buy reviews to bury bad ones is a violation of Google\'s policies that can get your entire listing suspended. What you can do is flag reviews that violate Google\'s policies (spam, fake, offensive, or irrelevant content) and request their removal. For legitimate negative reviews, the best response is a calm, professional reply that acknowledges the issue and invites the customer to resolve it offline. This response is read by every future customer and significantly impacts how they perceive you.',
  },
  {
    q: 'Why is my business not showing up on Google Maps?',
    a: 'The most common reasons are: (1) Your listing has not been verified yet — unverified listings do not appear publicly. (2) Your business category is too broad or incorrect. (3) Your listing is missing key information like address, phone number, or opening hours. (4) You have low review activity compared to competitors in your area. (5) Your listing has been suspended due to a policy violation or quality issue — check your GBP dashboard for any alerts. Fixing these in order will resolve most visibility problems.',
  },
  {
    q: 'Does having a GBP listing help my website rank on Google?',
    a: 'Yes, indirectly. A well-optimised GBP listing improves your local SEO — Google is more likely to surface your website in local search results when your GBP listing is complete, verified, and active. The two work together: your GBP listing drives calls and direction requests, while your website handles deeper research and conversions. Having both, linked to each other, consistently outperforms having only one.',
  },
  {
    q: 'How often should I update my Google Business Profile?',
    a: 'At minimum: update your opening hours whenever they change (including public holidays), respond to new reviews within 24 hours, and post an update at least once a week. Beyond that, add new photos monthly, refresh your business description quarterly, and review your service or product listings every six months to make sure they are current. Google\'s algorithm rewards active profiles — a listing that has not been touched in months will gradually lose ground to competitors who maintain theirs.',
  },
  {
    q: 'Can Codcentral manage my Google Business Profile for me?',
    a: 'Yes. The Biashara Mjini system covers your complete GBP setup, verification, profile optimisation, weekly posts, review monitoring, Q&A management, photo updates, and monthly performance reporting. You focus on running your business — we make sure every customer who searches for what you offer in your area finds you first.',
  },
]

function GBPFaqs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        padding: '100px 60px 120px',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.15)' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
              Google Business Profile · FAQs
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px,4.5vw,64px)',
              lineHeight: 0.93,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Questions We Get<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--color-secondary)' }}>Every Week</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 560 }}>
            Everything Nairobi business owners ask us before, during, and after setting up their Google Business Profile.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  borderTop: '0.5px solid rgba(255,255,255,0.08)',
                  borderLeft: isOpen ? '2px solid var(--color-tertiary)' : '2px solid transparent',
                  transition: 'border-left-color 0.25s',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: isOpen ? 'rgba(138,43,226,0.05)' : 'transparent',
                    border: 'none',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.02)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: isOpen ? 'var(--color-secondary)' : 'rgba(255,255,255,0.8)',
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      border: `1px solid ${isOpen ? 'var(--color-tertiary)' : 'rgba(255,255,255,0.15)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 16,
                      color: isOpen ? 'var(--color-tertiary)' : 'rgba(255,255,255,0.4)',
                      lineHeight: 1,
                      fontWeight: 300,
                      transition: 'border-color 0.2s, color 0.2s, transform 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 400 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: 'rgba(255,255,255,0.55)',
                      padding: '0 28px 28px',
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
          {/* Bottom border */}
          <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }} />
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, maxWidth: 400 }}>
            Still have a question? Book a free call and we will answer it in plain language — no jargon, no sales pitch.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              paddingBottom: 4,
              transition: 'border-color 0.2s, color 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-tertiary)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--color-tertiary)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-secondary)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'rgba(255,255,255,0.2)'
            }}
          >
            Ask Us Directly →
          </a>
        </div>

      </div>
    </section>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function BiasharaMjiniPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main id="biashara-mjini-page" tabIndex={-1}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background: 'var(--color-primary)',
          padding: '160px 60px 80px',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Orb */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="noise-bg" style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto' }}
          className="bm-hero-grid"
        >
          {/* ── LEFT: text ── */}
          <div>
          {/* Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 32,
            }}
          >
            <a href="/modules" style={{ color: 'inherit', textDecoration: 'none' }}>Modules</a>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>Biashara Mjini</span>
          </div>

          {/* Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(138,43,226,0.12)',
              border: '0.5px solid rgba(138,43,226,0.35)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              🏙️ &nbsp;Biashara Mjini — Local Business Systems
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(44px,6vw,96px)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Biashara<br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--color-secondary)',
              }}
            >
              Mjini
            </span>
          </h1>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 580,
              marginBottom: 0,
            }}
          >
            Digital systems built specifically for Nairobi small businesses. Each module
            targets one critical gap between your business and the customers who are
            already searching for you online.
          </p>
          </div>
        </div>
      </section>

      {/* Modules section */}
      <section
        style={{
          background: 'var(--color-primary)',
          padding: '80px 60px 120px',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Section label */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 48,
            }}
          >
            <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.15)' }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              1 Module Available · More Coming Soon
            </span>
          </div>

          {/* GBP Module */}
          <div className="reveal">
            <GBPModule />
          </div>

          {/* Coming soon teaser */}
          <div
            className="reveal"
            style={{
              marginTop: 16,
              border: '0.5px dashed rgba(255,255,255,0.1)',
              borderRadius: 12,
              padding: '32px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 8 }}>
                Coming Soon
              </div>
              <div style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 20, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.25)' }}>
                Module 02 · WhatsApp Business Setup &amp; Automation
              </div>
            </div>
            <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '6px 14px' }}>
              Notify Me
            </span>
          </div>

          {/* Featured Business of the Week callout */}
          <a
            href="/featured-business"
            className="reveal"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
              marginTop: 24,
              padding: '32px 40px',
              background: 'linear-gradient(135deg, rgba(230,28,46,0.08) 0%, rgba(138,43,226,0.06) 100%)',
              border: '0.5px solid rgba(230,28,46,0.3)',
              textDecoration: 'none',
              transition: 'border-color 0.25s, background 0.25s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(230,28,46,0.6)'
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, rgba(230,28,46,0.12) 0%, rgba(138,43,226,0.09) 100%)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(230,28,46,0.3)'
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, rgba(230,28,46,0.08) 0%, rgba(138,43,226,0.06) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {/* Thumbnail */}
              <div style={{ width: 64, height: 64, overflow: 'hidden', flexShrink: 0, border: '0.5px solid rgba(230,28,46,0.3)' }}>
                <img src={assetUrl('/mjini entreprenuer winner 1.webp')} alt="DrFarm" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-tertiary)', boxShadow: '0 0 8px var(--color-tertiary)', display: 'inline-block', animation: 'livePulse 2s ease-in-out infinite' }} />
                  <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                    Mjini Entrepreneur · Featured This Week
                  </span>
                </div>
                <div style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 20, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--color-secondary)', lineHeight: 1.1 }}>
                  DrFarm Fabricators & Engineering Works
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>
                  Kariobangi Light Industries · Animal feed mixers, posho mills & more
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-tertiary)', flexShrink: 0 }}>
              See Their Story
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* ── TRANSFORMATION OFFER ── */}
      <section
        style={{
          background: 'var(--color-primary)',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '0.5px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Background orbs */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(138,43,226,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,28,46,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="noise-bg" style={{ position: 'absolute', inset: 0, opacity: 0.025, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '100px 60px 120px' }}>

          {/* Section label */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
            <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.15)' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
              The Codcentral Offer · Biashara Mjini
            </span>
          </div>

          {/* Headline + intro */}
          <div className="reveal" style={{ marginBottom: 72 }}>
            <h2
              style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(40px,5.5vw,88px)',
                lineHeight: 0.92,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                marginBottom: 32,
              }}
            >
              From Local{' '}
              <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Business</span>
              <br />To International{' '}
              <span style={{ color: 'var(--color-tertiary)', textShadow: '0 0 30px rgba(230,28,46,0.3)' }}>Brand</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: 680 }}>
              Most small businesses exist in one physical location, known only to the people who happen to walk past. Codcentral works hand in hand with small business owners to change that — from a full diagnosis of where you are today, to a clear roadmap that takes you from losing to earning, and from local to international.
            </p>
          </div>

          {/* Diagnosis + Roadmap strip */}
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 2,
              background: 'rgba(255,255,255,0.04)',
              marginBottom: 64,
            }}
          >
            {[
              {
                icon: '🔍',
                title: 'Diagnosis',
                body: 'We audit your business from the ground up — your current visibility, brand perception, digital presence, and competitive gaps. You get a clear picture of exactly where you stand.',
              },
              {
                icon: '🗺️',
                title: 'Roadmap',
                body: 'We build a step-by-step transformation plan tailored to your business, your budget, and your timeline. No guesswork. Every step has a purpose and a measurable outcome.',
              },
              {
                icon: '🤝',
                title: 'Walk With You',
                body: 'You do not have to do it all at once. We start where you are — even if that is just branding or a Google Business Profile — and walk with you through every step of the full transformation.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'var(--color-primary)',
                  padding: '40px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 32 }}>{item.icon}</div>
                <div
                  style={{
                    fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                    fontWeight: 900,
                    fontSize: 22,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    color: 'var(--color-secondary)',
                  }}
                >
                  {item.title}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* 100% Digital Transformation breakdown */}
          <div className="reveal" style={{ marginBottom: 64 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 36,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(24px,3vw,40px)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                100% Digital Transformation
              </h3>
              <div
                style={{
                  background: 'rgba(230,28,46,0.12)',
                  border: '0.5px solid rgba(230,28,46,0.4)',
                  borderRadius: 4,
                  padding: '4px 12px',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-tertiary)',
                  flexShrink: 0,
                }}
              >
                Full Package
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 12,
              }}
            >
              {[
                { num: '01', title: 'Branding', desc: 'Logo, colour palette, typography, brand voice — a professional identity that customers trust and remember.' },
                { num: '02', title: 'Google Business Profile', desc: 'Full setup, verification, optimisation, and ongoing management so you rank in local search and Maps.' },
                { num: '03', title: 'Website', desc: 'A fast, mobile-first website that converts visitors into leads — not just a digital brochure.' },
                { num: '04', title: 'Social Media Pages', desc: 'Professional setup and branding across Instagram, Facebook, TikTok, and LinkedIn where relevant.' },
                { num: '05', title: 'Meta Ads', desc: 'Targeted Facebook and Instagram ad campaigns built to reach your exact customer in your exact market.' },
                { num: '06', title: 'Google Ads', desc: 'Search and display campaigns that put you in front of customers at the exact moment they are searching to buy.' },
                { num: '07', title: 'Jiji Listing & Promotions', desc: "Optimised product and service listings on Jiji Kenya — one of the country's highest-traffic marketplaces." },
              ].map((step) => (
                <div
                  key={step.num}
                  className="about-step-card"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '0.5px solid rgba(255,255,255,0.07)',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    transition: 'background 0.3s, border-color 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(138,43,226,0.07)'
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(138,43,226,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                      fontWeight: 900,
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      color: 'var(--color-tertiary)',
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                      fontWeight: 900,
                      fontSize: 16,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.01em',
                      color: 'var(--color-secondary)',
                      lineHeight: 1.1,
                    }}
                  >
                    {step.title}
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey strip */}
          <div
            className="reveal"
            style={{
              background: 'rgba(138,43,226,0.06)',
              border: '0.5px solid rgba(138,43,226,0.2)',
              padding: '48px 56px',
              marginBottom: 64,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 40,
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
                Your Journey
              </div>
              <h3
                style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(24px,3vw,38px)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.0,
                  marginBottom: 16,
                }}
              >
                Start Small.<br />
                <span style={{ color: 'var(--color-tertiary)' }}>Go Global.</span>
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', maxWidth: 400 }}>
                You do not need to invest in everything at once. We will assess where your biggest gap is today and start there — whether that is a Google Business Profile, a logo, or your first ad campaign. Then we build from there, one step at a time, until your business is fully operational online and reaching customers far beyond your physical location.
              </p>
            </div>

            {/* Journey steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'Where you are', desc: 'Local. Physical. Limited reach.', color: 'rgba(255,255,255,0.2)' },
                { label: 'First step', desc: 'Diagnosis + one module (e.g. GBP or Branding)', color: 'rgba(138,43,226,0.6)' },
                { label: 'Growth phase', desc: 'Website, social pages, Jiji listings live', color: 'rgba(138,43,226,0.8)' },
                { label: 'Scale phase', desc: 'Meta Ads, Google Ads, paid acquisition running', color: 'var(--color-tertiary)' },
                { label: 'Where you\'re going', desc: 'International brand. Digital-first. Scalable.', color: 'var(--color-secondary)' },
              ].map((step, i, arr) => (
                <div key={step.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: step.color, flexShrink: 0, marginTop: 4 }} />
                    {i < arr.length - 1 && <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.08)', marginTop: 2 }} />}
                  </div>
                  <div style={{ paddingBottom: i < arr.length - 1 ? 16 : 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: step.color, letterSpacing: '0.04em', marginBottom: 2 }}>{step.label}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
            <h3
              style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(28px,4vw,56px)',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: 0.95,
              }}
            >
              Ready to Take Your<br />
              <span style={{ color: 'var(--color-tertiary)' }}>First Step?</span>
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 520, lineHeight: 1.75 }}>
              Book a free diagnosis call. We will assess your business, identify your biggest gap, and give you a clear roadmap — no obligation, no jargon.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="/contact"
                className="btn-primary"
                style={{
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  padding: '15px 40px',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  borderRadius: 0,
                }}
              >
                <span>Book a Free Diagnosis</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H4M11 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/modules"
                style={{
                  padding: '15px 32px',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  transition: 'color 0.2s, border-color 0.2s',
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-secondary)'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.4)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'
                }}
              >
                See Our AI Systems →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── GBP FAQs ── */}
      <GBPFaqs />

      <Footer />
    </main>
  )
}
