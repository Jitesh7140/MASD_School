import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import img1 from "../../assets/images/HomeGallery/1.jpg";
import img2 from '../../assets/images/HomeGallery/2.jpg';
import img3 from '../../assets/images/HomeGallery/3.jpg';
import img4 from '../../assets/images/HomeGallery/4.png';
import img5 from '../../assets/images/HomeGallery/5.jpeg';
import img6 from '../../assets/images/HomeGallery/6.jpeg';
import img7 from '../../assets/images/HomeGallery/7.jpeg';
import img8 from '../../assets/images/HomeGallery/8.jpeg';

const images = [
  // col-span-2 mobile par puri width lega, col-span-1 aadhi width lega
  { src: img1, col: "col-span-2 md:col-span-2", row: "row-span-2 md:row-span-2" },
  { src: img2, col: "col-span-1 md:col-span-1", row: "row-span-1 md:row-span-1" },
  { src: img3, col: "col-span-1 md:col-span-1", row: "row-span-1 md:row-span-2" },
  { src: img4, col: "col-span-1 md:col-span-1", row: "row-span-2 md:row-span-2" }, // Tall on mobile too
  { src: img5, col: "col-span-1 md:col-span-2", row: "row-span-1 md:row-span-1" },
  { src: img6, col: "col-span-1 md:col-span-1", row: "row-span-1 md:row-span-1" },
  { src: img7, col: "col-span-1 md:col-span-1", row: "row-span-1 md:row-span-1" },
  { src: img7, col: "col-span-1 md:col-span-1", row: "row-span-1 md:row-span-1" },
  { src: img8, col: "col-span-2 md:col-span-2", row: "row-span-1 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">

        {/* Simple Header */}
        <div className="mb-8 md:mb-12 border-l-4 border-[#084e91] pl-4">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
            Our Gallery
          </h2>
          <p className="text-gray-500 text-xs md:text-base">Moments of joy and learning at MASD</p>
        </div>

        {/* --- DYNAMIC GRID SYSTEM --- */}
        {/* Mobile: 2 columns | Desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[100px] md:auto-rows-[160px] gap-2 md:gap-4 mb-10">
          {images.map((img, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={index}
              className={`relative overflow-hidden rounded-xl bg-gray-100 group shadow-sm ${img.col} ${img.row}`}
            >
              <img
                src={img.src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Minimal Overlay for interaction */}
              {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={24} />
              </div> */}
            </motion.div>
          ))}
        </div>


        {/* View All Button Section */}
        <div className="flex flex-col items-center justify-center mt-12 space-y-4">
          {/* Optional: Ek choti line design ke liye */}
          <div className="w-24 h-1 bg-[#084e91]/20 rounded-full mb-2"></div>

          <Link to="/gallery" className="no-underline">
            <motion.button
              whileHover={{ scale: 1.05, gap: '12px' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 bg-[#084e91] text-white px-10 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-[0_10px_20px_rgba(8,78,145,0.3)] hover:shadow-[0_15px_25px_rgba(8,78,145,0.4)]"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </Link>

          {/* <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
            +50 more photos
          </p> */}
        </div>

      </div>
    </section>
  );
}