
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiAdvice } from '../services/geminiService';
import { Message } from '../types';

interface ChatAssistantProps {
  onClose: () => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy tu consultor financiero experto en Cesantías. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await getGeminiAdvice(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText || 'Sin respuesta.' }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col h-[550px] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-emerald-600 flex justify-between items-center shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <i className="fas fa-robot text-white text-sm"></i>
          </div>
          <span className="font-bold text-white">Consultor IA</span>
        </div>
        <button onClick={onClose} className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-950/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none text-slate-400 text-xs flex space-x-1">
              <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0">
        <div className="relative flex items-center">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu consulta laboral..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald-500 transition-colors pr-12"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-colors disabled:opacity-50"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
