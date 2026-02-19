import React from 'react';
import ArticleLayout from '../ArticleLayout';

const RefinanceMortgage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Refinance Your Mortgage" 
      category="Strategy" 
      icon="🔄" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Refinancing your mortgage can save you thousands of dollars or help you access your home's equity—but only if you approach it strategically. Here's your complete guide to the refinancing process in 2026.
        </p>

        <div className="p-8 bg-blue-600 text-white rounded-[2.5rem] mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">?</div>
          <h3 className="text-2xl font-bold mb-4 mt-0 text-white">What Is Mortgage Refinancing?</h3>
          <p className="text-blue-50 text-lg leading-relaxed mb-0">
            Home loan refinancing is the process of replacing your current mortgage with a new one. The new loan pays off the existing mortgage and establishes new terms such as interest rate, loan length, and monthly payment <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(NerdWallet, NAGA)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Why People Refinance</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Lower Rate", icon: "📉", desc: "Reduce your monthly payment by securing a better interest rate." },
            { title: "Shorten Term", icon: "⏱️", desc: "Refinance from 30 to 15 years to pay off your home much faster." },
            { title: "Kill PMI", icon: "🛡️", desc: "Eliminate Private Mortgage Insurance once you hit 20% equity." },
            { title: "Stability", icon: "⚖️", desc: "Switch from an Adjustable-Rate (ARM) to a Fixed-Rate mortgage." },
            { title: "Access Equity", icon: "💰", desc: "Get cash for renovations or debt consolidation via cash-out." }
          ].map((reason, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
              <div className="text-2xl mb-4">{reason.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{reason.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 m-0 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 uppercase tracking-tight">Types of Refinancing</h3>
        <div className="space-y-6 mb-20">
          <div className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] group hover:border-blue-500/30 transition-all">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Rate-and-Term Refinance</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Changes your interest rate, loan term, or both without taking cash out. This is the most straightforward option focused solely on improving your loan terms.
            </p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] group hover:border-emerald-500/30 transition-all">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Cash-Out Refinance</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Allows you to borrow more than you owe and receive the difference in cash. Homeowners often use this for home improvements or debt consolidation <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border dark:border-white/5">
              <p className="text-xs text-slate-500 m-0 italic">Example: Home worth $400k, you owe $250k. Refinance for $300k, pay off original, and receive <strong>$50,000 cash</strong> (minus costs).</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem]">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Streamline Refinance</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Accelerates the process for FHA, VA, and USDA loans by eliminating credit checks or appraisals <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem]">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">No-Closing-Cost Refinance</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Rolling costs into the loan instead of paying upfront. This results in a higher rate and monthly payment <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tighter">The 8-Step Refinance Protocol</h3>
        <div className="space-y-8 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-white/10 before:to-transparent">
          {[
            { step: "01", title: "Define Your Goals", desc: "Decide if you want a lower rate, cash back, or a shorter term <span class='text-[10px] font-black opacity-50 uppercase'>(NAGA)</span>." },
            { step: "02", title: "Credit Audit", desc: "Check reports and clean up errors. Higher scores yield much better rates <span class='text-[10px] font-black opacity-50 uppercase'>(NerdWallet)</span>." },
            { step: "03", title: "Shop 3+ Lenders", desc: "Don't just stick with your current bank. Even a 0.25% difference saves thousands <span class='text-[10px] font-black opacity-50 uppercase'>(NerdWallet)</span>." },
            { step: "04", title: "Get Pre-Approved", desc: "Submit pay stubs, W-2s, and mortgage info for an eligibility estimate <span class='text-[10px] font-black opacity-50 uppercase'>(NAGA)</span>." },
            { step: "05", title: "Full Application", desc: "Provide deep documentation for all income sources, assets, and debts." },
            { step: "06", title: "The Appraisal", desc: "Lenders verify the home value. Appraisal waivers are only possible for homes under $1M <span class='text-[10px] font-black opacity-50 uppercase'>(NAGA)</span>." },
            { step: "07", title: "Underwriting", desc: "The lender verifies everything. This is the final validation stage before approval <span class='text-[10px] font-black opacity-50 uppercase'>(NAGA)</span>." },
            { step: "08", title: "Closing Day", desc: "Sign the Closing Disclosure. Your new loan officially replaces the old one." }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-800 bg-slate-900 text-white font-black text-xs shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">{item.step}</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm group-hover:border-blue-500/30 transition-colors">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 m-0 uppercase tracking-widest text-[10px] text-blue-500">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest underline decoration-cyan-500 decoration-4">The Mathematical Break-Even</h3>
        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16 relative overflow-hidden border border-white/10">
          <div className="absolute right-0 top-0 p-8 opacity-10 pointer-events-none text-8xl">📊</div>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Refinancing isn't free. Typical costs are <strong>2% to 5%</strong> of the loan amount. On a $300k loan, that's <strong>$6,000 to $15,000</strong>.
          </p>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-4">The Formula</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xl font-bold text-white">
              <div className="px-6 py-3 bg-white/10 border border-white/10 rounded-xl">Total Closing Costs</div>
              <div className="text-2xl text-slate-600">÷</div>
              <div className="px-6 py-3 bg-white/10 border border-white/10 rounded-xl">Monthly Savings</div>
              <div className="text-2xl text-slate-600">=</div>
              <div className="px-6 py-3 bg-blue-600 text-white rounded-xl">Months to Recoup</div>
            </div>
            <p className="mt-8 text-sm text-slate-400 italic m-0">If you save $200/mo but costs are $6,000, your break-even is 30 months (2.5 years).</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">When to Pull the Trigger</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[2.5rem] border dark:border-blue-500/20">
            <h4 className="text-blue-900 dark:text-blue-400 font-bold mb-4 mt-0">PMI Elimination</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
              PMI costs 0.5% to 1.0% annually. On a $300k mortgage, that's <strong>$125-$250/mo</strong>. If your home appreciated and you hit 20% equity, refinance to delete this cost immediately <span className="text-[10px] font-black opacity-50 uppercase">(The College Investor)</span>.
            </p>
          </div>
          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2.5rem] border dark:border-emerald-500/20">
            <h4 className="text-emerald-900 dark:text-emerald-400 font-bold mb-4 mt-0">The 0.75% Rule</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
              Old rules required a 2% drop. In 2026, with efficient loan processing, a <strong>0.75% to 1%</strong> rate drop is often enough to justify the switch if you plan to stay for 3+ years.
            </p>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Refinancing is about strategy, not just rates <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(NerdWallet)</span>. Focus on your <strong>break-even point</strong> and total loan cost, not just the monthly payment. With rates moderating in 2026, the numbers may finally work in your favor.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default RefinanceMortgage;