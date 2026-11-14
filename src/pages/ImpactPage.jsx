import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { impactMetrics, successStories } from '../data/cdifData';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import Photo from '../components/Photo';

export default function ImpactPage({ onOpenStoryModal }) {
  usePageMeta('Field Impact & Stories', 'What CDIF delivers for caregivers and children, and the voices of the families we support.');

  return (
    <div>
      <PageHero
        eyebrow="Field Impact & Evidence"
        title={<>Measuring What Matters: <span style={{ color: 'var(--cdif-primary)' }}>Human Outcomes.</span></>}
        intro="Behind every figure is a caregiver equipped to provide, and a child empowered to learn. Broader outcome totals will be published once they have been independently audited."
      />

      <section className="editorial-section section-dark">
        <div className="container">
          <div className="impact-grid">
            {impactMetrics.map((metric) => (
              <div key={metric.id} className="card-dark reveal" style={{ borderTop: '3px solid var(--cdif-accent-gold)' }}>
                <div className="impact-value">{metric.value}</div>
                <h2 className="display-3" style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                  {metric.label}
                </h2>
                <p className="body-editorial">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container">
          <div className="section-intro-centered">
            <div className="eyebrow eyebrow-accent">The Living Record</div>
            <h2 className="display-2">Voices of Resilience</h2>
          </div>

          <div className="editorial-rows">
            {successStories.map((story, idx) => {
              const imageFirst = idx % 2 === 0;

              return (
                <article key={story.id} className="editorial-two-col reveal">
                  <div className="media-frame ratio-3-4 story-image" style={{ order: imageFirst ? 1 : 2 }}>
                    <Photo src={story.image} alt={`${story.caregiverName}, ${story.role}`} sizes="(min-width: 992px) 480px, 100vw" loading="lazy" decoding="async" />
                  </div>

                  <div style={{ order: imageFirst ? 2 : 1 }}>
                    <div className="eyebrow">{story.location}</div>
                    
                    <blockquote className="pull-quote" style={{ marginBottom: '2rem' }}>
                      "{story.quote}"
                    </blockquote>

                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--cdif-hairline-strong)' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--cdif-text-heading)' }}>
                        {story.caregiverName}
                      </div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--cdif-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                        {story.role}
                      </div>
                    </div>

                    {story.videoSrc && (
                      <button type="button" onClick={() => onOpenStoryModal(story)} className="text-link text-link-dark" style={{ marginTop: '2rem' }}>
                        Watch field video <ArrowUpRight size={16} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .impact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        .impact-value {
          font-family: var(--font-heading);
          font-size: clamp(2.75rem, 4vw + 1rem, 4rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--cdif-accent-gold);
        }
        .story-image {
          max-width: 480px;
          justify-self: center;
        }
        @media (min-width: 768px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
