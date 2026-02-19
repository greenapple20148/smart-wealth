
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const MortgageMistakes: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="5 Common Mortgage Mistakes Beginners Make" 
      category="Strategy" 
      icon="⚠️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Buying your first home is exciting, but it's easy to make costly mistakes when you're navigating the process for the first time. Here are five critical errors that can derail your home purchase—and how to avoid them.
        </p>

        <div className="space-y-16 mb-20">
          {/* Mistake 1 */}
          <section className="relative pl-12 border-l-4 border-blue-500">
            <div className="absolute -left-6 top-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black shadow-lg">1</div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">House Hunting Before Pre-Approval</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Looking at a house without mortgage preapproval is a common mistake because shopping for homes is way more fun than getting finances in order. However, preapproval is the most accurate way to determine your budget <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter"> </span>.
            </p>
            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl mb-6">
               <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                 Sellers in 2026 expect buyers to be financially ready <span className="text-[10px] font-black opacity-50 uppercase">(The College Investor)</span>. In competitive markets, sellers often ignore offers without pre-approval letters because they signal you aren't a serious contender.
               </p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 rounded-2xl">
              <p className="font-bold text-blue-900 dark:text-blue-400 text-sm mb-2 uppercase tracking-widest">How to avoid it:</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 m-0 leading-relaxed">
                Meet with a lender and get pre-approved <strong>before viewing a single home</strong>. This involves a credit check and receiving a letter stating exactly what you can borrow, strengthening your negotiating position.
              </p>
            </div>
          </section>

          {/* Mistake 2 */}
          <section className="relative pl-12 border-l-4 border-emerald-500">
            <div className="absolute -left-6 top-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black shadow-lg">2</div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">Not Shopping Around for Rates</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Mortgage interest rates vary from lender to lender. According to Fannie Mae, about a third of homebuyers get only one quote <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter"> </span>.
            </p>
            <div className="bg-emerald-950 text-white p-8 rounded-3xl mb-6 relative overflow-hidden shadow-xl">
               <p className="text-[10px] font-black uppercase text-emerald-400 mb-2">The Quarter-Point Rule</p>
               <p className="text-2xl font-black mb-2">0.25% = $15,000</p>
               <p className="text-xs text-slate-400 m-0">On a $300,000 mortgage, that tiny difference equals roughly $15,000 in additional interest over 30 years.</p>
            </div>
            <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl">
              <p className="font-bold text-emerald-900 dark:text-emerald-400 text-sm mb-2 uppercase tracking-widest">How to avoid it:</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 m-0 leading-relaxed">
                Get quotes from at least <strong>three lenders</strong>. Compare interest rates, closing costs, and origination fees. Check online lenders, credit unions, and traditional banks.
              </p>
            </div>
          </section>

          {/* Mistake 3 */}
          <section className="relative pl-12 border-l-4 border-amber-500">
            <div className="absolute -left-6 top-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-black shadow-lg">3</div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">Draining Savings for the Down Payment</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Many buyers reach deep into savings to pay 20% down to avoid mortgage insurance (PMI). This is unwise if it leaves you with no savings at all <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(Mintos)</span>.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-500/20 p-6 rounded-2xl mb-6">
              <p className="font-bold text-amber-900 dark:text-amber-400 text-sm mb-2 uppercase tracking-widest">How to avoid it:</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 m-0 leading-relaxed">
                Maintain an emergency fund of <strong>3–6 months</strong> of expenses <em>in addition</em> to your down payment. You can use FHA loans (3.5% down) or conventional (as little as 3% down) to keep cash in your pocket <span className="text-[10px] font-black opacity-50 uppercase">(NAGA)</span>.
              </p>
            </div>
          </section>

          {/* Mistake 4 */}
          <section className="relative pl-12 border-l-4 border-violet-500">
            <div className="absolute -left-6 top-0 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-black shadow-lg">4</div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">Overextending Based on Max Approval</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Just because a lender approves you for $400,000 doesn't mean you can comfortably afford it. Lenders calculate based on debt-to-income, not your actual lifestyle or savings goals <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-slate-900 text-white rounded-2xl border border-white/5">
                 <p className="text-violet-400 font-black text-[10px] uppercase mb-1">Hidden Cost Insight</p>
                 <p className="text-lg font-bold m-0">$21,000+ per year</p>
                 <p className="text-[10px] text-slate-500 mt-2">Average cost of homeownership beyond the mortgage (taxes, maintenance, utils) <span className="font-black opacity-50 uppercase">(Bankrate 2025)</span>.</p>
              </div>
              <div className="p-6 bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-500/20 rounded-2xl">
                <p className="font-bold text-violet-900 dark:text-violet-400 text-xs mb-2 uppercase tracking-widest">How to avoid it:</p>
                <p className="text-xs text-slate-700 dark:text-slate-300 m-0 leading-relaxed">
                  Your monthly payment should be <strong>25% or less</strong> of your take-home pay, including taxes, insurance, and HOA fees <span className="text-[10px] font-black opacity-50 uppercase">(NAGA)</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Mistake 5 */}
          <section className="relative pl-12 border-l-4 border-rose-500">
            <div className="absolute -left-6 top-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-black shadow-lg">5</div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">Major Financial Changes Mid-Process</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Taking on extra debt while you're closing changes your credit score, which can send your approval back to the drawing board <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NAGA)</span>.
            </p>
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-2xl">
              <p className="font-bold text-rose-900 dark:text-rose-400 text-sm mb-4 uppercase tracking-widest">The "Freeze" List:</p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 m-0 list-none pl-0">
                <li>🚫 No new credit cards or auto loans.</li>
                <li>🚫 No large furniture purchases on credit.</li>
                <li>🚫 Avoid changing jobs if possible.</li>
                <li>🚫 No large unexplained bank deposits <span className="text-[10px] font-black opacity-50 uppercase">(Change)</span>.</li>
              </ul>
            </div>
          </section>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest underline decoration-cyan-500 decoration-4">Additional Critical Warnings</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2">Skipping Inspection</h4>
             <p className="text-xs text-slate-500 leading-relaxed">Never waive the inspection. It reveals serious issues that could cost tens of thousands to repair after closing.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ignoring Loan Types</h4>
             <p className="text-xs text-slate-500 leading-relaxed">Conventional isn't the only way. FHA, VA, and USDA loans have lower entry barriers for first-time buyers <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2">Closing Cost Shock</h4>
             <p className="text-xs text-slate-500 leading-relaxed">Prepare for an extra <strong>3% to 6%</strong> of the purchase price in closing fees <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY)</span>.</p>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            The key is <strong>preparation over impulse</strong>. Get pre-approved, compare lenders, protect your savings, buy below your max, and keep your finances boring during the process. Your future financial health depends on making these smart choices now.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default MortgageMistakes;
