
import React from 'react';

import img from '@/assets/images/welcome.jpg';

const History: React.FC = () => {
  return ( 
    <div className="max-w-4xl mx-auto my-4 md:my-8  p-8 bg-white shadow-lg rounded-2xl border-t-4 border-blue-800 font-sans">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        
        {/* Left Side: School Symbol/Image */}
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="w-full h-42 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 overflow-hidden shadow-inner">
             {/* Replace with MASD School Logo */}
            <img 
              src={img}
              alt="M.A.S.D. School Logo"
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/100?text=MASD"; }}
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-blue-900 leading-tight">M.A.S.D. Public School</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Narnaul, Haryana</p>
          </div>
        </div>

        {/* Right Side: History Content */}
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="bg-blue-800 w-2 h-8 rounded-full"></span>
            Our History
          </h2>
          
          <div className="text-gray-700 leading-relaxed space-y-5 text-xs md:text-[17px]">
            <p className="font-medium text-gray-900">
              M.A.S.D. Public School has been a cornerstone of quality education in Narnaul for decades.
            </p>
            
            <p>
              Founded with the vision to blend traditional values with modern excellence, our institution 
              started as a humble dream to serve the community. Over the years, we have grown into 
              one of the most prestigious schools in the region, known for our disciplined environment 
              and academic rigour.
            </p>

            <p>
              Our journey is marked by the success of thousands of alumni who are now serving the nation 
              in various prestigious fields. From state-of-the-art laboratories to a rich culture of 
              sports and co-curricular activities, M.A.S.D. has consistently evolved to meet the 
              challenges of the changing times.
            </p>

            <p>
              Today, we stand proud as a lighthouse of knowledge, continuing our legacy of 
              "Service Before Self" and nurturing the leaders of tomorrow.
            </p>
            
            <div className="pt-6 mt-6 border-t border-gray-100">
              <p className="font-bold text-blue-900 italic">Warm Regards,</p>
              <p className="text-gray-600 font-medium">Management & Staff</p>
              <p className="text-sm text-blue-700 font-bold uppercase">M.A.S.D. Public School, Narnaul</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default History;