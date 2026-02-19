
import React from 'react';
import ArticleLayout from '../ArticleLayout';

const MultipleCardApps: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Can You Apply for Multiple Credit Cards at Once?" 
      category="Credit Logic" 
      icon="📑" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          The technical limit for applications is zero, but the reputational limit is strict. In 2026, "Shotgun Applications" are a primary signal of financial distress to risk models. Here is the high-velocity breakdown of why "can" doesn't mean "should."
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">SHOT</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-rose-500 uppercase tracking-tighter">The "Velocity" Trap</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            Applying for 3+ cards in 24 hours triggers <strong>automated fraud/risk filters</strong>. Even with a 750 score, multiple rapid inquiries suggest a sudden need for credit that the models perceive as high default risk <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(NerdWallet)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-rose-500 decoration-4">The Impact Matrix</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📉</div>
            <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase">Inquiry Compounding</h4>
            {/* Changed class to className below */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Each pull is ~5 points. 3 cards in a day = 15-point drop. This can move you from "Good" to "Fair" instantly <span className='text-[9px] font-black opacity-50'>(Motley Fool)</span>.</p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm group">
             <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛑</div>
            <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase">Risk Signaling</h4>
            {/* Changed class to className below */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Lenders may approve the first app but reject the second because simultaneous apps signal desperation or instability <span className='text-[9px] font-black opacity-50'>(NerdWallet)</span>.</p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm group">
             <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🧪</div>
            <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase">Age Dilution</h4>
            {/* Changed class to className below */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">Opening several accounts drops your "Average Age of Accounts," a key factor in your reputation node <span className='text-[9px] font-black opacity-50'>(NerdWallet)</span>.</p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "App-o-Rama" Edge Case</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Enthusiasts sometimes apply for multiple cards in one day to exploit the <strong>reporting delay</strong>. Hard inquiries often take several days or weeks to appear on your report. If you apply for multiple cards before the first inquiry is reflected, subsequent issuers won't see the other attempts <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter"> </span>. This is high-risk and not recommended for beginners.
        </p>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Issuer-Specific Guardrails</h3>
        <div className="overflow-x-auto mb-16 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/[0.02]">
                <th className="py-6 px-8 text-slate-400 uppercase text-[10px] font-black tracking-widest text-left">Issuer Node</th>
                <th className="py-6 px-8 text-blue-500 uppercase text-[10px] font-black tracking-widest text-left">The Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-100 dark:border-white/5">
                <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Chase</td>
                {/* Changed class to className below */}
                <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">"5/24 Rule": Rejection if 5+ cards opened in 24 months <span className='text-[9px] opacity-50'>(VENTENY)</span>.</td>
              </tr>
              <tr className="bg-slate-50/50 dark:bg-white/[0.01]">
                <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Citi</td>
                {/* Changed class to className below */}
                <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Bonus restriction: Once every 48 months for specific nodes <span className='text-[9px] opacity-50'>(VENTENY)</span>.</td>
              </tr>
              <tr>
                <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Discover</td>
                <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Limit: 1 card per year; max 2 cards total at any time.</td>
              </tr>
              <tr className="bg-slate-50/50 dark:bg-white/[0.01]">
                <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Wells Fargo</td>
                {/* Changed class to className below */}
                <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Eligibility pause: Wait 6 months after opening a WF node <span className='text-[9px] opacity-50'>(VENTENY)</span>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-tight">The Optimal Waiting Sequence</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-sm group">
            <h4 className="text-xl font-black text-blue-500 mb-4 uppercase text-xs tracking-widest">90-Day Protocol</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              The <strong>absolute minimum</strong> wait. This allows your score to partially recover from the previous inquiry and signals patience <span className="text-[10px] font-black opacity-50 uppercase">(VENTENY)</span>.
            </p>
          </div>
          <div className="p-10 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-500/20 rounded-[2.5rem] shadow-sm group">
            <h4 className="text-xl font-black text-emerald-600 mb-4 uppercase text-xs tracking-widest">6-Month Protocol</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
              The <strong>Golden Standard</strong>. At 6 months, the negative impact of inquiries diminishes significantly, and you've established clear payment data <span className="text-[10px] font-black opacity-50 uppercase"> </span>.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Smarter Alternatives</h3>
        <div className="space-y-6 mb-20">
          {[
            { title: "Soft-Pull Pre-Approval", icon: "🔍", desc: "Use tools like Capital One CreditWise to gauge approval odds without inquiry friction <span class='text-[10px] font-black'>(NerdWallet)</span>." },
            { title: "Credit Limit Increase", icon: "📈", desc: "Request an increase on an <strong>existing</strong> card node. This boosts your total credit and lowers utilization without a new hard pull <span class='text-[10px] font-black'>(NerdWallet)</span>." },
            { title: "Strategic Spacing", icon: "🗓️", desc: "Plan your applications 6 months apart to maintain a 'Prime' profile for long-term leverage <span class='text-[10px] font-black'>(NerdWallet)</span>." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-2xl flex gap-6 items-center group hover:border-blue-500/30 transition-all">
              <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
              <div>
                <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[10px]">{item.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 m-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Patience is your highest-returning asset. The CFPB recommends applying only for the credit you <strong>need</strong> <span className="text-[10px] font-black text-blue-300 uppercase tracking-tighter">(NerdWallet)</span>. Unless you have a 750+ score and zero debt, stick to the 6-month protocol. This protects your reputation node and ensures you get the highest limits and best rates when you truly need them.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default MultipleCardApps;
