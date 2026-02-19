
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const AffiliateDisclosurePage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Affiliate Disclosure" 
      category="Compliance" 
      icon="🤝" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
          Some links on SmartFinance are affiliate links. This means we may earn a commission if you open an account, purchase a product, or sign up through our links — <strong>at no additional cost to you</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 rounded-3xl">
             <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">Independent Reviews</h3>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
               We only recommend products and services we believe are valuable for our readers. All opinions and recommendations are independent.
             </p>
          </div>
          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/20 rounded-3xl">
             <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">Our Priorities</h3>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
               Our goal is to help beginners make informed financial decisions. Transparency and trust are our top priorities.
             </p>
          </div>
        </div>

        <div className="p-10 bg-slate-900 text-white rounded-[3rem] text-center shadow-2xl">
          <p className="text-lg mb-6">For questions about our affiliate relationships, please contact us at:</p>
          <p className="text-2xl font-black text-blue-400">support@rzealsolutions.com</p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default AffiliateDisclosurePage;
