/* Nosotros.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

const features = [
  { icon: '🏠', title: 'Doméstico y empresarial', desc: 'Soluciones adaptadas para hogares y negocios de cualquier tamaño.' },
  { icon: '🔌', title: 'Instalación sin costo',   desc: 'Router ONT de última generación incluido, sin gastos ocultos.' },
  { icon: '📡', title: '100% Fibra óptica',        desc: 'Tecnología de última milla para máxima estabilidad y velocidad real.' },
];

const metrics = [
  ['Tecnología',    '100% Fibra Óptica'],
  ['Cobertura',     'Cercado de Lima'],
  ['Tipo servicio', 'Doméstico & Empresa'],
  ['Router ONT',    'Incluido ✓'],
  ['Instalación',   'Gratis ✓'],
  ['Precios',       'Incluyen IGV ✓'],
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Columna izquierda ── */}
          <div>
            {/* Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-0.5 bg-purple-500 rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-purple-500">
                Quiénes somos
              </span>
            </div>

            {/* Título */}
            <h2
              className="font-black text-gray-950 leading-tight tracking-tight mb-5"
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)' }}
            >
              Conectando Lima con<br />
              <span className="text-purple-600">el mejor internet</span>
            </h2>

            {/* Párrafo */}
            <p className="text-gray-500 text-[0.97rem] leading-relaxed mb-8 max-w-lg">
              Somos una empresa dedicada al rubro de internet, brindamos el mejor internet
              del Cercado de Lima. Con tecnología 100% fibra óptica, ofrecemos servicio tanto
              doméstico como empresarial, garantizando velocidades reales y conexión estable
              las 24 horas del día.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {features.map(f => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 min-w-[40px] rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-950 text-sm mb-0.5">{f.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: panel de métricas ── */}
          <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-xl shadow-purple-50">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-gray-400 mb-5">
              Nuestro servicio en cifras
            </p>

            <div className="flex flex-col">
              {metrics.map(([label, val], i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between py-3.5 ${i < metrics.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="text-sm text-gray-400">{label}</span>
                  <span className="text-sm font-bold text-purple-600"
                        style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA inferior */}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <a
                href="#planes"
                className="block text-center bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-150 no-underline"
              >
                Ver nuestros planes →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}