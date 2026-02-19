
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const ContactPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Contact Us" 
      category="Company" 
      icon="✉️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium text-center">
          Have questions or suggestions? We’d love to hear from you!
        </p>

        <div className="max-w-2xl mx-auto space-y-12">
          <div className="p-10 bg-slate-900 text-white rounded-[3rem] text-center shadow-2xl">
            <h3 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Email Channel</h3>
            <p className="text-3xl font-black mb-2">contact@smartfinance.com</p>
            <p className="text-slate-400 text-sm">Response Target: Within 2 business days</p>
          </div>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Partnerships & Inquiries</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              For business inquiries, sponsorships, or partnership opportunities, please include your name, company, and a brief message in your email.
            </p>
          </section>

          <div className="pt-10 border-t border-slate-100 dark:border-white/5">
             <p className="text-lg font-bold text-slate-900 dark:text-white">Stay financially smart,</p>
             <p className="text-slate-500 dark:text-slate-400">The SmartFinance Team</p>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default ContactPage;
