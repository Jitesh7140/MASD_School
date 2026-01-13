 
import { Target, Eye, MapPin } from 'lucide-react';



export default function Vision() {
  return (
    <div className="max-w-5xl mx-auto my-4 md:my-8 p-8 bg-white shadow-sm border border-gray-100 rounded-2xl font-sans">
      
      {/* School Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b pb-6 border-gray-50">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 tracking-tight">M.A.S.D. PUBLIC SCHOOL</h1>
          <div className="flex items-center justify-center md:justify-start text-gray-500 mt-1">
            <MapPin size={16} className="mr-1" />
            <p className="text-xs md:text-sm">Narnaul, Haryana</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-[0.5rem] md:text-xs font-bold uppercase tracking-widest">
          Established Excellence
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Vision Section */}
        <div className=" space-y-4 ">
          <div className="flex items-center gap-3 text-blue-800">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye size={24} />
            </div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            "To be a premier institution of learning that nurtures young minds into 
            responsible, ethical, and creative global citizens, capable of leading 
            with integrity and compassion in an ever-evolving world."
          </p>
        </div>

        {/* Mission Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-green-700">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              To provide a safe and stimulating environment for academic excellence.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              To integrate modern technology with traditional values.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              To focus on holistic development through sports, arts, and character building.
            </li>
          </ul>
        </div>

      </div>

      {/* Message & Closing */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <div className="text-gray-700 leading-relaxed max-w-3xl">
          <p className="text-sm mb-4">
            At <strong>M.A.S.D. Public School</strong>, we believe that every child has 
            a unique potential. Our dedicated faculty works tirelessly to ensure that 
            students achieve their best not only in academics but also in life skills. 
            Excellence is not just our goal; it is our habit.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-gray-900 font-bold text-lg">Warm Regards,</p>
          <p className="text-blue-900 font-semibold">MASD School Management</p>
          <p className="text-gray-500 text-sm">Narnaul, Mahendragarh</p>
        </div>
      </div>
    </div>
  );
}