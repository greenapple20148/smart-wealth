
import React, { useState, useMemo } from 'react';
import ArticleLayout from '../ArticleLayout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const CompoundInterestCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [initial, setInitial] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(8);
  const [compounding, setCompounding] = useState(12); // 12 = Monthly, 1 = Annually
  const [inflation, setInflation] = useState(3);

  const stats = useMemo(() => {
    let currentBalance = initial;
    let totalPrincipal = initial;
    const chartData = [];
    
    const totalMonths = years * 12;
    const monthlyRate = rate / 100 / 12;

    chartData.push({
      year: 0,
      principal: Math.round(initial),
      interest: 0,
      total: Math.round(initial),
      realValue: Math.round(initial)
    });

    for (let m = 1; m <= totalMonths; m++) {
      currentBalance += monthly;
      totalPrincipal += monthly;

      if (compounding === 12) {
        currentBalance *= (1 + monthlyRate);
      } else if (m % 12 === 0) {
        currentBalance *= (1 + (rate / 100));
      }

      if (m % 12 === 0) {
        const year = m / 12;
        const inflationFactor = Math.pow(1 + inflation / 100, year);
        const realValue = currentBalance / inflationFactor;

        chartData.push({
          year,
          principal: Math.round(totalPrincipal),
          interest: Math.round(currentBalance - totalPrincipal),
          total: Math.round(currentBalance),
          realValue: Math.round(realValue)
        });
      }
    }

    const final = chartData[chartData.length - 1];
    const milestones = [50000, 100000, 250000, 500000, 1000000].map(m => {
        const dataPoint = chartData.find(d => d.total >= m);
        return dataPoint ? { amount: m, year: dataPoint.year } : null;
    }).filter(Boolean);

    return {
      chartData,
      finalTotal: final.total,
      finalPrincipal: final.principal,
      finalInterest: final.interest,
      finalReal: final.realValue,
      milestones
    };
  }, [initial, monthly, years, rate, compounding, inflation]);

  return (
    <ArticleLayout title="Compound Velocity Engine" category="Calculators" icon="💰" onClose={onClose}>
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Sidebar Inputs */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-8">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-[3rem] space-y-8 shadow-sm">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 border-b dark:border-white/5 pb-4">Capital Parameters</h4>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Initial Deposit <span>${initial.toLocaleString()}</span>
                </label>
                <input type="range" min="0" max="100000" step="1000" value={initial} onChange={(e) => setInitial(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Monthly Contrib <span>${monthly.toLocaleString()}</span>
                </label>
                <input type="range" min="0" max="5000" step="50" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400">Years</label>
                  <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400">Rate (%)</label>
                  <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold" />
                </div>
              </div>
            </div>

            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 border-b dark:border-white/5 pb-4 pt-4">Variables</h4>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-slate-400">Compounding</label>
                <div className="flex bg-slate-100 dark:bg-zinc-800 p-1 rounded-xl">
                  <button onClick={() => setCompounding(12)} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${compounding === 12 ? 'bg-white dark:bg-zinc-700 text-emerald-500 shadow-sm' : 'text-slate-500'}`}>Monthly</button>
                  <button onClick={() => setCompounding(1)} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${compounding === 1 ? 'bg-white dark:bg-zinc-700 text-emerald-500 shadow-sm' : 'text-slate-500'}`}>Annual</button>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Est. Inflation <span>{inflation}%</span>
                </label>
                <input type="range" min="0" max="10" step="0.1" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500" />
              </div>
            </div>
          </div>
          
          {/* Milestone Display */}
          <div className="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden group">
             <div className="absolute right-0 top-0 p-8 opacity-5 text-6xl group-hover:scale-110 transition-transform">🏆</div>
             <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-6">Milestone Tracker</h4>
             <div className="space-y-4">
                {stats.milestones.length > 0 ? stats.milestones.slice(0, 4).map((m, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                    <span className="font-bold tracking-tight text-lg">${(m.amount / 1000).toLocaleString()}K</span>
                    <span className="text-slate-500 font-bold uppercase text-[10px]">Year {m.year}</span>
                  </div>
                )) : <p className="text-[11px] text-slate-500">Keep contributing to see projections.</p>}
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-10">
          {/* Big Result Card */}
          <div className="p-8 sm:p-12 bg-slate-950 text-white rounded-[4rem] shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 p-12 opacity-10 text-9xl group-hover:scale-110 transition-transform">📈</div>
            <div className="relative z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-4">Future Value Terminal</p>
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 break-words leading-tight">
                ${stats.finalTotal.toLocaleString()}
              </h3>
              <div className="flex flex-wrap gap-6 sm:gap-8 items-center mt-6">
                 <div className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-[1.5rem] backdrop-blur-xl group hover:border-blue-500/50 transition-all">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">In Today's Dollars</p>
                    <p className="text-xl sm:text-2xl font-bold text-white">${stats.finalReal.toLocaleString()}</p>
                 </div>
                 <div className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-[1.5rem] backdrop-blur-xl group hover:border-emerald-500/50 transition-all">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Total Yield Earned</p>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400">+${stats.finalInterest.toLocaleString()}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-[4rem] p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-10 gap-8">
               <div>
                 <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-1">Growth Dynamics</h4>
                 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-tight">Nominal layers with an inflation-adjusted (Real Value) dashed overlay</p>
               </div>
               <div className="flex flex-wrap gap-6 p-3 bg-white dark:bg-zinc-900/50 rounded-2xl border dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Interest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Principal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-rose-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Inflation Adjusted</span>
                  </div>
               </div>
            </div>

            <div className="h-[550px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={stats.chartData}>
                  <defs>
                    <linearGradient id="colorInterestComp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPrincipalComp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 800, fill: '#94a3b8'}} dy={20} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 30px 40px -10px rgba(0,0,0,0.2)', padding: '24px', backgroundColor: '#0f172a' }}
                    labelStyle={{ fontWeight: 900, marginBottom: '12px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.1em', color: '#94a3b8' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Area type="monotone" dataKey="principal" stackId="1" stroke="#94a3b8" strokeWidth={3} fillOpacity={1} fill="url(#colorPrincipalComp)" name="Total Principal" />
                  <Area type="monotone" dataKey="interest" stackId="1" stroke="#10b981" strokeWidth={5} fillOpacity={1} fill="url(#colorInterestComp)" name="Total Interest" />
                  <Line type="monotone" dataKey="realValue" stroke="#f43f5e" strokeWidth={3} strokeDasharray="6 6" dot={false} name="Real Value" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-10 flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 pt-8 border-t dark:border-white/5">
                <span>Start (Year 0)</span>
                <span className="text-center opacity-60">Wealth Accumulation Timeline</span>
                <span>Target (Year {years})</span>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CompoundInterestCalculator;
