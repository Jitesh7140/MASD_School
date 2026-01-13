import { useState } from 'react';
import { IndianRupee, Download, CreditCard, ChevronDown, AlertCircle } from 'lucide-react';

import pdf from '../../../assets/pdf/MASD_Form.pdf';

const feeData = [
  {
    category: "Pre-Primary (Nursery - UKG)",
    registration: "500",
    admission: "5000",
    composite: "2500",
    security: "2000",
    exam: "500"
  },
  {
    category: "Primary Wing (1st - 5th)",
    registration: "500",
    admission: "6000",
    composite: "3200",
    security: "2000",
    exam: "800"
  },
  {
    category: "Secondary Wing (6th - 10th)",
    registration: "500",
    admission: "7500",
    composite: "3800",
    security: "2000",
    exam: "1000"
  },
];

export default function FeesStructure() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Simple Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-gray-100 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Fee Structure
            </h1>
            <p className="text-sm text-slate-500 mt-1">Academic Session 2026-27</p>
          </div>

          <a
            href={pdf}
            download="MASD-Fee-Structure.pdf"
            className="flex items-center gap-2 bg-[#084e91] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm no-print"
          >
            <Download size={16} />
            Download Schedule
          </a>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {feeData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setActiveTab(activeTab === index ? null : index)}
                className={`w-full flex items-center justify-between p-5 text-left transition-all ${activeTab === index ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${activeTab === index ? 'bg-[#084e91] text-white' : 'bg-gray-100 text-slate-400'}`}>
                    <IndianRupee size={18} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-800">{item.category}</h3>
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${activeTab === index ? 'rotate-180 text-[#084e91]' : 'text-slate-300'}`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeTab === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0">
                  <div className="overflow-hidden rounded-md border border-gray-100">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                          <th className="px-4 py-3">Fee Component</th>
                          <th className="px-4 py-3 text-right">Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[
                          { label: "One-Time Registration", val: item.registration },
                          { label: "Admission Fee (New Students)", val: item.admission },
                          { label: "Composite Monthly Fee", val: item.composite, highlight: true },
                          { label: "Security Deposit (Refundable)", val: item.security },
                          { label: "Annual Examination Fee", val: item.exam },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                            <td className="px-4 py-3 text-slate-600">{row.label}</td>
                            <td className={`px-4 py-3 text-right font-bold ${row.highlight ? 'text-[#084e91]' : 'text-slate-900'}`}>
                              {row.val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div className="p-5 border border-gray-100 rounded-lg bg-slate-50 flex gap-4">
            <CreditCard size={20} className="text-[#084e91] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">Payment Policy</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fees can be paid via Cheque, DD, or UPI at the school counter. Please ensure payments are made by the 10th of every month.
              </p>
            </div>
          </div>

          <div className="p-5 border border-gray-100 rounded-lg bg-slate-50 flex gap-4">
            <AlertCircle size={20} className="text-[#084e91] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">Important Note</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Late fine of ₹50 per week is applicable after the due date. Security deposit is refundable only at the time of school leaving.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}