import { FlaskConical, Microscope, Atom, Calculator, BookOpen, Trees, Home, Bus } from 'lucide-react';

const facilities = [
  { name: 'Library ', icon: BookOpen },
  { name: 'Green Campus', icon: Trees },
  { name: 'Playgrounds', icon: Home },
  { name: 'Transport', icon: Bus },
  { name: 'Chemistry Lab', icon: FlaskConical },
  { name: 'Biology Lab', icon: Microscope },
  { name: 'Physics Lab', icon: Atom },
  { name: 'Math Lab', icon: Calculator },
];

export default function Facilities() {
  return (
    <section className="py-6 md:py-10 bg-[linear-gradient(45deg,#084e91,#017eb1)]">
      <div className="container md:w-[80%] mx-auto px-6">
        <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-10 text-white">
          | World-Class Facilities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.name}
                /* Leaf Shape logic yahan hai: rounded-tl-3xl aur rounded-br-3xl */
                className="cursor-pointer bg-white/10 backdrop-blur-sm 
                           rounded-tl-[40px] rounded-br-[40px] rounded-tr-md rounded-bl-md
                           px-1 py-4 md:p-8 text-center 
                           hover:bg-white/20 hover:scale-105 transition-all duration-300 
                           border border-white/10 shadow-xl"
              >
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-xs md:text-lg">{facility.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}