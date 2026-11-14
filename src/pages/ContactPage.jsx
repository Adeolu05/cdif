import React from 'react';
import { Mail } from 'lucide-react';
import { orgDetails } from '../data/cdifData';
import FAQSection from '../components/FAQSection';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function ContactPage({ onOpenPartner, onOpenVolunteer }) {
  usePageMeta('Contact Us & FAQ', 'Reach the right CDIF desk by email, and find answers to common questions.');

  const desks = [
    ['General', orgDetails.contact.email],
    ['Partnerships', orgDetails.contact.partnershipsEmail],
    ['Volunteers', orgDetails.contact.volunteerEmail]
  ];

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title={<>We're here to <span style={{ color: 'var(--cdif-primary)' }}>listen & collaborate.</span></>}
        intro="Reach the right desk by email. Phone, WhatsApp, and a street address will appear here once CDIF verifies them."
      />

      <section className="editorial-section section-surface">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="contact-card">
            <span className="icon-badge" style={{ width: '56px', height: '56px' }} aria-hidden="true">
              <Mail size={24} />
            </span>
            <div style={{ minWidth: 0 }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Email Desks</h2>
              <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '1.5rem' }}>
                Write to the desk that matches your request.
              </p>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {desks.map(([label, email]) => (
                  <div key={label} className="desk-row">
                    <dt style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--cdif-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</dt>
                    <dd>
                      <a href={`mailto:${email}`} style={{ color: 'var(--cdif-primary)', fontWeight: 700, overflowWrap: 'anywhere', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                        {email}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
              {(onOpenPartner || onOpenVolunteer) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '2rem' }}>
                  {onOpenPartner && (
                    <button type="button" onClick={onOpenPartner} className="btn btn-editorial-outline">
                      Partner with us
                    </button>
                  )}
                  {onOpenVolunteer && (
                    <button type="button" onClick={onOpenVolunteer} className="btn btn-editorial-primary">
                      Volunteer
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <style>{`
        .contact-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2rem 1.5rem;
          background-color: var(--cdif-bg-paper);
          border-radius: var(--radius-lg);
          border: 1px solid var(--cdif-hairline);
        }
        .desk-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.15rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--cdif-hairline);
        }
        @media (min-width: 576px) {
          .contact-card {
            flex-direction: row;
            align-items: flex-start;
            padding: 2.5rem;
          }
          .desk-row {
            grid-template-columns: 140px 1fr;
            gap: 1rem;
            align-items: baseline;
          }
        }
      `}</style>
    </div>
  );
}
