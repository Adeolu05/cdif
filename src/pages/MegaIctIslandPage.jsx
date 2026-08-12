import React from 'react';
import GetInvolvedSection from '../components/GetInvolvedSection';
import { Sparkles, Play, CheckCircle } from 'lucide-react';
import { megaIctIslandData } from '../data/cdifData';

export default function MegaIctIslandPage({ onOpenVideoModal, onOpenVolunteer, onOpenPartner, onOpenDonate }) {
  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      {/* Cinematic Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        overflow: 'hidden'
      }}>
        {/* Background Image & Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 0
        }}>
          <img 
            src={megaIctIslandData.posterImage} 
            alt="Mega ICT Island Bootcamp"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to right, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.7) 100%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, color: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow eyebrow-gold" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} /> Youth Empowerment Initiative
            </div>
            
            <h1 className="display-1" style={{ color: '#FFFFFF', marginBottom: '1.5rem', fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
              {megaIctIslandData.hashtag}
            </h1>
            
            <p className="body-editorial-large" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '3rem', fontSize: '1.25rem' }}>
              {megaIctIslandData.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenVideoModal(megaIctIslandData.videoSrc, megaIctIslandData.title)} 
                className="btn btn-editorial-gold"
                style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
              >
                <Play size={20} fill="currentColor" /> Watch Documentary
              </button>
              
              <button onClick={onOpenDonate} className="btn btn-editorial-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>
                Sponsor a Teenager
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Strip */}
      <section style={{ backgroundColor: 'var(--cdif-accent-gold)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {megaIctIslandData.stats.map((stat, idx) => (
              <div key={idx} style={{ borderLeft: '2px solid rgba(0,0,0,0.1)', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--cdif-bg-midnight)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(0,0,0,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="display-1" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>The Curriculum</h2>
            <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '3.5rem', textAlign: 'center' }}>
              Our intensive curriculum is designed to take students with zero prior computer experience and turn them into digitally literate individuals capable of navigating modern tech environments.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {megaIctIslandData.highlights.map((highlight, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', backgroundColor: '#fff', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)' }}>
                  <CheckCircle size={28} color="var(--cdif-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.15rem', color: 'var(--cdif-text-heading)', fontWeight: 600, lineHeight: 1.5 }}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <GetInvolvedSection 
        onOpenVolunteer={onOpenVolunteer}
        onOpenPartner={onOpenPartner}
        onOpenDonate={onOpenDonate}
      />
    </div>
  );
}
