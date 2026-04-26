import {
  Zap, ShieldCheck, Headphones, Wrench, Router, Building2,
} from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Velocidad simétrica real",
    desc: "Sube y baja a la misma velocidad contratada. Sin throttling ni limitaciones en horas pico.",
  },
  {
    icon: ShieldCheck,
    title: "100% Fibra óptica",
    desc: "Tecnología de última generación desde la central hasta tu puerta. Mayor estabilidad y menor latencia.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    desc: "Atención técnica disponible siempre. Resolvemos tus inconvenientes rápido y eficientemente.",
  },
  {
    icon: Wrench,
    title: "Instalación gratuita",
    desc: "Nuestro equipo técnico instala tu fibra óptica y router ONT sin ningún costo adicional.",
  },
  {
    icon: Router,
    title: "Router ONT incluido",
    desc: "Te proveemos el equipo necesario para disfrutar tu conexión desde el primer momento. Sin sorpresas.",
  },
  {
    icon: Building2,
    title: "Doméstico y empresarial",
    desc: "Planes para hogares y empresas. Escalamos contigo según tus necesidades de ancho de banda.",
  },
];

export default function Ventajas() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ minHeight: '680px' }}>

      {/* Imagen de fondo */}
      <img
        src="/assets/seccion6.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Overlay oscuro suave para legibilidad */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(5,20,40,0.72) 0%, rgba(0,30,60,0.65) 50%, rgba(2,18,38,0.72) 100%)',
          zIndex: 1,
        }}
      />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-0.5 rounded-full" style={{ background: '#03A6EB' }} />
          <span className="text-[11px] font-bold uppercase tracking-[2.5px]" style={{ color: '#03A6EB' }}>
            ¿Por qué elegirnos?
          </span>
        </div>

        <h2
          className="font-black leading-tight tracking-tight mb-12 max-w-lg"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
            color: '#fff',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          La diferencia que sientes{" "}
          <span style={{ color: '#03A6EB' }}>desde el día uno</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, index) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="group rounded-2xl p-6 cursor-default opacity-0 animate-fadeUp"
                style={{
                  /* glassmorphism igual que Caracteristicas */
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 28px 52px rgba(3,166,235,0.3), inset 0 1px 0 rgba(255,255,255,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(3,166,235,0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                }}
              >
                {/* Icon */}
                <div
                  className="group-hover:scale-110 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: 'rgba(3,166,235,0.18)',
                    border: '1px solid rgba(3,166,235,0.35)',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#03A6EB'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(3,166,235,0.18)'}
                >
                  <Icon size={22} color="#03A6EB" />
                </div>

                {/* Title */}
                <p
                  className="font-bold text-[0.95rem] mb-2"
                  style={{ fontFamily: "Outfit, sans-serif", color: '#fff' }}
                >
                  {a.title}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(180,230,255,0.8)' }}>
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}