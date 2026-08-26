const items = [
  { num: '120+', label: 'Hours Saved Per Client Monthly' },
  { num: '3×', label: 'Average Lead Conversion Lift' },
  { num: '48h', label: 'Average Deployment Time' },
  { num: '98%', label: 'Client Retention Rate' },
  { num: 'KSh 12M', label: 'Raised for NGO Client' },
  { num: '38', label: 'Leads in 2 Weeks' },
]

const doubled = [...items, ...items]

export default function Ticker() {
  return (
    <div
      id="ticker"
      style={{
        background: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: '20px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Godens','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 22,
              }}
            >
              {item.num}
            </span>
            {item.label}
            <span
              style={{
                width: 4,
                height: 4,
                background: 'var(--color-primary)',
                borderRadius: '50%',
                opacity: 0.3,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
