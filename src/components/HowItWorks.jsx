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

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-[#E59719] border border-amber-500/20 text-xs font-bold uppercase tracking-widest shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E59719] animate-pulse"></span>
            LEARNING PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Our Learning Process
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-lg mx-auto">
            Master English and achieve your goals in 4 simple, effective steps.
          </p>
        </div>

        {/* 4 Steps Grid Container with Connecting Line */}
        <div className="relative">
          
          {/* Horizontal Curved Dashed Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[95px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 z-0 pointer-events-none"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Outer Circular Container with Dashed Ring & Accent Dots */}
                <div className="relative p-2.5 sm:p-3 rounded-full border-2 border-dashed border-[#E59719]/50 group-hover:border-[#E59719] transition-all duration-300 group-hover:scale-105 bg-white shadow-sm hover:shadow-xl">
                  
                  {/* Decorative Amber Accent Dots (Top-Right & Bottom-Left) */}
                  <div className="absolute top-1 right-2 w-3.5 h-3.5 rounded-full bg-[#E59719] border-2 border-white shadow-xs z-20 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute bottom-1 left-2 w-3.5 h-3.5 rounded-full bg-[#E59719] border-2 border-white shadow-xs z-20 transform group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Step Badge Floating Top-Center */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F172A] group-hover:bg-[#E59719] text-white text-[11px] font-black px-3 py-0.5 rounded-full shadow-md transition-colors duration-300 z-30 border-2 border-white whitespace-nowrap">
                    {step.stepNumber}
                  </div>

                  {/* Inner Photo Circle */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-inner bg-slate-100 relative">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                </div>

                {/* Step Content */}
                <div className="mt-6 text-center space-y-2 max-w-xs px-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#E59719] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
