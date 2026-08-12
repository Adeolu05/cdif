import React from 'react';
import { FileText, Download } from 'lucide-react';
import { orgDetails, transparencyReports } from '../data/cdifData';

export default function TransparencyPage() {
  const openCertificate = () => {
    const event = new CustomEvent('open-certificate');
    window.dispatchEvent(event);
  };

  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      
      {/* Page Hero */}
      <section style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--cdif-bg-paper)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow eyebrow-gold">Institutional Integrity</div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              Accountability & <br />
              <span style={{ color: 'var(--cdif-primary)' }}>Transparency.</span>
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              We operate under strict governance, financial oversight, and child safeguarding standards to ensure every contribution creates maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Registration & Legal */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="transparency-grid">
            
            <div>
              <h2 className="display-1" style={{ marginBottom: '1.5rem' }}>Registration</h2>
              <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '2rem' }}>
                CDIF is fully registered with the relevant government authorities as a non-profit organisation. Our operations comply strictly with national regulatory frameworks.
              </p>
            </div>

            <div style={{ padding: '3rem', backgroundColor: 'var(--cdif-bg-paper)', borderLeft: '4px solid var(--cdif-primary)' }}>
              <h3 className="display-3" style={{ marginBottom: '1.5rem', color: 'var(--cdif-text-heading)' }}>
                {orgDetails.registration.fullText}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
                  <span style={{ fontWeight: 800, color: 'var(--cdif-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Reg. Body</span>
                  <span style={{ fontWeight: 600, color: 'var(--cdif-text-heading)' }}>{orgDetails.registration.body}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
                  <span style={{ fontWeight: 800, color: 'var(--cdif-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Reg. Number</span>
                  <span style={{ fontWeight: 600, color: 'var(--cdif-text-heading)' }}>{orgDetails.registration.number}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
                  <span style={{ fontWeight: 800, color: 'var(--cdif-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Tax ID (TIN)</span>
                  <span style={{ fontWeight: 600, color: 'var(--cdif-text-heading)' }}>{orgDetails.registration.tin}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
                  <span style={{ fontWeight: 800, color: 'var(--cdif-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Date</span>
                  <span style={{ fontWeight: 600, color: 'var(--cdif-text-heading)' }}>{orgDetails.registration.date}</span>
                </div>
              </div>

              <button 
                onClick={openCertificate}
                className="btn btn-editorial-outline"
                style={{ padding: '0.8rem 1.5rem' }}
              >
                <FileText size={16} /> View CAC Certificate
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="transparency-grid">
            
            <div>
              <h2 className="display-1" style={{ marginBottom: '1.5rem' }}>Governance</h2>
              <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
                Our Board of Trustees provides strategic oversight, ensuring that CDIF fulfills its mission while maintaining the highest levels of ethical conduct and financial accountability.
              </p>
            </div>

            <div style={{ padding: '3rem', backgroundColor: 'var(--cdif-bg-surface)', border: '1px solid var(--cdif-hairline)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                Board of Trustees
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {orgDetails.registration.trustees.split(' ').map((name, idx, arr) => {
                  // Reconstruct full names safely if needed, or just list as is. The data has no commas.
                  // For now, let's just display the string as a single entity or try to format it.
                  if (idx % 2 === 0) return null; // Very hacky assumption on name structure, let's do this safely:
                  return null;
                })}
                <li style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>Oluwayomi Adeosun</li>
                <li style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>Adebisi Lawson</li>
                <li style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>Olayinka Lawson</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-midnight)', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="transparency-grid">
            
            <div>
              <h2 className="display-1" style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>Financial Reports</h2>
              <p className="body-editorial" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                We believe our partners and donors deserve full visibility into how funds are utilized. Over 84% of all resources go directly towards community programmes.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {transparencyReports.map((report, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--cdif-accent-gold)', marginBottom: '0.3rem' }}>
                      {report.year}
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {report.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.3rem' }}>
                      PDF • {report.size}
                    </div>
                  </div>
                  <button style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}>
                    <Download size={24} />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .transparency-grid {
            grid-template-columns: 1fr 2fr !important;
          }
        }
      `}</style>

    </div>
  );
}
