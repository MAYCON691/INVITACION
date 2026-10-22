'use client';
import { useEffect, useRef } from 'react';

/* Partículas doradas, brillo del cursor, confeti (window.FX), destellos, botones magnéticos */
export default function Efectos() {
  const dustRef = useRef(null);
  const fxRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const touch = matchMedia('(hover:none)').matches;
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const offs = [];
    const on = (t, e, f, o) => { t.addEventListener(e, f, o); offs.push(() => t.removeEventListener(e, f, o)); };
    let dead = false;

    /* ---------- Brillo que sigue el cursor ---------- */
    const glow = glowRef.current;
    if (touch) glow.style.display = 'none';
    else {
      let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
      on(window, 'mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
      const loop = () => {
        if (dead) return;
        gx += (tx - gx) * 0.08; gy += (ty - gy) * 0.08;
        glow.style.transform = `translate(${gx}px,${gy}px)`;
        requestAnimationFrame(loop);
      };
      loop();
    }

    /* ---------- Partículas doradas ---------- */
    if (!reduce) {
      const cv = dustRef.current, cx = cv.getContext('2d');
      let W, H;
      const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
      rs(); on(window, 'resize', rs);
      const N = innerWidth < 700 ? 24 : 60;
      const P = Array.from({ length: N }, () => ({
        x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 2.2 + 0.6,
        v: Math.random() * 0.35 + 0.1, a: Math.random() * 0.5 + 0.25, p: Math.random() * 6.28, h: Math.random() < 0.18,
      }));
      const heart = (x, y, s) => {
        cx.beginPath(); cx.moveTo(x, y + s * .3);
        cx.bezierCurveTo(x, y - s * .2, x - s, y - s * .2, x - s, y + s * .3);
        cx.bezierCurveTo(x - s, y + s, x, y + s * 1.2, x, y + s * 1.5);
        cx.bezierCurveTo(x, y + s * 1.2, x + s, y + s, x + s, y + s * .3);
        cx.bezierCurveTo(x + s, y - s * .2, x, y - s * .2, x, y + s * .3); cx.fill();
      };
      const draw = (t) => {
        if (dead) return;
        cx.clearRect(0, 0, W, H);
        P.forEach((o) => {
          o.y -= o.v; o.x += Math.sin(t / 1800 + o.p) * 0.25;
          if (o.y < -10) { o.y = H + 10; o.x = Math.random() * W; }
          cx.globalAlpha = o.a * (0.6 + 0.4 * Math.sin(t / 700 + o.p)); cx.fillStyle = '#d9b46c';
          if (o.h) heart(o.x, o.y, o.r * 2.2); else { cx.beginPath(); cx.arc(o.x, o.y, o.r, 0, 6.28); cx.fill(); }
        });
        requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
    }

    /* ---------- Confeti, corazones y destellos ---------- */
    const cv = fxRef.current, cx = cv.getContext('2d');
    let W, H, ps = [], run = false;
    const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
    rs(); on(window, 'resize', rs);
    const COL = ['#e8cf98', '#cfa968', '#ffffff', '#a1c3d6', '#f3dca2', '#f7e7bd'];
    const pick = (a) => a[Math.floor(Math.random() * a.length)];
    const kind = () => { const r = Math.random(); return r < 0.4 ? 'h' : r < 0.7 ? 's' : 'c'; };
    const heartP = (s) => {
      cx.beginPath(); cx.moveTo(0, s * .35);
      cx.bezierCurveTo(0, -s * .2, -s, -s * .2, -s, s * .35);
      cx.bezierCurveTo(-s, s * .9, 0, s * 1.1, 0, s * 1.5);
      cx.bezierCurveTo(0, s * 1.1, s, s * .9, s, s * .35);
      cx.bezierCurveTo(s, -s * .2, 0, -s * .2, 0, s * .35); cx.fill();
    };
    const star = (s) => {
      cx.beginPath();
      for (let i = 0; i < 8; i++) { const r = i % 2 ? s * .35 : s * 1.2, a = i * Math.PI / 4; cx.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
      cx.closePath(); cx.fill();
    };
    const tick = () => {
      if (dead) return;
      cx.clearRect(0, 0, W, H);
      ps = ps.filter((p) => p.l > 0);
      ps.forEach((p) => {
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= 0.992; p.rot += p.vr; p.l -= p.d;
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot); cx.globalAlpha = clamp(p.l * 1.6); cx.fillStyle = p.c;
        if (p.t === 'h') heartP(p.r); else if (p.t === 's') star(p.r); else cx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        cx.restore();
      });
      if (ps.length) requestAnimationFrame(tick); else { run = false; cx.clearRect(0, 0, W, H); }
    };
    const add = (o) => { ps.push(o); if (!run) { run = true; requestAnimationFrame(tick); } };
    const CN = touch ? 34 : 55;
    window.FX = {
      burst(x, y, n = 22) {
        if (reduce) return;
        for (let i = 0; i < n; i++) {
          const a = Math.random() * 6.283, s = Math.random() * 5 + 2;
          add({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2, g: 0.14, l: 1, d: 0.014 + Math.random() * 0.01, r: Math.random() * 4 + 3, c: pick(COL), t: kind(), rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3 });
        }
      },
      cannon() {
        if (reduce) return;
        [0, 1].forEach((side) => {
          for (let i = 0; i < CN; i++) {
            const dir = side ? -1 : 1;
            add({ x: side ? W + 5 : -5, y: H + 5, vx: dir * (Math.random() * 7 + 2), vy: -(Math.random() * 13 + 8), g: 0.28, l: 1.4, d: 0.006 + Math.random() * 0.004, r: Math.random() * 4 + 3, c: pick(COL), t: kind(), rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4 });
          }
        });
      },
      spark(x, y) {
        if (reduce) return;
        add({ x, y, vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8, g: 0.02, l: 1, d: 0.035, r: Math.random() * 2.5 + 1.5, c: '#e8cf98', t: 's', rot: 0, vr: 0.05 });
      },
    };

    on(window, 'pointerdown', (e) => {
      const t = e.target;
      if (t.closest && t.closest('input,textarea,select,.cf-stage')) return;
      window.FX.burst(e.clientX, e.clientY, t.closest && t.closest('.btn') ? 30 : 16);
    });
    if (!touch) {
      let last = 0;
      on(window, 'mousemove', (e) => { const n = performance.now(); if (n - last > 45) { last = n; window.FX.spark(e.clientX, e.clientY); } });
    }

    /* ---------- Parallax del corazón + botones magnéticos ---------- */
    if (!touch && !reduce) {
      const hw = document.querySelector('.heart-wrap');
      if (hw) on(window, 'mousemove', (e) => {
        if (scrollY < innerHeight) { const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5; hw.style.translate = `${x * -26}px ${y * -18}px`; }
      });
      document.querySelectorAll('.btn').forEach((b) => {
        on(b, 'mousemove', (e) => { const r = b.getBoundingClientRect(); b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.18}px ${(e.clientY - r.top - r.height / 2) * 0.28}px`; });
        on(b, 'mouseleave', () => { b.style.translate = ''; });
      });
    }

    return () => { dead = true; offs.forEach((f) => f()); window.FX = undefined; };
  }, []);

  return (
    <>
      <canvas id="dust" ref={dustRef} />
      <canvas id="fx" ref={fxRef} />
      <div id="glow" ref={glowRef} />
    </>
  );
}