/* Navbar.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

import { useState, useEffect } from 'react';

const WA_NUMBER = '51999999999';

const LINKS = [
  ['#nosotros',  'Nosotros'],
  ['#planes',    'Planes'],
  ['#ventajas',  'Ventajas'],
  ['#cobertura', 'Cobertura'],
  ['#faq',       'FAQ'],
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20contratar%20un%20plan%20de%20internet`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-purple-100 shadow-sm shadow-purple-50'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 no-underline">
          {/* Reemplaza con tu imagen: <img src={logo} alt="Logo" className="h-9" /> */}
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-sm"
               style={{ fontFamily: 'Outfit, sans-serif' }}>
            CLC
          </div>
          <span className="font-black text-gray-950 text-lg tracking-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}>
            Cable <span className="text-purple-600">Lima Centro</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="text-gray-500 hover:text-purple-600 text-sm font-medium transition-colors duration-150 no-underline"
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
              className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold text-sm px-5 py-2 rounded-lg transition-all duration-150 no-underline"
            >
              Contratar →
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-purple-50 transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-purple-50
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="list-none m-0 p-0 px-4 py-3 flex flex-col gap-1">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium text-sm px-3 py-2.5 rounded-lg transition-colors no-underline"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-gray-100 mt-1">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors no-underline"
            >
              Contratar →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}