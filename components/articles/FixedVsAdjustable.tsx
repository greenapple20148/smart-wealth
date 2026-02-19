
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const FixedVsAdjustable: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Fixed vs Adjustable Rate Mortgages Explained" 
      category="Basics" 
      icon="⚖️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Choosing between a fixed-rate and adjustable-rate mortgage is one of the most important decisions you'll make when buying a home. Both have distinct advantages and risks, and the right choice depends on your timeline, budget, and risk tolerance.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">Fixed-Rate Mortgages: Stability for the Long Haul</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          With a fixed-rate mortgage, the interest rate is set when you take out the loan and will not change. It carries the same interest rate and monthly payment for the entire life of the loan <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>. 
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          This means if you lock in a 6.5% rate on a 30-year mortgage, you'll pay 6.5% for all 30 years, regardless of what happens with interest rates in the broader market.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 rounded-3xl">
             <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-4 mt-0">Key Features</h4>
             <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2 m-0 list-none pl-0">
               <li className="flex gap-2"><span>✓</span> Terms: 15, 20, or 30 years</li>
               <li className="flex gap-2"><span>✓</span> Predictable budgeting</li>
               <li className="flex gap-2"><span>✓</span> Sleep-at-night security</li>
             </ul>
          </div>
          <div className="p-6 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-3xl">
             <h4 className="font-bold text-rose-900 dark:text-rose-400 mb-4 mt-0">Important Note</h4>
             <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed m-0">
               Your <strong>total</strong> monthly payment can still change if insurance premiums or property tax rates rise <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
             </p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">Adjustable-Rate Mortgages (ARMs): Lower Rates, Higher Risk</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          With an adjustable-rate mortgage, the interest rate may go up or down <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>. You may hear these referred to as <strong>variable-rate mortgages</strong> <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter"> </span>.
        </p>

        <div className="bg-slate-950 text-white rounded-[3rem] p-10 sm:p-16 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">🔄</div>
          <h3 className="text-3xl font-black text-cyan-400 mb-8 mt-0 uppercase tracking-widest">The Hybrid Structure</h3>
          <p className="text-slate-300 mb-10 leading-relaxed">
            ARMs usually start with a fixed rate for an initial period, then adjust periodically based on market conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-blue-400 font-black text-xs uppercase mb-2">5/1 ARM</p>
              <p className="text-sm m-0">Fixed for 5 years, then adjusts <strong>once per year</strong> <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The College Investor)</span>.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-emerald-400 font-black text-xs uppercase mb-2">10/6 ARM</p>
              <p className="text-sm m-0">Fixed for 10 years, then adjusts every <strong>six months</strong> <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NAGA)</span>.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">Understanding Rate Caps</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          ARMs include protections to prevent your rate from skyrocketing. You may see them listed like <strong>2/1/5</strong>:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border dark:border-white/5 text-center">
            <p className="text-2xl font-black text-slate-900 dark:text-white mb-1">2%</p>
            <p className="text-[10px] font-black text-slate-400 uppercase">First Adjustment Cap</p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border dark:border-white/5 text-center">
            <p className="text-2xl font-black text-slate-900 dark:text-white mb-1">1%</p>
            <p className="text-[10px] font-black text-slate-400 uppercase">Periodic Cap</p>
          </div>
          <div className="p-6 bg-slate-900 text-white rounded-2xl text-center shadow-lg">
            <p className="text-2xl font-black text-blue-400 mb-1">5%</p>
            <p className="text-[10px] font-blue-200 uppercase font-black">Lifetime Cap</p>
          </div>
        </div>

        <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-500/20 rounded-3xl mb-16">
          <h4 className="text-emerald-900 dark:text-emerald-400 font-bold mb-4 mt-0 text-xl">The Key Advantage: Lower Initial Rates</h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed m-0">
            During the initial fixed period, the interest rate is usually lower than what you'd pay for a fixed-rate mortgage <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(Change, Mintos)</span>. This can save you thousands if you plan to move or refinance before the rate adjusts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-blue-600">🏠</span> Choose Fixed-Rate if:
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>Staying in the home for 10+ years.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>You want total predictability for budgeting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>You are a first-time homebuyer who wants simplicity <span className="text-[10px] font-black opacity-50 uppercase">(Gainify)</span>.</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-600">🏎️</span> Choose an ARM if:
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span>You plan to sell or refinance within 5-10 years.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span>You expect your income to increase significantly.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Current interest rates are exceptionally high <span className="text-[10px] font-black opacity-50 uppercase">(Gainify)</span>.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-10 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[2.5rem] mb-16">
          <h4 className="text-rose-900 dark:text-rose-400 font-bold mb-4 mt-0 text-xl flex items-center gap-3">
            <span>🛑</span> The Critical Risks
          </h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Don't assume you'll be able to sell or refinance. If property values decline or your income drops, you could be trapped with skyrocketing payments <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter">(NerdWallet)</span>. This was a core driver of the mid-2000s foreclosure crisis.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-10">
            For most buyers, <strong>Fixed-Rate is the safer, smarter choice</strong>. The certainty eliminates risk and makes long-term planning straightforward. Only consider an ARM if you have the financial flexibility to absorb the "Worst Case Scenario" lifetime cap payment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-6 py-3 rounded-full font-bold text-sm">Lock in Predictability</div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default FixedVsAdjustable;
