import React from 'react';
import MegaIctIslandSection from '../components/MegaIctIslandSection';
import GetInvolvedSection from '../components/GetInvolvedSection';
import { Sparkles } from 'lucide-react';

export default function MegaIctIslandPage({ onOpenVideoModal, onOpenVolunteer, onOpenPartner, onOpenDonate }) {
  return (
    <div style={{ paddingTop: '2rem' }}>
      {/* Header Banner */}
      <section style={{
        backgroundColor: 'var(--cdif-bg-midnight)',
        color: '#FFFFFF',
        padding: '4rem 0 4.5rem 0'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} />
            <span>Youth Empowerment Initiative</span>
          </div>
          <h1 className="display-1" style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            #MEGA ICT ISLAND
          </h1>
          <p className="body-editorial" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px', fontSize: '1.15rem' }}>
            Bridging the digital divide for underserved youth through practical computer literacy, coding fundamentals, and digital design training.
          </p>
        </div>
      </section>

      {/* Main #MEGA ICT ISLAND Component */}
      <MegaIctIslandSection onOpenVideoModal={onOpenVideoModal} />

      {/* Call to Action */}
      <GetInvolvedSection 
        onOpenVolunteer={onOpenVolunteer}
        onOpenPartner={onOpenPartner}
        onOpenDonate={onOpenDonate}
      />
    </div>
  );
}
