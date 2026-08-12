import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Heart, 
  Users, 
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { orgDetails, coreProgrammes, megaIctIslandData, fieldMedia, successStories } from '../data/cdifData';

export default function HomePage({ 
  onOpenDonate, 
  onOpenVolunteer, 
  onOpenPartner, 
  onOpenVideoModal, 
  onSelectProgramme,
  onOpenStoryModal
}) {
  return (
    <div className="home-story-wrapper" style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      
      {/* =========================================================================
         PROLOGUE: NARRATIVE HERO (Simplified, Typography-led, Real Photography)
         ========================================================================= */}
      <section className="hero-section" style={{
        backgroundColor: 'var(--cdif-bg-paper)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '6rem',
            alignItems: 'center'
          }} className="hero-editorial-grid">
            
            {/* Hero Typography Column */}
            <div style={{ zIndex: 2 }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                marginBottom: '2rem',
                borderBottom: '1px solid var(--cdif-primary)',
                paddingBottom: '0.5rem'
              }}>
                <ShieldCheck size={16} color="var(--cdif-primary)" />
                <span style={{ fontSize: '0.85rem', letterSpacing: '0.08em', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase' }}>
                  {orgDetails.motto}
                </span>
              </div>

              <h1 className="display-1 hero-headline" style={{
                color: 'var(--cdif-text-heading)',
                marginBottom: '1.5rem',
              }}>
                Strengthening Families. Nurturing Children. <span style={{ color: 'var(--cdif-primary)' }}>Building Resilient Communities.</span>
              </h1>

              <p className="body-editorial-large hero-paragraph" style={{
                marginBottom: '2.5rem',
                maxWidth: '540px'
              }}>
                Strong families are the bedrock of a thriving society. We equip vulnerable caregivers with micro-grants, business equipment, and educational support—empowering households to build self-sustaining futures.
              </p>

              {/* Action Buttons (Calm, Intentional) */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
              }}>
                <button onClick={onOpenDonate} className="btn btn-editorial-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                  Support Our Work
                </button>

                <button 
                  onClick={() => onOpenVideoModal('/assets/media/mega_ict_island_day1.mp4', 'DAY 1 ICT TRAINING SECTION (#MEGA ICT ISLAND)')} 
                  className="btn btn-editorial-outline"
                  style={{ padding: '0.95rem 2rem', fontSize: '1rem', border: 'none', gap: '0.8rem' }}
                >
                  <div className="icon-container" style={{
                    width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--cdif-bg-subtle)', color: 'var(--cdif-primary)'
                  }}>
                    <Play size={14} fill="currentColor" style={{ marginLeft: '2px' }} />
                  </div>
                  <span style={{ fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px' }}>Watch Field Report</span>
                </button>
              </div>
            </div>

            {/* Hero Editorial Image (Full Bleed Feel) */}
            <div style={{ position: 'relative' }}>
              <div className="hero-img-container" style={{
                width: '100%',
                height: 'min(520px, 65vh)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={fieldMedia.photos[5].src} 
                  alt="CDIF Empowered Family Community Outreach" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-2rem',
                backgroundColor: 'var(--cdif-bg-surface)',
                padding: '1.5rem 2rem',
                boxShadow: 'var(--shadow-cinematic)',
                maxWidth: '300px'
              }} className="desktop-quote-card">
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Field Dispatch
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--cdif-text-heading)', lineHeight: 1.4 }}>
                  "Restoring dignity and hope to households through sustainable interventions."
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT I: THE LIVING PHILOSOPHY (Larger headline, reduced copy)
         ========================================================================= */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '6rem',
            alignItems: 'center'
          }} className="editorial-two-col">
            
            <div style={{ position: 'relative', order: 2 }}>
              <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                <img 
                  src={fieldMedia.photos[2].src} 
                  alt="Caregivers and children supported by CDIF" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
                />
              </div>
            </div>

            <div style={{ order: 1 }}>
              <h2 className="display-1" style={{ marginBottom: '2.5rem', color: 'var(--cdif-primary)' }}>
                Why Strong Families Matter
              </h2>
              <div className="pull-quote" style={{ marginBottom: '2.5rem' }}>
                "When you empower a caregiver, you secure a child's education and restore a family's future."
              </div>
              <p className="body-editorial-large" style={{ color: 'var(--cdif-text-body)' }}>
                {orgDetails.vision}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT II: #MEGA ICT ISLAND (Major immersive editorial story)
         ========================================================================= */}
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
              <div 
                onClick={() => onOpenVideoModal(megaIctIslandData.videoSrc, megaIctIslandData.title)}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  cursor: 'pointer',
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
              </div>
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
              
              <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--cdif-accent-gold)', lineHeight: 1 }}>9</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginTop: '0.5rem' }}>Teenagers Sponsored</div>
                </div>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>4</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>Weeks Intensive Training</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT III: PROGRAMMES AS STORIES (Editorial alternating layout, no cards)
         ========================================================================= */}
      <section className="editorial-section">
        <div className="container">
          
          <div style={{ marginBottom: '6rem' }}>
            <h2 className="display-1" style={{ color: 'var(--cdif-text-heading)' }}>
              Interventions that Work
            </h2>
          </div>

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

                    <button 
                      onClick={() => onSelectProgramme(prog)} 
                      style={{ 
                        background: 'none', border: 'none', borderBottom: '2px solid var(--cdif-primary)', 
                        paddingBottom: '0.3rem', color: 'var(--cdif-primary)', fontWeight: 700, 
                        fontSize: '1.05rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                      }}
                    >
                      Read Full Story <ArrowRight size={16} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
         ACT IV: VOICES OF RESILIENCE (One strong featured human story)
         ========================================================================= */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-subtle)' }}>
        <div className="container">
          
          {/* Featured Story */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="editorial-two-col">
            
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--cdif-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
                Voices of Resilience
              </div>
              
              <h2 className="display-1" style={{ color: 'var(--cdif-text-heading)', marginBottom: '2rem', fontStyle: 'italic', lineHeight: 1.2 }}>
                "{successStories[0].quote}"
              </h2>
              
              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--cdif-hairline-strong)' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--cdif-text-heading)' }}>
                  {successStories[0].caregiverName}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--cdif-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                  {successStories[0].programme}
                </div>
              </div>

              <button 
                onClick={() => onOpenStoryModal(successStories[0])}
                style={{ 
                  marginTop: '2.5rem', background: 'none', border: 'none', borderBottom: '2px solid var(--cdif-text-heading)', 
                  paddingBottom: '0.3rem', color: 'var(--cdif-text-heading)', fontWeight: 700, 
                  fontSize: '1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                View Documentary Record <ArrowUpRight size={16} />
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img 
                  src={fieldMedia.photos[3].src} 
                  alt={successStories[0].caregiverName} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT V: ACCOUNTABILITY (Simplified Registration & Governance)
         ========================================================================= */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-1" style={{ marginBottom: '2rem' }}>
              Institutional Integrity
            </h2>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)', marginBottom: '3.5rem' }}>
              CDIF operates under strict oversight. We are a registered Non-Governmental Organization committed to financial transparency and child safeguarding.
            </p>
            
            <div style={{ display: 'inline-block', textAlign: 'left', borderLeft: '4px solid var(--cdif-primary)', paddingLeft: '2rem' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--cdif-text-heading)', marginBottom: '0.5rem' }}>
                {orgDetails.registration.fullText}
              </div>
              <div style={{ fontSize: '1.05rem', color: 'var(--cdif-text-muted)', marginBottom: '1.5rem' }}>
                TIN: {orgDetails.registration.tin} | Date: {orgDetails.registration.date}
              </div>
              <button 
                onClick={() => {
                  const event = new CustomEvent('open-certificate');
                  window.dispatchEvent(event);
                }} 
                style={{ 
                  background: 'none', border: 'none', color: 'var(--cdif-primary)', fontWeight: 700, 
                  fontSize: '1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  textDecoration: 'underline', textUnderlineOffset: '4px'
                }}
              >
                <FileText size={16} /> View Official CAC Certificate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         ACT VI: JOIN THE STORY (Emotional CTA, Support/Partner/Volunteer)
         ========================================================================= */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-primary-dark)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <h2 className="display-1" style={{ color: '#FFFFFF', marginBottom: '2rem' }}>
            Stronger families don't happen by accident.
          </h2>

          <p className="body-editorial-large" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '4rem' }}>
            It takes intentional support, resources, and community collaboration. Join us in providing the tools that help caregivers build sustainable futures.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button onClick={onOpenDonate} className="btn btn-editorial-gold" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Support Our Work
            </button>
            <button onClick={onOpenPartner} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '6px' }}>
              Partner With Us
            </button>
            <button onClick={onOpenVolunteer} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer' }}>
              Volunteer
            </button>
          </div>

        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .hero-section {
            min-height: calc(100vh - 108px); /* Account for 64px header + 44px announcement */
          }
          .hero-editorial-grid {
            grid-template-columns: 1fr 0.9fr !important;
          }
          .editorial-two-col {
            grid-template-columns: 1fr 1fr !important;
          }
          .desktop-quote-card {
            display: block !important;
          }
        }
        @media (min-width: 1366px) and (max-height: 800px) {
          .hero-section {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          .hero-headline {
            font-size: 3.5rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-paragraph {
            font-size: 1.05rem !important;
            margin-bottom: 1.8rem !important;
          }
          .hero-img-container {
            height: min(440px, 60vh) !important;
          }
        }
      `}</style>

    </div>
  );
}
