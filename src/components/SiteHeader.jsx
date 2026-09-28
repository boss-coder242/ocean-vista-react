import React, { useState } from 'react';

export default function SiteHeader({ onOpenInquiry }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="brand" href="#top">
          <svg className="brand-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18.5" stroke="#C68A2E" strokeWidth="1.4" />
            <path d="M9 21c3-6 8-9 11-9s8 3 11 9c-3 2-7 3-11 3s-8-1-11-3Z" stroke="#EDE7D9" strokeWidth="1.3" fill="none" />
            <path d="M20 12v18" stroke="#EDE7D9" strokeWidth="1.1" />
            <path d="M13 27c2 1.5 4.5 2.3 7 2.3s5-.8 7-2.3" stroke="#EDE7D9" strokeWidth="1.1" fill="none" />
          </svg>
          <span>
            <span className="brand-name">Ocean Vista</span>
            <span className="brand-sub">INTERNATIONAL&nbsp;PVT.&nbsp;LTD.</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#catalogue">Catalogue</a>
          <a href="#why">Why us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-cta">
          <button className="btn btn-gold" onClick={() => onOpenInquiry()}>Request a quote</button>
        </div>

        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <div className={`mobile-panel${open ? ' open' : ''}`}>
        <div className="wrap">
          <a href="#catalogue" onClick={() => setOpen(false)}>Catalogue</a>
          <a href="#why" onClick={() => setOpen(false)}>Why us</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <button className="btn btn-gold" onClick={() => { setOpen(false); onOpenInquiry(); }}>
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
}
