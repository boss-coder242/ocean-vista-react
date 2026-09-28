import React from 'react';

export default function Division({ division, onRequestQuote }) {
  return (
    <section className="division wrap" id={`div-${division.id}`}>
      <div className="division-head">
        <div className="division-num mono">{division.num}</div>
        <div>
          <div className="division-title serif">{division.title}</div>
          <p className="division-blurb">{division.blurb}</p>
        </div>
      </div>

      <div className="ledger">
        {division.items.map((item) => (
          <div className={`item-row${item.image ? ' has-photo' : ''}`} key={item.name}>
            {item.image && (
              <div className="item-photo">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
            )}
            <div className="item-main">
              <div className="item-name">{item.name}</div>
              <p className="item-desc">{item.desc}</p>
            </div>
            <div className="item-specs">
              {item.specs.map(([label, value]) => (
                <div className="spec" key={label}>
                  <b>{label}</b>{value}
                </div>
              ))}
            </div>
            <div className="item-cta">
              <button className="row-quote" onClick={() => onRequestQuote(item.name, division.title)}>
                Request quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
