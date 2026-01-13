import { Monitor, Cpu, Globe, Lightbulb, CheckCircle, Video } from 'lucide-react';

const techFeatures = [
  {
    title: "Interactive Boards",
    desc: "Touch-enabled smart boards that turn every lesson into a visual and interactive experience.",
    icon: <Monitor size={20} />
  },
  {
    title: "Rich Media Content",
    desc: "Access to a vast library of 3D animations, educational videos, and digital modules.",
    icon: <Video size={20} />
  },
  {
    title: "Global Connectivity",
    desc: "High-speed internet allows teachers to bring real-world examples into the classroom instantly.",
    icon: <Globe size={20} />
  }
];

export default function SmartClass() {
  return (
    <div className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Minimal Header --- */}
        <div className="mb-12 border-l-4 border-[#084e91] pl-5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Future-Ready Education</span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 uppercase">Smart Classrooms</h1>
          <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
            Integrating technology with traditional teaching, our smart classes provide a 
            multi-sensory learning environment that improves student engagement and retention.
          </p>
        </div>

        {/* --- Hero Image Section --- */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 relative group">
          <img 
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200" 
            alt="Smart Classroom Environment" 
            className="w-full h-[250px] md:h-[450px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-[#084e91] text-white p-3 rounded-lg shadow-xl">
             <Lightbulb size={20} className="animate-pulse" />
          </div>
        </div>

        {/* --- Tech Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techFeatures.map((item, index) => (
            <div key={index} className="p-6 rounded-xl border border-slate-100 hover:border-blue-100 transition-all">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#084e91] mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Benefits List --- */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Why Smart Learning?</h2>
            <div className="space-y-4">
              {[
                "Simplifies complex concepts through 3D visualization.",
                "Increases student participation and collaboration.",
                "Caters to different learning styles (Visual, Auditory, Kinesthetic).",
                "Environmentally friendly - significantly reduces paper usage.",
                "Prepares students for a tech-driven future."
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-600 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-4 text-[#084e91]">
               <Cpu size={24} />
               <h3 className="text-sm font-bold uppercase tracking-widest">Our Infrastructure</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every classroom at M.A.S.D. is equipped with dedicated digital systems, high-definition projectors, and high-speed Wi-Fi, ensuring that every student gets the best out of digital education.
            </p>
          </div>
        </div>

        {/* --- Minimal Footer --- */}
        <div className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            Digital Innovation in Education • M.A.S.D. Public School
          </p>
        </div>

      </div>
    </div>
  );
}