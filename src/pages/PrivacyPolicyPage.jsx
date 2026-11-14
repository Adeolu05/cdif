import React from 'react';
import { ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function PrivacyPolicyPage() {
  usePageMeta('Privacy Policy', 'How CDIF handles the data of caregivers, sponsors, and partners.');

  return (
    <div>
      <PageHero
        eyebrow={<><ShieldCheck size={16} aria-hidden="true" /> Legal & Privacy</>}
        title="Privacy Policy"
        intro="Protecting the data of our caregivers, sponsors, and partners is a core operational priority for CDIF."
      />

      <section className="editorial-section section-surface">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 className="display-2" style={{ marginBottom: '1.5rem' }}>Our Commitment</h2>
            <p className="body-editorial" style={{ marginBottom: '1.5rem', color: 'var(--cdif-text-muted)' }}>
              A full privacy policy is still being written. This site does not collect form submissions. Email links open your own mail app. We do not sell personal information.
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
