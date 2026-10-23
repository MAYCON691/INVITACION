import { Plane, Pin } from './Icons';

const Ico = ({ children }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="#22384a" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">{children}</svg>
);

/* ---------- Divisor con avión ---------- */
export function FlyDiv({ bg, pad }) {
  return (
    <div style={{ background: bg, padding: pad }}>
      <div className="wrap"><div className="flydiv rv"><Plane /></div></div>
    </div>
  );
}

/* ---------- Invitación ---------- */
const SPK = [['7%', '10%', '0s'], ['90%', '14%', '.6s'], ['16%', '44%', '1.1s'], ['84%', '48%', '1.7s'], ['9%', '82%', '2.1s'], ['92%', '86%', '.9s']];

export function Invitacion() {
  return (
    <section className="invite" id="invitacion" data-sec>
      <div className="wrap">
        <div className="glass invite-card rv">
          {SPK.map(([l, t, d], i) => <i key={i} className="spk" style={{ left: l, top: t, animationDelay: d }} />)}
          <p className="lead">¡¡¡Acompáñanos<br />al mejor viaje de nuestras vidas!</p>
          <div className="script-names gold-text"><span>Vidal</span><span className="amp">&amp;</span><span>Blanca</span></div>
          <p className="quote">“El amor es un viaje y estamos agradecidos por cada destino juntos”</p>
          <p className="bless">Con la bendición de Dios y nuestros padres:</p>
          <div className="parents">
            <div className="neu rv" data-rv="left" style={{ '--d': '.15s' }}>Manuel Tola Quispe<br />Yola Arce de Tola</div>
            <div className="neu rv" data-rv="right" style={{ '--d': '.3s' }}>Pedro Apaza Luque<br />Adelaida Condori Marca</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pasaporte ---------- */
export function Pasaporte() {
  return (
    <section className="passport-sec" id="pasaporte" data-sec>
      <div className="wrap center">
        <span className="eyebrow rv">Documento de viaje</span>
        <h2 className="sec-title rv">Tu <em>pasaporte</em> a nuestra boda</h2>
        <div className="neu passport tilt rv" data-rv="zoom">
          <div className="pp-head">PASAPORTE A NUESTRA BODA</div>
          <div className="pp-body" style={{ textAlign: 'left' }}>
            <div className="pp-photo"><div className="frame"><img src="/pareja-3.jpg" alt="Vidal y Blanca" /></div></div>
            <div className="pp-info">
              <div className="pp-top">
                <div><div className="pp-lbl">Tipo</div><div className="pp-val">Matrimonio</div></div>
                <div><div className="pp-lbl">N° de Pasaporte</div><div className="pp-val">05 . 12 . 2026</div></div>
              </div>
              <div className="pp-row"><div className="pp-lbl">Novio</div><div className="pp-val">Vidal Tola Arce</div></div>
              <div className="pp-row"><div className="pp-lbl">Novia</div><div className="pp-val">Blanca Apaza Condori</div></div>
              <div className="pp-row"><div className="pp-lbl">Ceremonia Religiosa</div><div className="pp-val">Catedral Virgen de Candelaria (Collpani)</div></div>
              <div className="pp-row"><div className="pp-lbl">Ubicación</div><div className="pp-val">Zona Cosmos 79 lado Hospital del Sur</div></div>
              <div className="pp-row"><div className="pp-lbl">Fecha y Hora</div><div className="pp-val">05 de diciembre de 2026 • 08:00 a.m.</div></div>
              <a className="btn btn-gold" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Catedral+Virgen+de+Candelaria+Collpani+El+Alto+Bolivia"><Pin />Cómo llegar</a>
            </div>
          </div>
          <div className="mrz">
            <div>{'<<<<<<<ACOMPAÑAMOS<<A<<LA<<SIGUIENTE<<AVENTURA<<DE<<NUESTRA<<VIDA<<<<<'}</div>
            <div>{'<<<<<<DICIEMBRE<<05<<2026<<<<<<<<<<>>>>VIDAL>>BLANCA>>>>>>>>>>'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cronograma ---------- */
const TL = [
  { h: 'Ceremonia', t: '08:00 a.m.', icon: <Ico><path d="M32 4v10M27 8h10M32 14L14 30v26h36V30zM26 56V42a6 6 0 0 1 12 0v14M8 56h48" /></Ico> },
  { h: 'Acto Principal', t: '15:00 p.m.', icon: <Ico><circle cx="24" cy="38" r="14" /><circle cx="40" cy="38" r="14" /><path d="M28 14l-4 6 6 0 -2 -6zM36 12l6 0 -3 6z" stroke="#a8823f" /></Ico> },
  { h: 'Recepción de Invitados', t: '16:00 p.m.', icon: <Ico><circle cx="22" cy="20" r="8" /><path d="M8 54c0-12 6-20 14-20s14 8 14 20zM44 24a7 7 0 1 1 0 .1M40 40c8 0 16 6 16 14H44" /></Ico> },
  { h: 'Catering', t: '19:00 p.m.', icon: <Ico><circle cx="34" cy="32" r="18" /><circle cx="34" cy="32" r="11" /><path d="M8 10v14a5 5 0 0 0 10 0V10M13 10v44M56 10v44M56 10c-6 6-6 18 0 24" /></Ico> },
  { h: 'Pastel', t: '22:00 p.m.', icon: <Ico><path d="M14 54h36M18 54V42h28v12M20 42V30h24v12M24 30V20h16v10M32 20c-4-6 0-8 0-12 0 4 4 6 0 12z" /></Ico> },
  { h: 'Despedida', t: '00:00 a.m.', icon: <svg viewBox="0 0 24 24"><use href="#i-car" /></svg>, style: { color: '#22384a' } },
];

export function Cronograma() {
  return (
    <section className="sched" id="cronograma" data-sec>
      <Plane className="plane-deco" rotate={75} data-speed=".12" />
      <div className="wrap center">
        <span className="eyebrow rv">Itinerario del vuelo</span>
        <h2 className="sec-title rv"><em>Cronograma</em></h2>
        <div className="tl" id="tl">
          <div className="tl-line"><div className="tl-fill" id="tlFill" /></div>
          <svg className="tl-heart" id="tlHeart" viewBox="0 0 24 24"><use href="#i-heart" /></svg>
          {TL.map((it) => (
            <div className="tl-item rv" key={it.h}>
              <div className="tl-card glass">
                <div className="tl-ico neu" style={it.style}>{it.icon}</div>
                <div><h3>{it.h}</h3><p>{it.t}</p></div>
              </div>
              <span className="tl-node" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Recepción (boarding pass) ---------- */
export function Recepcion() {
  return (
    <section className="board" id="recepcion" data-sec>
      <div className="wrap center">
        <span className="eyebrow rv">Tarjeta de embarque</span>
        <h2 className="sec-title rv">Celebremos <em>juntos</em></h2>
        <div className="ticket tilt rv" data-rv="zoom" style={{ textAlign: 'left' }}>
          <div className="t-bar">CELEBREMOS</div>
          <div className="t-body">
            <div className="t-brand">
              <div>
                <div className="hd">NUESTRA BODA</div>
                <div className="sc">Vidal &amp; Blanca</div>
                <div className="nc">¡NOS CASAMOS!</div>
              </div>
              <svg className="t-heart" viewBox="0 0 120 110"><use href="#heartMini" /></svg>
            </div>

            <div className="t-grid">
              <div className="t-f"><small>Recepción</small><span><b>ARENA BRANIFF</b> / Horas 15:00 p.m.</span></div>
              <div className="t-f"><small>Vuelo</small><span>05 . 12 . 2026</span></div>
              <div className="t-f"><small>Dirección</small><span>Ubicado al lado del polideportivo Héroes de Octubre, Av. Juan Pablo II (16 de Julio).</span></div>
              <div className="t-f"><small>Destino</small><span>Ciudad El Alto</span></div>
            </div>

            <p className="t-wish">Tu presencia desde el inicio hará que este día sea aún más especial. Te esperamos a tiempo.</p>

            <a className="btn btn-gold t-go" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Arena+Braniff+El+Alto+Bolivia">
              <Pin />Cómo llegar
            </a>

            <div className="t-note">
              <span>Queremos que disfrutes con nosotros al máximo, por ello la recepción está planificada para adultos</span>
              <span><b>Código de vestimenta: formal</b></span>
            </div>
            <div className="barcode" />
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------- Padrinos ---------- */
const STAMPS = [
  { l: '2%', b: '70px', r: '-8deg', d: '.1s', c: '#e34848', t: 'ARRIVAL', n: 'MADRID', s: 'SPAIN' },
  { l: '14%', b: '20px', r: '6deg', d: '.2s', c: '#d25a5a', t: 'DEPARTURE', n: 'SYDNEY', s: 'AUSTRALIA', sq: 1 },
  { l: '27%', b: '80px', r: '-4deg', d: '.3s', c: '#2c9a8e', t: 'MOSCOW', n: 'РОССИЯ', s: 'ARRIVAL' },
  { l: '2%', b: '-20px', r: '-10deg', d: '.4s', c: '#2f8f52', t: 'DEPARTURE', n: 'BERLIN', s: 'GERMANY' },
  { l: '40%', b: '6px', r: '8deg', d: '.5s', c: '#e08a2d', t: 'IMMIGRATION', n: 'ROME', s: 'ITALIA' },
  { l: '52%', b: '70px', r: '-6deg', d: '.6s', c: '#2a9d78', t: 'ARRIVAL', n: 'PORTLAND', s: 'U.S.A.', sq: 1 },
  { l: '64%', b: '0', r: '5deg', d: '.7s', c: '#d97a2a', t: 'CANADA', n: 'TORONTO', s: 'ARRIVAL' },
  { l: '76%', b: '56px', r: '-7deg', d: '.8s', c: '#4f9a40', t: 'PARIS', n: 'IMMIGRATION', s: 'FRANCE', sq: 1 },
];

export function Padrinos() {
  return (
    <section className="godp" id="padrinos" data-sec>
      <div className="wrap center">
        <span className="eyebrow rv">Junto a nuestros</span>
        <h2 className="sec-title rv"><em>Padrinos</em></h2>
        <div className="glass gp-card rv" style={{ textAlign: 'left' }}>
          <div>
            <h3>Junto a nuestros padrinos</h3>
            <p className="gp-thanks">Gracias por ser nuestros padrinos y acompañarnos en este día tan especial</p>
            <div className="gp-list">
              <div><h4>Padrinos de Religión y Civil:</h4><p>Sr. Roberto Huayhua Chuquimia<br />Sra. Elena Tola de Huayhua</p></div>
              <div><h4>Madrina de Torta:</h4><p>Lic. Magaly Tola Arce<br />e hijos</p></div>
              <div><h4>Padrinos de Conteo:</h4><p>Sr. Agustín Huayhua Condori<br />Sra. Dionicia Quito de Huayhua</p></div>
            </div>
          </div>
          <div className="gp-photo"><img src="/pareja-2.jpg" alt="Vidal y Blanca" style={{ objectPosition: 'center 30%' }} /></div>
          <div className="stamps rv" id="stamps">
            {STAMPS.map((p) => (
              <div key={p.n} className={`stamp${p.sq ? ' sq' : ''}`} style={{ left: p.l, bottom: p.b, '--r': p.r, '--d': p.d, color: p.c }}>
                {p.t}<b>{p.n}</b>{p.s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Logística ---------- */
export function Logistica() {
  return (
    <section className="logi">
      <div className="wrap center">
        <span className="eyebrow rv">Puntos de encuentro</span>
        <h2 className="sec-title rv">Recojo y <em>conteo</em></h2>
        <div className="logi-grid">
          <div className="lg-card glass rv" data-rv="left">
            <div className="lg-ico neu"><svg viewBox="0 0 24 24"><use href="#i-car" /></svg></div>
            <h3>Recojo de Padrinos</h3>
            <div className="lg-time">Horas 08:00 a.m.</div>
            <p>Concentración en el domicilio de los Novios, Av. Señor de Lagunas, Zona Santa Fe, ciudad de El Alto.</p>
            <a className="btn btn-neu" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Av.+Se%C3%B1or+de+Lagunas+Santa+Fe+El+Alto+Bolivia"><Pin />Ver ubicación</a>
          </div>
          <div className="lg-card glass rv" data-rv="right">
            <div className="lg-ico neu"><svg viewBox="0 0 24 24"><use href="#i-gift" /></svg></div>
            <h3>Conteo de Regalos</h3>
            <div className="lg-time">Horas 14:00 p.m.</div>
            <p><b>ARENA BRANIFF</b> — ubicado al lado del polideportivo Héroes de Octubre, Av. Juan Pablo II (16 de Julio).</p>
            <a className="btn btn-neu" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Arena+Braniff+El+Alto+Bolivia"><Pin />Ver ubicación</a>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------- Contacto MAYK TECNOLOGY ---------- */
export function Contacto() {
  const msg = encodeURIComponent('Hola MAYK TECNOLOGY, vi la invitación de boda de Vidal y Blanca. Quiero que me asesores con una invitación digital.');
  return (
    <section className="mayk" id="mayk" data-sec>
      <div className="wrap center">
        <span className="eyebrow rv">Esta invitación fue creada por</span>
        <h2 className="sec-title rv">MAYK <em>Technology</em></h2>
        <div className="glass mayk-card rv">
          <div className="mayk-logo">MAYK <em>TECNOLOGY</em></div>
          <p className="mayk-tag">¿Quieres una invitación digital como esta? Te asesoro con tu diseño, música, confirmación por WhatsApp y más.</p>
          <div className="mayk-list">
            <span>Invitaciones digitales</span>
            <span>Páginas web</span>
            <span>Sistemas web</span>
          </div>
          <div className="mayk-info">
            <div>WhatsApp: <a href="https://wa.me/59162341128">+591 62341128</a></div>
            <div>Correo: <a href="mailto:mayconapaza23@gmail.com">mayconapaza23@gmail.com</a></div>
          </div>
          <div className="btn-row">
            <a className="btn btn-gold" target="_blank" rel="noopener noreferrer" href={`https://wa.me/59162341128?text=${msg}`}>Quiero que me asesores</a>
            <a className="btn btn-sky" href="mailto:mayconapaza23@gmail.com?subject=Invitaci%C3%B3n%20digital">Enviar correo</a>
          </div>
          <p className="mayk-work">Trabajo realizado: <a href="https://360.terminalelalto.gob.bo/" target="_blank" rel="noopener noreferrer">Terminal Metropolitana El Alto 360°</a></p>
        </div>
      </div>
    </section>
  );
}
/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer>
      <svg className="compass rv" viewBox="0 0 200 200" fill="currentColor">
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 7" />
        <g className="needle"><path d="M100 22L108 92 100 100 92 92zM100 178L92 108 100 100 108 108z" /><path d="M22 100L92 92 100 100 92 108zM178 100L108 108 100 100 108 92z" opacity=".75" /></g>
        <circle cx="100" cy="100" r="9" fill="#cfe1ec" />
        <g fontFamily="Playfair Display,serif" fontWeight="700" fontSize="14" textAnchor="middle">
          <text x="100" y="14">N</text><text x="100" y="198">S</text><text x="10" y="105">W</text><text x="190" y="105">E</text>
        </g>
      </svg>
      <div className="wrap">
        <div className="script-names"><span>Vidal</span> <span className="amp">&amp;</span> <span>Blanca</span></div>
        <p>05 de diciembre de 2026 · El Alto, Bolivia</p>
        <small>Gracias por ser parte de nuestro viaje</small>
      </div>
    </footer>
  );
}