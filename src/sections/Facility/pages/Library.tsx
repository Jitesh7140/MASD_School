import { BookOpen, Search, Clock, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

const libraryFeatures = [
  {
    title: "Vast Collection",
    desc: "Over 10,000+ books ranging from academic texts to classic literature and modern fiction.",
    icon: <BookOpen size={20} />
  },
  {
    title: "Digital Catalog",
    desc: "Fully computerized library management system for easy book search and automated issuing.",
    icon: <Search size={20} />
  },
  {
    title: "Quiet Study Zone",
    desc: "Dedicated silent zones with comfortable seating to provide a perfect environment for focus.",
    icon: <GraduationCap size={20} />
  }
];

export default function Library() {
  return (
    <div className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Minimal Header --- */}
        <div className="mb-12 border-l-4 border-[#084e91] pl-5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Learning Resource Centre</span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 uppercase">The School Library</h1>
          <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
            Our library is a gateway to knowledge and imagination, fostering a lifelong love for reading and research in every student.
          </p>
        </div>

        {/* --- Main Image Section --- */}
        <div className="mb-16 relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200" 
            alt="School Library" 
            className="w-full h-[250px] md:h-[450px] object-cover"
          />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 max-w-xs hidden md:block">
             <div className="flex items-center gap-2 mb-2 text-[#084e91]">
               <Clock size={16} />
               <span className="text-[10px] font-bold uppercase tracking-wider">Visiting Hours</span>
             </div>
             <p className="text-xs text-slate-600 font-medium">Monday – Saturday: <br /> 08:30 AM – 03:00 PM</p>
          </div>
        </div>

        {/* --- Library Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {libraryFeatures.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-slate-50 bg-slate-50/30">
              <div className="w-10 h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center text-[#084e91] mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Quick Guidelines List --- */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck size={20} className="text-slate-400" />
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Library Guidelines</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Maintain absolute silence in the reading room.",
              "Handle books with care; marking or tearing is strictly prohibited.",
              "Books are issued for a maximum period of 14 days.",
              "Reference books and journals must be read within the library.",
              "A valid Student ID is mandatory for all transactions."
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-lg">
                <CheckCircle size={14} className="text-emerald-500 mt-0.5" />
                <span className="text-xs text-slate-600 font-medium">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            Empowering Minds Through Reading • M.A.S.D. Public School
          </p>
        </div>

      </div>
    </div>
  );
}