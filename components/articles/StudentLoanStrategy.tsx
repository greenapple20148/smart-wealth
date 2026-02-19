
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const StudentLoanStrategy: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Student Loan Strategy: Forgiveness vs. Payoff" 
      category="Savings" 
      icon="🎓" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          With federal student loan interest active and new income-driven plans available in 2026, the strategy for handling student debt has fundamentally changed. Is it better to pay it off fast or aim for forgiveness?
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 rounded-3xl">
             <h4 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">The Forgiveness Path</h4>
             <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Focus on <strong>PSLF</strong> (Public Service Loan Forgiveness) or the <strong>SAVE Plan</strong>. Ideal if your debt is high relative to your income.</p>
             <ul className="text-xs text-slate-500 space-y-2 list-disc pl-5">
               <li>Requires working for govt/non-profits for 10 years.</li>
               <li>Zero interest accrual if monthly payment is met.</li>
               <li>Tax-free forgiveness for PSLF participants.</li>
             </ul>
          </div>
          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/20 rounded-3xl">
             <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">The Aggressive Payoff</h4>
             <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Attack the principal to kill the interest. Ideal if your interest rate is greater than 6% or you want the psychological freedom.</p>
             <ul className="text-xs text-slate-500 space-y-2 list-disc pl-5">
               <li>Eliminates monthly payment obligations sooner.</li>
               <li>Guaranteed "return" equal to your interest rate.</li>
               <li>Requires significant discretionary income.</li>
             </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">The "Opportunity Cost" Calculation</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          If your student loan interest rate is 4% and the S&P 500 averages 10%, every dollar you put toward the loan "costs" you 6% in potential wealth <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>. 
        </p>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16">
          <h4 className="text-2xl font-bold text-amber-400 mb-6 mt-0">The 2026 Checklist</h4>
          <div className="space-y-4">
             <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-blue-400">01</span>
                <p className="text-sm m-0">Confirm your loan type. Private loans rarely qualify for federal forgiveness.</p>
             </div>
             <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-blue-400">02</span>
                <p className="text-sm m-0">Enroll in the <strong>SAVE plan</strong> to stop interest from ballooning.</p>
             </div>
             <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-blue-400">03</span>
                <p className="text-sm m-0">Max out employer matches and IRAs <strong>before</strong> making extra debt payments.</p>
             </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Don't let debt paralyze your investing. Pay the minimums on federal loans, capture your employer's 401(k) match, and then decide. If interest is <span className="font-black underline">above 6%</span>, pay it off. If it's <span className="font-black underline">below 4%</span>, invest the difference.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default StudentLoanStrategy;
