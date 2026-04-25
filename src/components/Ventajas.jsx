/* Ventajas.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

const advantages = [
  {
    icon: '⚡',
    title: 'Velocidad simétrica real',
    desc: 'Sube y baja a la misma velocidad contratada. Sin throttling ni limitaciones en horas pico.',
  },
  {
    icon: '🛡️',
    title: '100% Fibra óptica',
    desc: 'Tecnología de última generación desde la central hasta tu puerta. Mayor estabilidad y menor latencia.',
  },
  {
    icon: '💬',
    title: 'Soporte 24/7',
    desc: 'Atención técnica disponible siempre. Resolvemos tus inconvenientes rápido y eficientemente.',
  },
  {
    icon: '🔧',
    title: 'Instalación gratuita',
    desc: 'Nuestro equipo técnico instala tu fibra óptica y router ONT sin ningún costo adicional.',
  },
  {
    icon: '📦',
    title: 'Router ONT incluido',
    desc: 'Te proveemos el equipo necesario para disfrutar tu conexión desde el primer momento. Sin sorpresas.',
  },
  {
    icon: '🏢',
    title: 'Doméstico y empresarial',
    desc: 'Planes para hogares y empresas. Escalamos contigo según tus necesidades de ancho de banda.',
  },
];

export default function Ventajas() {
  return (
    <section id="ventajas" className="bg-purple-50 border-y border-purple-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-0.5 bg-purple-500 rounded-full" />
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-purple-500">
            ¿Por qué elegirnos?
          </span>
        </div>
        <h2
          className="font-black text-gray-950 leading-tight tracking-tight mb-12 max-w-lg"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)' }}
        >
          La diferencia que sientes{' '}
          <span className="text-purple-600">desde el día uno</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map(a => (
            <div
              key={a.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 transition-all duration-200 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl mb-5">
                {a.icon}
              </div>
              <p className="font-bold text-gray-950 text-[0.95rem] mb-2"
                 style={{ fontFamily: 'Outfit, sans-serif' }}>
                {a.title}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}