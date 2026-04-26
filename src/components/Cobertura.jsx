/* Cobertura.jsx — FibraMax · Tailwind · Paleta #03A6EB · Motion */

import { motion } from 'motion/react';

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const panelVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Cobertura() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20saber%20si%20tienen%20cobertura%20en%20mi%20direcci%C3%B3n`;

  return (
    <section id="cobertura" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Columna izquierda: pasos ── */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="w-7 h-0.5 rounded-full" style={{ background: '#03A6EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px]" style={{ color: '#03A6EB' }}>
                Proceso de instalación
              </span>
            </motion.div>

            <motion.h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.5rem)', color: '#0a2a35' }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              ¿Cómo empezar a navegar{' '}
              <span style={{ color: '#03A6EB' }}>con nosotros?</span>
            </motion.h2>

            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {steps.map((step, i) => (
                <motion.div key={step.n} variants={stepVariants} className="flex items-start gap-4">
                  {/* Número + línea conectora */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-10 h-10 min-w-[40px] rounded-full flex items-center justify-center text-white font-black text-sm"
                      style={{ background: '#03A6EB', fontFamily: 'Outfit, sans-serif' }}
                      whileHover={{ scale: 1.15, boxShadow: '0 0 0 6px #03A6EB22' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {step.n}
                    </motion.div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-6 mt-1" style={{ background: '#b3e8fa' }} />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <p className="font-bold text-sm mb-1" style={{ color: '#0a2a35' }}>{step.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#5bc8f0' }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Columna derecha: panel de cobertura ── */}
          <motion.div
            className="rounded-2xl p-8 text-center"
            style={{
              background: '#f0faff',
              border: '1px solid #b3e8fa',
              boxShadow: '0 20px 50px #03A6EB18',
            }}
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <motion.div
              className="rounded-2xl py-10 px-6 mb-6"
              style={{ background: '#fff', border: '2px dashed #b3e8fa' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-5xl">📍</span>
            </motion.div>

            <h3
              className="font-black text-xl mb-2"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#03A6EB' }}
            >
              Cercado de Lima
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#4a8fa8' }}>
              Cobertura disponible en toda el área del Cercado de Lima.
              Consulta si tu dirección específica tiene cobertura disponible.
            </p>

            <motion.a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-white font-bold text-sm px-6 py-3.5 rounded-xl no-underline"
              style={{ background: '#03A6EB' }}
              whileHover={{ scale: 1.03, background: '#0291cc' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              Verificar mi cobertura →
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}