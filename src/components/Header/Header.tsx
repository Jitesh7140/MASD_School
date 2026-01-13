import Logo from "@/assets/images/logo.png";

const marqueeStyle = [
  { icon: '🚀', animation: 'Admissions Open for 2026-27' },
  { icon: '📅', animation: 'PTM on 25th Jan 2026' },
  { icon: '🔬', animation: 'New Science Lab Inaugurated' },
  { icon: '📚', animation: 'Annual Exams from 5th March ' },
  { icon: '🏆', animation: 'Inter-School Sports Meet Winners' },
];

const Header = () => {
  return (
    <>
      {/* --- TOP NOTICE BAR --- */}
      <div className="bg-[#052c54] text-white py-2 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-4 gap-4">
          
          <div className="flex items-center flex-1 overflow-hidden">
            {/* NOTICE LABEL - Modern Badge Style */}
            <div className="relative group cursor-pointer bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-yellow-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
              </span>
              Notice
            </div>

            {/* SMOOTH MARQUEE */}
            <div className="relative flex-1 overflow-hidden ml-4">
              <div className="flex gap-16 animate-marquee whitespace-nowrap py-1">
                {marqueeStyle.map((item, index) => (
                  <a 
                    key={index} 
                    href="/" 
                    className="flex items-center gap-2 text-[0.7rem] md:text-sm font-medium hover:text-yellow-400 transition-colors"
                  >
                    <span>{item.icon}</span> {item.animation}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT - Right side */}
          <div className="hidden sm:flex items-center">
             <a 
              href="tel:+911234567890" 
              className="group flex items-center gap-2 text-xs md:text-sm font-bold bg-white/10 px-4 py-1.5 rounded-lg border border-white/5 hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
            >
              <span className="group-hover:animate-bounce">📞</span>
              01282-252055
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <header className="bg-white py-6 md:py-8 shadow-sm">
        <div className="container mx-auto flex items-center px-4">
          
          {/* LOGO AREA */}
          <div className="flex-shrink-0 w-20 md:w-28 transition-transform duration-500 hover:scale-110">
            <a href="/">
              <img
                src={Logo}
                alt="School Logo"
                className="w-full h-auto drop-shadow-md"
              />
            </a>
          </div>

          {/* SCHOOL NAME & ADDRESS */}
          <div className="ml-6 md:ml-10 border-l-2 border-gray-100 pl-6 md:pl-10">
            <h1 className="leading-tight">
              <a href="/" className="block group">
                <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-[900] tracking-tighter text-[#084e91] group-hover:text-blue-600 transition-colors">
                  M.A.S.D SR SEC PUBLIC SCHOOL
                </span>
                <span className="inline-block h-1 w-20 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full mt-1"></span>
              </a>
            </h1>
            
            <div className="flex items-center gap-2 mt-2 text-gray-500">
             
              <p className="text-[0.7rem] sm:text-sm md:text-base font-semibold tracking-wide uppercase text-gray-400">
                Nizampur Road, NARNAUL, Haryana - 123001
              </p>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;