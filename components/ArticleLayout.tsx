
import React from 'react';

interface ArticleLayoutProps {
  title: string;
  category: string;
  icon?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ title, category, icon, onClose, children }) => {
  const noisePattern = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";
  
  // High-quality finance abstract image
  const backdropUrl = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80`;

  return (
    <div className="w-full bg-white dark:bg-midnight pb-20 animate-in fade-in duration-700">
      {/* Article Header (Full-Page Hero) - Flash UI Style */}
      <div className="relative h-[45vh] sm:h-[60vh] bg-slate-950 dark:bg-midnight overflow-hidden flex flex-col items-center justify-center">
        {/* Dynamic Mesh Overlays */}
        <div style={{ backgroundImage: `url("${noisePattern}")` }} className="absolute inset-0 opacity-20 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950 dark:from-black/40 dark:via-black/70 dark:to-midnight z-10" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-30 flex flex-col items-center text-center px-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-6xl mb-8 animate-bounce-short shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            {icon || '📝'}
          </div>
          <span className="px-4 py-1.5 bg-blue-600 dark:bg-cyan-500 text-white dark:text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            {category}
          </span>
          <h2 className="text-4xl sm:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter max-w-6xl">
            {title}
          </h2>
        </div>

        <img 
          src={backdropUrl} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125" 
          alt="Article Backdrop" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80';
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 relative z-40">
        <div className="bg-white dark:bg-zinc-950 rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-2xl border border-slate-100 dark:border-white/5">
          
          {/* Controls */}
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 dark:border-white/5 pb-8">
            <button 
              onClick={onClose}
              className="group flex items-center gap-3 text-slate-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-cyan-400 font-black text-xs uppercase tracking-widest transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-cyan-50 group-hover:text-white dark:group-hover:text-black transition-all">
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              Back to Home
            </button>
            <div className="hidden sm:flex items-center gap-4 text-slate-400 dark:text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              <span>Read Time: 6 Min</span>
              <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-zinc-800"></div>
              <span>Verified 2026 Edition</span>
            </div>
          </div>

          <div className="article-body font-medium text-slate-700 dark:text-zinc-300 leading-loose">
            {children}
          </div>

          {/* End of Guide Visual */}
          <div className="mt-24 pt-16 border-t-2 border-slate-50 dark:border-white/5 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-50 dark:bg-cyan-500/5 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
              🎯
            </div>
            <h4 className="text-3xl font-black text-slate-950 dark:text-white mb-4 uppercase tracking-tighter">Objective <span className="text-blue-600 dark:text-cyan-400">Complete</span></h4>
            <p className="text-slate-400 dark:text-zinc-500 mb-10 max-w-md font-bold text-sm leading-relaxed">
              Knowledge is alpha. You've completed this guide. Ready for the next phase of your wealth building?
            </p>
            <button 
              onClick={onClose}
              className="px-12 py-5 bg-slate-950 dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-600 dark:hover:bg-cyan-50 transition-all shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30 hover:-translate-y-1 active:scale-95"
            >
              Return to Intelligence Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
