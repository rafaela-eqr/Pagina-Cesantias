
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const Calculator: React.FC = () => {
  const [salary, setSalary] = useState<number>(2000000);
  const [days, setDays] = useState<number>(360);

  const results = useMemo(() => {
    // Formula: (Salary * Days) / 360
    const cesantias = (salary * days) / 360;
    // Interests: (Cesantias * Days * 0.12) / 360
    const interests = (cesantias * days * 0.12) / 360;
    
    return {
      cesantias,
      interests,
      total: cesantias + interests
    };
  }, [salary, days]);

  const chartData = [
    { name: 'Cesantías', value: results.cesantias },
    { name: 'Intereses', value: results.interests }
  ];

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Simulador de Cesantías</h2>
          <p className="text-slate-400">Calcula una estimación de <span className="text-emerald-400 font-bold">Tu dinero</span> acumulado.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Salario Mensual (Base)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                <input 
                  type="number"
                  // Fix: Si el salario es 0, mostramos string vacío para evitar el 0 a la izquierda al escribir
                  value={salary === 0 ? '' : salary}
                  onChange={(e) => {
                    const val = e.target.value === '' ? 0 : Number(e.target.value);
                    setSalary(val);
                  }}
                  className="w-full pl-8 pr-4 py-4 bg-slate-950 border-2 border-slate-800 rounded-xl text-white focus:border-emerald-500 outline-none transition-all text-lg font-bold"
                  placeholder="0"
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">Ingresa el valor sin puntos ni comas</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Días Laborados (Periodo)</label>
              <input 
                type="range"
                min="1"
                max="360"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 día</span>
                <span className="text-emerald-400 font-bold text-lg">{days} días</span>
                <span>360 días (Año)</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-400 font-bold">Total Estimado:</span>
                <span className="text-3xl font-black text-emerald-500 tracking-tighter">{formatCurrency(results.total)}</span>
              </div>
              <p className="text-[10px] text-slate-500 italic uppercase">*Este es un cálculo informativo aproximado basado en ley colombiana.</p>
            </div>
          </div>

          <div className="h-64 md:h-80 bg-slate-950 rounded-2xl p-4 border border-slate-800/50">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} fontWeight="bold" />
                <YAxis stroke="#64748b" fontSize={10} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                  cursor={{fill: '#0f172a'}} 
                  contentStyle={{backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '12px', color: '#fff'}}
                  formatter={(val: number) => [formatCurrency(val), 'Valor']}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
