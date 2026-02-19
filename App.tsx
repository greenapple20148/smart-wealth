
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGuides from './components/FeaturedGuides';
import BeginnerSection from './components/BeginnerSection';
import CreditCardSection from './components/CreditCardSection';
import MortgageSection from './components/MortgageSection';
import MarketSnapshot from './components/MarketSnapshot';
import MarketNewsSection from './components/MarketNewsSection';
import EmailCapture from './components/EmailCapture';
import TrustSection from './components/TrustSection';
import LatestArticles from './components/LatestArticles';
import ToolsSection from './components/ToolsSection';
import Footer from './components/Footer';
import ArticleDispatcher from './components/ArticleDispatcher';

const SEARCHABLE_CONTENT = [
  // Core Interface
  { title: "Compare Credit Cards", category: "Tools", icon: "📊" },

  // Investing Section
  { title: "How to Start Investing with $100 in the US", category: "Investing", icon: "📈" },
  { title: "What Is a Roth IRA and How Does It Work?", category: "Retirement", icon: "🏦" },
  { title: "Roth IRA vs Traditional IRA for Beginners", category: "Retirement", icon: "⚖️" },
  { title: "How Compound Interest Builds Wealth", category: "Investing", icon: "📈" },
  { title: "What Is an ETF and Should Beginners Invest?", category: "Investing", icon: "📦" },
  { title: "Is Investing in Stocks Risky for Beginners?", category: "Investing", icon: "🎲" },
  { title: "How Taxes Work on Investments", category: "Investing", icon: "📝" },
  { title: "Index Fund Revolution: VOO vs VTI Deep Dive", category: "Investing", icon: "📦" },
  { title: "Candle Speed-Reading: 5-Minute Chart Mastery", category: "Investing", icon: "📉" },
  
  // Credit Cards Section
  { title: "Best Credit Cards for Beginners in the US", category: "Credit", icon: "🏆" },
  { title: "Best Credit Cards for a 600 Credit Score", category: "Credit", icon: "📊" },
  { title: "Best Credit Cards for Students with No Credit", category: "Credit", icon: "🎓" },
  { title: "Best Cash Back Credit Cards for Beginners", category: "Rewards", icon: "💵" },
  { title: "Best 0% APR Credit Cards for Large Purchases", category: "Rewards", icon: "🛍️" },
  { title: "Best Credit Cards for Building Credit Fast", category: "Building Credit", icon: "⚡" },
  { title: "Secured vs Unsecured Credit Cards Explained", category: "Building Credit", icon: "🔒" },
  { title: "How to Get Approved for Your First Credit Card", category: "Building Credit", icon: "✅" },
  { title: "Credit Utilization: What Percentage Is Best?", category: "Credit Logic", icon: "📉" },
  { title: "How Many Credit Cards Should You Have?", category: "Credit Logic", icon: "💳" },
  { title: "Best Travel Credit Cards for Beginners", category: "Rewards", icon: "✈️" },
  { title: "Best No-Annual-Fee Credit Cards", category: "Rewards", icon: "🆓" },
  { title: "Can You Apply for Multiple Credit Cards at Once?", category: "Credit Logic", icon: "📑" },
  { title: "How Hard Inquiries Affect Your Credit Score", category: "Credit Logic", icon: "🔍" },
  { title: "What Is a Secured Credit Card and Who Needs One?", category: "Building Credit", icon: "🛡️" },
  { title: "Amex Gold: The Premium Spend Analysis", category: "Credit", icon: "💳" },
  { title: "How to Build Credit from Scratch in 2026", category: "Credit", icon: "🏗️" },
  { title: "What Is a Good Credit Score in the US?", category: "Credit", icon: "🎯" },
  { title: "What Happens If You Miss a Credit Card Payment?", category: "Credit", icon: "⚠️" },
  { title: "How to Improve Your Credit Score by 50 Points", category: "Credit", icon: "🚀" },
  
  // Mortgage Section
  { title: "What Is a Mortgage and How Does It Work?", category: "Basics", icon: "🏠" },
  { title: "Fixed vs Adjustable Rate Mortgages Explained", category: "Basics", icon: "⚖️" },
  { title: "How Much Home Can You Afford on $50k Salary?", category: "Planning", icon: "💰" },
  { title: "How Credit Score Affects Mortgage Approval", category: "Credit & Approval", icon: "📊" },
  { title: "5 Common Mortgage Mistakes Beginners Make", category: "Strategy", icon: "⚠️" },
  { title: "How to Save for a Down Payment Quickly", category: "Planning", icon: "🏦" },
  { title: "How to Refinance Your Mortgage", category: "Strategy", icon: "🔄" },
  { title: "How to Get Pre-Approved for a Mortgage", category: "Credit & Approval", icon: "✅" },
  
  // Tools Section
  { title: "401k Calculator", category: "Tools", icon: "📈" },
  { title: "Mortgage Calculator", category: "Tools", icon: "🏠" },
  { title: "Auto Loan Calculator", category: "Tools", icon: "🚗" },
  { title: "Compound Interest Calculator", category: "Tools", icon: "💰" },

  // Other Articles
  { title: "High-Yield Tactics: Best Accounts for 2026", category: "Savings", icon: "💰" },
  { title: "The 4% Rule: Retirement Math Re-evaluated", category: "Retirement", icon: "🏖️" },
  { title: "Vanguard Strategies: Targeting the Date", category: "Retirement", icon: "🏹" },
  { title: "Credit Score Debug: Disputing the Errors", category: "Credit", icon: "📋" },
  { title: "Crypto Pulse: Bitcoin's Role in a Balanced Portfolio", category: "Crypto", icon: "₿" },
  { title: "Real Estate Micro-Investing: Crowdfunding Explained", category: "Real Estate", icon: "🏘️" },
  { title: "Side Hustle Tax Guide: Don't Get Caught Unprepared", category: "Tax", icon: "🧾" },
  { title: "Student Loan Strategy: Forgiveness vs. Payoff", category: "Savings", icon: "🎓" },
  { title: "HYSA vs. CD: Which is Better for Your Cash?", category: "Savings", icon: "🏦" },
  { title: "Tax-Loss Harvesting: How to Lower Your IRS Bill", category: "Tax", icon: "✂️" },
  { title: "How to Budget on a $40,000 Salary", category: "Budgeting", icon: "📋" },
  { title: "How to Save Your First $10,000", category: "Budgeting", icon: "💰" },
  { title: "Emergency Fund: How Much Do You Really Need?", category: "Budgeting", icon: "🛡️" }
];

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<{title: string; category: string; icon?: string} | null>(null);
  const [designSystem, setDesignSystem] = useState<'standard' | 'flash'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('designSystem') as 'standard' | 'flash') || 'flash';
    }
    return 'flash';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('designSystem', designSystem);
  }, [designSystem]);

  // Global event listener for internal tool selection
  useEffect(() => {
    const handleToolSelect = (e: any) => {
      setSelectedArticle(e.detail);
    };
    window.addEventListener('selectArticle', handleToolSelect);
    return () => window.removeEventListener('selectArticle', handleToolSelect);
  }, []);

  useEffect(() => {
    if (selectedArticle) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedArticle]);

  const handleSelect = (article: { title: string; category: string; icon?: string }) => {
    setSelectedArticle(article);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleBackToHome = () => {
    setSelectedArticle(null);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleDesign = () => {
    setDesignSystem(prev => prev === 'standard' ? 'flash' : 'standard');
  };

  const handleLogoClick = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.history.pushState) {
        window.history.pushState('', '/', window.location.pathname);
    } else {
        window.location.hash = '';
    }
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return SEARCHABLE_CONTENT.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    ).slice(0, 8); // Limit results for clean UI
  }, [searchQuery]);

  // Handle ESC key to close search
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-midnight transition-colors duration-300">
      <Navbar 
        onSearchToggle={() => setIsSearchOpen(!isSearchOpen)} 
        theme={theme}
        onThemeToggle={toggleTheme}
        designSystem={designSystem}
        onDesignToggle={toggleDesign}
        onNavClick={handleBackToHome}
        onLogoClick={handleLogoClick}
      />
      
      <main className="flex-grow">
        {selectedArticle ? (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <ArticleDispatcher 
                article={selectedArticle} 
                onClose={handleBackToHome} 
              />
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <Hero />
            
            <div id="guides">
              <FeaturedGuides onSelect={handleSelect} />
            </div>

            <div id="investing-section" className="bg-white dark:bg-zinc-950/30 py-16 transition-colors scroll-mt-20">
               <BeginnerSection onSelect={handleSelect} designSystem={designSystem} />
            </div>

            <ToolsSection onSelect={handleSelect} designSystem={designSystem} />

            <div id="credit-cards" className="scroll-mt-20">
              <CreditCardSection onSelect={handleSelect} designSystem={designSystem} />
            </div>

            <div id="mortgages" className="scroll-mt-20">
              <MortgageSection onSelect={handleSelect} designSystem={designSystem} />
            </div>

            <MarketSnapshot onSelect={handleSelect} />
            
            <div id="market-news" className="scroll-mt-20">
              <MarketNewsSection onSelect={handleSelect} />
            </div>

            <div id="starter-kit" className="scroll-mt-20">
              <EmailCapture />
            </div>

            <TrustSection />

            <div id="latest-articles" className="scroll-mt-20">
              <LatestArticles onSelect={handleSelect} designSystem={designSystem} />
            </div>
          </div>
        )}
      </main>

      <Footer 
        onSelect={handleSelect} 
        onNavClick={handleBackToHome} 
        onLogoClick={handleLogoClick} 
      />

      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-md flex items-start justify-center pt-10 sm:pt-20 px-4 transition-all duration-300 animate-in fade-in">
          <div 
            className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 pb-0 relative">
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="text-xs font-black mb-6 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.3em]">Neural Search Interface</h2>
              
              <div className="relative group">
                <input 
                  type="text" 
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 'Roth IRA', 'Credit Score'..." 
                  className="w-full pl-14 pr-6 py-6 bg-slate-100 dark:bg-zinc-800 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xl font-medium dark:text-white placeholder:text-slate-400 dark:placeholder:zinc-500 transition-all"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 absolute left-5 top-5.5 text-slate-400 group-focus-within:text-cyan-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8 space-y-2">
              {searchQuery.length > 0 ? (
                searchResults.length > 0 ? (
                  searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(result)}
                      className="w-full text-left p-5 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl flex items-center gap-5 transition-all group animate-in slide-in-from-bottom-2"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-12 h-12 bg-white dark:bg-zinc-800 border dark:border-white/5 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                        {result.icon}
                      </div>
                      <div className="flex-grow">
                        <p className="font-bold text-slate-900 dark:text-white text-lg m-0 leading-tight group-hover:text-cyan-500 transition-colors">{result.title}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 m-0 mt-1">{result.category}</p>
                      </div>
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))
                ) : (
                  <div className="py-20 text-center text-slate-400 animate-in fade-in">
                    <p className="text-3xl mb-4">🌑</p>
                    <p className="font-bold uppercase tracking-widest text-xs">No records found for "{searchQuery}"</p>
                    <p className="text-[10px] mt-2 opacity-60">Try searching for broader terms like 'Investing' or 'Credit'</p>
                  </div>
                )
              ) : (
                <div className="py-12 space-y-6">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center mb-8">Popular Intelligence Nodes</p>
                   <div className="grid grid-cols-2 gap-3">
                      {['Roth IRA', 'Credit Score', 'Calculators', 'S&P 500'].map(term => (
                        <button 
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-6 py-4 bg-slate-50 dark:bg-white/5 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500/30 border border-transparent transition-all"
                        >
                          {term}
                        </button>
                      ))}
                   </div>
                </div>
              )}
            </div>
            
            <div className="bg-slate-50 dark:bg-zinc-800/50 p-6 flex justify-center">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">ESC to close • Enter to select</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
