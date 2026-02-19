
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const BuildCreditScratch: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Build Credit from Scratch in 2026" 
      category="Credit" 
      icon="🏗️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Establishing a credit profile in 2026 is about more than just getting a card—it's about building a digital reputation that lenders can trust. Here's your high-velocity roadmap to financial credibility.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The Core Foundation</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          Your <strong>payment history</strong> remains the absolute dominant factor in your score <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>. To build credit, you must open accounts that report to the three major bureaus: Experian, TransUnion, and Equifax.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { label: 'GOOD', range: '670-739', color: 'bg-emerald-500 text-white shadow-emerald-500/20' },
            { label: 'VERY GOOD', range: '740-799', color: 'bg-blue-600 text-white shadow-blue-500/20' },
            { label: 'EXCELLENT', range: '800-850', color: 'bg-slate-950 dark:bg-black text-white shadow-black/20 border border-white/5' },
          ].map((item, i) => (
            <div key={i} className={`${item.color} p-6 rounded-3xl text-center shadow-xl`}>
              <p className="text-[10px] font-black mb-1 uppercase tracking-widest opacity-80">{item.label}</p>
              <p className="text-2xl font-black tracking-tighter">{item.range}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Phase 01: The Entry Nodes</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The easiest way to start with zero history is through collateral-backed credit or "niche" starter products designed for beginners <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
        </p>
        
        <div className="space-y-6 mb-16">
          <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-10 rounded-[3rem] shadow-sm">
            <h4 className="font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-[10px] text-blue-500">Tier 1: Secured Credit Cards</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-sm border dark:border-white/5 group hover:border-blue-500/30 transition-all">
                <p className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-lg">Discover it® Secured</p>
                {/* Changed class to className below */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0">Rare for secured cards: earns 2% cash back at gas stations and restaurants. Automatic graduation reviews after 7 months <span className='text-[10px] font-black opacity-50 uppercase'>(Mintos)</span>.</p>
              </div>
              <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-sm border dark:border-white/5 group hover:border-emerald-500/30 transition-all">
                <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 text-lg">Capital One Platinum Secured</p>
                {/* Changed class to className below */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0">No annual fee and potential for a higher credit line after just six months of on-time payments <span className='text-[10px] font-black opacity-50 uppercase'>(VENTENY)</span>.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Phase 02: Leverage Existing History</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
           <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Authorized User Status</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Ask a family member with perfect credit to add you to their oldest card. Their positive history can "piggyback" onto your report, instantly lengthening your credit age <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
              </p>
           </div>
           <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm">
              <div className="text-3xl mb-4">🏦</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Credit-Builder Loans</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Lenders like <strong>Self</strong> or credit unions offer loans where the money is held in a CD while you make payments. It’s a savings plan that builds payment history simultaneously <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
              </p>
           </div>
        </div>

        <div className="bg-slate-950 text-white rounded-[3rem] p-10 sm:p-16 mb-16 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute right-0 bottom-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">BOOST</div>
          <h3 className="text-3xl font-black text-cyan-400 mb-8 mt-0 uppercase tracking-widest">Advanced 2026 Tactics</h3>
          <div className="grid gap-8 relative z-10">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:border-white/30 transition-colors">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Experian Boost™
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed m-0">Get credit for bills you already pay, like rent, Netflix, and phone plans. This bypasses the need for debt to prove your reliability <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(VENTENY)</span>.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:border-white/30 transition-colors">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> The "Wait & Shop" Logic
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed m-0">Only apply for new credit every 6 months. Each application is a "hard pull" that temporarily drops your score by ~5 points <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NAGA)</span>.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">The Discipline Matrix</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: "⏰", title: "Always On-Time", desc: "One late payment ruins months of building." },
            { icon: "💰", title: "Pay in Full", desc: "Never carry a balance. Interest is friction." },
            { icon: "📉", title: "Low Utilization", desc: "Keep balances below 10% of your limit." },
            { icon: "🔒", title: "Hold Old Nodes", desc: "Length of history is 15% of your score." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] text-center shadow-sm group hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px] text-blue-600 dark:text-blue-400">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] shadow-2xl shadow-blue-500/20 mb-20 text-center">
          <h4 className="text-3xl font-bold mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-50 text-xl leading-relaxed mb-0">
            Building credit is a marathon, not a sprint. Reach for a <strong>secured card</strong> or become an <strong>authorized user</strong> today. Within six months, you'll have a score. within 18 months, you'll have access to the same premium cards as the pros.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default BuildCreditScratch;
