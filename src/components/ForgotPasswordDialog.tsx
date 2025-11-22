import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

interface ForgotPasswordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = 'email' | 'code' | 'reset' | 'success';

export function ForgotPasswordDialog({ open, onOpenChange }: ForgotPasswordDialogProps) {
  const [step, setStep] = useState<Step>('email');
  const [contactMethod, setContactMethod] = useState<'email' | 'mobile'>('email');
  const [contact, setContact] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = () => {
    setStep('email');
    setContactMethod('email');
    setContact('');
    setCode('');
    setNewPassword('');
    setConfirmPassword('');
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending code
    setStep('code');
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate verifying code
    if (code.length === 6) {
      setStep('reset');
    } else {
      alert('Please enter a valid 6-digit code');
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    // Simulate password reset
    setStep('success');
  };

  const handleClose = () => {
    handleReset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) handleClose();
      else onOpenChange(isOpen);
    }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-['Poppins']">
            {step === 'email' && 'Forgot Password?'}
            {step === 'code' && 'Enter Verification Code'}
            {step === 'reset' && 'Reset Password'}
            {step === 'success' && 'Password Reset Successful'}
          </DialogTitle>
          <DialogDescription className="font-['Poppins']">
            {step === 'email' && 'Enter your email or mobile number to receive a verification code.'}
            {step === 'code' && `We've sent a 6-digit code to your ${contactMethod === 'email' ? 'email' : 'mobile number'}.`}
            {step === 'reset' && 'Enter your new password.'}
            {step === 'success' && 'Your password has been successfully reset.'}
          </DialogDescription>
        </DialogHeader>

        {/* Step 1: Enter Email or Mobile */}
        {step === 'email' && (
          <form onSubmit={handleSendCode} className="space-y-4 mt-4">
            <div>
              <label className="font-['Poppins'] text-[14px] text-black mb-2 block">
                Contact Method
              </label>
              <div className="flex gap-4 mb-4">
                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 font-['Poppins'] text-[14px] transition-colors ${
                    contactMethod === 'email'
                      ? 'border-[#1a1851] bg-[#1a1851] text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#1a1851]'
                  }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('mobile')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 font-['Poppins'] text-[14px] transition-colors ${
                    contactMethod === 'mobile'
                      ? 'border-[#1a1851] bg-[#1a1851] text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#1a1851]'
                  }`}
                >
                  Mobile Number
                </button>
              </div>
            </div>
            <div>
              <label className="font-['Poppins'] text-[14px] text-black mb-2 block">
                {contactMethod === 'email' ? 'Email Address' : 'Mobile Number'}
              </label>
              <input
                type={contactMethod === 'email' ? 'email' : 'tel'}
                placeholder={contactMethod === 'email' ? 'student@gmail.com' : '+63 9** *** ****'}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 border border-[#1a1851] rounded-lg font-['Poppins'] text-[14px] outline-none focus:ring-2 focus:ring-[#1a1851]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1a1851] hover:bg-[#0B1441] text-white font-['Poppins'] py-6 text-[16px]"
            >
              Send Verification Code
            </Button>
          </form>
        )}

        {/* Step 2: Enter Verification Code */}
        {step === 'code' && (
          <form onSubmit={handleVerifyCode} className="space-y-4 mt-4">
            <div>
              <label className="font-['Poppins'] text-[14px] text-black mb-2 block">
                Verification Code
              </label>
              <input
                type="text"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                className="w-full px-4 py-3 border border-[#1a1851] rounded-lg font-['Poppins'] text-[18px] tracking-widest text-center outline-none focus:ring-2 focus:ring-[#1a1851]"
                required
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep('email')}
                className="flex-1 font-['Poppins'] py-6 text-[14px]"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#1a1851] hover:bg-[#0B1441] text-white font-['Poppins'] py-6 text-[14px]"
              >
                Verify Code
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setStep('email')}
              className="w-full text-center text-[#1a1851] font-['Poppins'] text-[12px] hover:underline"
            >
              Didn't receive code? Resend
            </button>
          </form>
        )}

        {/* Step 3: Reset Password */}
        {step === 'reset' && (
          <form onSubmit={handleResetPassword} className="space-y-4 mt-4">
            <div>
              <label className="font-['Poppins'] text-[14px] text-black mb-2 block">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-[#1a1851] rounded-lg font-['Poppins'] text-[14px] outline-none focus:ring-2 focus:ring-[#1a1851]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>
            <div>
              <label className="font-['Poppins'] text-[14px] text-black mb-2 block">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-[#1a1851] rounded-lg font-['Poppins'] text-[14px] outline-none focus:ring-2 focus:ring-[#1a1851]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1a1851] hover:bg-[#0B1441] text-white font-['Poppins'] py-6 text-[16px]"
            >
              Reset Password
            </Button>
          </form>
        )}

        {/* Step 4: Success */}
        {step === 'success' && (
          <div className="space-y-4 mt-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-['Poppins'] text-[14px] text-gray-700">
              You can now log in with your new password.
            </p>
            <Button
              onClick={handleClose}
              className="w-full bg-[#1a1851] hover:bg-[#0B1441] text-white font-['Poppins'] py-6 text-[16px]"
            >
              Go to Login
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
