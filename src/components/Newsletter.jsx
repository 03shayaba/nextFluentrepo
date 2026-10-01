'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-20 select-none relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E1118] to-[#0F172A] rounded-[2.5rem] p-8 sm:p-12 md:p-14 shadow-2xl shadow-red-950/20 border border-red-500/30 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Decorative Red Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-[100px] opacity-30 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600 rounded-full filter blur-[100px] opacity-25 transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          {/* Subtle Grid Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern-newsletter" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid-pattern-newsletter)" />
          </svg>

          {/* Left Text Box */}
          <div className="relative z-10 space-y-4 text-center md:text-left flex-1 max-w-xl">
            <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-[#EF4444] font-bold text-xs px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm">
              <span>🚀</span> Stay Updated
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Subscribe for <span className="bg-gradient-to-r from-[#EF4444] to-rose-400 bg-clip-text text-transparent">Exclusive Offers & News!</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Don't miss out! Get the latest courses, special discount vouchers, and premium learning tips delivered straight to your inbox.
            </p>
          </div>

          {/* Right Input Form */}
          <div className="relative z-10 w-full md:w-auto flex-1 max-w-lg">
            {subscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm p-5 rounded-2xl text-center flex flex-col items-center gap-2 shadow-lg backdrop-blur-md">
                <span className="text-4xl animate-bounce">🎉</span>
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20 shadow-2xl focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/40 transition-all duration-300">
                <div className="flex-1 flex items-center gap-3 px-3.5 w-full">
                  <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 text-xs sm:text-sm text-white placeholder-slate-400 bg-transparent outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#DC2626] to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0 uppercase tracking-wider"
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            )}

            <p className="text-slate-400 text-[11px] text-center md:text-left mt-3 pl-1 flex items-center justify-center md:justify-start gap-1.5">
              <span className="text-[#EF4444]">🔒</span> We respect your privacy. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
