
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const IndexFundRevolution: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="The Index Fund Revolution: VOO vs VTI Deep Dive" 
      category="Investing" 
      icon="📦" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          If you want to own the entire U.S. economy, you're likely looking at two heavyweights: VOO and VTI. While they perform similarly, the "Revolution" lies in the details of their construction.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-blue-600 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black">VOO</div>
             <h4 className="text-2xl font-black mb-4">VOO (S&P 500)</h4>
             <p className="text-sm text-blue-100 mb-6">Invests in the 500 largest U.S. companies. It represents about 80% of the total stock market value <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
             <div className="bg-white/10 p-4 rounded-xl">
               <p className="text-xs font-black uppercase mb-1">Exposure</p>
               <p className="text-lg font-bold">Large-Cap Tech Heavy</p>
             </div>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black">VTI</div>
             <h4 className="text-2xl font-black mb-4">VTI (Total Market)</h4>
             <p className="text-sm text-slate-300 mb-6">Invests in ~3,800 companies, including large, mid, and small-caps. It is the ultimate diversification tool <span className="text-[10px] font-black opacity-50 uppercase"> </span>.</p>
             <div className="bg-white/10 p-4 rounded-xl">
               <p className="text-xs font-black uppercase mb-1">Exposure</p>
               <p className="text-lg font-bold">The Entire US Economy</p>
             </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Key Comparison Metrics</h3>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-6 text-slate-400 uppercase text-[10px] font-black tracking-widest">Metric</th>
                <th className="py-2 px-6 text-blue-600 uppercase text-[10px] font-black tracking-widest">VOO</th>
                <th className="py-2 px-6 text-slate-900 dark:text-white uppercase text-[10px] font-black tracking-widest">VTI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <td className="py-4 px-6 font-bold rounded-l-2xl">Expense Ratio</td>
                <td className="py-4 px-6 font-black text-emerald-500">0.03%</td>
                <td className="py-4 px-6 font-black text-emerald-500 rounded-r-2xl">0.03%</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <td className="py-4 px-6 font-bold rounded-l-2xl">Historical Return (10yr)</td>
                <td className="py-4 px-6 font-bold">~12.5%</td>
                <td className="py-4 px-6 font-bold rounded-r-2xl">~12.1%</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <td className="py-4 px-6 font-bold rounded-l-2xl">Number of Holdings</td>
                <td className="py-4 px-6">506</td>
                <td className="py-4 px-6 rounded-r-2xl">3,780</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-[9px] text-slate-400 mt-2">Data based on trailing performance as of Q1 2026.</p>
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20 rounded-[3rem] mb-16 relative">
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0">The 86% Overlap</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            VTI is roughly <strong>86% VOO by weight</strong>. Because both are market-cap weighted, the giant companies (Apple, Microsoft, Nvidia) dominate both funds. If you own both, you are likely doubling up on the same top holdings <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <div className="p-12 bg-slate-950 text-white rounded-[3.5rem] text-center shadow-2xl mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Which Should You Buy?</h4>
          <p className="text-slate-400 text-xl leading-relaxed mb-0">
            For most beginners, <strong>VTI</strong> is the slightly better choice for true "Total Market" exposure. However, <strong>VOO</strong> has historically outperformed slightly due to the massive strength of U.S. Mega-Cap Tech. You can't go wrong with either—pick one and automate your monthly contribution.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default IndexFundRevolution;
