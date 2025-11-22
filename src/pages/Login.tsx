import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ForgotPasswordDialog } from '../components/ForgotPasswordDialog';
import { Checkbox } from '../components/ui/checkbox';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import imgScreenshot202510211430581 from "figma:asset/3d25bb0db39ceaa8384a23d07aeb10c205d94b2c.png";
import imgMail1 from "figma:asset/04473dd56e55d0b26fdb1b2552a8ecf8338b14c8.png";
import imgPass1 from "figma:asset/12622181b4587ff8a8dfde9e6073e4eac6d0f3b5.png";
import imgShow1 from "figma:asset/7fa0b269fdc7d590764fd2cb0a2729811799234e.png";
import imgImageRemovebgPreview71 from "figma:asset/1f6c2a7cc84f53e05c54479d3409ebb58581e6a0.png";

// Admin credentials
const ADMIN_EMAIL = 'admin@capsort.com';
const ADMIN_PASSWORD = 'admin123';

export default function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('student');
  
  // Student form data
  const [studentFormData, setStudentFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  
  // Admin form data
  const [adminFormData, setAdminFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  
  const [showStudentPassword, setShowStudentPassword] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [studentError, setStudentError] = useState('');
  const [adminError, setAdminError] = useState('');

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentError('');
    
    // Check if trying to use admin credentials in student login
    if (studentFormData.email === ADMIN_EMAIL) {
      setStudentError('Admin accounts cannot login here. Please use the Admin tab.');
      return;
    }
    
    // Regular student/user login
    navigate('/student/dashboard');
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError('');
    
    // Check if admin credentials
    if (adminFormData.email === ADMIN_EMAIL && adminFormData.password === ADMIN_PASSWORD) {
      navigate('/admin/dashboard');
    } else if (adminFormData.email === ADMIN_EMAIL && adminFormData.password !== ADMIN_PASSWORD) {
      setAdminError('Invalid admin password');
    } else {
      setAdminError('Invalid admin credentials');
    }
  };

  return (
    <div className="bg-[#f4f4f4] relative size-full min-h-screen">
      {/* Right Side - Building Image */}
      <div className="absolute h-[945px] left-[583px] rounded-[25px] top-[39px] w-[827px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25px]">
          <img 
            alt="" 
            className="absolute h-[101.16%] left-[-34.24%] max-w-none top-[-0.3%] w-[193.14%]" 
            src={imgScreenshot202510211430581} 
          />
        </div>
      </div>
      <div className="absolute bg-[rgba(22,22,63,0.3)] h-[945px] left-[583px] rounded-[25px] top-[39px] w-[827px]" />

      {/* Logo */}
      <div className="absolute h-[55px] left-[158px] top-[239px] w-[205px]">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImageRemovebgPreview71} 
        />
      </div>

      {/* System Name */}
      <p className="absolute font-['Poppins'] text-[18px] leading-[normal] left-[261px] not-italic text-black text-center text-nowrap top-[303px] translate-x-[-50%] whitespace-pre">
        Capstone Archiving and Sorting System
      </p>

      {/* Role Selection Tabs */}
      <div className="absolute left-[78px] top-[345px] w-[367px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white border border-[#1a1851] rounded-[8px] h-[44px]">
            <TabsTrigger 
              value="student" 
              className="data-[state=active]:bg-[#1a1851] data-[state=active]:text-white font-['Poppins'] rounded-[6px]"
            >
              Student Login
            </TabsTrigger>
            <TabsTrigger 
              value="admin"
              className="data-[state=active]:bg-[#1a1851] data-[state=active]:text-white font-['Poppins'] rounded-[6px]"
            >
              Admin Login
            </TabsTrigger>
          </TabsList>

          {/* Student Login Form */}
          <TabsContent value="student" className="mt-6">
            <form onSubmit={handleStudentSubmit}>
              {/* Email Address Label */}
              <p className="font-['Poppins'] leading-[normal] not-italic text-[16px] text-black text-nowrap mb-2">
                Email Address
              </p>

              {/* Email Input */}
              <div className="relative bg-white h-[48px] rounded-[8px] mb-4">
                <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute left-[21px] size-[20px] top-[14px]">
                  <img 
                    alt="" 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={imgMail1} 
                  />
                </div>
                <input
                  type="email"
                  placeholder="student@gmail.com"
                  value={studentFormData.email}
                  onChange={(e) => setStudentFormData({ ...studentFormData, email: e.target.value })}
                  className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
                  required
                />
              </div>

              {/* Password Label */}
              <p className="font-['Poppins'] leading-[normal] not-italic text-[16px] text-black text-nowrap mb-2">
                Password
              </p>

              {/* Password Input */}
              <div className="relative bg-white h-[48px] rounded-[8px] mb-4">
                <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute left-[21px] size-[20px] top-[14px]">
                  <img 
                    alt="" 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={imgPass1} 
                  />
                </div>
                <input
                  type={showStudentPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={studentFormData.password}
                  onChange={(e) => setStudentFormData({ ...studentFormData, password: e.target.value })}
                  className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowStudentPassword(!showStudentPassword)}
                  className="absolute left-[329px] size-[20px] top-[14px] cursor-pointer"
                >
                  <img 
                    alt="" 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={imgShow1} 
                  />
                </button>
              </div>

              {/* Error Message */}
              {studentError && (
                <div className="mb-2">
                  <p className="font-['Poppins'] text-[12px] text-red-600">
                    {studentError}
                  </p>
                </div>
              )}

              {/* Remember Me and Forgot Password Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={studentFormData.remember}
                    onCheckedChange={(checked) => setStudentFormData({ ...studentFormData, remember: checked as boolean })}
                  />
                  <p className="font-['Poppins'] leading-[normal] not-italic text-[#929292] text-[14px] text-nowrap whitespace-pre">
                    Remember me
                  </p>
                </div>
                
                <button
                  type="button"
                  onClick={() => setForgotPasswordOpen(true)}
                  className="font-['Poppins'] leading-[normal] not-italic text-[#1a1851] text-[14px] text-nowrap hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#1a1851] h-[48px] rounded-[8px] hover:bg-[#0B1441] transition-colors cursor-pointer mb-4"
              >
                <p className="font-['Poppins'] leading-[normal] not-italic text-[18px] text-center text-nowrap text-white whitespace-pre">
                  Log in
                </p>
              </button>

              {/* Sign Up Link */}
              <Link to="/signup">
                <div className="text-center">
                  <p className="font-['Poppins'] leading-[normal] not-italic text-[#1a1851] text-[14px] text-center text-nowrap whitespace-pre">
                    <span>Don't have an account? </span>
                    <span className="font-['Poppins'] hover:underline cursor-pointer">Sign up here.</span>
                  </p>
                </div>
              </Link>
            </form>
          </TabsContent>

          {/* Admin Login Form */}
          <TabsContent value="admin" className="mt-6">
            <form onSubmit={handleAdminSubmit}>
              {/* Email Address Label */}
              <p className="font-['Poppins'] leading-[normal] not-italic text-[16px] text-black text-nowrap mb-2">
                Admin Email
              </p>

              {/* Email Input */}
              <div className="relative bg-white h-[48px] rounded-[8px] mb-4">
                <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute left-[21px] size-[20px] top-[14px]">
                  <img 
                    alt="" 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={imgMail1} 
                  />
                </div>
                <input
                  type="email"
                  placeholder="admin@capsort.com"
                  value={adminFormData.email}
                  onChange={(e) => setAdminFormData({ ...adminFormData, email: e.target.value })}
                  className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
                  required
                />
              </div>

              {/* Password Label */}
              <p className="font-['Poppins'] leading-[normal] not-italic text-[16px] text-black text-nowrap mb-2">
                Admin Password
              </p>

              {/* Password Input */}
              <div className="relative bg-white h-[48px] rounded-[8px] mb-4">
                <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute left-[21px] size-[20px] top-[14px]">
                  <img 
                    alt="" 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={imgPass1} 
                  />
                </div>
                <input
                  type={showAdminPassword ? 'text' : 'password'}
                  placeholder="Enter admin password"
                  value={adminFormData.password}
                  onChange={(e) => setAdminFormData({ ...adminFormData, password: e.target.value })}
                  className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowAdminPassword(!showAdminPassword)}
                  className="absolute left-[329px] size-[20px] top-[14px] cursor-pointer"
                >
                  <img 
                    alt="" 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={imgShow1} 
                  />
                </button>
              </div>

              {/* Error Message */}
              {adminError && (
                <div className="mb-2">
                  <p className="font-['Poppins'] text-[12px] text-red-600">
                    {adminError}
                  </p>
                </div>
              )}

              {/* Remember Me */}
              <div className="flex items-center gap-2 mb-4">
                <Checkbox
                  checked={adminFormData.remember}
                  onCheckedChange={(checked) => setAdminFormData({ ...adminFormData, remember: checked as boolean })}
                />
                <p className="font-['Poppins'] leading-[normal] not-italic text-[#929292] text-[14px] text-nowrap whitespace-pre">
                  Remember me
                </p>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#1a1851] h-[48px] rounded-[8px] hover:bg-[#0B1441] transition-colors cursor-pointer"
              >
                <p className="font-['Poppins'] leading-[normal] not-italic text-[18px] text-center text-nowrap text-white whitespace-pre">
                  Log in as Admin
                </p>
              </button>

              {/* Admin Note */}
              <div className="mt-4 p-3 bg-[#FFD338]/10 border border-[#FFD338]/30 rounded-[8px]">
                <p className="font-['Poppins'] text-[12px] text-[#1a1851] text-center">
                  Admin access is restricted. Only authorized personnel with valid credentials can login.
                </p>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="absolute font-['Poppins'] leading-[normal] left-[262.5px] not-italic text-[#6c6565] text-[10px] text-center text-nowrap top-[954px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">© 2025 University of Science and Technology of Southern Philippines</p>
        <p>Capstone Sorting and Archiving System</p>
      </div>

      {/* Forgot Password Dialog */}
      <ForgotPasswordDialog open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen} />
    </div>
  );
}
