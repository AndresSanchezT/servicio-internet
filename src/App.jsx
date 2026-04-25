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
    // Espera 2s, luego anima la salida
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
        backgroundColor: "#0a0a0a",
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
      {/* Logo */}
      <img
        src="/assets/logoprincipal.png"
        alt="FibraMax"
        style={{
          height: "320px",
          width: "auto",
          objectFit: "contain",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      />

      {/* Barra de carga */}
      <div
        style={{
          width: "180px",
          height: "3px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
            borderRadius: "999px",
            animation: "load 2s ease-out forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.75; transform: scale(0.97); }
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
