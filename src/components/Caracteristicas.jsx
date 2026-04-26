/* Caracteristicas.jsx — FibraMax · Tailwind · Paleta #03A6EB · Motion */

import { motion } from 'motion/react';
import img1 from '/assets/caracteristica1.jpeg';
import img2 from '/assets/caracteristica2.png';
import img3 from '/assets/caracteristica3.jpeg';
import img4 from '/assets/caracteristica4.png';
import img5 from '/assets/caracteristica5.png';

const items = [
  {
    img: img1,
    title: 'Alta velocidad',
    desc: 'Navega, descarga y transmite contenido sin interrupciones. Ideal para streaming, gaming y trabajo remoto.',
  },
  {
    img: img2,
    title: 'Estabilidad de conexión',
    desc: 'Sin cortes ni caídas. Una conexión estable es más importante que solo tener alta velocidad.',
  },
  {
    img: img3,
    title: 'Soporte técnico 24/7',
    desc: 'Atención rápida ante cualquier problema. Un buen soporte marca la diferencia cuando hay fallas.',
  },
  {
    img: img4,
    title: 'Seguridad',
    desc: 'Protección contra accesos no autorizados y amenazas. Cuida tus datos personales en todo momento.',
  },
  {
    img: img5,
    title: 'Cobertura y alcance',
    desc: 'El internet llega a toda tu casa o negocio sin zonas muertas ni señal débil en ningún rincón.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Caracteristicas() {
  return (
    /* ── Sección más alta con más padding ── */
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ minHeight: '680px' }}>

      {/* Imagen de fondo — sin overlay */}
      <img
        src="/assets/seccion4.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Blob decorativo sutil encima del fondo */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-40 rounded-full pointer-events-none"
        style={{ background: '#03A6EB', opacity: 0.08, filter: 'blur(60px)', zIndex: 1 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block text-[11px] font-bold uppercase tracking-[2.5px] mb-3 px-4 py-1.5 rounded-full"
            style={{
              color: '#03A6EB',
              background: 'rgba(3,166,235,0.15)',
              border: '1px solid rgba(3,166,235,0.35)',
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Lo que importa
          </motion.span>
          <motion.h2
            className="font-black leading-tight tracking-tight"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              color: '#fff',           /* blanco para contrastar con el fondo oscuro */
              textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            Las 5 claves de un{' '}
            <span style={{ color: '#03A6EB' }}>buen internet</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-40px' }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 28px 52px rgba(3,166,235,0.35)',
                borderColor: 'rgba(3,166,235,0.7)',
              }}
              transition={{ duration: 0.2 }}
              className="flex flex-col rounded-2xl overflow-hidden cursor-default"
              style={{
                /* glassmorphism que combina con el fondo oscuro azul */
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255,255,255,0.18)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              {/* Imagen */}
              <div className="relative w-full overflow-hidden" style={{ height: '160px' }}>
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(0,20,50,0.55) 100%)',
                  }}
                />
                {/* Número decorativo */}
                <motion.span
                  className="absolute top-3 right-3 text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(3,166,235,0.85)',
                    color: '#fff',
                    boxShadow: '0 2px 8px rgba(3,166,235,0.5)',
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.1 }}
                >
                  0{i + 1}
                </motion.span>
              </div>

              {/* Contenido */}
              <div className="flex flex-col flex-1 p-5">
                <motion.p
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif', color: '#fff' }}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.1 }}
                >
                  {item.title}
                </motion.p>
                <motion.p
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(180,230,255,0.85)' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.28 + i * 0.1 }}
                >
                  {item.desc}
                </motion.p>

                {/* Línea accent */}
                <motion.div
                  className="mt-4 h-0.5 rounded-full"
                  style={{ background: '#03A6EB', originX: 0 }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 0.4, opacity: 0.6 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}