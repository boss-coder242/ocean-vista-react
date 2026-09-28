import React from 'react';

export default function WhySection() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="why-head">
          <h2>How a quote actually works</h2>
          <p>No portal, no minimum-order gate to get a number. The same desk that grades the lot writes the quote.</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <svg className="w-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12c3-6 7-9 9-9s6 3 9 9c-3 5-7 8-9 8s-6-3-9-8Z" />
              <circle cx="12" cy="12" r="2.6" />
            </svg>
            <h3>Sourced at origin</h3>
            <p>Direct from farms, mills and processors across Maharashtra and the rest of India — not resold from a middle trader.</p>
          </div>
          <div className="why-card">
            <svg className="w-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h10M4 18h13" />
            </svg>
            <h3>Confirmed in writing</h3>
            <p>Grade, count, packing and season window for every lot are confirmed in writing before dispatch, not left to the catalogue's fine print.</p>
          </div>
          <div className="why-card">
            <svg className="w-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="4" width="16" height="16" rx="1.5" />
              <path d="M8 4v16M4 9h16" />
            </svg>
            <h3>Samples before sealing</h3>
            <p>Pre-shipment samples and photographs go out before the container is sealed, so nothing arrives as a surprise.</p>
          </div>
          <div className="why-card">
            <svg className="w-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M15 7h6v6" />
            </svg>
            <h3>Your Incoterm</h3>
            <p>Ex-works, FOB, CFR or CIF, quoted against your destination port — whichever term your buyer's finance team needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
