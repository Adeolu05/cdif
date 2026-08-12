import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { orgDetails } from '../data/cdifData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: 'var(--cdif-bg-paper)' }}>
      
      {/* Page Hero */}
      <section style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--cdif-bg-paper)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow eyebrow-gold">Get In Touch</div>
            <h1 className="display-1" style={{ marginBottom: '2rem' }}>
              We're here to <br />
              <span style={{ color: 'var(--cdif-primary)' }}>listen & collaborate.</span>
            </h1>
            <p className="body-editorial-large" style={{ color: 'var(--cdif-text-muted)' }}>
              Whether you have a question about our programmes, want to discuss a partnership, or need assistance, our team is ready to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--cdif-bg-surface)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <div style={{ padding: '2rem', backgroundColor: 'var(--cdif-bg-paper)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cdif-hairline)' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="icon-container" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--cdif-primary-light)', color: 'var(--cdif-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--cdif-text-heading)' }}>Email Desks</h3>
                  <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '1rem' }}>
                    Send us an email and the appropriate desk will respond within 24 hours.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <a href={`mailto:${orgDetails.contact.email}`} className="btn btn-editorial-outline" style={{ justifyContent: 'flex-start' }}>
                      <span style={{ color: 'var(--cdif-text-muted)', fontWeight: 400, width: '100px' }}>General:</span> {orgDetails.contact.email}
                    </a>
                    <a href={`mailto:${orgDetails.contact.partnershipsEmail}`} className="btn btn-editorial-outline" style={{ justifyContent: 'flex-start' }}>
                      <span style={{ color: 'var(--cdif-text-muted)', fontWeight: 400, width: '100px' }}>Partnerships:</span> {orgDetails.contact.partnershipsEmail}
                    </a>
                    <a href={`mailto:${orgDetails.contact.volunteerEmail}`} className="btn btn-editorial-outline" style={{ justifyContent: 'flex-start' }}>
                      <span style={{ color: 'var(--cdif-text-muted)', fontWeight: 400, width: '100px' }}>Volunteers:</span> {orgDetails.contact.volunteerEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--cdif-bg-paper)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cdif-hairline)' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="icon-container" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#128C7E' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--cdif-text-heading)' }}>WhatsApp</h3>
                  <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '1rem' }}>
                    Prefer an instant message? Chat with our community support desk directly on WhatsApp.
                  </p>
                  <a href={`https://wa.me/`} target="_blank" rel="noopener noreferrer" className="btn btn-editorial-outline" style={{ borderColor: '#25D366', color: '#128C7E' }}>
                    {orgDetails.contact.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--cdif-bg-paper)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cdif-hairline)' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="icon-container" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--cdif-bg-subtle)', color: 'var(--cdif-primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--cdif-text-heading)' }}>Direct Line</h3>
                  <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)', marginBottom: '1rem' }}>
                    Call our main office line for urgent enquiries during working hours.
                  </p>
                  <a href={`tel:${orgDetails.contact.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-editorial-primary">
                    Call {orgDetails.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--cdif-bg-paper)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cdif-hairline)' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="icon-container" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--cdif-bg-subtle)', color: 'var(--cdif-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--cdif-text-heading)' }}>Head Office</h3>
                  <p className="body-editorial" style={{ color: 'var(--cdif-text-muted)' }}>
                    {orgDetails.contact.address}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
