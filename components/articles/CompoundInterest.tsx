import React from 'react';
import ArticleLayout from '../ArticleLayout';

const CompoundInterest: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How Compound Interest Builds Wealth" 
      category="Investing" 
      icon="📈" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Compound interest is often called the "eighth wonder of the world"—and for good reason. It's the most powerful wealth-building tool available to everyday investors.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The Mathematical Force</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          Compound interest is interest earned not only on your initial investment but also on the accumulated interest from previous periods <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter"> </span>. Think of it as your money making money, which then makes even more money.
        </p>

        <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl mb-12 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4 mt-0 text-sm uppercase tracking-widest text-blue-500">The Snowball Loop</h4>
          <p className="text-base text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
            You invest <strong>$1,000</strong> at an 8% annual return. 
            <br />• <strong>Year 1:</strong> You have $1,080.
            <br />• <strong>Year 2:</strong> You earn 8% on the full <strong>$1,080</strong>, bringing your total to $1,166.40. 
            <br />Over decades, this becomes extraordinary velocity.
          </p>
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-16 mb-8 text-center uppercase tracking-tighter">The Power of Time</h3>
        <div className="bg-slate-950 text-white rounded-[3rem] p-10 sm:p-16 mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">TIME</div>
          <p className="text-lg text-slate-300 mb-10 relative z-10 leading-relaxed">
            Imagine you start with <strong>$10,000</strong>, contribute <strong>$100 per month</strong>, and earn an 8% return. After 20 years:
          </p>
          <div className="grid sm:grid-cols-2 gap-8 relative z-10">
            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Terminal Balance</p>
              <p className="text-4xl font-black tracking-tighter">$101,500+</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
              <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">Growth Layer</p>
              <p className="text-4xl font-black tracking-tighter">~66%</p>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-500 font-bold relative z-10 uppercase tracking-widest">
            Only $34,000 was contributed by you. The rest came from growth velocity <span className="text-[9px] opacity-50">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-center">The Cost of Waiting</h3>
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-6 p-6 border border-slate-200 dark:border-white/5 rounded-3xl bg-slate-50 dark:bg-white/[0.02] transition-colors group hover:border-blue-500/20">
             <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">A</div>
             <div>
               <p className="font-bold text-slate-900 dark:text-white mb-1">Starts at Age 25</p>
               <p className="text-2xl font-black text-blue-600">$698,000 <span className="text-xs text-slate-400 font-medium">(at age 65)</span></p>
             </div>
          </div>
          <div className="flex items-center gap-6 p-6 border border-slate-200 dark:border-white/5 rounded-3xl bg-slate-50 dark:bg-white/[0.02] transition-colors group hover:border-slate-500/20">
             <div className="w-16 h-16 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">B</div>
             <div>
               <p className="font-bold text-slate-900 dark:text-white mb-1">Starts at Age 35</p>
               <p className="text-2xl font-black text-slate-500">$298,000 <span className="text-xs text-slate-400 font-medium">(at age 65)</span></p>
             </div>
          </div>
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mt-6">
            Waiting 10 years cost Investor B nearly <strong>$400,000</strong> in potential alpha <span className="opacity-50">(NerdWallet)</span>.
          </p>
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-16 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black">72</div>
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 uppercase tracking-widest text-xs">The Rule of 72</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Divide 72 by your annual return rate to see how many years it takes to double your money. At an 8% return, your capital doubles every <strong>9 years</strong>. At 10%, it's every <strong>7.2 years</strong>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Compound interest rewards <strong>patience and early entry</strong>. You don't need a large salary; you need to start today. Every dollar invested in your 20s is worth 10+ dollars in your 60s. Deploy your capital now and let the math build your legacy.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CompoundInterest;