
import React, { useState, useMemo } from 'react';
import ArticleLayout from '../ArticleLayout';

interface CardNode {
  name: string;
  issuer: 'Chase' | 'Amex' | 'Capital One' | 'Discover' | 'US Bank' | 'Citi';
  type: 'Travel' | 'Cash Back' | '0% APR';
  minScore: number;
  scoreLabel: 'Excellent' | 'Good' | 'Fair' | 'Rebuilding';
  fee: string;
  introApr: string;
  rewardRate: string;
  description: string;
  icon: string;
}

const CompareCreditCards: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeScore, setActiveScore] = useState<string>('All');
  const [activeType, setActiveType] = useState<string>('All');

  const cardData: CardNode[] = [
    // CHASE
    {
      name: "Chase Sapphire Preferred®",
      issuer: "Chase",
      type: "Travel",
      minScore: 700,
      scoreLabel: "Excellent",
      fee: "$95",
      introApr: "N/A",
      rewardRate: "5x Travel / 3x Dining",
      icon: "✈️",
      description: "The industry benchmark for flexible travel points. Transfer 1:1 to elite partners like Hyatt and United."
    },
    {
      name: "Chase Freedom Unlimited®",
      issuer: "Chase",
      type: "Cash Back",
      minScore: 670,
      scoreLabel: "Good",
      fee: "$0",
      introApr: "0% for 15 Months",
      rewardRate: "1.5% - 5% Cash Back",
      icon: "💎",
      description: "Exceptional balance of high-floor rewards and a long 0% APR runway."
    },
    {
      name: "Chase Freedom Flex℠",
      issuer: "Chase",
      type: "Travel",
      minScore: 670,
      scoreLabel: "Good",
      fee: "$0",
      introApr: "0% for 15 Months",
      rewardRate: "5% Travel (Chase) / 5% Rotating",
      icon: "🎡",
      description: "Great companion card to pool points into the Chase ecosystem."
    },
    // AMEX
    {
      name: "Amex Platinum Card®",
      issuer: "Amex",
      type: "Travel",
      minScore: 740,
      scoreLabel: "Excellent",
      fee: "$695",
      introApr: "N/A",
      rewardRate: "5x Flights / 5x Hotels",
      icon: "💳",
      description: "The peak premium node. Unparalleled lounge access and elite travel status tiers."
    },
    {
      name: "Amex Gold Card",
      issuer: "Amex",
      type: "Travel",
      minScore: 700,
      scoreLabel: "Excellent",
      fee: "$250",
      introApr: "N/A",
      rewardRate: "4x Dining / 4x Grocery",
      icon: "🍴",
      description: "Foodie powerhouse. Transforms grocery and dining spend into travel assets."
    },
    // CAPITAL ONE
    {
      name: "Capital One Venture X",
      issuer: "Capital One",
      type: "Travel",
      minScore: 740,
      scoreLabel: "Excellent",
      fee: "$395",
      introApr: "N/A",
      rewardRate: "2x - 10x Miles",
      icon: "🌌",
      description: "Premium travel node with easy redemption and no foreign transaction fees."
    },
    {
      name: "SavorOne Cash Rewards",
      issuer: "Capital One",
      type: "Cash Back",
      minScore: 670,
      scoreLabel: "Good",
      fee: "$0",
      introApr: "0% for 15 Months",
      rewardRate: "3% Dining/Entertainment",
      icon: "🍔",
      description: "3% on dining, entertainment, and streaming with zero annual fee."
    },
    {
      name: "Capital One Quicksilver",
      issuer: "Capital One",
      type: "0% APR",
      minScore: 670,
      scoreLabel: "Good",
      fee: "$0",
      introApr: "0% for 15 Months",
      rewardRate: "1.5% Cash Back",
      icon: "📱",
      description: "Simple, flat-rate cash back with a solid 0% intro APR offer."
    },
    // DISCOVER
    {
      name: "Discover it® Cash Back",
      issuer: "Discover",
      type: "Cash Back",
      minScore: 670,
      scoreLabel: "Good",
      fee: "$0",
      introApr: "0% for 15 Months",
      rewardRate: "5% Rotating Categories",
      icon: "🏹",
      description: "Features a first-year match that effectively doubles your rewards."
    },
    // US BANK
    {
      name: "U.S. Bank Shield™ Visa®",
      issuer: "US Bank",
      type: "0% APR",
      minScore: 670,
      scoreLabel: "Good",
      fee: "$0",
      introApr: "0% for 21-24 Months",
      rewardRate: "Travel Portal Focus",
      icon: "🛡️",
      description: "One of the longest interest-free periods available on purchases and transfers."
    },
    {
      name: "U.S. Bank Cash+®",
      issuer: "US Bank",
      type: "Cash Back",
      minScore: 700,
      scoreLabel: "Excellent",
      fee: "$0",
      introApr: "0% for 15 Months",
      rewardRate: "5% on 2 Categories",
      icon: "💵",
      description: "Choose your own 5% categories like utilities or department stores."
    },
    // CITI
    {
      name: "Citi Double Cash®",
      issuer: "Citi",
      type: "Cash Back",
      minScore: 700,
      scoreLabel: "Excellent",
      fee: "$0",
      introApr: "18 Months (Transfers)",
      rewardRate: "2% Flat Cash Back",
      icon: "🔁",
      description: "Maximum simplicity: 1% when you buy + 1% when you pay."
    }
  ];

  const filteredCards = useMemo(() => {
    return cardData.filter(card => {
      const scoreMatch = activeScore === 'All' || card.scoreLabel === activeScore;
      const typeMatch = activeType === 'All' || card.type === activeType;
      return scoreMatch && typeMatch;
    });
  }, [activeScore, activeType]);

  const handleSubSelect = (name: string) => {
    window.dispatchEvent(new CustomEvent('selectArticle', { detail: { title: name, category: 'Credit' } }));
  };

  return (
    <ArticleLayout 
      title="Global Comparison Matrix" 
      category="Intelligence Hub" 
      icon="📑" 
      onClose={onClose}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        
        {/* Issuer Comparison Overview */}
        <div className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">🧠</span>
            How Major Issuers Compare
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Chase", desc: "Wide range from cash back to premium travel. Strong sign-up bonuses and transferable Ultimate Rewards points." },
              { name: "Discover", desc: "Simple, customer-friendly nodes with rotating bonus categories and a unique first-year cashback match." },
              { name: "U.S. Bank", desc: "Offers some of the longest interest-free runways and unique customizable bonus categories." },
              { name: "Amex", desc: "The elite choice for frequent travelers. High-end perks and lounge access, but often carries an annual fee." },
              { name: "Capital One", desc: "Straightforward cash back and travel. High availability of cards with no foreign transaction fees." },
              { name: "Citi", desc: "Focuses on high-yield flat-rate rewards and custom spending behaviors." }
            ].map((issuer, i) => (
              <div key={i} className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl">
                <p className="font-black text-blue-600 dark:text-cyan-400 text-xs uppercase tracking-widest mb-2">{issuer.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0 font-medium">{issuer.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Rewards Guide */}
        <div className="mb-20 p-10 bg-blue-600/5 dark:bg-white/[0.03] border-2 border-blue-500/10 dark:border-white/10 rounded-[3.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl pointer-events-none scale-150">✈️</div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">✈️ Best Travel Rewards Cards</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium">
            Ideal if your goal is earning points/miles for flights, hotels, and travel experiences.
          </p>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] font-black text-blue-600 dark:text-cyan-400 uppercase tracking-[0.4em] mb-8 border-b dark:border-white/10 pb-4">Top Strategic Picks</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border dark:border-white/5 shadow-sm group hover:border-blue-500/30 transition-all">
                  <p className="font-black text-slate-900 dark:text-white mb-3 text-lg uppercase tracking-tight">Chase Freedom Unlimited®</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Strong travel bonus when booking via Chase Travel and flexible redemption options.</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                       <span>Travel Rewards</span>
                       <span className="text-blue-500">5% via Chase Travel</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                       <span>Annual Fee</span>
                       <span className="text-slate-900 dark:text-white">$0</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border dark:border-white/5 shadow-sm group hover:border-blue-500/30 transition-all">
                  <p className="font-black text-slate-900 dark:text-white mb-3 text-lg uppercase tracking-tight">Chase Freedom Flex℠</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Rotating categories including travel; great companion to Sapphire cards to pool points.</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                       <span>Travel Rewards</span>
                       <span className="text-blue-500">5% via Chase Travel</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                       <span>Annual Fee</span>
                       <span className="text-slate-900 dark:text-white">$0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-950 text-white rounded-[2.5rem] border border-white/10 shadow-xl">
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Elite Segment</p>
                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">American Express® Portfolio</h4>
                <p className="text-lg text-slate-300 leading-relaxed mb-0 font-medium">
                  While they rarely feature 0% APR, the <strong>Gold Card</strong> and <strong>Platinum Card®</strong> represent the peak for travel earning and perks like airline credits and luxury lounge access. Annual fees are higher but justified for frequent travelers.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border dark:border-white/5 flex gap-4 items-center">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500 shrink-0">🚀</div>
                <p className="text-sm text-slate-600 dark:text-slate-400 m-0 font-bold uppercase tracking-tight"><strong>Capital One Venture:</strong> Simple flat-rate points with easy redemption.</p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border dark:border-white/5 flex gap-4 items-center">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">🧳</div>
                <p className="text-sm text-slate-600 dark:text-slate-400 m-0 font-bold uppercase tracking-tight"><strong>Co-branded Cards:</strong> Airline/hotel specific perks like free bags and status.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cash Back Rewards Guide */}
        <div className="mb-20 p-10 bg-emerald-600/5 dark:bg-white/[0.03] border-2 border-emerald-500/10 dark:border-white/10 rounded-[3.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl pointer-events-none scale-150">💰</div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">💰 Best Cash Back Cards</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium">
            Great for everyday spending and simple reward redemption with maximum liquidity.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Citi Double Cash®", type: "Flat 2%", desc: "Simple 1% when you buy + 1% when you pay. Best for pure simplicity." },
              { name: "SavorOne Cash", type: "3% Dining", desc: "Strong rewards on dining, entertainment, and streaming with $0 fee." },
              { name: "Discover it®", type: "5% Rotating", desc: "Best for category spenders with a massive Year 1 cashback match." }
            ].map((card, i) => (
              <div key={i} className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border dark:border-white/5 shadow-sm">
                <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">{card.type}</p>
                <h5 className="font-black text-slate-900 dark:text-white uppercase mb-4 text-sm">{card.name}</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 m-0 leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-white dark:bg-zinc-900/30 border border-emerald-500/10 rounded-[2.5rem]">
             <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-6">Solid Multi-Purpose Options</h4>
             <ul className="space-y-4 m-0 list-none pl-0">
               <li className="flex items-start gap-4">
                 <span className="text-emerald-500 font-bold">✓</span>
                 <span className="text-sm text-slate-600 dark:text-slate-400"><strong>Chase Freedom Unlimited:</strong> 1.5%+ flat base with 3% dining/drugstores and 5% travel.</span>
               </li>
               <li className="flex items-start gap-4">
                 <span className="text-emerald-500 font-bold">✓</span>
                 <span className="text-sm text-slate-600 dark:text-slate-400"><strong>U.S. Bank Cash+®:</strong> High 5% rates on two categories of your choice.</span>
               </li>
             </ul>
          </div>
        </div>

        {/* 0% APR Guide */}
        <div className="mb-20 p-10 bg-rose-600/5 dark:bg-white/[0.03] border-2 border-rose-500/10 dark:border-white/10 rounded-[3.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl pointer-events-none scale-150">🔄</div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-0 mb-6 uppercase tracking-tight">🔄 Best Intro 0% APR Cards</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium">
            Great for financing large purchases or balance transfers interest-free to build capital velocity.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border dark:border-white/5 shadow-sm group hover:border-rose-500/30 transition-all">
               <p className="font-black text-slate-900 dark:text-white mb-3 text-lg uppercase tracking-tight">U.S. Bank Shield™ Visa®</p>
               <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">One of the longest 0% APR periods (≈24 months) on both purchases and balance transfers.</p>
               <span className="px-3 py-1 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-[10px] font-black rounded uppercase">Max Runway</span>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border dark:border-white/5 shadow-sm group hover:border-blue-500/30 transition-all">
               <p className="font-black text-slate-900 dark:text-white mb-3 text-lg uppercase tracking-tight">Chase Freedom Unlimited®</p>
               <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Offers a balanced ~15 months of 0% APR combined with high-tier rewards.</p>
               <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded uppercase">Rewards Hybrid</span>
            </div>
          </div>

          <div className="p-8 bg-slate-50 dark:bg-white/5 border dark:border-white/10 rounded-[2.5rem]">
             <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong>Alternative Nodes:</strong> Capital One Quicksilver offers ~15 months of 0% intro APR plus 1.5%+ cash back. Citi Custom Cash or Bank of America Custom Rewards also offer competitive 15-month runways.</p>
          </div>
        </div>

        {/* Comparison Summary Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">📊 Quick Comparison Summary</h3>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200 dark:border-white/10">
            <table className="min-w-full text-sm border-separate border-spacing-0">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/[0.05]">
                  <th className="py-6 px-8 text-slate-400 uppercase text-[10px] font-black tracking-widest text-left">Category</th>
                  <th className="py-6 px-8 text-blue-600 uppercase text-[10px] font-black tracking-widest text-left">Best Overall</th>
                  <th className="py-6 px-8 text-cyan-600 uppercase text-[10px] font-black tracking-widest text-left">Best for Travel</th>
                  <th className="py-6 px-8 text-emerald-600 uppercase text-[10px] font-black tracking-widest text-left">Best for Cash Back</th>
                  <th className="py-6 px-8 text-rose-600 uppercase text-[10px] font-black tracking-widest text-left">Best 0% APR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                <tr className="bg-white dark:bg-zinc-950">
                  <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">No Annual Fee</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Freedom Unlimited</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Freedom Flex</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Citi Double Cash</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">U.S. Bank Shield</td>
                </tr>
                <tr className="bg-slate-50/50 dark:bg-white/[0.02]">
                  <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Bonus Value</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">SavorOne</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Cap One Travel</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Discover it®</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Freedom Unlimited</td>
                </tr>
                <tr className="bg-white dark:bg-zinc-950">
                  <td className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase text-[10px]">Flexible Rewards</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Freedom Unlimited</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Amex travel cards</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Cap One Savor</td>
                  <td className="py-6 px-8 text-slate-600 dark:text-slate-400 font-bold">Cap One Quicksilver</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Filter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8 border-t dark:border-white/5 pt-16">
           <div className="max-w-xl">
             <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter m-0 mb-4">Node <span className="text-blue-600 dark:text-cyan-400">Search Engine</span></h3>
             <p className="text-slate-50 dark:text-slate-400 font-medium m-0">Use the dynamic filters to isolate the specific card that matches your current score and strategic capital objective.</p>
           </div>
           
           <div className="flex flex-col gap-4 w-full lg:w-auto">
             <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl border dark:border-white/5">
                {['All', 'Excellent', 'Good', 'Fair', 'Rebuilding'].map(score => (
                  <button 
                    key={score} 
                    onClick={() => setActiveScore(score)}
                    className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeScore === score ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-black shadow-lg' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    {score}
                  </button>
                ))}
             </div>
             <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl border dark:border-white/5">
                {['All', 'Travel', 'Cash Back', '0% APR'].map(type => (
                  <button 
                    key={type} 
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeType === type ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    {type}
                  </button>
                ))}
             </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-zinc-950 border-2 border-slate-100 dark:border-white/5 rounded-[2.5rem] p-8 flex flex-col hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 text-7xl pointer-events-none group-hover:scale-110 transition-transform">{card.icon}</div>
              
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-lg border dark:border-white/10">
                  {card.issuer}
                </span>
                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                  card.scoreLabel === 'Excellent' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                  card.scoreLabel === 'Good' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                  'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                }`}>
                  {card.scoreLabel}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 dark:text-white mb-3 uppercase tracking-tighter m-0 h-14 overflow-hidden">{card.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 font-bold leading-relaxed line-clamp-2">
                {card.description}
              </p>

              <div className="space-y-4 mb-10 mt-auto">
                <div className="flex justify-between items-center pb-3 border-b dark:border-white/5">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Type</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{card.type}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b dark:border-white/5">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Annual Fee</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{card.fee}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b dark:border-white/5">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Intro Term</span>
                  <span className="text-xs font-bold text-blue-500">{card.introApr}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Rewards</span>
                  <span className="text-xs font-bold text-emerald-500">{card.rewardRate}</span>
                </div>
              </div>

              <button 
                onClick={() => handleSubSelect(card.name)}
                className="w-full py-4 bg-slate-950 dark:bg-white text-white dark:text-black font-black text-[9px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-600 dark:hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 group-hover:shadow-xl"
              >
                Inspect Node
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          ))}
        </div>

        <div className="p-12 bg-blue-600 text-white rounded-[4rem] text-center shadow-2xl mb-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
           <p className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-6 relative z-10">Decision Engine</p>
           <h4 className="text-3xl font-black mb-8 mt-0 uppercase tracking-tighter relative z-10">Best Choice Depends <br /><span className="text-white underline decoration-cyan-400">On Your Need.</span></h4>
           <div className="grid sm:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
             <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
               <p className="font-black text-[10px] uppercase mb-4">Travel + Perks</p>
               <p className="text-xs text-blue-100 font-medium">Go for Chase, Amex, or Capital One travel reward cards.</p>
             </div>
             <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
               <p className="font-black text-[10px] uppercase mb-4">Everyday Cash Back</p>
               <p className="text-xs text-blue-100 font-medium">Citi Double Cash or Capital One SavorOne are superior.</p>
             </div>
             <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
               <p className="font-black text-[10px] uppercase mb-4">Interest-Free Now</p>
               <p className="text-xs text-blue-100 font-medium">Choose U.S. Bank Shield or Chase Freedom Unlimited.</p>
             </div>
           </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default CompareCreditCards;
