/* Hero.jsx — FibraMax · Tailwind · Carrusel full-width + Sección mejorada con conteo animado */

import { useState, useEffect, useRef } from "react";
import heroImg1 from "/assets/heroimg1.png";
import heroImg2 from "/assets/heroimg2.png";
import heroImg3 from "/assets/heroimg3.jpeg";
import logoPrincipal from "/assets/logoprincipal.png";

const WA_NUMBER = "51967410041";
const SLIDES = [heroImg1, heroImg2, heroImg3];

/* ── Hook: cuenta animada al entrar en viewport ── */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

function StatCard({ num, suffix, label, duration }) {
  const [count, ref] = useCountUp(num, duration);
  return (
    <div ref={ref} className="text-center lg:text-left">
      <div
        className="font-black text-gray-950 leading-none tabular-nums"
        style={{
          fontFamily: "Outfit, sans-serif",
          fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
        }}
      >
        {count}
        <span className="text-purple-600">{suffix}</span>
      </div>
      <div className="text-xs text-gray-400 font-medium mt-1.5 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20planes`;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => setCurrent(i);
  const prev = () => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((p) => (p + 1) % SLIDES.length);

  return (
    <>
      {/* ══════════════════════════════════════════
          PORTADA — Carrusel full-width
      ══════════════════════════════════════════ */}
      <section id="inicio" className="relative w-full h-screen overflow-hidden">
        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`FibraMax portada ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${i === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <img
            src={logoPrincipal}
            alt="FibraMax"
            className="h-40 sm:h-52 md:h-64 lg:h-80 w-auto max-w-[80vw] object-contain drop-shadow-2xl mix-blend-lighten"
          />
          <p className="text-white/80 text-sm sm:text-base font-medium tracking-widest uppercase text-center">
            100% Fibra Óptica · Cercado de Lima
          </p>
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white text-xl font-bold backdrop-blur-sm transition-all duration-150 active:scale-95"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white text-xl font-bold backdrop-blur-sm transition-all duration-150 active:scale-95"
          aria-label="Siguiente"
        >
          ›
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-6 z-20 flex flex-col items-center gap-1 text-white/50 text-[10px] tracking-widest uppercase">
          <span>Scroll</span>
          <span className="animate-bounce">↓</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════
    SECCIÓN DE TEXTO
══════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Blobs decorativos */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-purple-50 opacity-70 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-purple-50 opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── Columna izquierda: texto ── */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Internet ultrarrápido para tu hogar y empresa
              </div>

              {/* Título */}
              <h1
                className="font-black text-gray-950 leading-tight tracking-tight mb-5"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                ¡CÁMBIATE A UNO DE
                <br />
                <span className="text-purple-600">NUESTROS PLANES</span>
                <br />
                <span style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.9rem)" }}>
                  DE INTERNET 100% FIBRA ÓPTICA!
                </span>
              </h1>

              {/* Descripción */}
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Velocidades reales, sin sorpresas. Servicio doméstico y
                empresarial con tecnología 100% fibra óptica en el Cercado de
                Lima.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {[
                  "⚡ Velocidad simétrica",
                  "📡 Fibra hasta tu puerta",
                  "🔧 Instalación el mismo día",
                ].map((f) => (
                  <span
                    key={f}
                    className="bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12">
                <a
                  href="#planes"
                  className="w-full sm:w-auto text-center bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-150 shadow-lg shadow-purple-200 no-underline"
                >
                  Ver planes →
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-purple-300 hover:border-purple-500 hover:bg-purple-50 text-purple-700 font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-150 no-underline"
                >
                  <img src="/assets/whatsapp.png" alt="" className="w-5 h-5" />
                  Más Información
                </a>
              </div>

              {/* Divisor */}
              <hr className="border-gray-100 mb-10" />

              {/* Stats con conteo animado */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    num: 100,
                    suffix: "%",
                    label: "Fibra óptica pura",
                    duration: 1400,
                  },
                  {
                    num: 24,
                    suffix: "/7",
                    label: "Soporte técnico",
                    duration: 1000,
                  },
                  {
                    num: 0,
                    suffix: " S/.",
                    label: "Costo de instalación",
                    duration: 600,
                  },
                ].map(({ num, suffix, label, duration }) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-2xl p-5 text-center"
                  >
                    <StatCard
                      num={num}
                      suffix={suffix}
                      label={label}
                      duration={duration}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Columna derecha: imagen ── */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Fondo decorativo detrás de la imagen */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl opacity-90" />
                <img
                  src="/assets/hero.png"
                  alt="Seguridad, velocidad y potencia"
                  className="relative z-10 w-full h-auto object-contain rounded-3xl p-4"
                />
                {/* Badge flotante */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3 bg-white rounded-2xl shadow-lg shadow-purple-100 px-5 py-3 border border-gray-100 whitespace-nowrap">
                  <span className="text-xs font-bold text-gray-700">
                    🛡️ Seguro
                  </span>
                  <span className="text-gray-200">|</span>
                  <span className="text-xs font-bold text-gray-700">
                    ⚡ Rápido
                  </span>
                  <span className="text-gray-200">|</span>
                  <span className="text-xs font-bold text-gray-700">
                    ⚙️ Confiable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
