/* Cobertura.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

const WA_NUMBER = '51967410041';

const steps = [
  {
    n: '1',
    title: 'Elige tu plan',
    desc: 'Selecciona el plan que mejor se adapte a tus necesidades: 500, 750 o 1000 Mbps.',
  },
  {
    n: '2',
    title: 'Contáctanos por WhatsApp',
    desc: 'Escríbenos y verificamos disponibilidad de cobertura en tu dirección en minutos.',
  },
  {
    n: '3',
    title: 'Instalación gratuita',
    desc: 'Nuestro equipo técnico instala la fibra óptica y el router ONT sin costo alguno.',
  },
  {
    n: '4',
    title: '¡A navegar!',
    desc: 'Disfruta internet ultrarrápido desde el mismo día de la instalación.',
  },
];

export default function Cobertura() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20saber%20si%20tienen%20cobertura%20en%20mi%20direcci%C3%B3n`;

  return (
    <section id="cobertura" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Columna izquierda: pasos ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-0.5 bg-purple-500 rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-purple-500">
                Proceso de instalación
              </span>
            </div>

            <h2
              className="font-black text-gray-950 leading-tight tracking-tight mb-10"
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.5rem)' }}
            >
              ¿Cómo empezar a navegar{' '}
              <span className="text-purple-600">con nosotros?</span>
            </h2>

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={step.n} className="flex items-start gap-4">
                  {/* Número + línea conectora */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 min-w-[40px] rounded-full bg-purple-600 flex items-center justify-center text-white font-black text-sm"
                         style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {step.n}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-6 bg-purple-100 mt-1" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <p className="font-bold text-gray-950 text-sm mb-1">{step.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: panel de cobertura ── */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8 text-center shadow-lg shadow-purple-50">
            <div className="bg-white border-2 border-dashed border-purple-200 rounded-2xl py-10 px-6 mb-6">
              <span className="text-5xl">📍</span>
            </div>

            <h3
              className="font-black text-purple-700 text-xl mb-2"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Cercado de Lima
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cobertura disponible en toda el área del Cercado de Lima.
              Consulta si tu dirección específica tiene cobertura disponible.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-150 no-underline"
            >
              Verificar mi cobertura →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}