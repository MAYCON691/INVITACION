'use client';
import { useEffect, useMemo, useState } from 'react';
import { MAPA } from '../lib/data';

const TITLE = 'PASAPORTE';
const HEART = 'M210 362C40 232 8 152 8 108 8 50 54 14 110 14c46 0 80 24 100 60 20-36 54-60 100-60 56 0 102 36 102 94 0 44-32 124-202 254z';

export default function Hero() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const n = innerWidth < 700 ? 26 : 46;
    setStars(Array.from({ length: n }, () => ({ l: Math.random() * 100, t: Math.random() * 100, d: Math.random() * 3, s: 2 + Math.random() * 3 })));
  }, []);

  const dots = useMemo(() => {
    const out = []; let k = 0;
    MAPA.forEach((row, r) => row.forEach(([a, b]) => {
      for (let c = a; c <= b; c++) out.push({ x: 6 + c * 5.62, y: 48 + r * 7.5, k: k++ });
    }));
    return out;
  }, []);

  return (
    <header className="hero" id="inicio" data-sec>
      <div className="rays" />
      <div className="stars" id="stars">
        {stars.map((s, i) => <i key={i} style={{ left: s.l + '%', top: s.t + '%', animationDelay: s.d + 's', animationDuration: s.s + 's' }} />)}
      </div>
      <div className="cloud c1" /><div className="cloud c2" />
      <div className="orb o1" data-speed=".15" />
      <div className="orb o2" data-speed="-.12" />
      <div className="orb o3" data-speed=".1" />

      <div className="wrap">
        <h1 className="hero-title" id="splitTitle" aria-label={TITLE}>
          {[...TITLE].map((c, i) => <span key={i} className="ch" style={{ '--i': i }} aria-hidden="true">{c}</span>)}
        </h1>
        <h2 className="hero-sub">a nuestra <b>Boda</b></h2>

        <div className="heart-wrap">
          <svg viewBox="0 0 420 380" id="heartSvg">
            <defs>
              <clipPath id="heartClip"><path id="heartPath" d={HEART} /></clipPath>
              <linearGradient id="gGold" x1="0" x2="1"><stop offset="0" stopColor="#e3c585" /><stop offset="1" stopColor="#c79c58" /></linearGradient>
            </defs>
            <g className="beat">
              <g clipPath="url(#heartClip)">
                <g id="mapDots">
                  {dots.map((d) => (
                    <circle key={d.k} cx={d.x} cy={d.y} r="2.3" fill="url(#gGold)"
                      style={d.k % 7 === 0 ? { animation: `tw ${2 + (d.k % 5) * 0.6}s ${(d.k % 9) * 0.3}s ease-in-out infinite alternate` } : undefined} />
                  ))}
                </g>
              </g>
              <path d={HEART} fill="none" stroke="#fff" strokeWidth="7" strokeLinejoin="round" />
            </g>
            <path id="route" className="route" d="M142 205C195 250 285 236 306 168 326 104 250 82 232 128 214 176 330 206 366 130 388 84 412 64 404 22" />
            <circle cx="142" cy="205" r="13" fill="#fff" />
            <use href="#i-heart" x="132" y="195" width="20" height="20" style={{ color: '#cfa968' }} />
            <g style={{ color: '#cfa968' }} id="heroPlane">
              <g transform="translate(-16,-16) scale(1.35)"><use href="#i-plane" width="24" height="24" transform="rotate(90 12 12)" /></g>
              <animateMotion dur="9s" repeatCount="indefinite" rotate="auto"><mpath href="#route" /></animateMotion>
            </g>
          </svg>
        </div>

        <p className="hero-nos">¡Nos Casamos!</p>
        <div className="hero-names">Vidal<span className="amp">&amp;</span>Blanca</div>
        <div className="hero-date"><span>DIC.</span><i /><span>05</span><i /><span>2026</span></div>
      </div>
      <div className="scroll-cue"><b />Desliza</div>
    </header>
  );
}