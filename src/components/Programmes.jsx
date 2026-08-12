import React from 'react';
import { ArrowRight } from 'lucide-react';
import { coreProgrammes } from '../data/cdifData';

export default function Programmes({ onOpenProgrammeDetail }) {
  return (
    <section id="programmes" className="section-padding" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <div className="eyebrow eyebrow-primary" style={{ marginBottom: '1rem' }}>Our Focus Areas</div>
          <h2 className="display-1" style={{ color: 'var(--cdif-text-heading)' }}>Capacity Development Programmes</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {coreProgrammes.map((prog) => (
            <div key={prog.id} style={{ backgroundColor: '#fff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)', display: 'flex', flexDirection: 'column' }}>
              <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-primary)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{prog.category}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--cdif-text-heading)', marginBottom: '1rem' }}>{prog.title}</h3>
                <p style={{ color: 'var(--cdif-text-body)', marginBottom: '1.5rem', flex: 1 }}>{prog.overview}</p>
                <button 
                  onClick={() => onOpenProgrammeDetail(prog)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cdif-primary)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
