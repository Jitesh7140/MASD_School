import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { mainMenus } from "@/data/mainMenu";
import { Menu, X, ChevronDown, MoveRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  const toggleSubmenu = (menuTitle: string) => {
    setOpen(open === menuTitle ? null : menuTitle);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpen(null);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#084e91] via-[#017eb1] to-[#084e91] text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          
          {/* Logo Placeholder */}
          <Link to="/" className="no-underline"> 
          <div className="text-sm md:hidden font-bold tracking-tight">
            M.A.S.D<span className=" text-yellow-400"> SCHOOL</span>
          </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {mainMenus.map((menu) => (
              <div
                key={menu.title}
                className="relative group"
                onMouseEnter={() => menu.children && setOpen(menu.title)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link
                  to={menu.path || "#"}
                  className="px-4 py-2 flex items-center gap-1.5 font-medium transition-all duration-300 hover:text-yellow-300 rounded-lg hover:bg-white/10"
                >
                  {menu.title}
                  {menu.children && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${open === menu.title ? "rotate-180" : ""}`} 
                    />
                  )}
                </Link>

                {menu.children && open === menu.title && (
                  <div className="absolute top-full left-0 pt-2 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-w-[220px] border border-gray-100 text-gray-900">
                      <DropdownMenu items={menu.children} close={() => setOpen(null)} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      
      {/* 1. Backdrop Overlay (Dhunda Background) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      {/* 2. Sidebar Panel */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-[70] shadow-2xl md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 bg-[#084e91] text-white flex justify-between items-center">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={closeMobileMenu} className="p-1 hover:bg-white/10 rounded-full">
              <X size={24} />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1 text-gray-900">
            {mainMenus.map((menu) => (
              <div key={menu.title} className="border-b border-gray-50 last:border-none">
                {menu.children ? (
                  <>
                    <button
                      className="flex justify-between items-center w-full py-4 px-2 font-semibold text-base transition-colors hover:text-blue-600"
                      onClick={() => toggleSubmenu(menu.title)}
                    >
                      <span className={open === menu.title ? "text-blue-600" : ""}>{menu.title}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${open === menu.title ? "rotate-180 text-blue-600" : "text-gray-400"}`}
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        open === menu.title ? "max-h-[500px] bg-gray-50 rounded-lg mb-2" : "max-h-0"
                      }`}
                    >
                      <div className="py-2 px-4 space-y-1">
                        {menu.children.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.path}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 py-3 text-sm text-gray-600 hover:text-blue-600 font-medium"
                          >
                            <MoveRight size={14} className="text-blue-600 opacity-60" />
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={menu.path || "/"}
                    onClick={closeMobileMenu}
                    className="block py-4 px-2 font-semibold text-base hover:text-blue-600 transition-colors"
                  >
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer (Optional) */}
          {/* <div className="p-6 border-t border-gray-100">
             <button className="w-full bg-[#084e91] text-white py-3 rounded-lg font-bold shadow-md active:scale-[0.98] transition-transform">
               Inquiry Now
             </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;