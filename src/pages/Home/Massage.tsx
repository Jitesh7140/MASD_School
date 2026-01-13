import img1 from '@/assets/images/message/founder-vision-mission.jpg';
import img2 from '@/assets/images/message/Directorimg.jpeg';
import img3 from '@/assets/images/message/principal2.jpg';

const leaders = [
  { name: "Mr. Gopal Sharan Garg", title: "Chairman Vision & Mission", msg: "Our vision is to create future leaders equipped with knowledge, values, and character.", img: img1 },
  { name: "Mr. Govind Bhardwaj", title: "Director's Message", msg: "Innovation and holistic development define our approach. We nurture dreams through quality education.", img: img2 },
  { name: "Mr. Shankracharya", title: "From the Principal", msg: "Every child is unique. Our dedicated faculty creates an environment where potential blossoms.", img: img3 }
];

function LeadershipSection() {
  return (
    /* Background: School-Friendly Light Blue with Gradient and Pattern */
    <section className="relative py-24 bg-[#f8fbff] overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-50 rounded-full blur-3xl"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="relative z-10 w-[90%] mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="text-2xl md:text-4xl font-black text-[#1e3a8a] mb-4 tracking-tight">
            Our <span className="text-blue-600">Pillars</span> of Strength
          </h2>
          <div className="h-1.5 w-20 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-xs md:text-sm mt-4 text-slate-500 font-medium tracking-wide">Leading our students toward excellence</p>
        </div>

        <div className="grid md:grid-cols-3 gap-20 md:gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group relative">
              {/* Layered Shadow Effect instead of Glass for Light Background */}
              <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,112,184,0.07)] border border-slate-100 transition-all duration-500 group-hover:-translate-y-4">
                
                {/* 3D Floating Image */}
                <div className="relative -mt-24 mb-6 flex justify-center">
                  <div className="w-36 h-36 md:w-44 md:h-44 relative">
                    {/* Frame Decoration */}
                    <div className="absolute inset-0 bg-white rounded-[2rem] rotate-6 shadow-md border border-slate-100 transition-transform group-hover:rotate-12"></div>
                    <img 
                      src={leader.img} 
                      alt={leader.name}
                      className="relative w-full h-full object-cover rounded-[2rem] border-4 border-white shadow-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-bold text-[0.7rem] uppercase tracking-[0.15em] mb-4">
                    {leader.title}
                  </p>
                  
                  <div className="relative px-2">
                    <span className="text-5xl text-blue-100 absolute -top-8 -left-2 font-serif select-none opacity-60">“</span>
                    <p className="text-slate-600 text-[0.9rem] leading-relaxed relative z-10 italic">
                      {leader.msg}
                    </p>
                  </div>

                  {/* Decorative School Bottom Badge */}
                  <div className="mt-8 flex justify-center items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-12 h-1 rounded-full bg-slate-100 group-hover:bg-blue-600 transition-colors duration-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;