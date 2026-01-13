

import img from '@/assets/images/message/principal2.jpg';

export default function PrincipalMessage() {
  return (
    <div className="max-w-5xl mx-auto my-4 md:my-8 p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 font-sans">
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
        
        {/* Profile Section */}
        <div className="w-full md:w-1/4 flex flex-col items-start shrink-0">
          <div className="relative  ">
            <img 
              src={img}
              alt="Principal"
              className="w-40 h-40 rounded-2xl object-cover border-2 border-blue-600 p-1 shadow-md"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              Principal
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-slate-800">Mr. Shankracharya</h3>
          
            <p className="text-gray-400 text-xs mt-1">M.A.S.D. Public School, Narnaul</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-6 relative inline-block">
            Principal Message
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h1>
          
          <div className="text-gray-600 space-y-5 text-sm md:text-lg leading-relaxed text-justify">
            <p>
              It is a matter of great pride to be a part of <strong>M.A.S.D. Public School, Narnaul</strong>. 
              Our institution has always stood for excellence, tradition, and the holistic development 
              of every student who walks through our gates.
            </p>
            
            <p>
              We believe that education is not just about academic results, but about character building 
              and preparing our children for the challenges of the modern world. At M.A.S.D., we provide 
              a nurturing environment where technology meets values, ensuring that our students stay 
              ahead while remaining rooted in our cultural heritage.
            </p>
            
            <p>
              I encourage all parents to be active partners in this journey. Together, we can ensure 
              that your ward achieves their full potential and becomes a responsible citizen of our nation.
            </p>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-slate-800 font-bold mb-1">Warm regards,</p>
              <p className="text-blue-700 font-serif text-2xl italic">Mr. Shankracharya</p>
              <p className="text-sm text-gray-500 mt-1">Principal, M.A.S.D. School Narnaul</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}