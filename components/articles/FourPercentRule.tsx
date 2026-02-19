
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const FourPercentRule: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="The 4% Rule: Retirement Math Re-evaluated" 
      category="Retirement" 
      icon="🏖️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          For decades, the "4% Rule" has been the gold standard for retirement withdrawal rates. But in a world of high inflation and volatile markets, does the math still hold up for 2026?
        </p>

        <div className="p-10 bg-slate-900 text-white rounded-[3rem] mb-16 relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-6 mt-0 text-amber-400">What is the 4% Rule?</h3>
          <p className="text-lg text-slate-300 leading-relaxed m-0">
            Developed by Bill Bengen in 1994, it states that you can withdraw 4% of your total portfolio in the first year of retirement, adjust that amount for inflation annually, and your money should last <strong>30 years</strong> with high probability.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center uppercase tracking-widest">The 2026 Adjustment</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">The Case for 3.3%</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              With stocks at historically high valuations and bonds offering moderate yields, some experts suggest dropping your withdrawal rate to <strong>3.3%</strong> to guarantee safety over 40+ years.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">The Guardrails Approach</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Instead of a fixed percentage, withdraw more when the market is up and <strong>cut back spending</strong> when the market is down. This "flexible" math allows for a higher starting rate (up to 5%).
            </p>
          </div>
        </div>

        <div className="p-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-[2.5rem] mb-16">
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 mt-0 text-xl">The "25X" Target</h4>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-8">
            To use the 4% rule, you need 25 times your annual expenses saved.
          </p>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl">
              <p className="text-xs text-slate-400 mb-1">Annual Spending</p>
              <p className="text-xl font-black text-slate-900 dark:text-white">$60,000</p>
            </div>
            <div className="p-4 bg-blue-600 text-white rounded-xl">
              <p className="text-xs text-blue-200 mb-1">Portfolio Goal</p>
              <p className="text-xl font-black">$1,500,000</p>
            </div>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Strategic Alpha</h4>
          <p className="text-blue-50 text-xl leading-relaxed mb-0">
            The 4% Rule is a <strong>starting point</strong>, not a destination. Success in 2026 retirement depends on diversification across tax-advantaged accounts (Roth vs Traditional) to minimize the tax drag on those withdrawals.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default FourPercentRule;
