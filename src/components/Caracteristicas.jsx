/* Caracteristicas.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

const items = [
  {
    icon: '⚡',
    title: 'Alta velocidad',
    desc: 'Navega, descarga y transmite contenido sin interrupciones. Ideal para streaming, gaming y trabajo remoto.',
  },
  {
    icon: '📶',
    title: 'Estabilidad de conexión',
    desc: 'Sin cortes ni caídas. Una conexión estable es más importante que solo tener alta velocidad.',
  },
  {
    icon: '🎧',
    title: 'Soporte técnico 24/7',
    desc: 'Atención rápida ante cualquier problema. Un buen soporte marca la diferencia cuando hay fallas.',
  },
  {
    icon: '🛡️',
    title: 'Seguridad',
    desc: 'Protección contra accesos no autorizados y amenazas. Cuida tus datos personales en todo momento.',
  },
  {
    icon: '🏠',
    title: 'Cobertura y alcance',
    desc: 'El internet llega a toda tu casa o negocio sin zonas muertas ni señal débil en ningún rincón.',
  },
];

export default function Caracteristicas() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-purple-500 mb-3">
            Lo que importa
          </p>
          <h2
            className="font-black text-gray-950 leading-tight tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}
          >
            Las 5 claves de un{' '}
            <span className="text-purple-600">buen internet</span>
          </h2>
        </div>

        {/* Cards — 2 col móvil, 3 col md, 5 col lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map(item => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <p className="font-bold text-gray-950 text-sm mb-2"
                 style={{ fontFamily: 'Outfit, sans-serif' }}>
                {item.title}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}