import React from 'react';
import { orgDetails, leadershipTeam, fieldMedia } from '../data/cdifData';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      
      {/* Page Hero */}
      <section style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--cdif-bg-paper)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow eyebrow-gold">Our Organisational Story</div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              Restoring Values to Families. <br />
              <span style={{ color: 'var(--cdif-primary)' }}>Nurturing Children.</span>
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              {orgDetails.name} ({orgDetails.shortName}) is a registered community-based non-governmental organisation dedicated to building resilience in vulnerable households.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Full Bleed */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
            <img 
              src={fieldMedia.photos[4].src} 
              alt="Community outreach" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision (Alternating Editorial) */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8rem', alignItems: 'center' }} className="editorial-two-col">
            
            {/* Vision */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="editorial-two-col">
              <div style={{ order: 1 }}>
                <div className="eyebrow">Our Vision</div>
                <h2 className="display-1" style={{ marginBottom: '2rem' }}>A Future of Strong Communities</h2>
                <div className="pull-quote">
                  "{orgDetails.vision}"
                </div>
              </div>
              <div style={{ order: 2, position: 'relative' }}>
                <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={fieldMedia.photos[1].src} alt="Vision" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* Mission */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="editorial-two-col">
              <div style={{ order: 2 }}>
                <div className="eyebrow">Our Mission</div>
                <h2 className="display-1" style={{ marginBottom: '2rem' }}>Empowering the Caregiver</h2>
                <p className="body-editorial-large">
                  {orgDetails.mission}
                </p>
              </div>
              <div style={{ order: 1, position: 'relative' }}>
                <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <img src={fieldMedia.photos[0].src} alt="Mission" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-midnight)', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow eyebrow-gold" style={{ justifyContent: 'center' }}>Our Commitment</div>
            <h2 className="display-1" style={{ color: '#FFFFFF', marginBottom: '3rem' }}>
              Building Pathways out of Poverty
            </h2>
            <p className="body-editorial-large" style={{ color: 'rgba(255,255,255,0.9)' }}>
              {orgDetails.commitment}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <div className="eyebrow">Governance & Oversight</div>
            <h2 className="display-1">Leadership Team</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="leadership-grid">
            {leadershipTeam.map((leader, index) => (
              <div key={index} style={{ borderTop: '1px solid var(--cdif-hairline-strong)', paddingTop: '2rem' }}>
                <h3 className="display-3" style={{ marginBottom: '0.5rem' }}>{leader.name}</h3>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--cdif-primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {leader.title}
                </div>
                <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .editorial-two-col {
            grid-template-columns: 1fr 1fr !important;
          }
          .leadership-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
