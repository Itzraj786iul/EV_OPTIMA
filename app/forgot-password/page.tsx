'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

export default function ForgotPassword() {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('reset');
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue to-neon-cyan flex items-center justify-center">
              <span className="text-xl font-bold text-dark-bg">EV</span>
            </div>
            <span className="text-2xl font-bold gradient-text">EV-Optima</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {step === 'email' && 'Forgot Password'}
            {step === 'otp' && 'Verify OTP'}
            {step === 'reset' && 'Reset Password'}
          </h1>
          <p className="text-gray-400">
            {step === 'email' && 'Enter your email to receive OTP'}
            {step === 'otp' && 'Enter the OTP sent to your email'}
            {step === 'reset' && 'Enter your new password'}
          </p>
        </div>

        <div className="glass p-8 rounded-xl">
          {step === 'email' && (
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all glow-blue"
              >
                Send OTP
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Enter OTP</label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white text-center text-2xl tracking-widest focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="000000"
                />
                <p className="text-sm text-gray-400 mt-2 text-center">
                  OTP sent to {email}
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all glow-blue"
              >
                Verify OTP
              </button>

              <button
                type="button"
                onClick={() => setStep('email')}
                className="w-full px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all"
              >
                Back
              </button>
            </form>
          )}

          {step === 'reset' && (
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                {password && confirmPassword && password !== confirmPassword && (
                  <p className="text-sm text-red-400 mt-2">Passwords do not match</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all glow-blue"
              >
                Reset Password
              </button>

              <button
                type="button"
                onClick={() => setStep('otp')}
                className="w-full px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all"
              >
                Back
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-electric-blue hover:text-neon-cyan"
            >
              <FiArrowLeft size={16} />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

