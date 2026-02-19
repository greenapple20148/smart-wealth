import React, { useState, useMemo } from 'react';
import ArticleLayout from '../ArticleLayout';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const MortgageCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // Core Inputs
  const [price, setPrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  
  // Expenses & Optimization
  const [propertyTax, setPropertyTax] = useState(1.2); // Annual %
  const [insurance, setInsurance] = useState(1500); // Annual $
  const [hoa, setHoa] = useState(0); // Monthly $
  const [extraPayment, setExtraPayment] = useState(0); // Monthly $

  const stats = useMemo(() => {
    const principal = price - downPayment;
    const monthlyInterestRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    
    // Monthly P&I
    const monthlyPI = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    // Other Monthly Costs
    const monthlyTax = (price * (propertyTax / 100)) / 12;
    const monthlyInsurance = insurance / 12;
    const totalMonthlyNoExtra = monthlyPI + monthlyTax + monthlyInsurance + hoa;
    const totalMonthlyWithExtra = totalMonthlyNoExtra + extraPayment;

    // Amortization Schedule Engine
    const fullSchedule = [];
    let balance = principal;
    let totalInterestPaid = 0;
    let monthsToPayOff = 0;
    let totalInterestNoExtra = 0;

    // Baseline calculation (for comparison)
    let baselineBalance = principal;
    for (let i = 0; i < numberOfPayments; i++) {
        const int = baselineBalance * monthlyInterestRate;
        totalInterestNoExtra += int;
        baselineBalance -= (monthlyPI - int);
    }

    let yearlyPrincipal = 0;
    let yearlyInterest = 0;

    for (let m = 1; m <= numberOfPayments; m++) {
      const interestForMonth = balance * monthlyInterestRate;
      const principalForMonth = Math.min(balance, monthlyPI - interestForMonth + extraPayment);
      
      yearlyInterest += interestForMonth;
      yearlyPrincipal += principalForMonth;
      totalInterestPaid += interestForMonth;
      balance = Math.max(0, balance - principalForMonth);
      
      if (balance === 0 && monthsToPayOff === 0) {
        monthsToPayOff = m;
      }

      if (m % 12 === 0 || balance === 0) {
        const year = Math.ceil(m / 12);
        fullSchedule.push({
          year,
          principalPaid: Math.round(yearlyPrincipal),
          interestPaid: Math.round(yearlyInterest),
          balance: Math.round(balance),
          equity: Math.round(price - balance)
        });
        yearlyPrincipal = 0;
        yearlyInterest = 0;
      }

      if (balance === 0) break;
    }

    const timeSavedMonths = numberOfPayments - (monthsToPayOff || numberOfPayments);
    const interestSaved = totalInterestNoExtra - totalInterestPaid;

    return {
      monthlyPI,
      monthlyTax,
      monthlyInsurance,
      totalMonthlyNoExtra,
      totalMonthlyWithExtra,
      totalInterestPaid,
      totalLoanCost: principal + totalInterestPaid,
      monthsToPayOff,
      timeSavedMonths,
      interestSaved,
      fullSchedule,
      pieData: [
        { name: 'P&I', value: Math.round(monthlyPI), color: '#3b82f6' },
        { name: 'Taxes', value: Math.round(monthlyTax), color: '#10b981' },
        { name: 'Insurance', value: Math.round(monthlyInsurance), color: '#f59e0b' },
        { name: 'HOA', value: hoa, color: '#6366f1' },
        { name: 'Extra', value: extraPayment, color: '#ec4899' }
      ].filter(d => d.value > 0)
    };
  }, [price, downPayment, rate, term, propertyTax, insurance, hoa, extraPayment]);

  return (
    <ArticleLayout title="Mortgage Precision Engine" category="Wealth Tool" icon="🏛️" onClose={onClose}>
      <div className="grid lg:grid-cols-12 gap-10">
        
        {/* Input Sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-8">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] space-y-8 shadow-sm">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-b dark:border-white/5 pb-4">Loan Parameters</h4>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-slate-500 flex justify-between">
                  Home Price <span className="text-slate-900 dark:text-white font-mono">${price.toLocaleString()}</span>
                </label>
                <input type="range" min="100000" max="2500000" step="10000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase text-emerald-500 flex justify-between">
                  Down Payment <span className="font-mono">${downPayment.toLocaleString()} ({Math.round((downPayment/price)*100)}%)</span>
                </label>
                <input type="range" min="0" max={price} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400">Rate (%)</label>
                  <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400">Term (Yrs)</label>
                  <select value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border dark:border-white/10 rounded-xl text-sm font-bold outline-none">
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                  </select>
                </div>
              </div>
            </div>

            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-b dark:border-white/5 pb-4 pt-4">Recurring & Extra</h4>
            
            <div className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase">Tax (%)</label>
                    <input type="number" step="0.1" value={propertyTax} onChange={(e) => setPropertyTax(Number(e.target.value))} className="w-full px-3 py-2 bg-white dark:bg-zinc-950 border dark:border-white/5 rounded-lg text-xs font-bold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase">Ins ($/yr)</label>
                    <input type="number" value={insurance} onChange={(e) => setInsurance(Number(e.target.value))} className="w-full px-3 py-2 bg-white dark:bg-zinc-950 border dark:border-white/5 rounded-lg text-xs font-bold" />
                  </div>
               </div>
               
               <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-slate-500 flex justify-between">
                  HOA Monthly <span>${hoa}</span>
                </label>
                <input type="range" min="0" max="2000" step="25" value={hoa} onChange={(e) => setHoa(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-400" />
              </div>

               <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-pink-500 flex justify-between">
                  Extra Payment <span>${extraPayment}</span>
                </label>
                <input type="range" min="0" max="5000" step="50" value={extraPayment} onChange={(e) => setExtraPayment(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-pink-500" />
              </div>
            </div>
          </div>

          {extraPayment > 0 && (
            <div className="p-8 bg-pink-500 text-white rounded-[2.5rem] shadow-2xl shadow-pink-500/20 relative overflow-hidden animate-in fade-in zoom-in">
               <div className="absolute right-0 top-0 p-6 opacity-10 text-7xl font-black italic select-none">FAST</div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Acceleration Alpha</p>
               <h5 className="text-3xl font-black tracking-tighter">Save ${Math.round(stats.interestSaved).toLocaleString()}</h5>
               <p className="text-[11px] mt-4 opacity-90 leading-relaxed font-medium">
                 By adding ${extraPayment} monthly, you will pay off your loan <strong>{Math.floor(stats.timeSavedMonths / 12)} years early</strong>.
               </p>
            </div>
          )}
        </div>

        {/* Dashboard Area */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-10">
          
          {/* Main Metrics HUD */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 bg-blue-600 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-100 mb-4">Total Monthly Payment</p>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2 break-words leading-tight">
                  ${Math.round(stats.totalMonthlyWithExtra).toLocaleString()}
                </h3>
                <div className="mt-6 flex items-center gap-4 flex-wrap">
                  <span className="px-3 py-1.5 bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest">PITI + HOA</span>
                  <span className="text-xs text-blue-100/70 font-bold italic">Full monthly recurring cost</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-slate-950 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px]"></div>
              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-4">Lifetime Interest</p>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2 break-words leading-tight">
                  ${Math.round(stats.totalInterestPaid).toLocaleString()}
                </h3>
                <div className="mt-6 flex items-center gap-4 flex-wrap">
                  <span className="px-3 py-1.5 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10">Cost of Loan</span>
                  <span className="text-xs text-slate-500 font-bold">Total accumulated interest</span>
                </div>
              </div>
            </div>
          </div>

          {/* Composition & Summary Row */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[4rem] p-10 flex flex-col items-center">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Monthly Composition</h4>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={stats.pieData} innerRadius={90} outerRadius={130} paddingAngle={8} dataKey="value">
                      {stats.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 30px 40px -10px rgba(0,0,0,0.2)', padding: '16px', backgroundColor: '#0f172a' }}
                      itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-12 w-full mt-12">
                {stats.pieData.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.name}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white ml-auto">${item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden border border-white/5">
                <div className="absolute right-0 top-0 p-8 opacity-5 text-9xl font-black italic">EXIT</div>
                <h4 className="text-2xl font-black text-cyan-400 uppercase tracking-tighter mb-6 relative z-10">Payoff Intelligence</h4>
                <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Total Loan Payoff</span>
                        <span className="text-xl font-bold">${stats.totalLoanCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Time to Maturity</span>
                        <span className="text-xl font-bold text-emerald-400">{Math.floor(stats.monthsToPayOff / 12)}Y {stats.monthsToPayOff % 12}M</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400 uppercase text-[10px] font-black tracking-widest">Extra Savings</span>
                        <span className="text-xl font-bold text-blue-400">${Math.round(stats.interestSaved).toLocaleString()}</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Full Amortization Schedule Table */}
          <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[4rem] p-8 lg:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
              <div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-1">Amortization Schedule</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-500 font-medium tracking-wide">Detailed yearly breakdown of principal vs. interest components</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-y-2">
                <thead className="sticky top-0 bg-slate-50 dark:bg-zinc-950 z-20">
                  <tr className="text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <th className="px-6 py-4">Year</th>
                    <th className="px-6 py-4">Principal Paid</th>
                    <th className="px-6 py-4">Interest Paid</th>
                    <th className="px-6 py-4">Total Equity</th>
                    <th className="px-6 py-4 text-right">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.fullSchedule.map((row) => (
                    <tr 
                      key={row.year} 
                      className="group bg-white dark:bg-zinc-900/50 hover:bg-slate-950 hover:text-white transition-all duration-300"
                    >
                      <td className="px-6 py-5 rounded-l-2xl font-black">
                        <span className="bg-slate-100 dark:bg-white/5 px-2 py-1 rounded text-[10px]">{row.year < 10 ? `0${row.year}` : row.year}</span>
                      </td>
                      <td className="px-6 py-5 font-bold text-emerald-500">${row.principalPaid.toLocaleString()}</td>
                      <td className="px-6 py-5 font-bold text-rose-500">${row.interestPaid.toLocaleString()}</td>
                      <td className="px-6 py-5 font-bold">${row.equity.toLocaleString()}</td>
                      <td className="px-6 py-5 text-right font-black text-blue-500 rounded-r-2xl">${row.balance.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Generated for 2026 Housing Market Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default MortgageCalculator;