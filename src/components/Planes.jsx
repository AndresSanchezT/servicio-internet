/* Planes.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

const WA_NUMBER = '51999999999';

const plans = [
  {
    name: 'Plan Básico',
    mbps: '500',
    tag: 'Fibra Óptica Simétrica',
    featured: false,
    features: [
      '500 Mbps de bajada',
      '500 Mbps de subida',
      'Router ONT incluido',
      'Instalación gratis',
      'Precio incluye IGV',
      'Soporte técnico',
      'Ideal para hogares',
    ],
    waMsg: 'Hola%2C%20me%20interesa%20el%20plan%20de%20500%20Mbps',
  },
  {
    name: 'Plan Avanzado',
    mbps: '750',
    tag: 'Fibra Óptica Simétrica',
    featured: true,
    features: [
      '750 Mbps de bajada',
      '750 Mbps de subida',
      'Router ONT incluido',
      'Instalación gratis',
      'Precio incluye IGV',
      'Soporte técnico 24/7',
      'Hogares y pequeña empresa',
    ],
    waMsg: 'Hola%2C%20me%20interesa%20el%20plan%20de%20750%20Mbps',
  },
  {
    name: 'Plan Premium',
    mbps: '1000',
    tag: 'Fibra Óptica Simétrica',
    featured: false,
    features: [
      '1000 Mbps de bajada',
      '1000 Mbps de subida',
      'Router ONT incluido',
      'Instalación gratis',
      'Precio incluye IGV',
      'Soporte técnico prioritario',
      'Empresas & Power users',
    ],
    waMsg: 'Hola%2C%20me%20interesa%20el%20plan%20de%201000%20Mbps',
  },
];

function CheckIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 font-bold text-[10px]">
      ✓
    </span>
  );
}

function PlanCard({ plan }) {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${plan.waMsg}`;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 transition-all duration-250 group
        ${plan.featured
          ? 'bg-purple-600 shadow-2xl shadow-purple-200 scale-[1.03] border-2 border-purple-500'
          : 'bg-white border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100 hover:border-purple-200'
        }`}
    >
      {/* Badge más popular */}
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-950 text-white text-[10px] font-black px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide">
          🏆 Más popular
        </div>
      )}

      {/* Nombre del plan */}
      <p className={`text-[11px] font-bold uppercase tracking-widest mb-4
        ${plan.featured ? 'text-purple-200' : 'text-gray-400'}`}>
        {plan.name}
      </p>

      {/* Velocidad */}
      <div className="mb-1">
        <span
          className={`font-black leading-none tracking-tighter ${plan.featured ? 'text-white' : 'text-gray-950'}`}
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(3rem, 6vw, 4rem)' }}
        >
          {plan.mbps}
        </span>
        <span className={`text-base font-medium ml-1 ${plan.featured ? 'text-purple-200' : 'text-gray-400'}`}>
          Mbps
        </span>
      </div>

      {/* Tag */}
      <p className={`text-xs font-semibold mb-6 ${plan.featured ? 'text-purple-200' : 'text-purple-500'}`}>
        ⚡ {plan.tag}
      </p>

      {/* Divider */}
      <div className={`h-px mb-6 ${plan.featured ? 'bg-purple-500' : 'bg-gray-100'}`} />

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1 list-none p-0 m-0">
        {plan.features.map(f => (
          <li key={f} className="flex items-center gap-3">
            {plan.featured
              ? <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white font-bold text-[10px]">✓</span>
              : <CheckIcon />
            }
            <span className={`text-sm ${plan.featured ? 'text-purple-50' : 'text-gray-600'}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center gap-2 w-full font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-150 active:scale-95 no-underline mb-2
          ${plan.featured
            ? 'bg-white text-purple-700 hover:bg-purple-50'
            : 'bg-[#25D366] hover:bg-[#1fbd5a] text-white shadow-md shadow-green-100'
          }`}
      >
        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black
          ${plan.featured ? 'bg-purple-100 text-purple-600' : 'bg-white text-[#25D366]'}`}>
          W
        </span>
        Me interesa este plan
      </a>
      <p className={`text-[11px] text-center ${plan.featured ? 'text-purple-300' : 'text-gray-400'}`}>
        Consulta disponibilidad en tu zona
      </p>
    </div>
  );
}

export default function Planes() {
  return (
    <section id="planes" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[3px] text-purple-500 mb-3">
            Nuestros planes
          </p>
          <h2
            className="font-black text-gray-950 leading-tight tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)' }}
          >
            Velocidad sin límites,{' '}
            <span className="text-purple-600">precio justo</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Todos los planes incluyen instalación gratis, router ONT y precios con IGV incluido.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {plans.map(plan => (
            <PlanCard key={plan.mbps} plan={plan} />
          ))}
        </div>

        {/* Nota inferior */}
        <p className="text-center text-xs text-gray-400 mt-10">
          ¿Necesitas un plan empresarial personalizado?{' '}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20necesito%20un%20plan%20empresarial`}
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 font-semibold hover:underline"
          >
            Escríbenos por WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}