/* Nosotros.jsx — FibraMax · Tailwind · Paleta #03A6EB · Motion · Lucide */

import { motion } from "motion/react";
import { Home, Plug, Wifi } from "lucide-react";

const features = [
  {
    Icon: Home,
    title: "Doméstico y empresarial",
    desc: "Soluciones adaptadas para hogares y negocios de cualquier tamaño.",
  },
  {
    Icon: Plug,
    title: "Instalación sin costo",
    desc: "Router ONT de última generación incluido, sin gastos ocultos.",
  },
  {
    Icon: Wifi,
    title: "100% Fibra óptica",
    desc: "Tecnología de última milla para máxima estabilidad y velocidad real.",
  },
];

const metrics = [
  ["Tecnología",    "100% Fibra Óptica"],
  ["Cobertura",     "Cercado de Lima"],
  ["Tipo servicio", "Doméstico & Empresa"],
  ["Router ONT",    "Incluido ✓"],
  ["Instalación",   "Gratis ✓"],
  ["Precios",       "Incluyen IGV ✓"],
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const rowVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Columna izquierda ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Tag */}
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-7 h-0.5 rounded-full" style={{ background: "#03A6EB" }} />
              <span
                className="text-[11px] font-bold uppercase tracking-[2.5px]"
                style={{ color: "#03A6EB" }}
              >
                Quiénes somos
              </span>
            </motion.div>

            {/* Título */}
            <motion.h2
              className="font-black leading-tight tracking-tight mb-5"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                color: "#0a2a35",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Conectando Lima con<br />
              <span style={{ color: "#03A6EB" }}>el mejor internet</span>
            </motion.h2>

            {/* Párrafo */}
            <motion.p
              className="text-[0.97rem] leading-relaxed mb-8 max-w-lg"
              style={{ color: "#4a8fa8" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              Somos una empresa dedicada al rubro de internet, brindamos el mejor internet
              del Cercado de Lima. Con tecnología 100% fibra óptica, ofrecemos servicio tanto
              doméstico como empresarial, garantizando velocidades reales y conexión estable
              las 24 horas del día.
            </motion.p>

            {/* Features con Lucide */}
            <motion.div
              className="flex flex-col gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {features.map(({ Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    className="w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center"
                    style={{ background: "#e0f5fd", border: "1px solid #b3e8fa" }}
                    whileHover={{ scale: 1.12, boxShadow: "0 0 0 5px #03A6EB18" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={18} color="#03A6EB" strokeWidth={2.2} />
                  </motion.div>
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: "#0a2a35" }}>{title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#5bc8f0" }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Columna derecha: panel métricas ── */}
          <motion.div
            className="rounded-2xl p-7"
            style={{
              background: "#fff",
              border: "1px solid #b3e8fa",
              boxShadow: "0 20px 50px #03A6EB14",
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[2px] mb-5"
              style={{ color: "#4a8fa8" }}
            >
              Nuestro servicio en cifras
            </p>

            <motion.div
              className="flex flex-col"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {metrics.map(([label, val], i) => (
                <motion.div
                  key={label}
                  variants={rowVariants}
                  className="flex items-center justify-between py-3.5"
                  style={i < metrics.length - 1 ? { borderBottom: "1px solid #e0f5fd" } : {}}
                >
                  <span className="text-sm" style={{ color: "#4a8fa8" }}>{label}</span>
                  <span
                    className="text-sm font-bold"
                    style={{ fontFamily: "Outfit, sans-serif", color: "#03A6EB" }}
                  >
                    {val}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid #e0f5fd" }}>
              <motion.a
                href="#planes"
                className="block text-center text-white font-bold text-sm px-6 py-3 rounded-xl no-underline"
                style={{ background: "#03A6EB" }}
                whileHover={{ scale: 1.03, background: "#0291cc" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
              >
                Ver nuestros planes →
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}