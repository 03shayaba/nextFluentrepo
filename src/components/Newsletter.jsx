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
    <section className="bg-[#F6F8FA] py-12 lg:py-16 border-t border-b border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Text Box */}
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[#E59719] font-extrabold text-xs sm:text-sm uppercase tracking-widest block">
              NEWSLETTER
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111726] tracking-tight">
              Subscribe to get latest news
            </h2>
          </div>

          {/* Right Input Form */}
          <div className="w-full md:w-auto flex-1 max-w-xl">
            {subscribed ? (
              <div className="bg-emerald-50 text-emerald-700 font-bold text-sm p-4 rounded-2xl border border-emerald-200 text-center animate-fade-in">
                🎉 Thank you for subscribing to Younus LMS!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm focus-within:border-[#E59719] focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none rounded-xl"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#E59719] hover:bg-[#d48d12] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-md flex-shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
