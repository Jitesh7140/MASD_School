import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import type { MenuItem } from "@/types/menu";

interface SectionLayoutProps {
  sidebarMenu: MenuItem[];
}

const SectionLayout = ({ sidebarMenu }: SectionLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Top Navigation */}
      <Navbar />



      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-2">
        <Breadcrumb />
      </div>

      {/* Content Area */}
      <div className="container mx-auto   flex flex-1 px-0 py-2 gap-6  ">

        {/* Page Content */}
        <main className="w-full md:w-3/4">
          <Outlet />
        </main>

        {/* Sidebar */}
        <aside className="w-1/4 hidden md:block">
          <Sidebar {...({ menu: sidebarMenu } as any)} />
        </aside>


      </div>





      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SectionLayout;
