import React, { useState } from 'react';

interface LatestArticlesProps {
  onSelect: (article: { title: string; category: string; icon?: string }) => void;
  designSystem?: 'standard' | 'flash';
}

const ArticleIcons = {
  Savings: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
  ),
  Credit: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
  ),
  Investing: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
  ),
  Retirement: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 10V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"></path><path d="M4 18h16"></path><path d="M4 10v8"></path><path d="M20 10v8"></path></svg>
  ),
  Crypto: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M9 9h6"/><path d="M9 15h6"/></svg>
  ),
  Tax: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
  ),
  RealEstate: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21h18"/><path d="M9 21V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12"/><path d="M3 7l9-4 9 4"/></svg>
  )
};

const LatestArticles: React.FC<LatestArticlesProps> = ({ onSelect, designSystem = 'flash' }) => {
  const [showAll, setShowAll] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";

  const articles = [
    { title: "The Fed's Next Move: 2026 Rate Forecast", date: "May 15, 2026", cat: "Investing", iconType: "Investing", imageId: "photo-1526304640581-d334cdbdf456" },
    { title: "Rental Arbitrage: Scaling Your Cash Flow", date: "May 14, 2026", cat: "RealEstate", iconType: "RealEstate", imageId: "photo-1560518883-ce09059eeffa" },
    { title: "The Dividend Growth Manual: 10% Yield Targets", date: "May 13, 2026", cat: "Investing", iconType: "Investing", imageId: "photo-1590283603385-17ffb3a7f29f" },
    { title: "High-Yield Tactics: Best Accounts for 2026", date: "May 12, 2026", cat: "Savings", iconType: "Savings", imageId: "photo-1534951009808-df83f7ad9a98" },
    { title: "Amex Gold: The Premium Spend Analysis", date: "May 10, 2026", cat: "Credit", iconType: "Credit", imageId: "photo-1563013544-824ae1b704d3" },
    { title: "Candle Speed-Reading: 5-Minute Chart Mastery", date: "May 08, 2026", cat: "Investing", iconType: "Investing", imageId: "photo-1611974717482-9610c180007b" },
    { title: "The 4% Rule: Retirement Math Re-evaluated", date: "May 05, 2026", cat: "Retirement", iconType: "Retirement", imageId: "photo-1507525428034-b723cf961d3e" },
    { title: "Vanguard Strategies: Targeting the Date", date: "May 02, 2026", cat: "Retirement", iconType: "Retirement", imageId: "photo-1454165833467-03a68d746ef3" },
    { title: "Credit Score Debug: Disputing the Errors", date: "April 28, 2026", cat: "Credit", iconType: "Credit", imageId: "photo-1563986768609-322da13575f3" },
    { title: "Crypto Pulse: Bitcoin's Role in a Balanced Portfolio", date: "April 25, 2026", cat: "Crypto", iconType: "Crypto", imageId: "photo-1518546305927-5a555bb7020d" },
    { title: "Real Estate Micro-Investing: Crowdfunding Explained", date: "April 20, 2026", cat: "RealEstate", iconType: "RealEstate", imageId: "photo-1486406146926-c627a92ad1ab" },
    { title: "Tax-Loss Harvesting: How to Lower Your IRS Bill", date: "April 15, 2026", cat: "Tax", iconType: "Tax", imageId: "photo-1554224154-26032fb689ed" },
    { title: "HYSA vs. CD: Which is Better for Your Cash?", date: "April 10, 2026", cat: "Savings", iconType: "Savings", imageId: "photo-1579621970563-ebec7560ff3e" },
    { title: "Student Loan Strategy: Forgiveness vs. Payoff", date: "April 05, 2026", cat: "Savings", iconType: "Savings", imageId: "photo-1541339907198-e08756ebafe1" },
    { title: "The Index Fund Revolution: VOO vs VTI Deep Dive", date: "March 30, 2026", cat: "Investing", iconType: "Investing", imageId: "photo-1579532566591-92aa0086bc77" },
    { title: "Emergency Fund 2.0: Investing Your Safety Net?", date: "March 25, 2026", cat: "Savings", iconType: "Savings", imageId: "photo-1501167786227-4cba60f6d58f" },
    { title: "Side Hustle Tax Guide: Don't Get Caught Unprepared", date: "March 20, 2026", cat: "Tax", iconType: "Tax", imageId: "photo-1450101499163-c8848c66ca85" },
    { title: "Credit Card Churning: A Beginner's Guide to Points", date: "March 15, 2026", cat: "Credit", iconType: "Credit", imageId: "photo-1503220317375-aaad61436b1b" }
  ];

  const visibleArticles = showAll ? articles : articles.slice(0, 10);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = fallbackImage;
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Fresh Intel</div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase sm:text-5xl">Latest <span className="text-slate-400 dark:text-zinc-500">Entries</span></h2>
          </div>
          <button onClick={() => setShowAll(!showAll)} className="px-8 py-3 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-950 dark:text-white hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all shadow-sm flex items-center gap-2">
            {showAll ? "[ Close Archive ]" : "View Archive"}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {visibleArticles.map((art, idx) => {
            const IconComp = ArticleIcons[art.iconType as keyof typeof ArticleIcons] || ArticleIcons.Investing;
            
            if (designSystem === 'standard') {
              return (
                <article key={idx} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 hover:shadow-xl transition-all">
                  <button onClick={() => onSelect({ title: art.title, category: art.cat })} className="w-full text-left">
                    <div className="h-52 bg-slate-200">
                      <img 
                        src={`https://images.unsplash.com/${art.imageId}?auto=format&fit=crop&w=800&q=80`} 
                        className="w-full h-full object-cover" 
                        alt={art.title} 
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-black mb-3">{art.title}</h3>
                      <span className="text-[10px] font-black text-blue-500 uppercase">{art.cat}</span>
                    </div>
                  </button>
                </article>
              );
            }

            return (
              <article key={idx} className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border-2 border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${(idx % 10) * 50}ms` }}>
                <button onClick={() => onSelect({ title: art.title, category: art.cat })} className="w-full text-left block">
                  <div className="h-52 relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-cyan-900/20 transition-colors duration-500 z-10"></div>
                    <img 
                      src={`https://images.unsplash.com/${art.imageId}?auto=format&fit=crop&w=800&q=80`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                      alt={art.title} 
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="p-1.5 bg-white dark:bg-slate-900 rounded-lg text-cyan-500 shadow-xl border dark:border-white/10 scale-90"><IconComp /></span>
                      <span className="px-2.5 py-1 bg-white dark:bg-slate-900 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-xl">{art.cat}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[9px] text-slate-400 mb-2 font-black uppercase tracking-[0.1em]">{art.date} — 4 MIN READ</p>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-cyan-600 transition-colors h-14 overflow-hidden">{art.title}</h3>
                    <div className={`inline-flex items-center justify-between px-5 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest text-slate-400 bg-slate-50 dark:bg-zinc-950 border border-slate-100 dark:border-white/5 group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shadow-sm w-full`}>
                      Full Analysis
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;