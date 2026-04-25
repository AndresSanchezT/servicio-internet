/* Terminos.jsx — FibraMax · Tailwind · Paleta 70% blanco / 20% morado / 10% negro */

const items = [
  '✅ Incluye router ONT. Los precios mostrados incluyen IGV. Ver términos y condiciones.',
  '✅ Servicios de Valor Añadido sujetos a términos y condiciones.',
  '📍 Aplica para Lima — Cercado de Lima. Consulta cobertura en tu dirección específica.',
  '🔧 Instalación completamente gratis al contratar cualquier plan.',
];

export default function Terminos() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
        <span className="text-lg flex-shrink-0 mt-0.5">ℹ️</span>
        <div className="flex flex-col gap-1.5">
          {items.map(item => (
            <p key={item} className="text-xs text-gray-400 leading-relaxed">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}