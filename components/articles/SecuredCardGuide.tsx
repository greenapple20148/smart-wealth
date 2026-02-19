import React from 'react';
import ArticleLayout from '../ArticleLayout';

const SecuredCardGuide: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="What Is a Secured Credit Card and Who Needs One?" 
      category="Building Credit" 
      icon="🛡️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          The secured card is a "Collateralized Builder Node." In 2026, it is the most reliable way to bridge the gap from credit-invisible to prime-status.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">SHLD</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-blue-400 uppercase tracking-tighter">The Safety Protocol</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            You provide a <strong>refundable deposit</strong> (collateral) which becomes your limit. The bank assumes zero risk, guaranteeing your approval while reporting your perfect on-time payments to the bureaus <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Change)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-blue-500 decoration-4">The Top Entry Nodes</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Discover it Secured */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🏹</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Rewards Lead</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Discover it® Secured</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The gold standard. 2% back at Gas/Dining plus a first-year cashback match. Automatically graduates to unsecured in <strong>7 months</strong> <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet)</span>.
            </p>
          </div>

          {/* Capital One Platinum Secured */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🛡️</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Low Deposit Node</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Cap One Platinum Secured</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Low starting deposit ($49, $99, or $200) for a $200 limit. Fast path to credit limit increases without new deposits <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY)</span>.
            </p>
          </div>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            A secured card is a <strong>temporary scaffold</strong>. Use it to build the structure of your credit score, then graduate to premium unsecured nodes within 12 months. Start with the <strong>Discover it® Secured</strong> to get paid while you build.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default SecuredCardGuide;