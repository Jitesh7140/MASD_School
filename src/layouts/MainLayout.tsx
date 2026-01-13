import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";



const MainLayout = () => {
  return (
    <div className="flex flex-col w-[100%]">
      {/* Header */}
      <Header />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
       <div className="flex-grow  ">
        <Outlet />

       </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;