'use client';

const steps = [
  {
    number: "01",
    badge: "ASSESSMENT",
    title: "Assess Your Current Level",
    desc: "Take a quick placement test to understand your strengths and get personalized recommendations.",
    icon: "🎯",
    features: ["Quick 10-Min Assessment", "Detailed Skill Breakdown", "Tailored Learning Path"],
    isActive: true
  },
  {
    number: "02",
    badge: "LEARNING",
    title: "Learn & Build Your Skills",
    desc: "Access structured video lessons, expert note guides, and interactive bite-sized learning modules.",
    icon: "📑",
    features: ["Expert-Led Lessons", "Structured Modules", "Interactive Content"],
    isActive: false
  },
  {
    number: "03",
    badge: "PRACTICE",
    title: "Practice & Apply Hands-On",
    desc: "Put theory into practice with live code playgrounds, interactive quizzes, and real projects.",
    icon: "⚡",
    features: ["Interactive Exercises", "Real-World Projects", "Community Code Reviews"],
    isActive: false
  },
  {
    number: "04",
    badge: "MASTERY",
    title: "Master & Get Certified",
    desc: "Complete final assessments, unlock shareable industry-recognized certificates, and land your job.",
    icon: "🏆",
    features: ["Verified Certificate", "Career Guidance", "Job Referral Network"],
    isActive: false
  }
];

export default function LearningApproach() {
  return (
    <section className="bg-white py-16 lg:py-24 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Big Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111726] tracking-tight">
            Approach
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            A structured, step-by-step roadmap designed to take you from a beginner to an industry-ready expert smoothly.
          </p>
        </div>

        {/* 4 Cards Row Container with Continuous Connecting Line */}
        <div className="relative">
          
          {/* Horizontal Connecting Line passing right through card gaps */}
          <div className="hidden lg:block absolute top-[45%] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-amber-300 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 items-stretch">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`bg-white rounded-[32px] p-7 border transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer relative ${
                  step.isActive 
                    ? 'border-[#E59719] shadow-xl shadow-amber-500/10 ring-1 ring-[#E59719]' 
                    : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
                }`}
              >
                {/* Gold Top Bar Accent for Active Card */}
                {step.isActive && (
                  <div className="absolute top-0 left-6 right-6 h-1.5 bg-[#E59719] rounded-b-full" />
                )}

                <div className="space-y-6">
                  {/* Top Row: Soft Rounded Icon Box (Left) & Soft Gold Number (Right) */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] border border-amber-100/80 flex items-center justify-center text-2xl shadow-sm">
                      {step.icon}
                    </div>
                    <span className={`text-4xl font-black tracking-tight ${
                      step.isActive ? 'text-[#E59719]' : 'text-slate-200'
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <div>
                    <span className="text-[10px] font-extrabold text-[#E59719] bg-[#FFF8EE] px-3 py-1 rounded-full tracking-wider uppercase border border-amber-100/60 inline-block">
                      {step.badge}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className={`text-lg font-extrabold leading-snug ${
                      step.isActive ? 'text-[#E59719]' : 'text-[#111726]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bullet Checklist */}
                  <div className="pt-2 space-y-2 border-t border-slate-50">
                    {step.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span className="text-[#E59719] font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E59719] group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <span>→</span>
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
