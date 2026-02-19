import React from 'react';
import ArticleLayout from '../ArticleLayout';

const RothIRAExplained: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="What Is a Roth IRA and How Does It Work?" 
      category="Retirement" 
      icon="🏦" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          A Roth IRA is a powerful retirement savings account that offers tax-free growth and tax-free withdrawals in retirement. It's essentially a "pay taxes now, play later" agreement with the IRS.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The Core Alpha</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          Unlike traditional retirement accounts where you get a tax deduction now and pay taxes later, a Roth IRA works in reverse. You contribute money that's already been taxed today, but then your investments grow completely tax-free, and you pay zero taxes on withdrawals in retirement <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter"> </span>.
        </p>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] border border-white/10 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">$</div>
          <h4 className="text-2xl font-bold text-blue-400 mb-4 mt-0 flex items-center gap-2">
            <span>💡</span> Pro-Tip Strategy
          </h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            This makes Roth IRAs particularly valuable if you expect to be in a higher tax bracket when you retire than you are today. You are essentially "locking in" today's tax rates on your future wealth.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">2026 Protocol Parameters</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] relative overflow-hidden group">
            <h4 className="font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-[10px] text-blue-500">Contribution Limits</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              For 2026, you can contribute up to <strong>$7,500 annually</strong>, or <strong>$8,600</strong> if you're age 50 or older <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl text-center border dark:border-white/5 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Under 50</p>
                <p className="font-bold text-slate-900 dark:text-white">$7,500</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl text-center border dark:border-white/5 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">50+</p>
                <p className="font-bold text-slate-900 dark:text-white">$8,600</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] relative overflow-hidden group">
            <h4 className="font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-[10px] text-emerald-500">Income Limits</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Ability to contribute depends on your Modified Adjusted Gross Income (MAGI) <span className="text-[10px] font-black opacity-50 uppercase"> </span>.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold p-3 bg-white dark:bg-slate-900 rounded-xl border dark:border-white/5">
                <span className="text-slate-400">Single</span>
                <span className="text-slate-900 dark:text-white">$153k - $168k</span>
              </div>
              <div className="flex justify-between text-xs font-bold p-3 bg-white dark:bg-slate-900 rounded-xl border dark:border-white/5">
                <span className="text-slate-400">Married</span>
                <span className="text-slate-900 dark:text-white">$242k - $252k</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The 5-Year Logic Gate</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          To enjoy completely tax-free and penalty-free earnings, you must meet the "Qualified Distribution" rules. These are the two primary requirements for withdrawals in 2026:
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm hover:border-blue-500/20 transition-all group">
            <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">👴</span>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs">The Age Gate</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">You must be at least 59½ years old to withdraw earnings penalty-free.</p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm hover:border-blue-500/20 transition-all group">
            <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">🗓️</span>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs">The Time Gate</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Your account must have been open for at least five tax years.</p>
          </div>
        </div>

        <div className="p-8 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20 rounded-3xl mb-16 relative overflow-hidden group">
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 flex items-center gap-3">
            <span>🚪</span> The Backdoor Bypass
          </h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            If your income exceeds the limits, you can use the "backdoor Roth IRA" strategy: contribute to a traditional IRA (non-deductible), then immediately convert those funds to a Roth IRA. It's a common and legal workaround in 2026 for high earners.
          </p>
        </div>

        <div className="p-12 bg-emerald-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-emerald-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0 uppercase tracking-tighter">The Consistency Multiplier</h4>
          <p className="text-emerald-50 text-xl leading-relaxed mb-0">
            The earlier you start, the more time your money has to compound tax-free. That growth over decades can result in <strong>hundreds of thousands of dollars</strong> you'll never owe to the IRS. Start building your tax-free future today.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default RothIRAExplained;