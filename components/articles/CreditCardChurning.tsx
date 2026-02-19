
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const CreditCardChurning: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Credit Card Churning: A Beginner's Guide to Points" 
      category="Credit" 
      icon="✈️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Credit card "churning" is the strategic practice of opening credit cards specifically to earn large welcome bonuses, often for the purpose of free travel. While it can be incredibly lucrative, it requires extreme organization and discipline.
        </p>

        <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-8xl">💳</div>
          <h3 className="text-2xl font-bold m-0 text-blue-400 mb-4">What is Churning?</h3>
          <p className="text-slate-300 text-lg leading-relaxed mb-0">
            Issuers like Chase, Amex, and Citi offer massive "Sign-Up Bonuses" (SUBs) worth $500 to $1,000+ to attract new customers. Churners earn these bonuses, use the perks, and then often close or "downgrade" the cards before the second year's annual fee hits <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The College Investor)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">The 4 Golden Rules of Churning</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-500">1.</span> Pay In Full Every Month
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Interest charges will instantly wipe out the value of any points you earn. If you carry a balance, churning is not for you <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-500">2.</span> Don't Overspend
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Only apply for a card if you can hit the "Minimum Spend Requirement" (MSR) with your <strong>normal</strong> monthly bills. Spending money just for points is a losing game.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-500">3.</span> Protect Your Credit Score
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Keep your utilization low. Hard inquiries will cause minor dips, but long-term on-time payments from many accounts can actually <strong>increase</strong> your score over time.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-500">4.</span> Track Everything
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Use a spreadsheet or apps like <strong>Travel Freely</strong> or <strong>CardPointers</strong> to track application dates, annual fees, and spend deadlines <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(Mintos)</span>.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20 p-10 rounded-[3rem] mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 p-8 opacity-20 pointer-events-none text-9xl">🖐️</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-amber-900 dark:text-amber-400">The Chase "5/24" Rule</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            This is the most famous rule in churning. Chase will <strong>automatically deny</strong> you for almost any card if you have opened <strong>5 or more</strong> personal credit cards (from any bank) in the last <strong>24 months</strong> <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Gainify)</span>. For this reason, smart churners always start with Chase cards first.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">The Starter Churning Sequence</h3>
        <div className="space-y-4 mb-16">
          {[
            { ticker: 'CSP', name: 'Chase Sapphire Preferred®', desc: 'The #1 starter card. High bonus, points transfer to airlines (United/Southwest) and hotels (Hyatt). $95 fee.' },
            { ticker: 'CFF', name: 'Chase Freedom Flex℠', desc: 'No annual fee. Earns 5% on rotating categories. Points can be "pooled" with the Sapphire for high-value travel.' },
            { ticker: 'INK', name: 'Chase Ink Business Cash®', desc: 'The secret weapon. No annual fee business card that earns 5% at office supply stores and internet services.' }
          ].map((card, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl group transition-all">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">
                {card.ticker}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{card.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 m-0">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[2.5rem] mb-16">
          <h4 className="text-rose-900 dark:text-rose-400 font-bold mb-4 mt-0 text-xl flex items-center gap-3">
            <span>🛑</span> When Churning Goes Wrong
          </h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            If you lose track of an annual fee, you're down $95-$695 instantly. If you miss a payment, your credit score can drop 100 points. Churning is <strong>high-precision</strong> financial engineering—if you are naturally disorganized, stick to one good cash-back card instead.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl text-center">
               <p className="text-xs font-black text-rose-500 uppercase mb-1">Risk</p>
               <p className="text-sm font-bold m-0 dark:text-white">Debt Trap</p>
             </div>
             <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl text-center">
               <p className="text-xs font-black text-rose-500 uppercase mb-1">Risk</p>
               <p className="text-sm font-bold m-0 dark:text-white">Fee Overload</p>
             </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            For those with a <strong>720+ score</strong> and zero credit card debt, churning can unlock thousands of dollars in free luxury travel every year. Start with the <strong>Chase Sapphire Preferred</strong>, hit the minimum spend, and welcome to the world of "Travel Hacking."
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CreditCardChurning;
