import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// ── Shared styles ──────────────────────────────────────────────────────────
const label = (color = 'rgba(255,255,255,0.35)'): React.CSSProperties => ({
  fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color,
})
const sectionNum: React.CSSProperties = {
  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900,
  fontSize: 48, color: 'rgba(255,255,255,0.07)', letterSpacing: '-0.04em', lineHeight: 1,
}
const sectionTitle: React.CSSProperties = {
  fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900,
  fontSize: 22, textTransform: 'uppercase' as const, letterSpacing: '-0.02em',
  color: 'var(--color-secondary)', marginBottom: 24,
}
const body: React.CSSProperties = {
  fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, fontWeight: 300,
}
const tableHead: React.CSSProperties = {
  fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.35)', padding: '10px 16px',
  borderBottom: '0.5px solid rgba(255,255,255,0.1)', textAlign: 'left' as const,
}
const tableCell: React.CSSProperties = {
  fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '14px 16px',
  borderBottom: '0.5px solid rgba(255,255,255,0.06)', verticalAlign: 'top' as const,
  lineHeight: 1.65,
}
const checkItem = (color: string, text: string) => (
  <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
    <span style={{ color, fontSize: 15, flexShrink: 0, marginTop: 1 }}>{color === '#ff4d4d' ? '✕' : '✓'}</span>
    <span style={{ ...body }}>{text}</span>
  </li>
)

export default function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', fontFamily: "'DM Sans',sans-serif", minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        padding: '20px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.07)',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src="/logo.jpeg" alt="Codcentral" style={{ width: 36, height: 36, borderRadius: 6, objectFit: 'cover' }} />
          <span style={{ fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900, fontSize: 13, color: 'var(--color-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Codcentral</span>
        </Link>
        <Link to="/" style={{ ...label(), textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
        >← Back to Site</Link>
      </nav>

      {/* Hero */}
      <section style={{ padding: '140px 60px 72px', borderBottom: '0.5px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden' }}>
        <div className="noise-bg" style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}>
          <div style={{ ...label(), marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
            Legal · Privacy & Data Protection
          </div>
          <h1 style={{ fontFamily: "'Godens','Bebas Neue',sans-serif", fontWeight: 900, fontSize: 'clamp(44px,6vw,88px)', lineHeight: 0.88, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 28 }}>
            Data Privacy &{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-secondary)' }}>Protection</span>
            <br />Policy
          </h1>
          <p style={{ ...body, maxWidth: 560, color: 'rgba(255,255,255,0.45)' }}>
            Your business data is the engine of your success. We treat it like a vault, not a commodity.
            This policy explains exactly what we collect, why we collect it, what we never do with it,
            and your rights under the Kenya Data Protection Act (DPA) 2019.
          </p>
          <div style={{ marginTop: 20, fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
            Codcentral Studios · Last updated: 17 June 2026
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '80px 60px 120px' }}>

        {/* ── S1: What We Collect ── */}
        <PolicySection num="01" title="What We Collect">
          <p style={{ ...body, marginBottom: 24 }}>To build and operate your AI Lead Engine, we require access to:</p>
          <Table
            heads={['Data Category', 'Examples', 'Why We Need It']}
            rows={[
              ['Ad Account Access', 'Meta Business Suite, Google Ads', 'To build, run, and optimise your campaigns'],
              ['CRM Data', 'Past leads, client lists, transaction history', 'To train your AI agents on your ideal client profile'],
              ['Brand Assets', 'Logo, photos, brand guidelines', 'To generate on-brand ad variations'],
              ['Farm Area Data', 'Target neighbourhoods, zip codes', 'To configure hyper-targeting'],
              ['Lead Conversations', 'AI-to-lead WhatsApp/SMS chats', 'To qualify and score leads accurately'],
              ['Performance Metrics', 'CTR, CPL, lead volume, conversion rates', 'To report ROI and optimise your engine'],
              ['Contact Information', 'Business email, phone, designated WhatsApp', 'To deliver qualified leads and service updates'],
            ]}
          />
        </PolicySection>

        {/* ── S2: What We Never Do ── */}
        <PolicySection num="02" title="What We Never Do">
          <p style={{ ...body, marginBottom: 20 }}>We are not a data brokerage. We are your AI partner. As such:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {checkItem('#ff4d4d', 'We never sell, rent, or trade your lead data to any third party.')}
            {checkItem('#ff4d4d', 'We never use your client lists to market other services.')}
            {checkItem('#ff4d4d', 'We never cross-pollinate data between competing clients.')}
            {checkItem('#ff4d4d', 'We never retain your ad account credentials beyond the active service period.')}
            {checkItem('#ff4d4d', 'We never contact your leads directly outside the configured AI qualification flow.')}
          </ul>
        </PolicySection>

        {/* ── S3: How We Protect ── */}
        <PolicySection num="03" title="How We Protect Your Data">
          <p style={{ ...body, marginBottom: 24 }}>We apply bank-grade security thinking to your marketing data:</p>
          <Table
            heads={['Layer', 'Protection Applied']}
            rows={[
              ['Access Control', 'Only essential Codcentral Studios personnel access client accounts. Each client has isolated access permissions.'],
              ['Encryption', 'All data in transit uses TLS 1.3 encryption. Credentials and lead databases are encrypted at rest using AES-256.'],
              ['Authentication', 'Multi-factor authentication (MFA) is mandatory on all platforms handling client data.'],
              ['Platform Security', "We operate within Meta's and Google's enterprise-grade security infrastructure for ad management."],
              ['Device Security', 'All devices accessing client accounts are password-protected, encrypted, and remotely wipeable.'],
              ['Data Segregation', "Each client's AI agents, prompts, and lead data are logically separated. No shared pools. No cross-contamination."],
              ['Incident Response', 'In the unlikely event of a breach, we notify affected clients within 48 hours with a full incident report and remediation plan.'],
            ]}
          />
        </PolicySection>

        {/* ── S4: Retention & Deletion ── */}
        <PolicySection num="04" title="Data Retention & Deletion">
          <Table
            heads={['Data Type', 'Retention Period', 'Deletion Process']}
            rows={[
              ['Active Lead Conversations', 'Duration of active service + 90 days', 'Permanently purged from all systems'],
              ['AI Agent Configurations', 'Revert to Codcentral Studios upon termination', 'Client access revoked within 24 hours'],
              ['Performance Reports', 'Provided to client; our copies retained for 1 year', 'Securely deleted after 1 year'],
              ['Ad Account Access', 'Revoked within 48 hours of contract termination', 'Confirmation of removal sent to client'],
              ['Client Business Contact Info', 'Retained for 2 years for legal/tax purposes', 'Shredded/deleted after retention period'],
            ]}
          />
          <div style={{ marginTop: 24, padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: 6 }}>
            <p style={{ ...body }}><strong style={{ color: 'var(--color-secondary)', fontWeight: 500 }}>Client Data Export:</strong> Upon termination, your accumulated lead list is exported and delivered to you in CSV format within 7 days. That data is your property.</p>
          </div>
        </PolicySection>

        {/* ── S5: Your Rights ── */}
        <PolicySection num="05" title="Your Rights Under Kenya's DPA 2019">
          <p style={{ ...body, marginBottom: 20 }}>As our client, you have the legal right to:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {checkItem('#c5001a', 'Access — Request a full inventory of what data we hold about your business.')}
            {checkItem('#c5001a', 'Rectification — Correct any inaccurate or outdated information.')}
            {checkItem('#c5001a', 'Erasure — Request deletion of your data where retention is no longer necessary.')}
            {checkItem('#c5001a', 'Restriction — Limit how we process your data under certain conditions.')}
            {checkItem('#c5001a', 'Portability — Receive your lead data in a structured, machine-readable format (CSV/Excel).')}
            {checkItem('#c5001a', 'Objection — Object to processing in specific circumstances.')}
            {checkItem('#c5001a', 'Withdraw Consent — Revoke any previously granted permissions.')}
          </ul>
          <p style={{ ...body, marginTop: 20 }}>
            To exercise any of these rights, email{' '}
            <a href="mailto:work.codcentral@gmail.com" style={{ color: 'var(--color-secondary)' }}>work.codcentral@gmail.com</a>{' '}
            with the subject line <strong style={{ color: 'var(--color-secondary)', fontWeight: 500 }}>"Data Subject Request."</strong>{' '}
            We respond within 7 calendar days as required by law.
          </p>
        </PolicySection>

        {/* ── S6: AI Ethics ── */}
        <PolicySection num="06" title="AI Ethics & Transparency">
          <p style={{ ...body, marginBottom: 20 }}>Our AI agents operate under strict ethical guidelines:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {checkItem('#c5001a', 'Identity Disclosure: Our AI clearly identifies itself as an automated assistant representing your business. It never pretends to be human.')}
            {checkItem('#c5001a', 'Consent-Based: All conversations are opt-in. Leads engage voluntarily by responding to ads or messages.')}
            {checkItem('#c5001a', 'Bias Monitoring: We audit qualification logic monthly to ensure no discriminatory filtering based on gender, ethnicity, religion, or other protected characteristics under Kenyan law.')}
            {checkItem('#c5001a', 'Human Override: You always have the final say. If our AI disqualifies a lead you want, you can retrieve them.')}
            {checkItem('#c5001a', 'No Dark Patterns: Our AI does not manipulate, pressure, or deceive leads into engaging.')}
          </ul>
        </PolicySection>

        {/* ── S7: Third-Party Platforms ── */}
        <PolicySection num="07" title="Third-Party Platforms">
          <p style={{ ...body, marginBottom: 24 }}>We operate your campaigns on the following platforms. Each has its own privacy framework:</p>
          <Table
            heads={['Platform', 'Purpose', 'Privacy Policy']}
            rows={[
              ['Meta (Facebook/Instagram Ads)', 'Ad delivery & audience targeting', 'Meta Privacy Center'],
              ['Google Ads', 'Search/Display ad delivery', 'Google Privacy Policy'],
              ['WhatsApp Business API', 'Lead communication & qualification', 'WhatsApp Privacy Policy'],
              ['Make/Zapier (automation)', 'Workflow automation & data routing', 'Respective platform policies'],
            ]}
          />
          <p style={{ ...body, marginTop: 20 }}>Your data may transit through these platforms as necessary to deliver the service. We select only enterprise-grade partners with GDPR and DPA-compliant infrastructure.</p>
        </PolicySection>

        {/* ── S8: Children's Data ── */}
        <PolicySection num="08" title="Children's Data">
          <p style={{ ...body }}>Our services are designed for B2B lead generation. We do not knowingly collect, process, or store data from individuals under 18 years of age. If we discover such data has been inadvertently collected, it is immediately purged and the client is notified.</p>
        </PolicySection>

        {/* ── S9: Cross-Border Transfers ── */}
        <PolicySection num="09" title="Cross-Border Data Transfers">
          <p style={{ ...body, marginBottom: 16 }}>Some of our tools use cloud infrastructure hosted outside Kenya (e.g., AWS, Google Cloud). Where data leaves Kenyan jurisdiction, we ensure:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {checkItem('#c5001a', "The destination country has adequate data protection laws recognised by Kenya's Office of the Data Protection Commissioner (ODPC), OR")}
            {checkItem('#c5001a', 'Standard contractual clauses are in place binding the processor to equivalent protections.')}
          </ul>
        </PolicySection>

        {/* ── S10: DPO Contact ── */}
        <PolicySection num="10" title="Contact Our Data Protection Officer">
          <Table
            heads={['', '']}
            rows={[
              ['Email', 'privacy@codcentral.co.ke'],
              ['General Contact', 'work.codcentral@gmail.com'],
              ['Phone', '+254 754 138 667'],
              ['Office Hours', 'Mon–Fri, 9:00 AM – 5:00 PM EAT'],
              ['Physical Address', 'Nairobi, Kenya'],
            ]}
          />
          <p style={{ ...body, marginTop: 20 }}>
            You also have the right to lodge a complaint with the Office of the Data Protection
            Commissioner (ODPC) at{' '}
            <a href="https://www.odpc.go.ke" target="_blank" rel="noreferrer" style={{ color: 'var(--color-secondary)' }}>
              www.odpc.go.ke
            </a>.
          </p>
        </PolicySection>

        {/* ── S11: Policy Updates ── */}
        <PolicySection num="11" title="Policy Updates">
          <p style={{ ...body }}>We review this policy quarterly. If material changes occur, clients are notified via email 14 days before the changes take effect. Continued use of our services after updates constitutes acceptance.</p>
          <div style={{ marginTop: 28, padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: 6 }}>
            <p style={{ ...body, color: 'rgba(255,255,255,0.4)' }}>
              Codcentral Studios is a registered data processor under the Kenya Data Protection Act, 2019.
            </p>
          </div>
        </PolicySection>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)', padding: '32px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/terms" style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Terms & Conditions</Link>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Privacy Policy</span>
        </div>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>© 2025 Codcentral Studios</span>
      </footer>
    </div>
  )
}

// ── Reusable section wrapper ──────────────────────────────────────────────────
function PolicySection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '56px 0', borderBottom: '0.5px solid rgba(255,255,255,0.07)', display: 'grid', gridTemplateColumns: '72px 1fr', gap: 40 }}>
      <div style={{ ...sectionNum, paddingTop: 6 }}>{num}</div>
      <div>
        <h2 style={sectionTitle}>{title}</h2>
        {children}
      </div>
    </div>
  )
}

// ── Reusable table ────────────────────────────────────────────────────────────
function Table({ heads, rows }: { heads: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.02)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: 8 }}>
        <thead>
          <tr>
            {heads.map((h, i) => <th key={i} style={tableHead}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ ...tableCell, fontWeight: ci === 0 ? 500 : 300, color: ci === 0 ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.5)' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
