import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { coreProgrammes } from '../data/cdifData';

export default function ProgrammeDetailPage() {
  const { id } = useParams();
  const programme = coreProgrammes.find(p => p.id === id);

  // If the programme doesn't exist, redirect to the overview
  if (!programme) {
    return <Navigate to="/programmes" replace />;
  }

  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      
      {/* Detail Hero */}
      <section style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--cdif-bg-paper)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <div className="eyebrow eyebrow-gold">
              Programme — {programme.category}
            </div>
            <h1 className="display-1" style={{ marginBottom: '1.5rem', color: 'var(--cdif-text-heading)' }}>
              {programme.title}
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-primary)', fontWeight: 600 }}>
              {programme.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Primary Image Full Bleed */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-cinematic)' }}>
            <img 
              src={programme.image} 
              alt={programme.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Programme Deep Dive */}
      <section className="editorial-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }} className="programme-detail-grid">
            
            {/* Main Narrative */}
            <div>
              <h2 className="display-3" style={{ marginBottom: '2rem', color: 'var(--cdif-primary)' }}>What CDIF Does</h2>
              <p className="body-editorial-large" style={{ color: 'var(--cdif-text-body)' }}>
                {programme.overview}
              </p>
            </div>

            {/* Impact & Highlights Sidebar */}
            <div style={{ backgroundColor: 'var(--cdif-bg-surface)', padding: '3rem 2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cdif-hairline)' }}>
              <h3 className="display-3" style={{ marginBottom: '2rem', fontSize: '1.6rem' }}>Why it Matters</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {programme.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--cdif-accent-gold)', borderRadius: '50%', marginTop: '0.6rem', flexShrink: 0 }} />
                    <span className="body-editorial">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--cdif-hairline-strong)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cdif-text-muted)', marginBottom: '0.5rem' }}>
                  Current Impact
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--cdif-primary)' }}>
                  {programme.impactStat}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-primary-dark)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="display-1" style={{ color: '#FFFFFF', marginBottom: '2rem' }}>
            Help us expand this impact.
          </h2>
          <p className="body-editorial-large" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '3rem' }}>
            Your support directly funds equipment grants, learning materials, and resources that keep families resilient.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-involved" className="btn btn-editorial-gold" style={{ padding: '1rem 3rem', fontSize: '1.1rem', textDecoration: 'none' }}>
              Support this Programme
            </Link>
            <Link to="/programmes" className="btn btn-editorial-outline-white" style={{ padding: '1rem 3rem', fontSize: '1.1rem', textDecoration: 'none' }}>
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .programme-detail-grid {
            grid-template-columns: 3fr 2fr !important;
          }
        }
      `}</style>
    </div>
  );
}
