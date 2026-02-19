
import React from 'react';
import ArticleLayout from '../ArticleLayout';

interface DefaultArticleProps {
  article: { title: string; category: string; icon?: string };
  onClose: () => void;
}

const DefaultArticle: React.FC<DefaultArticleProps> = ({ article, onClose }) => {
  return (
    <ArticleLayout 
      title={article.title} 
      category={article.category} 
      icon={article.icon} 
      onClose={onClose}
    >
      <div className="prose prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
          Understanding {article.title} is a great step toward financial literacy.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed">
          Our team is currently finalizing the full detailed guide for this topic. Stay tuned for expert insights and verification for the 2026 edition.
        </p>
      </div>
    </ArticleLayout>
  );
};

export default DefaultArticle;
