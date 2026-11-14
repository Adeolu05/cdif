import React from 'react';
import { FileText, Download, BadgeCheck } from 'lucide-react';
import { orgDetails, transparencyReports } from '../data/cdifData';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function TransparencyPage({ onOpenCertificate }) {
  usePageMeta('Transparency & Governance', 'CDIF registration details, board of trustees, and published financial reports.');

  const facts = [
    ['Reg. Body', orgDetails.registration.body],
    ['Reg. Number', orgDetails.registration.number],
    ['Tax ID (TIN)', orgDetails.registration.tin],
    ['Date', orgDetails.registration.date]
  ];

  return (
    <div>
      <PageHero
        eyebrow="Institutional Integrity"
        title={<>Accountability & <span style={{ color: 'var(--cdif-primary)' }}>Transparency.</span></>}
        intro="How CDIF is registered, who oversees it, and where its financial reports will be published."
      />

      <section className="editorial-section section-surface">
        <div className="container">
          <div className="transparency-grid">
            
            <div>
              <h2 className="display-2" style={{ marginBottom: '1.25rem' }}>Registration</h2>
              <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
                CDIF is registered with the Corporate Affairs Commission as a non-profit, community-based organisation.
              </p>
            </div>

            <div className="card reveal" style={{ borderTop: '4px solid var(--cdif-primary)' }}>
              <span className="icon-badge" aria-hidden="true" style={{ marginBottom: '1.25rem' }}>
                <BadgeCheck size={24} />
              </span>
              <h3 className="display-3" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                {orgDetails.registration.fullText}
              </h3>
              
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: onOpenCertificate ? '2.5rem' : 0 }}>
                {facts.map(([label, value]) => (
                  <div key={label} className="fact-row">
                    <dt style={{ fontWeight: 800, color: 'var(--cdif-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>{label}</dt>
                    <dd style={{ fontWeight: 600, color: 'var(--cdif-text-heading)' }}>{value}</dd>
                  </div>
                ))}
              </dl>

              {onOpenCertificate && (
                <button type="button" onClick={onOpenCertificate} className="btn btn-editorial-outline">
                  <FileText size={16} aria-hidden="true" /> View CAC Certificate
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container">
          <div className="transparency-grid">
            
            <div>
              <h2 className="display-2" style={{ marginBottom: '1.25rem' }}>Governance</h2>
              <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
                Our Board of Trustees provides strategic oversight, ensuring that CDIF fulfils its mission with ethical conduct and financial accountability.
              </p>
            </div>

            <div className="card reveal">
              <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                Board of Trustees
              </h3>
              <ul className="trustee-list">
                {orgDetails.registration.trustees.map((name) => (
                  <li key={name}>
                    <span className="trustee-initials" aria-hidden="true">
                      {name.split(' ').map((part) => part[0]).join('')}
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="editorial-section section-dark">
        <div className="container">
          <div className="transparency-grid">
            
            <div>
              <h2 className="display-2" style={{ marginBottom: '1.25rem' }}>Financial Reports</h2>
              <p className="body-editorial">
                Audit PDFs will be listed here with a working download once CDIF publishes them. Titles below are reserved for those releases.
              </p>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {transparencyReports.map((report) => (
                <li key={report.title} className="card-dark report-row">
                  <span className="icon-badge icon-badge-on-dark" aria-hidden="true">
                    <FileText size={22} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--cdif-accent-gold)', marginBottom: '0.3rem' }}>
                      {report.year}
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {report.title}
                    </div>
                    {report.size && (
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.3rem' }}>
                        PDF • {report.size}
                      </div>
                    )}
                  </div>
                  {report.href ? (
                    <a href={report.href} download style={{ color: '#FFFFFF' }} aria-label={`Download ${report.title}`}>
                      <Download size={24} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="report-pending">Awaiting file</span>
                  )}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      <style>{`
        .transparency-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .fact-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.15rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--cdif-hairline);
        }
        .fact-row:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        .trustee-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .trustee-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--cdif-text-heading);
        }
        .trustee-initials {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--cdif-primary);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.02em;
        }
        .report-row {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          padding: 1.25rem 1.5rem;
        }
        .report-pending {
          flex-shrink: 0;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--cdif-hairline-dark);
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.75);
          white-space: nowrap;
        }
        @media (min-width: 576px) {
          .fact-row {
            grid-template-columns: 130px 1fr;
            gap: 1rem;
          }
        }
        @media (min-width: 992px) {
          .transparency-grid {
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
