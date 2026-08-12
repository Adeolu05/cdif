import React from 'react';
import { Play } from 'lucide-react';
import { fieldMedia, megaIctIslandData } from '../data/cdifData';

export default function MegaIctIslandSection({ onOpenVideoModal }) {
  return (
    <section id="mega-ict" className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-midnight)', color: '#FFFFFF' }}>
      <div className="container">
        <div className="mega-ict-grid">
          <div>
            <div className="eyebrow eyebrow-gold" style={{ marginBottom: '1rem' }}>Featured Initiative</div>
            <h2 className="display-1" style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>#MEGA ICT ISLAND</h2>
            <p className="body-editorial" style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem' }}>
              Bridging the digital divide for underserved youth. This immersive training bootcamp equips participants with high-income tech skills, from web development to data analysis, entirely free of charge.
            </p>
            <button onClick={() => onOpenVideoModal && onOpenVideoModal(fieldMedia.megaIctVideo)} className="btn btn-editorial-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 1.8rem' }}>
              <Play size={18} fill="currentColor" /> Watch Documentary
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <img src={megaIctIslandData.posterImage} alt="Mega ICT Island Training" style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.2)' }} />
              <button 
                onClick={() => onOpenVideoModal && onOpenVideoModal(fieldMedia.megaIctVideo)}
                className="icon-container video-play-btn"
                style={{ 
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '80px', height: '80px', backgroundColor: 'var(--cdif-accent-gold)', color: 'var(--cdif-bg-midnight)',
                  borderRadius: '50%', cursor: 'pointer', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .mega-ict-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        .video-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.05) !important;
        }
        @media (min-width: 992px) {
          .mega-ict-grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
}
