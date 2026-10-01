'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Header />

      <main className="flex-grow relative bg-[#FAFAFA] overflow-hidden pb-32">
        
        {/* Ambient Background */}
        <div className="absolute top-0 inset-x-0 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none z-0"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-red-600/15 via-rose-500/5 to-transparent blur-[120px] rounded-[100%] pointer-events-none z-0"></div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-36 pb-20 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-red-100/80 text-[#DC2626] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wider mb-8 uppercase animate-fade-in-up shadow-sm border border-red-200/50">
            <span className="text-base">🎖️</span>
            <span>Verified Credentials</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight mb-6 leading-tight">
            Certify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 relative inline-block">
              English Mastery
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
            Showcase your skills with our globally recognized, verifiable certificates. <br className="hidden md:block"/>
            Stand out to employers and unlock premium career opportunities.
          </p>

          {/* Visual Cue / Arrow pointing to Certificate */}
          <div className="flex flex-col items-center justify-center relative z-20 mb-[-4rem]">
            <span className="text-sm font-bold text-[#DC2626] uppercase tracking-widest mb-2 font-serif italic">This could be yours</span>
            <div className="relative h-20 flex flex-col items-center justify-center">
              <div className="w-[2px] h-16 bg-gradient-to-b from-[#DC2626]/0 via-[#DC2626] to-[#DC2626] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#DC2626] rounded-full animate-ping"></div>
              </div>
              <svg className="w-5 h-5 text-[#DC2626] -mt-1 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* The Masterpiece Certificate Showcase */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-40">
          
          {/* Certificate Container with 3D Float Effect */}
          <div className="relative group perspective-1000 mx-auto w-full max-w-[750px]">
            
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-rose-300 to-red-600 rounded-[10px] opacity-40 blur-xl group-hover:opacity-70 group-hover:blur-2xl transition-all duration-700"></div>
            
            {/* Dark Premium Frame */}
            <div className="relative bg-[#1A1A1A] p-3 sm:p-4 rounded-[12px] shadow-2xl transform transition-transform duration-700 hover:rotate-x-2 hover:-translate-y-4">
              
              {/* The Actual Paper */}
              <div className="relative bg-[#FFFAF0] border-[8px] border-[#D4AF37] p-6 sm:p-10 overflow-hidden flex flex-col items-center text-center outline outline-2 outline-offset-4 outline-[#8A6A24] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                
                {/* Shiny Light Sweep Effect */}
                <div className="absolute inset-0 translate-x-[-150%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:animate-shine z-30 pointer-events-none duration-1000 ease-in-out"></div>

                {/* Complex Corner Borders */}
                <div className="absolute top-3 left-3 w-12 h-12 border-t-[3px] border-l-[3px] border-[#D4AF37]"></div>
                <div className="absolute top-3 right-3 w-12 h-12 border-t-[3px] border-r-[3px] border-[#D4AF37]"></div>
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-[3px] border-l-[3px] border-[#D4AF37]"></div>
                <div className="absolute bottom-3 right-3 w-12 h-12 border-b-[3px] border-r-[3px] border-[#D4AF37]"></div>

                {/* Background Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.03] pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-red-900"><path d="M50 0L100 25V75L50 100L0 75V25L50 0Z" /></svg>
                </div>

                {/* Top Logo / Icon */}
                <div className="w-16 h-16 mb-6 text-[#D4AF37] flex items-center justify-center">
                  <svg className="w-12 h-12 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#111] uppercase tracking-[0.2em] mb-2 font-semibold border-b border-[#D4AF37] pb-3 inline-block px-8">
                  Certificate of Achievement
                </h2>
                
                <p className="text-slate-600 uppercase tracking-wider text-[10px] mb-8 mt-4 font-medium">This is proudly presented to</p>
                
                <h3 className="text-4xl sm:text-5xl font-serif text-[#8A6A24] mb-6 font-medium italic drop-shadow-sm px-6">
                  Student Name
                </h3>
                
                <p className="text-slate-700 max-w-xl text-sm sm:text-base leading-relaxed mb-12 font-serif">
                  for successfully completing the rigorous requirements of the <br/><strong className="text-[#111] font-bold text-lg">Advanced English Fluency Program</strong><br/> and demonstrating outstanding proficiency in communication.
                </p>

                {/* Signatures & Seal Area */}
                <div className="w-full flex justify-between items-end px-2 sm:px-8 relative z-10">
                  
                  {/* Date Signature */}
                  <div className="text-center w-36">
                    <p className="font-serif italic text-lg text-[#111] border-b border-[#333] pb-1 mb-1">October 24, 2026</p>
                    <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Date of Issue</span>
                  </div>
                  
                  {/* Authentic Gold Seal */}
                  <div className="w-24 h-24 relative flex items-center justify-center -mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-[#D4AF37] to-yellow-600 rounded-full animate-spin-slow opacity-90 shadow-xl shadow-yellow-600/40"></div>
                    <div className="absolute inset-1 bg-gradient-to-tr from-yellow-500 via-[#B58500] to-yellow-200 rounded-full border border-yellow-200 flex items-center justify-center">
                      <div className="absolute inset-2 border-2 border-dashed border-yellow-200 rounded-full"></div>
                      <span className="text-white font-serif font-black text-center text-[10px] leading-tight drop-shadow-md">
                        OFFICIAL<br/>SEAL
                      </span>
                    </div>
                  </div>

                  {/* Director Signature */}
                  <div className="text-center w-36">
                    <p className="font-signature text-3xl text-[#111] border-b border-[#333] pb-1 mb-1">J. Doe</p>
                    <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Program Director</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators / Badges */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-y border-slate-200 py-10">
            <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-4xl text-blue-600">🏛️</span>
              <span className="font-bold text-slate-800 text-xl tracking-wide">CEFR Aligned</span>
            </div>
            <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-4xl text-blue-500">🔗</span>
              <span className="font-bold text-slate-800 text-xl tracking-wide">LinkedIn Ready</span>
            </div>
            <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-4xl text-green-600">🛡️</span>
              <span className="font-bold text-slate-800 text-xl tracking-wide">100% Verifiable</span>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100/70 text-[#DC2626] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide mb-4 uppercase">
              <span>🌟</span> VALUE & BENEFITS
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">Why Our Certificates Matter</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">More than just a piece of paper. Our credentials are a powerful tool to advance your career.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Benefit 1 */}
            <div className="group relative rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(220,38,38,0.15)] flex flex-col h-full border border-slate-100 overflow-hidden">
              {/* Top right gradient glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-300/30 rounded-full blur-3xl pointer-events-none group-hover:bg-red-300/40 transition-colors duration-300"></div>
              
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md shadow-red-500/30">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="relative z-10 inline-flex items-center gap-1 bg-red-50 text-red-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5 w-max">
                GLOBAL REACH
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4">Global Recognition</h3>
              <p className="relative z-10 text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                Accepted by multinational corporations and universities. Prove your English proficiency anywhere in the world with absolute confidence.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group relative rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.15)] flex flex-col h-full border border-slate-100 overflow-hidden">
              {/* Top right gradient glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-300/40 transition-colors duration-300"></div>
              
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md shadow-blue-500/30">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="relative z-10 inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5 w-max">
                CAREER GROWTH
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4">Resume Booster</h3>
              <p className="relative z-10 text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                Seamlessly add your digital certificate to your LinkedIn profile with 1-click. Make your resume stand out to top recruiters.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group relative rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.15)] flex flex-col h-full border border-slate-100 overflow-hidden">
              {/* Top right gradient glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-300/40 transition-colors duration-300"></div>
              
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md shadow-emerald-500/30">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div className="relative z-10 inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5 w-max">
                VERIFIED ID
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4">Secure & Verifiable</h3>
              <p className="relative z-10 text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                Every certificate contains a unique cryptographic ID. Employers can instantly verify its authenticity on our platform.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A] border border-slate-800 rounded-3xl p-10 md:py-14 md:px-16 text-center flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
            
            {/* Subtle glow effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-600/20 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="text-left md:max-w-2xl relative z-10 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Earn your credential today</h2>
              <p className="text-slate-400 text-base md:text-lg">Enroll in a course, master the material, and join thousands of successful graduates who have transformed their careers.</p>
            </div>
            
            <a href="/courses" className="inline-flex items-center justify-center bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/30 gap-3 text-base whitespace-nowrap relative z-10 hover:-translate-y-1">
              Explore Courses <span className="text-xl">→</span>
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
