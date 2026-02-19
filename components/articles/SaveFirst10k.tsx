import React from 'react';
import ArticleLayout from '../ArticleLayout';

const SaveFirst10k: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Save Your First $10,000" 
      category="Budgeting" 
      icon="💰" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Saving your first $10,000 is a major financial milestone that builds confidence, creates an emergency cushion, and sets the foundation for long-term wealth. In 2026, the strategy is about math-driven consistency and high-yield placement.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-8 text-center uppercase tracking-widest underline decoration-emerald-500 decoration-4">The Savings Velocity Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="p-8 bg-slate-950 text-white rounded-3xl text-center shadow-xl border border-white/5">
             <p className="text-[10px] font-black text-blue-400 uppercase mb-2 tracking-widest">Per Month</p>
             <p className="text-3xl font-black">$833</p>
          </div>
          <div className="p-8 bg-slate-950 text-white rounded-3xl text-center shadow-xl border border-white/5">
             <p className="text-[10px] font-black text-emerald-400 uppercase mb-2 tracking-widest">Per Week</p>
             <p className="text-3xl font-black">$192</p>
          </div>
          <div className="p-8 bg-slate-950 text-white rounded-3xl text-center shadow-xl border border-white/5">
             <p className="text-[10px] font-black text-amber-400 uppercase mb-2 tracking-widest">Per Day</p>
             <p className="text-3xl font-black">$27.40</p>
          </div>
        </div>

        <div className="space-y-12 mb-16">
          <section className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Step 01: The Storage Node (HYSA)</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-0">
              Your first move is opening a dedicated <strong>High-Yield Savings Account</strong>. In 2026, the best HYSA nodes have no fees and pay 10 times the national average interest rate. This creates a psychological shift: your $10k isn't just "extra cash"—it's a capital-generating asset.
            </p>
          </section>

          <section className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Step 02: Automate the Flow</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-0">
              Avoid the "save what's left" trap. Set an automatic monthly transfer to force yourself to live on a leaner budget <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>. When you get paid, transfer the capital immediately so you prioritize wealth accumulation over consumption <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Mintos)</span>.
            </p>
          </section>

          <section className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Step 03: The Capital Audit</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-0">
              Conduct a deep-dive audit of your last 90 days. Categorize expenses into Needs, Wants, and Wishes. This clarity reveals the "Leak Nodes" where your capital is escaping, allowing you to redirect those streams toward your $10,000 objective.
            </p>
          </section>
        </div>

        <div className="bg-blue-600 text-white rounded-[4rem] p-10 sm:p-16 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">PIVOT</div>
          <h3 className="text-3xl font-black mb-6 mt-0 relative z-10 uppercase tracking-tighter">Step 04: The High-Leverage Pivot</h3>
          <p className="text-xl text-blue-50 leading-relaxed mb-10 relative z-10">
            Big goals require a structural change—a move meaningful enough to free up significant capital beyond just skipping daily luxuries <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 relative z-10">
            <div className="p-8 bg-white/10 rounded-[2.5rem] border border-white/20 group hover:bg-white/20 transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-4">Downsizing Lever</p>
              <h4 className="text-xl font-bold mb-2">🏠 The Roommate Protocol</h4>
              <p className="text-sm text-blue-100 m-0">Splitting a $1,600 housing expense instantly frees up <strong>$800/month</strong>—hitting your entire $10k target in 12 months with zero other lifestyle changes.</p>
            </div>
            <div className="p-8 bg-white/10 rounded-[2.5rem] border border-white/20 group hover:bg-white/20 transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-4">Income Lever</p>
              <h4 className="text-xl font-bold mb-2">💼 Income Stacking</h4>
              <p className="text-sm text-blue-100 m-0">Even a $500/month boost from freelance or gig-economy nodes adds <strong>$3,000</strong> to your fund in just six months <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter"> </span>.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Operational Tactics</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2rem] group hover:border-blue-500/30 transition-all">
            <h4 className="font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs text-blue-500">52-Week Challenge</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Save $1 in week 1, $2 in week 2, scaling to $52. A low-friction psychological win yielding $1,378.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2rem] group hover:border-emerald-500/30 transition-all">
            <h4 className="font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs text-emerald-500">No-Spend Weekends</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Execute two weekends per month with zero discretionary outflow. Focus on high-value, zero-cost social activities.</p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-cyan-500 decoration-4">The Efficiency Matrix</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: "🥗", title: "Nutrition", desc: "Generic brands + meal prep saves $300/mo." },
            { icon: "📱", title: "Subs", desc: "Audit and delete redundant SaaS & streaming." },
            { icon: "🚗", title: "Transit", desc: "Carpool or public nodes save $1,000+ annually." },
            { icon: "🔌", title: "Utilities", desc: "LED automation and insulation audits." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-zinc-950 border border-slate-100 dark:border-white/5 rounded-[2rem] text-center shadow-sm group hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px]">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-slate-950 text-white rounded-[4rem] text-center shadow-2xl mb-20 border border-white/5">
          <h4 className="text-3xl font-black mb-8 mt-0 uppercase tracking-tighter text-emerald-400">Timeline Expectations</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-8">
            <div className="text-center group">
              <p className="text-5xl font-black mb-2 text-white group-hover:text-blue-400 transition-colors">8</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Months at $1,250/mo</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10"></div>
            <div className="text-center group">
              <p className="text-5xl font-black mb-2 text-white group-hover:text-emerald-400 transition-colors">12</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Months at $833/mo</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10"></div>
            <div className="text-center group">
              <p className="text-5xl font-black mb-2 text-white group-hover:text-amber-400 transition-colors">20</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Months at $500/mo</p>
            </div>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto m-0 font-medium">
            $10,000 is the "Escape Velocity" of personal finance. Once you hit this node, your choices expand exponentially. Execute your automation today.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default SaveFirst10k;