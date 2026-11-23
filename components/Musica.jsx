'use client';
import { useEffect, useRef } from 'react';
import { CONFIG } from '../lib/data';

/* Música constante: empieza en el segundo 8, se repite desde el 8 y no se puede silenciar. */
export default function Musica() {
  const aRef = useRef(null);

  useEffect(() => {
    const a = aRef.current;
    const START = CONFIG.musicaInicio;
    a.volume = 0.75;

    const seek = () => { try { if (a.currentTime < START - 0.5) a.currentTime = START; } catch (e) {} };
    const play = () => a.play().catch(() => {});

    const onMeta = () => seek();
    const onPlay = () => seek();
    const onEnd = () => { a.currentTime = START; play(); };
    // si algo la pausa (llamada, sistema), vuelve a sonar
    const onPause = () => { if (!document.hidden && !a.ended) setTimeout(play, 300); };

    a.addEventListener('loadedmetadata', onMeta);
    a.addEventListener('play', onPlay);
    a.addEventListener('ended', onEnd);
    a.addEventListener('pause', onPause);
    if (a.readyState >= 1) seek();

    // los navegadores bloquean el sonido hasta el primer toque: se activa con la primera interacción
    const evs = ['pointerdown', 'click', 'keydown', 'touchstart', 'touchend'];
    const unlock = () => {
      a.muted = false;
      a.play().then(() => {
        if (!a.paused && !a.muted) evs.forEach((ev) => removeEventListener(ev, unlock, true));
      }).catch(() => {});
    };
    evs.forEach((ev) => addEventListener(ev, unlock, true));

    // intento 1: con sonido; si el navegador lo bloquea, arranca en silencio y se activa con el primer toque
    a.muted = false;
    a.play().catch(() => { a.muted = true; a.play().catch(() => {}); });

    const vis = () => { if (document.hidden) a.pause(); else play(); };
    document.addEventListener('visibilitychange', vis);

    return () => {
      evs.forEach((ev) => removeEventListener(ev, unlock, true));
      document.removeEventListener('visibilitychange', vis);
      a.removeEventListener('loadedmetadata', onMeta);
      a.removeEventListener('play', onPlay);
      a.removeEventListener('ended', onEnd);
      a.removeEventListener('pause', onPause);
      a.pause();
    };
  }, []);

  return <audio ref={aRef} src="/musica.mp3" preload="auto" playsInline />;
}