/* Planes.jsx — FibraMax · Tailwind · Paleta clara + #03A6EB · Motion */
import { motion } from 'motion/react';
import { Zap, Goal } from "lucide-react";

const WA_NUMBER = '51967410041';

const plans = [
  {
    name: 'Plan Básico',
    mbps: '500',
    price: 'S/ 50.00',
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
    price: 'S/ 70.00',
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
    price: 'S/ 100.00',
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

function WhatsAppIcon({ featured }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill={featured ? '#03A6EB' : '#fff'}
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.518 5.843L0 24l6.335-1.486A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.372l-.36-.214-3.732.875.944-3.614-.235-.372A9.795 9.795 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
    </svg>
  );
}

const shimmerCSS = `
  @keyframes shimmer-sweep {
    0%   { transform: translateX(-120%) skewX(-15deg); }
    100% { transform: translateX(220%)  skewX(-15deg); }
  }
  @keyframes pulse-line {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 1;   }
  }
`;

function InjectStyles() {
  return <style>{shimmerCSS}</style>;
}

function ShimmerLayer({ featured }) {
  return (
    <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '45%', height: '100%',
        background: featured
          ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)'
          : 'linear-gradient(90deg, transparent, rgba(3,166,235,0.07), transparent)',
        animation: `shimmer-sweep ${featured ? '2.4s' : '3.6s'} ease-in-out infinite`,
      }} />
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

function CheckIcon({ featured }) {
  if (featured) {
    return (
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]"
        style={{ background: 'rgba(255,255,255,0.25)', border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}
      >✓</span>
    );
  }
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]"
      /* ── antes: turqueza brillante — ahora: gris neutro con check oscuro ── */
      style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', color: '#374151' }}
    >✓</span>
  );
}

function PlanCard({ plan }) {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${plan.waMsg}`;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={
        plan.featured
          ? { y: -4, boxShadow: '0 32px 70px #03A6EB44, inset 0 1px 0 rgba(255,255,255,0.3)' }
          : { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,1)' }
      }
      className="relative flex flex-col rounded-2xl"
      style={{
        padding: plan.featured ? '2.25rem 1.75rem 1.75rem' : '1.75rem',
        transform: plan.featured ? 'scale(1.04)' : undefined,
        background: plan.featured
          ? 'linear-gradient(145deg, #05c6ff 0%, #03A6EB 40%, #0285c4 100%)'
          /* ── cards normales: blanco puro, sin tinte azul ── */
          : '#ffffff',
        border: plan.featured
          ? '2px solid #05d4ff'
          /* ── borde gris muy sutil en vez de turqueza ── */
          : '1.5px solid #e5e7eb',
        boxShadow: plan.featured
          ? '0 25px 60px #03A6EB44, inset 0 1px 0 rgba(255,255,255,0.3)'
          : '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)',
        transition: 'box-shadow 0.25s',
      }}
    >
      <ShimmerLayer featured={plan.featured} />

      {/* Línea destello superior */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px rounded-full"
        style={{
          background: plan.featured
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)',
          animation: 'pulse-line 2.5s ease-in-out infinite',
          zIndex: 2,
        }}
      />

      {/* Badge "Más popular" */}
      {plan.featured && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="absolute flex items-center gap-1 left-1/2 -translate-x-1/2 text-white text-[10px] font-black px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide"
          style={{
            top: '-14px',
            background: 'linear-gradient(90deg, #004f7c, #0077aa)',
            boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
            zIndex: 10,
          }}
        >
          <Goal size={12} />
          Más popular
        </motion.div>
      )}

      {/* Nombre del plan */}
      <p
        className="text-[11px] font-bold uppercase tracking-widest mb-4"
        style={{
          color: plan.featured ? 'rgba(255,255,255,0.85)' : '#9ca3af', /* gris medio, no turqueza */
          position: 'relative', zIndex: 2,
        }}
      >
        {plan.name}
      </p>

      {/* Velocidad */}
      <div className="mb-1" style={{ position: 'relative', zIndex: 2 }}>
        <span
          className="font-black leading-none tracking-tighter"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(3rem, 6vw, 4rem)',
            /* turqueza solo en el número destacado — cards normales en negro */
            color: plan.featured ? '#fff' : '#111827',
            textShadow: plan.featured ? '0 2px 12px rgba(255,255,255,0.3)' : 'none',
          }}
        >
          {plan.mbps}
        </span>
        <span
          className="text-base font-medium ml-1"
          style={{ color: plan.featured ? 'rgba(255,255,255,0.75)' : '#6b7280' }}
        >
          Mbps
        </span>
      </div>

      {/* Tag — turqueza solo en la card featured */}
      <p
        className="flex items-center gap-2 text-xs font-semibold mb-6"
        style={{
          color: plan.featured ? 'rgba(255,255,255,0.85)' : '#03A6EB',
          position: 'relative', zIndex: 2,
        }}
      >
        <Zap size={13} color={plan.featured ? 'rgba(255,255,255,0.85)' : '#03A6EB'} />
        {plan.tag}
      </p>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{
          background: plan.featured
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)'
            : '#f3f4f6', /* gris muy claro */
          position: 'relative', zIndex: 2,
        }}
      />

      {/* Features */}
      <motion.ul
        className="flex flex-col gap-3 mb-6 flex-1 list-none p-0 m-0"
        style={{ position: 'relative', zIndex: 2 }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {plan.features.map(f => (
          <motion.li key={f} variants={featureVariants} className="flex items-center gap-3">
            <CheckIcon featured={plan.featured} />
            <span
              className="text-sm"
              /* texto oscuro en cards normales, no turqueza */
              style={{ color: plan.featured ? 'rgba(255,255,255,0.92)' : '#374151' }}
            >
              {f}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA WhatsApp */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center justify-center gap-2 w-full font-bold text-sm px-5 py-3.5 rounded-xl no-underline mb-2"
        style={{
          position: 'relative', zIndex: 2,
          ...(plan.featured
            ? {
                background: 'linear-gradient(135deg, #fff 0%, #e8f9ff 100%)',
                color: '#03A6EB',
                boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
              }
            : {
                background: 'linear-gradient(135deg, #2edb6e 0%, #25D366 100%)',
                color: '#fff',
                boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
              }),
        }}
      >
        <WhatsAppIcon featured={plan.featured} />
        Me interesa este plan
      </motion.a>

      <p
        className="text-[11px] text-center"
        style={{
          /* gris neutro en cards normales */
          color: plan.featured ? 'rgba(255,255,255,0.55)' : '#9ca3af',
          position: 'relative', zIndex: 2,
        }}
      >
        Consulta disponibilidad en tu zona
      </p>
    </motion.div>
  );
}

export default function Planes() {
  return (
    /* fondo blanco puro en vez de #f7fcff azulado */
    <section id="planes" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#fff' }}>
      <InjectStyles />
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[3px] mb-3" style={{ color: '#03A6EB' }}>
            Nuestros planes
          </p>
          <h2
            className="font-black leading-tight tracking-tight mb-4"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              /* título en negro, no turqueza */
              color: '#111827',
            }}
          >
            Velocidad sin límites,{' '}
            <span style={{ color: '#03A6EB' }}>precio justo</span>
          </h2>
          <p className="text-base max-w-md mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
            Todos los planes incluyen instalación gratis, router ONT y precios con IGV incluido.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center py-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.mbps} plan={plan} />
          ))}
        </motion.div>

        {/* Precios discretos */}
        <motion.div
          className="flex justify-center gap-10 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {plans.map((plan) => (
            <div key={plan.mbps} className="text-center">
              <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: '#d1d5db' }}>
                {plan.name}
              </p>
              <p className="text-sm font-semibold" style={{ color: '#9ca3af' }}>
                {plan.price}
                <span className="text-[10px] font-normal ml-0.5">/mes</span>
              </p>
            </div>
          ))}
        </motion.div>

        {/* Nota inferior */}
        <motion.p
          className="text-center text-xs mt-6"
          style={{ color: '#9ca3af' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          ¿Necesitas un plan empresarial personalizado?{' '}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20necesito%20un%20plan%20empresarial`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:underline"
            style={{ color: '#03A6EB' }}
          >
            Escríbenos por WhatsApp →
          </a>
        </motion.p>
      </div>
    </section>
  );
}