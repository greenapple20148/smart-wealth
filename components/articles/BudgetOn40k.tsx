
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const BudgetOn40k: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Budget on a $40,000 Salary" 
      category="Budgeting" 
      icon="📋" 
      onClose={onClose}
    >
      <div className="prose prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
          Budgeting on a $40,000 salary is absolutely doable—it requires smart planning, discipline, and realistic expectations. Here's your complete guide to making every dollar count.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Understanding Your Take-Home Pay</h3>
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          First, understand what you're really working with. A $40,000 income typically means approximately <strong>$32,000 in take-home pay</strong> after taxes, which is about <strong>$2,665 per month</strong> <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">(NerdWallet)</span>.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center uppercase tracking-widest">The 50/30/20 Budget Rule</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl text-center shadow-sm">
            <p className="text-4xl font-black text-blue-600 mb-2">50%</p>
            <p className="font-bold text-slate-900 mb-2 uppercase tracking-tighter">Needs</p>
            <p className="text-2xl font-black text-slate-900 mb-4">$1,333</p>
            <p className="text-xs text-slate-500 leading-relaxed">Housing, utilities, groceries, transport, and insurance.</p>
          </div>
          <div className="p-8 bg-amber-50 border border-amber-100 rounded-3xl text-center shadow-sm">
            <p className="text-4xl font-black text-amber-600 mb-2">30%</p>
            <p className="font-bold text-slate-900 mb-2 uppercase tracking-tighter">Wants</p>
            <p className="text-2xl font-black text-slate-900 mb-4">$800</p>
            <p className="text-xs text-slate-500 leading-relaxed">Dining out, entertainment, hobbies, and gym memberships.</p>
          </div>
          <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-3xl text-center shadow-sm">
            <p className="text-4xl font-black text-emerald-600 mb-2">20%</p>
            <p className="font-bold text-slate-900 mb-2 uppercase tracking-tighter">Savings</p>
            <p className="text-2xl font-black text-slate-900 mb-4">$533</p>
            <p className="text-xs text-slate-500 leading-relaxed">Emergency fund, retirement, and debt repayment.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-8">Sample Monthly Budget Breakdown</h3>
        <div className="bg-slate-900 text-white rounded-[3rem] p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            {[
              { label: 'Housing (25-30%)', value: '$665 - $800', desc: 'Rent/Mortgage, Utilities, Insurance' },
              { label: 'Transportation', value: '$300 - $400', desc: 'Car payment, Gas, Public transit' },
              { label: 'Food', value: '$250 - $350', desc: 'Groceries (Meal planning is key!)' },
              { label: 'Healthcare', value: '$100 - $200', desc: 'Insurance & Co-pays' },
              { label: 'Personal/Misc', value: '$100 - $150', desc: 'Toiletries, Phone bill' },
              { label: 'Savings/Debt', value: '$400 - $535', desc: 'Emergency fund, IRA contributions' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 group">
                <div>
                  <p className="font-bold text-lg group-hover:text-blue-400 transition-colors">{item.label}</p>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
                <p className="text-xl font-black text-blue-400">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-8">Critical Money Moves on $40K</h3>
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
             <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
               <span className="text-rose-500">🔥</span> Kill High-Interest Debt
             </h4>
             <p className="text-sm text-slate-600 leading-relaxed m-0">
               Credit card interest will destroy your budget. Use the avalanche or snowball method to eliminate 20%+ APR balances first.
             </p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
             <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
               <span className="text-blue-500">🛡️</span> Emergency Fund
             </h4>
             <p className="text-sm text-slate-600 leading-relaxed m-0">
               Start with $1,000, then build to 3-6 months. This prevents you from going into debt when life happens.
             </p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
             <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
               <span className="text-emerald-500">🎁</span> Employer Match
             </h4>
             <p className="text-sm text-slate-600 leading-relaxed m-0">
               If your employer offers a 401(k) match, contribute at least enough to capture it. It's free money for your future.
             </p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
             <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
               <span className="text-indigo-500">🔍</span> Track Every Dollar
             </h4>
             <p className="text-sm text-slate-600 leading-relaxed m-0">
               Use apps like Mint or YNAB. You can't manage what you don't measure. Know where your money is going.
             </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 p-10 rounded-[2.5rem] mb-16">
          <h4 className="text-amber-900 font-bold mb-6 mt-0 text-xl flex items-center gap-3">
            <span>💡</span> Pro Tip: Where to Cut Costs
          </h4>
          <div className="space-y-4">
             <p className="text-slate-700 m-0 leading-relaxed"><strong>Housing:</strong> Consider roommates or house-hacking. This is your largest lever.</p>
             <p className="text-slate-700 m-0 leading-relaxed"><strong>Food:</strong> Meal prep on weekends and limit dining out to your "wants" budget.</p>
             <p className="text-slate-700 m-0 leading-relaxed"><strong>Subscriptions:</strong> Audit and cancel unused streaming services and gym memberships.</p>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[3.5rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-bold mb-6 mt-0">Bottom Line</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Living well on $40,000 is about intentionality. Earning this salary can be a reasonable start to a career, provided you avoid lifestyle inflation and stay focused on your long-term goals. Your financial freedom starts with the choices you make today.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default BudgetOn40k;
