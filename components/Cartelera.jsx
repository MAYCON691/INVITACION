'use client';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { ACTS } from '../lib/data';

const EXT = ['png', 'jpg', 'jpeg', 'webp', 'PNG', 'JPG', 'JPEG', 'WEBP'];
const N = ACTS.length;

/* Tarjeta del carrusel: busca la foto en /public/cartelera con varias extensiones */
function Card({ a, i, d, onPick }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let dead = false, k = 0;
    const im = new Image();
    const next = () => { if (dead || k >= EXT.length) return; im.src = `/cartelera/${a.img}.${EXT[k++]}`; };
    im.onload = () => { if (!dead) setSrc(im.getAttribute('src')); };
    im.onerror = next;
    next();
    return () => { dead = true; im.onload = null; im.onerror = null; };
  }, [a.img]);

  const ad = Math.abs(d);
  return (
    <article
      className={`cf-card${d === 0 ? ' act' : ''}${ad > 3 ? ' far' : ''}${src ? ' has-img' : ''}`}
      style={{ '--bg': a.bg, '--d': d, '--ad': ad, zIndex: 20 - ad }}
      onClick={() => onPick(i, d, src)}
      aria-label={a.n}
    >
      <div className="mono">{a.n[0]}</div>
      {src && <img src={src} alt={a.n} draggable={false} />}
      <span className="num">{String(i + 1).padStart(2, '0')}</span>
      <span className="tag">{a.t}</span>
      <div className="info"><h3>{a.n}</h3><p>{a.s}</p></div>
    </article>
  );
}

export default function Cartelera() {
  const [act, setAct] = useState(0);
  const [box, setBox] = useState(null);
  const [grab, setGrab] = useState(false);
  const secRef = useRef(null);
  const vis = useRef(false);
  const hov = useRef(false);
  const last = useRef(0);
  const boxRef = useRef(null);
  const drag = useRef({ down: false, x: 0, moved: false });

  const go = useCallback((i) => { last.current = Date.now(); setAct(((i % N) + N) % N); }, []);
  const next = () => go(act + 1);
  const prev = () => go(act - 1);

  useEffect(() => { boxRef.current = box; }, [box]);

  // autoplay: solo cuando la sección se ve y nadie la está tocando
  useEffect(() => {
    const io = new IntersectionObserver((es) => { vis.current = es[0].isIntersecting; }, { threshold: 0.25 });
    io.observe(secRef.current);
    const id = setInterval(() => {
      if (!vis.current || hov.current || boxRef.current || document.hidden) return;
      if (Date.now() - last.current < 5000) return;
      setAct((a) => (a + 1) % N);
    }, 3600);
    const key = (e) => { if (e.key === 'Escape') setBox(null); };
    addEventListener('keydown', key);
    return () => { io.disconnect(); clearInterval(id); removeEventListener('keydown', key); };
  }, []);

  // gestos: deslizar con el dedo o arrastrar con el mouse
  const onDown = (e) => { drag.current = { down: true, x: e.clientX, moved: false }; last.current = Date.now(); setGrab(true); };
  const onMove = (e) => { const d = drag.current; if (d.down && Math.abs(e.clientX - d.x) > 8) d.moved = true; };
  const end = (e) => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false; setGrab(false);
    const dx = e.clientX - d.x;
    if (dx < -50) next(); else if (dx > 50) prev();
  };

  const pick = (i, d, src) => {
    last.current = Date.now();
    if (drag.current.moved) return;
    if (d !== 0) go(i);
    else if (src) setBox(src);
  };

  const cur = ACTS[act];

  return (
    <section className="cart" id="cartelera" data-sec ref={secRef}>
      <div className="wrap center">
        <span className="eyebrow rv">Música y celebración</span>
        <h2 className="sec-title rv">Cartelera <em>2026</em></h2>
        <p className="sec-sub rv">Una noche inolvidable con los mejores grupos y artistas para que bailes sin parar.</p>
        <div className="banner rv" data-rv="zoom">CARTELERA 2026</div>
      </div>

      <div className="cf">
        <div
          className={`cf-stage${grab ? ' grab' : ''}`}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={end}
          onPointerCancel={end}
          onPointerEnter={(e) => { if (e.pointerType === 'mouse') hov.current = true; }}
          onPointerLeave={(e) => { hov.current = false; end(e); }}
        >
          {ACTS.map((a, i) => {
            let d = i - act;
            if (d > N / 2) d -= N;
            if (d < -N / 2) d += N;
            return <Card key={a.img} a={a} i={i} d={d} onPick={pick} />;
          })}
        </div>

        <div className="cf-ui">
          <button className="cf-btn glass" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)', color: '#a8823f' }}><use href="#i-arrow" /></svg>
          </button>
          <div className="cf-cap" key={act}>
            <small>{String(act + 1).padStart(2, '0')} / {N}</small>
            <h3>{cur.n}</h3>
            <p>{cur.s}</p>
          </div>
          <button className="cf-btn glass" onClick={next} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" style={{ color: '#a8823f' }}><use href="#i-arrow" /></svg>
          </button>
        </div>

        <div className="cf-dots">
          {ACTS.map((a, i) => <button key={a.img} className={i === act ? 'on' : ''} onClick={() => go(i)} aria-label={a.n} />)}
        </div>
      </div>

      <div className="marquee">
        <div>
          {[0, 1].map((k) => (
            <Fragment key={k}>
              {ACTS.map((a) => <Fragment key={a.img}>{a.n}<span>✦</span></Fragment>)}
            </Fragment>
          ))}
        </div>
      </div>

      <div className={`lb${box ? ' on' : ''}`} onClick={() => setBox(null)}>
        <b>×</b>
        {box && <img src={box} alt="Afiche" />}
      </div>
    </section>
  );
}