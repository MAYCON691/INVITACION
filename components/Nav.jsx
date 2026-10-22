'use client';
import { useEffect, useState } from 'react';

const ITEMS = [
  ['inicio', 'Inicio'], ['invitacion', 'Invitación'], ['pasaporte', 'Pasaporte'], ['cronograma', 'Cronograma'],
  ['recepcion', 'Recepción'], ['padrinos', 'Padrinos'], ['galeria', 'Galería'], ['cartelera', 'Cartelera'], ['confirmar', 'Confirmar'],
];

export default function Nav() {
  const [act, setAct] = useState('inicio');
  useEffect(() => {
    // la sección activa es la que cruza el centro de la pantalla
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setAct(e.target.id); }),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    document.querySelectorAll('[data-sec]').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav id="dots" aria-label="Secciones">
      {ITEMS.map(([id, t]) => (
        <a key={id} href={`#${id}`} className={act === id ? 'act' : ''}><span>{t}</span></a>
      ))}
    </nav>
  );
}