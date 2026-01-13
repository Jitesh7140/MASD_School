 
import React from 'react';

import img from '@/assets/images/message/founder-vision-mission.jpg';

const ChairmanMessage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto my-4 md:my-8 p-8 bg-white shadow-sm border border-gray-100 rounded-2xl font-sans">
      <div className="flex flex-col md:flex-row gap-5 items-start">
        
        {/* Left: Simple Profile Section */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start shrink-0">
          <div className="relative">
            <img 
              src={img}
              alt="Chairman"
              className="w-40 h-40 rounded-2xl object-cover border-2 border-blue-600 p-1 shadow-md"
            />
            <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2 rounded-lg shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider">Leadership</span>
            </div>
          </div>
          
          <div className="mt-6 text-center md:text-left">
            <h3 className="text-xl md:text-xl font-bold text-slate-900 leading-tight">Mr. Gopal Sharan Garg</h3>
             <p className="text-gray-500 text-xs mt-1">M.A.S.D. Public School, Narnaul</p>
          </div>
        </div>

        {/* Right: Message Content */}
        <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-10">
          <h2 className="text-xl md:text-3xl font-bold text-slate-800 mb-6 relative">
              Chairman's Message
            <span className="block h-1 w-16 bg-blue-600 mt-2 rounded-full"></span>
          </h2>
          
          <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-5 italic font-medium">
            <p>
              "Education is the foundation upon which we build our future."
            </p>
          </div>

          <div className="text-gray-600  leading-relaxed space-y-5 mt-4 text-xs md:text-base">
            <p>
              It is a matter of great pride that **M.A.S.D. Public School, Narnaul** has been 
              consistently striving for excellence in the field of education. Our vision is to 
              create an environment where students can discover their true potential and 
              develop into responsible citizens of tomorrow.
            </p>
            <p>
              We believe in holistic development, balancing academic rigor with values, 
              discipline, and creative thinking. Our dedicated team of educators works tirelessly 
              to ensure that every child receives the best possible guidance and modern facilities 
              to keep pace with the changing world.
            </p>
            <p>
              I extend my heartfelt gratitude to the parents for their continued trust and 
              cooperation. Together, we shall continue to reach new heights of success.
            </p>
            
            <div className="pt-8 border-t border-gray-50">
              <p className="text-slate-900 font-bold text-lg">Warm Regards,</p>
              <p className="text-blue-700 font-serif text-2xl my-2">Gopal Sharan Garg</p>
              <p className="text-sm font-medium text-gray-500">Chairman</p>
              <p className="text-xs text-gray-400 uppercase tracking-tighter">M.A.S.D. Public School, Narnaul</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChairmanMessage;