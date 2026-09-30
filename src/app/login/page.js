'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-8">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Visual/Branding */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#0F172A] to-slate-800 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                Next<span className="text-amber-500">Fluent</span>
              </h2>
            </Link>
            
            <h1 className="text-3xl font-bold mb-3 leading-tight">
              Welcome back to your learning journey!
            </h1>
            <p className="text-slate-300 text-sm">
              Log in to continue mastering English and unlocking new career opportunities.
            </p>
          </div>
          
          <div className="relative z-10 mt-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover" />
                ))}
              </div>
              <p className="text-xs text-slate-300">Join <span className="font-bold text-white">10K+</span> learners</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <div className="text-center md:text-left mb-5">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Log In</h2>
            <p className="text-slate-500 text-xs">Please enter your details to log in.</p>
          </div>

          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-sm"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-slate-700">Password</label>
                <a href="#" className="text-xs font-semibold text-amber-500 hover:text-amber-600 transition-colors">Forgot Password?</a>
              </div>
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2 mt-1">
              <input 
                type="checkbox" 
                id="remember" 
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="rounded text-amber-500 focus:ring-amber-500/20 w-3.5 h-3.5 border-slate-300" 
              />
              <label htmlFor="remember" className="text-xs text-slate-600">Remember me for 30 days</label>
            </div>

            <button type="submit" className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-semibold py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg mt-4 text-sm">
              Log In
            </button>

          </form>

          <p className="text-center text-xs text-slate-600 mt-5">
            Don't have an account? <Link href="/signup" className="font-bold text-amber-500 hover:text-amber-600 transition-colors">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
