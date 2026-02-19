
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const HowTaxesWork: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How Taxes Work on Investments" 
      category="Investing" 
      icon="📝" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Investment taxes are the largest "leak" in most portfolios. Understanding the split between short and long-term gains is the first step to high-performance tax efficiency in 2026.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-8 text-center uppercase tracking-widest">Short vs. Long Term Velocity</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] relative overflow-hidden group">
            <h4 className="font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-[10px] text-blue-500">Short-Term (≤ 1 Year)</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Taxed as <strong>ordinary income</strong>. Gains are added to your salary and taxed at your regular rate (up to 37%) <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl text-xs font-black text-rose-500 border border-rose-100 dark:border-rose-500/20 text-center uppercase tracking-widest">
              Impact: High Friction
            </div>
          </div>

          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-500/20 rounded-[2.5rem] relative overflow-hidden group">
            <h4 className="font-black text-emerald-900 dark:text-emerald-400 mb-4 uppercase tracking-widest text-[10px]">Long-Term (&gt; 1 Year)</h4>
            <p className="text-sm text-emerald-800 dark:text-slate-300 leading-relaxed mb-6">
              Taxed at preferential rates: <strong>0%, 15%, or 20%</strong> depending on your income <span className="text-[10px] font-black opacity-50 uppercase">(Mintos)</span>. Patience pays off.
            </p>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl text-xs font-black text-emerald-500 border border-emerald-100 dark:border-emerald-500/20 text-center uppercase tracking-widest">
              Impact: Efficient Growth
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">2026 Long-Term Brackets</h3>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-6 text-slate-400 uppercase text-[10px] font-black tracking-widest">Tax Rate</th>
                <th className="py-2 px-6 text-slate-400 uppercase text-[10px] font-black tracking-widest">Single Filer Income</th>
                <th className="py-2 px-6 text-slate-400 uppercase text-[10px] font-black tracking-widest">Married Joint Income</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-500 text-white rounded-xl shadow-lg">
                <td className="py-4 px-6 font-black text-xl rounded-l-2xl">0%</td>
                <td className="py-4 px-6 font-bold">Up to $48,350</td>
                <td className="py-4 px-6 font-bold rounded-r-2xl">Up to $96,700</td>
              </tr>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl">
                <td className="py-4 px-6 font-black text-xl rounded-l-2xl">15%</td>
                <td className="py-4 px-6 font-bold">$48,351 – $545,500</td>
                <td className="py-4 px-6 font-bold rounded-r-2xl">$96,701 – $613,000</td>
              </tr>
              <tr className="bg-slate-900 dark:bg-black text-white rounded-xl">
                <td className="py-4 px-6 font-black text-xl rounded-l-2xl">20%</td>
                <td className="py-4 px-6 font-bold">Over $545,500</td>
                <td className="py-4 px-6 font-bold rounded-r-2xl">Over $613,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] border border-white/10 mb-16 relative overflow-hidden shadow-2xl">
          <h4 className="text-2xl font-bold text-blue-400 mb-4 mt-0 uppercase tracking-widest">The Escalation Protection</h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            Profits remain "unrealized" and <strong>untaxed</strong> until you sell <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>. By using tax-advantaged nodes like a <strong>Roth IRA</strong>, you can eliminate capital gains taxes entirely for the rest of your life.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Investment taxes can consume 15% to 40% of your performance. Maximize your <strong>Roth accounts</strong>, hold quality assets for at least 366 days, and utilize tax-loss harvesting daily. The goal isn't just to make money—it's to keep the alpha you've earned.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default HowTaxesWork;
