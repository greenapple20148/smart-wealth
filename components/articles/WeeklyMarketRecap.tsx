import React from 'react';
import ArticleLayout from '../ArticleLayout';

const WeeklyMarketRecap: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Weekly Market Recap: Rotation & AI Disruption" 
      category="Market News" 
      icon="📊" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Intelligence Briefing: Week of February 9-14, 2026</p>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
          Markets are navigating a complex intersection of cooling inflation and structural rotation. While the headline indices remain stagnant, the underlying architecture of the market is shifting rapidly from mega-cap tech toward small caps and value sectors.
        </p>

        {/* Market Performance Node */}
        <section className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">📈</span>
            Market Performance
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="p-8 bg-slate-950 text-white rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute right-0 top-0 p-8 opacity-5 text-8xl font-black italic select-none">SPX</div>
               <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">S&P 500 Performance</p>
               <h4 className="text-4xl font-black tracking-tighter mb-4">+0.05%</h4>
               <p className="text-sm text-slate-400 leading-relaxed m-0">The index gained just five basis points for the week, but the <strong>Equal-Weight S&P 500</strong> notched a fresh all-time high, signaling a broader participation move <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">(Yahoo Finance)</span>.</p>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border dark:border-white/5 shadow-sm">
               <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">Global Momentum</p>
               <div className="space-y-4">
                 <div className="flex justify-between items-center pb-3 border-b dark:border-white/5">
                   <span className="text-xs font-bold text-slate-900 dark:text-white">Russell 2000 (Small Caps)</span>
                   <span className="text-sm font-black text-emerald-500">+7.5% YTD</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 border-b dark:border-white/5">
                   <span className="text-xs font-bold text-slate-900 dark:text-white">European Bourses (UK/EU)</span>
                   <span className="text-sm font-black text-emerald-500">+0.75% Week</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-xs font-bold text-slate-900 dark:text-white">Nasdaq (Tech Heavy)</span>
                   <span className="text-sm font-black text-rose-500">-1.0% YTD</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Economic Data Grid */}
        <section className="mb-20 p-10 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[3.5rem]">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-10 text-center">Critical Economic Inputs</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[10px] font-black text-blue-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-6">Inflation Report (CPI)</h4>
              <div className="space-y-6">
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                  Headline CPI rose <strong>0.2%</strong>, coming in below estimates. Year-over-year inflation now sits at <strong>2.4%</strong>, the lowest read since May 2025 <span className="text-[10px] font-black opacity-50 uppercase">(LendingTree)</span>.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-zinc-950 rounded-2xl border dark:border-white/5 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Monthly CPI</p>
                    <p className="text-xl font-bold text-emerald-500">0.2%</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-zinc-950 rounded-2xl border dark:border-white/5 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Core CPI</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">0.3%</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-blue-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-6">Labor Market Node</h4>
              <div className="space-y-6">
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                  January payrolls added <strong>52,000 jobs</strong>. However, annual revisions may cut previous payrolls by nearly 1 million jobs. Unemployment held steady at <strong>4.4%</strong> <span className="text-[10px] font-black opacity-50 uppercase">(Bankrate)</span>.
                </p>
                <div className="p-6 bg-white dark:bg-zinc-950 rounded-2xl border dark:border-white/5">
                   <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Unemployment Rate</span>
                      <span className="text-lg font-black text-slate-900 dark:text-white">4.4%</span>
                   </div>
                   <div className="w-full h-1 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-[44%] h-full bg-blue-500"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Story: AI Disruption */}
        <section className="mb-20">
          <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute right-0 bottom-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">AI</div>
            <h3 className="text-3xl font-black text-cyan-400 mb-6 mt-0 uppercase tracking-tighter">The Main Story: AI Disruption & Rotation</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 font-medium">
              Selling pressure mounted this week as concerns intensified around AI disruption. The fallout spilled beyond tech into real estate, logistics, and wealth management <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(U.S. News & World Report)</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/30 transition-all">
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">Earnings Alpha</p>
                <h4 className="text-xl font-bold mb-3">79% Beat Rate</h4>
                <p className="text-sm text-slate-400 m-0 leading-relaxed">Despite volatility, the majority of S&P 500 companies have beaten estimates with an average upside of 8.2% <span className="text-[9px] opacity-50 uppercase">(Yahoo Finance)</span>.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-emerald-500/30 transition-all">
                <p className="text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-4">Valuation Shift</p>
                <h4 className="text-xl font-bold mb-3">Small Cap Surge</h4>
                <p className="text-sm text-slate-400 m-0 leading-relaxed">Investors are shifting capital away from "Expensive Tech" toward Small-Caps and International equity nodes, up 7% YTD.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed Income */}
        <section className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Fixed Income Node Analysis</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center group hover:border-blue-500/30 transition-all">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">U.S. 10-Year Yield</p>
              <p className="text-3xl font-black text-rose-500">-15 Bps</p>
              <p className="text-xs text-slate-500 mt-2 font-bold uppercase">Largest developed drop</p>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center group hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">U.S. 2-Year Yield</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white">3.4%</p>
              <p className="text-xs text-slate-500 mt-2 font-bold uppercase">Lowest since 2022</p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col justify-center">
              <p className="text-xs text-slate-600 dark:text-slate-400 m-0 font-medium leading-relaxed italic">
                Softer inflation data has significantly boosted bond markets and increased 2026 rate-cut expectations.
              </p>
            </div>
          </div>
        </section>

        {/* What's Ahead Dashboard */}
        <section className="mb-20">
           <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">NEXT</div>
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-8 mt-0 uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Strategic Forecast: What's Ahead
              </h4>
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white dark:bg-zinc-950 rounded-xl flex items-center justify-center font-bold text-amber-600 shadow-sm shrink-0">FED</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">Fed meeting minutes expected next week—one of the final briefings under <strong>Chairman Powell</strong> before his term ends in May <span className="text-[10px] font-black opacity-50 uppercase">(Bankrate)</span>.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white dark:bg-zinc-950 rounded-xl flex items-center justify-center font-bold text-amber-600 shadow-sm shrink-0">DAT</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">Major prints on deck: Empire State Index, jobless claims, and housing data.</p>
                  </div>
                </div>
                <div className="p-6 bg-white/50 dark:bg-zinc-900/50 rounded-[2rem] border border-amber-200/30">
                  <p className="text-[10px] font-black text-amber-600 uppercase mb-4 tracking-widest">Earnings Node Target</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-sm font-bold dark:text-white">Walmart (WMT)</span>
                       <span className="px-2 py-1 bg-amber-500 text-white text-[9px] font-black rounded uppercase">Retail Health</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm font-bold dark:text-white">Deere (DE)</span>
                       <span className="px-2 py-1 bg-blue-500 text-white text-[9px] font-black rounded uppercase">Industrial Pulse</span>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* Strategic Verdict */}
        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">The Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Markets are navigating conflicting signals: softer inflation supports lower rates, but structural tech weakness is creating a massive rotation into <strong>Value and Small-Cap equities</strong>. Beginners should focus on maintaining diversified index nodes while yields find their new equilibrium.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default WeeklyMarketRecap;