/* App.jsx — Página principal FibraMax
   Ensambla todos los componentes en orden */

import './styles/globals.css';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Nosotros  from './components/Nosotros';
import Caracteristicas  from './components/Caracteristicas';
import Planes    from './components/Planes';
import Terminos  from './components/Terminos';
import Ventajas  from './components/Ventajas';
import Cobertura from './components/Cobertura';
import FAQ       from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer    from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Caracteristicas />
      <Planes />
      <Terminos />
      <Ventajas />
      <Cobertura />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
}
