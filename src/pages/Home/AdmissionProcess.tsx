import { FileText, MousePointerClick, CreditCard, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Request Info',
    description: 'Fill out our inquiry form to receive detailed information about our programs',
    icon: FileText,
  },
  {
    number: 2,
    title: 'Apply Online',
    description: 'Complete the online application form',
    icon: MousePointerClick,
  },
  {
    number: 3,
    title: 'Submit',
    description: 'Submit your application and we will contact you very soon with next steps',
    icon: CreditCard,
  },
];

export default function AdmissionProcess() {
  return (
    <section className="py-6 md:py-10 bg-[linear-gradient(45deg,#084e91,#017eb1)]">
      <div className="container md:w-[80%] mx-auto px-6">
        <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-10 text-white">
          | Admission Process
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex items-center gap-4 md:gap-8 w-full">
                {/* Leaf Shape Card Yahan Hai */}
                <div className="flex-1 bg-white 
                                rounded-tl-[50px] rounded-br-[50px] rounded-tr-lg rounded-bl-lg 
                                p-6 md:p-8 shadow-2xl hover:scale-105 transition-all duration-300 
                                border-b-4 border-r-4 border-yellow-400">
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="bg-yellow-400 text-gray-900 font-bold text-[0.8rem] md:text-2xl w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      {step.number}
                    </div>
                    <Icon className="text-blue-900 w-6 h-6 md:w-10 md:h-10" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-base md:text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">{step.description}</p>
                </div>

                {/* Arrow Icon */}
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block text-yellow-400 flex-shrink-0 animate-pulse"
                    size={40}
                    strokeWidth={2}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}