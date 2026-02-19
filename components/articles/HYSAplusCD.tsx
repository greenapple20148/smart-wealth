
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const HYSAplusCD: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="HYSA vs. CD: Which is Better for Your Cash?" 
      category="Savings" 
      icon="🏦" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          In a high-interest-rate environment, parked cash should be working for you. Both High-Yield Savings Accounts (HYSA) and Certificates of Deposit (CD) offer low risk, but they solve different problems.
        </p>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tighter">The Head-to-Head</h3>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">🌊</span> HYSA
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> <strong>Full Liquidity:</strong> Withdraw anytime (usually 6 times/month).</li>
              <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> <strong>Variable Rate:</strong> Moves with the Fed. Rates rise as the economy shifts.</li>
              <li className="flex gap-3"><span className="text-rose-500 font-bold">✕</span> <strong>No Protection:</strong> If the Fed cuts rates, your APY drops instantly.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-amber-600 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center">🔒</span> CD
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> <strong>Fixed Rate:</strong> Lock in today's high yield for 6-24 months.</li>
              <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> <strong>Predictability:</strong> You know exactly what you'll have at maturity.</li>
              <li className="flex gap-3"><span className="text-rose-500 font-bold">✕</span> <strong>Zero Liquidity:</strong> Early withdrawal penalties usually cost 3-6 months of interest.</li>
            </ul>
          </div>
        </div>

        <div className="p-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-[3rem] mb-16">
           <h4 className="text-2xl font-bold text-slate-950 dark:text-white mb-6 text-center">When to Use Which</h4>
           <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border dark:border-white/5">
                 <p className="font-black text-[10px] text-blue-500 uppercase mb-2">HYSA Scenarios</p>
                 <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Emergency Fund</p>
                 <p className="text-xs text-slate-500">Must be accessible within 24 hours.</p>
                 <p className="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-1">Monthly Over-flow</p>
                 <p className="text-xs text-slate-500">Excess cash waiting to be invested.</p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border dark:border-white/5">
                 <p className="font-black text-[10px] text-amber-500 uppercase mb-2">CD Scenarios</p>
                 <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">House Down Payment</p>
                 <p className="text-xs text-slate-500">Money you need exactly in 12 months.</p>
                 <p className="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-1">Lump Sum Windfall</p>
                 <p className="text-xs text-slate-500">Protecting a bonus while rates are at a peak.</p>
              </div>
           </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Pro Tactic: The CD Ladder</h4>
          <p className="text-blue-50 text-xl leading-relaxed mb-0">
            Open four CDs with 3, 6, 9, and 12-month terms. This way, a portion of your cash becomes liquid every 90 days, while you capture the higher long-term yields. It is the ultimate hybrid strategy for 2026.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default HYSAplusCD;
