import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function BlogTeaser() {
  const preview = articles.slice(0, 3)

  return (
    <section
      id="blog-teaser"
      style={{
        background: 'var(--color-primary)',
        padding: '80px 60px',
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 40,
          flexWrap: 'wrap',
        }}
      >
        {/* Left */}
        <div className="reveal-left">
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 14,
            }}
          >
            From The Journal
          </div>
          <h2
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(28px,4vw,52px)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
            }}
          >
            The AI{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--color-secondary)' }}>
              Leverage
            </span>{' '}
            Journal
          </h2>
        </div>

        {/* Right */}
        <div
          className="reveal-right"
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 460,
            width: '100%',
          }}
        >
          {preview.map((article) => (
            <Link
              key={article.id}
              to="/blog"
              className="blog-teaser-post"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '20px 0',
                borderBottom: '0.5px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.4,
                  transition: 'color 0.2s',
                }}
              >
                {article.title}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.2)',
                  flexShrink: 0,
                  transition: 'color 0.2s, transform 0.2s',
                }}
              >
                ↗
              </span>
            </Link>
          ))}

          <Link
            to="/blog"
            style={{
              marginTop: 28,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
