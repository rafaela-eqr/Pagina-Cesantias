
import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="sticky top-0 w-full z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/30">
              <i className="fas fa-shield-alt text-white"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">
                Consultoría <span className="text-emerald-500">Laboral</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Especialistas en Cesantías</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#gestion" className="text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">Servicios</a>
            <a href="#calculadora" className="text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">Simulador</a>
            <button 
              onClick={onCtaClick}
              className="px-6 py-3 rounded-xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl"
            >
              Consulta Aquí
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={onCtaClick} className="text-emerald-500 p-2">
              <i className="fab fa-whatsapp text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
