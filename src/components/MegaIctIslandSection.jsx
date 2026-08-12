import React from 'react';
import { Play } from 'lucide-react';
import { fieldMedia } from '../data/cdifData';

export default function MegaIctIslandSection({ onOpenVideo }) {
  return (
    <section id="mega-ict" className="section-padding" style={{ backgroundColor: 'var(--cdif-text-heading)', color: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="eyebrow eyebrow-gold" style={{ marginBottom: '1rem' }}>Featured Initiative</div>
            <h2 className="display-1" style={{ marginBottom: '1.5rem' }}>#MEGA ICT ISLAND</h2>
            <p className="body-editorial" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
              Bridging the digital divide for underserved youth. This immersive training bootcamp equips participants with high-income tech skills, from web development to data analysis, entirely free of charge.
            </p>
            <button onClick={() => onOpenVideo(fieldMedia.megaIctVideo)} className="btn btn-editorial-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={16} fill="currentColor" /> Watch Documentary
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src={fieldMedia.megaIctHero} alt="Mega ICT Island Training" style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.2)' }} />
              <button 
                onClick={() => onOpenVideo(fieldMedia.megaIctVideo)}
                className="icon-container"
                style={{ 
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '80px', height: '80px', backgroundColor: 'var(--cdif-accent-gold)', color: 'var(--cdif-text-heading)',
                  borderRadius: '50%', cursor: 'pointer', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
