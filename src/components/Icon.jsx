import React from 'react';

const shapes = {
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
  home: <><rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/></>,
  analysis: <><path d="M4 19h16M4 5v14"/><path d="m7 15 4-5 3 2 4-6"/><circle cx="18" cy="6" r="1"/></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/></>,
  info: <><circle cx="12" cy="12" r="10"/><path d="M12 11v5M12 8h.01"/></>,
  sparkles: <><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"/><path d="m19 17 0.7 1.3L21 19l-1.3.7L19 21l-.7-1.3L17 19l1.3-.7L19 17Z"/></>,
  arrow: <><path d="M4 12h16m-6-6 6 6-6 6"/></>,
  back: <><path d="M20 12H4m6-6-6 6 6 6"/></>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  message: <><path d="M20 11.5A8.5 8.5 0 0 1 11.5 20c-1.4 0-2.8-.3-4-1L3 21l2-4a8.5 8.5 0 1 1 15-5.5Z"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  corner: <><path d="M5 8V5h3m8 0h3v3m0 8v3h-3m-8 0H5v-3"/></>,
  zap: <path d="m13 2-9 12h7l-1 8 10-12h-7V2Z"/>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
  x: <path d="M5 5 19 19M19 5 5 19"/>,
  alert: <><path d="M12 3 2 21h20L12 3Z"/><path d="M12 10v4m0 3h.01"/></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-5L3 9m0-6v6h6M4 13a8 8 0 0 0 14 5l3-3m0 6v-6h-6"/></>,
  sliders: <><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="16" cy="17" r="2.5"/></>,
  external: <><path d="M13 4h7v7m0-7-9 9"/><path d="M20 14v6H4V4h6"/></>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></>,
  book: <><path d="M4 4h7a3 3 0 0 1 3 3v14H7a3 3 0 0 0-3 0V4ZM20 4h-3a3 3 0 0 0-3 3v14h3a3 3 0 0 1 3 0V4Z"/></>,
  fingerprint: <><path d="M4 11a8 8 0 0 1 16 0M6 14v-3a6 6 0 0 1 12 0v3M9 11a3 3 0 0 1 6 0v6M12 11v10M8 18v-5m8 5v-4"/></>,
  circleHelp: <><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7L12 12.3V14m0 3h.01"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>,
  lock: <><rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/></>,
  loader: <><path d="M12 2a10 10 0 1 1-10 10"/></>,
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '', ...rest }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>{shapes[name] || shapes.shield}</svg>;
}
