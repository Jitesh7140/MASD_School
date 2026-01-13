import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cr1 from "../../assets/images/cr1.jpg";
import cr2 from "../../assets/images/cr2.jpeg";
import cr3 from "../../assets/images/cr3.png";
import cr4 from "../../assets/images/cr4.jpg";
import cr5 from "../../assets/images/cr5.jpeg";

const images = [
  { url: cr3, title: "Fun Fair & Cultural Fest", desc: "Fun Fair Showcasing Student’s Cultural Talent" },
  { url: cr1, title: "National Election Day Awareness Program", desc: "Students learning the importance of democratic participation" },
  { url: cr2, title: "Our School Campus", desc: "A peaceful and inspiring place for learning." },
  { url: cr4, title: "Cultural Activities", desc: "Celebrating diversity through art and music." },
  { url: cr5, title: "Matric Scholars", desc: "Hard work shaping their academic journey." },
];

const Gride = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    // Added 'max-w-full' and ensured overflow-hidden is strict
    <div className="relative group w-full max-w-full h-[20rem] sm:h-[25rem] md:h-[35rem] lg:h-[43rem] overflow-hidden bg-gray-900">
      
      {/* --- SLIDES --- */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105" // Kam scale (105) kiya taaki mobile par stretch na ho
          }`}
        >
          {/* Overlay - Z-index fixed */}
          <div className="absolute inset-0 bg-black/40 z-10 w-full h-full" />
          
          <img
            src={img.url}
            alt={img.title}
            // w-full h-full + object-cover ensures all images look the same size
            className="w-full h-full object-cover object-center"
          />

          {/* CAPTION AREA - Improved for Small Devices */}
          <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 delay-300 ${
            i === index ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}>
            <h2 className="text-white text-1xl md:text-2xl lg:text-4xl font-black mb-2 md:mb-4 drop-shadow-2xl max-w-[90%]">
              {img.title}
            </h2>
            <p className="text-yellow-400 text-xs md:text-base font-medium max-w-xl drop-shadow-md">
              {img.desc}
            </p>
            {/* <button className="mt-6 md:mt-8 bg-yellow-400 hover:bg-white text-blue-900 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-base transition-all hover:scale-105 active:scale-95 shadow-xl">
              Learn More
            </button> */}
          </div>
        </div>
      ))}

      {/* --- NAVIGATION BUTTONS (Hidden on very small mobile, visible on hover/tablet) --- */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/20 md:bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/20 hidden sm:block"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/20 md:bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/20 hidden sm:block"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      {/* --- PROGRESS INDICATORS (Dots) --- */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index ? "w-8 md:w-10 h-2 md:h-3 bg-yellow-400" : "w-2 md:w-3 h-2 md:h-3 bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Gride;