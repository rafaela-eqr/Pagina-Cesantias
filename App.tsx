
import React, { useState, useRef } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Calculator } from './components/Calculator';
import { ChatAssistant } from './components/ChatAssistant';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadForm } from './components/LeadForm';

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const leadFormRef = useRef<HTMLDivElement>(null);

  const scrollToLead = () => {
    leadFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-100 bg-dark-gradient overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      <Navbar onCtaClick={scrollToLead} />
      
      <main>
        <Hero onCtaClick={scrollToLead} />
        
        <div ref={leadFormRef} className="py-12 relative">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
          <LeadForm />
        </div>

        <div id="gestion" className="py-20 bg-black/30 border-y border-slate-900">
          <Features />
        </div>

        <div id="calculadora" className="py-20">
          <Calculator />
        </div>
      </main>

      <Footer />

      {/* Floating Action Button for Chat - Secondary assistance */}
      <button 
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 border border-slate-700 hover:scale-110"
        title="Chat de Ayuda"
      >
        <i className={`fas ${showChat ? 'fa-times' : 'fa-robot'} text-xl`}></i>
      </button>

      {/* Gemini Powered Chat Assistant Overlay */}
      {showChat && (
        <div className="fixed inset-0 z-[60] flex items-end justify-end p-4 md:p-10 pointer-events-none">
          <div className="w-full max-w-md pointer-events-auto">
            <ChatAssistant onClose={() => setShowChat(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
