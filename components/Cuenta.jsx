'use client';
import { useEffect, useState } from 'react';
import { CONFIG } from '../lib/data';

const pad = (v) => String(v).padStart(2, '0');

export default function Cuenta() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, end: false });

  useEffect(() => {
    const target = new Date(CONFIG.fecha).getTime();
    const upd = () => {
      const d = target - Date.now();
      if (d <= 0) setT({ d: 0, h: 0, m: 0, s: 0, end: true });
      else setT({ d: Math.floor(d / 864e5), h: Math.floor(d / 36e5) % 24, m: Math.floor(d / 6e4) % 60, s: Math.floor(d / 1e3) % 60, end: false });
    };
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);

  const tiles = [['d', 'Días', '.05s'], ['h', 'Horas', '.15s'], ['m', 'Minutos', '.25s'], ['s', 'Segundos', '.35s']];

  return (
    <section className="count-sec">
      <div className="wrap center">
        <span className="eyebrow rv">Despegamos en</span>
        <h2 className="sec-title rv">Cuenta <em>regresiva</em></h2>
        <div className="count" id="count">
          {tiles.map(([k, label, d]) => (
            <div className="tile neu rv" style={{ '--d': d }} key={k}>
              <b key={t[k]} className="tick">{pad(t[k])}</b><span>{label}</span>
            </div>
          ))}
        </div>
        <p className="sec-sub rv" style={{ marginTop: 34 }}>
          {t.end ? '¡Hoy es el gran día! Gracias por acompañarnos.' : 'Tu presencia desde el inicio hará que este día sea aún más especial. Te esperamos a tiempo.'}
        </p>
      </div>
    </section>
  );
}