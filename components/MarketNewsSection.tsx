import React from 'react';

interface NewsItem {
  title: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
}

interface MarketNewsSectionProps {
  onSelect: (item: NewsItem) => void;
}

const MarketNewsSection: React.FC<MarketNewsSectionProps> = ({ onSelect }) => {
  const news: NewsItem[] = [
    {
      title: "Weekly Market Recap for Beginner Investors",
      category: "Recap",
      date: "Updated Today",
      readTime: "5 min read",
      icon: "🗞️"
    },
    {
      title: "What Today’s Fed Decision Means for New Investors",
      category: "Analysis",
      date: "2 hours ago",
      readTime: "4 min read",
      icon: "🏛️"
    },
    {
      title: "Why the S&P 500 Moved This Week",
      category: "Trends",
      date: "Yesterday",
      readTime: "3 min read",
      icon: "📊"
    },
    {
      title: "Top 5 Stocks to Watch This Month",
      category: "Watchlist",
      date: "May 1, 2024",
      readTime: "6 min read",
      icon: "👀"
    },
    {
      title: "Market Volatility Explained for Beginners",
      category: "Education",
      date: "May 1, 2024",
      readTime: "7 min read",
      icon: "🎢"
    }
  ];

  // Using a stable, high-quality financial data visualization image
  const featuredImageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-sm font-bold mb-4 uppercase tracking-wider border dark:border-amber-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Market News & Analysis
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter sm:text-4xl">Stay Ahead of the <span className="text-amber-500">Market</span></h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Breaking down the complex world of finance into actionable insights for the everyday investor.
            </p>
          </div>
          <button className="text-amber-600 dark:text-amber-400 font-black text-xs uppercase tracking-widest hover:text-amber-700 dark:hover:text-amber-300 transition flex items-center gap-2 group">
            All Market Updates
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Feature News */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => onSelect(news[0])}
              className="group relative w-full text-left block bg-slate-900 rounded-[2.5rem] overflow-hidden min-h-[450px] shadow-2xl border dark:border-white/10"
            >
              <img 
                src={featuredImageUrl} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" 
                alt="Weekly Market Recap"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611974717482-9610c180007b?auto=format&fit=crop&q=80&w=1200';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-black rounded uppercase mb-4 inline-block tracking-widest shadow-xl">Weekly Recap</span>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[0.9] tracking-tighter group-hover:text-amber-400 transition-colors">
                  {news[0].title}
                </h3>
                <div className="flex items-center gap-6 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{news[0].readTime}</span>
                  <span>{news[0].date}</span>
                </div>
              </div>
            </button>
          </div>

          {/* Sidebar News */}
          <div className="space-y-6">
            {news.slice(1).map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => onSelect(item)}
                className="flex w-full text-left items-start gap-4 p-5 rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800/50 hover:border-amber-200 dark:hover:border-amber-500/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-2xl group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">{item.category}</span>
                    <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest">• {item.date}</span>
                  </div>
                  <h4 className="font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-tight">
                    {item.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketNewsSection;