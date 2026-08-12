import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { coreProgrammes, megaIctIslandData } from '../data/cdifData';

export default function ProgrammesPage() {
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
            <div className="eyebrow eyebrow-gold">Our Programmes</div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              Interventions that <br />
              <span style={{ color: 'var(--cdif-primary)' }}>Create Lasting Impact.</span>
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              From emergency food relief to long-term economic empowerment, our programmes are designed to build resilience in vulnerable households.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programmes List */}
      <section className="editorial-section">
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {coreProgrammes.map((prog, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={prog.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '5rem',
                  alignItems: 'center'
                }} className="editorial-two-col">
                  
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                      <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>

                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                      0{idx + 1} — {prog.category}
                    </div>
                    <h3 className="display-3" style={{ marginBottom: '1.5rem', color: 'var(--cdif-text-heading)' }}>
                      {prog.title}
                    </h3>
                    <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '2.5rem' }}>
                      {prog.overview}
                    </p>

                    <Link 
                      to={`/programmes/${prog.id}`}
                      style={{ 
                        background: 'none', border: 'none', borderBottom: '2px solid var(--cdif-primary)', 
                        paddingBottom: '0.3rem', color: 'var(--cdif-primary)', fontWeight: 700, 
                        fontSize: '1.05rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        textDecoration: 'none'
                      }}
                    >
                      Read Full Story <ArrowRight size={16} />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* #MEGA ICT ISLAND Feature */}
      <section className="editorial-section" style={{
        backgroundColor: 'var(--cdif-bg-midnight)',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '5rem',
            alignItems: 'center'
          }} className="editorial-two-col">
            
            <div style={{ position: 'relative' }}>
              <Link 
                to="/programmes/mega-ict-island"
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  display: 'block',
                  position: 'relative'
                }}
              >
                <img 
                  src={megaIctIslandData.posterImage} 
                  alt="#MEGA ICT ISLAND Training Session" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                }}>
                  <div style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--cdif-accent-gold)',
                    color: 'var(--cdif-bg-midnight)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    transition: 'transform 0.3s ease'
                  }}>
                    <Play size={36} fill="currentColor" style={{ marginLeft: '6px' }} />
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--cdif-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                Signature Initiative
              </div>
              <h2 className="display-1" style={{ color: '#FFFFFF', marginBottom: '2rem' }}>
                {megaIctIslandData.hashtag}
              </h2>
              <p className="body-editorial-large" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem' }}>
                {megaIctIslandData.description}
              </p>
              
              <Link 
                to="/programmes/mega-ict-island"
                className="btn btn-editorial-outline-white"
                style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1rem', textDecoration: 'none' }}
              >
                Explore this Initiative
              </Link>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .editorial-two-col {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
