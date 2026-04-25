/* FAQ.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué incluye la instalación?',
    a: 'La instalación es completamente gratuita e incluye el tendido de la fibra óptica hasta tu domicilio o empresa, la instalación del router ONT y la configuración de la red. Todo sin costo adicional.',
  },
  {
    q: '¿Los precios incluyen IGV?',
    a: 'Sí, todos los precios publicados ya incluyen el IGV (Impuesto General a las Ventas). No hay costos ocultos ni sorpresas en tu factura mensual.',
  },
  {
    q: '¿La velocidad es simétrica?',
    a: 'Sí, gracias a la tecnología de fibra óptica, todos nuestros planes ofrecen velocidades simétricas: la misma velocidad de subida y bajada. Ideal para videollamadas, streaming y trabajo remoto.',
  },
  {
    q: '¿En qué zonas tienen cobertura?',
    a: 'Actualmente brindamos cobertura en el Cercado de Lima. Para verificar si tu dirección específica cuenta con cobertura disponible, escríbenos por WhatsApp y te confirmamos de inmediato.',
  },
  {
    q: '¿Tienen planes para empresas?',
    a: 'Sí, brindamos servicio tanto doméstico como empresarial. Si tienes necesidades especiales de conectividad para tu negocio, contáctanos para una asesoría personalizada sin compromiso.',
  },
  {
    q: '¿Cómo puedo contratar el servicio?',
    a: 'Es muy sencillo: elige tu plan favorito, haz clic en el botón de WhatsApp y uno de nuestros asesores te atenderá para coordinar la instalación en el horario que más te convenga.',
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200
      ${open ? 'border-purple-300 bg-purple-50' : 'border-gray-100 bg-white hover:border-purple-200'}`}>

      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer transition-colors duration-150 bg-transparent
          ${open ? 'text-purple-700' : 'text-gray-800 hover:text-purple-600'}`}
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        <span className="font-semibold text-[0.95rem]">{faq.q}</span>
        <span className={`text-xs flex-shrink-0 transition-transform duration-250 ${open ? 'rotate-180 text-purple-500' : 'text-gray-400'}`}>
          ▼
        </span>
      </button>

      <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-purple-500 mb-3">
            Preguntas frecuentes
          </p>
          <h2
            className="font-black text-gray-950 leading-tight tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.5rem)' }}
          >
            Resolvemos tus <span className="text-purple-600">dudas</span>
          </h2>
        </div>

        {/* Lista */}
        <div className="flex flex-col gap-3">
          {faqs.map(faq => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>

      </div>
    </section>
  );
}