import React from 'react';
import { successStories } from '../data/cdifData';

export default function StorytellingSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--cdif-bg-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h2 className="display-1" style={{ color: 'var(--cdif-text-heading)' }}>Real Impact. Real People.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {successStories.map((story) => (
            <div key={story.id} style={{ backgroundColor: '#fff', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-medium)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '2rem', fontSize: '4rem', color: 'var(--cdif-accent-gold)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
              <p style={{ color: 'var(--cdif-text-heading)', fontSize: '1.1rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                {story.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--cdif-primary-light)', overflow: 'hidden' }}>
                  <img src={story.image} alt={story.caregiverName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--cdif-text-heading)' }}>{story.caregiverName}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--cdif-text-muted)' }}>{story.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
