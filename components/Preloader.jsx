'use client';
import { useEffect, useState } from 'react';
import { Plane } from './Icons';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t0 = performance.now();
    const timers = [];
    let fin = false;
    const hide = () => {
      if (fin) return;
      fin = true;
      const wait = Math.max(0, 2000 - (performance.now() - t0));
      timers.push(setTimeout(() => {
        setDone(true);
        document.body.classList.remove('loading');
        timers.push(setTimeout(() => window.FX && window.FX.cannon(), 900));
      }, wait));
    };
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide);
    timers.push(setTimeout(hide, 5000));
    return () => {
      window.removeEventListener('load', hide);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div id="preloader" className={done ? 'done' : ''}>
      <div className="pl-card">
        <div className="pl-title">PASAPORTE</div>
        <div className="pl-sub">Vidal &amp; Blanca</div>
        <div className="pl-track"><div className="pl-fill" /><Plane className="pl-plane" /></div>
        <div className="pl-txt">Preparando tu vuelo…</div>
      </div>
    </div>
  );
}