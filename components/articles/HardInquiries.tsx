import React from 'react';
import ArticleLayout from '../ArticleLayout';

const HardInquiries: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How Hard Inquiries Affect Your Credit Score" 
      category="Credit Logic" 
      icon="🔍" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Hard inquiries are one of the most misunderstood aspects of credit scores. While they do affect your reputation with lenders, the impact is usually a minor "Reputational Toll" rather than a systemic failure.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">TOLL</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-tighter">What Is a Hard Inquiry?</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            A hard inquiry, also called a <strong>"hard pull"</strong> or "hard credit check," occurs when you apply for a loan, credit card, or line of credit. It is a request by a lender to view your credit report as part of the underwriting process <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-cyan-500 decoration-4">The Impact Matrix</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Points Impact */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">📉</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Score Delta</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">&lt; 5 Points</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-0 font-medium">
              A single hard inquiry will usually take <strong>fewer than five points</strong> off your FICO® Score. For an investor with a 720 score, dropping to 715 is a minor, temporary dip—hardly catastrophic to your wealth building velocity <span className="text-[10px] font-black opacity-50 uppercase">(NAGA)</span>.
            </p>
          </div>

          {/* Time Impact */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">⏳</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Node Lifecycle</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">12-Month Scoring</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-0 font-medium">
              Inquiries stay on your report for 24 months, but they only directly affect your score for <strong>one year</strong> <span className="text-[10px] font-black opacity-50 uppercase"> </span>. Most users see the effect fade completely after just a few months of responsible usage.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tight">The "Pull" Protocol: Hard vs. Soft</h3>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[3rem]">
            <h4 className="text-rose-500 font-black mb-6 mt-0 uppercase tracking-tighter text-xl">
              <span>🔴</span> Hard Pulls
            </h4>
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-4">Lender-Initiated Applications</p>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-4 list-none pl-0 font-bold uppercase tracking-wide">
              <li className="flex items-center gap-2"><span className="text-rose-500">✕</span> Credit Card Apps</li>
              <li className="flex items-center gap-2"><span className="text-rose-500">✕</span> Mortgage / Auto Loans</li>
              <li className="flex items-center gap-2"><span className="text-rose-500">✕</span> Student Loan Apps</li>
              <li className="flex items-center gap-2"><span className="text-rose-500">✕</span> Specific Rental Apps</li>
            </ul>
            <p className="mt-6 text-[10px] font-black text-slate-400 italic">Result: Small, temporary score draw-down.</p>
          </div>
          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-500/20 rounded-[3rem]">
            <h4 className="text-emerald-600 dark:text-emerald-400 font-black mb-6 mt-0 uppercase tracking-tighter text-xl">
              <span>🟢</span> Soft Pulls
            </h4>
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-4">Verification & Discovery</p>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-4 list-none pl-0 font-bold uppercase tracking-wide">
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Checking your own score</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Pre-approval offers</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Employer background checks</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Insurance quotes</li>
            </ul>
            <p className="mt-6 text-[10px] font-black text-emerald-600 italic">Result: Zero impact on credit score <span className="opacity-50"> </span>.</p>
          </div>
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-16 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">!</div>
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 uppercase tracking-widest text-xs">The Compounding Risk</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            While one pull is minor, having <strong>multiple hard pulls</strong> in a short period indicates to risk models that you may be relying too much on new credit to manage capital. This triggers high-risk alerts and can lead to a cascading score drop <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter">(Change)</span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Don't fear the inquiry; fear the rejection. Use <strong>soft-pull pre-approvals</strong> to verify your odds before committing to a hard pull. One 5-point dip is a small price for a high-value credit node that will pay rewards dividends for years. Space your applications by 6 months to maintain your maximum financial alpha.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default HardInquiries;