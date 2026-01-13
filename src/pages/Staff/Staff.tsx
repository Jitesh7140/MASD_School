import { useState } from 'react';
import { GraduationCap, Award, Search, User2 } from 'lucide-react';

const staffData = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Principal",
    department: "Administration",
    qualification: "Ph.D., M.Sc. Physics",
    experience: "25+ Yrs",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", 
  },
  {
    id: 2,
    name: "Mrs. Sunita Verma",
    role: "HOD English",
    department: "Senior Wing",
    qualification: "M.A., B.Ed",
    experience: "15+ Yrs",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Mr. Amit Yadav",
    role: "Maths Teacher",
    department: "Senior Wing",
    qualification: "M.Sc., B.Ed",
    experience: "12+ Yrs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Ms. Anjali Rao",
    role: "Science Teacher",
    department: "Senior Wing",
    qualification: "M.Sc., B.Ed",
    experience: "8+ Yrs",
    image: "https://images.unsplash.com/photo-1580894732230-2850122603f1?auto=format&fit=crop&q=80&w=400"
  },
];

export default function Staff() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const departments = ["All", "Administration", "Senior Wing", "Primary Wing", "Physical Ed."];

  const filteredStaff = staffData.filter(member => {
    const matchesFilter = filter === "All" || member.department === filter;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="bg-white py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Compact on Mobile */}
        <div className="mb-6 md:mb-10 pb-4 border-b border-gray-100 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">Our Educators</h2>
            <p className="text-[11px] md:text-sm text-slate-500 mt-1">Dedicated team shaping the future of MASD.</p>
          </div>
          
          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input 
              type="text" 
              placeholder="Search teacher..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none focus:border-[#084e91]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Tabs - Horizontal Scroll on Mobile */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold whitespace-nowrap transition-all border ${
                filter === dept 
                ? 'bg-[#084e91] border-[#084e91] text-white' 
                : 'bg-white border-gray-200 text-slate-500 hover:bg-gray-50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Staff Grid - 2 Columns on Mobile, 4 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredStaff.map((member) => (
            <div key={member.id} className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-sm bg-white">
              
              {/* Profile Image - Smaller height on mobile */}
              <div className="aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-gray-50 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-2 left-2">
                   <span className="bg-[#084e91] text-white px-1.5 py-0.5 rounded text-[8px] md:text-[10px] font-bold uppercase">
                      {member.role}
                   </span>
                </div>
              </div>

              {/* Details - Very compact on mobile */}
              <div className="p-2.5 md:p-4 space-y-2">
                <h3 className="text-xs md:text-base font-bold text-slate-900 leading-tight line-clamp-1">
                  {member.name}
                </h3>
                
                <div className="space-y-1">
                  <div className="flex items-start gap-1.5 text-slate-500">
                    <GraduationCap size={12} className="text-[#084e91] mt-0.5 shrink-0" />
                    <span className="text-[9px] md:text-[11px] leading-tight font-medium line-clamp-1">{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Award size={12} className="text-[#084e91] shrink-0" />
                    <span className="text-[9px] md:text-[11px] font-medium">{member.experience} Exp.</span>
                  </div>
                </div>

                <div className="pt-1.5 border-t border-gray-50 flex items-center gap-1 text-gray-400">
                  <User2 size={10} />
                  <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-tight">{member.department}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStaff.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-400 text-xs">No educators found.</p>
          </div>
        )}
      </div>
    </section>
  );
}