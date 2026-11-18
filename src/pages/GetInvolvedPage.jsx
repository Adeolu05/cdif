import React from 'react';
import { Heart, Handshake } from 'lucide-react';
import { fieldMedia } from '../data/cdifData';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import Photo from '../components/Photo';

export default function GetInvolvedPage({ onOpenPartner, onOpenDonate }) {
  usePageMeta('Get Involved', 'Donate to or partner with CDIF to help vulnerable families build self-sustaining futures.');

  return (
    <div>
      <PageHero
        eyebrow="Get Involved"
        title={<>Your action changes <span style={{ color: 'var(--cdif-primary)' }}>a family's trajectory.</span></>}
        intro="Strong communities are built through collective effort. Whether you give financially or partner as an organisation, you are helping to secure a child's future."
      />

      <section className="editorial-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="editorial-rows">
            
            <div className="editorial-two-col reveal">
              <div style={{ order: 2 }}>
                <div className="icon-badge" style={{ marginBottom: '1.5rem' }}>
                  <Heart size={24} aria-hidden="true" />
                </div>
                <h2 className="display-2" style={{ marginBottom: '1.25rem' }}>Support Financially</h2>
                <p className="body-editorial" style={{ marginBottom: '2rem' }}>
                  Your gift funds food drives, school kits, and livelihood tools. Email us for verified transfer details until the public account is published.
                </p>
                <button type="button" onClick={onOpenDonate} className="btn btn-editorial-primary btn-lg">
                  Make a Donation
                </button>
              </div>
              <div className="media-frame ratio-4-3" style={{ order: 1 }}>
                <Photo src={fieldMedia.photos[0].src} alt={fieldMedia.photos[0].alt} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="hairline-divider"></div>

            <div className="editorial-two-col reveal">
              <div style={{ order: 1 }}>
                <div className="icon-badge icon-badge-gold" style={{ marginBottom: '1.5rem' }}>
                  <Handshake size={24} aria-hidden="true" />
                </div>
                <h2 className="display-2" style={{ marginBottom: '1.25rem' }}>Corporate Partnership</h2>
                <p className="body-editorial" style={{ marginBottom: '2rem' }}>
                  We collaborate with forward-thinking organisations to execute high-impact CSR initiatives. From sponsoring our #MEGA ICT Bootcamp to co-funding community drives, let's align our values.
                </p>
                <button type="button" onClick={onOpenPartner} className="btn btn-editorial-outline btn-lg">
                  Partner With Us
                </button>
              </div>
              <div className="media-frame ratio-4-3" style={{ order: 2 }}>
                <Photo src={fieldMedia.photos[3].src} alt={fieldMedia.photos[3].alt} loading="lazy" decoding="async" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
