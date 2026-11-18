import React from 'react';
import GetInvolvedSection from '../components/GetInvolvedSection';
import { Sparkles, Play, CheckCircle } from 'lucide-react';
import { megaIctIslandData } from '../data/cdifData';
import usePageMeta from '../hooks/usePageMeta';

export default function MegaIctIslandPage({ onOpenVideoModal, onOpenPartner, onOpenDonate }) {
  usePageMeta('#MEGA ICT ISLAND', megaIctIslandData.description);

  return (
    <div>
      {/* Cinematic Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src={megaIctIslandData.posterImage} 
            alt=""
            fetchPriority="high"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(28, 11, 37, 0.95) 0%, rgba(28, 11, 37, 0.72) 100%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, color: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow eyebrow-gold" style={{ marginBottom: '1.5rem' }}>
              <Sparkles size={16} aria-hidden="true" /> Youth Empowerment Initiative
            </div>
            
            <h1 className="display-1" style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>
              {megaIctIslandData.hashtag}
            </h1>
            
            <p className="body-editorial-large" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem' }}>
              {megaIctIslandData.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button 
                type="button"
                onClick={() => onOpenVideoModal(megaIctIslandData.videoSrc, megaIctIslandData.title)} 
                className="btn btn-editorial-gold btn-lg"
              >
                <Play size={18} fill="currentColor" aria-hidden="true" /> Watch Day 1
              </button>
              
              <button type="button" onClick={onOpenDonate} className="btn btn-editorial-outline-white btn-lg">
                Sponsor a Teenager
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Strip */}
      <section style={{ backgroundColor: 'var(--cdif-accent-gold)', padding: '2.5rem 0' }}>
        <div className="container">
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {megaIctIslandData.stats.map((stat) => (
              <div key={stat.label} style={{ borderLeft: '2px solid rgba(0,0,0,0.12)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
                <dt style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(28, 11, 37, 0.75)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </dt>
                <dd style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--cdif-bg-midnight)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="display-2" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>The Curriculum</h2>
            <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '3rem', textAlign: 'center' }}>
              Our intensive curriculum is designed to take students with zero prior computer experience and turn them into digitally literate individuals capable of navigating modern tech environments.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {megaIctIslandData.highlights.map((highlight) => (
                <li key={highlight} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', backgroundColor: '#fff', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)' }}>
                  <CheckCircle size={26} color="var(--cdif-primary)" style={{ flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontSize: '1.1rem', color: 'var(--cdif-text-heading)', fontWeight: 600, lineHeight: 1.5 }}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GetInvolvedSection 
        onOpenPartner={onOpenPartner}
        onOpenDonate={onOpenDonate}
      />
    </div>
  );
}
