import React from 'react';
import ArticleLayout from '../ArticleLayout';

const GetApproved: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="How to Get Approved for Your First Credit Card" 
      category="Building Credit" 
      icon="✅" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Approval is not a lottery—it's a data verification sequence. In 2026, getting your first "Yes" is about presenting the specific signals lenders require for entry-level risk.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">PROB</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-blue-400 uppercase tracking-tighter">The "Soft-Pull" Strategy</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            Never apply blindly. Use <strong>Pre-Approval tools</strong> from Chase, Amex, or Capital One. These use soft credit inquiries to estimate your success without damaging your score. If you see a "Yes" there, your real approval probability is greater than 90% <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-blue-500 decoration-4">The Approval Protocol</h3>
        <div className="space-y-8 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-white/10 before:to-transparent">
          {[
            { step: "01", title: "Income Architecture", desc: "List all verifiable income: salary, freelance, scholarships, or regular family support. Lenders need to see capacity to repay <span class='text-[10px] font-black opacity-50 uppercase'>(The College Investor)</span>." },
            { step: "02", title: "The $250 Cheat Code", desc: "Open a Chase checking account and hold a <strong>$250 balance</strong>. This triggers an internal 'relationship node' that bypasses many automated rejections for the Freedom Rise card." },
            { step: "03", title: "Identity Hardening", desc: "Ensure your address and phone number match your utility bills. Mismatched data is the #1 cause of 'verification pending' delays <span class='text-[10px] font-black opacity-50 uppercase'>(Change)</span>." },
            { step: "04", title: "Single Node Entry", desc: "Apply for ONLY ONE card. Applying for multiple cards in 24 hours signals desperation to the risk models." }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-white font-black text-xs shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">0{i+1}</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm">
                <h4 className="font-black text-slate-900 dark:text-white mb-2 m-0 uppercase tracking-widest text-[10px] text-blue-500">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20 rounded-[3rem] mb-16 text-center">
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 mt-0 uppercase tracking-widest text-xs">The Under-21 Protocol</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            If you are under 21, federal law requires you to show <strong>independent income</strong> or have a co-signer (rare in 2026). Use your part-time wages or internships to verify your Node's liquidity <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Approval is a game of probability. Start with the <strong>Chase Freedom Rise</strong> or a <strong>Discover it® Secured</strong> node. Clean data, verified income, and the relationship cheat code will yield a "Yes" in 9 out of 10 attempts.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default GetApproved;