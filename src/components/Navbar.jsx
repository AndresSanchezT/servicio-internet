/* Navbar.jsx — FibraMax · Tailwind · Paleta #03A6EB */

import { useState, useEffect } from 'react';
import logoSinTexto from '/assets/logosintexto.png';

const WA_NUMBER = '51967410041';

const LINKS = [
  ['#nosotros',  'Nosotros'],
  ['#planes',    'Planes'],
  ['#ventajas',  'Ventajas'],
  ['#cobertura', 'Cobertura'],
  ['#faq',       'FAQ'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20contratar%20un%20plan%20de%20internet`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? { background: 'rgba(240, 250, 255, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #b3e8fa', boxShadow: '0 2px 12px #03A6EB18' }
          : { background: 'transparent' }
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#inicio" className="flex items-center no-underline">
          <img
        src={logoSinTexto}
        alt="Cable Lima Centro"
        className="h-20 w-auto object-contain"  // h-9 → h-14 (más grande)
        // sin filter
      />
          <span
            className="font-black text-lg tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif', color: scrolled ? '#0a2a35' : '#fff' }}
          >
            Cable <span style={{ color: '#03A6EB' }}>Lima Centro</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium transition-colors duration-150 no-underline"
                style={{ color: scrolled ? '#1a5a70' : 'rgba(255,255,255,0.85)' }}
                onMouseEnter={e => (e.target.style.color = '#03A6EB')}
                onMouseLeave={e => (e.target.style.color = scrolled ? '#1a5a70' : 'rgba(255,255,255,0.85)')}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-sm px-5 py-2 rounded-lg transition-all duration-150 no-underline active:scale-95"
              style={{ background: '#03A6EB', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0291cc')}
              onMouseLeave={e => (e.currentTarget.style.background = '#03A6EB')}
            >
              Contratar →
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
          style={{ background: menuOpen ? '#e0f5fd' : 'transparent' }}
        >
          <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ background: scrolled ? '#0a2a35' : '#fff' }} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
                style={{ background: scrolled ? '#0a2a35' : '#fff' }} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ background: scrolled ? '#0a2a35' : '#fff' }} />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: '#f0faff', borderTop: '1px solid #b3e8fa' }}
      >
        <ul className="list-none m-0 p-0 px-4 py-3 flex flex-col gap-1">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block font-medium text-sm px-3 py-2.5 rounded-lg transition-colors no-underline"
                style={{ color: '#1a5a70' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#03A6EB'; e.currentTarget.style.background = '#e0f5fd'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#1a5a70'; e.currentTarget.style.background = 'transparent'; }}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2 mt-1" style={{ borderTop: '1px solid #b3e8fa' }}>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center font-bold text-sm px-5 py-3 rounded-xl transition-colors no-underline"
              style={{ background: '#03A6EB', color: '#fff' }}
            >
              Contratar →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}