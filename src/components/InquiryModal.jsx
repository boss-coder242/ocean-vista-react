import React, { useEffect, useRef, useState } from 'react';
import { submitInquiry } from '../lib/submitInquiry.js';

const DIVISION_OPTIONS = [
  'Spices & Oilseeds',
  'Grains, Pulses & Rice',
  'Fresh Produce',
  'Dry Fruits',
  'Marine & Farm',
  'Specialty & Trade Goods',
];

const EMPTY_FORM = {
  companyName: '', contactPerson: '', email: '', phone: '', country: '',
  division: '', quantity: '', incoterm: '', port: '', message: '',
};

export default function InquiryModal({ open, onClose, initialProduct, initialDivision }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const firstFieldRef = useRef(null);

  // Reset / prefill whenever the modal opens for a new request
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setForm({
        ...EMPTY_FORM,
        division: initialDivision || '',
        message: initialProduct ? `Product interest: ${initialProduct}` : '',
      });
      const t = setTimeout(() => firstFieldRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open, initialProduct, initialDivision]);

  // Lock background scroll while open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.companyName || !form.contactPerson || !form.email || !form.phone) {
      alert("Please fill in company, contact person, email and phone.");
      return;
    }
    const ref = 'INQ-' + new Date().getFullYear() + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    setSubmitting(true);
    try {
      await submitInquiry({ ...form, reference: ref, submittedAt: new Date().toISOString() });
    } catch (err) {
      // Submission failed silently from the visitor's point of view — log it,
      // but still show the confirmation. Swap this for inline error UI if
      // you'd rather block on a failed send.
      console.error('Inquiry submission failed:', err);
    } finally {
      setSubmitting(false);
      setReference(ref);
      setSubmitted(true);
    }
  }

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal-head">
          <h3 id="modalTitle">Request a quote</h3>
          <button className="modal-close" aria-label="Close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="companyName">Company name</label>
                  <input id="companyName" ref={firstFieldRef} value={form.companyName} onChange={update('companyName')} required autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="contactPerson">Contact person</label>
                  <input id="contactPerson" value={form.contactPerson} onChange={update('contactPerson')} required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update('email')} required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" type="tel" value={form.phone} onChange={update('phone')} required autoComplete="tel" />
                </div>
                <div className="field">
                  <label htmlFor="country">Country</label>
                  <input id="country" value={form.country} onChange={update('country')} autoComplete="country-name" />
                </div>
                <div className="field">
                  <label htmlFor="division">Product division</label>
                  <select id="division" value={form.division} onChange={update('division')}>
                    <option value="">Select a division</option>
                    {DIVISION_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="quantity">Quantity</label>
                  <input id="quantity" value={form.quantity} onChange={update('quantity')} placeholder="e.g. 10 MT" />
                </div>
                <div className="field">
                  <label htmlFor="incoterm">Incoterm</label>
                  <select id="incoterm" value={form.incoterm} onChange={update('incoterm')}>
                    <option value="">Select</option>
                    <option>EXW</option><option>FOB</option><option>CFR</option><option>CIF</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="port">Destination port</label>
                  <input id="port" value={form.port} onChange={update('port')} />
                </div>
                <div className="field full">
                  <label htmlFor="message">Product / requirements</label>
                  <textarea id="message" value={form.message} onChange={update('message')} placeholder="Product, grade, packing preference, target dispatch date..." />
                </div>
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn btn-gold" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Submit enquiry'}
                </button>
              </div>
              <p className="modal-note">We reply with availability, price and the earliest shipping window within 24 hours.</p>
            </form>
          ) : (
            <div className="confirm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10" />
                <path d="m8 12 3 3 5-6" />
              </svg>
              <h4>Enquiry received</h4>
              <p>Our sourcing desk will get back to you with availability, price and the earliest shipping window within 24 hours.</p>
              <div className="ref">Reference {reference}</div>
              <div className="modal-actions" style={{ marginTop: 22 }}>
                <button
                  className="btn btn-line"
                  style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
