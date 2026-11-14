import React from 'react';
import { ArrowRight, Handshake, Heart, UserPlus } from 'lucide-react';

export default function GetInvolvedSection({ onOpenVolunteer, onOpenDonate, onOpenPartner }) {
  return (
    <section id="get-involved" className="editorial-section section-subtle">
      <div className="container">
        <div className="section-intro-centered">
          <div className="eyebrow eyebrow-accent">Get Involved</div>
          <h2 className="display-2" style={{ marginBottom: '1rem' }}>Join the Living Story</h2>
          <p className="body-editorial" style={{ color: 'var(--cdif-text-body)' }}>
            We cannot do this alone. It takes a community to raise a community.
          </p>
        </div>
        
        <div className="get-involved-grid">
          <div className="card get-involved-card reveal">
            <span className="icon-badge" style={{ width: '56px', height: '56px' }} aria-hidden="true">
              <UserPlus size={26} />
            </span>
            <h3>Volunteer</h3>
            <p style={{ color: 'var(--cdif-text-body)' }}>Join our field operatives and directly impact lives.</p>
            <button type="button" onClick={onOpenVolunteer} className="btn btn-editorial-outline">
              Apply Now <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          
          <div className="card get-involved-card get-involved-featured reveal">
            <span className="icon-badge" style={{ width: '56px', height: '56px', backgroundColor: 'var(--cdif-accent-gold)', color: 'var(--cdif-bg-midnight)' }} aria-hidden="true">
              <Heart size={26} />
            </span>
            <h3>Donate</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.82)' }}>Fund our next food drive, school kits, or a caregiver's livelihood tools.</p>
            <button type="button" onClick={onOpenDonate} className="btn btn-editorial-gold">
              Support Us <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          
          <div className="card get-involved-card reveal">
            <span className="icon-badge icon-badge-gold" style={{ width: '56px', height: '56px' }} aria-hidden="true">
              <Handshake size={26} />
            </span>
            <h3>Partner</h3>
            <p style={{ color: 'var(--cdif-text-body)' }}>Corporate sponsorships and institutional collaborations.</p>
            <button type="button" onClick={onOpenPartner} className="btn btn-editorial-outline">
              Collaborate <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .get-involved-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .get-involved-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
        .get-involved-card h3 {
          margin-top: 0.5rem;
          font-size: 1.4rem;
          font-weight: 800;
        }
        .get-involved-card p {
          margin-bottom: 1rem;
        }
        .get-involved-card .btn {
          margin-top: auto;
        }
        .get-involved-featured {
          background-color: var(--cdif-bg-midnight);
          border-color: var(--cdif-bg-midnight);
          box-shadow: var(--shadow-medium);
        }
        .get-involved-featured h3 {
          color: #FFFFFF;
        }
        @media (min-width: 900px) {
          .get-involved-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
