import React from 'react';

export default function ContactSection({ onOpenInquiry }) {
  return (
    <section className="contact wrap" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <h2>Send your specification</h2>
          <p>Product, grade, quantity, packing and destination port — that's all our sourcing desk needs to start pricing.</p>

          <div className="contact-facts">
            <div className="cfact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1.1.3 2.1.7 3.1a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3.1.7a2 2 0 0 1 1.7 2Z" />
              </svg>
              <div>
                <div className="label">PHONE &amp; WHATSAPP</div>
                <div className="val">Kiran — +91 78750 55575<br />Shubham — +91 95278 76307<br />Manohar — +91 73504 55727</div>
              </div>
            </div>
            <div className="cfact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <div>
                <div className="label">EMAIL</div>
                <div className="val">oceanvista.international@gmail.com</div>
              </div>
            </div>
            <div className="cfact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div className="label">OFFICE</div>
                <div className="val">Sr. No. 70A/4, Nigade Nagar, Lane No. 1, Ghorpadi, Pune, Maharashtra, India</div>
              </div>
            </div>
            <div className="cfact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
              <div>
                <div className="label">WORKING HOURS</div>
                <div className="val">Monday – Saturday, 9:30 AM – 7:00 PM IST</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <h3>Request a quote</h3>
          <p>We reply within 24 hours with availability, price and the earliest shipping window for your enquiry.</p>
          <div style={{ marginTop: 20 }}>
            <button
              className="btn btn-teal"
              onClick={() => onOpenInquiry()}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Open the enquiry form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
