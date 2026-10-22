const HEART_MINI_DOTS = [[30,30],[38,38],[44,30],[40,58],[46,68],[64,30],[72,36],[80,30],[68,50],[76,58],[60,62],[90,38]];

/* Símbolos SVG reutilizables (se usan con <use href="#..."/>) */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="i-plane" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></symbol>
        <symbol id="i-heart" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.4C.9 8.1 2.7 4.5 6.2 4.5c2.1 0 3.9 1.2 5.8 3.3 1.9-2.1 3.7-3.3 5.8-3.3 3.5 0 5.3 3.6 3.8 7.1C19.5 16.4 12 21 12 21z" /></symbol>
        <symbol id="i-pin" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></symbol>
        <symbol id="i-gift" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" d="M3 8h18v4H3zM5 12h14v9H5zM12 8v13M12 8c-1-4-6-4-5-1 .6 1.7 3 1 5 1zM12 8c1-4 6-4 5-1-.6 1.7-3 1-5 1z" /></symbol>
        <symbol id="i-car" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 15v-3l2-5h14l2 5v3zM3 15v3h3v-3M18 15v3h3v-3M6 12h12" />
          <circle cx="7.5" cy="13.5" r=".8" fill="currentColor" /><circle cx="16.5" cy="13.5" r=".8" fill="currentColor" />
        </symbol>
        <symbol id="heartMini" viewBox="0 0 120 110">
          <path d="M60 104C12 66 3 44 3 31 3 14 16 4 32 4c13 0 23 7 28 17C65 11 75 4 88 4c16 0 29 10 29 27 0 13-9 35-57 73z" fill="rgba(207,169,104,.25)" stroke="#cfa968" strokeWidth="3" />
          <g fill="#cfa968">{HEART_MINI_DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" />)}</g>
        </symbol>
      </defs>
    </svg>
  );
}

export function Plane({ rotate = 90, className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...rest}>
      <use href="#i-plane" width="24" height="24" transform={`rotate(${rotate} 12 12)`} />
    </svg>
  );
}

export function Pin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24"><use href="#i-pin" /></svg>
  );
}