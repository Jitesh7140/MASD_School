import { useState } from 'react';
import { Calendar, MapPin, ImageIcon, X } from 'lucide-react';

// Images Import
import img from '@/assets/images/Activities/Events/trip.jpg';
import img2 from '@/assets/images/Activities/Events/sports.jpg';
import img3 from '@/assets/images/Activities/Events/test.jpg';
import img4 from '@/assets/images/Activities/Events/drama.jpg';
import img5 from '@/assets/images/Activities/Events/plant.jpg';

const eventsList = [
  {
    id: 1,
    title: "School Educational Trip 2026",
    description: "Our educational trip to Amer Fort, Jaipur, offered students a deep dive into India's majestic history and architectural brilliance.",
    date: "More Images",
    location: "Amer Fort Jaipur, India",
    image: img,
    gallery: [img, img2, img3, img4] // Yahan aap us trip ki sari photos add kar sakte hain
  },
  {
    id: 2,
    title: "Annual Sports Meet 2026",
    description: "Annual Sports Meet to encourage physical fitness, discipline, and healthy competition among students.",
    date: "More Images",
    location: "School Sports Ground",
    image: img2,
    gallery: [img2, img, img5]
  },
  {
    id: 3,
    title: "Road Safety Awareness Test",
    description: "We organized a Road Safety Awareness Test to educate students about traffic rules and safe driving habits.",
    date: "More Images",
    location: "M.A.S.D School Campus",
    image: img3,
    gallery: [img3, img4, img]
  },
  {
    id: 4,
    title: "Patriotic Drama & Tribute Program",
    description: "Students of M.A.S.D. Public School presented a patriotic drama to honor our brave soldiers.",
    date: "More Images",
    location: "ASD Auditorium, Narnaul",
    image: img4,
    gallery: [img4, img2, img3]
  },
  {
    id: 5,
    title: "Tree Plantation Drive",
    description: "M.A.S.D. Public School organized a tree plantation drive to promote environmental awareness.",
    date: "More Images",
    location: "School Campus Garden",
    image: img5,
    gallery: [img5, img, img2]
  }
];

export default function Events() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const toggleGallery = (id: number) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-2 space-y-20">

      {/* Header */}
      <div className="text-center mb-5 md:mb-16">
        <h1 className="text-lg md:text-3xl font-extrabold text-slate-900 uppercase">Events Gallery</h1>
        <p className="text-blue-600 text-xs md:text-base  font-medium mt-2">Click on any event card to explore inside photos</p>
      </div>

      <div className="space-y-24">
        {eventsList.map((event, index) => (
          <div key={event.id} className="group border border-transparent hover:border-blue-100 rounded-[2.5rem] transition-all p-4">

            {/* Main Content (Zig-Zag) */}
            <div
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center cursor-pointer`}
              onClick={() => toggleGallery(event.id)}
            >
              {/* Image Part */}
              <div className="w-full md:w-1/2 relative">
                <div className={`absolute -inset-2 bg-blue-50 rounded-[2.5rem] transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:rotate-0 transition-transform`}></div>
                <img src={event.image} alt={event.title} className="relative rounded-[2rem] shadow-lg w-full h-[180px] md:h-[320px] object-cover border-4 border-white" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-[2rem]">
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                    <ImageIcon size={16} /> View More
                  </span>
                </div>
              </div>

              {/* Details Part */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-lg md:text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{event.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-lg">{event.description}</p>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-xl">
                    <Calendar size={10} className="mr-2" />
                    <span className='text-xs'>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500 font-medium">
                    <MapPin size={18} className="mr-2 text-red-400" />
                    <span className='text-xs'>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inside Gallery Section (Expandable) */}
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeEvent === event.id ? 'max-h-[1000px] mt-12 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-dashed border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs md:text-sm font-bold text-slate-700 flex items-center gap-2">
                    <ImageIcon className="text-blue-600" size={20} />
                    Inside "{event.title}" Album
                  </h3>
                  <button onClick={() => setActiveEvent(null)} className="text-gray-400 hover:text-red-500"><X /></button>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {event.gallery.map((gImg, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-transform">
                      <img src={gImg} alt="gallery" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}