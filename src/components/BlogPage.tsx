import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ArticleOverlay from './ArticleOverlay'
import { articles, Article } from '../data/articles'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function BlogPage() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)
  const location = useLocation()
  useScrollReveal()

  // Auto-open article when navigated here with state { openArticle: 'id' }
  useEffect(() => {
    const state = location.state as { openArticle?: string } | null
    if (state?.openArticle) {
      const target = articles.find((a) => a.id === state.openArticle)
      if (target) setActiveArticle(target)
      // Clear the state so a back-navigation doesn't re-open it
      window.history.replaceState({}, '')
    }
  }, [location.state])

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeArticle])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main id="blog-page" tabIndex={-1}>
      <Nav />

      {/* Blog Hero */}
      <section
        id="blog-hero"
        style={{
          padding: '160px 60px 80px',
          background: 'var(--color-primary)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* noise */}
        <div
          className="noise-bg"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              width: 32,
              height: 1,
              background: 'rgba(255,255,255,0.3)',
              display: 'inline-block',
            }}
          />
          Insights & Strategies
        </div>
        <h1
          style={{
            fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(56px,7vw,112px)',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          The AI<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Leverage</span>
          <br />Journal
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.45)',
            fontWeight: 300,
            maxWidth: 520,
          }}
        >
          Expert thinking on AI agents, automation, and digital systems — written for
          African business owners who are serious about scaling.
        </p>
      </section>

      {/* Blog Grid */}
      <section
        id="blog-grid"
        style={{
          background: 'var(--color-primary)',
          padding: '80px 60px 120px',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: 48,
          }}
        >
          {articles.length} Articles — AI Agents · Automation · Digital Growth · Local Business
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 2,
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          {articles.map((article, i) => (
            <div
              key={article.id}
              className={`post-card reveal d${Math.min(i + 1, 6)}`}
              onClick={() => setActiveArticle(article)}
              style={{
                background: 'var(--color-primary)',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 1,
                    background: 'rgba(255,255,255,0.2)',
                    display: 'inline-block',
                  }}
                />
                {article.tag}
              </div>

              <h2
                style={{
                  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
                  fontWeight: 900,
                  fontSize: 22,
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  marginBottom: 16,
                  color: 'var(--color-secondary)',
                }}
              >
                {article.title}
              </h2>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.4)',
                  flex: 1,
                  marginBottom: 32,
                }}
              >
                {article.excerpt}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {article.readTime}
                </span>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.3)',
                    transition: 'all 0.3s',
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Article overlay */}
      <ArticleOverlay
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onOpenArticle={(a) => setActiveArticle(a)}
      />
    </main>
  )
}
