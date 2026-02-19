
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const SaveDownPayment: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Save for a Down Payment Quickly" 
      category="Planning" 
      icon="🏦" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Saving for a down payment is often the biggest obstacle to homeownership, but with the right strategies and discipline, you can reach your goal faster than you think.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">Set a Clear, Realistic Goal</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          The first step is knowing exactly what you're saving for. In 2024, the median down payment for first-time home buyers was <strong>9%</strong> <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter"> </span>. You don't necessarily need 20% down.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { type: "FHA Loans", pct: "3.5%", desc: "Government backed" },
            { type: "Conventional", pct: "3-5%", desc: "Standard entry" },
            { type: "VA Loans", pct: "0%", desc: "For Veterans" },
            { type: "USDA Loans", pct: "0%", desc: "Rural properties" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm text-center">
              <p className="text-[10px] font-black text-blue-500 uppercase mb-2">{item.type}</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white mb-1">{item.pct}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 m-0">Min Down Payment</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-500/20 rounded-3xl mb-12">
          <h4 className="text-blue-900 dark:text-blue-400 font-bold mb-3 mt-0 flex items-center gap-2">
            <span>💡</span> Don't Forget Closing Costs
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
            Factor in an additional <strong>3% – 6%</strong> of your home's purchase price for closing costs <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(VENTENY)</span>. For a $200,000 home with 5% down, you'd need roughly <strong>$16,000-$22,000</strong> in total liquid cash.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">The Savings Acceleration Protocol</h3>
        
        <div className="space-y-8 mb-20">
          {/* Strategy 1 & 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border dark:border-white/10 group hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-6">💹</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. The High-Yield Engine</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Open a High-Yield Savings Account (HYSA). With rates around <strong>4% APY</strong> in 2026, a $20,000 fund earns <strong>$800/year</strong> in free interest <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(The College Investor)</span>.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border dark:border-white/10 group hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-6">🤖</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. Mandatory Automation</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Treat savings as a mandatory expense. Set up automatic transfers on payday before you see the money. If you never see it, you won't miss it.
              </p>
            </div>
          </div>

          {/* Strategy 3: Downsizing Impact */}
          <div className="p-10 bg-slate-950 text-white rounded-[3rem] relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute right-0 top-0 p-8 opacity-10 pointer-events-none text-9xl">🏠</div>
            <h4 className="text-2xl font-bold text-cyan-400 mb-6 mt-0 uppercase tracking-widest">3. The Downsizing Lever</h4>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Moving to a smaller home or a cheaper neighborhood can provide the largest boost to your timeline <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NAGA)</span>.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-center md:text-left">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Before: High Rent</p>
                  <p className="text-2xl font-black text-rose-400">$2,800/mo</p>
               </div>
               <div className="text-cyan-500 text-2xl">➔</div>
               <div className="text-center md:text-left">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-1">After: Columbia, TN</p>
                  <p className="text-2xl font-black text-emerald-400">$1,800/mo</p>
               </div>
               <div className="hidden md:block w-px h-12 bg-white/10 mx-4"></div>
               <div className="text-center">
                  <p className="text-[10px] font-black text-cyan-400 uppercase mb-1">Savings Velocity</p>
                  <p className="text-3xl font-black text-white">$12,000 /yr</p>
               </div>
            </div>
          </div>

          {/* Strategy 4 & 5 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border dark:border-white/10 group hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-6">💼</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Income Stacking</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Find ways to boost income: overtime, freelancing, or delivery work. Every extra dollar from side income should go <strong>100%</strong> into your down payment fund <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(VENTENY)</span>.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border dark:border-white/10 group hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-6">🎁</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Windfall Funnel</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Put your annual raise, tax refund, or birthday cash directly into savings. You've budgeted without it this long—you can go a little longer <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(Mintos)</span>.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Advanced Tactics</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase">6. Kill High-Interest Debt</h4>
             <p className="text-xs text-slate-500 leading-relaxed">Someone making $4k/mo spends $440 on debt on average. Eliminating it saves <strong>$5,000+ a year</strong> and improves your DTI ratio <span className="text-[10px] font-black opacity-50 uppercase">(NAGA)</span>.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase">7. Assistance Programs</h4>
             <p className="text-xs text-slate-500 leading-relaxed">Fannie Mae, Freddie Mac, and state agencies offer grants of <strong>$5,000-$10,000</strong> that don't need to be repaid <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY)</span>.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase">8. Creative Gifting</h4>
             <p className="text-xs text-slate-500 leading-relaxed">Ask for cash toward a home for weddings or milestones instead of physical gifts. Most lenders allow gift funds if documented correctly <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY)</span>.</p>
          </div>
        </div>

        <div className="p-10 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[2.5rem] mb-16">
          <h4 className="text-rose-900 dark:text-rose-400 font-bold mb-4 mt-0 text-xl flex items-center gap-3">
            <span>🛑</span> Critical Reminder
          </h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed m-0">
            <strong>Don't touch your emergency fund.</strong> Your nest egg of 3–6 months of expenses is for repairs and maintenance <em>after</em> you own the home. It should not be used for the down payment <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Saving $15,000-$25,000 in 1-2 years is achievable while renting. Treat your down payment as your <strong>highest financial priority</strong>. With a high-yield account, automated transfers, and aggressive expense management, your future home is closer than you think.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default SaveDownPayment;
