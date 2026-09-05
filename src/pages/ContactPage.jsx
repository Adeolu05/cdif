import React from 'react';
import { Mail } from 'lucide-react';
import { orgDetails } from '../data/cdifData';
import FAQSection from '../components/FAQSection';

export default function ContactPage({ onOpenPartner, onOpenVolunteer }) {
  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      <section style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--cdif-bg-paper)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow eyebrow-gold">Get In Touch</div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              We're here to <br />
              <span style={{ color: 'var(--cdif-primary)' }}>listen & collaborate.</span>
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              Reach the right desk by email. Phone, WhatsApp, and a street address will appear here once CDIF verifies them.
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ padding: '2rem', backgroundColor: 'var(--cdif-bg-paper)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cdif-hairline)' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div className="icon-container" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--cdif-primary-light)', color: 'var(--cdif-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--cdif-text-heading)' }}>Email Desks</h3>
                <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '1rem' }}>
                  Write to the desk that matches your request.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href={`mailto:${orgDetails.contact.email}`} className="btn btn-editorial-outline" style={{ justifyContent: 'flex-start' }}>
                    <span style={{ color: 'var(--cdif-text-muted)', fontWeight: 400, width: '100px' }}>General:</span> {orgDetails.contact.email}
                  </a>
                  <a href={`mailto:${orgDetails.contact.partnershipsEmail}`} className="btn btn-editorial-outline" style={{ justifyContent: 'flex-start' }}>
                    <span style={{ color: 'var(--cdif-text-muted)', fontWeight: 400, width: '100px' }}>Partnerships:</span> {orgDetails.contact.partnershipsEmail}
                  </a>
                  <a href={`mailto:${orgDetails.contact.volunteerEmail}`} className="btn btn-editorial-outline" style={{ justifyContent: 'flex-start' }}>
                    <span style={{ color: 'var(--cdif-text-muted)', fontWeight: 400, width: '100px' }}>Volunteers:</span> {orgDetails.contact.volunteerEmail}
                  </a>
                </div>
                {(onOpenPartner || onOpenVolunteer) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.5rem' }}>
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
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
