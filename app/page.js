import Preloader from '../components/Preloader';
import ScrollFX from '../components/ScrollFX';
import Efectos from '../components/Efectos';
import Musica from '../components/Musica';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Cuenta from '../components/Cuenta';
import Galeria from '../components/Galeria';
import Cartelera from '../components/Cartelera';
import Rsvp from '../components/Rsvp';
import {
  FlyDiv, Invitacion, Pasaporte, Cronograma, Recepcion, Padrinos, Logistica, Contacto, Footer,
} from '../components/Secciones';
import { SvgDefs } from '../components/Icons';
import {
  FlyDiv, Invitacion, Pasaporte, Cronograma, Recepcion, Padrinos, Logistica, Footer,
} from '../components/Secciones';

export default function Page() {
  return (
    <>
      <SvgDefs />
      <Preloader />
      <ScrollFX />
      <Efectos />
      <Musica />
      <Nav />

      <Hero />
      <Invitacion />
      <FlyDiv bg="var(--sky-4)" pad="0 20px 50px" />
      <Pasaporte />
      <Cuenta />
      <Cronograma />
      <Recepcion />
      <Padrinos />
      <FlyDiv bg="#d9e8f1" pad="0 20px 20px" />
      <Logistica />
      <Galeria />
      <Cartelera />
      <Rsvp />
      <Contacto />
      <Footer />
    </>
  );
}