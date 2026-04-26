/* Terminos.jsx — FibraMax · Tailwind · Paleta clara + #03A6EB */
import { Info, Router, MapPin, Wrench, FileText } from "lucide-react";

const items = [
  {
    icon: <Router size={13} color="#03A6EB" style={{ flexShrink: 0, marginTop: 1 }} />,
    text: 'Incluye router ONT. Los precios mostrados incluyen IGV. Ver términos y condiciones.',
  },
  {
    icon: <FileText size={13} color="#03A6EB" style={{ flexShrink: 0, marginTop: 1 }} />,
    text: 'Servicios de Valor Añadido sujetos a términos y condiciones.',
  },
  {
    icon: <MapPin size={13} color="#03A6EB" style={{ flexShrink: 0, marginTop: 1 }} />,
    text: 'Aplica para Lima — Cercado de Lima. Consulta cobertura en tu dirección específica.',
  },
  {
    icon: <Wrench size={13} color="#03A6EB" style={{ flexShrink: 0, marginTop: 1 }} />,
    text: 'Instalación completamente gratis al contratar cualquier plan.',
  },
];

export default function Terminos() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div
        className="rounded-2xl p-5 sm:p-6 flex items-start gap-4"
        style={{
          background: '#f0faff',
          border: '1.5px solid #b3e8fa',
        }}
      >
        <Info size={16} color="#03A6EB" style={{ flexShrink: 0, marginTop: 2 }} />
        <div className="flex flex-col gap-2">
          {items.map((item, i) => (
            <p key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: '#4a8fa8' }}>
              {item.icon}
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}