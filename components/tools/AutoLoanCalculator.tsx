
import React, { useState, useMemo } from 'react';
import ArticleLayout from '../ArticleLayout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AutoLoanCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [price, setPrice] = useState(35000);
  const [down, setDown] = useState(5000);
  const [trade, setTrade] = useState(0);
  const [rate, setRate] = useState(5.9);
  const [months, setMonths] = useState(60);

  const stats = useMemo(() => {
    const loanAmount = price - down - trade;
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - loanAmount;

    const chartData = [];
    let balance = loanAmount;
    
    chartData.push({ month: 0, balance: Math.round(loanAmount) });

    for (let m = 1; m <= months; m++) {
      const interestForMonth = balance * monthlyRate;
      const principalForMonth = monthlyPayment - interestForMonth;
      balance = Math.max(0, balance - principalForMonth);
      
      if (m % 12 === 0 || m === months) {
        chartData.push({
          month: m,
          balance: Math.round(balance)
        });
      }
    }

    return {
      monthly: Math.round(monthlyPayment),
      interest: Math.round(totalInterest),
      loan: Math.round(loanAmount),
      totalCost: Math.round(totalPaid + down + trade),
      chartData,
      pieData: [
        { name: 'Principal', value: Math.round(loanAmount), color: '#3b82f6' },
        { name: 'Interest', value: Math.round(totalInterest), color: '#f43f5e' },
        { name: 'Cash Paid', value: down + trade, color: '#10b981' }
      ]
    };
  }, [price, down, trade, rate, months]);

  return (
    <ArticleLayout title="Auto Finance Engine" category="Calculators" icon="🚗" onClose={onClose}>
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Sidebar Inputs */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-8">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] space-y-8 shadow-sm">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 border-b dark:border-white/5 pb-4">Vehicle Specs</h4>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Vehicle Price <span>${price.toLocaleString()}</span>
                </label>
                <input type="range" min="5000" max="150000" step="500" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-slate-400">Down Pay</label>
                  <input type="number" value={down} onChange={(e) => setDown(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-slate-400">Trade-In</label>
                  <input type="number" value={trade} onChange={(e) => setTrade(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold" />
                </div>
              </div>
            </div>

            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 border-b dark:border-white/5 pb-4 pt-4">Loan Strategy</h4>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Interest Rate <span>{rate}%</span>
                </label>
                <input type="range" min="0" max="25" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500" />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500">Loan Term (Months)</label>
                <div className="flex bg-slate-100 dark:bg-zinc-800 p-1.5 rounded-2xl">
                  {[36, 48, 60, 72, 84].map((m) => (
                    <button 
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`flex-1 py-2 text-[10px] font-black uppercase rounded-xl transition-all ${months === m ? 'bg-white dark:bg-zinc-700 text-blue-600 shadow-sm' : 'text-slate-500'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {months > 60 && (
            <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-[1.5rem] flex gap-4 items-start">
              <span className="text-2xl">🚧</span>
              <p className="text-xs font-bold text-rose-600 dark:text-rose-400 leading-relaxed">
                FINANCE WARNING: A {months}-month term is considered long. You risk being "underwater" on value.
              </p>
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-10">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-10 bg-blue-600 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-8 opacity-10 text-8xl group-hover:scale-110 transition-transform">⛽</div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-100 mb-4">Monthly Payment</p>
              <h3 className="text-5xl lg:text-6xl font-black tracking-tight">${stats.monthly.toLocaleString()}</h3>
            </div>

            <div className="p-10 bg-slate-950 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute right-0 top-0 p-8 opacity-10 text-8xl group-hover:rotate-12 transition-transform">📉</div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-rose-400 mb-4">Total Interest</p>
              <h3 className="text-5xl lg:text-6xl font-black tracking-tight">${stats.interest.toLocaleString()}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-[4rem] p-10 flex flex-col items-center">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Total Ownership Cost</h4>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={stats.pieData} innerRadius={90} outerRadius={130} paddingAngle={8} dataKey="value">
                      {stats.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', backgroundColor: '#fff' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 gap-4 w-full mt-10">
                {stats.pieData.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b dark:border-white/5 last:border-0">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.name}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white ml-auto">${item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-[4rem] p-10 flex flex-col">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Payoff Velocity</h4>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.chartData}>
                    <defs>
                      <linearGradient id="colorBalanceAuto" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 800, fill: '#94a3b8'}} dy={15} label={{ value: 'Months', position: 'insideBottom', offset: -10, fontSize: 10, fontWeight: 900 }} />
                    <YAxis hide />
                    <Tooltip 
                       contentStyle={{ borderRadius: '16px', border: 'none', backgroundColor: '#0f172a', color: '#fff' }}
                       labelStyle={{ color: '#94a3b8', fontWeight: 900 }}
                       formatter={(value: number) => [`$${value.toLocaleString()}`, 'Balance']} 
                    />
                    <Area type="stepAfter" dataKey="balance" stroke="#3b82f6" strokeWidth={5} fillOpacity={1} fill="url(#colorBalanceAuto)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-12 text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic text-center">
                Visualizing the remaining loan balance at each 12-month interval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default AutoLoanCalculator;
