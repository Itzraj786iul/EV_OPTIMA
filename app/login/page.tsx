'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to dashboard
    router.push('/dashboard');
  };

  const handleAdminLogin = () => {
    router.push('/admin');
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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <div className="glass p-8 rounded-xl">
          {!showOTP ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/forgot-password" className="text-sm text-electric-blue hover:text-neon-cyan">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all glow-blue"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={handleAdminLogin}
                className="w-full px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all"
              >
                Continue as Admin
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Enter OTP</label>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-3 bg-white/5 border border-electric-blue/30 rounded-lg text-white text-center text-2xl tracking-widest focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="000000"
                />
                <p className="text-sm text-gray-400 mt-2 text-center">
                  OTP sent to {formData.email}
                </p>
              </div>

              <button
                onClick={() => {
                  setShowOTP(false);
                  router.push('/dashboard');
                }}
                className="w-full px-6 py-3 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan transition-all glow-blue"
              >
                Verify OTP
              </button>

              <button
                onClick={() => setShowOTP(false)}
                className="w-full px-6 py-3 glass border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all"
              >
                Back
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-electric-blue hover:text-neon-cyan font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

