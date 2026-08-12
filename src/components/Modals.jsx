import React, { useState } from 'react';
import { X, Check, Heart, ShieldCheck, Play, Search, Send, ArrowRight, UserPlus, Building, Sparkles, Copy, Mail, Handshake } from 'lucide-react';
import { coreProgrammes, successStories, faqs, fieldMedia, orgDetails } from '../data/cdifData';

/* Generic Base Modal Overlay */
function ModalBase({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(14, 36, 31, 0.85)', /* Darker for more contrast */
      backdropFilter: 'blur(12px)', /* Stronger blur */
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div style={{
        backgroundColor: 'var(--cdif-bg-surface)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '620px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', /* Deeper shadow for focus */
        position: 'relative',
        padding: '3rem 2.5rem' /* More spacious padding */
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="icon-container"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--cdif-bg-subtle)',
            color: 'var(--cdif-text-heading)',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            transition: 'var(--transition-fast)'
          }}
        >
          <X size={24} />
        </button>

        {title && (
          <h3 style={{
            fontSize: '1.8rem', /* Larger title */
            color: 'var(--cdif-text-heading)',
            marginBottom: '1.5rem',
            paddingRight: '3rem',
            lineHeight: 1.2,
            fontWeight: 800
          }}>
            {title}
          </h3>
        )}

        {children}
      </div>
    </div>
  );
}

/* 1. Volunteer Application Modal */
export function VolunteerModal({ isOpen, onClose }) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Apply to Volunteer with CDIF">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <p style={{ fontSize: '1rem', color: 'var(--cdif-text-body)', lineHeight: 1.6 }}>
          We constantly need skilled professionals—educators, medical personnel, tech instructors, and logistics coordinators—to support our field operations.
        </p>
        
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--cdif-bg-subtle)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1rem'
        }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--cdif-primary)', marginBottom: '1rem' }}>
            Current Open Roles
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0, margin: 0, fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--cdif-primary)" /> ICT & Digital Literacy Mentors</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--cdif-primary)" /> Caregiver Business Coaches</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--cdif-primary)" /> Logistics & Field Support</li>
          </ul>
        </div>

        <div style={{
          padding: '1rem',
          border: '1px solid var(--cdif-accent-gold)',
          backgroundColor: 'rgba(245, 184, 0, 0.05)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.9rem',
          display: 'flex',
          gap: '0.8rem',
          alignItems: 'flex-start'
        }}>
          <div className="icon-container" style={{ color: 'var(--cdif-accent-gold-dark)' }}>
            <Send size={18} />
          </div>
          <div>
            <span style={{ fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>Application Process</span>
            Our volunteer portal is currently undergoing upgrades. Please email your CV and brief statement of interest directly to our volunteer coordination desk.
          </div>
        </div>

        <a 
          href="mailto:volunteers@cdif.org?subject=Volunteer%20Application"
          className="btn btn-editorial-primary" 
          style={{ width: '100%', marginTop: '1rem' }}
        >
          <Mail size={16} />
          <span>Email Application</span>
        </a>
      </div>
    </ModalBase>
  );
}

/* 2. Corporate Partner Modal */
export function PartnerModal({ isOpen, onClose }) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Initiate Corporate Partnership">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <p style={{ fontSize: '1rem', color: 'var(--cdif-text-body)', lineHeight: 1.6 }}>
          We collaborate with forward-thinking organisations to execute high-impact CSR initiatives. From sponsoring our #MEGA ICT Bootcamp to co-funding community drives, let's align our values.
        </p>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--cdif-bg-subtle)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <div className="icon-container" style={{ color: 'var(--cdif-primary)' }}>
            <Building size={24} />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--cdif-text-heading)', marginBottom: '0.5rem' }}>
              Institutional Proposals
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--cdif-text-body)', marginBottom: 0 }}>
              To ensure your proposal reaches the correct desk, please email our partnerships team directly with a brief outline of your intended scope and objectives.
            </p>
          </div>
        </div>

        <a 
          href="mailto:partnerships@cdif.org?subject=Corporate%20Partnership%20Inquiry"
          className="btn btn-editorial-gold" 
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          <Handshake size={16} />
          <span>Email Partnerships Desk</span>
        </a>
      </div>
    </ModalBase>
  );
}

/* 3. Donate / Direct Support Modal */
export function DonateModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Support CDIF's Work">
      <div>
        <p style={{ fontSize: '1rem', color: 'var(--cdif-text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Your donation directly funds our quarterly food drives, educational school kits, and micro-business equipment for vulnerable caregivers.
        </p>

        <div style={{
          padding: '1.2rem',
          backgroundColor: 'var(--cdif-bg-subtle)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '2rem',
          borderLeft: '4px solid var(--cdif-primary)'
        }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--cdif-primary)', marginBottom: '1.2rem' }}>
            Direct Bank Transfer
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Account Name */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Account Name</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>
                  {orgDetails.bankDetails.accountName}
                </div>
              </div>
            </div>

            {/* Account Number */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Account Number</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--cdif-primary)', letterSpacing: '1px' }}>
                  {orgDetails.bankDetails.accountNumber}
                </div>
              </div>
              <button 
                onClick={() => handleCopy(orgDetails.bankDetails.accountNumber, 'accountNumber')}
                className="btn btn-editorial-outline" 
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                {copied === 'accountNumber' ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
              </button>
            </div>

            {/* Bank Name */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Bank</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>
                  {orgDetails.bankDetails.bankName}
                </div>
              </div>
            </div>
            
            {/* Sort Code / Additional Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Sort Code / SWIFT</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>
                  {orgDetails.bankDetails.sortCode}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--cdif-text-muted)', marginBottom: '1rem' }}>
            For donation enquiries or confirmation, contact CDIF:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${orgDetails.contact.email}`} className="btn btn-editorial-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
              Email Us
            </a>
            <a href={`tel:${orgDetails.contact.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-editorial-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </ModalBase>
  );
}

/* 4. Programme Detail Deep Dive Modal */
export function ProgrammeDetailModal({ programme, onClose }) {
  if (!programme) return null;

  return (
    <ModalBase isOpen={!!programme} onClose={onClose} title={programme.title}>
      <div>
        <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>
          {programme.category}
        </div>

        <p style={{ fontSize: '1.05rem', color: 'var(--cdif-text-body)', lineHeight: 1.7, marginBottom: '1.8rem' }}>
          {programme.overview}
        </p>

        <h4 style={{ fontSize: '1.1rem', color: 'var(--cdif-text-heading)', marginBottom: '0.8rem' }}>
          Key Deliverables & Execution Strategy:
        </h4>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
          {programme.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--cdif-text-heading)' }}>
              <Check size={18} color="var(--cdif-primary)" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div style={{
          padding: '1.2rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--cdif-text-heading)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--cdif-accent-gold)', fontWeight: 700 }}>
              Verified Outcome
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{programme.impactStat}</div>
          </div>
          <button onClick={onClose} className="btn btn-accent" style={{ fontSize: '0.85rem' }}>
            Close Detail
          </button>
        </div>
      </div>
    </ModalBase>
  );
}

/* 5. Video Field & Documentary Modal */
export function VideoModal({ isOpen, onClose, videoSrc, videoTitle }) {
  const activeVideo = videoSrc || "/assets/media/mega_ict_island_day1.mp4";
  const activeTitle = videoTitle || "DAY 1 ICT TRAINING SECTION (#MEGA ICT ISLAND)";

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title={activeTitle}>
      <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: '#000', border: '2px solid rgba(245, 184, 0, 0.4)' }}>
        <video 
          src={activeVideo}
          controls
          autoPlay={isOpen}
          playsInline
          style={{ width: '100%', maxHeight: '75vh', display: 'block' }}
        >
          Your browser does not support the video tag.
        </video>
        <div style={{
          padding: '0.8rem 1rem',
          backgroundColor: 'var(--cdif-text-heading)',
          color: '#fff',
          fontSize: '0.85rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ color: 'var(--cdif-accent-gold)', fontWeight: 800 }}>#MEGA ICT ISLAND</span>
          <span style={{ opacity: 0.85 }}>Sponsored by Capacity Development Initiative</span>
        </div>
      </div>
    </ModalBase>
  );
}

/* 6. Certificate Viewer Modal */
export function CertificateViewerModal({ isOpen, onClose }) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Certificate of Incorporation">
      <div style={{ backgroundColor: '#fff', borderRadius: 'var(--radius-md)', padding: '0.5rem', border: '1px solid var(--cdif-hairline-strong)' }}>
        <img 
          src={fieldMedia.certificate} 
          alt="CAC Certificate of Incorporation" 
          style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-sm)' }} 
        />
      </div>
    </ModalBase>
  );
}

/* 6. Real-Time Search Overlay */
export function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProgs = coreProgrammes.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
  const filteredStories = successStories.filter(s => s.caregiverName.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(14, 36, 31, 0.95)',
      backdropFilter: 'blur(16px)',
      zIndex: 3000,
      padding: '2rem 1.5rem',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%', maxWidth: '720px', display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
        <button onClick={onClose} style={{ color: '#fff', cursor: 'pointer' }}>
          <X size={32} />
        </button>
      </div>

      <div style={{ width: '100%', maxWidth: '720px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          borderBottom: '2px solid var(--cdif-primary)',
          paddingBottom: '0.8rem',
          marginBottom: '2rem'
        }}>
          <Search size={28} color="var(--cdif-accent-gold)" />
          <input 
            type="text"
            autoFocus
            placeholder="Search programs, equipment loans, reports, or stories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              outline: 'none'
            }}
          />
        </div>

        {query && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--cdif-accent-gold)', marginBottom: '0.8rem', fontWeight: 700 }}>
                Programmes ({filteredProgs.length})
              </div>
              {filteredProgs.map(p => (
                <div key={p.id} style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 700 }}>{p.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{p.subtitle}</div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--cdif-accent-gold)', marginBottom: '0.8rem', fontWeight: 700 }}>
                Stories ({filteredStories.length})
              </div>
              {filteredStories.map(s => (
                <div key={s.id} style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 700 }}>{s.caregiverName}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{s.quote}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
