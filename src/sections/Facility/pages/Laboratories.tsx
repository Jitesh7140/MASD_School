import { Beaker, Atom, Microchip, Microscope, CheckCircle2 } from 'lucide-react';

const labData = [
  {
    title: "Physics Laboratory",
    description: "Equipped with the latest optical and electrical instruments. Our lab allows students to explore concepts of mechanics, light, and electricity through hands-on experiments.",
    icon: <Atom className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Optical Benches", "Electronic Kits", "Modern Multimeters"]
  },
  {
    title: "Chemistry Laboratory",
    description: "A well-ventilated space with advanced safety measures. Students perform chemical analysis and organic synthesis using high-grade reagents and apparatus.",
    icon: <Beaker className="text-emerald-600" size={24} />,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
    features: ["Safety Showers", "Distillation Units", "Analytical Balances"]
  },
  {
    title: "Biology Laboratory",
    description: "Discover the wonders of life. Our bio-lab features high-resolution microscopes and a vast collection of botanical and zoological specimens.",
    icon: <Microscope className="text-purple-600" size={24} />,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800",
    features: ["Compound Microscopes", "Human Anatomy Models", "Permanent Slides"]
  },
  {
    title: "Computer & IT Lab",
    description: "High-speed internet and latest software. Our IT lab ensures students stay ahead in the digital age with coding, AI projects, and digital literacy.",
    icon: <Microchip className="text-orange-600" size={24} />,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    features: ["High-speed LAN", "Latest Workstations", "Educational Software"]
  }
];

export default function Laboratories() {
  return (
    <div className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Minimal Header --- */}
        <div className="mb-16 border-l-4 border-[#084e91] pl-5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Academic Infrastructure</span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 uppercase">Advanced Laboratories</h1>
          <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
            Hands-on learning is at the heart of our curriculum. Our laboratories are designed to meet CBSE standards and foster a spirit of inquiry.
          </p>
        </div>

        {/* --- Labs Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {labData.map((lab, index) => (
            <div key={index} className="flex flex-col border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={lab.image} 
                  alt={lab.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-sm">
                  {lab.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
                  {lab.title}
                </h2>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 flex-1">
                  {lab.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-50">
                  {lab.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-slate-300" />
                      <span className="text-[10px] md:text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Safety Disclaimer --- */}
        <div className="mt-20 text-center p-6 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-[0.15em]">
            Note: All laboratories are equipped with required safety gear and supervised by experienced faculty.
          </p>
        </div>

      </div>
    </div>
  );
}