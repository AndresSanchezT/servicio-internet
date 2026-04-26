/* App.jsx — Página principal FibraMax */

import { useState, useEffect } from "react";
import "./styles/globals.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Caracteristicas from "./components/Caracteristicas";
import Planes from "./components/Planes";
import Terminos from "./components/Terminos";
import Ventajas from "./components/Ventajas";
import Cobertura from "./components/Cobertura";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

function PageLoader({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onTransitionEnd={() => fadeOut && onDone()}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #023a52 0%, #025f80 40%, #03A6EB 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Círculos decorativos de fondo */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "320px", height: "320px", borderRadius: "50%",
        background: "rgba(255,255,255,0.05)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "240px", height: "240px", borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />

      {/* Logo */}
      <img
        src="/assets/logoprincipal.png"
        alt="Cable Lima Centro"
        style={{
          height: "320px",
          width: "auto",
          objectFit: "contain",
          animation: "pulse 1.5s ease-in-out infinite",
          filter: "drop-shadow(0 0 32px rgba(255,255,255,0.15))",
        }}
      />

      {/* Barra de carga */}
      <div style={{
        width: "180px", height: "3px",
        background: "rgba(255,255,255,0.15)",
        borderRadius: "999px", overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #fff, #b3e8fa)",
          borderRadius: "999px",
          animation: "load 2s ease-out forwards",
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(0.97); }
        }
        @keyframes load {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <PageLoader onDone={() => setLoading(false)} />}

      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Navbar />
        <Hero />
        <Nosotros />
        <Caracteristicas />
        <Planes />
        <Terminos />
        <Ventajas />
        <Cobertura />
        <FAQ />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
