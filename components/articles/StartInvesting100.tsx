import React from 'react';
import ArticleLayout from '../ArticleLayout';

const StartInvesting100: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Start Investing with $100 in the US" 
      category="Investing" 
      icon="💵" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Great news—you absolutely can start investing with just $100 in 2026. Thanks to modern investing platforms and fractional shares, the barriers to entry have essentially disappeared. Here's your practical roadmap.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-8 uppercase tracking-tight">The Pre-Flight Foundation</h3>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm hover:border-blue-500/30 transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs text-blue-500">Emergency Fund</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Have a $2,000 emergency fund so you can handle unexpected expenses without using debt <span className="text-[10px] font-black opacity-50 uppercase">(Mintos)</span>.
            </p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm hover:border-rose-500/30 transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">✂️</div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs text-rose-500">Eliminate Debt</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Focus on high-interest credit card debt first. It drains your income faster than markets can grow it.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Step 1: Choose Your Node</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-10">
          Open a brokerage account with no minimums and zero commissions. All of these platforms allow you to buy <strong>fractional shares</strong> <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
        </p>

        <div className="space-y-4 mb-16">
          {[
            { name: "Charles Schwab", icon: "🏦", color: "blue", desc: "No account minimums, $0 commissions, and extensive research tools." },
            { name: "Fidelity Investments", icon: "🎯", color: "emerald", desc: "Offers ZERO index funds with 0% management fees and no minimums." },
            { name: "Robinhood", icon: "📱", color: "indigo", desc: "Simple interface with fractional share investing starting at just $1." }
          ].map((node, i) => (
            <div key={i} className="flex items-center gap-6 p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group shadow-sm">
              <div className="w-14 h-14 bg-slate-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {node.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white m-0 text-lg">{node.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 m-0 leading-relaxed">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Step 2: Pick Your Logic</h3>
        
        <div className="space-y-12 mb-16">
          <div className="p-10 bg-slate-950 text-white rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-8xl font-black">ETF</div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Index Funds & ETFs
            </h4>
            <p className="text-slate-300 mb-10 leading-relaxed max-w-2xl">
              When you buy a share of an index fund or ETF, you instantly gain access to shares of a wide range of companies <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(VENTENY)</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <p className="text-[9px] font-black text-slate-500 mb-1 uppercase tracking-widest">Fidelity Zero</p>
                <p className="font-bold text-sm">Large Cap Index</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <p className="text-[9px] font-black text-slate-500 mb-1 uppercase tracking-widest">Schwab</p>
                <p className="font-bold text-sm">S&P 500 Index</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <p className="text-[9px] font-black text-slate-500 mb-1 uppercase tracking-widest">SPDR (SPY)</p>
                <p className="font-bold text-sm">S&P 500 ETF</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 bg-amber-50 dark:bg-amber-900/10 rounded-3xl border border-amber-100 dark:border-amber-500/20">
              <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-4 uppercase tracking-widest text-[10px]">Option A: Robo-Advisors</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
                Betterment or Wealthfront automatically manage a diversified portfolio based on your goals. They handle rebalancing for you.
              </p>
            </div>
            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-500/20">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-4 uppercase tracking-widest text-[10px]">Option B: IRA Nodes</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
                Start an IRA with no minimum balance <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>. Your $100 can be your first step toward tax-advantaged savings.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Step 3: Deploy Automation</h3>
        <div className="p-10 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[3rem] mb-16 shadow-sm">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-blue-600 dark:text-blue-400">Dollar-Cost Averaging (DCA)</h4>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Invest consistently over time rather than trying to time the market. If you can contribute $100 monthly instead of just once, your wealth-building potential grows substantially.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-5 py-2 bg-white dark:bg-zinc-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border dark:border-white/5 shadow-sm">Set it and forget it</span>
            <span className="px-5 py-2 bg-white dark:bg-zinc-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border dark:border-white/5 shadow-sm">Reduce emotional stress</span>
          </div>
        </div>

        <div className="p-12 bg-emerald-600 text-white rounded-[3.5rem] shadow-2xl shadow-emerald-500/20 mb-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-8 opacity-20 pointer-events-none text-9xl font-black italic">MIL</div>
          <h3 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">The Power of $100</h3>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-2xl mb-10">
            If you invested just <strong>$100 monthly</strong> with a 10% average return over 45 years, you could retire with <strong>over $1 million</strong> <span className="text-[10px] font-black text-emerald-300 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
          <p className="text-sm font-black uppercase tracking-widest text-emerald-200">Consistency &gt; Capital Amount</p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">Logic Filters: Avoid These</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: "High Fees", icon: "💸", desc: "Stick with platforms offering $0 commissions." },
            { label: "Stock Picking", icon: "🎲", desc: "Index funds provide better diversification for beginners." },
            { label: "Waiting", icon: "🛑", desc: "Starting today with $100 beats waiting to invest $1,000." }
          ].map((filter, i) => (
            <div key={i} className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm">
              <span className="text-4xl block mb-6">{filter.icon}</span>
              <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs">{filter.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 m-0 leading-relaxed">{filter.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Execute Now</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            The hardest part isn't the amount of money—it's simply taking that first step. Open an account this week, invest your $100 in a low-cost S&P 500 index fund, and you're officially an investor building toward your financial future.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default StartInvesting100;