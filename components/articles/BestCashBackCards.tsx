import React from 'react';
import ArticleLayout from '../ArticleLayout';

const BestCashBackCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Best Cash Back Credit Cards for Beginners" 
      category="Credit Cards" 
      icon="💵" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Cash back credit cards are the "Yield Engines" of a personal finance stack. In 2026, they are the most efficient way to turn mandatory spending into a liquid rewards stream. Here is the high-velocity selection for beginners.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">ROI</div>
          <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Top Recommendation</p>
          <h3 className="text-3xl font-black mb-6 mt-0 text-white uppercase tracking-tighter">Chase Freedom Unlimited®</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            The most balanced rewards node in the US. It combines elevated flat-rate earnings with high-target bonus categories, making it the perfect "one-card" solution for beginners <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Mintos)</span>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
              <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Travel</p>
              <p className="font-bold text-lg text-blue-400">5%</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
              <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Dining</p>
              <p className="font-bold text-lg text-blue-400">3%</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
              <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Flat Rate</p>
              <p className="font-bold text-lg text-blue-400">1.5%</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
              <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Bonus</p>
              <p className="font-bold text-lg text-emerald-400">$200</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-blue-500 decoration-4">The Flat-Rate Specialists</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Wells Fargo Active Cash */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏦</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Simplicity Lead</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Wells Fargo Active Cash®</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The highest floor for beginners. Earn unlimited <strong>2% cash rewards</strong> on every purchase. No categories to track, just pure yield <span className="text-[10px] font-black opacity-50 uppercase">(The Penny Hoarder)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">Unlimited 2%</span>
            </div>
          </div>

          {/* Citi Custom Cash */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🎯</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Dynamic Node</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Citi Custom Cash®</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The only card that adapts to your behavior. Earn <strong>5% back</strong> on your highest spend category each month automatically <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">Automatic 5%</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-slate-900 text-white rounded-[3rem] mb-16 border border-white/5 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">WIN</div>
          <h4 className="text-xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-widest">The "Match" Strategy: Discover it®</h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The <strong>Discover it® Cash Back</strong> card offers an unlimited Cashback Match at the end of your first year. This effectively converts 5% categories into 10% categories, the highest ROI possible for a beginner card <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(VENTENY)</span>.
          </p>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-xs text-slate-400 m-0 italic font-medium">Pro-Tip: Ideal for seasonal high-spend periods like Q4 (Holiday shopping & Amazon).</p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Micro-Target" Protocol</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {[
            { title: "Capital One Savor", icon: "🍔", desc: "3% back on dining, entertainment, and streaming. Ideal for social spenders." },
            { title: "Amex Blue Cash Everyday®", icon: "🛒", desc: "3% back at U.S. supermarkets and online retail. The essential 'Life' card." },
            { title: "Amazon Prime Rewards", icon: "📦", desc: "5% back at Amazon and Whole Foods. Mandatory for heavy prime users." },
            { title: "Capital One Quicksilver", icon: "📱", desc: "1.5% back everywhere. The standard 'Backup' card with no foreign fees." }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center group hover:border-blue-500/20 transition-all">
              <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{s.icon}</span>
              <div>
                <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[10px]">{s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 m-0 font-bold uppercase">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Logic Filters: Approval Matrix</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "📉", title: "Score: 670+", desc: "Target 'Good' score tier for easy approval." },
            { icon: "🆓", title: "$0 Annual Fee", desc: "All selected cards feature zero yearly friction." },
            { icon: "💰", title: "$200 Bonus", desc: "Standard welcome threshold for 2026 picks." },
            { icon: "⏱️", title: "15-Mo 0% APR", desc: "Most picks include a safe interest-free intro." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] text-center group hover:border-emerald-500/30 transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px]">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            For the absolute best beginner experience, anchor your stack with the <strong>Chase Freedom Unlimited</strong>. It offers the highest long-term versatility. If your spending is strictly groceries and dining, the <strong>Citi Custom Cash</strong> or <strong>Amex Blue Cash</strong> will provide a higher immediate yield. Capture your welcome bonus, pay in full, and let the cashback cycle build your capital.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default BestCashBackCards;