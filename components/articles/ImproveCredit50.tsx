import React from 'react';
import ArticleLayout from '../ArticleLayout';

const ImproveCredit50: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Improve Your Credit Score by 50 Points" 
      category="Credit" 
      icon="🚀" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          A 50-point boost is the "Critical Delta" that often moves you from subprime to prime lending status. Here is the high-velocity sequence to execute.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">ROI</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-blue-400 uppercase tracking-tighter">Why 50 Points?</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            For most beginners, crossing from 620 to 670—or 690 to 740—unlocks better mortgage rates and premium rewards nodes. This single jump can save you <strong>$100,000+</strong> in lifetime interest on a home <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Tactical Lever Matrix</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Utilization Card */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg className="w-12 h-12 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
            </div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Lever 01: Utilization (30%)</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">The 10% Target</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Keeping usage under 30% is a baseline. For a 50-point surge, you must target <strong>1% to 10%</strong>. This signals maximum stability to the FICO model <span className="text-[10px] font-black opacity-50 uppercase"> </span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">High Velocity Impact</span>
            </div>
          </div>

          {/* Payment History Card */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
            </div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Lever 02: Consistency (35%)</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">The Autopay Node</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              A single 30-day late payment can delete 100 points instantly <span className="text-[10px] font-black opacity-50 uppercase">(Gainify)</span>. 50 points of growth comes from <strong>zero-failure</strong> payment cycles. 
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">Foundational Requirement</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Quick-Win" Protocol</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {[
            { title: "Report Audit", icon: "🔍", desc: "1 in 5 reports have errors. Dispute accuracies at AnnualCreditReport.com." },
            { label: "Tactical Piggybacking", icon: "🤝", desc: "Become an Authorized User on a family member's oldest card node." },
            { label: "Cycle Management", icon: "📅", desc: "Pay balances 3 days BEFORE the statement closing date." },
            { label: "Node Preservation", icon: "🔒", desc: "Never close your oldest accounts—length of history is 15%." }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center">
              <span className="text-3xl shrink-0">{s.icon}</span>
              <div>
                <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[10px]">{s.label || s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-slate-900 text-white rounded-[3rem] mb-16 border border-white/5">
          <h4 className="text-xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-widest text-center">Timeline Logic</h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-0 text-center">
            A 50-point surge typically requires <strong>30 to 90 days</strong> of perfectly optimized behavior <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The Penny Hoarder)</span>. The model updates every billing cycle—stay aggressive and consistent.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tight">The Integrity Filters: 🛑 STOP</h3>
        <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[2.5rem] p-10 mb-16">
          <ul className="space-y-6 m-0 list-none pl-0">
            <li className="flex items-start gap-4">
              <span className="text-rose-500 font-black text-xl">✕</span>
              <span className="text-base text-slate-700 dark:text-slate-300 font-medium"><strong>Node Churning:</strong> Do not apply for any new credit while in a build-phase.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-rose-500 font-black text-xl">✕</span>
              <span className="text-base text-slate-700 dark:text-slate-300 font-medium"><strong>Maxing Limits:</strong> Even if you pay in full, high mid-month balances can be reported.</span>
            </li>
          </ul>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Your score is a data-driven reputation. Optimization isn't about luck—it's about <strong>mathematical compliance</strong>. Reduce utilization to &lt;10%, kill all report errors, and never miss a node. Execute this sequence for 3 months, and the 50-point delta is yours.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default ImproveCredit50;