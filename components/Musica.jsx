'use client';
import { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../lib/data';

/* Suena sola desde el segundo 8 (y vuelve al 8 en cada repetición).
   El botón solo silencia / activa. */
export default function Musica() {
  const aRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [userMuted, setUserMuted] = useState(false);

  useEffect(() => {
    const a = aRef.current;
    const START = CONFIG.musicaInicio;
    a.volume = 0.75;
    let muted = false;
    const ui = () => setPlaying(!a.paused && !a.muted);
    const seek = () => { try { if (a.currentTime < START - 0.5) a.currentTime = START; } catch (e) {} };

    const onMeta = () => seek();
    const onPlay = () => { seek(); ui(); };
    const onEnd = () => { a.currentTime = START; a.play().catch(() => {}); };
    a.addEventListener('loadedmetadata', onMeta);
    a.addEventListener('play', onPlay);
    a.addEventListener('pause', ui);
    a.addEventListener('volumechange', ui);
    a.addEventListener('ended', onEnd);
    if (a.readyState >= 1) seek();

    const evs = ['pointerdown', 'click', 'keydown', 'touchstart', 'touchend'];
    const unlock = (e) => {
      if (muted) return;
      if (e && e.target && e.target.closest && e.target.closest('#music')) return;
      a.muted = false;
      const pr = a.play();
      (pr && pr.then ? pr : Promise.resolve()).then(() => {
        ui();
        if (!a.paused && !a.muted) evs.forEach((ev) => removeEventListener(ev, unlock, true));
      }).catch(() => {});
    };
    evs.forEach((ev) => addEventListener(ev, unlock, true));

    // intento 1: con sonido; si el navegador lo bloquea, arranca en silencio y se activa con el primer toque
    a.muted = false;
    a.play().then(ui).catch(() => { a.muted = true; a.play().then(ui).catch(ui); });

    const vis = () => { if (document.hidden) a.pause(); else if (!muted) a.play().catch(() => {}); };
    document.addEventListener('visibilitychange', vis);

    a.__setMuted = (v) => { muted = v; };
    return () => {
      evs.forEach((ev) => removeEventListener(ev, unlock, true));
      document.removeEventListener('visibilitychange', vis);
      a.removeEventListener('loadedmetadata', onMeta);
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', ui);
      a.removeEventListener('volumechange', ui);
      a.removeEventListener('ended', onEnd);
      a.pause();
    };
  }, []);

  const toggle = () => {
    const a = aRef.current;
    if (!a.paused && !a.muted) { a.__setMuted(true); setUserMuted(true); a.muted = true; }
    else { a.__setMuted(false); setUserMuted(false); a.muted = false; a.play().catch(() => {}); }
    setPlaying(!a.paused && !a.muted);
  };

  return (
    <>
      <audio ref={aRef} src="/musica.mp3" preload="auto" playsInline />
      <button id="music" className={`glass ${playing ? 'on' : 'off'}`} onClick={toggle}
        aria-label="Silenciar o activar la música" title={userMuted ? 'Activar música' : 'Silenciar música'}>
        <svg className="ic-on" viewBox="0 0 24 24" fill="none" stroke="#a8823f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></svg>
        <svg className="ic-off" viewBox="0 0 24 24" fill="none" stroke="#a8823f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4z" /><path d="M22 9l-6 6M16 9l6 6" /></svg>
      </button>
    </>
  );
}