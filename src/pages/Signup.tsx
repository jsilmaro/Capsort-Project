import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
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
  const { register, login } = useAuth();
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const validateForm = () => {
    // Validate full name
    if (formData.fullName.trim().length < 2) {
      setError('Full name must be at least 2 characters');
      return false;
    }

    // Validate contact number (Philippine format)
    const phoneRegex = /^(\+63|0)?9\d{9}$/;
    if (!phoneRegex.test(formData.contactNumber.replace(/\s/g, ''))) {
      setError('Please enter a valid Philippine mobile number (e.g., 09123456789 or +639123456789)');
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Validate password
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (!/[a-z]/.test(formData.password)) {
      setError('Password must contain at least one lowercase letter');
      return false;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError('Password must contain at least one uppercase letter');
      return false;
    }
    if (!/\d/.test(formData.password)) {
      setError('Password must contain at least one number');
      return false;
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return false;
    }

    // Validate terms agreement
    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    console.log('Form submitted', formData);

    if (!validateForm()) {
      console.log('Validation failed');
      return;
    }

    console.log('Validation passed, sending to backend...');
    setLoading(true);

    try {
      // Format phone number to ensure it starts with +63
      let formattedPhone = formData.contactNumber.replace(/\s/g, '');
      if (formattedPhone.startsWith('0')) {
        formattedPhone = '+63' + formattedPhone.substring(1);
      } else if (!formattedPhone.startsWith('+')) {
        formattedPhone = '+63' + formattedPhone;
      }

      console.log('Calling register API...');
      console.log('Registration data:', {
        fullName: formData.fullName.trim(),
        contactNumber: formattedPhone,
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });
      
      const result = await register({
        fullName: formData.fullName.trim(),
        contactNumber: formattedPhone,
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });

      console.log('Register result:', result);
      console.log('Register result type:', typeof result);
      console.log('Register result success:', result?.success);

      if (result.success) {
        // Auto-login after successful registration
        console.log('Registration successful, attempting auto-login...');
        const loginResult = await login(formData.email.trim().toLowerCase(), formData.password);
        
        if (loginResult.success) {
          console.log('Auto-login successful, redirecting to dashboard...');
          navigate('/student/dashboard');
        } else {
          // If auto-login fails, show success message and redirect to login
          alert('Registration successful! Please login with your credentials.');
          navigate('/login');
        }
      } else {
        setError(result.error || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
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

      {/* Left Side - Form Container */}
      <div className="absolute left-[78px] top-[103px] w-[367px] flex flex-col">
        {/* Logo */}
        <div className="h-[55px] w-[205px] ml-[80px]">
          <img 
            alt="" 
            className="h-full w-full object-cover" 
            src={imgImageRemovebgPreview71} 
          />
        </div>

        {/* System Name */}
        <p className="font-['Poppins'] text-[18px] leading-[normal] text-black text-center mt-[9px] mb-[20px]">
          Capstone Archiving and Sorting System
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Error Message */}
          {error && (
            <div className="w-full bg-red-50 border border-red-200 rounded-md p-3">
              <p className="font-['Poppins'] text-[12px] text-red-600">{error}</p>
            </div>
          )}

          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <p className="font-['Poppins'] leading-[normal] text-[16px] text-black">
              Full Name
            </p>
            <div className="relative bg-white h-[48px] rounded-[8px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute left-[21px] size-[20px] top-[14px]">
                <img 
                  alt="" 
                  className="h-full w-full object-cover" 
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
                disabled={loading}
              />
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-2">
            <p className="font-['Poppins'] leading-[normal] text-[16px] text-black">
              Contact Number
            </p>
            <div className="relative bg-white h-[48px] rounded-[8px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute left-[21px] size-[20px] top-[14px]">
                <img 
                  alt="" 
                  className="h-full w-full object-cover" 
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
                disabled={loading}
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <p className="font-['Poppins'] leading-[normal] text-[16px] text-black">
              Email Address
            </p>
            <div className="relative bg-white h-[48px] rounded-[8px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute left-[21px] size-[20px] top-[14px]">
                <img 
                  alt="" 
                  className="h-full w-full object-cover" 
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
                disabled={loading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <p className="font-['Poppins'] leading-[normal] text-[16px] text-black">
              Password
            </p>
            <div className="relative bg-white h-[48px] rounded-[8px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute left-[21px] size-[20px] top-[14px]">
                <img 
                  alt="" 
                  className="h-full w-full object-cover" 
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
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] size-[20px] top-[14px] cursor-pointer"
                disabled={loading}
              >
                <img 
                  alt="" 
                  className="h-full w-full object-cover" 
                  src={imgShow3} 
                />
              </button>
            </div>
            
            {/* Password Strength */}
            <div className="mt-1">
              <p className="font-['Poppins'] leading-[normal] text-[12px] text-[rgba(0,0,0,0.5)] mb-2">
                Password strength:
              </p>
              <div className="flex gap-[15px]">
                <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 1 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
                <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 2 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
                <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 3 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
                <div className={`h-[5px] rounded-[2px] w-[80px] ${passwordStrength >= 4 ? 'bg-[#34c759]' : 'bg-[#d8d8d8]'}`} />
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <p className="font-['Poppins'] leading-[normal] text-[16px] text-black">
              Confirm Password
            </p>
            <div className="relative bg-white h-[48px] rounded-[8px] w-full">
              <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute left-[21px] size-[20px] top-[14px]">
                <img 
                  alt="" 
                  className="h-full w-full object-cover" 
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
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-[16px] size-[20px] top-[14px] cursor-pointer"
                disabled={loading}
              >
                <img 
                  alt="" 
                  className="h-full w-full object-cover" 
                  src={imgShow3} 
                />
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 mt-2">
            <Checkbox
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: !!checked })}
              disabled={loading}
              className="bg-white rounded-[2px] size-[15px] border flex-shrink-0 cursor-pointer mt-0.5"
            />
            <p className="font-['Poppins'] leading-[normal] text-[12px] text-black">
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
            disabled={loading}
            className="bg-[#1a1851] h-[48px] rounded-[8px] w-full hover:bg-[#0B1441] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            <p className="font-['Poppins'] leading-[normal] text-[18px] text-center text-white">
              {loading ? 'Creating Account...' : 'Create Account'}
            </p>
          </button>

          {/* Login Link */}
          <div className="w-full mt-4">
            <Link to="/login">
              <p className="font-['Poppins'] leading-[normal] text-[#1a1851] text-[14px] text-center">
                Already have an account? <span className="font-['Poppins'] hover:underline cursor-pointer">Log in here.</span>
              </p>
            </Link>
          </div>
        </form>
      </div>

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