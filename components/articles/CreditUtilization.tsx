import React from 'react';
import ArticleLayout from '../ArticleLayout';

const CreditUtilization: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Credit Utilization: What Percentage Is Best?" 
      category="Credit Logic" 
      icon="📉" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Utilization is the most volatile factor in your credit score. Master it, and you can manipulate your score by 30-50 points in a single billing cycle.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">UTIL</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-tighter">The 10% Protocol</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            While the "30% rule" is common, elite scores (800+) require utilization between <strong>1% and 9%</strong>. This represents the "Low-Risk Corridor" where the FICO model awards maximum points <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-cyan-500 decoration-4">The Impact Matrix</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { pct: "1-9%", label: "Optimal", color: "text-emerald-500", desc: "Maximum score alpha." },
            { pct: "10-29%", label: "Safe", color: "text-blue-500", desc: "Standard build velocity." },
            { pct: "30-49%", label: "Warning", color: "text-amber-500", desc: "Growth begins to stall." },
            { pct: "50%+", label: "Failure", color: "text-rose-500", desc: "Severe score draw-down." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] text-center group hover:border-blue-500/30 transition-all">
              <p className={`text-3xl font-black mb-2 ${item.color}`}>{item.pct}</p>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px]">{item.label}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Cycle-Hacking" Strategy</h3>
        <div className="p-10 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[3rem] mb-16 shadow-sm group">
          <h4 className="text-xl font-bold text-blue-600 mb-4 mt-0 uppercase tracking-widest text-xs">The Statement Date Loop</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Lenders report your balance on the <strong>Statement Closing Date</strong>, not the due date. Pay your balance 3 days BEFORE the statement closes to report a 1% utilization, even if you spent thousands that month <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Utilization has no memory. If you max your cards today, your score drops. If you pay them to 1% tomorrow, your score recovers fully next month. Target the <strong>single-digit corridor</strong> to maintain your maximum financial leverage.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CreditUtilization;