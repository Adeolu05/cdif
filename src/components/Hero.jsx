import React from 'react';
import { ArrowRight, Heart, ShieldCheck } from 'lucide-react';
import { orgDetails, fieldMedia } from '../data/cdifData';

export default function Hero({ onOpenDonate, onOpenVolunteer, onOpenVideo }) {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      backgroundColor: 'var(--cdif-bg-paper)',
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-editorial-grid">
          
          {/* Left Column: Restrained Narrative & Mission Statement */}
          <div>
            {/* Single Eyebrow Badge */}
            <div className="eyebrow" title={orgDetails.registration.fullText}>
              <ShieldCheck size={15} color="var(--cdif-primary)" />
              <span>CAC Reg No. {orgDetails.registration.number} | {orgDetails.motto}</span>
            </div>

            {/* Powerful Display Headline */}
            <h1 className="display-1" style={{
              color: 'var(--cdif-text-heading)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.04em'
            }}>
              Strengthening Families. <br />
              <span style={{ color: 'var(--cdif-primary)' }}>Nurturing Children.</span> <br />
              Building Resilient Communities.
            </h1>

            <p className="body-editorial" style={{
              marginBottom: '2.5rem',
              maxWidth: '560px'
            }}>
              Strong families build strong communities. CDIF equips vulnerable caregivers with micro-grants, business tools, food security, and youth ICT skills—creating lasting pathways out of poverty.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '1.5rem' /* Reduced margin since stats are removed */
            }}>
              <button 
                onClick={onOpenDonate} 
                className="btn btn-editorial-primary"
              >
                <Heart size={16} fill="currentColor" />
                <span>Support Our Work</span>
              </button>

              <a href="#programmes" className="btn btn-editorial-outline">
                <span>Explore Our Work</span>
                <ArrowRight size={16} />
              </a>
            </div>


          </div>

          {/* Right Column: Authentic Editorial Photography */}
          <div style={{ position: 'relative' }}>
            <div className="img-editorial" style={{
              height: 'min(520px, 65vh)',
              border: '4px solid #FFFFFF',
              boxShadow: 'var(--shadow-medium)'
            }}>
              <img 
                src={fieldMedia.photos[5].src} 
                alt="CDIF Empowered Family Community Outreach" 
              />

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem 1.8rem 1.8rem 1.8rem',
                background: 'linear-gradient(to top, rgba(28, 11, 37, 0.92) 0%, rgba(28, 11, 37, 0) 100%)',
                color: '#FFFFFF'
              }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, color: 'var(--cdif-accent-gold)', marginBottom: '0.3rem' }}>
                  Restoring Values To Families
                </div>
                <div style={{ fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.4 }}>
                  "When you empower a caregiver, you secure a child's future."
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-section {
            min-height: calc(100vh - 64px); /* Account for header */
            height: auto;
          }
          .hero-editorial-grid {
            grid-template-columns: 1fr 0.9fr !important; /* ~52% text, ~48% image to fit user request */
          }
        }
        @media (min-width: 1366px) and (max-height: 800px) {
          /* Specific tweak for 1366x768 laptops to ensure no clipping */
          .hero-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .display-1 {
            font-size: 3.5rem !important;
            margin-bottom: 1rem !important;
          }
          .body-editorial {
            font-size: 1.05rem;
            margin-bottom: 1.8rem !important;
          }
          .img-editorial {
            height: min(480px, 60vh) !important;
          }
        }
      `}</style>
    </section>
  );
}
