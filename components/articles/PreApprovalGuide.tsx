import React from 'react';
import ArticleLayout from '../ArticleLayout';

const PreApprovalGuide: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Get Pre-Approved for a Mortgage" 
      category="Credit & Approval" 
      icon="✅" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Getting pre-approved for a mortgage is one of the most crucial steps in the homebuying process. It gives you a clear budget, strengthens your negotiating position, and shows sellers you're a serious buyer.
        </p>

        <div className="p-8 bg-blue-600 text-white rounded-[2.5rem] mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">?</div>
          <h3 className="text-2xl font-bold mb-4 mt-0 text-white">What Is Mortgage Pre-Approval?</h3>
          <p className="text-blue-50 text-lg leading-relaxed mb-0">
            A mortgage preapproval is a statement of how much a lender will let you borrow to buy a home. It's a tentative offer based on a hard credit inquiry and a review of your income, assets, and debts <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(NerdWallet, The Motley Fool)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Pre-Qualification vs. Pre-Approval</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] group">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Pre-Qualification</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              An estimate based on self-reported data. It takes minutes, doesn't affect your credit score, and helps define your starting price range <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY, Change)</span>.
            </p>
            <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
               <span className="w-2 h-2 rounded-full bg-slate-300"></span> Soft Credit Pull Only
            </div>
          </div>
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/20 rounded-[2.5rem] group ring-2 ring-blue-500/20">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">Pre-Approval</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              A verified statement valid for 90 days. Requires documentation and a hard credit pull. This is what sellers expect in a serious offer <span className="text-[10px] font-black text-blue-500 uppercase tracking-tighter">(The College Investor)</span>.
            </p>
            <div className="flex items-center gap-2 text-xs font-black text-blue-500 uppercase tracking-widest">
               <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Hard Credit Pull Required
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-8 uppercase tracking-tight">The Pre-Approval Protocol: Step-by-Step</h3>
        <div className="space-y-6 mb-20">
          {[
            { step: "01", title: "Credit Audit", desc: "Review all three bureaus (Equifax, Experian, TransUnion). Dispute errors immediately to protect your rate." },
            { step: "02", title: "Document Vault", desc: "Gather W-2s (2 yrs), bank statements (3 mos), pay stubs (30 days), and ID <span class='text-[10px] font-black opacity-50 uppercase'>(Mintos)</span>." },
            { step: "03", title: "Lender Recon", desc: "Shop 3+ lenders. Multiple inquiries within 2-4 weeks count as a single hit to your score <span class='text-[10px] font-black opacity-50 uppercase'>(The Penny Hoarder)</span>." },
            { step: "04", title: "The Application", desc: "Submit your financials. The hard pull assesses your capacity and utilization <span class='text-[10px] font-black opacity-50 uppercase'>(NerdWallet)</span>." },
            { step: "05", title: "Receive The Letter", desc: "If approved, you get a letter detailing your max loan, estimated rate, and expiration date." }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center gap-6 p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm hover:border-blue-500/30 transition-all">
              <div className="text-3xl font-black text-blue-600/20 dark:text-blue-400/20 select-none shrink-0">{item.step}</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 m-0 text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tighter">What Lenders Evaluate: The 4 C's</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Capacity", icon: "📈", desc: "Your ability to repay based on income and DTI ratio." },
            { title: "Capital", icon: "💰", desc: "Your savings, down payment, and financial reserves." },
            { title: "Collateral", icon: "🏠", desc: "The property value (determines loan-to-value ratio)." },
            { title: "Credit", icon: "📊", desc: "Score, history, and payment reliability patterns." }
          ].map((c, i) => (
            <div key={i} className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-white/5 text-center shadow-2xl">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h4 className="font-bold mb-2 uppercase tracking-widest text-blue-400">{c.title}</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed m-0 uppercase font-black">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-16 relative overflow-hidden">
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 flex items-center gap-3">
             <span>🛡️</span> Advanced Option: Verified Approval
          </h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed m-0">
            Some lenders offer "Verified Approval" which involves a full underwriter review of your income and assets before you even find a home. This often includes a <strong>"Lock and Shop"</strong> option, guaranteeing your rate for up to 60 days while you look <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter">(Change, NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">If You're Denied</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Ask Why</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Lenders are required to provide a reason for denial. If it's a report error, you can fix it and re-apply immediately <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Try Local</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Credit unions and smaller banks often have more flexible manual underwriting processes than large national lenders <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            A pre-approval is <strong>non-negotiable</strong> in today's market. It focuses your search, builds credibility with sellers, and allows you to shop rates without score damage. Just remember: pre-approval isn't a final guarantee. Maintain your financial status—no new debt, large purchases, or job changes—until you've officially closed on your new home.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default PreApprovalGuide;