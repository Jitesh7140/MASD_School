import { useState } from 'react';
import { GraduationCap, Award, Search, User2, BookOpen } from 'lucide-react';

const staffData = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Principal",
    department: "Administration",
    qualification: "Ph.D., M.Sc. Physics",
    experience: "25+ Yrs",
  },
  {
    id: 2,
    name: "Mrs. Sunita Verma",
    role: "HOD English",
    department: "Senior Wing",
    qualification: "M.A., B.Ed",
    experience: "15+ Yrs",
  },
  {
    id: 3,
    name: "Mr. Amit Yadav",
    role: "Maths Teacher",
    department: "Senior Wing",
    qualification: "M.Sc., B.Ed",
    experience: "12+ Yrs",
  },
  {
    id: 4,
    name: "Ms. Anjali Rao",
    role: "Science Teacher",
    department: "Senior Wing",
    qualification: "M.Sc., B.Ed",
    experience: "8+ Yrs",
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
    <section className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Simple & Focused */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="border-l-4 border-[#084e91] pl-5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Faculty</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">Teaching Professionals</h2>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
            <input 
              type="text" 
              placeholder="Search by name..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#084e91] focus:bg-white transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-4 py-2 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all ${
                filter === dept 
                ? 'bg-[#084e91] text-white shadow-md' 
                : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Staff Grid - Clean Text-Based Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((member) => (
            <div key={member.id} className="relative p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-200 transition-all flex flex-col">
              
              {/* Top Row: Initials Avatar & Role */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-[#084e91] font-bold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-[9px] bg-blue-50 text-[#084e91] px-2 py-1 rounded font-black uppercase tracking-tighter">
                  {member.role}
                </span>
              </div>

              {/* Middle Row: Name & Department */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <User2 size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-tight">{member.department}</span>
                </div>
              </div>

              {/* Bottom Row: Specs */}
              <div className="mt-auto pt-5 border-t border-slate-50 space-y-2">
                <div className="flex items-center gap-2 text-slate-500">
                  <GraduationCap size={14} className="text-slate-300 shrink-0" />
                  <span className="text-[11px] font-medium leading-tight">{member.qualification}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Award size={14} className="text-slate-300 shrink-0" />
                  <span className="text-[11px] font-medium">{member.experience} Excellence</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStaff.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <BookOpen className="mx-auto text-slate-200 mb-2" size={32} />
            <p className="text-slate-400 text-xs font-medium">No faculty members found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}