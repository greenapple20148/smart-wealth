import React from 'react';
import ArticleLayout from '../ArticleLayout';

const HowManyCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How Many Credit Cards Should You Have?" 
      category="Credit Logic" 
      icon="💳" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          The optimal number of cards is a function of your organizational capacity and reward goals. In 2026, the "Portfolio Node" strategy is the standard for beginners.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">NODE</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-blue-400 uppercase tracking-tighter">The "Noah's Ark" Minimum</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            You should have a minimum of <strong>two cards</strong> from <strong>two different issuers</strong>. This provides a backup node if one bank has a technical failure or freezes your account unexpectedly <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The Penny Hoarder)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-blue-500 decoration-4">The Experience Tiers</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { tier: "01", label: "Beginner", qty: "1-2 Cards", desc: "Focus on habit formation and perfect payment loops." },
            { tier: "02", label: "Optimizer", qty: "3-5 Cards", desc: "Target specific nodes: Gas, Groceries, and Travel." },
            { tier: "03", label: "Master", qty: "6+ Cards", desc: "Advanced churning and extreme point optimization." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm text-center">
              <p className="text-[10px] font-black text-blue-500 uppercase mb-2">Tier {item.tier}</p>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase">{item.label}</h4>
              <p className="text-2xl font-black text-slate-900 dark:text-white mb-4">{item.qty}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Risk-to-Reward" Filter</h3>
        <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-[2.5rem] p-10 mb-16">
           <p className="text-sm text-rose-900 dark:text-rose-400 font-black uppercase mb-4 tracking-widest">🛑 Warning Signs of Over-Saturation:</p>
           <ul className="space-y-4 m-0 list-none pl-0">
             <li className="flex items-start gap-3">
               <span className="text-rose-500 font-bold">✕</span>
               <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Difficulty tracking multiple statement closing dates.</span>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-rose-500 font-bold">✕</span>
               <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Accumulating annual fees that exceed your total reward yield.</span>
             </li>
           </ul>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            For 90% of users, <strong>3 cards</strong> is the peak efficiency point. 1 for flat-rate spend, 1 for dining/groceries, and 1 for travel/backup. This builds a robust credit mix without the high friction of complex management.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default HowManyCards;