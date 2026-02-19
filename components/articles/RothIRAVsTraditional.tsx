import React from 'react';
import ArticleLayout from '../ArticleLayout';

const RothIRAVsTraditional: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Roth IRA vs Traditional IRA for Beginners" 
      category="Retirement" 
      icon="⚖️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Choosing between a Roth and Traditional IRA is one of the most important retirement decisions you'll make. Both offer powerful tax advantages, but they work in opposite ways.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The Taxation Split</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          With a traditional IRA, you're able to make contributions with pre-tax dollars, reducing your taxable income for that year. However, withdrawals from a Roth IRA are tax-free, whereas funds from a traditional IRA will be taxed at the time you make a withdrawal <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(The Motley Fool)</span>.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-blue-600 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden group">
            <h4 className="font-black text-blue-100 mb-2 uppercase tracking-widest text-[10px]">Roth Protocol</h4>
            <p className="text-2xl font-black mb-4">Pay Taxes Now</p>
            <p className="text-sm text-blue-50 m-0 leading-relaxed">Tax-free growth and tax-free withdrawals. You pay the tax up front to eliminate future tax liabilities entirely.</p>
          </div>
          <div className="p-8 bg-slate-950 text-white rounded-[2.5rem] border border-white/10 shadow-xl relative overflow-hidden group">
            <h4 className="font-black text-slate-500 mb-2 uppercase tracking-widest text-[10px]">Traditional Protocol</h4>
            <p className="text-2xl font-black mb-4">Pay Taxes Later</p>
            <p className="text-sm text-slate-300 m-0 leading-relaxed">Immediate tax deduction today, but you pay ordinary income tax on every dollar withdrawn in retirement.</p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Matrix Comparison</h3>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-6 text-slate-400 uppercase text-[10px] font-black tracking-widest">Core Feature</th>
                <th className="py-2 px-6 text-blue-600 uppercase text-[10px] font-black tracking-widest text-center">Roth IRA</th>
                <th className="py-2 px-6 text-slate-900 dark:text-white uppercase text-[10px] font-black tracking-widest text-center">Traditional IRA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-50 dark:bg-white/[0.03] rounded-xl">
                <td className="py-4 px-6 font-bold rounded-l-2xl">Tax Benefit</td>
                <td className="py-4 px-6 text-center text-blue-600 font-bold">Withdrawals are Tax-Free</td>
                <td className="py-4 px-6 text-center text-slate-600 dark:text-slate-400 rounded-r-2xl">Contributions are Deductible</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-white/[0.03] rounded-xl">
                <td className="py-4 px-6 font-bold rounded-l-2xl">Income Limit</td>
                <td className="py-4 px-6 text-center text-rose-500 font-bold">Restricted (2026 Caps)</td>
                <td className="py-4 px-6 text-center text-emerald-500 font-bold rounded-r-2xl">No Limit to Open</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-white/[0.03] rounded-xl">
                <td className="py-4 px-6 font-bold rounded-l-2xl">Mandatory Withdrawals</td>
                <td className="py-4 px-6 text-center text-emerald-500 font-bold">None (Hold Forever)</td>
                <td className="py-4 px-6 text-center text-rose-500 font-bold rounded-r-2xl">RMDs start at Age 73</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-tight">The Decision Engine</h3>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[3rem] shadow-sm">
            <h4 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
              Select Roth If:
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>You believe your tax rate will be higher in retirement <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>You want the flexibility to withdraw original contributions for emergencies penalty-free.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span>You want to leave tax-free money to your heirs.</span>
              </li>
            </ul>
          </div>
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[3rem] shadow-sm">
            <h4 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
              Select Traditional If:
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-bold">✓</span>
                <span>You need the tax deduction <strong>today</strong> to lower your current IRS bill <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-bold">✓</span>
                <span>You expect to be in a significantly lower bracket during retirement.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0 uppercase tracking-tighter">The Best of Both</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            There's no rule saying you must choose just one. Many high-performers split contributions between both types for "tax diversification." However, for most young beginners, defaulting to a <strong>Roth IRA</strong> is the widely recommended path to multi-decade tax alpha.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default RothIRAVsTraditional;