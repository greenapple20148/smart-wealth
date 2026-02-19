import React from 'react';
import ArticleLayout from '../ArticleLayout';

const BestTravelCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ArticleLayout 
      title="Best Travel Credit Cards for Beginners" 
      category="Rewards" 
      icon="✈️" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
          Travel credit cards can help you earn free flights, hotel stays, and valuable perks—even as a beginner. In 2026, the strategy is choosing nodes with flexible rewards, manageable fees, and features that match your travel velocity.
        </p>

        <div className="bg-slate-950 text-white p-10 sm:p-16 rounded-[3.5rem] mb-16 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-black italic">WINGS</div>
          <h3 className="text-3xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-tighter">The Travel Alpha</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            For beginners, general travel cards offer the most flexibility since your rewards aren't tied to a single airline or hotel chain. You can use them for any type of travel expense—flights, hotels, rental cars, or even rideshares <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(The Motley Fool)</span>.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest underline decoration-cyan-500 decoration-4">The Tier 01 Selection</h3>
        
        <div className="space-y-8 mb-16">
          {/* Wells Fargo Autograph */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">🛡️</div>
            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Best No-Annual-Fee Lead</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Wells Fargo Autograph® Card</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The #1 recommendation for low-maintenance yield. Earn unlimited <strong>3X points</strong> on restaurants, travel, gas, transit, and streaming. Includes a 20,000 point welcome bonus and rare perks like cellphone protection <span className="text-[10px] font-black opacity-50 uppercase">(Motley Fool Money, Change)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-black text-emerald-600 uppercase rounded-lg">$0 Annual Fee</span>
            </div>
          </div>

          {/* Chase Sapphire Preferred */}
          <div className="p-10 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">💎</div>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">The Gold Standard</p>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase">Chase Sapphire Preferred®</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              A high-velocity favorite with a $95 fee. Earns 5X on travel through Chase and 3X on dining. Features a massive <strong>75,000 point bonus</strong> and allows transfers to partners like Hyatt and United for maximum value <span className="text-[10px] font-black opacity-50 uppercase">(NerdWallet, VENTENY)</span>.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 uppercase rounded-lg">High Value Transfer Node</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">The "Micro-Target" Protocol</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {[
            { title: "Capital One Venture", icon: "🚀", desc: "Simple 2X miles on every purchase. Includes a credit for Global Entry/TSA PreCheck <span class='text-[10px] font-black opacity-50'>(The College Investor)</span>." },
            { title: "Chase Freedom Unlimited", icon: "📱", desc: "No fee. 5% on travel via Chase, 1.5% on all else. Points can later be pooled with Sapphire <span class='text-[10px] font-black opacity-50'>(VENTENY)</span>." },
            { title: "Amex Gold Card", icon: "🍴", desc: "4X on dining and groceries. Ideal if your travel is funded by your food spend." },
            { title: "Bilt World Elite Mastercard", icon: "🏠", desc: "Earn travel points on rent payments without fees. The ultimate 'hacker' node." }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex gap-6 items-center group hover:border-blue-500/20 transition-all">
              <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{s.icon}</span>
              <div>
                <p className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[10px]">{s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0 font-bold uppercase" dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center uppercase tracking-widest">Logic Filters: Evaluation Matrix</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🔄", title: "Flexibility", desc: "Redeem for credits, portal bookings, or transfers <span class='text-[9px] font-black'>(The Motley Fool)</span>." },
            { icon: "📈", title: "Simple Earning", desc: "Flat-rate or straightforward categories avoid complexity." },
            { icon: "💵", title: "Low Fee", desc: "Stick to $0 or $95 fees while learning the system." },
            { icon: "🤝", title: "Partners", desc: "Transfer to airlines/hotels for potentially 2x value." },
            { icon: "🛡️", title: "Protections", desc: "Essential travel insurance and no foreign fees." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] text-center group hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[10px]">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 uppercase font-black" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>

        <div className="p-10 bg-slate-900 text-white rounded-[3rem] mb-16 border border-white/5 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform text-8xl font-black italic">INTL</div>
          <h4 className="text-xl font-black mb-6 mt-0 text-cyan-400 uppercase tracking-widest">The "No Foreign Fee" Node</h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            If you travel internationally, ensure your card has <strong>zero foreign transaction fees</strong>. Standard cards charge 2-3% on every purchase abroad—a high-friction tax that the <strong>Capital One Venture</strong> and <strong>Chase Sapphire Preferred</strong> eliminate entirely <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">(Mintos)</span>.
          </p>
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl shadow-blue-500/20 mb-20">
          <h4 className="text-3xl font-black mb-6 mt-0 uppercase tracking-tighter">Strategic Verdict</h4>
          <p className="text-blue-100 text-xl leading-relaxed mb-0">
            Start with the <strong>Wells Fargo Autograph</strong> for no-fee 3X categories or the <strong>Chase Sapphire Preferred</strong> for an elite transfer ecosystem. Capture the welcome bonus, avoid carrying debt, and let your everyday spend fund your next global objective.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default BestTravelCards;