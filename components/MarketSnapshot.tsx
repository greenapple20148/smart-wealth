import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MarketSnapshotProps {
  onSelect: (guide: { title: string; category: string; icon?: string }) => void;
}

const data = [
  { name: 'Mon', value: 5200 },
  { name: 'Tue', value: 5240 },
  { name: 'Wed', value: 5190 },
  { name: 'Thu', value: 5260 },
  { name: 'Fri', value: 5310 },
];

const MarketSnapshot: React.FC<MarketSnapshotProps> = ({ onSelect }) => {
  const noisePattern = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

  return (
    <section className="py-32 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/10 dark:border-white/5 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Live Market Intelligence
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight">
              Weekly Market <br /><span className="text-cyan-400">Momentum.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
              “Inflation prints came in soft, propelling the S&P 500 to new highs. Flash analysis shows tech-led momentum remains strong, but beginners should keep an eye on yields. Here is the alpha you need for the week ahead.”
            </p>
            <button 
              onClick={() => onSelect({ title: "Weekly Market Recap Breakdown", category: "Market News", icon: "📊" })}
              className="inline-flex items-center gap-4 px-8 py-4 bg-white text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-cyan-400 transition-all hover:scale-105 shadow-xl hover:shadow-cyan-500/20"
            >
              Full Breakdown
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="lg:w-1/2 w-full aspect-video bg-white/[0.02] dark:bg-white/[0.01] border border-white/5 rounded-[2rem] p-8 backdrop-blur-3xl relative">
            <div style={{ backgroundImage: `url("${noisePattern}")` }} className="absolute inset-0 opacity-10 pointer-events-none"></div>
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">S&P 500 Performance</h4>
              <div className="text-cyan-400 font-black text-sm">+2.12%</div>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10, fontWeight: 900}} dy={10} />
                  <YAxis hide domain={['dataMin - 50', 'dataMax + 50']} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#020617', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff'}}
                    itemStyle={{color: '#22d3ee', fontWeight: 900}}
                    labelStyle={{fontWeight: 900, marginBottom: '4px', textTransform: 'uppercase', fontSize: '10px'}}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#22d3ee" 
                    strokeWidth={5} 
                    dot={{fill: '#020617', stroke: '#22d3ee', strokeWidth: 3, r: 6}} 
                    activeDot={{r: 10, stroke: '#fff', strokeWidth: 4, fill: '#22d3ee'}} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketSnapshot;