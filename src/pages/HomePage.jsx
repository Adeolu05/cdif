import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  FileText,
  Quote
} from 'lucide-react';
import { orgDetails, megaIctIslandData, fieldMedia, successStories, impactMetrics } from '../data/cdifData';
import ProgrammeList from '../components/ProgrammeList';
import MegaIctFeature from '../components/MegaIctFeature';
import RegistrationFacts from '../components/RegistrationFacts';
import usePageMeta from '../hooks/usePageMeta';
import Photo from '../components/Photo';

export default function HomePage({ 
  onOpenDonate, 
  onOpenPartner, 
  onOpenVideoModal, 
  onOpenCertificate
}) {
  usePageMeta(null, orgDetails.mission);
  const featuredStory = successStories[0];

  return (
    <div className="home-story-wrapper">
      
      {/* =========================================================================
         PROLOGUE: NARRATIVE HERO (Typography-led, Real Photography)
         ========================================================================= */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-editorial-grid">
            
            <div style={{ zIndex: 2 }}>
              <div className="eyebrow eyebrow-accent" style={{ marginBottom: '1.5rem' }}>
                {orgDetails.motto}
              </div>

              <h1 className="display-1 hero-headline">
                Strengthening Families. Nurturing Children.{' '}
                <span style={{ color: 'var(--cdif-primary)' }}>Building Resilient Communities.</span>
              </h1>

              <p className="body-editorial-large hero-paragraph">
                Strong families are the bedrock of a thriving society. We equip vulnerable caregivers with micro-grants, business equipment, and educational support—empowering households to build self-sustaining futures.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem 1.5rem',
                alignItems: 'center',
              }}>
                <button type="button" onClick={onOpenDonate} className="btn btn-editorial-primary btn-lg">
                  Support Our Work
                </button>

                <button 
                  type="button"
                  onClick={() => onOpenVideoModal(fieldMedia.communitySession.video, 'Community Capacity Session')} 
                  className="btn hero-watch"
                >
                  <span className="icon-container hero-watch-icon">
                    <Play size={14} fill="currentColor" style={{ marginLeft: '2px' }} aria-hidden="true" />
                  </span>
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Watch Field Report</span>
                </button>
              </div>

              <div className="hero-trust">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>CAC-registered NGO · CAC/IT/{orgDetails.registration.number}</span>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="media-frame hero-img-container">
                <Photo 
                  src={fieldMedia.communitySession.banner} 
                  alt="CDIF community session under the organisation banner" 
                  fetchPriority="high"
                />
              </div>
              <div className="desktop-quote-card">
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Field Dispatch
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--cdif-text-heading)', lineHeight: 1.45 }}>
                  "Restoring dignity and hope to households through sustainable interventions."
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         AT A GLANCE: VERIFIED FACTS
         ========================================================================= */}
      <section className="section-surface home-facts" aria-label="CDIF at a glance">
        <div className="container">
          <dl className="stat-strip">
            {impactMetrics.map((metric) => (
              <div key={metric.id} className="reveal">
                <dt className="stat-label">{metric.label}</dt>
                <dd className="stat-value">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* =========================================================================
         ACT I: THE LIVING PHILOSOPHY
         ========================================================================= */}
      <section className="editorial-section">
        <div className="container">
          <div className="editorial-two-col reveal">
            
            <div className="media-accent home-why-image" style={{ order: 2 }}>
              <div className="media-frame ratio-1-1">
                <Photo 
                  src={fieldMedia.photos[2].src} 
                  alt={fieldMedia.photos[2].alt} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div style={{ order: 1 }}>
              <div className="eyebrow eyebrow-accent">Our Belief</div>
              <h2 className="display-2" style={{ marginBottom: '2rem' }}>
                Why Strong Families Matter
              </h2>
              <div className="pull-quote" style={{ marginBottom: '2rem' }}>
                "When you empower a caregiver, you secure a child's education and restore a family's future."
              </div>
              <p className="body-editorial-large" style={{ marginBottom: '2rem' }}>
                {orgDetails.vision}
              </p>
              <Link to="/about" className="text-link">
                About CDIF <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT II: #MEGA ICT ISLAND
         ========================================================================= */}
      <MegaIctFeature onPlay={() => onOpenVideoModal(megaIctIslandData.videoSrc, megaIctIslandData.title)} />

      {/* =========================================================================
         ACT III: PROGRAMMES
         ========================================================================= */}
      <section className="editorial-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow eyebrow-accent">What We Do</div>
              <h2 className="display-2">Interventions that Work</h2>
            </div>
            <Link to="/programmes" className="text-link">
              All programmes <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ProgrammeList variant="cards" />
        </div>
      </section>

      {/* =========================================================================
         ACT IV: VOICES OF RESILIENCE
         ========================================================================= */}
      <section className="editorial-section section-subtle">
        <div className="container">
          <div className="editorial-two-col reveal">
            
            <div>
              <h2 className="eyebrow eyebrow-accent" style={{ marginBottom: '1.5rem' }}>Voices of Resilience</h2>

              <Quote size={44} className="home-quote-mark" aria-hidden="true" />
              <blockquote className="home-quote">
                {featuredStory.excerpt}
              </blockquote>
              
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--cdif-hairline-strong)' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--cdif-text-heading)' }}>
                  {featuredStory.caregiverName}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--cdif-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                  {featuredStory.programme}
                </div>
              </div>

              <Link to="/impact" className="text-link text-link-dark" style={{ marginTop: '2.25rem' }}>
                Read her full story <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="media-frame ratio-3-4 home-story-image">
              <Photo 
                src={featuredStory.image} 
                alt={`${featuredStory.caregiverName}, ${featuredStory.role}`} 
                sizes="(min-width: 992px) 460px, 100vw"
                loading="lazy"
                decoding="async"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT V: ACCOUNTABILITY
         ========================================================================= */}
      <section className="editorial-section section-surface">
        <div className="container">
          <div className="section-intro-centered">
            <div className="eyebrow eyebrow-accent">Institutional Integrity</div>
            <h2 className="display-2" style={{ marginBottom: '1.25rem' }}>
              Registered, Governed, Accountable
            </h2>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              CDIF is a registered non-governmental organisation, overseen by a board of trustees and committed to financial transparency and <Link to="/safeguarding" style={{ color: 'var(--cdif-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>child safeguarding</Link>.
            </p>
          </div>

          <RegistrationFacts />

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2rem', marginTop: '2.5rem' }}>
            <Link to="/transparency" className="text-link">
              Registration & governance <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {fieldMedia.certificate && (
              <button type="button" onClick={onOpenCertificate} className="text-link">
                <FileText size={16} aria-hidden="true" /> View Official CAC Certificate
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT VI: JOIN THE STORY
         ========================================================================= */}
      <section className="editorial-section section-plum" style={{ textAlign: 'center' }}>
        <div className="container reveal" style={{ maxWidth: '800px' }}>
          
          <h2 className="display-2" style={{ marginBottom: '1.5rem' }}>
            Stronger families don't happen by accident.
          </h2>

          <p className="body-editorial-large" style={{ marginBottom: '3rem' }}>
            It takes intentional support, resources, and community collaboration. Join us in providing the tools that help caregivers build sustainable futures.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button type="button" onClick={onOpenDonate} className="btn btn-editorial-gold btn-lg">
              Support Our Work
            </button>
            <button type="button" onClick={onOpenPartner} className="btn btn-editorial-outline-white btn-lg">
              Partner With Us
            </button>
          </div>

        </div>
      </section>

      <style>{`
        .hero-section {
          padding: 2.5rem 0 4rem;
          background-image: radial-gradient(50% 60% at 90% 10%, rgba(245, 184, 0, 0.1), transparent 70%);
        }
        .hero-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-headline {
          font-size: clamp(2.4rem, 2.2vw + 1.45rem, 4rem);
          margin-bottom: 1.5rem;
        }
        .hero-paragraph {
          max-width: 540px;
          margin-bottom: 2rem;
        }
        .hero-watch {
          padding: 0.5rem 0.25rem;
          font-size: 1rem;
          gap: 0.8rem;
          background: none;
          color: var(--cdif-text-heading);
        }
        .hero-watch-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--cdif-primary-light);
          color: var(--cdif-primary);
          transition: var(--transition-normal);
        }
        .hero-watch:hover .hero-watch-icon {
          background-color: var(--cdif-primary);
          color: #FFFFFF;
        }
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--cdif-text-muted);
        }
        .hero-trust svg {
          color: var(--cdif-primary);
          flex-shrink: 0;
        }
        .hero-img-container {
          aspect-ratio: 4 / 3;
        }
        .desktop-quote-card {
          display: none;
          position: absolute;
          bottom: -2rem;
          left: -2.5rem;
          max-width: 300px;
          padding: 1.4rem 1.75rem;
          border-radius: var(--radius-md);
          border-left: 4px solid var(--cdif-accent-gold);
          background-color: var(--cdif-bg-surface);
          box-shadow: var(--shadow-medium);
        }
        .home-facts {
          padding: 2.75rem 0;
          border-top: 1px solid var(--cdif-hairline);
          border-bottom: 1px solid var(--cdif-hairline);
        }
        .home-why-image {
          max-width: 520px;
          justify-self: center;
          width: 100%;
        }
        .home-quote-mark {
          display: block;
          color: var(--cdif-accent-gold);
          margin-bottom: 0.75rem;
        }
        .home-quote {
          font-family: var(--font-heading);
          font-size: clamp(1.9rem, 2.4vw + 1rem, 3rem);
          font-style: italic;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--cdif-text-heading);
        }
        .home-story-image {
          max-width: 460px;
          justify-self: center;
        }
        @media (min-width: 992px) {
          .hero-section {
            min-height: calc(100vh - 100px);
            display: flex;
            align-items: center;
            padding: 3rem 0 4.5rem;
          }
          .hero-editorial-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 4rem;
          }
          .hero-img-container {
            aspect-ratio: auto;
            height: min(520px, 62vh);
          }
          .desktop-quote-card {
            display: block;
          }
        }
      `}</style>

    </div>
  );
}
