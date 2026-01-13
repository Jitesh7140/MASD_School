import React from 'react';

import img from '@/assets/images/message/Directorimg.jpeg';

// ---------------------------------------------------------------------------------------------
// 
//                       ViceChairmanMessage   ===      Director's Message
// 
// ------------------------------------------------------------------------------------------------



const ViceChairmanMessage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto my-4 md:my-8 p-8 bg-white shadow-lg rounded-2xl border border-gray-100 font-sans">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative">
            <img 
              src={img}
              alt="Director - Mr. Govind Bhardwaj"
              className="w-40 h-40 rounded-2xl object-cover border-2 border-blue-600 p-1 shadow-md"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              Director
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">Mr. Govind Bhardwaj</h3>
            
            <p className="text-gray-500 text-xs md:text-sm mt-1">M.A.S.D. Public School, Narnaul</p>
          </div>
        </div>

        {/* Message Section */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-xl md:text-3xl font-extrabold text-blue-900 tracking-tight">
              Director's Message
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
          </div>
          
          <div className="text-gray-700 leading-relaxed space-y-5 text-lg">
            <p className="font-medium text-sm md:text-lg italic text-blue-800">
              "True education is the harmony of head, heart, and hand."
            </p>
            
            <p className='text-xs md:text-base'>
              It is a matter of great pride to welcome you to <strong>M.A.S.D. Public School, Narnaul</strong>. 
              Our institution has always stood for academic excellence, character building, and the overall 
              holistic development of our students. We believe that every child has a unique potential that 
              needs to be nurtured with care and the right guidance.
            </p>
            
            <p className='text-xs md:text-base'>
              In today’s fast-paced world, we combine traditional values with modern technology to ensure 
              our students are future-ready. Our dedicated staff works tirelessly to create an environment 
              where learning is meaningful, rewarding, and discipline is a way of life.
            </p>
            
            <p className='text-xs md:text-base'>
              I encourage parents to stay actively involved in their ward's journey. Together, let us 
              strive to make our children responsible citizens and compassionate human beings.
            </p>
            
            <div className="pt-6 border-t border-gray-100">
              <p className="font-bold text-gray-900">Warm Regards,</p>
              <p className="text-blue-700 font-bold text-xl mt-1">Mr. Govind Bhardwaj</p>
              <p className="text-gray-500 text-sm">Director, M.A.S.D. Public School</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViceChairmanMessage;