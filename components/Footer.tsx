
import React from 'react';

interface FooterProps {
  onSelect?: (page: { title: string; category: string; icon?: string }) => void;
  onNavClick?: () => void;
  onLogoClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSelect, onNavClick, onLogoClick }) => {
  const currentYear = new Date().getFullYear();

  const handlePageClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    if (onSelect) {
      onSelect({ title, category: 'Company' });
    }
  };

  const handleLogoClickInternal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLogoClick) onLogoClick();
  };

  return (
    <footer className="bg-white dark:bg-midnight text-slate-500 dark:text-zinc-500 py-24 border-t border-slate-100 dark:border-white/5 relative overflow-hidden">
      {/* Subtle Mesh Background for Footer */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <a href="#" onClick={handleLogoClickInternal} className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-white/10 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 transition-all shadow-lg">
                <span className="text-white dark:text-cyan-400 font-black text-xl">$</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase transition-colors">
                Smart<span className="text-blue-600 dark:text-cyan-500">Wealth</span>
              </span>
            </a>
            <p className="text-[13px] leading-relaxed mb-8 font-medium">
              Empowering the next generation to master capital at high velocity through radical transparency and precision education.
            </p>
            <div className="flex gap-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 dark:hover:bg-cyan-50 transition-all hover:scale-110 hover:text-white">
                  <span className="sr-only">{platform}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.493-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.879-1.561 4-1.667 4 1.467v3.44z"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-[0.2em] mb-10">Resources</h4>
            <ul className="space-y-5 text-[13px] font-bold">
              <li><a href="#investing-section" onClick={onNavClick} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Investing 101 Feed</a></li>
              <li><a href="#credit-cards" onClick={onNavClick} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Credit Performance Index</a></li>
              <li><a href="#guides" onClick={onNavClick} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Retirement Vault</a></li>
              <li><a href="#starter-kit" onClick={onNavClick} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Brokerage Speedtest</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-[0.2em] mb-10">Company</h4>
            <ul className="space-y-5 text-[13px] font-bold">
              <li><a href="#" onClick={(e) => handlePageClick(e, 'About Smart Wealth')} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About Smart Wealth</a></li>
              <li><a href="#" onClick={(e) => handlePageClick(e, 'Contact Us')} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact HQ</a></li>
              <li><a href="#" onClick={(e) => handlePageClick(e, 'Affiliate Disclosure')} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Editorial Alpha</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-[0.2em] mb-10">Compliance</h4>
            <ul className="space-y-5 text-[13px] font-bold">
              <li><a href="#" onClick={(e) => handlePageClick(e, 'Privacy Policy')} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Privacy Encryption</a></li>
              <li><a href="#" onClick={(e) => handlePageClick(e, 'Terms of Service')} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Terms of Use</a></li>
              <li><a href="#" onClick={(e) => handlePageClick(e, 'Affiliate Disclosure')} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Full Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-white/5 text-[10px] font-black uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-8">
          <p>© {currentYear} Smart Wealth Intelligence Hub.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-3 text-blue-600 dark:text-emerald-500">
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-emerald-500 animate-pulse"></div>
              Node: USA_EAST_01
            </span>
            <span className="flex items-center gap-3 text-blue-600 dark:text-cyan-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              Flash Encrypted
            </span>
          </div>
        </div>
        
        <div className="mt-12 text-[9px] leading-loose text-slate-400 dark:text-zinc-600 max-w-4xl mx-auto text-center font-bold tracking-wider">
          MARKET DATA DISCLAIMER: CONTENT PROVIDED BY SMART WEALTH IS FOR STRATEGIC EDUCATIONAL PURPOSES ONLY. NO CONTENT ON THIS PLATFORM CONSTITUTES LEGAL, TAX, OR INVESTMENT ADVICE. TRADING CARRIES HIGH RISK. PAST PERFORMANCE IS NOT PREDICTIVE OF FUTURE RESULTS. VERIFY ALL DATA WITH A LICENSED PROFESSIONAL BEFORE EXECUTION.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
