import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { impactMetrics, successStories, fieldMedia } from '../data/cdifData';

export default function ImpactPage({ onOpenStoryModal }) {
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
            <div className="eyebrow eyebrow-gold">Field Impact & Evidence</div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              Measuring What Matters: <br />
              <span style={{ color: 'var(--cdif-primary)' }}>Human Outcomes.</span>
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              Behind every statistic is a caregiver equipped to provide, and a child empowered to learn. This is our verified footprint across the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Metrics Presentation (Non-Dashboard) */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-midnight)', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem'
          }} className="impact-grid">
            
            {impactMetrics.map((metric, idx) => (
              <div key={metric.id} style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                paddingTop: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', color: 'var(--cdif-accent-gold)' }}>
                  <span style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1 }}>{metric.count.toLocaleString()}</span>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{metric.suffix}</span>
                </div>
                <h3 className="display-3" style={{ color: '#FFFFFF', marginTop: '1rem', marginBottom: '1rem' }}>
                  {metric.label}
                </h3>
                <p className="body-editorial" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {metric.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Documentary Stories */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <div className="eyebrow">The Living Record</div>
            <h2 className="display-1">Voices of Resilience</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {successStories.map((story, idx) => {
              const isEven = idx % 2 === 0;
              // Use appropriate field media depending on index for visual richness
              const storyImage = isEven ? fieldMedia.photos[3].src : fieldMedia.photos[2].src;

              return (
                <div key={story.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '5rem',
                  alignItems: 'center'
                }} className="editorial-two-col">
                  
                  <div style={{ order: isEven ? 1 : 2, position: 'relative' }}>
                    <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                      <img src={storyImage} alt={story.caregiverName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>

                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                      {story.location}
                    </div>
                    
                    <div className="pull-quote" style={{ fontSize: '1.6rem', marginBottom: '2.5rem' }}>
                      "{story.quote}"
                    </div>

                    <p className="body-editorial" style={{ color: 'var(--cdif-text-body)', marginBottom: '2.5rem' }}>
                      {story.fullStory}
                    </p>

                    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--cdif-hairline-strong)' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--cdif-text-heading)' }}>
                        {story.caregiverName}
                      </div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--cdif-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                        {story.role}
                      </div>
                    </div>

                    <button 
                      onClick={() => onOpenStoryModal(story)}
                      style={{ 
                        marginTop: '2.5rem', background: 'none', border: 'none', borderBottom: '2px solid var(--cdif-text-heading)', 
                        paddingBottom: '0.3rem', color: 'var(--cdif-text-heading)', fontWeight: 700, 
                        fontSize: '1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                      }}
                    >
                      View Documentary Record <ArrowUpRight size={16} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 992px) {
          .editorial-two-col {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
