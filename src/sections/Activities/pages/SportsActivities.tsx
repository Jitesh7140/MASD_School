import { Trophy, Medal, ChevronRight } from 'lucide-react';

const sportsData = [
  {
    id: "01",
    title: "Cricket Excellence",
    description: "Our academy features professional turf pitches and coaching. We focus on technique, endurance, and mental toughness to prepare students for district and state-level tournaments.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800",
  },
  {
    id: "02",
    title: "Indoor Sports Hub",
    description: "A specialized facility for Badminton, Table Tennis, and Gymnastics. Equipped with safety flooring to ensure peak performance and student safety during practice.",
    image: "https://images.unsplash.com/photo-1544648397-52e9de640ba4?q=80&w=800",
  },
  {
    id: "03",
    title: "Track & Field Athletics",
    description: "Training the next generation of athletes. Our program emphasizes explosive power, agility, and the spirit of sportsmanship on and off the track.",
    image: "https://images.unsplash.com/photo-1461896756913-c8b40e722054?q=80&w=800",
  }
];

export default function SportsActivities() {
  return (
    <div className="bg-white py-6 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Professional Header */}
        <div className="mb-16 border-l-4 border-[#084e91] pl-5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Physical Education</span>
          <h2 className="text-1xl md:text-3xl font-bold text-slate-900 mt-1 uppercase tracking-tight">
            Sports <span className="text-[#084e91]">& Fitness</span>
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-xl">
            Developing teamwork and resilience through a wide range of athletic programs and state-of-the-art facilities.
          </p>
        </div>

        {/* Sports Grid - Alternating Layout */}
        <div className="space-y-16 md:space-y-24">
          {sportsData.map((sport, index) => (
            <div key={sport.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              
              {/* Image Box: Clean and Professional */}
              <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <div className="relative overflow-hidden rounded-xl border border-slate-100 shadow-sm group">
                  <img 
                    src={sport.image} 
                    alt={sport.title} 
                    className="w-full h-[220px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#084e91] text-white text-[10px] font-bold px-2 py-1 rounded">
                    {sport.id}
                  </div>
                </div>
              </div>

              {/* Content Box: Less color, focus on text */}
              <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#084e91]">
                   <Medal size={18} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Excellence In Sports</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 uppercase tracking-tight">
                  {sport.title}
                </h3>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {sport.description}
                </p>

                <div className="pt-2">
                  <button className="inline-flex items-center gap-2 text-[11px] font-bold text-[#084e91] border-b-2 border-[#084e91]/20 pb-1 hover:border-[#084e91] transition-all uppercase tracking-wider">
                    Learn More <ChevronRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimal Banner */}
        <div className="mt-24 bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 text-center">
          <Trophy className="mx-auto text-slate-300 mb-4" size={32} />
          <h2 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight">
            Nurturing Champion Spirits
          </h2>
          <p className="text-slate-500 text-[10px] md:text-xs mt-2 uppercase tracking-widest font-medium">
            M.A.S.D. Public School Athletics Legacy
          </p>
        </div>

      </div>
    </div>
  );
}