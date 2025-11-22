import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TermsDialog } from '../components/TermsDialog';
import { Checkbox } from '../components/ui/checkbox';
import imgScreenshot202510211430581 from "figma:asset/3d25bb0db39ceaa8384a23d07aeb10c205d94b2c.png";
import imgMail1 from "figma:asset/04473dd56e55d0b26fdb1b2552a8ecf8338b14c8.png";
import imgPass3 from "figma:asset/12622181b4587ff8a8dfde9e6073e4eac6d0f3b5.png";
import imgShow3 from "figma:asset/7fa0b269fdc7d590764fd2cb0a2729811799234e.png";
import imgImageRemovebgPreview71 from "figma:asset/1f6c2a7cc84f53e05c54479d3409ebb58581e6a0.png";
import imgPeople1 from "figma:asset/d85598bb0a80b77f3c21d66bd108017142a90408.png";
import imgTelephone1 from "figma:asset/89917338b4746b5906838cb3985a6d52870ddbe1.png";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);

  const getPasswordStrength = () => {
    if (!formData.password) return 0;
    let strength = 0;
    if (formData.password.length >= 8) strength++;
    if (/[A-Z]/.test(formData.password)) strength++;
    if (/[0-9]/.test(formData.password)) strength++;
    if (/[^A-Za-z0-9]/.test(formData.password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    navigate('/student/dashboard');
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
      <div className="absolute h-[55px] left-[158px] top-[103px] w-[205px]">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImageRemovebgPreview71} 
        />
      </div>

      {/* System Name */}
      <p className="absolute font-['Poppins'] text-[18px] leading-[normal] left-[261px] not-italic text-black text-center text-nowrap top-[167px] translate-x-[-50%] whitespace-pre">
        Capstone Archiving and Sorting System
      </p>

      <form onSubmit={handleSubmit}>
        {/* Full Name Label */}
        <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[210px] whitespace-pre">
          Full Name
        </p>

        {/* Full Name Input */}
        <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[241px] w-[367px]">
          <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="absolute left-[21px] size-[20px] top-[14px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgPeople1} 
            />
          </div>
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
            required
          />
        </div>

        {/* Contact Number Label */}
        <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[302px] whitespace-pre">
          Contact Number
        </p>

        {/* Contact Number Input */}
        <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[333px] w-[367px]">
          <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="absolute left-[21px] size-[20px] top-[14px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgTelephone1} 
            />
          </div>
          <input
            type="tel"
            placeholder="+63 9** *** ****"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
            required
          />
        </div>

        {/* Email Address Label */}
        <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[394px] whitespace-pre">
          Email Address
        </p>

        {/* Email Input */}
        <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[425px] w-[367px]">
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
        <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[486px] whitespace-pre">
          Password
        </p>

        {/* Password Input */}
        <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[517px] w-[367px]">
          <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="absolute left-[21px] size-[20px] top-[14px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgPass3} 
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
              src={imgShow3} 
            />
          </button>
        </div>

        {/* Password Strength */}
        <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] text-nowrap top-[572px] whitespace-pre">
          Password strength:
        </p>
        <div className="absolute flex gap-[15px] left-[78px] top-[594px]">
          <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 1 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
          <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 2 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
          <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 3 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
          <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 4 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
        </div>

        {/* Confirm Password Label */}
        <p className="absolute font-['Poppins'] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[608px] whitespace-pre">
          Confirm Password
        </p>

        {/* Confirm Password Input */}
        <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[639px] w-[367px]">
          <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="absolute left-[21px] size-[20px] top-[14px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgPass3} 
            />
          </div>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="absolute left-[61px] top-[14px] bg-transparent border-0 outline-none font-['Poppins'] text-[14px] text-black placeholder:text-[#929292] w-[280px]"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute left-[329px] size-[20px] top-[14px] cursor-pointer"
          >
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgShow3} 
            />
          </button>
        </div>

        {/* Terms Checkbox */}
        <div className="absolute left-[78px] top-[701px] flex items-start gap-2 z-10">
          <Checkbox
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked })}
            className="bg-white rounded-[2px] size-[15px] border flex-shrink-0 cursor-pointer"
          />
          <p className="font-['Poppins'] leading-[normal] not-italic text-[12px] text-black text-nowrap whitespace-pre">
            <span>I agree to the </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setTermsDialogOpen(true);
              }}
              className="font-['Poppins'] text-[#1a1851] hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
            <span> and </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setTermsDialogOpen(true);
              }}
              className="font-['Poppins'] text-[#1a1851] hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </p>
        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className="absolute bg-[#1a1851] h-[48px] left-[78px] rounded-[8px] top-[738px] w-[367px] hover:bg-[#0B1441] transition-colors cursor-pointer"
        >
          <p className="font-['Poppins'] leading-[normal] not-italic text-[18px] text-center text-nowrap text-white whitespace-pre">
            Create Account
          </p>
        </button>

        {/* Login Link */}
        <Link to="/login">
          <div className="absolute left-[95px] top-[799px] w-[303px]">
            <p className="font-['Poppins'] leading-[normal] not-italic text-[#1a1851] text-[14px] text-center">
              Already have an account? <span className="font-['Poppins'] hover:underline cursor-pointer">Log in here.</span>
            </p>
          </div>
        </Link>
      </form>

      {/* Footer */}
      <div className="absolute font-['Poppins'] leading-[normal] left-[262.5px] not-italic text-[#6c6565] text-[10px] text-center text-nowrap top-[954px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">© 2025 University of Science and Technology of Southern Philippines</p>
        <p>Capstone Sorting and Archiving System</p>
      </div>

      {/* Terms Dialog */}
      <TermsDialog open={termsDialogOpen} onOpenChange={setTermsDialogOpen} />
    </div>
  );
}