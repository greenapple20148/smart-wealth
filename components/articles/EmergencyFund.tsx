import React from 'react';
import ArticleLayout from '../ArticleLayout';

const EmergencyFund: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Emergency Fund: How Much Do You Really Need?" 
      category="Budgeting" 
      icon="🛡️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          An emergency fund is the bedrock of financial survival. In 2026, volatility is the new normal—calculating your personal "safety node" is no longer optional.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-8 uppercase tracking-tight">The 3-6 Month Protocol</h3>
        <div className="bg-slate-950 text-white rounded-[3rem] p-10 sm:p-16 mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">SAFE</div>
          <div className="relative z-10">
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Lenders and financial planners recommend saving three to six months of expenses. This isn't a suggestion—it's a high-velocity barrier against high-interest debt traps <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group hover:border-blue-500/30 transition-all">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Tier 01: Baseline</p>
                <p className="text-4xl font-black tracking-tighter">$6,000</p>
                <p className="text-[10px] text-slate-400 mt-2 uppercase font-bold tracking-wider">3-Month Shield (Essentials Only)</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group hover:border-emerald-500/30 transition-all">
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">Tier 02: Fortified</p>
                <p className="text-4xl font-black tracking-tighter">$12,000</p>
                <p className="text-[10px] text-slate-400 mt-2 uppercase font-bold tracking-wider">6-Month Buffer (Full Lifestyle)</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">The Essentials Audit</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Ignore your gross income. Calculate based strictly on the capital required to keep your "Node" operational during a crisis <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(VENTENY)</span>.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Housing", desc: "Rent/Mortgage, Taxes, HOA", icon: "🏠" },
            { label: "Critical Utilities", desc: "Power, Water, Essential Comms", icon: "🔌" },
            { label: "Fuel/Transit", desc: "Transport for work/survival", icon: "🚗" },
            { label: "Baseline Nutrition", desc: "Grocery essentials only", icon: "🥗" },
            { label: "Insurance", desc: "Health, Auto, Life premiums", icon: "🏥" },
            { label: "Debt Minimums", desc: "Protect your score from default", icon: "📝" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-2xl group hover:border-blue-500/20 transition-all">
              <span className="text-2xl block mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
              <p className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 m-0 leading-relaxed font-bold uppercase">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Risk Allocation Model</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 rounded-[2.5rem]">
            <h4 className="text-blue-900 dark:text-blue-400 font-black mb-6 mt-0 flex items-center gap-3 uppercase tracking-tighter text-xl">
              <span>📉</span> Low Velocity Risk
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">3 Months is acceptable if:</p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-3 list-none pl-0 font-bold uppercase tracking-wide">
              <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Stable Government/W2 Job</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Single, no dependents</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Robust Insurance Node</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Liquid Portfolio &gt; 1 year</li>
            </ul>
          </div>
          <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20 rounded-[2.5rem]">
            <h4 className="text-amber-900 dark:text-amber-400 font-black mb-6 mt-0 flex items-center gap-3 uppercase tracking-tighter text-xl">
              <span>📈</span> High Velocity Risk
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">6-12 Months is required if:</p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-3 list-none pl-0 font-bold uppercase tracking-wide">
              <li className="flex items-center gap-2"><span className="text-amber-500">!</span> Self-Employed / 1099 Status</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">!</span> Variable Commission Income</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">!</span> Multiple Dependents</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">!</span> High-Maintenance Real Estate</li>
            </ul>
          </div>
        </div>

        <div className="p-10 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[3rem] mb-16 relative overflow-hidden group">
          <h4 className="text-rose-900 dark:text-rose-400 font-black mb-4 mt-0 text-xl flex items-center gap-3 uppercase tracking-tight">
            <span>⚠️</span> The sub-$1,000 Crisis
          </h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Nearly <strong>37% of U.S. adults</strong> could not cover a surprise $400 expense with cash <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter">(The College Investor)</span>. If you're at zero, your first objective is a <strong>$1,000 Fast-Fund</strong>. This deletes 80% of minor daily stressors instantly.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Storage Nodes</h3>
        <div className="space-y-4 mb-20">
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl flex gap-8 items-center group hover:border-blue-500/30 transition-all">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shrink-0">HYSA</div>
            <div>
              <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-xs">High-Yield Savings (Priority)</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0 leading-relaxed">Best for 2026. Stays separate from checking. Target <strong>4.5%+ APY</strong> with FDIC insurance <span className="text-[10px] font-black opacity-50 uppercase">(Mintos)</span>.</p>
            </div>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl flex gap-8 items-center group hover:border-slate-500/30 transition-all opacity-60 grayscale">
            <div className="w-16 h-16 bg-slate-200 dark:bg-zinc-800 text-slate-400 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">CD</div>
            <div>
              <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-xs">Certificates of Deposit (Not Recommended)</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0 leading-relaxed">Penalties for early withdrawal destroy the point of "emergency" access. Avoid locking up these specific funds.</p>
            </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            An emergency fund is your <strong>Financial Insurance Policy</strong>. It converts "crises" into "inconveniences." Start your automation sequence today—even $50 a week builds the barrier you'll need when the system eventually shifts.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default EmergencyFund;