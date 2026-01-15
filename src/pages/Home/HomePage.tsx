import { useState, useEffect } from "react"; // 1. Hooks import karein
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close icon ke liye
import { Link } from "react-router-dom";

import img from '@/assets/images/poster.png';

// Home Pages
import Welcome from "./Welcome";
import Gride from "./Gride";
import AcademicPrograms from "./AcademicPrograms";
import Facilities from "./Facilities";
import AdmissionProcess from "./AdmissionProcess";
import Gallery from "./Gallery";
import LeadershipSection from "./Massage";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Website open hote hi popup dikhane ke liye
    setShowPopup(true);
  }, []);




  return (
    <div className="min-h-screen relative overflow-x-hidden">

      {/* --- Admission Popup --- */}
      {showPopup && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 px-4">

          <div className="relative bg-white rounded-lg overflow-hidden max-w-lg w-full shadow-2xl animate-in fade-in zoom-in duration-300">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 z-10"
            >
              <IoClose size={24} />
            </button>

            {/* Poster Image */}

            <div className="flex flex-col">
              <img
                src={img}
                alt="Admission Open 2026-27"
                className="w-full h-auto object-cover"
              />

              {/* Optional: Add a button below image */}

              <Link to="/Admission/apply">
              
                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold text-blue-900">Admission Open 2026-27</h2>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </button>
                </div>
 
              </Link>
            </div>
          </div>
        </div>
      )
      }

      {/* Existing Components */}
      <Gride />
      <Welcome />
      <AcademicPrograms />
      <Facilities />
      <AdmissionProcess />
      <Gallery />
      <LeadershipSection />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918278060400"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp size={28} />
      </a>

    </div >
  );
};

export default HomePage;