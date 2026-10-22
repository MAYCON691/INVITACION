'use client';
import { useRef, useState } from 'react';
import { CONFIG } from '../lib/data';
import { Plane } from './Icons';

export default function Rsvp() {
  const form = useRef(null);
  const [f, setF] = useState({ nm: '', gs: '1', at: 'Sí, ahí estaré ✈️', ms: '' });
  const [status, setStatus] = useState('');
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const send = (who) => {
    if (!form.current.reportValidity()) return;
    const nom = who === 'vidal' ? 'Vidal' : 'Blanca';
    const txt = `Hola ${nom}! Soy ${f.nm.trim()}. ${f.at}. Invitados: ${f.gs}.${f.ms.trim() ? ' Mensaje: ' + f.ms.trim() : ''} — Boda Vidal & Blanca, 05/12/2026`;
    setStatus(`¡Gracias! Abriendo WhatsApp para confirmar a ${nom}…`);
    if (window.FX) window.FX.cannon();
    window.open(`https://wa.me/${CONFIG.whatsapp[who]}?text=${encodeURIComponent(txt)}`, '_blank');
  };

  return (
    <section className="rsvp" id="confirmar" data-sec>
      <div className="wrap center">
        <span className="eyebrow rv">Confirma tu vuelo</span>
        <h2 className="sec-title rv">¿Nos <em>acompañas</em>?</h2>
        <p className="sec-sub rv">Confírmanos tu asistencia y te enviaremos tu pase a bordo.</p>

        <form className="form neu rv" ref={form} style={{ textAlign: 'left' }} autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <div className="fld">
            <label htmlFor="nm">Nombre completo</label>
            <input id="nm" required placeholder="Tu nombre y apellido" value={f.nm} onChange={set('nm')} />
          </div>
          <div className="fld">
            <label htmlFor="gs">N° de invitados (contándote)</label>
            <select id="gs" value={f.gs} onChange={set('gs')}>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div className="fld">
            <label>Asistencia</label>
            <div className="chips">
              {['Sí, ahí estaré ✈️', 'No podré asistir'].map((v) => (
                <label key={v}>
                  <input type="radio" name="at" checked={f.at === v} onChange={() => setF((s) => ({ ...s, at: v }))} />
                  <span>{v.replace(' ✈️', '')}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="fld">
            <label htmlFor="ms">Mensaje para los novios</label>
            <textarea id="ms" placeholder="Escribe unas palabras…" value={f.ms} onChange={set('ms')} />
          </div>

          <div className="btn-row">
            <button className="btn btn-gold" type="button" onClick={() => send('blanca')}><Plane width={18} height={18} />Confirmar a Blanca</button>
            <button className="btn btn-sky" type="button" onClick={() => send('vidal')}><Plane width={18} height={18} />Confirmar a Vidal</button>
          </div>
          <div className="status">{status}</div>
        </form>
      </div>
    </section>
  );
}