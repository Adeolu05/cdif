import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, Search, Send, Building, Copy, Mail, Handshake } from 'lucide-react';
import { coreProgrammes, successStories, fieldMedia, orgDetails } from '../data/cdifData';

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
          href={`mailto:${orgDetails.contact.volunteerEmail || orgDetails.contact.email}?subject=Volunteer%20Application`}
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
          href={`mailto:${orgDetails.contact.partnershipsEmail || orgDetails.contact.email}?subject=Corporate%20Partnership%20Inquiry`}
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
  const bank = orgDetails.bankDetails;
  const bankLive = Boolean(bank.verified && bank.accountNumber);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch {
      setCopied('');
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Support CDIF's Work">
      <div>
        <p style={{ fontSize: '1rem', color: 'var(--cdif-text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Your donation funds food drives, school kits, and livelihood tools for caregivers. Bank details appear here only after CDIF verifies them.
        </p>

        {bankLive ? (
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
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Account Name</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>{bank.accountName}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Account Number</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--cdif-primary)', letterSpacing: '1px' }}>{bank.accountNumber}</div>
                </div>
                <button 
                  type="button"
                  onClick={() => handleCopy(bank.accountNumber, 'accountNumber')}
                  className="btn btn-editorial-outline" 
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  {copied === 'accountNumber' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
                </button>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--cdif-text-muted)', fontWeight: 600 }}>Bank</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--cdif-text-heading)' }}>{bank.bankName}</div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            padding: '1.2rem',
            backgroundColor: 'var(--cdif-bg-subtle)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--cdif-accent-gold)'
          }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--cdif-primary)', marginBottom: '0.6rem' }}>
              Transfer details coming next
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--cdif-text-body)', margin: 0 }}>
              Email the partnerships desk and we will send verified account details.
            </p>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <a href={`mailto:${orgDetails.contact.email}?subject=Donation%20enquiry`} className="btn btn-editorial-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
            Email a donation enquiry
          </a>
        </div>
      </div>
    </ModalBase>
  );
}

export function VideoModal({ isOpen, onClose, videoSrc, videoTitle }) {
  if (!videoSrc) return (
    <ModalBase isOpen={isOpen} onClose={onClose} title={videoTitle || 'Field video'}>
      <p style={{ color: 'var(--cdif-text-muted)' }}>This clip is not available yet.</p>
    </ModalBase>
  );

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title={videoTitle}>
      <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: '#000', border: '2px solid rgba(245, 184, 0, 0.4)' }}>
        <video 
          src={videoSrc}
          controls
          autoPlay={isOpen}
          playsInline
          style={{ width: '100%', maxHeight: '75vh', display: 'block' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </ModalBase>
  );
}

export function CertificateViewerModal({ isOpen, onClose }) {
  if (!fieldMedia.certificate) return null;

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

export function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const filteredProgs = coreProgrammes.filter(p => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
  const filteredStories = successStories.filter(s => s.caregiverName.toLowerCase().includes(q) || s.programme.toLowerCase().includes(q));

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
        <button type="button" onClick={onClose} aria-label="Close search" style={{ color: '#fff', cursor: 'pointer', background: 'none', border: 'none' }}>
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
            placeholder="Search programmes or stories"
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

        {q && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--cdif-accent-gold)', marginBottom: '0.8rem', fontWeight: 700 }}>
                Programmes ({filteredProgs.length})
              </div>
              {filteredProgs.map(p => (
                <Link
                  key={p.id}
                  to={`/programmes/${p.id}`}
                  onClick={onClose}
                  style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', marginBottom: '0.5rem', display: 'block', color: '#fff', textDecoration: 'none' }}
                >
                  <div style={{ fontWeight: 700 }}>{p.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{p.subtitle}</div>
                </Link>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--cdif-accent-gold)', marginBottom: '0.8rem', fontWeight: 700 }}>
                Stories ({filteredStories.length})
              </div>
              {filteredStories.map(s => (
                <Link
                  key={s.id}
                  to="/impact"
                  onClick={onClose}
                  style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', marginBottom: '0.5rem', display: 'block', color: '#fff', textDecoration: 'none' }}
                >
                  <div style={{ fontWeight: 700 }}>{s.caregiverName}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{s.programme}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
