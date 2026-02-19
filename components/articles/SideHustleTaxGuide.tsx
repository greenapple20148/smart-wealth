
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const SideHustleTaxGuide: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Side Hustle Tax Guide: Don't Get Caught Unprepared" 
      category="Tax" 
      icon="🧾" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Whether you're freelancing, driving for Uber, or selling on Etsy, your side hustle income is taxable. In 2026, the IRS is more diligent than ever about tracking digital payments. Here is how to keep your alpha and stay compliant.
        </p>

        <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-8xl">📊</div>
          <h3 className="text-2xl font-bold m-0 text-cyan-400 mb-4">The "Hidden" 15.3% Tax</h3>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            When you work for an employer, they pay half of your Social Security and Medicare taxes. When you're the boss, you pay <strong>both halves</strong>. This is the <strong>Self-Employment (SE) Tax</strong>, and it's a flat 15.3% on your net profit <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The College Investor)</span>.
          </p>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
             <p className="text-xs text-slate-400 m-0 italic">Pro-Tip: You can deduct the "employer" half (7.65%) of your SE tax from your gross income when calculating your income tax.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">3 Rules for Survival</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">🏦</div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Separate Accounts</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">
              Never mix personal and business cash. Open a dedicated business checking account to make auditing painless.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">🗓️</div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Quarterly Estimates</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">
              If you expect to owe greater than $1,000 in tax, you must pay the IRS every 3 months or face penalties <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm text-center">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">📱</div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Track Every Cent</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">
              Use apps like <strong>QuickBooks Self-Employed</strong> or <strong>Expensify</strong>. A lost receipt is lost money.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">The Deduction Multipliers</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          You only pay tax on your <strong>profit</strong>, not your revenue. Maximizing legitimate business deductions is how you protect your side hustle margins <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(Mintos)</span>.
        </p>

        <div className="space-y-4 mb-16">
          {[
            { cat: 'Home Office', desc: 'Deduct a portion of your rent/mortgage and utilities based on the square footage used exclusively for work.' },
            { cat: 'Equipment & Software', desc: 'Laptops, specialized tools, and monthly SaaS subscriptions (Zoom, Adobe, etc.) are 100% deductible.' },
            { cat: 'Marketing', desc: 'Ads on Meta/Google, website hosting, and professional headshots for your brand.' },
            { cat: 'Mileage', desc: 'In 2026, the standard mileage rate is approximately 68.5 cents per business mile driven <span class="text-[10px] font-black opacity-50 uppercase">(Gainify)</span>.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl items-center">
               <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
               <div className="flex-grow">
                 <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.cat}</p>
                 <p className="text-xs text-slate-500 dark:text-slate-400 m-0" dangerouslySetInnerHTML={{ __html: item.desc }} />
               </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20 rounded-[3rem] mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 p-8 opacity-20 pointer-events-none text-9xl">🛑</div>
          <h3 className="text-2xl font-bold mb-6 mt-0 text-amber-900 dark:text-amber-400">The 1099-K Reporting Rule</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            Digital payment platforms like Venmo, PayPal, and CashApp will send you a 1099-K if your business transactions exceed <strong>$5,000</strong> annually in 2026 <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter"> </span>. The IRS gets a copy of this form, so ensure your bookkeeping matches.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-8">
            Treat your side hustle like a real business from Day 1. Set aside <strong>30% of every paycheck</strong> in a separate savings account for taxes. If you do this, tax season is a non-event; if you don't, it's a financial crisis.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-black rounded-xl uppercase text-xs tracking-widest hover:bg-blue-50 transition-colors">
            Download Tax Checklist
          </button>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default SideHustleTaxGuide;
