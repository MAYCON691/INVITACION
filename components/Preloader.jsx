'use client';
import { useEffect, useState } from 'react';
import { Plane } from './Icons';
import { IMAGENES } from '../lib/data';

const MIN = 2000;   // tiempo mínimo que se ve el preloader
const MAX = 20000;  // seguridad: si algo falla, entra igual a los 20 s

const guardadas = []; // mantiene las imágenes en memoria

function cargar(src) {
  return new Promise((res) => {
    const im = new Image();
    guardadas.push(im);
    im.onload = () => {
      const fin = () => res();
      if (im.decode) im.decode().then(fin, fin); else fin();
    };
    im.onerror = () => res();
    im.src = src;
  });
}

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t0 = performance.now();
    const timers = [];
    let fin = false, dead = false, ok = 0;
    const total = IMAGENES.length;

    const hide = () => {
      if (fin || dead) return;
      fin = true;
      const wait = Math.max(0, MIN - (performance.now() - t0));
      timers.push(setTimeout(() => {
        setDone(true);
        document.body.classList.remove('loading');
        timers.push(setTimeout(() => window.FX && window.FX.cannon(), 900));
      }, wait));
    };

    const imgs = Promise.all(
      IMAGENES.map((s) => cargar(s).then(() => { if (!dead) setPct(Math.round((++ok / total) * 100)); }))
    );

    let onLoad = null;
    const win = new Promise((res) => {
      if (document.readyState === 'complete') res();
      else { onLoad = res; window.addEventListener('load', onLoad, { once: true }); }
    });

    Promise.all([imgs, win]).then(hide);
    timers.push(setTimeout(hide, MAX));

    return () => {
      dead = true;
      if (onLoad) window.removeEventListener('load', onLoad);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div id="preloader" className={done ? 'done' : ''}>
      <div className="pl-card">
        <div className="pl-title">PASAPORTE</div>
        <div className="pl-sub">Vidal &amp; Blanca</div>
        <div className="pl-track"><div className="pl-fill" /><Plane className="pl-plane" /></div>
        <div className="pl-txt">Preparando tu vuelo… {pct}%</div>
      </div>
    </div>
  );
}