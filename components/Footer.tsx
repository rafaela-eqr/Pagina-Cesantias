
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
            CONSULTORÍA LABORAL EN CESANTÍAS
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto italic">
            Gestión profesional y transparente. Acompañamiento especializado.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
              <i className="far fa-envelope"></i>
            </a>
          </div>

          <div className="pt-12 border-t border-slate-900 text-sm text-slate-500">
            <p className="mb-2">&copy; {new Date().getFullYear()} Consultoría de Cesantías S.A.S. Todos los derechos reservados.</p>
            <p>Consulta aquí para más información sobre nuestros términos de servicio y políticas de privacidad.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
