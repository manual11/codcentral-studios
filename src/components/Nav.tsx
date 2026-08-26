import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Dropdown items under "Modules"
const modulesDropdown = [
  { label: 'AI Systems', href: '/modules', desc: 'All 5 lead gen systems' },
  { label: 'Biashara Mjini', href: '/biashara-mjini', desc: 'Local business tools' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modulesOpen, setModulesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()
  const isBlog = location.pathname === '/blog'
  const isRE = location.pathname === '/real-estate'
  const isBM = location.pathname === '/biashara-mjini'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setModulesOpen(false)
  }, [location])

  // Close dropdown when clicking outside — not needed (hover-driven), kept for keyboard safety
  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Results', href: '/results' },
    { label: 'Process', href: '/process' },
    { label: 'Real Estate', href: '/real-estate' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const isModulesActive = location.pathname === '/modules' || isBM

  return (
    <>
      <nav
        aria-label="Primary"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '16px 60px' : '28px 60px',
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          transition: 'background 0.4s, backdrop-filter 0.4s, padding 0.4s',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="Codcentral home"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
        >
          <img
            src="/logo.jpeg"
            alt="Codcentral Studios"
            style={{ width: 64, height: 64, borderRadius: 6, objectFit: 'cover', display: 'block' }}
          />
          <span
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 13,
              color: 'var(--color-secondary)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Codcentral
          </span>
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>

            {/* ── Modules dropdown ── */}
            <li
              style={{ position: 'relative' }}
              id="modules-dropdown-trigger"
              onMouseEnter={() => setModulesOpen(true)}
              onMouseLeave={() => setModulesOpen(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={modulesOpen}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  color: isModulesActive ? 'var(--color-secondary)' : modulesOpen ? 'var(--color-secondary)' : 'rgba(255,255,255,0.6)',
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
              >
                Modules
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  style={{
                    transition: 'transform 0.2s',
                    transform: modulesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    opacity: 0.6,
                  }}
                >
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown panel — hover activated, sharp edges */}
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 230,
                  paddingTop: 8, // invisible bridge so mouse doesn't leave the li
                }}
              >
                <div
                  style={{
                    background: '#0f0520',
                    border: '1px solid rgba(138,43,226,0.5)',
                    borderRadius: 0,
                    overflow: 'hidden',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.7)',
                    opacity: modulesOpen ? 1 : 0,
                    pointerEvents: modulesOpen ? 'all' : 'none',
                    transform: modulesOpen ? 'translateY(0)' : 'translateY(-4px)',
                    transition: 'opacity 0.15s, transform 0.15s',
                  }}
                >
                  {modulesDropdown.map((item, idx) => (
                    <a
                      key={item.href}
                      href={item.href}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        padding: '14px 18px',
                        textDecoration: 'none',
                        borderBottom: idx < modulesDropdown.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                        background: location.pathname === item.href ? 'rgba(138,43,226,0.2)' : 'transparent',
                        borderLeft: location.pathname === item.href ? '2px solid var(--color-tertiary)' : '2px solid transparent',
                        transition: 'background 0.15s, border-left-color 0.15s',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.background = 'rgba(138,43,226,0.18)'
                        el.style.borderLeftColor = 'var(--color-tertiary)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.background = location.pathname === item.href ? 'rgba(138,43,226,0.2)' : 'transparent'
                        el.style.borderLeftColor = location.pathname === item.href ? 'var(--color-tertiary)' : 'transparent'
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          color: 'var(--color-secondary)',
                        }}
                      >
                        {item.label}
                      </span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.03em' }}>
                        {item.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* ── Regular links ── */}
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color:
                      (isBlog && link.label === 'Blog') || (isRE && link.label === 'Real Estate')
                        ? 'var(--color-secondary)'
                        : 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: 12,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      (isBlog && link.label === 'Blog') || (isRE && link.label === 'Real Estate')
                        ? 'var(--color-secondary)'
                        : 'rgba(255,255,255,0.6)')
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a
            href="/contact"
            aria-label="Book a free consultation"
            style={{
              background: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              padding: '10px 24px',
              borderRadius: 4,
              fontSize: 12,
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book a Free Consultation
          </a>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              width: 40,
              height: 40,
              padding: 4,
              zIndex: 1100,
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: 'var(--color-secondary)',
                borderRadius: 2,
                transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: menuOpen ? 0 : 22,
                height: 1.5,
                background: 'var(--color-secondary)',
                borderRadius: 2,
                transition: 'opacity 0.25s, width 0.3s',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: 'var(--color-secondary)',
                borderRadius: 2,
                transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        )}
      </nav>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-navigation-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            width: '100%',
            padding: 0,
            margin: 0,
          }}
        >
          {/* Modules group in mobile */}
          {[
            { label: 'Modules', href: '/modules' },
            { label: 'Biashara Mjini', href: '/biashara-mjini' },
            ...navLinks,
          ].map((link, i) => (
            <li key={link.label} style={{ width: '100%', textAlign: 'center', overflow: 'hidden' }}>
              <a
                href={link.href}
                className="mobile-menu-link"
                style={{
                  transitionDelay: menuOpen ? `${0.05 + i * 0.05}s` : '0s',
                  fontSize: link.label === 'Biashara Mjini' ? 'clamp(24px,7vw,40px)' : undefined,
                  color: link.label === 'Biashara Mjini' ? 'rgba(255,255,255,0.5)' : undefined,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: 32,
            background: 'var(--color-secondary)',
            color: 'var(--color-primary)',
            padding: '16px 40px',
            borderRadius: 4,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.4s 0.3s, transform 0.4s 0.3s',
          }}
        >
          Book a Free Consultation →
        </a>
      </div>
    </>
  )
}

