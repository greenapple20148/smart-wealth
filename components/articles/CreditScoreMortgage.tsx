
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const CreditScoreMortgage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How Credit Score Affects Mortgage Approval" 
      category="Credit & Approval" 
      icon="📊" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Your credit score is one of the most powerful factors determining whether you get approved for a mortgage—and how much that mortgage will cost you over 30 years. Understanding this relationship can save you tens of thousands of dollars.
        </p>

        <div className="p-8 bg-blue-600 text-white rounded-[2.5rem] mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">!</div>
          <h3 className="text-2xl font-bold mb-4 mt-0 text-white">The Reliability Snapshot</h3>
          <p className="text-blue-50 text-lg leading-relaxed mb-0">
            Mortgage lenders use your credit score as a snapshot of your financial reliability. A higher score—usually <strong>above 740</strong>—suggests consistent debt payment and responsible management, qualifying you for the best interest rates <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(NerdWallet, Mintos)</span>.
          </p>
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-tighter underline decoration-cyan-500 decoration-4">The Real Dollar Impact</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
          Based on FICO's mortgage data for a $400,000 loan, the difference between a high and low score is staggering.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-blue-500/20 shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
            <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">Excellent Score (760+)</p>
            <p className="text-4xl font-black mb-2">$2,398 /mo</p>
            <p className="text-xs text-slate-400 mb-6 italic">Estimated Monthly Principal & Interest</p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-500 uppercase">Total Interest</span>
              <span className="text-xl font-bold text-emerald-400">$463,280</span>
            </div>
          </div>

          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-rose-500/20 shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/10 transition-colors"></div>
            <p className="text-rose-400 font-black text-[10px] uppercase tracking-widest mb-4">Fair Score (620-639)</p>
            <p className="text-4xl font-black mb-2">$2,934 /mo</p>
            <p className="text-xs text-slate-400 mb-6 italic">Estimated Monthly Principal & Interest</p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-500 uppercase">Total Interest</span>
              <span className="text-xl font-bold text-rose-400">$656,240</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[3rem] mb-16 text-center">
          <h4 className="text-2xl font-black text-rose-900 dark:text-rose-400 mb-4 mt-0 uppercase tracking-tight">The $193,000 Gap</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            A low score forces you to pay nearly <strong>$200,000 more</strong> for the exact same $400k home <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter"> </span>. People with high 700s save tens of thousands compared to low 600s <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Minimum Requirements by Loan Type</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { type: "Conventional", score: "620", desc: "The standard for decades, but 740+ is better for rates." },
            { type: "FHA", score: "580-600", desc: "Most accessible option; some allow 3.5% down at 580." },
            { type: "VA", score: "620*", desc: "No official floor, but most lenders prefer 620+ for veterans." },
            { type: "USDA", score: "620*", desc: "Flexible requirements for rural home purchases." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm text-center">
              <p className="text-[10px] font-black text-blue-500 uppercase mb-2">{item.type}</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white mb-2">{item.score}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 m-0 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tighter">The 2026 Model Shift</h3>
        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16 relative overflow-hidden border border-white/10">
          <div className="absolute right-0 top-0 p-8 opacity-10 pointer-events-none text-8xl">🚀</div>
          <h4 className="text-2xl font-bold text-cyan-400 mb-6 mt-0">FICO Score 10T & VantageScore 4.0</h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            The mandatory 620 FICO requirement is becoming obsolete <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>. New models now consider "trended data"—analyzing behavior over time—and <strong>alternative data</strong> like:
          </p>
          <div className="grid sm:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/10">
              <p className="font-bold text-white mb-2">Rent Payments</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/10">
              <p className="font-bold text-white mb-2">Utilities</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/10">
              <p className="font-bold text-white mb-2">Phone Services</p>
            </div>
          </div>
          <p className="mt-10 text-sm text-slate-500 italic m-0">
            *VantageScore estimates 5 million prospective buyers will benefit from this modeling <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Score Ranges & Expectations</h3>
        <div className="space-y-4 mb-16">
          <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border dark:border-white/10">
            <h5 className="font-black text-emerald-500 text-sm uppercase tracking-widest mb-3">760+ | Excellent</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Best rates, easiest approval, and maximum loan flexibility.</p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border dark:border-white/10">
            <h5 className="font-black text-blue-500 text-sm uppercase tracking-widest mb-3">700-759 | Good</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Competitive rates and strong negotiating position.</p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border dark:border-white/10">
            <h5 className="font-black text-amber-500 text-sm uppercase tracking-widest mb-3">620-699 | Fair</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Minimum for most conventional loans; requires closer review of DTI <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border dark:border-white/10">
            <h5 className="font-black text-rose-500 text-sm uppercase tracking-widest mb-3">Below 580 | Poor</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Very limited options; likely requires larger down payments and higher rates.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">How to Boost Your Score Before Applying</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm items-start flex gap-4">
             <div className="text-2xl">⏰</div>
             <div>
               <p className="font-bold text-slate-900 dark:text-white mb-1">Perfect Payment History (35%)</p>
               <p className="text-xs text-slate-500 dark:text-slate-400 m-0">Pay all bills on time, even if just the minimum, in the 6+ months before applying <span className="text-[10px] font-black opacity-50 uppercase">(The College Investor)</span>.</p>
             </div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm items-start flex gap-4">
             <div className="text-2xl">📉</div>
             <div>
               <p className="font-bold text-slate-900 dark:text-white mb-1">Reduce Your DTI Ratio</p>
               <p className="text-xs text-slate-500 dark:text-slate-400 m-0">Pay down high-interest credit cards and avoid large new purchases (like cars) <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
             </div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm items-start flex gap-4">
             <div className="text-2xl">🚫</div>
             <div>
               <p className="font-bold text-slate-900 dark:text-white mb-1">Limit New Hard Inquiries</p>
               <p className="text-xs text-slate-500 dark:text-slate-400 m-0">Each new credit application temporarily lowers your score. Stop applying for cards while mortgage shopping <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
             </div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm items-start flex gap-4">
             <div className="text-2xl">🔍</div>
             <div>
               <p className="font-bold text-slate-900 dark:text-white mb-1">Dispute Report Errors</p>
               <p className="text-xs text-slate-500 dark:text-slate-400 m-0">Correcting a single error on your report can move you into a better rate tier instantly <span className="text-[10px] font-black opacity-50 uppercase">(Change)</span>.</p>
             </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            A higher credit score results in a lower interest rate. Improving your score by just 40-60 points can save you thousands of dollars over the life of your loan. Focus on <strong>consistency and DTI reduction</strong>—it’s the highest ROI activity in the homebuying process.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CreditScoreMortgage;
