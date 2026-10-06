import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AssessmentSection() {
  return (
    <section className="bg-[#0a0a10] text-white py-16 lg:py-24 font-sans relative overflow-hidden border-t border-[#1E293B]">
      
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold tracking-[0.2em] text-slate-200 uppercase mb-8 shadow-sm">
              KNOW WHERE YOU STAND
            </div>
            
            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.25] mb-6">
              How Ready Are You for <span className="text-[#EF4444]">Spoken English<br/>Mastery?</span>
            </h2>
            
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-slate-300/90 mb-5 leading-relaxed max-w-xl font-medium">
              Feeling overwhelmed by tricky grammar rules, vocabulary gaps, hesitation while speaking, or lack of confidence? This free assessment helps you identify the mistakes, weak areas, and missed opportunities that could be holding back your communication skills.
            </p>
            
            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-slate-300/90 mb-10 leading-relaxed max-w-xl font-medium">
              Answer quick questions and discover your readiness level, biggest preparation gaps, and a personalised action plan in under 2 minutes.
            </p>

            {/* CTA text */}
            <p className="text-lg font-bold text-white mb-6">
              Get Your Personalised English Fluency Report
            </p>

            {/* CTA Button */}
            <Link 
              href="/quiz" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-bold text-white bg-gradient-to-r from-[#DC2626] to-[#B91C1C] rounded-xl hover:from-[#B91C1C] hover:to-[#991B1B] transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.35)] hover:shadow-[0_0_35px_rgba(220,38,38,0.5)] group"
            >
              Start Free Assessment 
              <span className="ml-2 font-normal text-xl leading-none transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right Image Area */}
          <div className="flex justify-center lg:justify-end lg:pr-10">
            <div className="relative">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 bg-[#d99f4d]/10 rounded-full blur-[60px] scale-[1.5] z-0 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Circular Image Frame */}
                <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#d99f4d]/20 p-1.5 shadow-2xl relative bg-[#151520]/50 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {/* Using a placeholder avatar, you can replace it with the actual image path */}
                    <Image 
                      src="/about1.webp" 
                      alt="Sarah Jenkins - Senior Language Coach"
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>
                
                {/* Instructor Info */}
                <div className="mt-6 text-center space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Sarah Jenkins</h3>
                  <p className="text-[#e1a851] font-semibold text-sm sm:text-[15px]">Senior Language Coach</p>
                  <p className="text-[#e1a851] font-semibold text-sm sm:text-[15px]">Spoken English Expert</p>
                  <p className="text-slate-300/80 text-xs sm:text-[13px] pt-1">TESOL Certified, 10+ Years Exp.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
