import React from 'react';
import ArticleLayout from '../ArticleLayout';

const ZeroAPRCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Best 0% APR Credit Cards for Large Purchases" 
      category="Credit Cards" 
      icon="🛍️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          A 0% APR credit card is a high-leverage tool for managing major cash outflows. In 2026, these cards serve as interest-free bridge loans, provided you follow the automated payoff protocol.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">0%</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-tighter">The Bridge Loan Alpha</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            These cards give you a window—up to <strong>21 months</strong>—to pay off balances with zero interest friction. For large purchases like home nodes or medical spikes, this is the most efficient capital source available <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The College Investor)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-cyan-500 decoration-4">The Duration Specialists</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* U.S. Bank Shield */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🛡️</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Max Duration Lead</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">U.S. Bank Shield™ Visa®</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The longest interest-free runway in 2026. Offers <strong>21 months</strong> of 0% APR on both purchases and balance transfers <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">21 Month Runway</span>
            </div>
          </div>

          {/* Wells Fargo Reflect */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🪞</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Refined Value</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Wells Fargo Reflect®</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Matches the 21-month duration on purchases and transfers. Includes cell phone protection up to $600 as a standard perk <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">High Approval Node</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-tight">The "Hybrid" Rewards Nodes</h3>
        <div className="space-y-6 mb-16">
          <div className="p-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center group hover:border-blue-500 transition-all">
             <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform shrink-0">💎</div>
             <div>
                <h4 className="text-xl font-black text-blue-900 dark:text-white mb-2 uppercase m-0">Chase Freedom Unlimited®</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
                  The ultimate hybrid. <strong>15 months</strong> of 0% APR while earning 1.5% to 5% cash back. Includes a $200 bonus after moderate spend <span className="text-[10px] font-black text-blue-500 uppercase tracking-tighter"> </span>.
                </p>
             </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-tight">Strategic Payoff Matrix</h3>
        <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[3rem] p-10 mb-16">
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm">
                 <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Purchase: $5,000</p>
                 <p className="text-2xl font-black text-blue-600">$239/mo</p>
                 <p className="text-[10px] text-slate-500 uppercase font-bold">21-Month Payoff</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border-2 border-blue-500/20">
                 <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Purchase: $5,000</p>
                 <p className="text-2xl font-black text-cyan-500">$334/mo</p>
                 <p className="text-[10px] text-slate-500 uppercase font-bold">15-Month Payoff</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm">
                 <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Purchase: $10,000</p>
                 <p className="text-2xl font-black text-indigo-600">$476/mo</p>
                 <p className="text-[10px] text-slate-500 uppercase font-bold">21-Month Payoff</p>
              </div>
           </div>
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-16 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">!</div>
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 uppercase tracking-widest text-xs">The Expiration Trap</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            If a balance remains even one day past the intro period, interest kicks in at the standard variable rate (~18-28%). <strong>Set your final payoff date for 1 month early</strong> to ensure zero leakage <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter">(Change)</span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            For pure duration, anchor your purchase to the <strong>U.S. Bank Shield</strong>. If you want yield on your spend, the <strong>Chase Freedom Unlimited</strong> is the superior node. Automate your monthly installments and never let the issuer capture a single cent of interest.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default ZeroAPRCards;