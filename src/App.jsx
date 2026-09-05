import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgrammesPage from './pages/ProgrammesPage';
import ProgrammeDetailPage from './pages/ProgrammeDetailPage';
import MegaIctIslandPage from './pages/MegaIctIslandPage';
import ImpactPage from './pages/ImpactPage';
import TransparencyPage from './pages/TransparencyPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';

import { 
  VolunteerModal, 
  PartnerModal, 
  DonateModal, 
  VideoModal, 
  SearchOverlay,
  CertificateViewerModal
} from './components/Modals';
import { fieldMedia, megaIctIslandData } from './data/cdifData';

export default function App() {
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [videoState, setVideoState] = useState({ open: false, src: '', title: '' });
  const [searchOpen, setSearchOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);

  const openVideoModal = (src, title) => {
    setVideoState({
      open: true,
      src: src || megaIctIslandData.videoSrc,
      title: title || megaIctIslandData.title
    });
  };

  const handleOpenStoryModal = (story) => {
    if (!story?.videoSrc) return;
    openVideoModal(story.videoSrc, `${story.caregiverName} (${story.programme})`);
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header 
          onOpenDonate={() => setDonateOpen(true)}
          onOpenVolunteer={() => setVolunteerOpen(true)}
          onOpenPartner={() => setPartnerOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <HomePage 
                onOpenDonate={() => setDonateOpen(true)}
                onOpenVolunteer={() => setVolunteerOpen(true)}
                onOpenPartner={() => setPartnerOpen(true)}
                onOpenVideoModal={openVideoModal}
                onOpenCertificate={fieldMedia.certificate ? () => setCertOpen(true) : undefined}
              />
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programmes" element={<ProgrammesPage />} />
            <Route path="/programmes/:id" element={<ProgrammeDetailPage />} />
            <Route path="/mega-ict-island" element={
              <MegaIctIslandPage 
                onOpenVideoModal={openVideoModal}
                onOpenVolunteer={() => setVolunteerOpen(true)}
                onOpenPartner={() => setPartnerOpen(true)}
                onOpenDonate={() => setDonateOpen(true)}
              />
            } />
            <Route path="/impact" element={<ImpactPage onOpenStoryModal={handleOpenStoryModal} />} />
            <Route path="/transparency" element={
              <TransparencyPage onOpenCertificate={fieldMedia.certificate ? () => setCertOpen(true) : undefined} />
            } />
            <Route path="/get-involved" element={
              <GetInvolvedPage 
                onOpenVolunteer={() => setVolunteerOpen(true)}
                onOpenPartner={() => setPartnerOpen(true)}
                onOpenDonate={() => setDonateOpen(true)}
              />
            } />
            <Route path="/contact" element={
              <ContactPage 
                onOpenPartner={() => setPartnerOpen(true)}
                onOpenVolunteer={() => setVolunteerOpen(true)}
              />
            } />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        <VolunteerModal isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
        <PartnerModal isOpen={partnerOpen} onClose={() => setPartnerOpen(false)} />
        <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
        <VideoModal 
          isOpen={videoState.open} 
          videoSrc={videoState.src}
          videoTitle={videoState.title}
          onClose={() => setVideoState({ open: false, src: '', title: '' })} 
        />
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        <CertificateViewerModal isOpen={certOpen} onClose={() => setCertOpen(false)} />
      </div>
    </Router>
  );
}
