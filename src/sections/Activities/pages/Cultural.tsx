import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom'; // Production routing ke liye zaroori h
import { Camera, ChevronRight } from 'lucide-react';

const culturalData = [
  {
    title: "Annual Cultural Fest",
    description: "A grand celebration of dance, music, and drama where students showcase their hidden talents. We believe in providing a stage for every child to shine.",
    date: "25 Oct, 2025",
    category: "Main Event",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
  },
  {
    title: "Vocal & Instrumental Night",
    description: "From classical ragas to modern melodies, our students explore the world of sound. An evening dedicated to our school choir and orchestra.",
    date: "12 Nov, 2025",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800",
  },
  {
    title: "Art & Craft Exhibition",
    description: "Witness the imagination of young minds through colors and clay. Features paintings, sculptures, and sustainable art created by students.",
    date: "05 Dec, 2025",
    category: "Exhibition",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800",
  }
];

export default function Cultural() {
  return (
    <div className="max-w-6xl mx-auto py-4 px-4 md:px-4">

      {/* --- Simple Clean Header --- */}
      <div className="mb-12 border-l-4 border-[#084e91] pl-5">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Extra-Curricular</span>
        <h1 className="text-1xl md:text-3xl font-bold text-slate-900 mt-1">Cultural & Artistic Events</h1>
        <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl">
          Nurturing creativity and self-expression through various cultural activities and events throughout the academic year.
        </p>
      </div>

      {/* --- Events List --- */}
      <div className="space-y-12 md:space-y-20">
        {culturalData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6 md:gap-12">

            {/* Image: Lowered size and simple rounding */}
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
              <div className="overflow-hidden rounded-lg border border-slate-100 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] md:h-[250px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content: Minimal and focused */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold uppercase rounded">
                  {item.category}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-bold text-slate-900">{item.title}</h2>

              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={14} />
                  <span className="text-[11px] font-bold">{item.date}</span>
                </div>

                {/* <a href="/gallery">
                  <button className="text-[11px] font-bold text-[#084e91] uppercase tracking-wider hover:underline flex items-center gap-1">
                    <Camera size={14} /> View Gallery
                  </button>
                </a> */}



                {/* <div className="flex justify-center mt-10"> */}
                  <Link to="/gallery" className="group">
                   <button className="text-[11px] font-bold text-[#084e91] uppercase tracking-wider hover:underline flex items-center gap-1">
                      <Camera size={16} className="group-hover:rotate-12 transition-transform" />
                      <span>View Full Gallery</span>
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                {/* </div> */}

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* --- Minimal Footer Box --- */}
      <div className="mt-20 p-8 border border-slate-100 rounded-xl bg-slate-50/50 text-center">
        <h3 className="text-sm font-bold text-slate-800">Developing Holistic Excellence</h3>
        <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest">M.A.S.D. Public School, Narnaul</p>
      </div>
    </div>
  );
}