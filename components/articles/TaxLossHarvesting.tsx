import React from 'react';
import ArticleLayout from '../ArticleLayout';

const TaxLossHarvesting: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Tax-Loss Harvesting: How to Lower Your IRS Bill" 
      category="Tax" 
      icon="✂️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Tax-loss harvesting is a strategy that involves selling an investment that has lost value to offset the capital gains you've realized from other investments. It’s one of the few legal ways to turn a market loss into a tax "win."
        </p>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">IRS</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-cyan-400 uppercase tracking-widest">The Core Mechanism</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            When you sell a winning investment, you owe "Capital Gains Tax." However, when you sell a losing investment, you create a <strong>Capital Loss</strong>. You can use that loss to cancel out your gains, dollar-for-dollar <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The College Investor)</span>.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-cyan-400 font-black text-xs uppercase mb-2">Offset Gains</p>
              <p className="text-sm m-0">Neutralize taxes on your profits from stocks, crypto, or real estate.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-emerald-400 font-black text-xs uppercase mb-2">Offset Income</p>
              <p className="text-sm m-0">If losses exceed gains, you can offset up to $3,000 of ordinary income.</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tighter">The $3,000 "Extra" Rule</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
          If you have more losses than gains, the IRS allows you to use up to <strong>$3,000</strong> of those remaining losses to lower your regular taxable income (from your salary) <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>.
        </p>
        
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 p-8 rounded-[2.5rem] mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="text-center">
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Stock Profits</p>
              <p className="text-3xl font-black text-emerald-500">+$10,000</p>
            </div>
            <div className="text-slate-300 text-3xl font-light">−</div>
            <div className="text-center">
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Harvested Losses</p>
              <p className="text-3xl font-black text-rose-500">-$13,000</p>
            </div>
            <div className="text-slate-300 text-3xl font-light">=</div>
            <div className="text-center">
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Taxable Capital Gain</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white">$0</p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-slate-500 font-medium">
            Result: $0 tax on profits + $3,000 reduction in your taxable salary <span className="text-[10px] font-black opacity-50"> </span>.
          </p>
        </div>

        <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 p-10 rounded-[3rem] mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 p-8 opacity-20 pointer-events-none text-9xl">🚫</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-rose-900 dark:text-rose-400">The "Wash-Sale" Trap</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            You cannot sell a stock for a loss and then buy the <strong>same or a "substantially identical"</strong> stock within 30 days before or after the sale <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter"> </span>.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 m-0">
            If you trigger a wash-sale, the IRS will disallow the tax loss, defeating the entire purpose of the strategy.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Best Practices for 2026</h3>
        <div className="space-y-6 mb-16">
          <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-sm shrink-0">📦</div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1">Swap for Similar ETFs</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0">Sold VOO (S&P 500) at a loss? Buy VTI (Total Market). They are similar but not "identical," avoiding the wash-sale rule <span className="text-[10px] font-black opacity-50 uppercase"> </span>.</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-sm shrink-0">🗓️</div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1">Year-End vs. Continuous</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0">While many wait until December, high-performing robo-advisors harvest losses <strong>daily</strong> as market dips occur <span className="text-[10px] font-black opacity-50 uppercase">(Mintos)</span>.</p>
            </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Flash Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Tax-loss harvesting is one of the most effective ways to boost your <strong>after-tax returns</strong>. For beginners, using a robo-advisor like Wealthfront or Betterment to automate this is the smartest move. It ensures you never miss a harvest and never trigger a wash-sale error.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default TaxLossHarvesting;