import { useEffect, useRef } from 'react'
import { Article, articles } from '../data/articles'

interface Props {
  article: Article | null
  onClose: () => void
  onOpenArticle?: (article: Article) => void
}

export default function ArticleOverlay({ article, onClose, onOpenArticle }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Scroll to top when new article opens
  useEffect(() => {
    if (article && overlayRef.current) {
      overlayRef.current.scrollTop = 0
    }
  }, [article])

  // Handle data-article link clicks inside rendered HTML body
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-article]') as HTMLElement | null
      if (!target) return
      e.preventDefault()
      const id = target.getAttribute('data-article')
      if (!id) return
      const found = articles.find((a) => a.id === id)
      if (found && onOpenArticle) onOpenArticle(found)
    }

    overlay.addEventListener('click', handleClick)
    return () => overlay.removeEventListener('click', handleClick)
  }, [onOpenArticle])

  return (
    <div
      ref={overlayRef}
      className={`article-overlay ${article ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={article ? article.title : 'Article'}
      aria-labelledby={article ? 'article-overlay-title' : undefined}
      aria-describedby={article ? 'article-overlay-body' : undefined}
    >
      {/* Close button */}
      <button
        type="button"
        aria-label="Close article"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 28,
          right: 60,
          width: 44,
          height: 44,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          cursor: 'pointer',
          color: 'var(--color-secondary)',
          background: 'transparent',
          zIndex: 2100,
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--color-secondary)'
          e.currentTarget.style.color = 'var(--color-primary)'
          e.currentTarget.style.borderColor = 'var(--color-secondary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = 'var(--color-secondary)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
        }}
      >
        ✕
      </button>

      {article && (
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '120px 40px 80px',
          }}
        >
          {/* Tag */}
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1,
                background: 'rgba(255,255,255,0.2)',
                display: 'inline-block',
              }}
            />
            {article.tag}
          </div>

          {/* Title */}
          <h1
            id="article-overlay-title"
            style={{
              fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(40px,5vw,72px)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            {article.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: 'flex',
              gap: 32,
              marginBottom: 56,
              paddingBottom: 32,
              borderBottom: '0.5px solid rgba(255,255,255,0.08)',
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {article.date}
            </span>
            <span
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {article.readTime}
            </span>
          </div>

          {/* Body — uses dangerouslySetInnerHTML to render the HTML from our articles data */}
          <div
            id="article-overlay-body"
            className="article-body-content"
            dangerouslySetInnerHTML={{ __html: article.body }}
            style={{
              fontSize: 16,
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 300,
            }}
          />
        </div>
      )}
    </div>
  )
}
