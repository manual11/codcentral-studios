import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)', padding: '60px', borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900,
            fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
          }}>
            Codcentral Studios
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', marginTop: 6 }}>
            Nairobi, Kenya — Built for global reach
          </div>
        </div>

        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { label: 'About',   to: '/about' },
            { label: 'Modules', to: '/modules' },
            { label: 'Blog',    to: '/blog' },
            { label: 'Contact', to: '/contact' },
          ].map((link) => (
            <Link key={link.label} to={link.to} style={{
              fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >{link.label}</Link>
          ))}
          <Link to="/terms" style={{
            fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >Terms</Link>
          <Link to="/privacy" style={{
            fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >Privacy</Link>
        </div>
      </div>

      <div style={{
        marginTop: 32, paddingTop: 24,
        borderTop: '0.5px solid rgba(255,255,255,0.05)',
        fontSize: 11, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em',
      }}>
        © 2025 Codcentral Studios. All rights reserved.
      </div>
    </footer>
  )
}
