import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react"; // npm install lucide-react

const routeNames: Record<string, string> = {
  "about": "About Us",
  "facility": "Facilities",
  "activities": "Activities",
  "achievement": "Achievements",
  "history": "Our History",
  "vision": "Vision & Mission",
  "chairman-message": "Chairman's Message",
  "secretary-message": "Secretary's Message",
  "principal-message": "Principal Message",
  "library": "Library",
  "laboratories": "Lab Infrastructure",
  "sports": "Sports Academy",
  "transport": "Safe Transport",
  "smart-class": "Smart Classrooms", 
  "events": "School Events",
  "academic": "Academic Excellence", 
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-12 text-sm">
          <ol className="flex items-center space-x-2">
            {/* Home Icon */}
            <li>
              <Link 
                to="/" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
              >
                <Home size={16} />
                <span className="hidden sm:inline font-medium">Home</span>
              </Link>
            </li>

            {pathnames.map((value, index) => {
              const to = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;
              const label = routeNames[value] || value.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

              return (
                <li key={to} className="flex items-center space-x-2">
                  <ChevronRight size={14} className="text-gray-300" />
                  
                  {isLast ? (
                    <span className="text-[0.6rem] md:text-xs text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                      {label}
                    </span>
                  ) : (
                    <Link
                      to={to}
                      className="text-[0.6rem] md:text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;