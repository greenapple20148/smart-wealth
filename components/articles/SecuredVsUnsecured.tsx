import React from 'react';
import ArticleLayout from '../ArticleLayout';

const SecuredVsUnsecured: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Secured vs Unsecured Credit Cards Explained" 
      category="Building Credit" 
      icon="⚖️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Understanding the mechanism of collateral is the difference between a rejection and an approval. In 2026, secured cards are the most efficient "On-Ramp" for new borrowers.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">COLL</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-blue-400 uppercase tracking-tighter">The Collateral Logic</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            Secured cards require an upfront <strong>refundable deposit</strong> that acts as your credit limit. Unsecured cards rely strictly on your <strong>reputation node</strong> (credit history). Both build your score identically <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest underline decoration-blue-500 decoration-4">The Matrix Comparison</h3>
        <div className="overflow-x-auto mb-16 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/[0.02]">
                <th className="py-6 px-8 text-slate-400 uppercase text-[10px] font-black tracking-widest text-left">Property</th>
                <th className="py-6 px-8 text-blue-500 uppercase text-[10px] font-black tracking-widest text-center">Secured</th>
                <th className="py-6 px-8 text-emerald-500 uppercase text-[10px] font-black tracking-widest text-center">Unsecured</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-100 dark:border-white/5">
                <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Initial Deposit</td>
                <td className="py-6 px-8 text-center text-slate-600 dark:text-slate-400 font-bold">$200 - $5,000</td>
                <td className="py-6 px-8 text-center text-slate-600 dark:text-slate-400 font-bold">$0 (Reputation Only)</td>
              </tr>
              <tr className="bg-slate-50/50 dark:bg-white/[0.01]">
                <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Approval Odds</td>
                <td className="py-6 px-8 text-center text-emerald-500 font-black">95% (Guaranteed)</td>
                <td className="py-6 px-8 text-center text-slate-600 dark:text-slate-400 font-bold">Variable (Score 670+)</td>
              </tr>
              <tr>
                <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Rewards Rate</td>
                <td className="py-6 px-8 text-center text-slate-600 dark:text-slate-400 font-bold">1% - 2% (Rare)</td>
                <td className="py-6 px-8 text-center text-blue-500 font-black">2% - 5% (Standard)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tight">The Graduation Path</h3>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[3rem] shadow-sm">
            <h4 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
              Phase 01: The Secured Entry
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Deposit $200 at Discover or Capital One.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Execute 7 perfect payment cycles.</span>
              </li>
            </ul>
          </div>
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[3rem] shadow-sm">
            <h4 className="text-xl font-bold text-emerald-600 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
              Phase 02: The Unsecured Exit
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Issuer returns your $200 deposit automatically.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Card upgrades to premium rewards without a new application.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-12 bg-slate-900 text-white rounded-[4rem] text-center shadow-2xl mb-20 border border-white/10">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-slate-300 text-xl leading-relaxed mb-0">
            If your score is below 620, do not gamble on unsecured applications. A <strong>Secured Card</strong> is a high-velocity, low-friction tool that converts cash into reputation. Lock your entry today, and in 8 months, you'll be qualifying for the elite unsecured tier.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default SecuredVsUnsecured;