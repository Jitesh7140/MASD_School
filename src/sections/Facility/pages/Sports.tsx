import { Trophy, Activity, Target, ShieldCheck,   ChevronRight } from 'lucide-react';

import img from '@/assets/images/AcaPath2.jpeg';

const sportsList = [
  {
    name: "Cricket",
    desc: "Professional coaching with turf pitches and net practice facilities.",
    icon: <Target size={20} />
  },
  {
    name: "Basketball",
    desc: "Standard size courts with floodlights for evening practice sessions.",
    icon: <Activity size={20} />
  },
  {
    name: "Volleyball",
    desc: "Dedicated tracks for sprinting, long jump, and physical endurance training.",
    icon: <Trophy size={20} />
  },
  {
    name: "Football",
    desc: "Dedicated tracks for sprinting, long jump, and physical endurance training.",
    icon: <Trophy size={20} />
  },
  {
    name: "Athletics",
    desc: "Dedicated tracks for sprinting, long jump, and physical endurance training.",
    icon: <Trophy size={20} />
  }
];

export default function Sports() {
  return (
    <div className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Minimal Header --- */}
        <div className="mb-12 border-l-4 border-[#084e91] pl-5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Physical Education</span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 uppercase">Sports & Athletics</h1>
          <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
            At M.A.S.D., sports are an integral part of the curriculum. We focus on building 
            team spirit, discipline, and physical fitness through expert-led training.
          </p>
        </div>

        {/* --- Hero Sports Image --- */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group">
          <img 
            src={img} 
            alt="Students playing sports" 
            className="w-full h-[250px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-200">
             <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={16} />
                <span className="text-[10px] font-bold text-slate-700 uppercase">Expert Supervision</span>
             </div>
          </div>
        </div>

        {/* --- Sports Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sportsList.map((item, index) => (
            <div key={index} className="p-6 rounded-xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center text-[#084e91] mb-4 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight mb-2">
                {item.name}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {item.desc}
              </p>
              <button className="text-[10px] font-black text-[#084e91] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                Details <ChevronRight size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* --- Achievement Highlight --- */}
        {/* <div className="mt-20 flex flex-col md:flex-row items-center gap-8 p-8 bg-slate-900 rounded-2xl text-white">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-blue-400">
               <Users size={18} />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Inter-School Success</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold">Over 50+ Medals in District Level Championships</h2>
            <p className="text-slate-400 text-xs mt-2">Continuous excellence in various sporting disciplines for the academic year 2025-26.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center px-4 py-2 border border-white/10 rounded-lg">
               <p className="text-xl font-bold">12</p>
               <p className="text-[8px] uppercase text-slate-400">Gold</p>
            </div>
            <div className="text-center px-4 py-2 border border-white/10 rounded-lg">
               <p className="text-xl font-bold">08</p>
               <p className="text-[8px] uppercase text-slate-400">Silver</p>
            </div>
          </div>
        </div> */}

        {/* --- Simple Footer Label --- */}
        <div className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            Champions in the Making • M.A.S.D. Public School
          </p>
        </div>

      </div>
    </div>
  );
}