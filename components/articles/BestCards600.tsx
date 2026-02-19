import React from 'react';
import ArticleLayout from '../ArticleLayout';

const BestCards600: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Best Credit Cards for a 600 Credit Score" 
      category="Credit" 
      icon="📊" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          A credit score of 600 puts you in the "Fair" category. In 2026, this is a transitional node—you're too high for pure subprime products but not yet ready for elite rewards. Here is your tactical card selection for this range.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">600</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-amber-500 uppercase tracking-tighter">The "Fair" Credit Paradox</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            With a 600 score, you are roughly 70 points away from "Good" credit. Your primary objective isn't rewards—it's <strong>leveraging high-reporting nodes</strong> to bridge that gap as quickly as possible <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-amber-500 decoration-4">The Tier 01 Selection</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Discover it Secured */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏹</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Top Recommendation</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Discover it® Secured</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The gold standard for the 600-range. Earns 2% cash back at gas stations and restaurants. Automatic reviews starting at <strong>7 months</strong> to graduate to an unsecured line <span className="text-[10px] font-black opacity-50 uppercase"> </span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">High Probability Approval</span>
            </div>
          </div>

          {/* Capital One Platinum Secured */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏦</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Build Velocity</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Capital One Platinum</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Designed specifically for "Fair" credit. No annual fee and no security deposit if you qualify for the unsecured version <span className="text-[10px] font-black opacity-50 uppercase"> </span>. Great for simple, consistent reporting.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">No Annual Fee</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Micro-Target" Protocol</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {[
            { title: "Mission Lane Visa", icon: "🚀", desc: "No deposit needed for many 600-score applicants. Transparent credit limit increases." },
            { title: "Petal® 2 Visa®", icon: "🌱", desc: "Uses 'Cash Score' tech to look at your bank history, not just your FICO nodes." },
            { title: "Self Credit Builder", icon: "🔒", desc: "Not a card, but a loan that builds history and then gives you a card node later." },
            { title: "Chime® Credit Builder", icon: "📱", desc: "No credit check, no interest. Uses your own cash to build safely." }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center group hover:border-blue-500/20 transition-all">
              <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{s.icon}</span>
              <div>
                <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[10px]">{s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-16 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">!</div>
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 uppercase tracking-widest text-xs">The Interest Rate Warning</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Cards in the 600-score range typically carry APRs between <strong>25% and 30%</strong>. Carrying a balance on these cards is a high-friction behavior that will stall your wealth building. <strong>Always pay in full</strong> <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter">(The Penny Hoarder)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tight">The Integrity Filters: 🛑 STOP</h3>
        <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[2.5rem] p-10 mb-16">
          <ul className="space-y-6 m-0 list-none pl-0">
            <li className="flex items-start gap-4">
              <span className="text-rose-500 font-black text-xl">✕</span>
              <span className="text-base text-slate-700 dark:text-slate-300 font-medium"><strong>Fee Harvesting Cards:</strong> Avoid unsecured cards that charge "Monthly Maintenance Fees" or high upfront setup fees.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-rose-500 font-black text-xl">✕</span>
              <span className="text-base text-slate-700 dark:text-slate-300 font-medium"><strong>Shotgun Apps:</strong> Applying for 3+ cards at once with a 600 score will trigger rejections and drop you into the 500s.</span>
            </li>
          </ul>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            A 600 score is a starting point, not a destination. Use a <strong>secured card</strong> like Discover or a <strong>specialized builder node</strong> like Mission Lane. Maintain perfect payment history for 6 months, and you'll find yourself qualifying for the premium 700+ rewards cards by year-end.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default BestCards600;