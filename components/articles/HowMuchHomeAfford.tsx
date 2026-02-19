import React from 'react';
import ArticleLayout from '../ArticleLayout';

const HowMuchHomeAfford: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How Much Home Can You Afford on $50k Salary?" 
      category="Planning" 
      icon="💰" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Buying a home on a $50,000 salary is challenging in today's market, but definitely possible with the right strategy. Your exact home price range depends on several factors beyond just your income.
        </p>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">🏠</div>
          <h3 className="text-2xl font-black text-cyan-400 mb-4 mt-0 uppercase tracking-widest">The Quick Answer</h3>
          <p className="text-3xl font-black mb-6 leading-tight">
            $150,000 to $200,000
          </p>
          <p className="text-slate-300 leading-relaxed m-0">
            You can generally afford a home for between $180,000 and nearly $258,000 on a $50K salary. But your specific home buying budget will depend on your credit score, debt-to-income ratio, and down payment size <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">Understanding Your Monthly Budget</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          With a $50,000 annual salary, you're working with approximately <strong>$4,167 per month</strong> before taxes. After taxes and deductions, your take-home is closer to <strong>$3,200-$3,500 monthly</strong>, depending on your state and withholdings.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-8 text-center uppercase tracking-widest">The 28/36 Rule: Industry Standard</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 rounded-[2.5rem] shadow-sm">
            <h4 className="text-blue-900 dark:text-blue-400 font-bold mb-2 mt-0 uppercase tracking-widest text-xs">Housing Cap (28%)</h4>
            <p className="text-3xl font-black text-slate-900 dark:text-white mb-2">$1,167 /mo</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
              Max housing payment (PITI + Insurance + PMI) shouldn't exceed 28% of gross income <span className="text-[10px] font-black opacity-50 uppercase"> </span>.
            </p>
          </div>
          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/20 rounded-[2.5rem] shadow-sm">
            <h4 className="text-emerald-900 dark:text-emerald-400 font-bold mb-2 mt-0 uppercase tracking-widest text-xs">Total Debt Cap (36%)</h4>
            <p className="text-3xl font-black text-slate-900 dark:text-white mb-2">$1,500 /mo</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
              Total monthly debt obligations (Mortgage + Auto + Student Loans) shouldn't exceed 36% <span className="text-[10px] font-black opacity-50 uppercase">(Mintos)</span>.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 p-8 rounded-[2.5rem] mb-16">
          <h4 className="text-slate-900 dark:text-white font-bold mb-4 mt-0 text-xl">Real-World Execution</h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed m-0">
            If you make $50K, have no more than $200 in monthly debt, and put $6,913 down, you can afford a <strong>$223,505 purchase price</strong> with a 30-year fixed-rate loan at 6% <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The Interest Rate Multiplier</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The difference between a 6% interest rate and a 7% rate equals approximately $2,000 annually on a $200,000 home—that's <strong>$60,000 over a 30-year mortgage</strong>. For someone making $50K per year, that's more than an entire year's gross salary <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter"> </span>.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">5 Key Affordability Factors</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">1. Credit Score</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Lenders provide best rates to scores 740+. A 760 score might get 6%, while a 620 score faces 7%+, costing tens of thousands extra <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">2. Debt-to-Income (DTI)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">If you have a $400 car payment and $200 student loans, you only have $900 left for your mortgage under the 36% rule <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY)</span>.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">3. Down Payment</h4>
            <p className="text-xs text-slate-500 leading-relaxed">20% down eliminates PMI, saving $100-$200/mo. However, many programs accept 3-3.5% down for beginners.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">4. Location & Taxes</h4>
            <p className="text-xs text-slate-500 leading-relaxed">$50k goes further in Pittsburgh than Miami. Property taxes can vary from 0.5% to over 2% annually <span className="text-[10px] font-black opacity-50 uppercase">(Change)</span>.</p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Rules of Thumb</h3>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="p-8 bg-slate-900 text-white rounded-3xl text-center">
             <p className="text-blue-400 font-black text-xs uppercase mb-2">Conservative (2.5x)</p>
             <p className="text-3xl font-black">$125,000</p>
             <p className="text-[10px] text-slate-500 mt-2 italic">Standard used by The College Investor.</p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-3xl text-center">
             <p className="text-emerald-400 font-black text-xs uppercase mb-2">Aggressive (3x)</p>
             <p className="text-3xl font-black">$150,000</p>
             <p className="text-[10px] text-slate-500 mt-2 italic">Maximum recommended ceiling.</p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Increase Your Buying Power</h3>
        <div className="space-y-4 mb-16">
          {[
            { title: "Kill Debt First", icon: "✂️", desc: "Paying off a $500/mo car loan reduces your DTI by 12% on a $50k salary, instantly boosting your range <span class='text-[10px] font-black opacity-50'> </span>." },
            { title: "Optimize Credit Score", icon: "🚀", desc: "Keep balances below 30% and ensure all payments are on time for 6+ months before applying <span class='text-[10px] font-black opacity-50'> </span>." },
            { title: "Assistance Programs", icon: "🎁", desc: "State and county DPA programs offer $5k-$15k in grants or forgivable loans for first-time buyers <span class='text-[10px] font-black opacity-50'>(Change)</span>." },
            { title: "Market Selection", icon: "🗺️", desc: "Look at areas that are less 'hot' but meet your basic needs to maximize your $50k leverage <span class='text-[10px] font-black opacity-50'> </span>." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl items-center group">
              <div className="text-2xl bg-white dark:bg-slate-800 w-12 h-12 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-110 transition-transform shrink-0">{item.icon}</div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 m-0" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            On a $50,000 salary, aim for a home in the <strong>$150,000 to $200,000 range</strong>. Get mortgage pre-approved early to find your exact "intelligence range" and show sellers you're a serious buyer <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(Change)</span>. Homeownership is a marathon, not a sprint—plan conservatively to build long-term wealth.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default HowMuchHomeAfford;