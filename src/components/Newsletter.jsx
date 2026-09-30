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
    <section className="bg-[#111726] py-6 lg:py-10 select-none border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-9 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#E59719] rounded-full filter blur-[100px] opacity-25 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px] opacity-15 transform -translate-x-1/3 translate-y-1/3"></div>

          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid-pattern)" />
          </svg>

          {/* Left Text Box */}
          <div className="relative z-10 space-y-2.5 text-center md:text-left flex-1 max-w-lg">
            <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-[#E59719] font-bold text-xs px-3.5 py-1 rounded-full tracking-wider uppercase shadow-sm">
              🚀 Stay Updated
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug">
              Subscribe for <span className="text-[#E59719]">Offers & News!</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Don't miss out! Get the latest courses, exclusive discounts, and learning tips delivered straight to your inbox.
            </p>
          </div>

          {/* Right Input Form */}
          <div className="relative z-10 w-full md:w-auto flex-1 max-w-lg">
            {subscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-sm p-4 rounded-xl text-center flex flex-col items-center gap-1.5">
                <span className="text-3xl">🎉</span>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-lg focus-within:border-[#E59719]/50 transition-all">
                <div className="flex-1 flex items-center gap-2.5 px-3 w-full">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 bg-transparent outline-none rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0 uppercase tracking-wider"
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            )}

            <p className="text-slate-500 text-[11px] text-center md:text-left mt-2.5 pl-1">
              <span className="text-[#E59719]">🔒</span> We never share your email with third parties.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
