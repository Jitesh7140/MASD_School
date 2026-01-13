import React, { useState } from 'react';
import { Send, User, Users, CheckCircle2, Download,  } from 'lucide-react';

import pdf from '../../../assets/pdf/MASD_Form.pdf';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-20 px-6">
        <div className="bg-white border border-gray-100 p-10 rounded-xl text-center shadow-sm">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Application Received</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Thank you for applying to M.A.S.D. Public School. Our admissions team will review your details and contact you within 2 working days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 bg-slate-900 text-white px-8 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all cursor-pointer"
          >
            Fill Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      
      {/* Header & Download Link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-gray-100 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Online Registration</h1>
          <p className="text-sm text-slate-500 mt-1">Academic Session 2026-2027</p>
        </div>
        <a
          href={pdf}
          download="MASD-Admission-Form.pdf"
          className="flex items-center gap-2 text-[#084e91] bg-blue-50 px-4 py-2 rounded-md font-bold text-xs hover:bg-blue-100 transition-all border border-blue-100 no-print"
        >
          <Download size={14} />
          Download Offline Form (PDF)
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-10 bg-white"
      >
        {/* Section 1: Student Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#084e91] border-b border-gray-50 pb-2">
            <User size={18} />
            <h3 className="text-sm font-bold uppercase tracking-wider">Student Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Student's Full Name *</label>
              <input required type="text" placeholder="As per Birth Certificate" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-[#084e91] focus:bg-white outline-none text-sm transition-all" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Applying for Class *</label>
              <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-[#084e91] focus:bg-white outline-none text-sm transition-all appearance-none">
                <option value="">Select Grade</option>
                <option>Nursery / L.K.G / U.K.G</option>
                <option>Class 1st - 5th</option>
                <option>Class 6th - 10th</option>
                <option>Class 11th - 12th</option>
              </select>
            </div>

            <div className="space-y-1.5 text-sm">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Date of Birth *</label>
              <div className="relative">
                <input required type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-[#084e91] focus:bg-white outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Gender *</label>
              <div className="flex gap-4">
                {['Male', 'Female', 'Other'].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer text-sm text-slate-600">
                    <input type="radio" name="gender" className="accent-[#084e91]" required /> {g}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Parent / Guardian Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#084e91] border-b border-gray-50 pb-2">
            <Users size={18} />
            <h3 className="text-sm font-bold uppercase tracking-wider">Parent / Guardian Details</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Father's / Guardian Name *</label>
              <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-[#084e91] focus:bg-white outline-none text-sm transition-all" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Contact Number *</label>
              <input required type="tel" placeholder="10-digit mobile number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-[#084e91] focus:bg-white outline-none text-sm transition-all" />
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Residential Address *</label>
              <textarea required rows={2} placeholder="House No, Street, Landmark, City" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-[#084e91] focus:bg-white outline-none text-sm transition-all resize-none"></textarea>
            </div>
          </div>
        </div>

        {/* Footer: Submission */}
        <div className="pt-6 no-print">
          <button
            type="submit"
            className="w-full md:w-auto bg-[#084e91] text-white px-10 py-3.5 rounded-md font-bold text-sm uppercase tracking-widest flex items-center justify-center cursor-pointer gap-2 hover:bg-blue-800 transition-all shadow-md"
          >
            Submit Application <Send size={16} />
          </button>
          <p className="mt-4 text-[10px] text-gray-400 italic">
            Note: Submission of this form does not guarantee admission. Final decision rests with the School Management.
          </p>
        </div>
      </form>

      {/* Print Specific CSS */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          form { space-y: 4 !important; }
          input, select, textarea { border: 1px solid #ddd !important; background: transparent !important; }
        }
      `}</style>
    </div>
  );
}