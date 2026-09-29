'use client';

const steps = [
  {
    id: 1,
    stepNumber: "STEP 01",
    title: "Browse & Select",
    description: "Explore our wide range of English learning & skill courses designed for all levels.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    stepNumber: "STEP 02",
    title: "Easy Enrollment",
    description: "Enroll securely with flexible payment options and instant lifetime access.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    stepNumber: "STEP 03",
    title: "Interactive Learning",
    description: "Attend live classes, practice real-world exercises, and get expert guidance.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    stepNumber: "STEP 04",
    title: "Learn & Succeed",
    description: "Earn accredited certificates and unlock new career & academic opportunities.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  }
];

export default function LearningProcess() {
  return (
    <section className="relative bg-[#0F172A] py-20 lg:py-32 overflow-hidden select-none z-0">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="learning-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100" height="100" fill="url(#learning-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-4">
            <span className="text-[#E59719] font-bold text-xs sm:text-sm tracking-widest uppercase">
              🚀 How It Works
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Your Journey to <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E59719] to-amber-300">Fluency</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-medium max-w-xl mx-auto">
            Master English and achieve your goals in 4 simple, highly effective steps designed for maximum retention.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[40%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`relative group flex flex-col items-center ${index % 2 !== 0 ? 'lg:mt-16' : ''}`}
            >
              
              {/* Massive Background Number */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/[0.02] group-hover:text-amber-500/[0.05] transition-colors duration-500 z-0 pointer-events-none select-none">
                0{step.id}
              </div>

              {/* Card Container */}
              <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[2rem] w-full max-w-[300px] shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-amber-500/30 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(229,151,25,0.15)] flex flex-col items-center">
                
                {/* Step Badge */}
                <div className="absolute -top-4 bg-gradient-to-r from-[#E59719] to-amber-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-[#0F172A] z-20">
                  {step.stepNumber}
                </div>

                {/* Image */}
                <div className="w-full h-48 rounded-[1.5rem] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="text-center pb-4 px-2">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E59719] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>

              </div>

              {/* Glowing Dot on Connector */}
              <div className="hidden lg:block absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0F172A] border-2 border-amber-500 z-20 group-hover:bg-[#E59719] group-hover:shadow-[0_0_15px_rgba(229,151,25,0.6)] transition-all duration-300"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
