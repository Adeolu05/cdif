import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      {/* Page Hero */}
      <section className="hero-section" style={{
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        backgroundColor: 'var(--cdif-bg-paper)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow eyebrow-gold">
              <ShieldCheck size={16} /> Legal & Privacy
            </div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              Privacy Policy
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              Protecting the data of our caregivers, sponsors, and partners is a core operational priority for CDIF.
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 className="display-1" style={{ marginBottom: '1.5rem' }}>Our Commitment</h2>
            <p className="body-editorial" style={{ marginBottom: '2.5rem', color: 'var(--cdif-text-muted)' }}>
              We are currently finalizing our comprehensive digital privacy policy to comply with data protection regulations. 
              Rest assured that any data collected through this platform is used strictly for communication, processing donations, 
              and facilitating volunteer applications. We do not sell or distribute personal information to third parties.
            </p>
            <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
              For any urgent inquiries regarding data handling, please contact us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
