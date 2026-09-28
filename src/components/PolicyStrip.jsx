import React from 'react';

const STEPS = [
  { num: '01', text: 'Tell us the product, grade, quantity, packing and destination port.' },
  { num: '02', text: 'Our sourcing desk confirms availability, price and the earliest shipping window.' },
  { num: '03', text: 'Pre-shipment samples and photographs are shared before the container is sealed.' },
  { num: '04', text: 'Quoted ex-works, FOB, CFR or CIF — your call, against the destination port.' },
];

export default function PolicyStrip() {
  return (
    <section className="policy-strip">
      <div className="wrap policy-row">
        {STEPS.map((s) => (
          <div className="policy-item" key={s.num}>
            <div className="p-num mono">{s.num}</div>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
