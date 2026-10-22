'use client';
import { useEffect, useRef } from 'react';

/* Barra de progreso con avión, reveal, parallax, hero, línea de tiempo y galería pineada */
export default function ScrollFX() {
  const barRef = useRef(null);
  const planeRef = useRef(null);

  useEffect(() => {
    const $ = (s) => document.querySelector(s);
    const $$ = (s) => [...document.querySelectorAll(s)];
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

    // reveal
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    $$('.rv').forEach((el) => io.observe(el));

    const tl = $('#tl'), tlFill = $('#tlFill'), tlHeart = $('#tlHeart');
    const story = $('#galeria'), slides = $$('.slide'), ticks = $$('.counter i'), big = $('#bigTxt');
    const para = $$('[data-speed]'), heroWrap = $('.hero .wrap');
    const words = ['Amor', 'Fe', 'Juntos'];
    let ticking = false, lastIdx = -1;

    const onScroll = () => {
      const sy = scrollY, vh = innerHeight;
      const max = Math.max(1, document.documentElement.scrollHeight - vh);
      const p = clamp(sy / max) * 100;
      if (barRef.current) barRef.current.style.width = p + '%';
      if (planeRef.current) planeRef.current.style.left = p + '%';

      if (!reduce) para.forEach((el) => {
        const r = el.getBoundingClientRect();
        el.style.translate = `0 ${(r.top + r.height / 2 - vh / 2) * -parseFloat(el.dataset.speed)}px`;
      });

      if (heroWrap && sy < vh * 1.2) {
        const h = clamp(sy / vh);
        heroWrap.style.transform = `translateY(${sy * 0.18}px) scale(${1 - h * 0.06})`;
        heroWrap.style.opacity = 1 - h * 0.9;
      }

      if (tl) {
        const tr = tl.getBoundingClientRect(), prog = clamp((vh * 0.55 - tr.top) / tr.height);
        tlFill.style.height = prog * 100 + '%';
        tlHeart.style.top = `calc(${prog * 100}% - 14px)`;
      }

      if (story) {
        const sr = story.getBoundingClientRect(), sp = clamp(-sr.top / (sr.height - vh));
        slides.forEach((s, i) => {
          const d = sp * slides.length - (i + 0.5), a = Math.abs(d), op = clamp(1.25 - a * 1.9);
          s.style.opacity = op;
          s.style.transform = `translateY(${d * -70}px) scale(${1 - clamp(a) * 0.1})`;
          s.style.pointerEvents = op > 0.5 ? 'auto' : 'none';
          s.style.visibility = op <= 0.01 ? 'hidden' : 'visible';
        });
        const idx = Math.min(slides.length - 1, Math.floor(sp * slides.length));
        if (idx !== lastIdx) {
          ticks.forEach((t, i) => t.classList.toggle('on', i === idx));
          big.textContent = words[idx]; lastIdx = idx;
        }
        big.style.transform = `translate(calc(-50% + ${(0.5 - sp) * 220}px),-50%)`;
      }
      ticking = false;
    };
    const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
    const orient = () => setTimeout(onScroll, 300);

    addEventListener('scroll', req, { passive: true });
    addEventListener('resize', onScroll);
    addEventListener('orientationchange', orient);
    onScroll();

    return () => {
      io.disconnect();
      removeEventListener('scroll', req);
      removeEventListener('resize', onScroll);
      removeEventListener('orientationchange', orient);
    };
  }, []);

  return (
    <div id="progress">
      <i ref={barRef} />
      <svg ref={planeRef} viewBox="0 0 24 24"><use href="#i-plane" width="24" height="24" transform="rotate(90 12 12)" /></svg>
    </div>
  );
}