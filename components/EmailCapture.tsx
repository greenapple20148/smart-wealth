
import React, { useState } from 'react';

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const features = [
    "What investing actually is (and how it makes money)",
    "Stocks vs ETFs vs Index Funds explained simply",
    "How to open your first brokerage account",
    "Beginner portfolio examples",
    "Risk management basics",
    "30-day action plan to get started"
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Flash UI Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-full bg-gradient-to-r from-blue-600/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {!subscribed ? (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              Intelligence Briefing
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
              Start Investing With Confidence — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Even If You’re a Beginner</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-3xl mx-auto font-medium">
              Download the FREE Beginner Investing Starter Kit and learn how to build wealth step-by-step without expensive advisors or confusing jargon.
            </p>

            {/* Feature List Node */}
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-16 text-left">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto p-2 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl">
              <input
                type="email"
                required
                placeholder="Secure email address"
                className="flex-grow px-8 py-5 bg-transparent text-white focus:outline-none text-lg font-black placeholder:text-slate-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="px-10 py-5 bg-cyan-500 text-slate-950 font-black rounded-2xl transition-all hover:bg-white active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)] uppercase text-xs tracking-widest"
              >
                Secure Access
              </button>
            </form>
            <p className="mt-6 text-slate-600 text-[10px] font-black uppercase tracking-widest">
              Zero Spam. Zero Friction. Unsubscribe Instantly.
            </p>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-16 backdrop-blur-2xl animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Connection <span className="text-cyan-400">Established</span></h3>
            <p className="text-slate-400 text-lg font-medium">Your Starter Kit is being transmitted. Check your inbox.</p>
            <button onClick={() => setSubscribed(false)} className="mt-10 text-cyan-400 font-black uppercase text-[10px] tracking-[0.2em] hover:text-white transition-colors">
              [ Reset Sequence ]
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailCapture;
