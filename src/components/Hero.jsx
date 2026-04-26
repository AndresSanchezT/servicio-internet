/* Hero.jsx — FibraMax · Tailwind · Paleta #03A6EB · Motion · Lucide */
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Zap, Cable, Wrench, ShieldCheck, Rocket,
  Settings2, Headphones, Gift, Sparkles,
} from "lucide-react";
import heroImg1 from "/assets/heroimg1.png";
import heroImg2 from "/assets/heroimg2.png";
import heroImg3 from "/assets/heroimg3.jpeg";
import logoPrincipal from "/assets/logoprincipal.png";
import whatsappIcon from "/assets/whatsapp.png";

const WA_NUMBER = "51967410041";
const SLIDES = [heroImg1, heroImg2, heroImg3];

const shimmerCSS = `
  @keyframes shimmer-hero {
    0%   { transform: translateX(-130%) skewX(-15deg); }
    100% { transform: translateX(230%)  skewX(-15deg); }
  }
  @keyframes pulse-glow-btn {
    0%, 100% { box-shadow: 0 8px 24px #03A6EB33; }
    50%       { box-shadow: 0 8px 36px #03A6EB66; }
  }
`;

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        } else {
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

function StatCard({ num, suffix, label, duration, Icon }) {
  const [count, ref] = useCountUp(num, duration);
  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center mb-2">
        <motion.div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          /* ── fondo gris muy claro en vez de turqueza ── */
          style={{ background: "#f3f4f6" }}
          whileHover={{ rotate: 10, scale: 1.15 }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={18} color="#03A6EB" strokeWidth={2.2} />
        </motion.div>
      </div>
      <div
        className="font-black leading-none tabular-nums"
        style={{
          fontFamily: "Outfit, sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          /* número en negro, no turqueza */
          color: "#111827",
        }}
      >
        {count}
        {/* sufijo en turqueza — acento puntual */}
        <span style={{ color: "#03A6EB" }}>{suffix}</span>
      </div>
      <div
        className="text-xs font-medium mt-1.5 uppercase tracking-wide"
        /* etiqueta en gris neutro */
        style={{ color: "#6b7280" }}
      >
        {label}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20planes`;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((prev) => (prev + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => setCurrent(i);
  const prev = () => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((p) => (p + 1) % SLIDES.length);

  const tags = [
    { Icon: Zap,    label: "Velocidad simétrica" },
    { Icon: Cable,  label: "Fibra hasta tu puerta" },
    { Icon: Wrench, label: "Instalación el mismo día" },
  ];

  const stats = [
    { num: 100, suffix: "%",    label: "Fibra óptica pura",  duration: 1400, Icon: Sparkles   },
    { num: 24,  suffix: "/7",   label: "Soporte técnico",    duration: 1000, Icon: Headphones },
    { num: 0,   suffix: " S/.", label: "Costo instalación",  duration: 600,  Icon: Gift       },
  ];

  const badgeItems = [
    { Icon: ShieldCheck, label: "Seguro"    },
    { Icon: Rocket,      label: "Rápido"    },
    { Icon: Settings2,   label: "Confiable" },
  ];

  return (
    <>
      <style>{shimmerCSS}</style>

      {/* ══ CARRUSEL — sin cambios ══ */}
      <section id="inicio" className="relative w-full h-screen overflow-hidden">
        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Portada ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${i === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <motion.img
            src={logoPrincipal}
            alt="Logo"
            className="h-40 sm:h-52 md:h-64 lg:h-80 w-auto max-w-[80vw] object-contain drop-shadow-2xl mix-blend-lighten"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.p
            className="text-white/80 text-sm sm:text-base font-medium tracking-widest uppercase text-center mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            100% Fibra Óptica · Cercado de Lima
          </motion.p>
        </div>

        <button onClick={prev} aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white text-xl font-bold backdrop-blur-sm transition-all duration-150 active:scale-95">
          ‹
        </button>
        <button onClick={next} aria-label="Siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white text-xl font-bold backdrop-blur-sm transition-all duration-150 active:scale-95">
          ›
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-6 z-20 flex flex-col items-center gap-1 text-white/50 text-[10px] tracking-widest uppercase">
          <span>Scroll</span>
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>↓</motion.span>
        </div>
      </section>

      {/* ══ SECCIÓN DE TEXTO ══ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        {/* Imagen de fondo */}
        <img
          src="/assets/seccion2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0 }}
        />



        {/* Blobs — opacidad reducida para no saturar */}
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "#e0f5fd", opacity: 0.35, zIndex: 2 }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "#e0f5fd", opacity: 0.25, zIndex: 2 }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 3 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── Izquierda ── */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge — fondo gris claro, no turqueza */}
              <motion.div
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide"
                style={{
                  background: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  color: "#374151",
                }}
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#03A6EB" }}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                Internet ultrarrápido para tu hogar y empresa
              </motion.div>

              {/* Título — negro puro */}
              <motion.h1
                className="font-black leading-tight tracking-tight mb-5"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#111827",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                ¡CÁMBIATE A UNO DE
                <br />
                {/* turqueza solo en este span — acento */}
                <span style={{ color: "#03A6EB" }}>NUESTROS PLANES</span>
                <br />
                <span style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.9rem)", color: "#111827" }}>
                  DE INTERNET 100% FIBRA ÓPTICA!
                </span>
              </motion.h1>

              {/* Descripción — gris neutro */}
              <motion.p
                className="text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ color: "#6b7280" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
              >
                Velocidades reales, sin sorpresas. Servicio doméstico y
                empresarial con tecnología 100% fibra óptica en el Cercado de Lima.
              </motion.p>

              {/* Tags — fondo gris, texto oscuro, solo el ícono en turqueza */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {tags.map(({ Icon, label }) => (
                  <motion.span
                    key={label}
                    variants={itemVariants}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: "#f3f4f6",
                      border: "1px solid #e5e7eb",
                      color: "#374151",
                    }}
                    whileHover={{ scale: 1.06, background: "#e5e7eb" }}
                    transition={{ duration: 0.15 }}
                  >
                    {/* ícono en turqueza como único acento */}
                    <Icon size={13} strokeWidth={2.5} color="#03A6EB" />
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              {/* Botones — sin cambios, ya eran correctos */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="#planes"
                  className="w-full sm:w-auto text-center text-white font-bold px-8 py-3.5 rounded-xl text-sm no-underline"
                  style={{
                    background: "#03A6EB",
                    animation: "pulse-glow-btn 2.5s ease-in-out infinite",
                  }}
                  whileHover={{ scale: 1.05, background: "#0291cc" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  Ver planes →
                </motion.a>
                <motion.a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-xl text-sm no-underline"
                  style={{
                    border: "1.5px solid #e5e7eb",
                    color: "#374151",
                    background: "#fff",
                  }}
                  whileHover={{ scale: 1.05, background: "#f3f4f6", borderColor: "#d1d5db" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  <img src={whatsappIcon} alt="" className="w-5 h-5" />
                  Más Información
                </motion.a>
              </motion.div>

              {/* Divisor gris en vez de turqueza */}
              <hr className="mb-10" style={{ borderColor: "#e5e7eb" }} />

              {/* Stats — cards blancas con borde gris */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {stats.map(({ num, suffix, label, duration, Icon }) => (
                  <motion.div
                    key={label}
                    variants={itemVariants}
                    className="rounded-2xl p-5 text-center"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                    transition={{ duration: 0.15 }}
                  >
                    <StatCard num={num} suffix={suffix} label={label} duration={duration} Icon={Icon} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Derecha: imagen — sin cambios ── */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <div className="relative w-full max-w-md">
                <div
                  className="absolute inset-0 rounded-3xl opacity-90"
                  style={{ background: "linear-gradient(135deg, #0291cc, #05bfff)" }}
                />
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-10">
                  <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: "45%", height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                    animation: "shimmer-hero 3.5s ease-in-out infinite",
                  }} />
                </div>
                <motion.img
                  src="/assets/hero.png"
                  alt="Seguridad, velocidad y potencia"
                  className="relative z-10 w-full h-auto object-contain rounded-3xl p-4"
                  animate={{ scale: [1, 1.015, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-white rounded-2xl px-5 py-3 border whitespace-nowrap overflow-hidden"
                  style={{
                    borderColor: "#e5e7eb",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: "40%", height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.03), transparent)",
                    animation: "shimmer-hero 2.8s ease-in-out infinite",
                    pointerEvents: "none",
                  }} />
                  {badgeItems.map(({ Icon, label }, i) => (
                    <span key={label} className="flex items-center gap-1" style={{ position: "relative", zIndex: 1 }}>
                      {i > 0 && <span className="mr-2" style={{ color: "#e5e7eb" }}>|</span>}
                      <Icon size={13} color="#03A6EB" strokeWidth={2.5} />
                      <span className="text-xs font-bold" style={{ color: "#111827" }}>{label}</span>
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}