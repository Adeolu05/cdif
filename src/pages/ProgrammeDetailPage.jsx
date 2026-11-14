import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { coreProgrammes } from '../data/cdifData';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function ProgrammeDetailPage() {
  const { id } = useParams();
  const programme = coreProgrammes.find(p => p.id === id);
  usePageMeta(programme?.title, programme?.subtitle);

  if (!programme) {
    return <Navigate to="/programmes" replace />;
  }

  return (
    <div>
      <PageHero
        backLink={{ to: '/programmes', label: 'All programmes' }}
        eyebrow={`Programme — ${programme.category}`}
        title={programme.title}
      >
        <p className="body-editorial-large" style={{ color: 'var(--cdif-primary)', fontWeight: 600 }}>
          {programme.subtitle}
        </p>
      </PageHero>

      <section style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="media-frame ratio-wide">
            <img 
              src={programme.image} 
              alt={programme.title} 
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container">
          <div className="programme-detail-grid">
            
            <div>
              <h2 className="display-3" style={{ marginBottom: '1.5rem', color: 'var(--cdif-primary)' }}>What CDIF Does</h2>
              <p className="body-editorial-large">
                {programme.overview}
              </p>
            </div>

            <div className="card" style={{ borderTop: '4px solid var(--cdif-accent-gold)' }}>
              <h2 className="display-3" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Why it Matters</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {programme.highlights.map((highlight) => (
                  <li key={highlight} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span aria-hidden="true" style={{ width: '6px', height: '6px', backgroundColor: 'var(--cdif-accent-gold)', borderRadius: '50%', marginTop: '0.65rem', flexShrink: 0 }} />
                    <span className="body-editorial">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--cdif-hairline-strong)' }}>
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

      <section className="editorial-section section-plum" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="display-2" style={{ marginBottom: '1.5rem' }}>
            Help us expand this impact.
          </h2>
          <p className="body-editorial-large" style={{ marginBottom: '2.5rem' }}>
            Your support directly funds equipment grants, learning materials, and resources that keep families resilient.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-involved" className="btn btn-editorial-gold btn-lg">
              Support this Programme
            </Link>
            <Link to="/programmes" className="btn btn-editorial-outline-white btn-lg">
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .programme-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 992px) {
          .programme-detail-grid {
            grid-template-columns: 3fr 2fr;
            gap: 5rem;
          }
        }
      `}</style>
    </div>
  );
}
