
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const CryptoPulse: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Crypto Pulse: Bitcoin's Role in a Balanced Portfolio" 
      category="Crypto" 
      icon="₿" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Once a niche experiment for cypherpunks, Bitcoin has evolved into a legitimate asset class. In 2026, the question for most beginners isn't "Should I buy Bitcoin?" but "How much Bitcoin should I own?"
        </p>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black">BTC</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-amber-500 uppercase tracking-widest">Digital Gold Logic</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Bitcoin's value proposition rests on its <strong>absolute scarcity</strong>. Only 21 million will ever exist. Unlike the U.S. dollar, which can be printed, Bitcoin is a mathematically enforced "hard money" asset <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The Motley Fool)</span>.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-amber-500 font-black text-xs uppercase mb-2">Fixed Supply</p>
              <p className="text-sm m-0">No central bank can inflate away Bitcoin's value.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-blue-400 font-black text-xs uppercase mb-2">Decentralized</p>
              <p className="text-sm m-0">No single entity controls the network or your funds.</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tighter">The Allocation Spectrum</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
          For beginners, the key is to treat crypto as a high-volatility "satellite" position, not the core of your strategy.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm hover:border-emerald-500/30 transition-colors">
            <p className="text-4xl font-black text-emerald-500 mb-2">1%</p>
            <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">The Skeptic</p>
            <p className="text-xs text-slate-500 leading-relaxed">"Insurance" against extreme inflation without risking your core wealth.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm border-blue-500/20 ring-1 ring-blue-500/10">
            <p className="text-4xl font-black text-blue-500 mb-2">3-5%</p>
            <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">The Moderate</p>
            <p className="text-xs text-slate-500 leading-relaxed">Capturing upside while maintaining a standard index-fund-heavy portfolio.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl text-center shadow-sm hover:border-rose-500/30 transition-colors">
            <p className="text-4xl font-black text-rose-500 mb-2">10%+</p>
            <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">The Believer</p>
            <p className="text-xs text-slate-500 leading-relaxed">Requires high risk tolerance and a multi-decade time horizon.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Access Points for Beginners</h3>
        <div className="space-y-6 mb-16">
          <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-sm shrink-0">📊</div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1">Spot Bitcoin ETFs</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0">The easiest way to start. Buy symbols like <strong>IBIT</strong> or <strong>FBTC</strong> inside your regular brokerage or IRA <span className="text-[10px] font-black opacity-50 uppercase">(Gainify)</span>. No private keys needed.</p>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl shadow-sm shrink-0">📱</div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1">Direct Exchange Buying</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 m-0">Use Coinbase or Kraken to buy the actual asset. This allows you to eventually move it to a "cold wallet" for maximum security.</p>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-500/20 p-10 rounded-[3rem] mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 p-8 opacity-20 pointer-events-none text-9xl">🎢</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-rose-900 dark:text-rose-400">The Volatility Protocol</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Bitcoin can drop 50% in a week. If that thought makes you lose sleep, your allocation is too high. <strong>Only invest what you can afford to lose 100% of</strong> <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter">(NerdWallet)</span>. Beginners should use <strong>Dollar Cost Averaging</strong>—investing a set amount monthly regardless of price.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Flash Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Bitcoin has a place in the modern portfolio as an <strong>asymmetric bet</strong>. The downside is limited to what you put in, but the upside is potentially paradigm-shifting. Start with a 1-3% allocation in a <strong>Spot ETF</strong> and let time do the heavy lifting.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CryptoPulse;
