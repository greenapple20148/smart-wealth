import React from 'react';
import ArticleLayout from '../ArticleLayout';

const IsStockInvestingRisky: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Is Investing in Stocks Risky for Beginners?" 
      category="Investing" 
      icon="🎲" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          The short answer is yes. Risk is the cost of entry for wealth building. However, in 2026, the real danger isn't volatility—it's <strong>capital misallocation</strong>.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">The Fundamental Axiom</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          The primary risk is the probability of losing purchasing power. Stocks fluctuate based on company performance and macro signals. There's always a risk you won't achieve your expected returns in your required timeframe <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(VENTENY)</span>.
        </p>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20 rounded-[2.5rem] mb-12 shadow-sm group">
          <h4 className="text-amber-900 dark:text-amber-400 font-black mb-4 mt-0 text-xl flex items-center gap-3 uppercase tracking-tighter">
            <span>⚖️</span> The Risk-Reward Matrix
          </h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed m-0">
            Stocks are high-velocity assets. They are significantly more volatile than bonds or cash, but the greater the <strong>systemic risk</strong> you assume, the higher the <strong>equity risk premium</strong> you can capture <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(Mintos)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Patience" Fallacy</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Time does not magically delete risk. Stocks do not get "safer" the longer you hold them—the range of possible outcomes simply widens <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter"> </span>. 
        </p>
        <div className="bg-slate-950 text-white p-10 rounded-[3rem] mb-16 shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">!</div>
          <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Volatility Simulation</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            Imagine an account growing from $10k to $20k over 19 years. In year 20, a <strong>20% correction</strong> wipes out $4,000. You still made money, but the tail-risk of a late-stage collapse is a permanent feature of the markets <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter"> </span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Risk Mitigation Protocol</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm hover:border-blue-500/30 transition-all">
            <h4 className="font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-[10px] text-blue-500">01. Diversification</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Single-stock picking is <strong>speculation</strong>. Use Index Funds or ETFs to own hundreds of companies. If one fails, the others buffer the draw-down <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm hover:border-emerald-500/30 transition-all">
            <h4 className="font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-[10px] text-emerald-500">02. DCA Velocity</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Dollar-Cost Averaging removes the "Market Timing" error. Invest on a schedule. You buy more when prices are low and less when they're high <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-tight">The "Trash" List: Speculative Traps</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { label: "Meme Stocks", icon: "🚀" },
            { label: "Penny Stocks", icon: "🕳️" },
            { label: "Binary Options", icon: "💣" },
            { label: "Leveraged ETFs", icon: "📈" },
            { label: "Hype-Trading", icon: "⏱️" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 rounded-xl text-center">
              <p className="text-xl mb-1">{item.icon}</p>
              <p className="font-black text-rose-900 dark:text-rose-400 text-[10px] uppercase tracking-widest m-0">{item.label}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Prerequisite Readiness</h3>
        <div className="space-y-4 mb-16">
          <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-3xl flex gap-8 items-center group">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 group-hover:scale-110 transition-transform">🛡️</div>
            <div>
              <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-xs">Emergency Shield First</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0">Never invest money you might need in the next 3 years. Maintain 3-6 months of liquid cash in an HYSA <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.</p>
            </div>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-3xl flex gap-8 items-center group">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 group-hover:scale-110 transition-transform">✂️</div>
            <div>
              <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-xs">Zero High-Interest Debt</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0">Paying 20% on credit cards while hoping for 10% in stocks is a mathematical failure. Kill the debt first.</p>
            </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            The greatest risk is <strong>failing to invest</strong>. Inflation is a guaranteed 3-4% loss every year. Capture market beta with low-cost index funds, ignore the daily noise, and let the multi-decade power of compound growth build your legacy.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default IsStockInvestingRisky;