
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const AmexGoldAnalysis: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Amex Gold: The Premium Spend Analysis" 
      category="Credit Cards" 
      icon="💳" 
      onClose={onClose}
    >
      <div className="prose prose-slate max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          The American Express® Gold Card is widely considered the "holy grail" for foodies and home cooks. But with a significant annual fee, does the math actually work for the average spender? Let's dive into the data.
        </p>

        <div className="p-8 bg-amber-500 text-white rounded-[2.5rem] mb-12 shadow-xl shadow-amber-200 dark:shadow-amber-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-8xl">👑</div>
          <h3 className="text-2xl font-bold m-0 text-white mb-4">The Verdict for 2026</h3>
          <p className="text-amber-50 text-lg leading-relaxed mb-0">
            If you spend more than <strong>$100 per week</strong> on groceries and dining combined, the Amex Gold is effectively impossible to beat. It transforms your largest variable expenses into high-value travel rewards.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">The Rewards Engine</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm">
            <p className="text-4xl font-black text-amber-500 mb-2">4X</p>
            <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">Dining</p>
            <p className="text-xs text-slate-500 leading-relaxed">Worldwide restaurants and takeout.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm">
            <p className="text-4xl font-black text-amber-500 mb-2">4X</p>
            <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">Groceries</p>
            <p className="text-xs text-slate-500 leading-relaxed">U.S. Supermarkets (up to $25k/yr).</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm">
            <p className="text-4xl font-black text-amber-500 mb-2">3X</p>
            <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">Flights</p>
            <p className="text-xs text-slate-500 leading-relaxed">Booked directly or via Amex Travel.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">The Annual Fee Math</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The sticker price is <strong>$250</strong>. For many, that's a dealbreaker. However, Amex bundles two major credits that can offset nearly the entire cost:
        </p>

        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-sm">🍔</div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1">$120 Dining Credit</p>
              <p className="text-sm text-slate-500 m-0">Up to $10/month at Grubhub, Cheesecake Factory, and more.</p>
            </div>
            <div className="ml-auto font-black text-emerald-500">+$120</div>
          </div>
          <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-sm">🚗</div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1">$120 Uber Cash</p>
              <p className="text-sm text-slate-500 m-0">Up to $10/month for Uber rides or Uber Eats in the U.S.</p>
            </div>
            <div className="ml-auto font-black text-emerald-500">+$120</div>
          </div>
          <div className="flex justify-between items-center p-8 bg-slate-900 dark:bg-black text-white rounded-3xl">
             <span className="font-bold uppercase tracking-widest text-xs">Effective Annual Fee</span>
             <span className="text-3xl font-black text-emerald-400">$10</span>
          </div>
        </div>

        <div className="p-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-[2.5rem] mb-16">
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 mt-0 text-xl flex items-center gap-3">
            <span>🛡️</span> Purchase Protections
          </h4>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">Purchase Protection</p>
              <p className="text-xs text-slate-500 leading-relaxed">Covers stolen or damaged items for up to 90 days (up to $10k per occurrence).</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">Extended Warranty</p>
              <p className="text-xs text-slate-500 leading-relaxed">Adds one additional year to original manufacturer's warranties of 5 years or less.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Who Should Avoid This Card?</h3>
        <div className="p-8 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-3xl mb-20">
          <ul className="space-y-4 m-0 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="text-rose-500 font-bold">✕</span>
              <span className="text-sm text-slate-700 dark:text-slate-300"><strong>Non-Grocers:</strong> If you primarily eat out but never shop at supermarkets.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-500 font-bold">✕</span>
              <span className="text-sm text-slate-700 dark:text-slate-300"><strong>Non-Uber Users:</strong> If you don't use Uber or Uber Eats, the fee is much harder to justify.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-500 font-bold">✕</span>
              <span className="text-sm text-slate-700 dark:text-slate-300"><strong>Debt Carries:</strong> As a premium card, the interest rates are high. It's only for those who pay in full.</span>
            </li>
          </ul>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Alpha</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            The Amex Gold isn't just a status symbol—it's a math equation. If you leverage the credits and spend at least $500/month on food, the rewards value typically exceeds <strong>$800 per year</strong> in travel potential. It's the ultimate "daily driver" for the modern spender.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default AmexGoldAnalysis;
