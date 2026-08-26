import { useEffect, useState } from 'react'

interface SopEntry {
  id: number
  name: string
  fileName: string
  fileUrl: string
  uploadedAt: string
}

const STORAGE_KEY = 'codcentral-sops'

const loadStoredSops = (): SopEntry[] => {
  if (typeof window === 'undefined') return []

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function SOPManager() {
  const [sops, setSops] = useState<SopEntry[]>([])
  const [name, setName] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setSops(loadStoredSops())
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sops))
    }
  }, [sops])

  const canSave = Boolean(name.trim() && file)

  const handleSave = () => {
    const selectedFile = file

    if (!canSave || !selectedFile) {
      setError('Please enter an SOP name and choose a PDF file.')
      return
    }

    if (selectedFile.type !== 'application/pdf') {
      setError('Only PDF files are supported.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result as string
      const entry: SopEntry = {
        id: Date.now(),
        name: name.trim(),
        fileName: selectedFile.name,
        fileUrl: dataUrl,
        uploadedAt: new Date().toLocaleString(),
      }

      setSops((current) => [entry, ...current])
      setName('')
      setFile(null)
      setError('')
    }
    reader.readAsDataURL(selectedFile)
  }

  const handleRemove = (id: number) => {
    setSops((current) => current.filter((item) => item.id !== id))
  }

  return (
    <section
      id="sop-manager"
      style={{
        background: 'var(--color-primary)',
        color: 'var(--color-secondary)',
        padding: '120px 60px',
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
            SOP Library
          </div>
          <h2 style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 12 }}>
            Upload and manage SOP documents
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', maxWidth: 680 }}>
            Add an SOP name, upload a PDF, and save it. Anyone can open the PDF to view it or download it later.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 20, marginBottom: 36 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
              SOP Name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Onboarding Checklist"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', color: 'var(--color-secondary)', padding: '14px 16px', borderRadius: 6, fontSize: 14 }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
              Upload PDF
            </span>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ color: 'var(--color-secondary)', padding: '8px 0' }}
            />
          </label>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              type="button"
              onClick={handleSave}
              style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '12px 24px', borderRadius: 4, border: 'none', cursor: 'pointer', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Save SOP
            </button>
            {error ? <span style={{ color: 'var(--color-tertiary)', fontSize: 13 }}>{error}</span> : null}
          </div>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          {sops.length === 0 ? (
            <div style={{ border: '1px dashed rgba(255,255,255,0.2)', borderRadius: 8, padding: '24px', color: 'rgba(255,255,255,0.45)' }}>
              No SOPs saved yet.
            </div>
          ) : (
            sops.map((sop) => (
              <div key={sop.id} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '20px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16 }}>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>{sop.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{sop.fileName}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 6 }}>Uploaded: {sop.uploadedAt}</div>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href={sop.fileUrl} target="_blank" rel="noreferrer" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--color-secondary)', padding: '10px 16px', borderRadius: 4, textDecoration: 'none' }}>
                    View / Open
                  </a>
                  <a href={sop.fileUrl} download={sop.fileName} style={{ background: 'var(--color-tertiary)', color: 'var(--color-secondary)', padding: '10px 16px', borderRadius: 4, textDecoration: 'none' }}>
                    Download
                  </a>
                  <button type="button" onClick={() => handleRemove(sop.id)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.16)', color: 'rgba(255,255,255,0.7)', padding: '10px 16px', borderRadius: 4, cursor: 'pointer' }}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
