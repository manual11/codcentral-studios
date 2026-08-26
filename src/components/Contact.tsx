import { useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mgvzoyob'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business,
          service: form.service,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', business: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '0.5px solid rgba(255,255,255,0.12)',
    borderRadius: 6,
    padding: '16px 18px',
    color: 'var(--color-secondary)',
    fontFamily: "'DM Sans',sans-serif",
    fontSize: 14,
    outline: 'none',
    width: '100%',
    WebkitAppearance: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--color-primary)',
        padding: '120px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: 200,
          color: 'rgba(255,255,255,0.02)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
          userSelect: 'none',
        }}
      >
        CONTACT
      </div>

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="reveal">
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: 20,
            }}
          >
            Get In Touch
          </div>
          <h2
            id="contact-title"
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(40px,5vw,72px)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Let's Build Your{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>
              System
            </span>
          </h2>
          <p
            id="contact-description"
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
              marginBottom: 56,
              fontWeight: 300,
            }}
          >
            Fill in the form below and we'll get back to you within 24 hours to schedule
            your free discovery call.
          </p>
        </div>

        {status === 'success' ? (
          <div
            className="reveal visible"
            style={{
              padding: '48px',
              background: 'rgba(255,255,255,0.04)',
              border: '0.5px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 28,
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Message Sent
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              We'll be in touch within 24 hours to schedule your free discovery call.
            </p>
          </div>
        ) : (
          <form
            id="contact-form"
            name="contact-form"
            onSubmit={handleSubmit}
            className="reveal"
            aria-labelledby="contact-title"
            aria-describedby="contact-description"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label htmlFor="contact-name" style={labelStyle}>Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  className="contact-input"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label htmlFor="contact-email" style={labelStyle}>Email</label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  className="contact-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label htmlFor="contact-business" style={labelStyle}>Business Name</label>
                <input
                  id="contact-business"
                  name="business"
                  placeholder="Your business"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  style={inputStyle}
                  className="contact-input"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label htmlFor="contact-service" style={labelStyle}>I'm Interested In</label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={inputStyle}
                  className="contact-input"
                >
                  <option value="">Select a module</option>
                  <option>AI Agent Deployment</option>
                  <option>Social Media Automation</option>
                  <option>Digital Presence System</option>
                  <option>Lead Generation Engine</option>
                  <option>Operations Automation</option>
                  <option>Full Leverage Stack</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label htmlFor="contact-message" style={labelStyle}>Tell Us About Your Business</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What does your business do, and what's the biggest challenge you're facing right now?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                className="contact-input"
              />
            </div>

            <button
              type="submit"
              aria-live="polite"
              disabled={status === 'loading'}
              className="form-submit"
              style={{
                background: 'var(--color-secondary)',
                color: 'var(--color-primary)',
                border: 'none',
                padding: '18px 40px',
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: status === 'loading' ? 'wait' : 'pointer',
                alignSelf: 'flex-start',
                fontFamily: "'DM Sans',sans-serif",
                opacity: status === 'loading' ? 0.7 : 1,
              }}
            >
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
            </button>

            {status === 'error' && (
              <p role="alert" style={{ fontSize: 12, color: 'var(--color-tertiary)', marginTop: 4 }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
