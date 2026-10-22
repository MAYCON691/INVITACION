/* Galería pineada: las 3 fotos de la pareja cambian al hacer scroll (la lógica está en ScrollFX) */
const SLIDES = [
  { c: 'Capítulo I', h: 'Nuestro destino', p: 'Dos caminos que se encontraron para volar juntos.', img: '/pareja-1.jpg', pos: 'center 20%' },
  { c: 'Capítulo II', h: 'Mi lugar seguro', p: 'Contigo cada viaje se vuelve hogar.', img: '/pareja-2.jpg', pos: 'center 35%' },
  { c: 'Capítulo III', h: 'De la mano', p: 'El mejor viaje de nuestras vidas apenas comienza.', img: '/pareja-3.jpg', pos: 'center 25%' },
];

const BOKEH = [[240, '6%', '12%', 11], [160, '78%', '20%', 9], [300, '70%', '62%', 14], [120, '14%', '70%', 8], [80, '46%', '8%', 10]];

export default function Galeria() {
  return (
    <section className="story" id="galeria" data-sec>
      <div className="stage">
        <div className="big" id="bigTxt">Amor</div>
        {BOKEH.map(([s, l, t, d], i) => <i key={i} className="bk" style={{ width: s, height: s, left: l, top: t, animationDuration: d + 's' }} />)}

        {SLIDES.map((s, i) => (
          <div className="slide" data-i={i} key={s.h}>
            <div className="txt"><small>{s.c}</small><h3>{s.h}</h3><p>{s.p}</p></div>
            <div className="pic"><img src={s.img} alt="Vidal y Blanca" style={{ objectPosition: s.pos }} /></div>
          </div>
        ))}

        <div className="counter"><i className="on" /><i /><i /></div>
      </div>
    </section>
  );
}