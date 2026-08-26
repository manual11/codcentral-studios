export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: 'var(--color-primary)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '120px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div className="cta-circle-1" />
      <div className="cta-circle-2" />
      <div className="cta-circle-3" />

      <div
        style={{
          fontSize: 11,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: 24,
          position: 'relative',
          zIndex: 1,
        }}
        className="reveal"
      >
        Ready When You Are
      </div>

      <h2
        style={{
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(48px,7vw,100px)',
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          marginBottom: 40,
          position: 'relative',
          zIndex: 1,
        }}
        className="reveal"
      >
        Start Building{' '}
        <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>
          Leverage
        </span>
      </h2>

      <p
        style={{
          fontSize: 16,
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.7,
          maxWidth: 480,
          fontWeight: 300,
          marginBottom: 48,
          position: 'relative',
          zIndex: 1,
        }}
        className="reveal"
      >
        Book a free 30-minute discovery call. We'll identify the highest-impact automation
        opportunity in your business — at no cost and no obligation.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 20,
          position: 'relative',
          zIndex: 1,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        className="reveal"
      >
        <a
          href="/contact"
          style={{
            background: 'var(--color-secondary)',
            color: 'var(--color-primary)',
            padding: '18px 48px',
            borderRadius: 4,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Book Free Consult
        </a>
        <a
          href="/modules"
          style={{
            background: 'transparent',
            color: 'var(--color-secondary)',
            padding: '18px 48px',
            borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-secondary)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
        >
          View Modules
        </a>
      </div>
    </section>
  )
}
