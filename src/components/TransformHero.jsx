'use client';

import React from 'react';

export default function TransformHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-amber-50/30 py-16 lg:py-20 select-none border-b border-slate-100/80">

      {/* Decorative Ambient Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-amber-400/10 via-amber-200/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-100/70 text-[#E59719] px-4 py-1.5 rounded-full font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8 shadow-sm border border-amber-200/50">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9L4 10.636V17L12 21L20 17V10.636L23 9L12 3ZM12 5.385L19.5 9L12 12.615L4.5 9L12 5.385ZM18 16.03L12 19.03L6 16.03V11.727L12 15L18 11.727V16.03Z" />
          </svg>
          CHOOSE CATEGORIES
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#0F172A] tracking-tight leading-tight max-w-3xl mx-auto mb-8 sm:mb-10">
          Transform Future <br className="hidden sm:block" />
          Using Online.
        </h1>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#E59719] hover:bg-amber-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
            Start learning free
            <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>

          <a href="/courses" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 font-bold py-3.5 px-8 rounded-full shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-0.5">
            Explore courses
            <svg className="w-4 h-4 text-slate-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Avatars Background (Hidden on small screens for cleaner look) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">

        {/* Top Left Avatar */}
        <div className="absolute top-16 left-[18%] w-16 h-16 rounded-full border-[3px] border-white shadow-xl overflow-hidden animate-[float_6s_ease-in-out_infinite]">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="Student" className="w-full h-full object-cover" />
        </div>

        {/* Middle Left Avatar (Large) */}
        <div className="absolute top-[55%] left-[8%] -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden animate-[float_7s_ease-in-out_infinite_1s]">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=250&h=250&fit=crop" alt="Student" className="w-full h-full object-cover" />
        </div>

        {/* Bottom Left Avatar */}
        <div className="absolute bottom-16 left-[22%] w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden animate-[float_5s_ease-in-out_infinite_2s]">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" alt="Student" className="w-full h-full object-cover" />
        </div>

        {/* Top Right Avatar (Large) */}
        <div className="absolute top-20 right-[15%] w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden animate-[float_6.5s_ease-in-out_infinite_1.5s]">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&h=250&fit=crop" alt="Student" className="w-full h-full object-cover" />
        </div>

        {/* Middle Right Avatar (Small) */}
        <div className="absolute top-1/2 right-[5%] w-14 h-14 rounded-full border-[3px] border-white shadow-lg overflow-hidden animate-[float_5.5s_ease-in-out_infinite_0.5s]">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" alt="Student" className="w-full h-full object-cover" />
        </div>

        {/* Bottom Right Avatar */}
        <div className="absolute bottom-20 right-[20%] w-20 h-20 rounded-full border-[3px] border-white shadow-xl overflow-hidden animate-[float_7.5s_ease-in-out_infinite_2.5s]">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Student" className="w-full h-full object-cover" />
        </div>

      </div>

      {/* CSS Keyframes for smooth floating animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}
