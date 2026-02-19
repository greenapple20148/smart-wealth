
import React, { useState, useMemo } from 'react';
import ArticleLayout from '../ArticleLayout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FourOneKCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [balance, setBalance] = useState(10000);
  const [salary, setSalary] = useState(75000);
  const [salaryGrowth, setSalaryGrowth] = useState(3);
  const [contribution, setContribution] = useState(10);
  const [match, setMatch] = useState(50); // 50% match
  const [matchLimit, setMatchLimit] = useState(6); // up to 6%
  const [age, setAge] = useState(28);
  const [retireAge, setRetireAge] = useState(65);
  const [returnRate, setReturnRate] = useState(8);

  const stats = useMemo(() => {
    let currentBalance = balance;
    let currentSalary = salary;
    let totalUserContributed = 0;
    let totalEmployerContributed = 0;
    
    const chartData = [];
    const yearsToRetire = retireAge - age;
    let millionaireAge = null;

    for (let i = 0; i <= yearsToRetire; i++) {
      const currentYearAge = age + i;
      
      const userAnnual = currentSalary * (contribution / 100);
      const effectiveMatchRate = Math.min(contribution, matchLimit) * (match / 100);
      const employerAnnual = currentSalary * (effectiveMatchRate / 100);

      const growthEarnings = currentBalance - (totalUserContributed + totalEmployerContributed + balance);

      if (currentBalance >= 1000000 && !millionaireAge) {
        millionaireAge = currentYearAge;
      }

      chartData.push({
        age: currentYearAge,
        userContrib: Math.round(totalUserContributed + balance),
        matchContrib: Math.round(totalEmployerContributed),
        growth: Math.round(Math.max(0, growthEarnings)),
        total: Math.round(currentBalance)
      });

      totalUserContributed += userAnnual;
      totalEmployerContributed += employerAnnual;
      
      currentBalance = (currentBalance + userAnnual + employerAnnual) * (1 + returnRate / 100);
      currentSalary = currentSalary * (1 + salaryGrowth / 100);
    }

    const finalBalance = currentBalance;
    const monthlyIncome4Percent = (finalBalance * 0.04) / 12;

    return {
      chartData,
      finalBalance,
      totalUserContributed,
      totalEmployerContributed,
      growthEarnings: finalBalance - (totalUserContributed + totalEmployerContributed + balance),
      monthlyIncome4Percent,
      millionaireAge
    };
  }, [balance, salary, salaryGrowth, contribution, match, matchLimit, age, retireAge, returnRate]);

  const applyPreset = (type: 'aggressive' | 'standard' | 'minimal') => {
    if (type === 'aggressive') {
      setContribution(20);
      setReturnRate(10);
    } else if (type === 'standard') {
      setContribution(10);
      setReturnRate(7.5);
    } else {
      setContribution(3);
      setReturnRate(5);
    }
  };

  return (
    <ArticleLayout title="Retirement Velocity Engine" category="Interactive Tool" icon="⚡" onClose={onClose}>
      <div className="grid lg:grid-cols-12 gap-10">
        
        {/* Input Control Deck */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-8">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] space-y-10 shadow-sm">
            <div className="flex justify-between items-center border-b dark:border-white/5 pb-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Parameter Deck</h4>
              <div className="flex gap-2">
                <button onClick={() => applyPreset('minimal')} className="w-2 h-2 rounded-full bg-slate-300 dark:bg-zinc-800" title="Low Profile"></button>
                <button onClick={() => applyPreset('standard')} className="w-2 h-2 rounded-full bg-blue-500" title="Balanced Profile"></button>
                <button onClick={() => applyPreset('aggressive')} className="w-2 h-2 rounded-full bg-cyan-400" title="Growth Profile"></button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Current Salary <span className="text-slate-900 dark:text-white font-mono">${salary.toLocaleString()}</span>
                </label>
                <input type="range" min="25000" max="300000" step="5000" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400">Your Age</label>
                  <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400">Target Age</label>
                  <input type="number" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t dark:border-white/5">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Your Contribution <span className="text-blue-500">{contribution}%</span>
                </label>
                <input type="range" min="0" max="30" step="1" value={contribution} onChange={(e) => setContribution(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Expected Return <span className="text-emerald-500">{returnRate}%</span>
                </label>
                <input type="range" min="1" max="15" step="0.5" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
            </div>

            <div className="p-6 bg-blue-600/[0.03] border border-blue-500/10 rounded-2xl space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">Employer Match Logic</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400">Match %</label>
                  <input type="number" value={match} onChange={(e) => setMatch(Number(e.target.value))} className="w-full px-3 py-2 bg-white dark:bg-zinc-950 border dark:border-white/5 rounded-lg text-xs font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400">Up to %</label>
                  <input type="number" value={matchLimit} onChange={(e) => setMatchLimit(Number(e.target.value))} className="w-full px-3 py-2 bg-white dark:bg-zinc-950 border dark:border-white/5 rounded-lg text-xs font-bold" />
                </div>
              </div>
            </div>
          </div>

          {stats.millionaireAge && (
            <div className="p-8 bg-emerald-500 text-white rounded-[2.5rem] shadow-2xl shadow-emerald-500/20 relative overflow-hidden animate-in fade-in zoom-in duration-700">
               <div className="absolute right-0 top-0 p-6 opacity-10 text-7xl font-black italic select-none">MIL</div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Milestone Forecast</p>
               <h5 className="text-3xl font-black tracking-tighter">Millionaire by Age {stats.millionaireAge}</h5>
               <p className="text-[11px] mt-4 opacity-90 leading-relaxed font-medium">At your current trajectory, you will enter the two-comma club {retireAge - stats.millionaireAge} years before retirement.</p>
            </div>
          )}
        </div>

        {/* Data Visualization Wing */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-10">
          
          {/* Primary Metric HUD */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 bg-slate-950 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-1000"></div>
              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4">Terminal Nest Egg</p>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2 break-words leading-tight">
                  ${Math.round(stats.finalBalance).toLocaleString()}
                </h3>
                <div className="mt-6 flex items-center gap-4 flex-wrap">
                  <span className="px-3 py-1.5 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10">Age {retireAge}</span>
                  <span className="text-xs text-slate-500 font-bold">Compound Accumulation</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-blue-600 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-white/10 rounded-full blur-[60px] group-hover:bg-white/20 transition-all"></div>
              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-100 mb-4">Passive Cash Flow</p>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2 break-words leading-tight">
                  ${Math.round(stats.monthlyIncome4Percent).toLocaleString()}
                </h3>
                <div className="mt-6 flex items-center gap-4 flex-wrap">
                  <span className="px-3 py-1.5 bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest">Monthly</span>
                  <span className="text-xs text-blue-100/70 font-bold italic">4% Safe Withdrawal Rule</span>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Anatomy Chart */}
          <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[4rem] p-8 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
              <div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-1">Growth Architecture</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-500 font-medium tracking-wide">Visualization of principal layers vs. market velocity over {retireAge - age} years</p>
              </div>
              <div className="flex flex-wrap gap-4 p-3 bg-white dark:bg-zinc-900/50 rounded-2xl border dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gains</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Match</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-zinc-700"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Deposits</span>
                </div>
              </div>
            </div>

            <div className="h-[550px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stats.chartData} stackOffset="none" margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gradGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="gradMatch" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="gradUser" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.1)" />
                  <XAxis dataKey="age" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 800, fill: '#64748b'}} dy={20} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 40px 60px -15px rgba(0,0,0,0.3)', padding: '24px', backgroundColor: '#020617' }}
                    labelStyle={{ fontWeight: 900, marginBottom: '16px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.2em', color: '#64748b' }}
                    itemStyle={{ fontSize: '13px', fontWeight: 800, color: '#fff', padding: '4px 0' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Area type="monotone" dataKey="userContrib" stackId="1" stroke="#94a3b8" strokeWidth={3} fillOpacity={1} fill="url(#gradUser)" name="User Deposits" />
                  <Area type="monotone" dataKey="matchContrib" stackId="1" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#gradMatch)" name="Employer Match" />
                  <Area type="monotone" dataKey="growth" stackId="1" stroke="#22d3ee" strokeWidth={5} fillOpacity={1} fill="url(#gradGrowth)" name="Market Gains" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breakdown & Insights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-zinc-950 border dark:border-white/5 rounded-[2.5rem] shadow-sm flex flex-col justify-between group hover:border-blue-500/30 transition-all">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Total Match Earned</p>
                <h6 className="text-2xl sm:text-3xl font-black text-blue-600">${Math.round(stats.totalEmployerContributed).toLocaleString()}</h6>
              </div>
              <div className="mt-8 pt-6 border-t dark:border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Free Capital</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-zinc-950 border dark:border-white/5 rounded-[2.5rem] shadow-sm flex flex-col justify-between group hover:border-cyan-500/30 transition-all">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Lifetime ROI</p>
                <h6 className="text-2xl sm:text-3xl font-black text-cyan-500">${Math.round(stats.growthEarnings).toLocaleString()}</h6>
              </div>
              <div className="mt-8 pt-6 border-t dark:border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Market Efficiency</span>
                <span className="text-[10px] font-black text-emerald-500">+{Math.round((stats.growthEarnings / (stats.totalUserContributed + balance)) * 100)}%</span>
              </div>
            </div>

            <div className="p-8 bg-slate-950 text-white rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center">
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 italic">"The power of compounding is the only free lunch on Wall Street."</p>
              <div className="h-px bg-white/10 w-12 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default FourOneKCalculator;
