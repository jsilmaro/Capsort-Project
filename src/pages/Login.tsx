import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ForgotPasswordDialog } from '../components/ForgotPasswordDialog';
import { Checkbox } from '../components/ui/checkbox';
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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

      // Check if admin credentials
    if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASSWORD) {
      navigate('/admin/dashboard');
    } else if (formData.email === ADMIN_EMAIL && formData.password !== ADMIN_PASSWORD) {
      setError('Invalid admin password');
    } else {
      // Regular student/user login
      navigate('/student/dashboard');
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

      {/* Email Address Label */}
      <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[357px] whitespace-pre">
        Email Address
      </p>

      {/* Email Input */}
      <form onSubmit={handleSubmit}>
        <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[388px] w-[367px]">
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
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
            required
          />
        </div>

        {/* Password Label */}
        <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[448px] whitespace-pre">
          Password
        </p>

        {/* Password Input */}
        <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[479px] w-[367px]">
          <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="absolute left-[21px] size-[20px] top-[14px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgPass1} 
            />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-[329px] size-[20px] top-[14px] cursor-pointer"
          >
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgShow1} 
            />
          </button>
        </div>

        {/* Remember Me Checkbox */}
        <div className="absolute left-[78px] top-[543px] flex items-center gap-2 z-10">
          <Checkbox
            checked={formData.remember}
            onCheckedChange={(checked) => setFormData({ ...formData, remember: checked })}
          />
          <p className="font-['Poppins'] leading-[normal] not-italic text-[#929292] text-[14px] text-nowrap whitespace-pre">
            Remember me
          </p>
        </div>

        {/* Forgot Password */}
        <button
          type="button"
          onClick={() => setForgotPasswordOpen(true)}
          className="absolute font-['Poppins'] leading-[normal] left-[445px] not-italic text-[#1a1851] text-[14px] text-nowrap text-right top-[540px] translate-x-[-100%] whitespace-pre hover:underline cursor-pointer"
        >
          Forgot Password?
        </button>

        {/* Login Button */}
        <button
          type="submit"
          className="absolute bg-[#1a1851] h-[48px] left-[78px] rounded-[8px] top-[581px] w-[367px] hover:bg-[#0B1441] transition-colors cursor-pointer"
        >
          <p className="font-['Poppins'] leading-[normal] not-italic text-[18px] text-center text-nowrap text-white whitespace-pre">
            Log in
          </p>
        </button>

        {/* Sign Up Link */}
        <Link to="/signup">
          <div className="absolute left-[110px] top-[663px] w-[303px]">
            <p className="font-['Poppins'] leading-[normal] not-italic text-[#1a1851] text-[14px] text-center text-nowrap whitespace-pre">
              <span>Don't have an account? </span>
              <span className="font-['Poppins'] hover:underline cursor-pointer">Sign up here.</span>
            </p>
          </div>
        </Link>
      </form>

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