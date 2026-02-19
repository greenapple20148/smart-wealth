
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const GoodCreditScore: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="What Is a Good Credit Score in the US?" 
      category="Credit" 
      icon="🎯" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          A good credit score in the US is your financial passport. In 2026, the consensus on what qualifies as "good" is clear—and knowing exactly where you stand can save you thousands.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-10 mb-6 uppercase tracking-tight">The 2026 Target Range</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-10">
          Scores in the "good" range generally fall around <strong>670-739</strong> for FICO models <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(NerdWallet, The Motley Fool)</span>. This is the threshold where you start qualifying for better interest rates and standard rewards cards.
        </p>
        
        <div className="space-y-4 mb-16">
          {[
            { label: 'Exceptional', range: '800-850', color: 'bg-slate-950 text-white', desc: 'Absolute best rates and instant approvals for any product.' },
            { label: 'Very Good', range: '740-799', color: 'bg-blue-600 text-white', desc: 'Better-than-average rates and premium rewards access.' },
            { label: 'Good', range: '670-739', color: 'bg-emerald-500 text-white', desc: 'The average US score (~715) falls comfortably in this range.' },
            { label: 'Fair', range: '580-669', color: 'bg-amber-500 text-white', desc: 'Considered subprime; you will likely face higher interest rates.' },
            { label: 'Poor', range: '300-579', color: 'bg-rose-600 text-white', desc: 'Difficult to get approved for anything other than secured cards.' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 border border-slate-200 dark:border-white/5 rounded-3xl bg-slate-50 dark:bg-white/[0.02] shadow-sm group hover:border-blue-500/20 transition-colors">
              <div className={`${item.color} px-6 py-3 rounded-2xl font-black text-center sm:w-56 flex-shrink-0 shadow-lg`}>
                <span className="text-[10px] block uppercase tracking-widest opacity-70 mb-1">{item.label}</span>
                <span className="text-2xl tracking-tighter">{item.range}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] border border-white/10 mb-16 relative overflow-hidden shadow-2xl">
          <h4 className="text-2xl font-bold text-blue-400 mb-4 mt-0 flex items-center gap-3">
            <span>🛡️</span> The "760 Rule"
          </h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            If you have at least a <strong>760 score</strong>, you qualify for the lowest interest rate that's available. With an 820 score, you'd get the same rate <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Mintos)</span>. Don't chase perfection—chase the 760 threshold.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The 5-Factor Score Matrix</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-20">
          {[
            { label: 'Payments', value: '35%', color: 'text-blue-600' },
            { label: 'Owed', value: '30%', color: 'text-cyan-500' },
            { label: 'History', value: '15%', color: 'text-slate-400' },
            { label: 'New', value: '10%', color: 'text-slate-400' },
            { label: 'Mix', value: '10%', color: 'text-slate-400' }
          ].map((f, i) => (
            <div key={i} className="p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm text-center">
              <p className={`text-2xl font-black mb-1 ${f.color}`}>{f.value}</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{f.label}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Flash Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            A "good" score starts at 670, but <strong>740+</strong> is the real gateway to elite wealth-building tools. Focus on payment consistency and keeping utilization below 10%—these are the high-velocity levers that move your score the fastest.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default GoodCreditScore;
