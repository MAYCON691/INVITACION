/* =====================================================================
   CONFIGURACIÓN (EDITA AQUÍ)
   ===================================================================== */
export const CONFIG = {
  whatsapp: { vidal: '59175830061', blanca: '59178958716' }, // Bolivia (+591)
  fecha: '2026-12-05T08:00:00-04:00',                          // Hora de Bolivia (UTC-4)
  musicaInicio: 8,                                             // la música empieza en el segundo 8
};

/* =====================================================================
   CARTELERA: "img" = nombre del archivo SIN extensión en /public/cartelera
   Se prueba .png .jpg .jpeg .webp automáticamente.
   ===================================================================== */
export const ACTS = [
  { n: 'Miguel Orías', s: 'y Los Ilegales', t: 'Estelar', img: 'miguel-orias', bg: 'linear-gradient(160deg,#2a2a2a,#0e0e0e 60%,#8a6a25)' },
  { n: 'Turro Mantikos', s: 'Urbano', t: 'Invitados', img: 'turro-mantikos', bg: 'linear-gradient(160deg,#4a4a52,#15151a)' },
  { n: 'Sabor Sabor', s: 'Desde Cochabamba · Bolivia', t: 'Cochabamba', img: 'sabor-sabor', bg: 'linear-gradient(160deg,#6a4fb8,#183f2a 80%)' },
  { n: 'Las Consentidas', s: 'Erlinda Cruz y Los Solitarios', t: 'Folklore', img: 'las-consentidas', bg: 'linear-gradient(160deg,#9b5fc0,#4a2a6b)' },
  { n: 'Código Fher', s: 'Música en vivo', t: 'En vivo', img: 'codigo-fher', bg: 'linear-gradient(160deg,#4b2a7a,#09090c)' },
  { n: 'Nelson Alcocer Yucra', s: 'La voz original', t: 'Leyenda', img: 'nelson-alcocer', bg: 'linear-gradient(160deg,#d98a3a,#4a1d0a)' },
  { n: 'Kunan Runa', s: 'Música andina', t: 'Andino', img: 'nan-runa', bg: 'linear-gradient(160deg,#d3743a,#5a1f12)' },
  { n: 'Agrupación Gusdanay', s: 'Siempre en tu corazón', t: 'Cumbia', img: 'gusdanay', bg: 'linear-gradient(160deg,#ff9bb4,#1c1c22 70%)' },
  { n: 'Código Extremo', s: 'Internacional · Música en vivo', t: 'Internacional', img: 'codigo-extremo', bg: 'linear-gradient(160deg,#e4572e,#1b1b1b 70%)' },
  { n: 'After Kumbiero', s: 'Cumbia & trompeta', t: 'Cumbia', img: 'after-kumbiero', bg: 'linear-gradient(160deg,#d779c8,#3a1b66)' },
  { n: 'Proyección Murillo', s: 'La original de Alfonzo Zabala · 23 años', t: 'Banda', img: 'proyeccion-murillo', bg: 'linear-gradient(160deg,#2d7fd0,#0f3e75)' },
  { n: 'GO PRO · TONY', s: 'Sonido & Iluminación', t: 'Sonido', img: 'sonido', bg: 'linear-gradient(160deg,#1f3b4a,#07090b)' },
  { n: 'Gran Faraón', s: 'Producciones', t: 'Producción', img: 'gran-faraon', bg: 'linear-gradient(160deg,#4aa6d8,#7a3d9a)' },
  { n: 'Leyla Castro', s: 'Maestra de ceremonia', t: 'MC', img: 'leyla-castro', bg: 'linear-gradient(160deg,#e76f7a,#8b2c47)' },
  { n: 'Saúl Aliaga A.', s: 'Jefe de operaciones', t: 'Operaciones', img: 'saul-aliaga', bg: 'linear-gradient(160deg,#c0392b,#1a1a1a)' },
];

/* Mapa de puntos (cada fila = 5° de latitud, cada columna = 5° de longitud) */
export const MAPA = [
  [[14,19],[25,31],[40,41]],
  [[10,20],[24,32],[49,58]],
  [[3,23],[25,32],[36,42],[43,71]],
  [[3,23],[26,31],[33,34],[36,43],[44,71]],
  [[3,16],[21,24],[28,30],[36,71]],
  [[4,16],[21,25],[34,35],[37,71]],
  [[6,25],[34,35],[35,71]],
  [[8,24],[35,40],[45,66]],
  [[8,23],[35,67]],
  [[10,22],[34,38],[41,66]],
  [[13,21],[33,61],[63,64]],
  [[12,19],[33,60]],
  [[14,19],[20,21],[33,52],[55,59]],
  [[17,20],[33,46],[50,53],[55,59],[61,61]],
  [[20,26],[33,46],[51,52],[55,58]],
  [[21,27],[34,46],[55,57],[58,60]],
  [[20,26],[38,46],[55,56],[58,61]],
  [[19,29],[38,46],[55,57],[62,67]],
  [[20,29],[38,46],[56,60],[63,66]],
  [[20,28],[38,45],[46,47],[59,66]],
  [[21,28],[38,45],[46,47],[58,66]],
  [[21,27],[39,43],[57,66]],
  [[21,26],[39,43],[58,66]],
  [[21,25],[40,42],[59,65],[70,71]],
  [[21,24],[62,63],[70,71]],
  [[21,23],[69,70]],
  [[21,22]],
  [[22,23]],
];