import { Link, useLocation } from "react-router-dom";
import { ChevronRight, GraduationCap, LayoutDashboard, Award, Sparkles } from "lucide-react";
import { aboutMenu } from "@/data/aboutMenu";
import { facilityMenu } from "@/data/facilityMenu";
import { activitiesMenu } from "@/data/activitiesMenu";
import { achievementMenu } from "@/data/achievementMenu";
import { admissionMenu } from "@/data/admissionMenu";
import type { MenuItem } from "@/types/menu";


interface SidebarProps {
  items: MenuItem[];
}


const Sidebar = ({ items }: SidebarProps) => {

  const { pathname } = useLocation();

  let menu: { title: string; path: string }[] = [];
  let title = "";
  let Icon = LayoutDashboard;

  // Logic to determine menu and icon
  if (pathname.startsWith("/about")) {
    menu = aboutMenu;
    title = "About M.A.S.D.";
    Icon = GraduationCap;
  } else if (pathname.startsWith("/facility")) {
    menu = facilityMenu;
    title = "Facilities";
    Icon = LayoutDashboard;
  }else if (pathname.startsWith("/Admission")) {
    menu = admissionMenu;
    title = "Admission";
    Icon = Award;
  }else if (pathname.startsWith("/Activities")) {
    menu = activitiesMenu;
    title = "Student Life";
    Icon = Sparkles;
  } else if (pathname.startsWith("/Achievement")) {
    menu = achievementMenu;
    title = "Achievements";
    Icon = Award;
  }
  

  if (!menu.length) return null;

  return (
    <aside className="w-full space-y-4">
      {/* Sidebar Header Card */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-5 shadow-lg shadow-blue-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
            <Icon className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg leading-tight">{title}</h2>
            <p className="text-blue-100 text-[10px] uppercase tracking-[0.2em] font-medium">Navigation</p>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <nav className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`group flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-300
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-bold shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    {/* Dot indicator for active state */}
                    <span className={`h-1.5 w-1.5 rounded-full transition-all duration-300 
                      ${isActive ? "bg-blue-600 scale-125 shadow-[0_0_8px_rgba(37,99,235,0.6)]" : "bg-gray-300 group-hover:bg-blue-400"}`} 
                    />
                    {item.title}
                  </span>
                  
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} 
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Extra Info (Optional Modern Touch) */}
      <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Need help? <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Contact Office</Link>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;