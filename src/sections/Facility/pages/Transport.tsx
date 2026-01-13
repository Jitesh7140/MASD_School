import { Bus, MapPin, ShieldCheck, Phone, Clock, CheckCircle } from 'lucide-react';

const transportFeatures = [
  {
    title: "GPS Tracking",
    desc: "All buses are equipped with real-time GPS tracking for student safety and precise timing.",
    icon: <MapPin size={20} />
  },
  {
    title: "Trained Staff",
    desc: "Experienced drivers and dedicated bus attendants ensure a disciplined and safe commute.",
    icon: <ShieldCheck size={20} />
  },
  {
    title: "CCTV Surveillance",
    desc: "In-bus cameras monitor activity to maintain high safety standards throughout the journey.",
    icon: <Bus size={20} />
  }
];

export default function Transport() {
  return (
    <div className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Minimal Header --- */}
        <div className="mb-12 border-l-4 border-[#084e91] pl-5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student Logistics</span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 uppercase">Transport Facilities</h1>
          <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
            M.A.S.D. Public School provides a safe, reliable, and well-connected transport network covering all major parts of Narnaul and surrounding areas.
          </p>
        </div>

        {/* --- Main Visual & Emergency Contact --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-[250px] md:h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200" 
              alt="School Bus Fleet" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px]"></div>
            <div className="relative">
              <Phone className="text-blue-400 mb-4" size={24} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">Transport Helpdesk</h3>
              <p className="text-xl font-bold mb-1">+91 12345 67890</p>
              <p className="text-[10px] text-slate-400 font-medium">Available during school hours</p>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="text-slate-400" size={16} />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">First Pickup</p>
                    <p className="text-xs font-bold text-white">07:15 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transportFeatures.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-100 transition-colors">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#084e91] mb-4">
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

        {/* --- Safety Norms Section --- */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Safety Protocol & Rules</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Speed governors installed for strictly controlled speed limits.",
              "Students must reach their stop 5 minutes before the scheduled time.",
              "No student is allowed to board/alight from the bus while it is in motion.",
              "The bus facility cannot be withdrawn in the middle of a session.",
              "First-aid kits and fire extinguishers are mandatory in every bus."
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-lg border border-slate-100">
                <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-[11px] md:text-xs text-slate-600 font-medium">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Footer Disclaimer --- */}
        <div className="mt-24 text-center">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            Safety First • Reliable Commute • M.A.S.D. Public School
          </p>
        </div>

      </div>
    </div>
  );
}