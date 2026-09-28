import React from 'react';
import { DIVISIONS } from '../data/catalogue.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

export default function ContentsNav() {
  const ids = DIVISIONS.map((d) => `div-${d.id}`);
  const activeId = useActiveSection(ids);

  return (
    <nav className="contents-nav" aria-label="Catalogue divisions">
      {DIVISIONS.map((d) => {
        const id = `div-${d.id}`;
        return (
          <a key={d.id} href={`#${id}`} className={activeId === id ? 'active' : ''}>
            <span className="n mono">{d.num}</span>
            {d.title}
          </a>
        );
      })}
    </nav>
  );
}
