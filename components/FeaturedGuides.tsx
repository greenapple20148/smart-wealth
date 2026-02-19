import React from 'react';

interface FeaturedGuidesProps {
  onSelect: (guide: { title: string; category: string; icon?: string }) => void;
}

const Icons = {
  Investing: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
  ),
  Credit: () => (
    <svg xmlns="http://www.w3.org/2000/center" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
  ),
  Retirement: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 10V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"></path><path d="M4 18h16"></path><path d="M4 10v8"></path><path d="M20 10v8"></path><path d="M8 14v4"></path><path d="M12 14v4"></path><path d="M16 14v4"></path></svg>
  )
};

const FeaturedGuides: React.FC<FeaturedGuidesProps> = ({ onSelect }) => {
  const guides = [
    {
      title: "Investment Apps for the Next-Gen",
      category: "Investing",
      icon: "Investing",
      description: "Speed-run your brokerage setup. We compare top-tier apps with $0 fees and fractional trading.",
      cta: "Explore Apps",
      color: "bg-blue-500/5 dark:bg-cyan-500/[0.03]",
      accent: "text-blue-600 dark:text-cyan-400",
      border: "border-blue-500/10 dark:border-cyan-500/10",
      glow: "hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/20"
    },
    {
      title: "Credit Hack: First-Time Cards",
      category: "Credit",
      icon: "Credit",
      description: "Build score at 2x speed. See picks for students and beginners with zero history but big goals.",
      cta: "View Cards",
      color: "bg-indigo-500/5 dark:bg-blue-500/[0.03]",
      accent: "text-indigo-600 dark:text-blue-400",
      border: "border-indigo-500/10 dark:border-blue-500/10",
      glow: "hover:shadow-indigo-500/10 dark:hover:shadow-blue-500/20"
    },
    {
      title: "Roth IRA: Tax-Free Alpha",
      category: "Retirement",
      icon: "Retirement",
      description: "The ultimate long-term trade. Maximize growth with accounts that pay the tax-man exactly zero.",
      cta: "Setup IRA",
      color: "bg-violet-500/5 dark:bg-indigo-500/[0.03]",
      accent: "text-violet-600 dark:text-indigo-400",
      border: "border-violet-500/10 dark:border-indigo-500/10",
      glow: "hover:shadow-violet-500/10 dark:hover:shadow-indigo-500/20"
    }
  ];

  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="text-blue-600 dark:text-cyan-400 animate-pulse">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-2 10h3L11 22l2-10h-3Z"/></svg>
        </div>
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter sm:text-5xl mt-4">
          High Performance <span className="text-slate-400 dark:text-zinc-500">Guides</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-6"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {guides.map((guide, idx) => {
          const IconComp = Icons[guide.icon as keyof typeof Icons];
          return (
            <div 
              key={idx} 
              className={`${guide.color} ${guide.border} border-2 rounded-[2rem] p-10 flex flex-col hover:border-slate-300 dark:hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden ${guide.glow} hover:-translate-y-2`}
            >
              <div className={`absolute top-0 right-0 p-8 ${guide.accent} opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none scale-150`}>
                <IconComp />
              </div>
              <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 flex items-center justify-center ${guide.accent} mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                <IconComp />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${guide.accent}`}>
                  {guide.category}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-blue-700 dark:group-hover:text-cyan-400 transition-colors">
                {guide.title}
              </h3>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-10 flex-grow">
                {guide.description}
              </p>
              <button 
                onClick={() => onSelect({ ...guide, icon: undefined })}
                className={`inline-flex items-center justify-between px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest ${guide.accent} bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black group-hover:border-slate-950 dark:group-hover:border-white transition-all shadow-sm`}
              >
                {guide.cta}
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedGuides;