
import React, { useState } from 'react';

export const LeadForm: React.FC = () => {
  const [name, setName] = useState('');
  const [fund, setFund] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const funds = [
    "Porvenir",
    "Protección",
    "Colfondos",
    "Skandia",
    "Fondo Nacional del Ahorro (FNA)",
    "No conozco mi fondo / Otro"
  ];

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);

    const message = `Hola, mi nombre es ${name}. Mi fondo de cesantías es ${fund}. Deseo recibir asesoría personalizada para la gestión profesional de mis cesantías.`;
    const encodedMessage = encodeURIComponent(message);
    // Replace with your actual WhatsApp Business number
<<<<<<< HEAD
    const whatsappUrl = `https://api.whatsapp.com/send?phone=573043459499&text=${encodedMessage}`;
=======
    const whatsappUrl = `https://wa.me/573000000000?text=${encodedMessage}`;
>>>>>>> 3d8b22844b0ae1a77fc09ee73257a8cffc99c941

    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1500);
  };

  return (
    <section id="contacto" className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border-2 border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Solicitar Consulta Aquí</h2>
          <p className="text-slate-400">Completa tus datos para una <span className="text-emerald-400 font-bold">Gestión Profesional</span> inmediata.</p>
        </div>

        <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300 ml-1">Nombre Completo</label>
            <input 
              required
              type="text" 
              placeholder="Ej. Juan Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-950 border-2 border-slate-800 focus:border-emerald-500 rounded-2xl px-6 py-4 text-white outline-none transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300 ml-1">Fondo de Cesantías</label>
            <select 
              required
              value={fund}
              onChange={(e) => setFund(e.target.value)}
              className="w-full bg-slate-950 border-2 border-slate-800 focus:border-emerald-500 rounded-2xl px-6 py-4 text-white outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>Selecciona tu fondo</option>
              {funds.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <button 
            type="submit"
            disabled={isRedirecting}
            className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 ${
              isRedirecting 
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/20 hover:scale-[1.02]'
            }`}
          >
            {isRedirecting ? (
              <>
                <i className="fas fa-circle-notch animate-spin"></i>
                REDIRECCIONANDO...
              </>
            ) : (
              <>
                CONTINUAR A ASESORÍA
                <i className="fas fa-arrow-right"></i>
              </>
            )}
          </button>

          <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            Privacidad Garantizada • Conexión Segura vía WhatsApp
          </p>
        </form>
      </div>
    </section>
  );
};
