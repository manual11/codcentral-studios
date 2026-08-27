import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assetUrl } from '../lib/assetUrl'

// Animated grid + orb background drawn on canvas
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      // ── Glowing orb ──
      const orbX = width * 0.72
      const orbY = height * 0.38
      const grad = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, width * 0.45)
      grad.addColorStop(0, 'rgba(138, 43, 226, 0.22)')
      grad.addColorStop(0.4, 'rgba(90, 20, 160, 0.12)')
      grad.addColorStop(1, 'rgba(26, 5, 51, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // ── Secondary orb (bottom-left) ──
      const orb2X = width * 0.08
      const orb2Y = height * 0.85
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, width * 0.28)
      grad2.addColorStop(0, 'rgba(230, 28, 46, 0.12)')
      grad2.addColorStop(1, 'rgba(26, 5, 51, 0)')
      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, width, height)

      // ── Animated dot grid ──
      const spacing = 44
      const cols = Math.ceil(width / spacing) + 1
      const rows = Math.ceil(height / spacing) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing
          // distance from orb for pulse effect
          const dx = x - orbX
          const dy = y - orbY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const wave = Math.sin(t * 0.018 - dist * 0.009) * 0.5 + 0.5
          const alpha = 0.04 + wave * 0.08
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200, 180, 255, ${alpha})`
          ctx.fill()
        }
      }

      t++
      rafId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

// Floating stat chip
function StatChip({
  value, label, delay, accent,
}: {
  value: string
  label: string
  delay: string
  accent?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        opacity: 0,
        animation: `fadeUp 0.7s ${delay} forwards`,
      }}
    >
      <span
        style={{
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(28px,3vw,40px)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: accent ? 'var(--color-tertiary)' : 'var(--color-secondary)',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

// ── Rotating hero ads ────────────────────────────────────────────────────────
const heroAds = [
  {
    id: 1,
    eyebrow: 'Featured Business · This Week',
    headline: 'DrFarm Fabricators — From Zero to Google Maps in 48hrs',
    sub: 'Kariobangi Light Industries · Animal feed mixers, posho mills & more',
    cta: 'See Their Story →',
    href: '/featured-business',
    accent: 'var(--color-tertiary)',
    img: assetUrl('/mjini entreprenuer winner 1.webp'),
  },
  {
    id: 2,
    eyebrow: 'Youth Hustle · New Guide',
    headline: 'Pay Your Hostel Rent Selling GBP to Local Businesses',
    sub: 'Smartphone + bundles = KSh 40,000/month. Here is the full playbook.',
    cta: 'Read the Guide →',
    href: '/blog',
    articleId: 'gbp-hustle',
    accent: 'rgba(138,43,226,0.9)',
    img: null,
  },
]

function HeroAds({ onOpenBlogArticle }: { onOpenBlogArticle?: (id: string) => void }) {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent(index)
      setVisible(true)
    }, 220)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % heroAds.length)
    }, 5000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  const ad = heroAds[current]

  const handleClick = (e: React.MouseEvent) => {
    if (ad.articleId && onOpenBlogArticle) {
      e.preventDefault()
      onOpenBlogArticle(ad.articleId)
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 72,
        right: 60,
        zIndex: 4,
        width: 300,
        opacity: 0,
        animation: 'fadeUp 0.8s 1.5s forwards',
      }}
    >
      {/* Ad card */}
      <a
        href={ad.href}
        onClick={handleClick}
        style={{
          display: 'block',
          textDecoration: 'none',
          background: 'rgba(10,2,24,0.88)',
          border: `1px solid ${ad.accent}`,
          backdropFilter: 'blur(16px)',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.22s ease, transform 0.22s ease, border-color 0.3s',
        }}
      >
        {/* Top accent */}
        <div style={{ height: 2, background: `linear-gradient(90deg, ${ad.accent}, transparent)` }} />

        <div style={{ padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          {/* Thumbnail or icon */}
          <div style={{ width: 44, height: 44, flexShrink: 0, overflow: 'hidden', border: `0.5px solid ${ad.accent}`, background: 'rgba(255,255,255,0.04)' }}>
            {ad.img ? (
              <img src={ad.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>📱</div>
            )}
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: ad.accent, flexShrink: 0, animation: 'livePulse 2s ease-in-out infinite', display: 'inline-block' }} />
              <span style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {ad.eyebrow}
              </span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-secondary)', lineHeight: 1.3, marginBottom: 5, letterSpacing: '-0.01em' }}>
              {ad.headline}
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4, marginBottom: 10 }}>
              {ad.sub}
            </div>
            <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: ad.accent, fontWeight: 700 }}>
              {ad.cta}
            </span>
          </div>
        </div>
      </a>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end', marginTop: 8, paddingRight: 2 }}>
        {heroAds.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 20 : 5,
              height: 5,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === current ? ad.accent : 'rgba(255,255,255,0.2)',
              transition: 'width 0.3s, background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const headlineLines: { text: string; style: 'solid' | 'outline' | 'accent' }[] = [
    { text: 'Lead Gen',      style: 'solid'   },
    { text: 'That Turn',    style: 'outline'  },
    { text: 'Quiet',        style: 'solid'   },
    { text: 'Inboxes',      style: 'accent'  },
    { text: 'Into Revenue', style: 'solid'   },
  ]

  return (
    <section
      id="hero"
      style={{
        background: 'var(--color-primary)',
        backgroundImage: `url("${assetUrl('/hero-bg.jpg')}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Canvas background */}
      <HeroCanvas />

      {/* Dark overlay — keeps text readable over the photo */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(26,5,51,0.82) 0%, rgba(26,5,51,0.65) 50%, rgba(15,2,32,0.78) 100%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Noise texture */}
      <div
        className="noise-bg"
        style={{ position: 'absolute', inset: 0, opacity: 0.035, pointerEvents: 'none', zIndex: 1 }}
      />

      {/* Top border accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, rgba(138,43,226,0.6) 40%, var(--color-tertiary) 60%, transparent 100%)',
          zIndex: 3,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1360,
          margin: '0 auto',
          padding: isMobile ? '130px 24px 100px' : '140px 60px 100px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 56 : 80,
          alignItems: 'center',
        }}
      >
        {/* ══ LEFT COLUMN ══ */}
        <div>
          {/* Eyebrow pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(138,43,226,0.15)',
              border: '0.5px solid rgba(138,43,226,0.4)',
              borderRadius: 100,
              padding: '7px 16px 7px 10px',
              marginBottom: 36,
              opacity: 0,
              animation: 'fadeUp 0.7s 0.2s forwards',
            }}
          >
            <span
              style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--color-tertiary)',
                boxShadow: '0 0 10px var(--color-tertiary)',
                animation: 'livePulse 2s ease-in-out infinite',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              Lead Generation Systems · Nairobi
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              lineHeight: 0.93,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            {headlineLines.map((line, i) => {
              const fontSize = isMobile
                ? 'clamp(42px,11vw,64px)'
                : 'clamp(48px,5.2vw,88px)'

              let color: string
              let stroke: string | undefined
              let textShadow: string | undefined

              if (line.style === 'solid') {
                color = 'var(--color-secondary)'
              } else if (line.style === 'outline') {
                color = 'transparent'
                stroke = '1.5px rgba(245,240,255,0.7)'
              } else {
                // accent — vibrant red glow
                color = 'var(--color-tertiary)'
                textShadow = '0 0 40px rgba(230,28,46,0.45)'
              }

              return (
                <span key={i} className="hero-line">
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize,
                      transform: 'translateY(110%)',
                      animation: `slideUp 0.85s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.12}s forwards`,
                      color,
                      WebkitTextStroke: stroke,
                      textShadow,
                    }}
                  >
                    {line.text}
                  </span>
                </span>
              )
            })}
          </h1>

          {/* Body copy */}
          <p
            style={{
              maxWidth: 480,
              fontSize: 15,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 400,
              opacity: 0,
              animation: 'fadeUp 0.8s 0.75s forwards',
              marginBottom: 44,
            }}
          >
            We install lead generation systems that build trust and increase sales —
            generating 50 photorealistic ad creatives per campaign, targeting each
            to a specific micro-audience, running A/B tests automatically, and cutting
            your cost per lead without studios, agencies, or guesswork.
          </p>

          {/* CTA row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeUp 0.8s 0.9s forwards',
              marginBottom: 60,
            }}
          >
            {/* Primary CTA */}
            <a
              href="/contact"
              className="btn-primary"
              style={{
                background: 'var(--color-secondary)',
                color: 'var(--color-primary)',
                padding: '15px 38px',
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span>Book a Free Call</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Ghost CTA */}
            <a
              href="/modules"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                padding: '15px 0',
                borderBottom: '0.5px solid rgba(255,255,255,0.3)',
                transition: 'color 0.25s, border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-secondary)'
                e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.12)'
              }}
            >
              See Our Systems
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: 'flex',
              gap: isMobile ? 28 : 40,
              paddingTop: 32,
              borderTop: '0.5px solid rgba(255,255,255,0.07)',
              flexWrap: 'wrap',
            }}
          >
            <StatChip value="50×"   label="Ad creatives per run"   delay="1.0s" accent />
            <StatChip value="30m"   label="Reactive campaign"       delay="1.1s" />
            <StatChip value="-64%"  label="Cost per lead"           delay="1.2s" accent />
            <StatChip value="5×"    label="Lead gen systems"     delay="1.3s" />
          </div>
        </div>

        {/* ══ RIGHT COLUMN ══ */}
        <div
          style={{
            opacity: 0,
            animation: 'fadeUp 0.9s 0.55s forwards',
            marginTop: isMobile ? 0 : '-30%',
          }}
        >
          {/* Card shell */}
          <div
            style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.03)',
              border: '0.5px solid rgba(138,43,226,0.3)',
              boxShadow: '0 0 0 0.5px rgba(255,255,255,0.05), 0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(138,43,226,0.08)',
            }}
          >
            {/* Card top bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                borderBottom: '0.5px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: 7 }}>
                {['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)'].map((bg, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: bg }} />
                ))}
              </div>

              {/* Live badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span
                  style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--color-tertiary)',
                    boxShadow: '0 0 8px var(--color-tertiary)',
                    animation: 'livePulse 2s ease-in-out infinite',
                    display: 'inline-block',
                  }}
                />
                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
                  Live Demo
                </span>
              </div>

              {/* System label */}
              <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                Creative Lead Agent
              </span>
            </div>

            {/* Video */}
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#0d0018' }}>
              {/* Top gradient line */}
              <div
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: 'linear-gradient(90deg, var(--color-tertiary), rgba(138,43,226,0.8), transparent)',
                  zIndex: 2,
                }}
              />
              <video
                autoPlay muted loop playsInline controls
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={assetUrl('/pawslova demo.mp4')} type="video/mp4" />
              </video>
            </div>

            {/* Card bottom */}
            <div
              style={{
                padding: '16px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.015)',
              }}
            >
              <div style={{ display: 'flex', gap: 16 }}>
                {['50 creatives', '30m reactive', 'Auto A/B'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)',
                      padding: '4px 10px',
                      border: '0.5px solid rgba(255,255,255,0.08)',
                      borderRadius: 100,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="/contact"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-tertiary)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Deploy →
              </a>
            </div>
          </div>

          {/* Floating social proof tag */}
          <div
            style={{
              marginTop: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 20px',
              background: 'rgba(255,255,255,0.03)',
              border: '0.5px solid rgba(255,255,255,0.07)',
              borderRadius: 10,
              opacity: 0,
              animation: 'fadeUp 0.7s 1.0s forwards',
            }}
          >
            {/* Avatar stack */}
            <div style={{ display: 'flex', flexShrink: 0 }}>
              {['#7c3aed', '#b91c1c', '#1d4ed8', '#059669'].map((bg, i) => (
                <div
                  key={i}
                  style={{
                    width: 28, height: 28,
                    borderRadius: '50%',
                    background: bg,
                    border: '2px solid var(--color-primary)',
                    marginLeft: i === 0 ? 0 : -8,
                    fontSize: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    zIndex: 4 - i,
                    position: 'relative',
                  }}
                >
                  {['J', 'A', 'M', 'K'][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)', fontWeight: 500, marginBottom: 2 }}>
                Trusted by growth-stage brands
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.05em' }}>
                Nairobi · Lagos · Accra · London
              </div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="var(--color-tertiary)">
                  <path d="M5 0l1.12 3.09H9.5L6.69 5l1.12 3.09L5 6.18l-2.81 1.91L3.31 5 .5 3.09H3.88z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING ADS ── */}
      {!isMobile && (
        <HeroAds
          onOpenBlogArticle={(id) => navigate('/blog', { state: { openArticle: id } })}
        />
      )}

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: isMobile ? '0 24px 28px' : '0 60px 28px',
          zIndex: 3,
          opacity: 0,
          animation: 'fadeUp 0.8s 1.3s forwards',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="hero-scroll-line" />
          <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            Scroll
          </span>
        </div>

        <span style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.12)', textTransform: 'uppercase' }}>
          Est. 2025
        </span>
      </div>
    </section>
  )
}
