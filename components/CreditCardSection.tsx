import React, { useState } from 'react';

interface CardGuide {
  title: string;
  category: 'Top Picks' | 'Building Credit' | 'Rewards' | 'Credit Logic';
  icon: string;
  description: string;
}

interface CreditCardSectionProps {
  onSelect: (guide: CardGuide) => void;
  designSystem?: 'standard' | 'flash';
}

const CreditCardSection: React.FC<CreditCardSectionProps> = ({ onSelect, designSystem = 'flash' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const guides: CardGuide[] = [
    { title: "Best Credit Cards for Beginners in the US", category: "Top Picks", icon: "🏆", description: "The gold standard for starting your journey with no annual fee and 1.5% back on every purchase." },
    { title: "Best Credit Cards for a 600 Credit Score", category: "Top Picks", icon: "📊", description: "Bridge the gap from fair to good credit in 7-12 months using high-probability approval nodes." },
    { title: "Best Credit Cards for Students with No Credit", category: "Top Picks", icon: "🎓", description: "Specialized nodes for developing assets with higher approval probability and Year 1 reward matches." },
    { title: "Best Cash Back Credit Cards for Beginners", category: "Rewards", icon: "💵", description: "Turn mandatory spending into liquid yield engines. Anchor your stack with high-velocity rewards." },
    { title: "Best 0% APR Credit Cards for Large Purchases", category: "Rewards", icon: "🛍️", description: "Interest-free bridge loans for major cash outflows. Secure a 21-month runway for your capital." },
    { title: "Best Credit Cards for Building Credit Fast", category: "Building Credit", icon: "⚡", description: "Accelerate your score with accounts that report to all three bureaus with perfect consistency." },
    { title: "Secured vs Unsecured Credit Cards Explained", category: "Building Credit", icon: "🔒", description: "Understand the collateral mechanism before you apply. Learn the most efficient path to graduation." },
    { title: "How to Get Approved for Your First Credit Card", category: "Building Credit", icon: "✅", description: "Approval is a data verification sequence. Use soft-pull strategies to present the specific signals lenders want." },
    { title: "Credit Utilization: What Percentage Is Best?", category: "Credit Logic", icon: "📉", description: "Master the 10% protocol. Manipulate your score by 50 points in a single billing cycle." },
    { title: "How Many Credit Cards Should You Have?", category: "Credit Logic", icon: "💳", description: "Optimize your portfolio node. 3 cards is the peak efficiency point for most developing profiles." },
    { title: "Best Travel Credit Cards for Beginners", category: "Rewards", icon: "✈️", description: "Capture travel alpha with flexible rewards and elite transfer ecosystems for free global transit." },
    { title: "Best No-Annual-Fee Credit Cards", category: "Rewards", icon: "🆓", description: "Zero friction, pure yield. Hold these nodes forever to build the foundation of a high-700s score." },
    { title: "Can You Apply for Multiple Credit Cards at Once?", category: "Credit Logic", icon: "📑", description: "Avoid the shotgun application trap. Learn the optimal 6-month waiting sequence to protect your reputation." },
    { title: "How Hard Inquiries Affect Your Credit Score", category: "Credit Logic", icon: "🔍", description: "The reputational toll explained. A minor dip is the price for a high-value rewards node." },
    { title: "What Is a Secured Credit Card and Who Needs One?", category: "Building Credit", icon: "🛡️", description: "A temporary scaffold for your reputation. Use collateral to build a 700+ score in under a year." }
  ];

  const categories = ['All', 'Top Picks', 'Building Credit', 'Rewards', 'Credit Logic'];
  const filteredGuides = activeCategory === 'All' ? guides : guides.filter(g => g.category === activeCategory);

  const getStyle = (cat: string) => {
    switch(cat) {
        case 'Top Picks': return 'bg-amber-500/5 text-amber-600 border-amber-500/10';
        case 'Building Credit': return 'bg-blue-500/5 text-blue-600 border-blue-500/10';
        case 'Rewards': return 'bg-emerald-500/5 text-emerald-600 border-emerald-500/10';
        case 'Credit Logic': return 'bg-violet-500/5 text-violet-600 border-violet-500/10';
        default: return 'bg-slate-500/5 text-slate-600 border-slate-500/10';
    }
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            Credit Optimization Hub
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white uppercase tracking-tighter mb-8">
            Engineered <span className="text-emerald-500">Credit.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[1.5rem] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-[1rem] text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-500 hover:bg-emerald-50 dark:hover:bg-slate-800'
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
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">{guide.category}</span>
                </button>
              );
            }

            return (
              <button 
                key={idx} 
                onClick={() => onSelect(guide)}
                className={`group relative text-left block p-6 ${styles.split(' ')[0]} border-2 ${styles.split(' ')[2]} rounded-[1.5rem] hover:border-slate-300 dark:hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] overflow-hidden h-full flex flex-col`}
              >
                <div className={`absolute top-0 right-0 p-6 ${styles.split(' ')[1]} opacity-5 group-hover:opacity-10 transition-all pointer-events-none scale-[1.5]`}>
                  {guide.icon}
                </div>
                <div className="w-10 h-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-all shadow-sm">
                  {guide.icon}
                </div>
                <h3 className="text-base font-black text-slate-950 dark:text-white leading-tight mb-2 group-hover:text-emerald-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {guide.description}
                </p>
                <div className={`mt-auto inline-flex items-center justify-between px-4 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest ${styles.split(' ')[1]} bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm w-full`}>
                  Deploy Intel
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

export default CreditCardSection;