import image_5e19f141de3eaf2163fbc9110148fd1204d40355 from 'figma:asset/5e19f141de3eaf2163fbc9110148fd1204d40355.png';
import { Link, useLocation } from 'react-router-dom';
import imgLogo from '../assets/logo.png';

interface NavbarProps {
  role?: 'guest' | 'student' | 'admin';
  onLogout?: () => void;
}

export function Navbar({ role = 'guest', onLogout }: NavbarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <nav className="bg-white border-b border-[#D8D8D8]">
      <div className="mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to={role === 'guest' ? '/' : `/${role}/dashboard`} className="flex items-center gap-4">
            <div className="w-[38px] h-[50px] relative overflow-hidden">
              <img 
                src={image_5e19f141de3eaf2163fbc9110148fd1204d40355} 
                alt="CapSort Logo" 
                className="absolute h-[123.24%] left-0 top-[-9.86%] w-[263.3%] max-w-none object-cover"
              />
            </div>
            <div>
              <h1 className="font-['Poppins'] text-[20px] text-[#1a1851]">Capsort</h1>
              <p className="font-['Poppins'] text-[12px] text-black">Capstone Archiving and Sorting System</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {role === 'guest' && (
              <>
                <Link 
                  to="/projects" 
                  className={`font-['Poppins'] text-[18px] relative ${
                    isActive('/projects') ? 'text-[#1a1851]' : 'text-black'
                  }`}
                >
                  Projects
                  {isActive('/projects') && (
                    <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#16163F]" />
                  )}
                </Link>
                <Link to="/about" className="font-['Poppins'] text-[18px] text-black">
                  About Us
                </Link>
              </>
            )}

            {role === 'student' && (
              <>
                <Link 
                  to="/student/dashboard" 
                  className={`font-['Poppins'] text-[18px] ${
                    isActive('/dashboard') ? 'text-[#1a1851]' : 'text-black'
                  }`}
                >
                  Projects
                </Link>
                <Link to="/student/saved" className="font-['Poppins'] text-[18px] text-black">
                  Saved
                </Link>
                <Link to="/student/about" className="font-['Poppins'] text-[18px] text-black">
                  About Us
                </Link>
                <Link to="/student/profile" className="font-['Poppins'] text-[18px] text-black">
                  Profile
                </Link>
              </>
            )}

            {role === 'admin' && (
              <>
                <Link 
                  to="/admin/dashboard" 
                  className={`font-['Poppins'] text-[18px] ${
                    isActive('/dashboard') ? 'text-[#1a1851]' : 'text-black'
                  }`}
                >
                  Dashboard
                </Link>
                <Link to="/admin/analytics" className="font-['Poppins'] text-[18px] text-black">
                  Analytics
                </Link>
                <Link to="/admin/about" className="font-['Poppins'] text-[18px] text-black">
                  About Us
                </Link>
                <Link to="/admin/profile" className="font-['Poppins'] text-[18px] text-black">
                  Profile
                </Link>
                {onLogout && (
                  <button 
                    onClick={onLogout}
                    className="font-['Poppins'] text-[18px] text-black hover:text-[#1a1851]"
                  >
                    Logout
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
