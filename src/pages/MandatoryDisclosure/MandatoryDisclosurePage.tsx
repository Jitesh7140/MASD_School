// MandatoryDisclosurePage


import { FileText, Download, CheckCircle, ShieldCheck } from 'lucide-react';

// --- Global Configuration Variable ---
// Bas yahan ek baar change karein, poore page par update ho jayega
const SCHOOL_SESSION = "2026-27";

const documents = [
  {
    category: "Category A: Statutory Documents",
    items: [
      { id: 1, title: "Affiliation/Extension Letter", size: "2.4 MB" },
      { id: 2, title: "Trust/Society Registration", size: "1.8 MB" },
      { id: 3, title: "No Objection Certificate (NOC)", size: "1.2 MB" },
      { id: 4, title: "Recognition Certificate", size: "2.1 MB" },
    ]
  },
  {
    category: "Category B: Safety Certificates",
    items: [
      { id: 5, title: "Building Safety Certificate", size: "3.5 MB" },
      { id: 6, title: "Fire Safety Certificate", size: "1.5 MB" },
      { id: 7, title: "Health & Sanitation Certificate", size: "1.1 MB" },
      { id: 8, title: "Drinking Water Certificate", size: "0.9 MB" },
    ]
  },
  {
    category: "Category C: Academic & Others",
    items: [
      { id: 9, title: "Annual Academic Calendar", size: "4.2 MB" },
      { id: 10, title: "Fee Structure of the School", size: "0.8 MB" },
      { id: 11, title: "Last 3-Year Result of Board", size: "2.0 MB" },
      { id: 12, title: "SMC Constitution Details", size: "1.4 MB" },
    ]
  }
];

export default function MandatoryDisclosurePage() {
  return (
    <div className="min-h-screen bg-[#fcfdfe] py-8 md:py-2">
      {/* --- Minimal Institutional Header --- */}
      <div className="max-w-8xl mx-auto px-4 md:px-3 mb-10 pt-4">
        <div className="border border-slate-200 bg-white rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Left side: Text Content */}
            <div className="flex-1 p-6 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} className="text-slate-400" />
                <span className="text-slate-400 font-semibold uppercase tracking-widest text-[10px]">
                  Public Transparency
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Mandatory Public Disclosures
              </h1>

              <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-2xl">
                In compliance with CBSE directives, M.A.S.D. Public School provides access to all
                legal affiliations and safety certifications for public verification.
              </p>

              <div className="mt-6 flex gap-4 border-t border-slate-50 pt-6">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-slate-300" /> Verified 2026
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-slate-300" /> CBSE Compliant
                </div>
              </div>
            </div>

            {/* Right side: Session Info (Minimal) */}
            <div className="md:w-64 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-6 md:p-10 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Session</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">{SCHOOL_SESSION}</p>
              <div className="mt-3 px-3 py-1 bg-white border border-slate-200 rounded text-[9px] font-bold text-emerald-600 uppercase">
                Status: Active
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- Documents Grid --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-16">
          {documents.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight italic">
                  {section.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((doc) => (
                  <div
                    key={doc.id}
                    className="group bg-white rounded-[2rem] p-6 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                        <FileText size={24} />
                      </div>

                      <h3 className="font-bold text-slate-900 leading-tight mb-2 min-h-[40px]">
                        {doc.title}
                      </h3>

                      <div className="flex justify-between items-end mt-6">
                        <div>
                          {/* Yahan variable use ho rha hai */}
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Session: {SCHOOL_SESSION}</p>
                          <p className="text-[10px] text-blue-600 font-bold mt-1 tracking-wider">{doc.size}</p>
                        </div>

                        <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all cursor-pointer border-none outline-none">
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}