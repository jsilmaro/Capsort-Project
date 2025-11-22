import { ReactNode } from 'react';
import imgBuilding from 'figma:asset/3d25bb0db39ceaa8384a23d07aeb10c205d94b2c.png';
import imgLogo from 'figma:asset/5e19f141de3eaf2163fbc9110148fd1204d40355.png';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-12">
        <div className="w-full max-w-[500px] mx-auto">
          {/* Logo and Title */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[50px] h-[66px] relative overflow-hidden flex-shrink-0">
                <img 
                  src={imgLogo} 
                  alt="CapSort Logo" 
                  className="absolute h-[123.24%] left-0 top-[-9.86%] w-[263.3%] max-w-none object-cover"
                />
              </div>
              <div>
                <h1 className="font-['Poppins'] text-[24px] text-[#1a1851]">CapSort</h1>
                <p className="font-['Poppins'] text-[14px] text-[#6c6565]">
                  Capstone Archiving and Sorting System
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-[20px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] p-8 lg:p-10">
            {children}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="font-['Poppins'] text-[11px] text-[#6c6565] leading-relaxed">
              © 2025 University of Science and Technology of Southern Philippines<br />
              Capstone Sorting and Archiving System
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src={imgBuilding} 
          alt="University Building" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1441]/70 to-[#1a1851]/50" />
      </div>
    </div>
  );
}