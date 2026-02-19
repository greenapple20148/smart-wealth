import React from 'react';
import ArticleLayout from '../ArticleLayout';

const Retirement401kVsIRA: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="401(k) vs IRA: Which Should You Choose First?" 
      category="Retirement" 
      icon="📅" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          The 401(k) and IRA are the two pillars of U.S. retirement strategy. While they share the goal of long-term growth, the prioritization of where you put your next dollar can change your terminal net worth by hundreds of thousands.
        </p>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-10 text-center uppercase tracking-tighter underline decoration-cyan-500 decoration-4">The Wealth Cascade</h3>
        
        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[4rem] mb-20 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none text-9xl font-black italic">RANK</div>
          <div className="space-y-12 relative z-10">
            {[
              { step: "01", title: "Capture the Match", color: "text-blue-400", desc: "Enroll in your company's 401(k) and contribute exactly enough to get the full employer match. This is an immediate 100% ROI <span class='text-[10px] font-black text-slate-500 uppercase tracking-tighter'>(NerdWallet)</span>." },
              { step: "02", title: "The IRA Pivot", color: "text-emerald-400", desc: "Max out your Roth or Traditional IRA. IRAs typically offer <strong>lower fees</strong> and <strong>better investment selection</strong> than restrictive company plans <span class='text-[10px] font-black text-slate-500 uppercase tracking-tighter'> </span>." },
              { step: "03", title: "Return to the 401(k)", color: "text-amber-400", desc: "If you still have capital to deploy, go back to your 401(k) and contribute toward the annual limit for additional tax-deferred growth." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 group-hover:bg-blue-600 transition-colors shadow-lg">{item.step}</div>
                <div>
                  <p className={`font-black text-xl ${item.color} mb-2 uppercase tracking-tight`}>{item.title}</p>
                  <p className="text-slate-300 text-lg leading-relaxed m-0" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">2026 Protocol Parameters</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-10 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[3rem] shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">🏢</div>
            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-widest text-xs">401(k) High-Velocity</h4>
            <ul className="space-y-5 text-sm text-slate-600 dark:text-slate-400 list-none pl-0 m-0">
              <li className="flex justify-between border-b dark:border-white/5 pb-2">
                <span className="font-bold">Annual Limit</span>
                <span className="font-black text-slate-900 dark:text-white">$24,500</span>
              </li>
              <li className="flex justify-between border-b dark:border-white/5 pb-2">
                <span className="font-bold">50+ Catch-up</span>
                <span className="font-black text-slate-900 dark:text-white">$8,000</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold uppercase text-[10px] text-slate-400">Main Edge</span>
                <span className="text-slate-700 dark:text-slate-300">Employer Matching & Automatic Payroll Sync <span className="text-[10px] font-black opacity-50"> </span>.</span>
              </li>
            </ul>
          </div>

          <div className="p-10 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[3rem] shadow-sm relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">👤</div>
            <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 uppercase tracking-widest text-xs">IRA Precision</h4>
            <ul className="space-y-5 text-sm text-slate-600 dark:text-slate-400 list-none pl-0 m-0">
              <li className="flex justify-between border-b dark:border-white/5 pb-2">
                <span className="font-bold">Annual Limit</span>
                <span className="font-black text-slate-900 dark:text-white">$7,500</span>
              </li>
              <li className="flex justify-between border-b dark:border-white/5 pb-2">
                <span className="font-bold">50+ Catch-up</span>
                <span className="font-black text-slate-900 dark:text-white">$1,100</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold uppercase text-[10px] text-slate-400">Main Edge</span>
                <span className="text-slate-700 dark:text-slate-300">Total Investment Freedom & Lower Expense Ratios <span className="text-[10px] font-black opacity-50">(NerdWallet)</span>.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm">
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px] text-blue-500">Node Alpha: 401(k) First</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Employer offers any level of match.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>You need the highest possible tax deduction today.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>You want to protect assets from creditors (401ks have higher legal protection).</span>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm">
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px] text-emerald-500">Node Alpha: IRA First</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Your employer doesn't offer a match.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Your 401(k) choices have high fees (&gt;0.50%).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>You want to use a Roth strategy for tax-free retirement income <span className="text-[10px] font-black opacity-50 uppercase">(Change)</span>.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 p-8 opacity-20 pointer-events-none text-9xl">⚖️</div>
          <h4 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 uppercase tracking-widest text-xs">The RMD Checkpoint</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Traditional 401(k)s and IRAs require distributions starting at <strong>age 73</strong>. Roth IRAs, however, have <strong>no mandatory withdrawals</strong> during your lifetime. This makes the Roth IRA the superior tool for multi-generational wealth transfer <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            The mathematical winner is clear: <strong>Match &gt; IRA &gt; 401(k) Balance</strong>. Capture the free money first, pivot to the low-fee freedom of an IRA, then use the high limits of the 401(k) to finish your year. Execute this sequence every year to maximize your multi-decade alpha.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default Retirement401kVsIRA;