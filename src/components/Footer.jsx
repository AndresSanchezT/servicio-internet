/* Footer.jsx — FibraMax · Paleta #03A6EB · Motion · Lucide */

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowUpCircle } from 'lucide-react';
import logoSinTexto from '/assets/logosintexto.png';

const WA_NUMBER = '51999999999';

const navItems = [
  ['#nosotros',  'Quiénes somos'],
  ['#planes',    'Planes'],
  ['#ventajas',  'Ventajas'],
  ['#cobertura', 'Cobertura'],
  ['#faq',       'FAQ'],
  [`https://wa.me/${WA_NUMBER}`, 'Contacto'],
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <footer style={{ background: '#020f14', borderTop: '1px solid #03A6EB18' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '3rem 2rem 2rem' }}>

        {/* ── Fila principal ── */}
        <motion.div
          className="flex flex-col items-center gap-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >

          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2.5 no-underline"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.15 }}
          >
            <img
  src={logoSinTexto}
  alt="Cable Lima Centro"
  style={{ height: 48, width: 'auto', objectFit: 'contain' }}
/>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#fff' }}>
              Cable <span style={{ color: '#03A6EB' }}>Lima Centro</span>
            </span>
          </motion.a>

          {/* Info rápida con Lucide */}
          <motion.div
            className="flex flex-wrap justify-center gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { Icon: MapPin, text: 'Cercado de Lima, Lima, Perú' },
              { Icon: Phone,  text: `+${WA_NUMBER}` },
              { Icon: Mail,   text: 'contacto@cablelima.pe' },
            ].map(({ Icon, text }) => (
              <motion.div
                key={text}
                variants={itemVariants}
                className="flex items-center gap-1.5"
              >
                <Icon size={13} color="#03A6EB" strokeWidth={2.2} />
                <span style={{ color: '#4a8fa8', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Divisor */}
          <div style={{ width: '100%', height: 1, background: '#03A6EB12' }} />

          {/* Nav links */}
          <motion.ul
            className="flex flex-wrap justify-center gap-x-7 gap-y-2 list-none m-0 p-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {navItems.map(([href, label]) => (
              <motion.li key={href} variants={itemVariants}>
                <motion.a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="no-underline"
                  style={{
                    color: '#3a6a7a',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    fontFamily: 'Outfit, sans-serif',
                  }}
                  whileHover={{ color: '#03A6EB', y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  {label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Divisor */}
          <div style={{ width: '100%', height: 1, background: '#03A6EB12' }} />

          {/* Copy + volver arriba */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
              © {new Date().getFullYear()} Cable Lima Centro — Cercado de Lima, Lima, Perú. Todos los derechos reservados.
            </p>

            <motion.a
              href="#inicio"
              className="flex items-center gap-1.5 no-underline"
              style={{ color: '#03A6EB', fontSize: '0.78rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
              whileHover={{ scale: 1.06, color: '#05bfff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <ArrowUpCircle size={15} strokeWidth={2.2} />
              Volver arriba
            </motion.a>
          </div>

        </motion.div>
      </div>
    </footer>
  );
}