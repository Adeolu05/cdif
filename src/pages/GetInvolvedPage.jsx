import React from 'react';
import { Heart, Handshake, Users } from 'lucide-react';
import { fieldMedia } from '../data/cdifData';

export default function GetInvolvedPage({ onOpenVolunteer, onOpenPartner, onOpenDonate }) {
  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      
      {/* Page Hero */}
      <section style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--cdif-bg-paper)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <div className="eyebrow eyebrow-gold">Get Involved</div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              Your action changes <br />
              <span style={{ color: 'var(--cdif-primary)' }}>a family's trajectory.</span>
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              Strong communities are built through collective effort. Whether you invest financially, offer your expertise, or partner corporately, you are helping to secure a child's future.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            
            {/* Donate / Support */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="pathway-grid">
              <div style={{ order: 2 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'var(--cdif-primary-light)', borderRadius: '50%', color: 'var(--cdif-primary)', marginBottom: '1.5rem' }}>
                  <Heart size={24} />
                </div>
                <h2 className="display-1" style={{ marginBottom: '1.5rem' }}>Support Financially</h2>
                <p className="body-editorial" style={{ marginBottom: '2rem', color: 'var(--cdif-text-body)' }}>
                  Your donation directly funds our quarterly food drives, educational school kits, and micro-business equipment for vulnerable caregivers. Every contribution is tracked and audited.
                </p>
                <button onClick={onOpenDonate} className="btn btn-editorial-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                  Make a Donation
                </button>
              </div>
              <div style={{ order: 1, width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={fieldMedia.photos[0].src} alt="Support CDIF" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div className="hairline-divider"></div>

            {/* Partner */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="pathway-grid">
              <div style={{ order: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'rgba(245, 184, 0, 0.2)', borderRadius: '50%', color: 'var(--cdif-accent-gold-dark)', marginBottom: '1.5rem' }}>
                  <Handshake size={24} />
                </div>
                <h2 className="display-1" style={{ marginBottom: '1.5rem' }}>Corporate Partnership</h2>
                <p className="body-editorial" style={{ marginBottom: '2rem', color: 'var(--cdif-text-body)' }}>
                  We collaborate with forward-thinking organisations to execute high-impact CSR initiatives. From sponsoring our #MEGA ICT Bootcamp to co-funding community drives, let's align our values.
                </p>
                <button onClick={onOpenPartner} className="btn btn-editorial-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                  Partner With Us
                </button>
              </div>
              <div style={{ order: 2, width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={fieldMedia.photos[3].src} alt="Corporate Partnership" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div className="hairline-divider"></div>

            {/* Volunteer */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="pathway-grid">
              <div style={{ order: 2 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'var(--cdif-bg-subtle)', borderRadius: '50%', color: 'var(--cdif-text-muted)', marginBottom: '1.5rem' }}>
                  <Users size={24} />
                </div>
                <h2 className="display-1" style={{ marginBottom: '1.5rem' }}>Volunteer Expertise</h2>
                <p className="body-editorial" style={{ marginBottom: '2rem', color: 'var(--cdif-text-body)' }}>
                  We constantly need skilled professionals—educators, medical personnel, tech instructors, and logistics coordinators—to support our field operations. 
                </p>
                <button onClick={onOpenVolunteer} className="btn btn-editorial-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                  Apply to Volunteer
                </button>
              </div>
              <div style={{ order: 1, width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={fieldMedia.photos[5].src} alt="Volunteer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .pathway-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
