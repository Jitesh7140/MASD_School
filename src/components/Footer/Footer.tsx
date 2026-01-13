import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';

const quickLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about/history" },
  { title: "Achievement", path: "/Achievement/Academic" },
  { title: "Facility", path: "/facility/library" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
  { title: "Mandatory-disclosure", path: "/mandatory-disclosure" }
];

const socialMedia = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-[url(@/assets/images/footer.png)] bg-no-repeat bg-cover pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={70} className="text-yellow-400" />
              <span className="text-xl md:text-2xl text-sky-100 font-bold"> M.A.S.D SR SEC PUBLIC SCHOOL</span>
            </div>
            <p className="text-sm md:text-base text-blue-200 leading-relaxed mb-6">
              Empowering students with knowledge, skills, and values to excel in a global
              society.
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    className="text-blue-200 bg-white/10 hover:bg-yellow-900 hover:text-blue-200 p-3 rounded-full transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-blue-200 font-bold mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">

              {quickLinks.map((menu) => (
                <li key={menu.title}>
                  <a
                    href={`${menu.path}`}
                    className="text-blue-200 hover:text-blue-200 transition-colors"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          <div>
            <h3 className="text-xl text-blue-200 font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-200 break-words">
                  Near Shubham Gardens Nizampur road , Narnaul, Haryana 123001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-blue-200 break-words">01282-252055</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-blue-200 break-words overflow-hidden">
                  masdschoolnnl@gmail.com
                </span>
              </li>
            </ul>
          </div>


          <div >
            <h4 className="mb-4 text-blue-200 text-xl font-bold ">
              Location
            </h4>

            <div className="w-16 h-1 mb-4 bg-yellow-500 rounded" />

            <div className="overflow-hidden rounded-xl shadow-md">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.374786545282!2d76.09533190727238!3d28.043578921995536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b5fac9998387%3A0xcd5eb37ad5b0115c!2sM%20A%20S%20D%20Public%20Sr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1767988223018!5m2!1sen!2sin"

                className="w-full h-[250px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        <div className="text-[0.8rem] md:text-[1rem] border-t border-white/10 pt-8 text-center text-blue-300">
          <p>&copy;  2005–{new Date().getFullYear()}  M.A.S.D SR SEC PUBLIC SCHOOL. All Rights Reserved. |  &nbsp;

            <a className='hover:text-blue-100 underline' href="https://www.linkedin.com/in/jitesh-kumar-7655b431a/" target='_blank'>
              Developed by : Jitesh Kumar
            </a>

          </p>
        </div>
      </div>
    </footer>
  );
}
