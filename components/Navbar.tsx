
import React, { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  onSearchToggle: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  designSystem: 'standard' | 'flash';
  onDesignToggle: () => void;
  onNavClick?: () => void;
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onSearchToggle, 
  theme, 
  onThemeToggle, 
  designSystem, 
  onDesignToggle, 
  onNavClick, 
  onLogoClick 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Investing', href: '#investing-section' },
    { name: 'Credit Cards', href: '#credit-cards' },
    { name: 'Mortgages', href: '#mortgages' },
    { name: 'Beginner Guides', href: '#starter-kit' },
  ];

  const resourceLinks = [
    { name: '401k Calculator', href: '#', type: 'tool' },
    { name: 'Mortgage Calculator', href: '#', type: 'tool' },
    { name: 'Auto Loan Calculator', href: '#', type: 'tool' },
    { name: 'Compound Interest Calculator', href: '#', type: 'tool' },
    { name: 'Investing 101 Feed', href: '#investing-section' },
    { name: 'Retirement Vault', href: '#guides' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    if (link.type === 'tool') {
      e.preventDefault();
      if (onNavClick) onNavClick();
      window.dispatchEvent(new CustomEvent('selectArticle', { detail: { title: link.name, category: 'Tools' } }));
    } else if (onNavClick) {
      onNavClick();
    }
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  const handleLogoClickInternal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLogoClick) onLogoClick();
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={handleLogoClickInternal} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-slate-950 dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all border border-white/10 group-hover:border-cyan-500/50">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 font-black text-2xl">$</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase transition-colors">
                Smart<span className="text-cyan-500">Wealth</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 hover:text-cyan-500 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${isResourcesOpen ? 'text-cyan-500' : 'text-slate-500 hover:text-cyan-500'}`}
              >
                Tools
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-white dark:bg-slate-900 rounded-[1.5rem] shadow-2xl border border-slate-100 dark:border-white/5 py-4 animate-in fade-in slide-in-from-top-2">
                  {resourceLinks.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.href}
                      onClick={(e) => handleLinkClick(e, resource)}
                      className="block px-6 py-3 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-cyan-500 transition-all"
                    >
                      {resource.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>
            
            <div className="flex items-center gap-2">
              {/* Design System Toggle */}
              <button 
                onClick={onDesignToggle}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:border-cyan-500 transition-all"
                title="Toggle Design System"
              >
                <div className={`w-2 h-2 rounded-full ${designSystem === 'flash' ? 'bg-cyan-400 animate-pulse' : 'bg-slate-400'}`}></div>
                {designSystem} UI
              </button>

              <button 
                onClick={onThemeToggle}
                className="p-2 text-slate-500 hover:text-cyan-500 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>

              <button onClick={onSearchToggle} className="p-2 text-slate-500 hover:text-cyan-500 transition-colors" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={onDesignToggle} className="p-2 text-slate-500 uppercase text-[9px] font-black">{designSystem}</button>
            <button onClick={onThemeToggle} className="p-2 text-slate-500">
               {theme === 'dark' ? <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 animate-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-3 rounded-xl text-sm font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all" onClick={(e) => handleLinkClick(e, link)}>{link.name}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
