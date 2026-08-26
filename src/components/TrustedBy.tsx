const brands = [
  'Savanna Tech', 'Nairobi Eats', 'Kuza Capital', 'Afya Link', 'Baobab Media',
  'Simba Logistics', 'Ubuntu Brands', 'Kilimo Digital', 'Safari Stays', 'Pesa Now',
]

const doubled = [...brands, ...brands]

export default function TrustedBy() {
  return (
    <section
      id="trusted"
      style={{
        background: 'rgba(255,255,255,0.04)',
        padding: '64px 0',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.25)',
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        Trusted By
      </div>
      <div className="trusted-mask" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="trusted-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 48px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <span
                style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900,
                  fontSize: 18,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
              >
                {name}
              </span>
              <span
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 1,
                  height: 20,
                  background: 'rgba(255,255,255,0.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
