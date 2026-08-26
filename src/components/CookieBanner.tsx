import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show if user hasn't already made a choice
    const choice = localStorage.getItem('cc_cookies')
    if (!choice) {
      // Small delay so it doesn't flash in immediately on load
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cc_cookies', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cc_cookies', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9990,
        background: '#111',
        borderTop: '0.5px solid rgba(255,255,255,0.12)',
        padding: '20px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
        boxShadow: '0 -8px 40px rgba(0,0,0,0.5)',
        animation: 'cookieSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
      }}
    >
      {/* Left: icon + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 0 }}>
        {/* Cookie icon */}
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'rgba(255,255,255,0.06)',
          border: '0.5px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, fontSize: 18,
        }}>
          🍪
        </div>

        <div>
          <div id="cookie-title" style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900, fontSize: 15, textTransform: 'uppercase',
            letterSpacing: '-0.01em', color: 'var(--color-secondary)', marginBottom: 6,
          }}>
            We use cookies
          </div>
          <p id="cookie-description" style={{
            fontSize: 12, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.45)', fontWeight: 300, margin: 0,
          }}>
            We use cookies to improve your experience, analyse site traffic, and personalise
            content. By clicking <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Accept</strong>,
            you consent to our use of cookies.{' '}
            <a
              href="/privacy"
              style={{
                color: 'rgba(255,255,255,0.35)', textDecoration: 'underline',
                fontSize: 12, transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              Learn more
            </a>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button
          type="button"
          onClick={decline}
          style={{
            background: 'transparent',
            border: '0.5px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.4)',
            padding: '9px 20px', borderRadius: 4,
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            e.currentTarget.style.color = 'var(--color-secondary)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
          }}
        >
          Decline
        </button>
        <button
          type="button"
          onClick={accept}
          style={{
            background: 'var(--color-secondary)', color: 'var(--color-primary)',
            border: 'none', padding: '9px 24px', borderRadius: 4,
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
