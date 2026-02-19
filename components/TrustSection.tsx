
import React from 'react';

const TrustIcons = {
  US: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4h8Z"/><path d="M12 16v-4"/></svg>
  ),
  Beginner: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5a4 4 0 0 0-4 4v6z"/><path d="M12 2v2"/><path d="M5 22v-2a7 7 0 0 1 2-5"/></svg>
  ),
  Independent: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 21v-4"/><path d="M12 12v-4"/><path d="M3 16h18"/></svg>
  ),
  Transparent: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 8V5"/><path d="M12 19v-3"/><path d="M8 12H5"/><path d="M19 12h-3"/></svg>
  )
};

const TrustSection: React.FC = () => {
  const points = [
    {
      title: "US-Focused Financial Research",
      desc: "Our data and recommendations are tailored specifically for the US market and tax laws.",
      icon: "US"
    },
    {
      title: "Beginner-Friendly Explanations",
      desc: "We skip the jargon and explain complex topics in plain English everyone can understand.",
      icon: "Beginner"
    },
    {
      title: "Independent Comparisons",
      desc: "Our reviews are based on objective criteria, ensuring you get the best tool for your needs.",
      icon: "Independent"
    },
    {
      title: "Transparent Disclosure",
      desc: "We are clear about how we make money so you can trust our recommendations.",
      icon: "Transparent"
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg mb-6">
            Verification Protocol
          </div>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter sm:text-5xl">Why Trust <span className="text-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Flash?</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium mt-6">We provide high-quality financial education to help you achieve your goals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {points.map((point, idx) => {
            const IconComp = TrustIcons[point.icon as keyof typeof TrustIcons];
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-[2rem] flex items-center justify-center text-cyan-500 mb-8 shadow-sm group-hover:scale-110 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 transition-all border border-slate-100 dark:border-white/5">
                  <IconComp />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight leading-tight">{point.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{point.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 dark:border-white/5 backdrop-blur-xl">
           <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-cyan-500">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Affiliate Intelligence Disclosure</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-loose font-medium">
                  FinanceWise US is an independent, advertising-supported publisher and comparison service. We may earn a commission when you open accounts through our links. This compensation may impact how and where products appear on this site. Our editorial content is not influenced by advertisers. <span className="text-cyan-500 font-black not-italic ml-1 hover:underline cursor-pointer">Learn More about our protocol.</span>
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
