
import React from 'react';

const FEATURE_LIST = [
  {
    title: "Gestión Profesional",
    description: "Analizamos tu situación laboral para maximizar los beneficios de tus ahorros obligatorios.",
    icon: "fa-user-tie",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Acompañamiento Transparente",
    description: "Procesos claros, sin letras chiquitas. Entiende exactamente qué sucede con tu capital.",
    icon: "fa-search-dollar",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Tu Dinero Seguro",
    description: "Consultoría especializada para el retiro parcial o total cumpliendo con la normativa vigente.",
    icon: "fa-shield-check",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {FEATURE_LIST.map((feature, idx) => (
          <div key={idx} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
              <i className={`fas ${feature.icon} text-2xl ${feature.color}`}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          CONSULTORÍA LABORAL EN <span className="text-emerald-500">CESANTÍAS</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-lg">
          <span className="flex items-center"><i className="fas fa-check-circle text-emerald-500 mr-2"></i> Gestión Profesional</span>
          <span className="flex items-center"><i className="fas fa-check-circle text-emerald-500 mr-2"></i> Transparencia Total</span>
          <span className="flex items-center"><i className="fas fa-check-circle text-emerald-500 mr-2"></i> Acompañamiento Especializado</span>
        </div>
      </div>
    </section>
  );
};
