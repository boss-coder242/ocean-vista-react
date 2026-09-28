import React from 'react';
import ManifestTicker from './ManifestTicker.jsx';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow">Product catalogue · 2026 · Pune, Maharashtra</div>
          <h1>Indian export goods, sourced at origin and shipped to your port.</h1>
          <p className="hero-desc">
            Spices, grains, rice and pulses, fresh fruit and vegetables, dry fruits and saffron,
            seafood and table eggs, plus surgical instruments and yoga mats — thirteen trade lines
            out of one Pune office, graded and packed to your specification.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-gold" onClick={onOpenInquiry}>Request a quote</button>
            <a className="btn btn-line" href="#catalogue">Browse the catalogue</a>
          </div>
          <div className="hero-facts">
            <div className="hero-fact"><b>13</b><span>trade divisions under one roof</span></div>
            <div className="hero-fact"><b>24 hrs</b><span>to quote against your enquiry</span></div>
            <div className="hero-fact"><b>EXW · FOB<br />CFR · CIF</b><span>Incoterms, against destination port</span></div>
          </div>
        </div>
        <ManifestTicker />
      </div>
    </section>
  );
}
