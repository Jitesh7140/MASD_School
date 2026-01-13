import {   ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";
import WelImg from "../../assets/images/welcome2.jpg";

export default function Welcome() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-16">
          
          {/* --- LEFT: CLEAN IMAGE AREA --- */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-full">
              <img
                src={WelImg}
                alt="School Campus"
                className="w-full h-[250px] md:h-full object-cover rounded-lg shadow-sm border border-gray-100"
              />
              {/* Simple Stat Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-5 py-3 rounded border border-gray-200 shadow-sm hidden md:flex items-center gap-3">
                <Users size={20} className="text-[#084e91]" />
                <div>
                  <p className="text-xl font-bold text-gray-900 leading-none">2500+</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Students enrolled</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: PROFESSIONAL CONTENT --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-4">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome to M.A.S.D School
              </h2>
              <div className="w-16 h-1 bg-[#084e91]"></div>
            </div>

            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                MASD School, Narnaul is a premier co-educational institution committed to academic excellence and character building. We provide a safe, disciplined, and learning-friendly environment tailored for modern education.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-[#084e91] mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Disciplined Environment</h4>
                    <p className="text-xs text-gray-500">Focused on character and values.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap size={20} className="text-[#084e91] mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Modern Infrastructure</h4>
                    <p className="text-xs text-gray-500">Equipped with hi-tech labs.</p>
                  </div>
                </div>
              </div>

              {showMore && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
                  <p>
                    Our experienced faculty ensures personalized attention, helping students master critical thinking and global values to prepare them for future challenges and successful careers.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="bg-[#084e91] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-blue-800 transition-colors flex items-center gap-2"
              >
                {showMore ? "Show Less" : "Read Full Overview"}
                <ArrowRight size={16} />
              </button>
              <button className="text-[#084e91] font-bold text-sm border-b-2 border-transparent hover:border-[#084e91] py-1 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* --- SIMPLE BOXES --- */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 border-t pt-10">
          <div className="flex gap-5 p-2">
            <div className="bg-gray-50 p-4 rounded-full h-fit">
              <Eye size={24} className="text-[#084e91]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To inspire students in a rapidly changing world by developing critical thinking and core values like honesty and perseverance.
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-2">
            <div className="bg-gray-50 p-4 rounded-full h-fit">
              <Heart size={24} className="text-[#084e91]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Core Values</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Excellence, Integrity, and Innovation. These values define our curriculum and nurture a positive school culture.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}