import React, { useMemo } from 'react';
import { DIVISIONS } from '../data/catalogue.js';

export default function ManifestTicker() {
  const items = useMemo(() => {
    const list = [];
    DIVISIONS.forEach((d) => {
      d.items.forEach((item) => {
        const packing = item.specs.find(([label]) => label === 'Packing');
        const tag = packing ? packing[1] : item.specs[0]?.[1] ?? '';
        list.push({ div: d.num, name: item.name, tag });
      });
    });
    return list;
  }, []);

  const duplicated = [...items, ...items];

  return (
    <div className="manifest" aria-hidden="true">
      <div className="manifest-head">
        <span className="m-label">SHIPPING MANIFEST — SAMPLE LOTS</span>
        <span className="m-code">OV-2026</span>
      </div>
      <div className="manifest-body">
        <div className="manifest-list">
          {duplicated.map((t, i) => (
            <div className="m-row" key={i}>
              <span className="m-div">D{t.div}</span>
              <span className="m-name">{t.name}</span>
              <span className="m-tag">{t.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="manifest-foot">
        Grades, counts and season windows confirmed lot by lot in writing before dispatch.
      </div>
    </div>
  );
}
