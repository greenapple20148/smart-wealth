
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const BestCreditCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Credit Hack: First-Time Cards" 
      category="Credit" 
      icon="💳" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Choosing your first credit card is a major financial milestone. It's about building a reputation with lenders that will help you for years to come. In 2026, the options for beginners are better than ever, offering real rewards without the historical barriers.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Top Overall Picks</h3>
        <div className="space-y-8 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white m-0">Chase Freedom Rise®</h4>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full">Best for Beginners</span>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              The Chase Freedom Rise® Credit Card is the best credit card for a beginner because it's an exceptional value for an entry-level card <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>. You'll earn 1.5% cash back on all purchases with no annual fee. It offers automatic annual reviews to potentially upgrade to the Chase Freedom Unlimited® and the chance to increase your credit limit after just six months of responsible use. 
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl border border-blue-100 dark:border-blue-500/20">
               <p className="text-xs text-blue-700 dark:text-blue-300 font-medium m-0">
                 <strong>Pro Tip:</strong> Having a Chase checking or savings account with at least $250 can significantly improve your approval odds.
               </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-3xl">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Petal® 2 Visa®</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Rewards responsible behavior with 1% cash back, scaling to 1.5% after 12 on-time payments <span className="text-[10px] font-black opacity-50 uppercase">(Change)</span>. No annual fee and no credit history required.</p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-3xl">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Capital One Platinum</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Ideal if your main focus is strictly building credit. No annual fee and access to a higher credit line after making the first six payments on time <span className="text-[10px] font-black opacity-50 uppercase"> </span>.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 text-white rounded-[3rem] p-10 sm:p-16 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">🎓</div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 mt-0 uppercase tracking-widest">For Students</h3>
          <div className="space-y-8 relative z-10">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Capital One Savor Student</h4>
              <p className="text-slate-300 leading-relaxed m-0">
                Stands out for offering 1 - 8% cash back on purchases <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter"> </span> with no annual fee. Includes a $50 bonus after spending $100 in the first three months.
              </p>
            </div>
            <div className="w-full h-px bg-white/10"></div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Discover it® Student Cash Back</h4>
              <p className="text-slate-300 leading-relaxed m-0">
                Exceptional value with 5% cash back on rotating categories and a match for all cash back earned in your first year <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter"> </span>. No annual fee and the first late fee is waived.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">For Building Credit (Secured)</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm group hover:-translate-y-1 transition-all">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Discover it® Secured</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">The best secured option because you earn 2% cash back at gas stations and restaurants—unusual for secured cards.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm group hover:-translate-y-1 transition-all">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Capital One Platinum Secured</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Requires a refundable security deposit and offers a path to a higher credit line after just six months of on-time payments.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Key Features for Beginners</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            { title: "No Annual Fee", desc: "Most beginner cards waive this entirely to save you money.", icon: "🆓" },
            { title: "Credit Limit Increases", desc: "Accounts are often reviewed for higher limits after 6-12 months.", icon: "📈" },
            { title: "Simple Rewards", desc: "Flat-rate cash back is easier to manage than complex categories.", icon: "💵" },
            { title: "Bureau Reporting", desc: "Ensures your activity is reported to Experian, TransUnion, and Equifax.", icon: "📊" },
            { title: "Forgiving Policies", desc: "Look for waived late fees or no penalty APR for first-time mistakes.", icon: "🛡️" }
          ].map((feature, i) => (
            <div key={feature.title} className="flex gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 m-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-emerald-600 text-white rounded-[3.5rem] shadow-2xl shadow-emerald-500/20 mb-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-8 opacity-20 pointer-events-none text-9xl font-black">!</div>
          <h4 className="text-3xl font-bold mb-8 mt-0 uppercase tracking-tighter">Essential Habits</h4>
          <p className="text-emerald-50 text-xl leading-relaxed mb-10">
            Approval is just the beginning. To master the credit system, you must deploy these habits immediately:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <p className="font-bold text-sm mb-2">Spend Responsibly</p>
              <p className="text-xs text-emerald-100">Only charge what you can pay back immediately. Avoid carrying a balance.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <p className="font-bold text-sm mb-2">Pay In Full</p>
              <p className="text-xs text-emerald-100">Pay your full balance each month to avoid interest charges and debt traps.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <p className="font-bold text-sm mb-2">Never Miss a Payment</p>
              <p className="text-xs text-emerald-100">Payment history is the #1 factor in your score. Set up autopay today.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <p className="font-bold text-sm mb-2">Mind the 30% Rule</p>
              <p className="text-xs text-emerald-100">Keep your credit utilization below 30% to signal stability to lenders.</p>
            </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Flash Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            For most beginners, the <strong>Chase Freedom Rise</strong> is the gold standard for starting your journey. If you are a student, <strong>Discover it Student</strong> offers the best rewards match. Consistency is your multiplier—start now and build your future wealth profile.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default BestCreditCards;
