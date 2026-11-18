import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';

import { 
  PartnerModal, 
  DonateModal, 
  VideoModal, 
  SearchOverlay,
  CertificateViewerModal
} from './components/Modals';
import { fieldMedia, megaIctIslandData } from './data/cdifData';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgrammesPage = lazy(() => import('./pages/ProgrammesPage'));
const ProgrammeDetailPage = lazy(() => import('./pages/ProgrammeDetailPage'));
const MegaIctIslandPage = lazy(() => import('./pages/MegaIctIslandPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const TransparencyPage = lazy(() => import('./pages/TransparencyPage'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const SafeguardingPage = lazy(() => import('./pages/SafeguardingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
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
        <a href="#main" className="skip-link">Skip to content</a>
        <Header 
          onOpenDonate={() => setDonateOpen(true)}
          onOpenPartner={() => setPartnerOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />

        <main id="main" tabIndex={-1} style={{ flex: 1 }}>
          <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
            <Routes>
              <Route path="/" element={
                <HomePage 
                  onOpenDonate={() => setDonateOpen(true)}
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
                  onOpenPartner={() => setPartnerOpen(true)}
                  onOpenDonate={() => setDonateOpen(true)}
                />
              } />
              <Route path="/contact" element={
                <ContactPage 
                  onOpenPartner={() => setPartnerOpen(true)}
                />
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/safeguarding" element={<SafeguardingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

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
