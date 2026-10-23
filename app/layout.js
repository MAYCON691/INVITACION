import './globals.css';
import { Playfair_Display, Cormorant_Garamond, Great_Vibes, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-playfair', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' });
const vibes = Great_Vibes({ subsets: ['latin'], weight: '400', variable: '--font-vibes', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500', '600', '700'], variable: '--font-montserrat', display: 'swap' });

export const metadata = {
  title: 'Vidal y Blanca · Pasaporte a nuestra boda',
  description: 'Acompáñanos al mejor viaje de nuestras vidas. 05 de diciembre de 2026 · El Alto, Bolivia.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#a1c3d6',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${cormorant.variable} ${vibes.variable} ${montserrat.variable}`}>
      <body className="loading">{children}</body>
    </html>
  );
}