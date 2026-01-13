import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowLeft, Globe } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Message Received</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Thank you for reaching out. Our administrative office will get back to you shortly via email or phone.
          </p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="mt-8 inline-flex items-center gap-2 text-slate-900 font-bold text-sm border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer"
          >
            <ArrowLeft size={16} /> SEND ANOTHER MESSAGE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Page Header */}
      <div className="pt-6 md:pt-10 pb-10 px-6 max-w-7xl mx-auto border-b border-gray-50">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[#084e91] font-bold tracking-widest uppercase text-[10px]">Contact Us</span>
            <h1 className="text-lg md:text-xl font-bold text-slate-900 mt-2">
              Let's Start a <span className="text-2xl md:text-3xl text-[#084e91] italic">Conversation.</span>
            </h1>
          </div>
          <Globe className="text-slate-100 hidden md:block" size={60} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 md:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Bento Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Address Card */}
            <div className="col-span-2 bg-slate-900 rounded-2xl p-8 text-white">
              <MapPin className="text-blue-400 mb-6" size={28} />
              <h4 className="text-lg font-bold mb-2">Our Campus</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                Near Shubham Gardens, Nizampur Road,<br />
                Narnaul, Haryana 123001
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <Phone className="text-[#084e91] mb-3" size={20} />
              <h4 className="font-bold text-slate-900 text-sm">Call Us</h4>
              <p className="text-[#084e91] text-xs mt-1 font-bold">01282-252055</p>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <Mail className="text-slate-600 mb-3" size={20} />
              <h4 className="font-bold text-slate-900 text-sm">Email</h4>
              <p className="text-slate-500 text-[10px] md:text-xs mt-1 font-bold break-all">masdschoolnnl@gmail.com</p>
            </div>

            {/* Timing Card */}
            <div className="col-span-2 bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-slate-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Office Hours</h4>
                  <p className="text-slate-500 text-[10px]">Mon — Sat</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-slate-900">09:00 - 02:30</p>
                <p className="text-[9px] font-bold text-red-500 uppercase">Sundays Closed</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Send an Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#084e91] outline-none text-sm transition-all" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#084e91] outline-none text-sm transition-all" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#084e91] outline-none text-sm transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Admissions 2026-27</option>
                    <option>Student Support</option>
                    <option>Careers / Recruitment</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#084e91] outline-none text-sm transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full md:w-auto bg-[#084e91] text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-blue-100">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 rounded-2xl overflow-hidden border border-gray-100 shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.374786545282!2d76.09533190727238!3d28.043578921995536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b5fac9998387%3A0xcd5eb37ad5b0115c!2sM%20A%20S%20D%20Public%20Sr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1767988223018!5m2!1sen!2sin"
            className="w-full h-[400px] border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}