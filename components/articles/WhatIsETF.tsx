
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const WhatIsETF: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="What Is an ETF and Should Beginners Invest?" 
      category="Investing" 
      icon="📦" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          An ETF (Exchange-Traded Fund) is one of the best investment options for beginners, offering simplicity, diversification, and low costs all in a single package.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">What Is an ETF?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          An ETF holds a collection of several stocks, bonds, commodities or a combination of these, and each share you purchase gives you a slice of all of them. This is an easy way to diversify your portfolio <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">(The Motley Fool)</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { title: "Instant Diversification", icon: "🌍", desc: "Gain exposure to hundreds of companies through one share, reducing individual stock risk <span class='text-[10px] font-black opacity-50 uppercase'>(NerdWallet)</span>." },
            { title: "Low Cost Ratio", icon: "💸", desc: "Most ETFs have expense ratios below 0.20%. Every dollar saved on fees is a dollar that compounds for you." },
            { title: "Strategic Simplicity", icon: "🧘", desc: "Package complex decisions into a single structure. Index rules handle the mechanics for you <span class='text-[10px] font-black opacity-50 uppercase'>(NerdWallet)</span>." },
            { title: "High Liquidity", icon: "🔓", desc: "Unlike mutual funds, you can buy and sell ETFs just like stocks throughout the trading day <span class='text-[10px] font-black opacity-50 uppercase'>(VENTENY)</span>." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm hover:border-blue-500/30 transition-all group">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span> {item.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] border border-white/10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">!</div>
          <h4 className="text-2xl font-bold text-rose-400 mb-4 mt-0 flex items-center gap-2">
            <span>⚠️</span> The Volatility Reality
          </h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            ETFs are a good choice for beginners, but if the ETF invests in stocks, <strong>it can lose money</strong>. These are market-based assets and are not government-insured <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>. However, the risk is spread across many holdings, making them safer than individual stock picking.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Starter" ETF Node</h3>
        <div className="space-y-4 mb-16">
          {[
            { ticker: 'VTI', name: 'Vanguard Total Stock Market', desc: 'The entire US economy in one ticker. Large, mid, and small-caps included.' },
            { ticker: 'VOO', name: 'Vanguard S&P 500', desc: 'Tracks the 500 largest US companies. Heavy weight in Big Tech leaders.' }
          ].map((etf, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl group hover:border-blue-500/30 transition-all">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">
                {etf.ticker}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{etf.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0">{etf.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Verdict</h4>
          <p className="text-blue-50 text-xl leading-relaxed mb-0">
            <strong>Absolutely.</strong> ETFs are great for experts and beginners alike. They're inexpensive, less risky than individual stocks <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(The Motley Fool)</span>, and provide a reliable path to building wealth by owning a piece of the entire economy's success.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default WhatIsETF;
