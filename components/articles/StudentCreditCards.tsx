import React from 'react';
import ArticleLayout from '../ArticleLayout';

const StudentCreditCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Best Credit Cards for Students with No Credit" 
      category="Credit" 
      icon="🎓" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Getting your first credit card as a student with no credit history is a high-velocity move for your future net worth. In 2026, issuers have streamlined products specifically to onboard the next generation of prime borrowers.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">ELITE</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-blue-400 uppercase tracking-tighter">The Student Advantage</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            Student credit cards are specialized financial nodes. They bypass traditional income requirements by acknowledging your status as a "developing asset." They offer higher approval probabilities for beginners than almost any other product <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-blue-500 decoration-4">The Tier 01 Selection</h3>
        
        <div className="space-y-8 mb-16">
          {/* Discover it Student Cash Back */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏹</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Top Rewards Pick</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Discover it® Student Cash Back</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The highest ROI student card. Earns <strong>5% cash back</strong> on rotating categories (Amazon, Grocery Stores, etc.) and an automatic <strong>unlimited Cashback Match</strong> at the end of Year 1 <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">Best for Value</span>
            </div>
          </div>

          {/* Capital One Quicksilver Student */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">📱</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Simplicity Pick</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Capital One Quicksilver Student</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Zero friction. Earn unlimited 1.5% cash back on every purchase. Includes a <strong>$50 welcome bonus</strong> after spending just $100 in your first 3 months <span className="text-[10px] font-black opacity-50 uppercase"> </span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">Best for Beginners</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Micro-Target" Protocol</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {[
            { title: "Capital One Savor Student", icon: "🍔", desc: "3% back on dining, entertainment, and streaming. Ideal for social users." },
            { title: "Chase Freedom Rise®", icon: "🏦", desc: "1.5% back. Higher approval odds if you hold $250 in a Chase account." },
            { title: "Petal® 2 Visa®", icon: "🌱", desc: "Accepts applicants with zero history. Uses cash-flow analysis for approval." },
            { title: "Bank of America® Student", icon: "💳", desc: "Solid travel or cash back options for those with existing BofA nodes." }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center group hover:border-blue-500/20 transition-all">
              <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{s.icon}</span>
              <div>
                <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[10px]">{s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0 font-bold uppercase">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-slate-900 text-white rounded-[3rem] mb-16 border border-white/5 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">GLO</div>
          <h4 className="text-xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-widest">The International Node</h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            If you are an international student in the US without an SSN, cards like <strong>Deserve® EDU</strong> or <strong>Firstcard®</strong> use "Level Credit" tech to approve you based on your university status and cash flow rather than a FICO score <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Mintos)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Growth Expectations</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "📉", title: "Low Limits", desc: "Starting at $300-$1,000." },
            { icon: "🗓️", title: "Fast FICO", desc: "Build a score in 6 months." },
            { icon: "🎓", title: "Graduation", desc: "Auto-upgrade to prime cards." },
            { icon: "🛡️", title: "Fee-Free", desc: "Zero annual fees is standard." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] text-center group hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px]">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Your student years are the "seed phase" of your credit history. Opening one account now and maintaining perfect payment history will grant you an <strong>average age of accounts</strong> that your peers will spend a decade trying to match. Pick the <strong>Discover it® Student</strong> or <strong>Capital One Quicksilver</strong> and start building your financial alpha today.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default StudentCreditCards;