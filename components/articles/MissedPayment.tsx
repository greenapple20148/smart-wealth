import React from 'react';
import ArticleLayout from '../ArticleLayout';

const MissedPayment: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="What Happens If You Miss a Credit Card Payment?" 
      category="Credit" 
      icon="⚠️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Missing a credit card payment triggers a cascade of automated consequences that escalate in severity. In 2026, the speed of reporting is higher than ever—here is the definitive timeline of the fallout.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">!</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-rose-500 uppercase tracking-tighter">The 30-Day Buffer</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            Issuers typically won't report your account as "delinquent" to credit bureaus until it is at least <strong>30 days past due</strong> <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>. If you catch the error in the first week, you can usually save your score entirely.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-12 text-center uppercase tracking-widest underline decoration-rose-500 decoration-4">The Failure Timeline</h3>
        
        <div className="space-y-12 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-white/10 before:to-transparent">
          {/* Day 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-white font-black text-xs shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border border-white/10">01</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm">
              <h4 className="font-black text-slate-900 dark:text-white mb-2 m-0 uppercase tracking-widest text-[10px] text-blue-500">Immediate Impact</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed font-medium">Late fees kick in (up to $41). Interest begins accruing on your entire balance, including the fee <span className="text-[10px] font-black opacity-50 uppercase">(The College Investor)</span>.</p>
            </div>
          </div>

          {/* Day 30 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-600 text-white font-black text-xs shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border border-white/20">30</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[2.5rem] shadow-sm">
              <h4 className="font-black text-rose-900 dark:text-rose-400 mb-2 m-0 uppercase tracking-widest text-[10px]">The Critical Drop</h4>
              <p className="text-sm text-rose-800 dark:text-slate-300 m-0 leading-relaxed font-medium">Reported to FICO. Scores can plunge <strong>100 points</strong> instantly <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>. This mark stays on your report for 7 years.</p>
            </div>
          </div>

          {/* Day 60 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-950 text-white font-black text-xs shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border border-white/10">60</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm">
              <h4 className="font-black text-slate-900 dark:text-white mb-2 m-0 uppercase tracking-widest text-[10px] text-amber-500">Penalty Protocol</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed font-medium">Penalty APR (~29.99%) may be applied to your balance permanently. Current reward points may be forfeited <span className="text-[10px] font-black opacity-50 uppercase"> </span>.</p>
            </div>
          </div>

          {/* Day 180 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-black text-white font-black text-xs shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border border-white/20">180</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-slate-950 text-white rounded-[2.5rem] shadow-2xl border border-white/10">
              <h4 className="font-black text-cyan-400 mb-2 m-0 uppercase tracking-widest text-[10px]">Total Node Failure</h4>
              <p className="text-sm text-slate-300 m-0 leading-relaxed font-medium">Charge-off status. The account is sold to debt collectors. Legal action and wage garnishment become systemic risks <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Mintos)</span>.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Tactical Recovery Sequence</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "⚡", title: "Immediate Payment", desc: "Pay the minimum now to stop the clock." },
            { icon: "📞", title: "Human Override", desc: "Call the issuer. Ask for a first-time courtesy waiver." },
            { icon: "🤖", title: "Lock Autopay", desc: "Enable 'Minimum Payment' automation immediately." },
            { icon: "🛡️", title: "Score Shield", desc: "Use a credit monitor to verify the reporting date." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] text-center group hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px]">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-16 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">0%</div>
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 uppercase tracking-widest text-xs">The 0% APR Risk</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            If you have a promotional 0% APR offer, a single late payment can <strong>terminate the promotion</strong> instantly, triggering back-interest on your entire balance <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            One missed payment can destroy 18 months of building progress. Speed is your only weapon—the 30-day buffer is your last line of defense. Build automated redundancy into your payment stack today to ensure your credit node remains operational.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default MissedPayment;