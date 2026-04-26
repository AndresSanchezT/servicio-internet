/* FAQ.jsx — FibraMax · Tailwind · Paleta #03A6EB · Motion · Lucide */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      style={
        open
          ? { border: '1.5px solid #03A6EB', background: '#f0faff' }
          : { border: '1.5px solid #e0f5fd', background: '#fff' }
      }
      className="rounded-2xl overflow-hidden"
      whileHover={!open ? { borderColor: '#b3e8fa', boxShadow: '0 4px 16px #03A6EB10' } : {}}
      transition={{ duration: 0.15 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer bg-transparent"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center"
            style={{ background: open ? '#03A6EB' : '#e0f5fd' }}
          >
            <HelpCircle size={14} color={open ? '#fff' : '#03A6EB'} strokeWidth={2.2} />
          </div>
          <span
            className="font-semibold text-[0.95rem]"
            style={{ color: open ? '#03A6EB' : '#0a2a35' }}
          >
            {faq.q}
          </span>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={17} color={open ? '#03A6EB' : '#5bc8f0'} strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="px-5 pb-4 text-sm leading-relaxed"
              style={{ color: '#4a8fa8', paddingLeft: '3.25rem' }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#fff' }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[2.5px] mb-3"
            style={{ color: '#03A6EB' }}
          >
            Preguntas frecuentes
          </p>
          <h2
            className="font-black leading-tight tracking-tight"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.9rem, 3vw, 2.5rem)',
              color: '#0a2a35',
            }}
          >
            Resolvemos tus <span style={{ color: '#03A6EB' }}>dudas</span>
          </h2>
        </motion.div>

        {/* Lista */}
        <motion.div
          className="flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {faqs.map(faq => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}