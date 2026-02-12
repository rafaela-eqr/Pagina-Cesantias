
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Asesoría de Alto Nivel
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Si vas a tomar una <br />
            <span className="text-emerald-500 italic">decisión financiera</span>, 
            <br /> hazlo con <span className="gradient-text">expertos</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ingresa al enlace y recibe asesoría personalizada para optimizar <span className="text-white font-bold border-b-2 border-emerald-500">Tu dinero</span> con una <span className="text-white font-bold">Gestión</span> <span className="text-emerald-400 font-bold underline decoration-wavy">Transparente</span> y <span className="text-white font-bold">Profesional</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-900/40 transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              RECIBE ASESORÍA AHORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
