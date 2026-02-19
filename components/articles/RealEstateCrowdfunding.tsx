
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const RealEstateCrowdfunding: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Real Estate Micro-Investing: Crowdfunding Explained" 
      category="Real Estate" 
      icon="🏘️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Owning physical real estate used to require hundreds of thousands of dollars. Today, "micro-investing" via crowdfunding allows you to own pieces of commercial and residential property for as little as $10.
        </p>

        <div className="p-10 bg-slate-900 text-white rounded-[3rem] mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">🏛️</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-cyan-400 uppercase tracking-widest">How Crowdfunding Works</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Platform "sponsors" identify properties, manage them, and collect rent. You buy shares in a <strong>REIT</strong> (Real Estate Investment Trust) or a specific property LLC, receiving your portion of the income and appreciation <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter"> </span>.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-cyan-400 font-black text-xs uppercase mb-2">Passive Income</p>
              <p className="text-sm m-0">Quarterly dividends from rental income distributed to shareholders.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-emerald-400 font-black text-xs uppercase mb-2">Low Minimums</p>
              <p className="text-sm m-0">Start with just $10–$500 instead of a $50k down payment.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">The Major Players</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center">
             <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Fundrise</h4>
             <p className="text-xs text-slate-500 mb-4">Start with $10. Best for beginners who want a diversified REIT approach.</p>
             <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[9px] font-black rounded uppercase">Entry Level</span>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center">
             <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">RealtyMogul</h4>
             <p className="text-xs text-slate-500 mb-4">Focuses on institutional-quality commercial properties. $5,000 minimum.</p>
             <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-[9px] font-black rounded uppercase">Intermediate</span>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center">
             <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Arrived</h4>
             <p className="text-xs text-slate-500 mb-4">Buy shares in single-family rentals. Minimums usually start at $100.</p>
             <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-black rounded uppercase">Residential</span>
          </div>
        </div>

        <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 p-10 rounded-[3rem] mb-16 relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-6 mt-0 text-rose-900 dark:text-rose-400">The Liquidity Trap</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Unlike stocks, you cannot sell your real estate shares instantly. Most platforms require a <strong>3-5 year holding period</strong> <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter">(NerdWallet)</span>. Only invest money you won't need for several years.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Flash Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Micro-investing is the best way for beginners to get "Skin in the Game" without the headache of being a landlord. Allocate a small portion (5-10%) of your portfolio here for steady dividends and long-term appreciation.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default RealEstateCrowdfunding;
