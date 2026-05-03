/* CTABanner.jsx — FibraMax · Tailwind · Paleta #03A6EB · Motion */

import { motion } from 'motion/react';
import whatsappIcon from "/assets/whatsapp.png";

const WA_NUMBER = '51967410041';

export default function CTABanner() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20contratar%20un%20plan%20de%20internet`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-12 sm:py-20 text-center"
        style={{ background: '#03A6EB' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >

        {/* Decoración de fondo animada */}
        <motion.div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: '#05bfff', opacity: 0.35 }}
          animate={{ scale: [1, 1.12, 1], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: '#0291cc', opacity: 0.4 }}
          animate={{ scale: [1, 1.1, 1], x: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Círculo extra decorativo */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: '#fff', opacity: 0.05 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Contenido */}
        <div className="relative z-10">
          <motion.h2
            className="font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ¿Listo para conectarte al mejor internet?
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg mb-8"
            style={{ color: 'rgba(255,255,255,0.85)' }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Instalación gratis · Router ONT incluido · Precios con IGV · Fibra óptica 100%
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#planes"
              className="w-full sm:w-auto text-center font-bold text-sm px-8 py-5.5 rounded-xl no-underline"
              style={{ background: '#fff', color: '#03A6EB' }}
              whileHover={{ scale: 1.04, background: '#e0f5fd' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              Ver todos los planes →
            </motion.a>

            <motion.a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold text-sm px-8 py-3.5 rounded-xl no-underline"
              style={{ background: '#25D366', boxShadow: '0 8px 24px #00000022' }}
              whileHover={{ scale: 1.04, background: '#1fbd5a' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
               <img src={whatsappIcon} alt="" className="w-10 h-10" />
              Hablar con un asesor
            </motion.a>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}