import React from 'react';
import ArticleLayout from '../ArticleLayout';

const NoAnnualFeeCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Best No-Annual-Fee Credit Cards" 
      category="Credit Cards" 
      icon="🆓" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Zero friction. Pure yield. In 2026, no-annual-fee cards have matured to offer rewards that rival mid-tier premium products.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">FREE</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-blue-400 uppercase tracking-tighter">The "Zero-Fee" Edge</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            These are the "Perpetual Nodes" of your credit report. Because they cost $0 to hold, you can keep them open for decades, maximizing your <strong>average age of accounts</strong>—a key 15% factor in your FICO score <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The Motley Fool)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-blue-500 decoration-4">The Top Value Nodes</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Wells Fargo Active Cash */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏦</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Flat-Rate Leader</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Wells Fargo Active Cash®</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The simplest high-yield card. Unlimited <strong>2% cash back</strong> on everything. Includes a $200 bonus and zero yearly friction <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">Unlimited 2%</span>
            </div>
          </div>

          {/* Chase Freedom Unlimited */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🎯</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Category Hybrid</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Chase Freedom Unlimited®</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Earn 5% on travel and 3% on dining/drugstores. The perfect entry node for the Chase Ultimate Rewards ecosystem <span className="text-[10px] font-black opacity-50 uppercase">(Mintos)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">No Fee Rewards</span>
            </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            A no-annual-fee card is a <strong>risk-free asset</strong>. Pick the <strong>Wells Fargo Active Cash</strong> for pure simplicity or the <strong>Chase Freedom Unlimited</strong> for category upside. Hold these nodes forever to build the foundation of a high-700s score.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default NoAnnualFeeCards;