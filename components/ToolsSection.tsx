
import React from 'react';

interface ToolsSectionProps {
  onSelect: (tool: { title: string; category: string; icon?: string }) => void;
  designSystem?: 'standard' | 'flash';
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ onSelect, designSystem = 'flash' }) => {
  const tools = [
    { title: "401k Calculator", category: "Calculators", icon: "📈", desc: "Project your retirement nest egg with employer match optimization." },
    { title: "Mortgage Calculator", category: "Calculators", icon: "🏠", desc: "Calculate monthly payments and total interest for your future home." },
    { title: "Auto Loan Calculator", category: "Calculators", icon: "🚗", desc: "Compare terms and find your monthly budget for your next vehicle." },
    { title: "Compound Interest Calculator", category: "Calculators", icon: "💰", desc: "See the power of time and consistent investing in your portfolio." }
  ];

  return (
    <section className="py-24 bg-white dark:bg-midnight transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg mb-6">
            Interactive Intelligence
          </div>
          <h2 className="text-4xl font-black text-slate-950 dark:text-white uppercase tracking-tighter sm:text-5xl">
            Precision <span className="text-cyan-500">Calculators.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, idx) => {
            if (designSystem === 'standard') {
              return (
                <button key={idx} onClick={() => onSelect(tool)} className="group p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-[2.5rem] text-left hover:shadow-xl transition-all">
                  <div className="text-3xl mb-6">{tool.icon}</div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{tool.title}</h3>
                  <p className="text-xs text-slate-500 mb-6">{tool.desc}</p>
                </button>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => onSelect(tool)}
                className="group p-10 bg-cyan-500/[0.03] border-2 border-cyan-500/10 rounded-[2rem] text-left hover:border-slate-300 dark:hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.1)] relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-8 text-cyan-500 opacity-5 pointer-events-none scale-[2.5] italic font-black">
                  {tool.icon}
                </div>
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-all shadow-sm border border-slate-100 dark:border-white/10">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-cyan-500 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-relaxed mb-10 flex-grow">
                  {tool.desc}
                </p>
                <div className="inline-flex items-center justify-between px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest text-cyan-500 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-sm">
                  Run Algorithm
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
