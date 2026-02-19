import React, { useState } from 'react';

interface Guide {
  title: string;
  category: 'Investing' | 'Retirement' | 'Credit' | 'Budgeting';
  icon: string;
  description: string;
}

interface BeginnerSectionProps {
  onSelect: (guide: Guide) => void;
  designSystem?: 'standard' | 'flash';
}

const CategoryIcons = {
  Investing: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  ),
  Retirement: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21h18"/><path d="M19 21v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4"/><path d="M9 15V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10"/></svg>
  ),
  Credit: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
  ),
  Budgeting: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
  )
};

const BeginnerSection: React.FC<BeginnerSectionProps> = ({ onSelect, designSystem = 'flash' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const guides: Guide[] = [
    { title: "Compare Credit Cards", category: "Credit", icon: "Credit", description: "Compare the most effective financial nodes from Chase, Amex, and Capital One based on your credit score." },
    { title: "How to Start Investing with $100 in the US", category: "Investing", icon: "Investing", description: "Start building wealth in 2026. Modern apps and fractional shares have removed the barriers to entry." },
    { title: "What Is a Roth IRA and How Does It Work?", category: "Retirement", icon: "Retirement", description: "A tax-free growth agreement with the IRS. Pay taxes today to secure a completely tax-exempt retirement." },
    { title: "Roth IRA vs Traditional IRA for Beginners", category: "Retirement", icon: "Retirement", description: "Choosing between immediate deductions or future tax-free alpha. Learn which protocol fits your income." },
    { title: "How to Build Credit from Scratch in 2026", category: "Credit", icon: "Credit", description: "Establish a prime reputation using secured entry nodes and automated payment consistency." },
    { title: "What Is a Good Credit Score in the US?", category: "Credit", icon: "Credit", description: "Your financial passport. Understand the 670-740 range that unlocks elite lending rates." },
    { title: "401(k) vs IRA: Which Should You Choose First?", category: "Retirement", icon: "Retirement", description: "Execute the wealth cascade: Capture the match, then pivot to the low-fee freedom of an IRA." },
    { title: "How Compound Interest Builds Wealth", category: "Investing", icon: "Investing", description: "The eighth wonder of the world. Harness time and velocity to grow your capital exponentially." },
    { title: "What Is an ETF and Should Beginners Invest?", category: "Investing", icon: "Investing", description: "Gain instant diversification across hundreds of companies through a single high-liquidity share." },
    { title: "How to Budget on a $40,000 Salary", category: "Budgeting", icon: "Budgeting", description: "Master your capital with the 50/30/20 rule and precision tracking of every dollar flow." },
    { title: "How to Save Your First $10,000", category: "Budgeting", icon: "Budgeting", description: "Hitting the escape velocity of finance. Use high-yield storage nodes and automated savings flow." },
    { title: "What Happens If You Miss a Credit Card Payment?", category: "Credit", icon: "Credit", description: "A single 30-day failure can delete 100 points instantly. Learn the recovery sequence." },
    { title: "How to Improve Your Credit Score by 50 Points", category: "Credit", icon: "Credit", description: "Optimize your reputation node by targeting the 10% utilization corridor for a rapid surge." },
    { title: "Emergency Fund: How Much Do You Really Need?", category: "Budgeting", icon: "Budgeting", description: "Convert crises into minor inconveniences with a 3-6 month shield in a liquid HYSA." },
    { title: "Is Investing in Stocks Risky for Beginners?", category: "Investing", icon: "Investing", description: "The real danger isn't volatility—it's failing to invest. Manage risk through diversification and DCA." },
    { title: "How Taxes Work on Investments", category: "Investing", icon: "Investing", description: "Don't let taxes leak your alpha. Learn the delta between short and long-term capital gains." }
  ];

  const categories = ['All', 'Investing', 'Retirement', 'Credit', 'Budgeting'];
  const filteredGuides = activeCategory === 'All' ? guides : guides.filter(g => g.category === activeCategory);

  const getCatStyles = (cat: string) => {
    switch (cat) {
      case 'Investing': return { accent: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/5', border: 'border-blue-500/10', glow: 'shadow-blue-500/5' };
      case 'Retirement': return { accent: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/5', border: 'border-amber-500/10', glow: 'shadow-amber-500/5' };
      case 'Credit': return { accent: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/5', border: 'border-emerald-500/10', glow: 'shadow-emerald-500/5' };
      default: return { accent: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-500/5', border: 'border-indigo-500/10', glow: 'shadow-indigo-500/5' };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-colors">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 dark:bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg mb-6 shadow-xl border dark:border-cyan-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          Knowledge Architecture
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white uppercase tracking-tighter mb-4">
          Master Your <span className="text-slate-400">Capital</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-slate-100 dark:bg-slate-800/50 rounded-[1.5rem] mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950' : 'text-slate-500 dark:text-slate-400 hover:bg-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
        {filteredGuides.map((guide, idx) => {
          const IconComp = CategoryIcons[guide.category as keyof typeof CategoryIcons];
          const styles = getCatStyles(guide.category);
          
          if (designSystem === 'standard') {
            return (
              <button key={idx} onClick={() => onSelect(guide)} className="text-left p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2rem] hover:shadow-xl transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${styles.bg} ${styles.accent}`}><IconComp /></div>
                <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight mb-2">{guide.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{guide.description}</p>
                <span className={`text-[9px] font-black uppercase tracking-widest ${styles.accent}`}>{guide.category}</span>
              </button>
            );
          }

          return (
            <button 
              key={idx} 
              onClick={() => onSelect(guide)}
              className={`group relative text-left p-6 ${styles.bg} border-2 ${styles.border} rounded-[1.5rem] hover:border-slate-300 dark:hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col`}
            >
              <div className={`absolute top-0 right-0 p-6 ${styles.accent} opacity-5 group-hover:opacity-10 transition-all duration-700 pointer-events-none scale-[1.5]`}>
                <IconComp />
              </div>
              <div className={`w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 flex items-center justify-center ${styles.accent} mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                <IconComp />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${styles.accent}`}>{guide.category}</span>
              </div>
              <h3 className="text-base font-black text-slate-950 dark:text-white leading-tight mb-3 group-hover:text-blue-700 dark:group-hover:text-cyan-400 transition-colors">
                {guide.title}
              </h3>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                {guide.description}
              </p>
              <div className={`mt-auto inline-flex items-center justify-between px-4 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest ${styles.accent} bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shadow-sm`}>
                Launch Guide
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BeginnerSection;