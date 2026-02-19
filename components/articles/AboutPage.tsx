
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const AboutPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="About Smart Wealth" 
      category="Company" 
      icon="👋" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Welcome to Smart Wealth a site operat by RZeal Solutions, VA your go-to resource for beginner-friendly investing, credit, and personal finance advice in the United States.
        </p>
        
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Our mission is simple: help you make smarter financial decisions with easy-to-understand guides, actionable tips, and expert insights.
            </p>
          </section>

          <section className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What We Do</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-0">
              Whether you’re just starting to build your credit, open your first investment account, or plan for retirement, we provide step-by-step instructions to help you reach your financial goals. We review brokers, credit cards, and financial products independently so you can make informed choices.
            </p>
          </section>

          <section className="py-10 text-center">
            <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Thank you for visiting — let’s build your financial future together!
            </p>
          </section>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default AboutPage;
