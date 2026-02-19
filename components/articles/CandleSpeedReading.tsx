
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const CandleSpeedReading: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Candle Speed-Reading: 5-Minute Chart Mastery" 
      category="Investing" 
      icon="📉" 
      onClose={onClose}
    >
      <div className="prose prose-slate max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          To the untrained eye, a stock chart is a mess of noise. To a master, it's a language. "Candle Speed-Reading" is the skill of looking at a 5-minute interval and instantly knowing who is in control: the bulls or the bears.
        </p>

        <div className="p-10 bg-slate-950 text-white rounded-[3rem] mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">🕯️</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-cyan-400 uppercase tracking-widest">Anatomy of a Signal</h3>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-32 h-64 border-2 border-cyan-500/30 rounded-xl relative bg-slate-900/50 flex flex-col items-center justify-center p-4">
              <div className="w-1 h-12 bg-cyan-400 mb-[-1px]"></div>
              <div className="w-12 h-24 bg-cyan-500/20 border-2 border-cyan-500 rounded-lg flex items-center justify-center font-black text-cyan-400 text-xs">BODY</div>
              <div className="w-1 h-12 bg-cyan-400 mt-[-1px]"></div>
              
              <div className="absolute top-0 left-full ml-4 whitespace-nowrap text-[10px] font-black uppercase text-slate-500">High</div>
              <div className="absolute top-1/4 left-full ml-4 whitespace-nowrap text-[10px] font-black uppercase text-cyan-400">Open/Close</div>
              <div className="absolute bottom-1/4 left-full ml-4 whitespace-nowrap text-[10px] font-black uppercase text-cyan-400">Close/Open</div>
              <div className="absolute bottom-0 left-full ml-4 whitespace-nowrap text-[10px] font-black uppercase text-slate-500">Low</div>
            </div>
            <div className="flex-grow space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed m-0">
                A single candle tells a story of <strong>negotiation</strong>. The wicks (shadows) represent failed attempts to push price, while the body represents the final agreement of that time period.
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black uppercase text-blue-400">Blue = Bullish</span>
                <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black uppercase text-rose-400">Red = Bearish</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-tighter">The Speed-Reader's Toolkit</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🔨</div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Hammer (The Rejection)</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              A small body with a long lower wick. It means sellers tried to crash the price, but buyers stepped in with overwhelming force. On a 5-minute chart, this often signals a bottom.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">⚖️</div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Doji (The Indecision)</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Open and close are almost identical. The market is "thinking." This is a warning sign to stop trading and wait for the next candle to "break" the Doji's range.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-rose-50 dark:bg-rose-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🌊</div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Engulfing (The Takeover)</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              When a new candle completely "swallows" the previous one. This is high-velocity momentum. A bullish engulfing after a downtrend is one of the strongest reversal signals in day trading.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🗼</div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Marubozu (The Conviction)</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              A large solid body with no wicks. One side completely dominated the 5 minutes from start to finish. Expect the trend to continue into the next candle.
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-12 rounded-[3.5rem] mb-20 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-8 opacity-20 pointer-events-none text-9xl font-black">5m</div>
          <h4 className="text-3xl font-black mb-8 mt-0 uppercase tracking-tighter">Strategic Alpha: The Trend Rule</h4>
          <p className="text-blue-50 text-xl leading-relaxed mb-10">
            "Never read a candle in isolation." A hammer pattern in the middle of a massive rally is noise. A hammer pattern hitting a <strong>200-day Moving Average</strong> or a previous support level is a <strong>High-Probability Entry</strong>.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <p className="font-bold text-sm mb-2">Context First</p>
              <p className="text-xs text-blue-100">Where is the price relative to history?</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <p className="font-bold text-sm mb-2">Volume Verification</p>
              <p className="text-xs text-blue-100">Big candles need big volume to be real.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Speed-Reading Exercise</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Open a chart of the S&P 500 (SPY) on the 5-minute time frame. Scan the last 20 candles. Don't look at the prices. Just look at the <strong>shapes</strong>.
        </p>
        <div className="space-y-4 mb-20">
          {[
            { step: "01", title: "Find the wicks", desc: "Where did the price try to go and fail? Long upper wicks mean the ceiling is heavy." },
            { step: "02", title: "Compare bodies", desc: "Are the candles getting larger or smaller? Shrinking bodies signal the move is tiring out." },
            { step: "03", title: "Spot the 'Gaps'", desc: "When the market opens higher or lower than it closed, it represents a 'Shock' to the system." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl items-center">
              <div className="text-2xl font-black text-cyan-500">{item.step}</div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 m-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-[2.5rem] mb-16 text-center">
          <h4 className="text-slate-900 dark:text-white font-bold mb-4 mt-0 text-xl flex items-center justify-center gap-3">
            <span>🛡️</span> Risk Warning
          </h4>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-0 max-w-2xl mx-auto">
            The 5-minute chart is high-velocity. Patterns can fail quickly. Never trade without a <strong>Stop Loss</strong>. Speed-reading is for identifying opportunities, but risk management is what keeps you in the game.
          </p>
        </div>

        <div className="p-12 bg-slate-900 text-white rounded-[3.5rem] text-center shadow-2xl mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">The Mastery Sequence</h4>
          <p className="text-slate-300 text-xl leading-relaxed mb-0">
            Start with the 1-hour chart to see the big picture. Drop to the 15-minute to see the setup. Use the <strong>5-minute chart</strong> to time your execution like a precision strike. That is the path of the Flash Trader.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CandleSpeedReading;
