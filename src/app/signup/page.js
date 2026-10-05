'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneError) return;
    console.log('Signup attempt with:', formData);
    // Add actual signup logic here
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
        {/* Left Side - Visual/Branding */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#0F172A] via-[#1E1118] to-[#0F172A] p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
          {/* Decorative Red Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Next<span className="text-[#EF4444]">Fluent</span>
              </h2>
            </Link>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight">
              Start your success story today.
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Create a free account and get access to premium courses, AI assessments, and verified certificates.
            </p>
          </div>
          
          <div className="relative z-10 mt-6 sm:mt-8 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Image key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-[#0F172A] object-cover" />
                ))}
              </div>
              <p className="text-xs text-slate-300">Join <span className="font-bold text-white">10K+</span> active learners</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-7/12 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <div className="text-center md:text-left mb-5">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Create Account</h2>
            <p className="text-slate-500 text-xs">Sign up in just a few seconds.</p>
          </div>

          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-[#DC2626] transition-all outline-none text-sm text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-[#DC2626] transition-all outline-none text-sm text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-[#DC2626] transition-all outline-none text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  let val = e.target.value.replace(/[^0-9]/g, '');
                  if (val.length > 0 && !/^[6-9]/.test(val)) {
                    setPhoneError('Please enter a valid mobile number.');
                  } else {
                    setPhoneError('');
                  }
                  e.target.value = val;
                  handleChange(e);
                }}
                required
                maxLength={10}
                pattern="[6-9][0-9]{9}"
                placeholder="9876543210"
                className={`w-full px-3.5 py-2.5 rounded-xl border ${phoneError ? 'border-red-500 focus:ring-red-500/20 bg-red-50' : 'border-slate-200 bg-slate-50 focus:border-[#DC2626] focus:ring-red-500/20'} focus:bg-white focus:ring-2 transition-all outline-none text-sm`}
              />
              {phoneError && <p className="text-red-500 text-[10px] font-semibold mt-1">{phoneError}</p>}
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a strong password"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-[#DC2626] transition-all outline-none text-sm text-slate-900"
              />
            </div>

            <button type="submit" className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-red-500/20 hover:shadow-lg mt-4 text-sm cursor-pointer">
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-slate-600 mt-6 font-medium">
            Already have an account? <Link href="/login" className="font-bold text-[#EF4444] hover:text-[#DC2626] transition-colors">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
