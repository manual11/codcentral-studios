import { useState, useEffect } from 'react'
import { modules } from '../data/modules'

// Each module gets a distinct accent colour for its tile
const accents = ['var(--color-secondary)', '#c5001a', '#00d4ff', '#ff6b35', '#a855f7']

export default function Modules() {
  const [active, setActive] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section
      id="modules"
      style={{
        background: 'var(--color-primary)',
        padding: isMobile ? '80px 0' : '120px 0',
      }}
    >
      {/* Header */}
      <div
        className="reveal"
        style={{ padding: isMobile ? '0 24px' : '0 60px', marginBottom: isMobile ? 48 : 72 }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 20,
          }}
        >
          What We Deploy
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <h2
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? 'clamp(36px,10vw,56px)' : 'clamp(40px,5vw,80px)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            Our{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: isMobile ? '1.5px var(--color-secondary)' : '2px var(--color-secondary)' }}>
              AI Systems
            </span>
          </h2>
          {!isMobile && (
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', maxWidth: 320, lineHeight: 1.6 }}>
              Five interconnected AI agents. Each one eliminates a specific bottleneck
              between your brand and revenue.
            </p>
          )}
        </div>
      </div>

      {/* Interaction hint */}
      <div
        className="reveal"
        style={{
          padding: isMobile ? '0 24px 20px' : '0 60px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span style={{
          width: 16,
          height: 1,
          background: 'rgba(255,255,255,0.2)',
          display: 'inline-block',
          flexShrink: 0,
        }} />
        <span style={{
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
        }}>
          {isMobile ? 'Tap any system to expand' : 'Click any system to expand'}
        </span>
      </div>

      {/* Tile grid */}
      <div
        style={{
          display: isMobile ? 'grid' : 'flex',
          gridTemplateColumns: isMobile ? '1fr' : undefined,
          gap: 2,
          background: 'rgba(255,255,255,0.06)',
          padding: isMobile ? '0' : '0 60px',
        }}
      >
        {modules.map((mod, i) => (
          <Tile
            key={mod.num}
            mod={mod}
            index={i}
            accent={accents[i]}
            isActive={active === i}
            isMobile={isMobile}
            onToggle={() => setActive(active === i ? null : i)}
          />
        ))}
      </div>

    </section>
  )
}

interface TileProps {
  mod: typeof modules[0]
  index: number
  accent: string
  isActive: boolean
  isMobile: boolean
  onToggle: () => void
}

function Tile({ mod, index, accent, isActive, isMobile, onToggle }: TileProps) {
  const [hovered, setHovered] = useState(false)
  const open = isActive || (!isMobile && hovered)

  return (
    <div
      className={`reveal d${Math.min(index + 1, 5)}`}
      onClick={onToggle}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      style={{
        background: open ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'background 0.4s, flex 0.5s cubic-bezier(0.16,1,0.3,1)',
        // On desktop: flex expand — open tile takes 3× width, others share the rest
        flex: isMobile ? undefined : open ? '3 0 0' : '1 0 0',
        minWidth: isMobile ? undefined : open ? 280 : 80,
      }}
    >
      {/* Accent top bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: open ? 2 : 0,
          background: accent,
          transition: 'height 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      {/* Accent left bar on mobile */}
      {isMobile && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: open ? 2 : 0,
            background: accent,
            transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      )}

      {/* Ghost number */}
      <div
        style={{
          position: 'absolute',
          bottom: -10,
          right: 16,
          fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
          fontWeight: 900,
          fontSize: isMobile ? 80 : 120,
          lineHeight: 1,
          color: open ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.05em',
          pointerEvents: 'none',
          transition: 'color 0.4s, font-size 0.4s',
          userSelect: 'none',
        }}
      >
        {mod.num}
      </div>

      {/* Content */}
      <div style={{
        padding: isMobile ? '32px 28px 32px 36px' : '40px 28px',
        position: 'relative',
        zIndex: 1,
        minHeight: isMobile ? 'auto' : 320,
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* System label */}
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: open ? accent : 'rgba(255,255,255,0.25)',
            marginBottom: 20,
            transition: 'color 0.35s',
          }}
        >
          {mod.label}
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--color-secondary)',
            lineHeight: 1.05,
            fontSize: isMobile ? 22 : open ? 22 : 15,
            marginBottom: open ? 28 : 16,
            transition: 'font-size 0.4s',
            ...((!isMobile && !open) ? {
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              whiteSpace: 'nowrap',
            } : {}),
          }}
        >
          {mod.title}
        </div>

        {/* Expandable content */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: open ? 600 : 0,
            opacity: open ? 1 : 0,
            transition: 'max-height 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.4s',
          }}
        >
          {/* Divider */}
          <div
            style={{
              width: 32,
              height: 1,
              background: accent,
              opacity: 0.4,
              marginBottom: 20,
            }}
          />

          {/* Features list */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {mod.features.map((f) => (
              <li
                key={f}
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.55)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: accent,
                    opacity: 0.6,
                    flexShrink: 0,
                    marginTop: 5,
                  }}
                />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA row */}
          <a
            href="/contact"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: accent,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Deploy This System →
          </a>
        </div>

        {/* Expand / collapse indicator — always visible */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {/* +/× toggle button */}
          <div
            style={{
              width: 28,
              height: 28,
              border: `1px solid ${open ? accent : 'rgba(255,255,255,0.18)'}`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'border-color 0.3s, background 0.3s, transform 0.4s',
              background: open ? accent : 'transparent',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              // Pulse only on first tile when collapsed, to teach the interaction
              animation: (!open && index === 0) ? 'tilePulse 2.5s ease-in-out infinite' : 'none',
            }}
          >
            <span
              style={{
                fontSize: 14,
                lineHeight: 1,
                color: open ? 'var(--color-primary)' : 'rgba(255,255,255,0.5)',
                fontWeight: 300,
                transition: 'color 0.3s',
                userSelect: 'none',
              }}
            >
              +
            </span>
          </div>

          {/* Label text */}
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: open ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.2)',
              transition: 'color 0.3s',
              whiteSpace: 'nowrap',
            }}
          >
            {open ? 'Collapse' : 'Explore'}
          </span>
        </div>
      </div>
    </div>
  )
}
