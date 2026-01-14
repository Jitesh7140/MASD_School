import { useState } from 'react';
import { GraduationCap, CheckCircle, Clock, FileText, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const classCriteria = [
  {
    id: "nursery",
    className: "Nursery",
    age: "3+ Years",
    documents: ["Birth Certificate", "Aadhar Card", "4 Passport Photos", "Family ID"],
    process: "Interaction with Parents",
    note: "Basic communication skills required."
  },
  {
    id: "primary",
    className: "Primary (1st - 5th)",
    age: "6+ Years",
    documents: ["Previous SLC", "Report Card", "Aadhar Card", "Family ID"],
    process: "Basic Entrance Test",
    note: "Admission depends on seat availability."
  },
  {
    id: "senior",
    className: "Secondary (6th - 10th)",
    age: "11+ Years",
    documents: ["Original SLC", "Character Certificate", "Aadhar Card", "Family ID"],
    process: "Written Exam & Interview",
    note: "Strict adherence to CBSE guidelines."
  }
];

export default function Criteria() {
  const [selectedClass, setSelectedClass] = useState(classCriteria[0]);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header - Simple & Clean */}
        <div className="mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Admission Criteria
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Review the eligibility and documentation required for admission.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">

          {/* Left: Navigation (Buttons) */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
            {classCriteria.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedClass(item)}
                className={`flex-shrink-0 md:w-full flex items-center justify-between px-4 py-3 rounded-md font-semibold text-sm transition-all border ${selectedClass.id === item.id
                  ? 'bg-[#084e91] border-[#084e91] text-white'
                  : 'bg-white border-gray-200 text-slate-600 hover:bg-gray-50'
                  }`}
              >
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} />
                  {item.className}
                </span>
                <ChevronRight size={14} className={`hidden md:block ${selectedClass.id === item.id ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* Right: Content Card */}
          <div className="w-full md:w-2/3">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">

              {/* Card Sub-Header */}
              <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                <h3 className="text-sm md:text-base font-bold text-slate-800">
                  Requirements for <span className="text-[#084e91]">{selectedClass.className}</span>
                </h3>
              </div>

              <div className="p-5 space-y-6">

                {/* Age & Selection (Grid) */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#084e91] mb-1">
                      <Clock size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Age Limit</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{selectedClass.age}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[#084e91] mb-1">
                      <CheckCircle size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Selection</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{selectedClass.process}</p>
                  </div>
                </div>

                {/* Documents List */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={14} className="text-gray-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Required Documents</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedClass.documents.map((doc, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="bg-blue-50/50 p-3 rounded flex items-start gap-2 border border-blue-100/50">
                  <Info size={14} className="text-[#084e91] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-600 leading-tight">
                    <span className="font-bold text-[#084e91]">Note:</span> {selectedClass.note}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Minimal Help Desk */}
        <div className="mt-6 py-4 px-5 bg-slate-50 rounded-lg border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <p className="text-[11px] md:text-xs text-slate-500 italic">
            * Office Hours: 9:00 AM - 2:00 PM (Monday to Saturday)
          </p>
          <Link to="/contact" className="group">
            <p className="text-[11px] md:text-xs font-bold text-[#084e91] cursor-pointer hover:underline">

              Contact Admissions Helpdesk →
            </p>
          </Link>
        </div>

      </div>
    </section >
  );
}