const results = [
  { num: '38', label: 'Qualified leads in 2 weeks for a service business', context: 'Lead generation system' },
  { num: '3×', label: 'Average increase in WhatsApp enquiry conversion rate', context: 'AI customer service' },
  { num: '120h', label: 'Hours recovered per client monthly through automation', context: 'Operations automation' },
  { num: 'KSh 12M', label: 'Raised by an NGO in 6 months with a new digital presence', context: 'Digital presence system' },
]

export default function Results() {
  return (
    <section
      id="results"
      style={{
        background: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: '120px 60px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 80,
          flexWrap: 'wrap',
          gap: 32,
        }}
        className="reveal"
      >
        <h2
          style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(40px,5vw,72px)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}
        >
          Real Results
        </h2>
        <p
          style={{
            maxWidth: 320,
            fontSize: 14,
            color: 'rgba(0,0,0,0.5)',
            lineHeight: 1.7,
          }}
        >
          Numbers from actual client deployments. Not projections, not industry
          averages — real outcomes from real businesses.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: 2,
          background: 'rgba(0,0,0,0.1)',
        }}
      >
        {results.map((r, i) => (
          <div
            key={i}
            className={`result-cell reveal d${i + 1}`}
            style={{
              background: 'var(--color-secondary)',
              padding: 60,
            }}
          >
            <div
              style={{
                fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(48px,6vw,96px)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: 8,
              }}
            >
              {r.num}
            </div>
            <div
              style={{
                fontSize: 14,
                color: 'rgba(0,0,0,0.5)',
                lineHeight: 1.5,
                maxWidth: 280,
              }}
            >
              {r.label}
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'rgba(0,0,0,0.3)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: 8,
              }}
            >
              {r.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
