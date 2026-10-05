'use client';
import Image from 'next/image';

const journeySteps = [
  {
    id: "01",
    title: "ASSESS",
    tagline: "Know where you stand",
    description: "Take our diagnostic assessment to identify your current CEFR level and exact skill gaps.",
    icon: (
      <svg className="w-8 h-8 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
    bgGradient: "from-red-500/10 via-rose-500/5 to-transparent",
    borderHover: "hover:border-red-500/60",
  },
  {
    id: "02",
    title: "LEARN",
    tagline: "Learn what you need",
    description: "Access targeted modules customized for your goals — from grammar foundations to IELTS and Business English.",
    icon: (
      <svg className="w-8 h-8 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    bgGradient: "from-rose-500/10 via-red-500/5 to-transparent",
    borderHover: "hover:border-red-500/60",
  },
  {
    id: "03",
    title: "PRACTICE",
    tagline: "Turn Knowledge into Skill",
    description: "Engage in live interactive conversations, speaking drills, and real-world scenarios to build muscle memory.",
    icon: (
      <svg className="w-8 h-8 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766l6.11-1.832a.75.75 0 00.523-.972l-1.42-4.26a.75.75 0 00-.972-.523l-6.11 1.832a2.474 2.474 0 00-1.258.916L9.61 8.78m1.81 6.39L3 21" />
      </svg>
    ),
    bgGradient: "from-red-500/10 via-rose-500/5 to-transparent",
    borderHover: "hover:border-red-500/60",
  },
  {
    id: "04",
    title: "IMPROVE",
    tagline: "Track Your Progress and Keep Growing",
    description: "Receive detailed feedback, track your performance analytics, and celebrate continuous fluency milestones.",
    icon: (
      <svg className="w-8 h-8 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    bgGradient: "from-rose-500/10 via-red-500/5 to-transparent",
    borderHover: "hover:border-red-500/60",
  },
];

export default function OurJourney() {
  return (
    <section className="bg-[#0b101c] py-20 lg:py-28 border-t border-[#1E293B] select-none relative overflow-hidden">
      
      {/* Background Accent Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      {/* Decorative SVG Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="journey-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#journey-grid)"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 relative">
          
          <span className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-md border border-red-500/20 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wider uppercase">
            🚀 The 4-Step Framework
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Your Journey To <span className="text-[#EF4444]">Better English!</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            A proven, structured pathway designed to transform hesitancy into effortless fluency step by step.
          </p>
        </div>

        {/* 2x2 Grid with Center Avatar Concept */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Center Instructor Avatar (Desktop view) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-rose-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-28 h-28 rounded-full border-4 border-[#0b101c] overflow-hidden bg-slate-800 shadow-2xl">
                <Image 
                  src="/t1.avif" 
                  alt="Lead Mentor" 
                  width={112}
                  height={112}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <span className="mt-2 bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg border border-red-400/40">
              Learn Anywhere, Anytime!
            </span>
          </div>

          {/* 2x2 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {journeySteps.map((step) => (
              <div 
                key={step.id}
                className={`group relative bg-gradient-to-br ${step.bgGradient} bg-[#111726]/90 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 border border-slate-800 ${step.borderHover} shadow-xl hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#DC2626] transition-all duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <span className="text-3xl font-black text-slate-700 group-hover:text-red-500/40 transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight mb-1 group-hover:text-[#EF4444] transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-sm font-bold text-red-400 mb-3 uppercase tracking-wider">
                    {step.tagline}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Decorative Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-semibold group-hover:text-slate-300">
                  <span>Phase {step.id}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[#EF4444]">Explore Step →</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
