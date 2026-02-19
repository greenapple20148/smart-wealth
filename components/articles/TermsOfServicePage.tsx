
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const TermsOfServicePage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Terms of Service" 
      category="Compliance" 
      icon="📜" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-10">Effective Date: February 15, 2026</p>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
          Welcome to SmartFinance. By accessing our website, you agree to the following terms:
        </p>

        <div className="space-y-10">
          {[
            { title: "Use of Content", desc: "All content is for informational purposes only. We are not providing financial advice. Please consult a licensed professional for personalized guidance." },
            { title: "User Conduct", desc: "You agree not to misuse our website, post harmful content, or engage in illegal activity." },
            { title: "Affiliate Links", desc: "Some links may earn us a commission. We disclose this transparently." },
            { title: "Intellectual Property", desc: "All content, graphics, and materials on this site are owned by SmartFinance. You may not copy or redistribute without permission." },
            { title: "Limitation of Liability", desc: "SmartFinance is not responsible for losses from using our content." },
            { title: "Changes to Terms", desc: "We may update these terms at any time. Continued use constitutes acceptance of the new terms." }
          ].map((item, i) => (
            <section key={i}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed m-0">{item.desc}</p>
            </section>
          ))}

          <div className="p-12 bg-rose-600 text-white rounded-[3rem] text-center shadow-2xl">
            <h4 className="text-2xl font-bold mb-4 mt-0">Required Action</h4>
            <p className="text-rose-50 text-lg leading-relaxed mb-0">
              If you do not agree to these terms, please refrain from using our site.
            </p>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default TermsOfServicePage;
