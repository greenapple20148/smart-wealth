import React from 'react';

const Hero: React.FC = () => {
  const noisePattern = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

  return (
    <section className="relative overflow-hidden bg-white dark:bg-midnight py-24 sm:py-36">
      {/* Flash UI Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-100 dark:opacity-80">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/20 dark:bg-cyan-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 dark:bg-blue-700/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div style={{ backgroundImage: `url("${noisePattern}")` }} className="absolute inset-0 opacity-[0.03] dark:opacity-[0.15] brightness-100 contrast-150 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse:60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next-Gen Financial Intelligence
        </div>
        
        <h1 className="text-5xl sm:text-8xl font-black tracking-tight text-slate-950 dark:text-white mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Build Wealth at the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Speed of Flash.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 dark:text-zinc-400 mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Premium, independent research for the modern beginner. Master the US markets and credit system with high-performance guides.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <a href="#guides" className="group relative px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-black font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95">
            Start Learning Now
          </a>
          <a href="#credit-cards" className="px-8 py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-md transition-all hover:bg-slate-200 dark:hover:bg-white/10 active:scale-95">
            Compare Credit Cards
          </a>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 dark:border-white/5 flex flex-wrap justify-center gap-12 text-slate-400 dark:text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em] animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:text-blue-500 dark:group-hover:text-cyan-300 group-hover:border-blue-500/30 transition-colors">US</div>
            Verified Data
          </div>
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 group-hover:border-blue-500/30 transition-colors">0</div>
            Beginner Ready
          </div>
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-colors">★</div>
            Expert Verified
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;