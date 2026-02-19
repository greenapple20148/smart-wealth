
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const PrivacyPolicyPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Privacy Policy" 
      category="Compliance" 
      icon="🛡️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-10">Effective Date: February 15, 2026</p>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
          At SmartFinance, your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
        </p>

        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Information We Collect</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</span>
                <span className="text-slate-600 dark:text-slate-400">Email addresses for newsletter subscriptions</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</span>
                <span className="text-slate-600 dark:text-slate-400">Analytics data (e.g., IP addresses, pages visited) via Google Analytics</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</span>
                <span className="text-slate-600 dark:text-slate-400">Cookies for site functionality and personalization</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How We Use Your Information</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border dark:border-white/5">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Delivery</p>
                <p className="text-xs text-slate-500">To deliver our newsletter and other communications.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border dark:border-white/5">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Optimization</p>
                <p className="text-xs text-slate-500">To improve website performance and content.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border dark:border-white/5">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Personalization</p>
                <p className="text-xs text-slate-500">To personalize your experience.</p>
              </div>
            </div>
          </section>

          <section className="p-8 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20 rounded-3xl">
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4">Third-Party Services</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed m-0">
              We may share anonymized data with advertising partners or analytics providers. <strong>We never sell your personal information.</strong>
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Your Rights</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              You can unsubscribe from emails at any time. You may also disable cookies through your browser settings.
            </p>
          </section>

          <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] text-center">
            <p className="text-lg font-bold">By using our website, you agree to this Privacy Policy.</p>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default PrivacyPolicyPage;
