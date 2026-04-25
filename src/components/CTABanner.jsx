/* CTABanner.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

const WA_NUMBER = '51999999999';

export default function CTABanner() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20contratar%20un%20plan%20de%20internet`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="relative overflow-hidden bg-purple-600 rounded-3xl px-6 py-16 sm:px-12 sm:py-20 text-center">

        {/* Decoración de fondo */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-500 opacity-40 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-purple-700 opacity-30 pointer-events-none" />

        {/* Contenido */}
        <div className="relative z-10">
          <h2
            className="font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            ¿Listo para conectarte al mejor internet?
          </h2>
          <p className="text-purple-200 text-base sm:text-lg mb-8">
            Instalación gratis · Router ONT incluido · Precios con IGV · Fibra óptica 100%
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#planes"
              className="w-full sm:w-auto text-center bg-white hover:bg-purple-50 active:scale-95 text-purple-700 font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-150 no-underline"
            >
              Ver todos los planes →
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbd5a] active:scale-95 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-150 no-underline shadow-lg shadow-green-200"
            >
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#25D366] font-black text-[11px]">
                W
              </span>
              Hablar con un asesor
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}