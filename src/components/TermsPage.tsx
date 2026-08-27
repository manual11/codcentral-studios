import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assetUrl'
const sections = [
  {
    num: '01',
    title: 'Payment Terms',
    content: [
      'Setup fee is due 100% upfront before onboarding begins.',
      'Monthly retainer is due on the 1st of each month, paid in advance.',
      'No refunds on the setup fee unless agreed deliverables are not met by the Service Provider.',
    ],
  },
  {
    num: '02',
    title: 'Client Obligations',
    content: [
      'The Client agrees to provide all necessary account access, brand assets, and information within 48 hours of signing. Failure to do so may delay service activation.',
      'The Client agrees to contact all qualified leads within 4 hours of delivery.',
      'The lead volume guarantee is void if the Client fails to follow up on delivered leads.',
    ],
  },
  {
    num: '03',
    title: 'Term & Termination',
    content: [
      'This Agreement has an initial term of 90 days.',
      'Thereafter, it continues on a month-to-month basis and may be terminated by either party with 30 days\' written notice.',
      'Upon termination, all AI agent configurations, prompts, and custom workflows remain the intellectual property of the Service Provider.',
    ],
  },
  {
    num: '04',
    title: 'Intellectual Property',
    content: [
      'All AI agent configurations, qualification prompts, custom audiences, ad variation logic, and workflow designs created during the service remain the exclusive intellectual property of Codcentral Studios.',
      'The Client receives a licence to benefit from their output during the active service period only.',
      'No transfer of ownership of any AI system, prompt, or workflow is implied or granted by this Agreement.',
    ],
  },
  {
    num: '05',
    title: 'Force Majeure',
    content: [
      'Neither party shall be liable for delays or failures caused by circumstances beyond reasonable control.',
      'This includes but is not limited to: internet outages, Meta or Google platform downtime, power outages, or regulatory changes.',
      'The affected party shall notify the other in writing as soon as reasonably practicable.',
    ],
  },
]

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', fontFamily: "'DM Sans',sans-serif", minHeight: '100vh' }}>

      {/* Minimal nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        padding: '20px 60px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(16px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.07)',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src={assetUrl('/logo.jpeg')} alt="Codcentral" style={{ width: 36, height: 36, borderRadius: 6, objectFit: 'cover' }} />
          <span style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900,
            fontSize: 13, color: 'var(--color-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>Codcentral</span>
        </Link>
        <Link to="/" style={{
          fontSize: 11, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
          letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >← Back to Site</Link>
      </nav>

      {/* Hero */}
      <section style={{
        padding: '140px 60px 80px',
        borderBottom: '0.5px solid rgba(255,255,255,0.07)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="noise-bg" style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)', marginBottom: 20,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
            Legal · Service Agreement
          </div>
          <h1 style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900,
            fontSize: 'clamp(52px,7vw,96px)', lineHeight: 0.88,
            letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 28,
          }}>
            Terms &{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Conditions</span>
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 520, fontWeight: 300 }}>
            These terms govern the service agreement between Codcentral Studios and any client
            engaging our AI marketing systems. By proceeding with onboarding you agree to the
            following conditions.
          </p>
          <div style={{ marginTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
            Last updated: June 2025 · Codcentral Studios · Nairobi, Kenya
          </div>
        </div>
      </section>

      {/* Terms sections */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '80px 60px 120px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {sections.map((s, i) => (
            <div key={i} style={{
              padding: '48px 0',
              borderBottom: '0.5px solid rgba(255,255,255,0.08)',
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: 40,
            }}>
              {/* Number */}
              <div style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900,
                fontSize: 48, color: 'rgba(255,255,255,0.08)', letterSpacing: '-0.04em',
                lineHeight: 1, paddingTop: 4,
              }}>{s.num}</div>

              {/* Content */}
              <div>
                <h2 style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900,
                  fontSize: 22, textTransform: 'uppercase', letterSpacing: '-0.02em',
                  marginBottom: 24, color: 'var(--color-secondary)',
                }}>{s.title}</h2>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {s.content.map((point, pi) => (
                    <li key={pi} style={{
                      display: 'flex', gap: 16, alignItems: 'flex-start',
                      fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300,
                    }}>
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.25)', flexShrink: 0, marginTop: 9,
                      }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: 64, padding: '32px 40px',
          background: 'rgba(255,255,255,0.03)',
          border: '0.5px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontWeight: 300 }}>
            For questions regarding these terms, contact us at{' '}
            <a href="/contact" style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}>
              our contact page
            </a>{' '}
            or via WhatsApp at +254 754 138 667. These terms are governed by the laws of Kenya.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '0.5px solid rgba(255,255,255,0.07)',
        padding: '32px 60px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>
          © 2025 Codcentral Studios. All rights reserved.
        </span>
        <Link to="/" style={{
          fontSize: 11, color: 'rgba(255,255,255,0.25)', textDecoration: 'none',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>← Back to Site</Link>
      </footer>
    </div>
  )
}
