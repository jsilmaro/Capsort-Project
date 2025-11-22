import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Globe, Phone } from 'lucide-react';
import imgBackground from 'figma:asset/826b1f4aca5f3e6b7f71dbd8e83671f78385c94d.png';
import imgLogo from 'figma:asset/e298e40a19e08b15aea51c37ec3e9b54c3f5df1f.png';

export default function Splash() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imgBackground} 
          alt="University Building" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(26,24,81,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-end px-16 py-6 gap-12">
          <Link to="/signup" className="font-['Poppins'] text-[24px] text-white hover:text-[#FFD338] transition-colors">
            Register
          </Link>
          <Link to="/login" className="font-['Poppins'] text-[24px] text-white hover:text-[#FFD338] transition-colors">
            Login
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="text-center space-y-8">
            {/* Welcome Text */}
            <div className="space-y-4">
              <p className="font-['Poppins'] text-[24px] text-white">WELCOME TO</p>
              <div className="relative">
                <img 
                  src={imgLogo} 
                  alt="CapSort Logo" 
                  className="w-[871px] h-[220px] mx-auto object-contain"
                />
              </div>
            </div>

            {/* Explore Button */}
            <Link 
              to="/projects"
              className="inline-flex items-center gap-[22px] bg-white px-[41px] py-[10px] rounded-[10px] hover:shadow-lg transition-all"
            >
              <span className="font-['Poppins'] text-[24px] text-black">Explore</span>
              <ArrowRight size={25} className="text-black" />
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 space-y-6">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            <a href="mailto:capsort@ustp.edu.ph" className="text-white hover:text-[#FFD338] transition-colors">
              <Mail size={32} />
            </a>
            <a href="https://ustp.edu.ph" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD338] transition-colors">
              <Globe size={30} />
            </a>
            <a href="tel:+1234567890" className="text-white hover:text-[#FFD338] transition-colors">
              <Phone size={30} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center font-['Poppins'] text-[14px] text-white space-y-1">
            <p>© 2025 University of Science and Technology of Southern Philippines</p>
            <p>Capstone Sorting and Archiving System</p>
          </div>
        </footer>
      </div>
    </div>
  );
}