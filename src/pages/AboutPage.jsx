import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { orgDetails, fieldMedia } from '../data/cdifData';
import PageHero from '../components/PageHero';
import RegistrationFacts from '../components/RegistrationFacts';
import usePageMeta from '../hooks/usePageMeta';
import Photo, { SIZES_WIDE } from '../components/Photo';

export default function AboutPage() {
  usePageMeta('About Us', orgDetails.vision);

  return (
    <div>
      <PageHero
        eyebrow="Our Organisational Story"
        title={<>Restoring Values to Families. <span style={{ color: 'var(--cdif-primary)' }}>Nurturing Children.</span></>}
        intro={`${orgDetails.name} is a registered community-based non-governmental organisation dedicated to building resilience in vulnerable households.`}
      />

      <section style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="media-frame ratio-wide">
            <Photo 
              src={fieldMedia.communitySession.audience} 
              alt="Families gathered at a CDIF community meeting" 
              sizes={SIZES_WIDE}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="editorial-section section-surface">
        <div className="container">
          <div className="editorial-rows">

            <div className="editorial-two-col reveal">
              <div>
                <div className="eyebrow eyebrow-accent">Our Vision</div>
                <h2 className="display-2" style={{ marginBottom: '1.75rem' }}>A Future of Strong Communities</h2>
                <div className="pull-quote">
                  "{orgDetails.vision}"
                </div>
              </div>
              <div className="media-accent">
                <div className="media-frame ratio-4-3">
                  <Photo src={fieldMedia.photos[1].src} alt={fieldMedia.photos[1].alt} loading="lazy" decoding="async" style={{ objectPosition: 'center 25%' }} />
                </div>
              </div>
            </div>

            <div className="editorial-two-col reveal">
              <div style={{ order: 2 }}>
                <div className="eyebrow eyebrow-accent">Our Mission</div>
                <h2 className="display-2" style={{ marginBottom: '1.75rem' }}>Empowering the Caregiver</h2>
                <p className="body-editorial-large">
                  {orgDetails.mission}
                </p>
              </div>
              <div className="media-frame ratio-4-3" style={{ order: 1 }}>
                <Photo src={fieldMedia.communitySession.facilitator} alt="Facilitator leading a CDIF community session" loading="lazy" decoding="async" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="editorial-section section-dark">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow eyebrow-gold eyebrow-accent">Our Commitment</div>
            <h2 className="display-2" style={{ marginBottom: '2rem' }}>
              Building Pathways out of Poverty
            </h2>
            <p className="body-editorial-large">
              {orgDetails.commitment}
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow eyebrow-accent">Governance & Oversight</div>
              <h2 className="display-2" style={{ marginBottom: '1.25rem' }}>Accountable by Design</h2>
              <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
                CDIF is overseen by a board of trustees and registered with the {orgDetails.registration.body}.
              </p>
            </div>
            <Link to="/transparency" className="text-link">
              Registration, trustees & reports <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <RegistrationFacts />
        </div>
      </section>
    </div>
  );
}
