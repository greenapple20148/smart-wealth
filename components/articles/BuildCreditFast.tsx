import React from 'react';
import ArticleLayout from '../ArticleLayout';

const BuildCreditFast: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Best Credit Cards for Building Credit Fast" 
      category="Building Credit" 
      icon="⚡" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Accelerating your credit score requires accounts that report with high frequency and precision. In 2026, building credit is a data-optimization exercise.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">FAST</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-emerald-400 uppercase tracking-tighter">The Velocity Principle</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            To build fast, you need a card that reports to all three bureaus every 30 days and offers an <strong>automatic graduation path</strong>. This ensures your "Secured" collateral converts to "Unsecured" reputation at maximum speed <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-emerald-500 decoration-4">The Tier 01 Speed Nodes</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Discover it Secured */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏹</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">High Frequency reporting</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Discover it® Secured</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The #1 recommendation for speed. Automatic reviews start at <strong>7 months</strong>. You earn 2% back while the score builds—unheard of in this tier <span className="text-[10px] font-black opacity-50 uppercase">(Mintos)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">Auto-Graduation</span>
            </div>
          </div>

          {/* Capital One Platinum */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏦</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Frictionless Path</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Capital One Platinum</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Zero security deposit for many fair-credit applicants. Offers a higher credit line automatically after 6 on-time payments, instantly dropping utilization <span className="text-[10px] font-black opacity-50 uppercase">(Gainify)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">No Deposit Node</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Score Shield" Checklist</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "📉", title: "1-9% Util", desc: "Keep balance under 10% of limit at all times." },
            { icon: "🤖", title: "Auto-Pay", desc: "One late payment deletes 12 months of gain." },
            { icon: "🔒", title: "Hold Limit", desc: "Never close your first builder card." },
            { icon: "🔍", title: "Weekly Sync", desc: "Check score weekly to spot data errors." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] text-center group hover:border-emerald-500/30 transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px]">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-emerald-600 text-white rounded-[4rem] text-center shadow-2xl shadow-emerald-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-emerald-100 text-xl leading-relaxed mb-0">
            Speed is the byproduct of <strong>perfect compliance</strong>. Anchor your score with a <strong>Discover it® Secured</strong> card, automate a $20 recurring payment, and pay it in full monthly. Within 7 months, your collateral returns and your score enters the prime tier.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default BuildCreditFast;