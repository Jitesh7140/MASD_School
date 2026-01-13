import { ArrowRight, BookOpen, Trophy, Users, CalendarDays } from "lucide-react";

import img from "@/assets/images/AcaPath1.jpg";
import img2 from "@/assets/images/AcaPath2.jpeg";
import img3 from "@/assets/images/AcaPath3.jpeg";
import img4 from "@/assets/images/AcaPath4.jpeg";



const programs = [
    {
        title: "School Activities",
        icon: <BookOpen className="text-blue-600" size={24} />,
        description: "Nurturing creativity and confidence through art, music, debates, and hands-on learning experiences.",
        image: img,
    },
    {
        title: "Sports & Fitness",
        icon: <Trophy className="text-blue-600" size={24} />,
        description: "Promoting teamwork and sportsmanship through regular athletics, yoga, and outdoor games.",
        image: img2,
    },
    {
        title: "Academic Clubs",
        icon: <Users className="text-blue-600" size={24} />,
        description: "Encouraging leadership and collaboration through Science, Eco, and Literary clubs.",
        image: img3,
    },
    {
        title: "Events & Festivals",
        icon: <CalendarDays className="text-blue-600" size={24} />,
        description: "Memorable experiences through cultural programs, annual functions, and active celebrations.",
        image: img4,
    },
];

export default function AcademicPrograms() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-12">
                
                {/* Section Heading */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-black text-gray-900 flex items-center gap-3 justify-center md:justify-start">
                        <span className="w-2 h-10 bg-[#084e91] hidden md:block"></span>
                        Academic Pathways
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm md:text-base font-medium">
                        Exploring beyond the classroom to build well-rounded individuals.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program) => (
                        <div
                            key={program.title}
                            className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                        >
                            {/* Image with subtle overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 relative">
                                {/* Floating Icon */}
                                <div className="absolute -top-6 left-6 bg-white p-3 rounded-lg shadow-md border border-gray-50 group-hover:bg-[#084e91] group-hover:text-white transition-colors duration-300">
                                    <div className="group-hover:text-white">
                                        {/* Cloning icon to change color on hover if needed, or just let it inherit */}
                                        {program.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold mt-2 text-gray-900 group-hover:text-[#084e91] transition-colors">
                                    {program.title}
                                </h3>
                                
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3 mb-6 line-clamp-3">
                                    {program.description}
                                </p>

                                <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#084e91] border-b-2 border-transparent hover:border-[#084e91] transition-all pb-1">
                                    Explore More
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}