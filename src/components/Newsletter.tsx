import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('https://formspree.io/f/mgvzoyob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="newsletter"
      style={{
        background: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: '80px 60px',
        borderTop: '0.5px solid rgba(0,0,0,0.06)',
        borderBottom: '0.5px solid rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div aria-hidden style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
        fontWeight: 900, fontSize: 160,
        color: 'rgba(0,0,0,0.03)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.05em',
        pointerEvents: 'none', userSelect: 'none',
      }}>
        JOURNAL
      </div>

      <div
        className="reveal"
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: 640, margin: '0 auto',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: 0,
        }}
      >
        {/* Eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
        }}>
          <span style={{ width: 24, height: 1, background: 'rgba(0,0,0,0.2)', display: 'inline-block' }} />
          <span style={{
            fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.35)',
          }}>
            The AI Leverage Journal
          </span>
          <span style={{ width: 24, height: 1, background: 'rgba(0,0,0,0.2)', display: 'inline-block' }} />
        </div>

        {/* Headline */}
        <h2 id="newsletter-title" style={{
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(36px,5vw,64px)',
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          textTransform: 'uppercase',
          marginBottom: 20,
          color: 'var(--color-primary)',
        }}>
          Stay Ahead of{' '}
          <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-primary)' }}>
            The Curve
          </span>
        </h2>

        <p style={{
          fontSize: 14, lineHeight: 1.8, color: 'rgba(0,0,0,0.5)',
          fontWeight: 300, marginBottom: 40, maxWidth: 480,
        }}>
          One email per week. AI advertising insights, case studies, and
          practical frameworks for business owners serious about using AI
          to grow revenue. No fluff.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div style={{
            padding: '24px 40px',
            background: 'rgba(0,0,0,0.04)',
            border: '0.5px solid rgba(0,0,0,0.1)',
            borderRadius: 6,
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900, fontSize: 20, textTransform: 'uppercase',
              letterSpacing: '-0.01em', marginBottom: 8,
            }}>
              You're In
            </div>
            <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>
              First issue lands in your inbox this week. Check your spam if you don't see it.
            </p>
          </div>
        ) : (
          <form
            id="newsletter-form"
            name="newsletter-form"
            onSubmit={handleSubmit}
            aria-labelledby="newsletter-title"
            style={{
              display: 'flex',
              gap: 0,
              width: '100%',
              maxWidth: 480,
              border: '1px solid rgba(0,0,0,0.15)',
              borderRadius: 4,
              overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)')}
          >
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 18px',
                border: 'none',
                outline: 'none',
                fontSize: 14,
                fontFamily: "'DM Sans',sans-serif",
                background: 'var(--color-secondary)',
                color: 'var(--color-primary)',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-secondary)',
                border: 'none',
                padding: '14px 28px',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: status === 'loading' ? 'wait' : 'pointer',
                fontFamily: "'DM Sans',sans-serif",
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe →'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p role="alert" style={{ fontSize: 12, color: 'var(--color-tertiary)', marginTop: 10 }}>
            Something went wrong. Please try again.
          </p>
        )}

        {/* Social proof */}
        <p style={{
          fontSize: 11, color: 'rgba(0,0,0,0.3)', letterSpacing: '0.06em',
          textTransform: 'uppercase', marginTop: 20,
        }}>
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  )
}
