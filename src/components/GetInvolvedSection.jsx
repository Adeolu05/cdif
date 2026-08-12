import React from 'react';
import { ArrowRight, Handshake, Heart, UserPlus } from 'lucide-react';

export default function GetInvolvedSection({ onOpenVolunteer, onOpenDonate, onOpenPartner }) {
  return (
    <section id="get-involved" className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h2 className="display-1" style={{ color: 'var(--cdif-text-heading)' }}>Join the Living Story</h2>
          <p className="body-editorial" style={{ color: 'var(--cdif-text-body)' }}>
            We cannot do this alone. It takes a community to raise a community.
          </p>
        </div>
        
        <div className="get-involved-grid">
          {/* Volunteer */}
          <div style={{ backgroundColor: '#fff', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)' }}>
            <div className="icon-container" style={{ backgroundColor: 'var(--cdif-primary-light)', color: 'var(--cdif-primary)', width: '56px', height: '56px', marginBottom: '1.5rem' }}>
              <UserPlus size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--cdif-text-heading)', marginBottom: '1rem' }}>Volunteer</h3>
            <p style={{ color: 'var(--cdif-text-body)', marginBottom: '2rem', lineHeight: 1.6 }}>Join our field operatives and directly impact lives.</p>
            <button onClick={onOpenVolunteer} className="btn btn-editorial-outline">
              Apply Now <ArrowRight size={16} />
            </button>
          </div>
          
          {/* Donate */}
          <div style={{ backgroundColor: 'var(--cdif-text-heading)', color: '#fff', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-medium)' }}>
            <div className="icon-container" style={{ backgroundColor: 'var(--cdif-accent-gold)', color: 'var(--cdif-text-heading)', width: '56px', height: '56px', marginBottom: '1.5rem' }}>
              <Heart size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Donate</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: 1.6 }}>Fund our next outreach. Every contribution is tracked and verified.</p>
            <button onClick={onOpenDonate} className="btn btn-editorial-primary">
              Support Us <ArrowRight size={16} />
            </button>
          </div>
          
          {/* Partner */}
          <div style={{ backgroundColor: '#fff', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)' }}>
            <div className="icon-container" style={{ backgroundColor: 'rgba(245, 184, 0, 0.15)', color: 'var(--cdif-accent-gold-dark)', width: '56px', height: '56px', marginBottom: '1.5rem' }}>
              <Handshake size={28} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--cdif-text-heading)', marginBottom: '1rem' }}>Partner</h3>
            <p style={{ color: 'var(--cdif-text-body)', marginBottom: '2rem', lineHeight: 1.6 }}>Corporate sponsorships and institutional collaborations.</p>
            <button onClick={onOpenPartner} className="btn btn-editorial-outline">
              Collaborate <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .get-involved-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .get-involved-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
