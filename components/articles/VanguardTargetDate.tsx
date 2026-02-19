
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const VanguardTargetDate: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Vanguard Strategies: Targeting the Date" 
      category="Retirement" 
      icon="🏹" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Target Date Funds (TDFs) are the ultimate "set-it-and-forget-it" investment. Vanguard, the pioneer of low-cost indexing, offers a massive suite of these funds designed to automate your entire glide path toward retirement.
        </p>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">📅</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-cyan-400 uppercase tracking-widest">The "Glide Path" Logic</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            As you get closer to your target retirement year, the fund automatically shifts from <strong>aggressive growth</strong> (stocks) to <strong>capital preservation</strong> (bonds). You don't have to rebalance a single thing.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-cyan-400 font-black text-xs uppercase mb-2">Early Career</p>
              <p className="text-sm m-0">90% Stocks / 10% Bonds. Maximizing compounding over decades.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-emerald-400 font-black text-xs uppercase mb-2">At Retirement</p>
              <p className="text-sm m-0">30% Stocks / 70% Bonds. Protecting your nest egg from volatility.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Why Vanguard Leads the Pack</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16 text-center">
          <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl">
            <p className="text-3xl mb-4">📉</p>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ultra-Low Fees</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Expense ratios as low as 0.08%, compared to the industry average of 0.40%+.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl">
            <p className="text-3xl mb-4">🏗️</p>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Simple Core</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Built on total market index funds, giving you exposure to thousands of stocks.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl">
            <p className="text-3xl mb-4">🛡️</p>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tax Efficiency</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Vanguard's unique structure minimizes capital gains distributions.</p>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Move</h4>
          <p className="text-blue-50 text-xl leading-relaxed mb-0">
            "Pick the fund with the year closest to your 65th birthday." If you are 25 today, look for the <strong>Vanguard Target Retirement 2065 Fund (VLXVX)</strong>. It is designed to be your one and only investment for the next 40 years.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default VanguardTargetDate;
