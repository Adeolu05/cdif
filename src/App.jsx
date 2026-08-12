import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

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
import PlaceholderPage from './pages/PlaceholderPage';

import { 
  VolunteerModal, 
  PartnerModal, 
  DonateModal, 
  VideoModal, 
  SearchOverlay,
  CertificateViewerModal
} from './components/Modals';

export default function App() {
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [videoState, setVideoState] = useState({ open: false, src: '', title: '' });
  const [searchOpen, setSearchOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);

  useEffect(() => {
    const handleOpenCert = () => setCertOpen(true);
    window.addEventListener('open-certificate', handleOpenCert);
    return () => window.removeEventListener('open-certificate', handleOpenCert);
  }, []);

  const openVideoModal = (src, title) => {
    setVideoState({
      open: true,
      src: src || '/assets/media/mega_ict_island_day1.mp4',
      title: title || 'DAY 1 ICT TRAINING SECTION (#MEGA ICT ISLAND)'
    });
  };

  const handleOpenStoryModal = (story) => {
    openVideoModal(
      '/assets/media/mega_ict_island_day1.mp4', 
      `Documentary Spotlight: ${story.caregiverName} (${story.programme})`
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Navigation Bar */}
        <Header 
          onOpenDonate={() => setDonateOpen(true)}
          onOpenVolunteer={() => setVolunteerOpen(true)}
          onOpenPartner={() => setPartnerOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />

        {/* Dynamic Route Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <HomePage 
                onOpenDonate={() => setDonateOpen(true)}
                onOpenVolunteer={() => setVolunteerOpen(true)}
                onOpenPartner={() => setPartnerOpen(true)}
                onOpenVideoModal={openVideoModal}
                onOpenStoryModal={handleOpenStoryModal}
              />
            } />

            {/* About Routes */}
            <Route path="/about">
              <Route index element={<AboutPage />} />
              <Route path="story" element={<PlaceholderPage title="Our Story" />} />
              <Route path="mission" element={<PlaceholderPage title="Mission & Vision" />} />
              <Route path="leadership" element={<PlaceholderPage title="Leadership" />} />
            </Route>

            {/* Programmes Routes */}
            <Route path="/programmes">
              <Route index element={<ProgrammesPage />} />
              <Route path="mega-ict-island" element={
                <MegaIctIslandPage 
                  onOpenVideoModal={openVideoModal}
                  onOpenVolunteer={() => setVolunteerOpen(true)}
                  onOpenPartner={() => setPartnerOpen(true)}
                  onOpenDonate={() => setDonateOpen(true)}
                />
              } />
              <Route path=":id" element={<ProgrammeDetailPage />} />
            </Route>

            {/* Impact & Stories Routes */}
            <Route path="/impact" element={<ImpactPage onOpenStoryModal={handleOpenStoryModal} />} />
            <Route path="/stories" element={<PlaceholderPage title="Documentary Stories" />} />
            <Route path="/gallery" element={<PlaceholderPage title="Visual Gallery" />} />

            {/* Transparency Routes */}
            <Route path="/transparency">
              <Route index element={<TransparencyPage />} />
              <Route path="governance" element={<PlaceholderPage title="Governance Structure" />} />
              <Route path="registration" element={<PlaceholderPage title="Registration & Legal" />} />
              <Route path="reports" element={<PlaceholderPage title="Financial & Audit Reports" />} />
            </Route>
            
            {/* News Routes */}
            <Route path="/news" element={<PlaceholderPage title="News & Updates" />} />

            {/* Get Involved Routes */}
            <Route path="/get-involved">
              <Route index element={
                <GetInvolvedPage 
                  onOpenVolunteer={() => setVolunteerOpen(true)}
                  onOpenPartner={() => setPartnerOpen(true)}
                  onOpenDonate={() => setDonateOpen(true)}
                />
              } />
              <Route path="volunteer" element={<PlaceholderPage title="Volunteer Application" />} />
              <Route path="partner" element={<PlaceholderPage title="Corporate Partnerships" />} />
            </Route>

            <Route path="/support" element={<PlaceholderPage title="Support CDIF" />} />
            
            <Route path="/contact" element={
              <ContactPage 
                onOpenPartner={() => setPartnerOpen(true)}
                onOpenVolunteer={() => setVolunteerOpen(true)}
              />
            } />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer 
          onOpenPartner={() => setPartnerOpen(true)}
          onOpenVolunteer={() => setVolunteerOpen(true)}
        />

        {/* Interactive Overlay Modals */}
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
