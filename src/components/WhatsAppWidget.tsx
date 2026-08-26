import { useState } from 'react'

const WA_NUMBER = '254754138667'
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hi%20Codcentral%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20AI%20systems.`

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  // Hide tooltip after 5 seconds
  useState(() => {
    const t = setTimeout(() => setTooltip(false), 5000)
    return () => clearTimeout(t)
  })

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 88, // sits above the cookie banner
        right: 24,
        zIndex: 9980,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexDirection: 'row-reverse',
      }}
    >
      {/* Main button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 8px 32px rgba(37,211,102,0.5)'
            : '0 4px 20px rgba(37,211,102,0.3)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s',
          textDecoration: 'none',
          flexShrink: 0,
          animation: 'waPulse 2.5s ease-in-out infinite',
        }}
      >
        {/* WhatsApp official icon */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--color-secondary)"
            d="M4.868 43.303l2.694-9.835a18.863 18.863 0 01-2.527-9.468C5.038 13.514 13.559 5 24.034 5a18.914 18.914 0 0113.438 5.561 18.887 18.887 0 015.552 13.427c-.004 10.472-8.526 18.986-18.99 18.986a19.01 19.01 0 01-9.073-2.308L4.868 43.303z"
          />
          <path
            fill="var(--color-secondary)"
            d="M4.868 43.803a.5.5 0 01-.482-.631l2.639-9.636a19.363 19.363 0 01-2.497-9.537C4.532 13.238 13.286 4.5 24.034 4.5a19.41 19.41 0 0113.794 5.712 19.383 19.383 0 015.697 13.776c-.004 10.741-8.759 19.485-19.491 19.485a19.5 19.5 0 01-9.299-2.368l-9.611 2.52a.503.503 0 01-.256.178z"
          />
          <path
            fill="#cfd8dc"
            d="M24.034 5a18.914 18.914 0 0113.438 5.561 18.887 18.887 0 015.552 13.427c-.004 10.472-8.526 18.986-18.99 18.986a19.01 19.01 0 01-9.073-2.308L4.868 43.303l2.694-9.835a18.863 18.863 0 01-2.527-9.468C5.038 13.514 13.559 5 24.034 5m0-1C13.003 4 4.038 12.957 4.035 23.999a19.878 19.878 0 002.53 9.622L3.96 43.441a1 1 0 001.223 1.213l10.044-2.633a19.97 19.97 0 009.805 2.565h.009c11.036 0 20.001-8.958 20.005-19.999a19.88 19.88 0 00-5.842-14.14A19.906 19.906 0 0024.034 4z"
          />
          <path
            fill="#40c351"
            d="M35.176 12.832a15.833 15.833 0 00-11.142-4.637c-8.698 0-15.78 7.076-15.783 15.774a15.756 15.756 0 002.112 7.908l.33.524-1.395 5.098 5.233-1.371.505.3a15.79 15.79 0 008.058 2.208h.006c8.698 0 15.78-7.077 15.783-15.776a15.732 15.732 0 00-4.707-11.028z"
          />
          <path
            fill="var(--color-secondary)"
            fillRule="evenodd"
            d="M19.268 16.045c-.355-.79-.728-.806-1.066-.82-.276-.012-.593-.011-.909-.011a1.745 1.745 0 00-1.265.594c-.435.476-1.661 1.622-1.661 3.956s1.7 4.59 1.937 4.906 3.282 5.259 8.104 7.161c4.007 1.58 4.823 1.266 5.693 1.187.87-.079 2.807-1.147 3.202-2.255.395-1.108.395-2.057.277-2.255-.119-.198-.435-.317-.909-.554s-2.807-1.384-3.242-1.542c-.435-.158-.751-.237-1.066.238-.316.474-1.222 1.542-1.498 1.858-.277.317-.554.357-1.028.119-.475-.238-2.002-.738-3.815-2.354-1.41-1.257-2.362-2.81-2.639-3.285-.277-.474-.03-.731.208-.968.213-.213.474-.554.712-.831.237-.277.316-.475.474-.792.158-.317.079-.594-.04-.831-.118-.237-1.054-2.58-1.47-3.521z"
          />
        </svg>
      </a>

      {/* Tooltip */}
      {tooltip && (
        <div style={{
          background: '#111',
          border: '0.5px solid rgba(255,255,255,0.12)',
          borderRadius: 6,
          padding: '10px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          animation: 'fadeUp 0.5s 0.3s both',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}>
          <span style={{
            fontSize: 12, fontWeight: 500, color: 'var(--color-secondary)',
            fontFamily: "'DM Sans',sans-serif",
          }}>
            Chat with us
          </span>
          <span style={{
            fontSize: 10, color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>
            Typically replies in minutes
          </span>
          {/* Tooltip arrow */}
          <div style={{
            position: 'absolute',
            right: -6,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0, height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '6px solid rgba(255,255,255,0.12)',
          }} />
        </div>
      )}
    </div>
  )
}
