
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const CreditScoreDebug: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Credit Score Debug: Disputing the Errors" 
      category="Credit" 
      icon="📋" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Your credit report is not always accurate. In fact, 1 in 5 Americans have an error on at least one of their credit reports. "Debugging" your report is the fastest way to see a massive jump in your score.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">The Bug List: Common Errors</h3>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            { title: "Identity Mix-ups", desc: "Accounts belonging to someone with a similar name or SSN." },
            { title: "Inaccurate Status", desc: "Accounts marked as late that were paid on time." },
            { title: "Old Data", desc: "Negative marks that should have expired after 7 years." },
            { title: "Double Reporting", desc: "The same debt listed multiple times by different collectors." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-2xl flex gap-4">
              <span className="text-rose-500 font-bold">✕</span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 m-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">The Debugging Protocol (Dispute Step-by-Step)</h3>
        <div className="space-y-6 mb-16">
          {[
            { step: "01", title: "Download Your Reports", desc: "Go to AnnualCreditReport.com and grab reports from all three bureaus: Experian, Equifax, and TransUnion." },
            { step: "02", title: "Identify the Glitch", desc: "Highlight anything that doesn't match your records. Check the balance, open date, and payment history." },
            { step: "03", title: "File the Dispute", desc: "Use the online portal for each bureau. Upload evidence like bank statements or 'Letter of Satisfaction' from lenders." },
            { step: "04", title: "Wait 30 Days", desc: "Bureaus are legally required to investigate and respond within 30 days. If they can't verify the debt, it must be removed." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] items-center">
              <div className="text-3xl font-black text-cyan-500 shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 m-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-emerald-600 text-white rounded-[3.5rem] text-center shadow-2xl mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Result</h4>
          <p className="text-emerald-50 text-xl leading-relaxed mb-0">
            Removing a single "wrongly reported" late payment can boost your score by <strong>50 to 100 points</strong> in a single month. This is the highest ROI activity in personal finance.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CreditScoreDebug;
