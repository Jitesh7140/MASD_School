 
import { FaWhatsapp } from "react-icons/fa"; 

// Home Pages
import Welcome from "./Welcome"; 
import Gride from "./Gride";
import AcademicPrograms from "./AcademicPrograms";
import Facilities from "./Facilities";
import AdmissionProcess from "./AdmissionProcess";
import Gallery from "./Gallery";
import LeadershipSection from "./Massage";


const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">


      

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
