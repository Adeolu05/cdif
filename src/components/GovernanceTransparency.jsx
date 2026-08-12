import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { orgDetails } from '../data/cdifData';

export default function GovernanceTransparency() {
  return (
    <section id="transparency" className="section-padding" style={{ backgroundColor: 'var(--cdif-bg-subtle)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="eyebrow eyebrow-primary" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={16} /> Governance & Audit
            </div>
            <h2 className="display-1" style={{ color: 'var(--cdif-text-heading)', marginBottom: '1.5rem' }}>
              Accountable to the Community
            </h2>
            <p className="body-editorial" style={{ marginBottom: '2rem' }}>
              We operate with full transparency. Every donation, every partnership, and every initiative is strictly monitored and reported.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="icon-container" style={{ backgroundColor: 'var(--cdif-primary-light)', color: 'var(--cdif-primary)', width: '32px', height: '32px' }}>
                  <Check size={16} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--cdif-text-heading)' }}>CAC Registered NGO</h4>
                  <p style={{ margin: 0, color: 'var(--cdif-text-body)', fontSize: '0.9rem' }}>Registration Number: {orgDetails.registration.number}</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="icon-container" style={{ backgroundColor: 'var(--cdif-primary-light)', color: 'var(--cdif-primary)', width: '32px', height: '32px' }}>
                  <Check size={16} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--cdif-text-heading)' }}>Audited Financials</h4>
                  <p style={{ margin: 0, color: 'var(--cdif-text-body)', fontSize: '0.9rem' }}>Quarterly financial reporting to our stakeholders.</p>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ padding: '3rem', backgroundColor: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-medium)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--cdif-text-heading)', marginBottom: '1.5rem' }}>Official Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Registered Name</div>
                <div style={{ fontWeight: 700, color: 'var(--cdif-text-heading)' }}>{orgDetails.name}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Board of Trustees</div>
                <div style={{ fontWeight: 600, color: 'var(--cdif-text-body)' }}>Registered under Part C of the Companies and Allied Matters Act.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
