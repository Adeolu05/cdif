import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { orgDetails } from '../data/cdifData';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function SafeguardingPage() {
  usePageMeta('Child Safeguarding', 'How to raise a concern about a child connected to CDIF, and what this website does not collect from children.');

  return (
    <div>
      <PageHero
        eyebrow={<><ShieldCheck size={16} aria-hidden="true" /> Safeguarding</>}
        title="Child Safeguarding"
        intro="CDIF's programmes involve children and the caregivers who look after them. This page is the public commitment for that work and for this website."
      />

      <section className="editorial-section section-surface">
        <div className="container">
          <div className="policy-copy">
            <h2>On this website</h2>
            <p>
              The site does not ask children to create an account or to send personal information. Stories do not give a child's full name. How the site handles other information is described in the <Link to="/privacy-policy">privacy policy</Link>.
            </p>

            <h2>Photographs</h2>
            <p>
              Some photographs show community activities that include children. A parent or caregiver can ask us to remove a photograph by emailing <a href={`mailto:${orgDetails.contact.email}`}>{orgDetails.contact.email}</a>.
            </p>

            <h2>Raising a concern</h2>
            <p>
              If you are worried about a child's safety in connection with CDIF's work, email {orgDetails.contact.email}. Include only what you are comfortable sharing. CDIF will keep the message private and reply to you.
            </p>

            <p className="policy-updated">Updated 18 November 2026.</p>
          </div>
        </div>
      </section>

      <style>{`
        .policy-copy {
          max-width: 760px;
        }
        .policy-copy h2 {
          font-size: 1.45rem;
          margin: 2rem 0 0.75rem;
        }
        .policy-copy h2:first-child {
          margin-top: 0;
        }
        .policy-copy p {
          color: var(--cdif-text-muted);
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }
        .policy-copy a {
          color: var(--cdif-primary);
          font-weight: 700;
          text-underline-offset: 3px;
        }
        .policy-updated {
          margin-top: 2rem;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
