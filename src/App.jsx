import React, { useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import PolicyStrip from './components/PolicyStrip.jsx';
import ContentsNav from './components/ContentsNav.jsx';
import Division from './components/Division.jsx';
import WhySection from './components/WhySection.jsx';
import ContactSection from './components/ContactSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import InquiryModal from './components/InquiryModal.jsx';
import { DIVISIONS } from './data/catalogue.js';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState({ product: null, division: null });

  function openInquiry(product, division) {
    setSelected({ product: product || null, division: division || null });
    setModalOpen(true);
  }

  return (
    <>
      <SiteHeader onOpenInquiry={() => openInquiry()} />

      <main id="top">
        <Hero onOpenInquiry={() => openInquiry()} />
        <PolicyStrip />

        <section className="contents wrap">
          <div className="contents-head">
            <h2>The catalogue</h2>
            <p>Six divisions, thirteen trade lines. Jump to any of them, or request a quote directly from a listing.</p>
          </div>
          <ContentsNav />
        </section>

        <div id="catalogue">
          {DIVISIONS.map((d) => (
            <Division key={d.id} division={d} onRequestQuote={openInquiry} />
          ))}
        </div>

        <WhySection />
        <ContactSection onOpenInquiry={() => openInquiry()} />
      </main>

      <SiteFooter />

      <InquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selected.product}
        initialDivision={selected.division}
      />
    </>
  );
}
