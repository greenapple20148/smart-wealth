
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const MortgageBasics: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="What Is a Mortgage and How Does It Work?" 
      category="Basics" 
      icon="🏠" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          A mortgage is the financial tool that makes homeownership accessible. Understanding the mechanics of PITI and amortization is essential before you enter the 2026 housing market.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The Core Concept</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          A mortgage is a loan used to purchase real estate where the property itself acts as collateral. If the borrower fails to make payments, the lender can legally take possession through foreclosure <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(NerdWallet, Change)</span>.
        </p>

        <div className="bg-slate-950 text-white rounded-[3rem] p-10 sm:p-16 mb-16 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">$</div>
          <h3 className="text-3xl font-black text-cyan-400 mb-8 mt-0 uppercase tracking-widest">The "PITI" Architecture</h3>
          <p className="text-slate-300 mb-10 leading-relaxed">Most mortgage payments consist of four critical components:</p>
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {[
              { label: "Principal", color: "text-blue-400", desc: "The original amount borrowed. Each payment chips away at this balance." },
              { label: "Interest", color: "text-emerald-400", desc: "The cost of borrowing the money—the lender's profit margin." },
              { label: "Property Taxes", color: "text-amber-400", desc: "Held in an <strong>escrow account</strong> and paid on your behalf annually <span class='text-[10px] font-black opacity-50 uppercase'>(The College Investor)</span>." },
              { label: "Insurance", color: "text-violet-400", desc: "Protects the asset. Includes homeowners insurance and potentially PMI." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:border-white/30 transition-colors">
                <p className={`${item.color} font-black text-xs uppercase mb-2 tracking-widest`}>{item.label}</p>
                <p className="text-sm text-slate-300 m-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">Understanding Amortization</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Amortization is the schedule of your loan payoff. In early years, interest dominates your payment. As the balance drops, more of your payment hits the principal <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(Gainify, NerdWallet)</span>.
        </p>

        <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl mb-16 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px] text-blue-500">Amortization Logic Example</h4>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border dark:border-white/5">
              <p className="text-rose-500 font-black text-[10px] uppercase mb-2 tracking-widest">Month 1 (Interest Heavy)</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">$1,850 <span className="text-sm font-medium text-slate-400">Interest</span></p>
              <p className="text-lg font-bold text-slate-300 dark:text-slate-600">$150 <span className="text-xs font-medium">Principal</span></p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border dark:border-white/5">
              <p className="text-emerald-500 font-black text-[10px] uppercase mb-2 tracking-widest">Year 20 (Principal Heavy)</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">$1,200 <span className="text-sm font-medium text-slate-400">Principal</span></p>
              <p className="text-lg font-bold text-slate-300 dark:text-slate-600">$800 <span className="text-xs font-medium">Interest</span></p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The 7-Step Sequence</h3>
        <div className="flex flex-wrap gap-3 mb-20">
          {["Preapproval", "House Hunt", "Offer", "Application", "Underwriting", "Appraisal", "Closing"].map((step, i) => (
            <span key={i} className="px-5 py-3 bg-slate-900 text-white dark:bg-white dark:text-black rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-lg group hover:scale-105 transition-transform">
              <span className="w-5 h-5 rounded-full bg-blue-500 dark:bg-cyan-500 text-white flex items-center justify-center text-[10px]">{i + 1}</span> {step}
            </span>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Bottom Line</h4>
          <p className="text-blue-50 text-xl leading-relaxed mb-0">
            A mortgage is likely your largest financial commitment. Take time to understand PITI and how amortization builds your equity over time. Get pre-approved before you shop to ensure your targets are based on verified data, not assumptions.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default MortgageBasics;
