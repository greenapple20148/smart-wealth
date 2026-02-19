import React, { useState } from 'react';

interface MortgageGuide {
  title: string;
  category: 'Basics' | 'Planning' | 'Credit & Approval' | 'Strategy';
  icon: string;
  description: string;
}

interface MortgageSectionProps {
  onSelect: (guide: MortgageGuide) => void;
  designSystem?: 'standard' | 'flash';
}

const MortgageSection: React.FC<MortgageSectionProps> = ({ onSelect, designSystem = 'flash' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const guides: MortgageGuide[] = [
    { title: "What Is a Mortgage and How Does It Work?", category: "Basics", icon: "🏠", description: "Understand the mechanics of PITI and amortization before you enter the 2026 housing market." },
    { title: "Fixed vs Adjustable Rate Mortgages Explained", category: "Basics", icon: "⚖️", description: "Choose between sleep-at-night security or lower initial rates with periodic risk adjustments." },
    { title: "How Much Home Can You Afford on $50k Salary?", category: "Planning", icon: "💰", description: "Target the $150k-$200k range. Use the 28/36 rule to define your intelligence boundaries." },
    { title: "How Credit Score Affects Mortgage Approval", category: "Credit & Approval", icon: "📊", description: "A 740+ score saves you tens of thousands. Even a 50-point boost can significantly lower your cost." },
    { title: "5 Common Mortgage Mistakes Beginners Make", category: "Strategy", icon: "⚠️", description: "Avoid shopping before pre-approval and don't drain your emergency shield for a down payment." },
    { title: "How to Save for a Down Payment Quickly", category: "Planning", icon: "🏦", description: "Achieve homeownership faster by using high-yield engines and downsizing your lifestyle temporarily." },
    { title: "How to Refinance Your Mortgage", category: "Strategy", icon: "🔄", description: "Capture lower rates or kill PMI once you hit the 20% equity node. Learn the break-even protocol." },
    { title: "How to Get Pre-Approved for a Mortgage", category: "Credit & Approval", icon: "✅", description: "A verified statement that defines your exact buying power and shows sellers you're a serious contender." }
  ];

  const categories = ['All', 'Basics', 'Planning', 'Credit & Approval', 'Strategy'];
  const filteredGuides = activeCategory === 'All' ? guides : guides.filter(g => g.category === activeCategory);

  const getStyle = (cat: string) => {
    switch(cat) {
        case 'Basics': return 'bg-blue-500/5 text-blue-600 border-blue-500/10';
        case 'Planning': return 'bg-emerald-500/5 text-emerald-600 border-emerald-500/10';
        case 'Credit & Approval': return 'bg-amber-500/5 text-amber-600 border-amber-500/10';
        case 'Strategy': return 'bg-rose-500/5 text-rose-600 border-rose-500/10';
        default: return 'bg-violet-500/5 text-violet-600 border-violet-500/10';
    }
  };

  return (
    <section id="mortgages" className="py-32 bg-white dark:bg-zinc-950/20 relative overflow-hidden transition-colors scroll-mt-20">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            Real Estate Intelligence
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white uppercase tracking-tighter mb-8">
            Master the <span className="text-violet-600 dark:text-violet-400">Mortgage.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2 p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[1.5rem] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-[1rem] text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-500 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide, idx) => {
            const styles = getStyle(guide.category);
            
            if (designSystem === 'standard') {
              return (
                <button key={idx} onClick={() => onSelect(guide)} className="text-left p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2rem] hover:shadow-xl transition-all">
                  <div className="text-2xl mb-4">{guide.icon}</div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight mb-2">{guide.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{guide.description}</p>
                  <span className="text-[9px] font-black uppercase tracking-widest text-violet-500">{guide.category}</span>
                </button>
              );
            }

            return (
              <button 
                key={idx} 
                onClick={() => onSelect(guide)}
                className={`group relative text-left block p-6 ${styles.split(' ')[0]} border-2 ${styles.split(' ')[2]} rounded-[1.5rem] hover:border-slate-300 dark:hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(124,58,237,0.1)] overflow-hidden h-full flex flex-col`}
              >
                <div className={`absolute top-0 right-0 p-6 ${styles.split(' ')[1]} opacity-5 group-hover:opacity-10 transition-all pointer-events-none scale-[1.5]`}>
                  {guide.icon}
                </div>
                <div className="w-10 h-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-all shadow-sm">
                  {guide.icon}
                </div>
                <h3 className="text-base font-black text-slate-950 dark:text-white leading-tight mb-2 group-hover:text-violet-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {guide.description}
                </p>
                <div className={`mt-auto inline-flex items-center justify-between px-4 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest ${styles.split(' ')[1]} bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-sm w-full`}>
                  Launch Intel
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MortgageSection;