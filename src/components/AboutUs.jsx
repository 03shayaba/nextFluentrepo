'use client';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="bg-[#111726] py-16 lg:py-24 overflow-hidden relative select-none">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Story & Stats */}
          <div className="space-y-8">
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-[#E59719]/20 backdrop-blur-md border border-[#E59719]/30 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wider uppercase">
                👋 About NextFluent
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Learners to <br className="hidden md:block" />
                Speak with <span className="text-[#E59719]">Confidence.</span>
              </h2>
              
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
                At NextFluent, we believe that language should never be a barrier to your success. Our mission is to provide world-class English training, tailored to your personal and professional goals, using proven methodologies and expert guidance.
              </p>
            </div>

            {/* Stats Grid (2x2) */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-700">
              
              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#E59719]">10K+</h4>
                <p className="text-sm font-bold text-slate-300">Happy Students</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#E59719]">50+</h4>
                <p className="text-sm font-bold text-slate-300">Expert Tutors</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#E59719]">4.9</h4>
                <p className="text-sm font-bold text-slate-300">Average Rating</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#E59719]">100%</h4>
                <p className="text-sm font-bold text-slate-300">Commitment</p>
              </div>
              
            </div>
            
            {/* CTA Button */}
            <div className="pt-2">
              <Link href="/contact">
                <button className="bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer">
                  Discover Our Story
                </button>
              </Link>
            </div>

          </div>

          {/* Right Side: Staggered Image Grid */}
          <div className="relative h-[500px] sm:h-[600px] w-full hidden sm:block">
            
            {/* Floating Badge */}
            <div className="absolute top-10 -left-8 z-30 bg-[#1E293B] p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow border border-slate-700">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-2xl">
                🏆
              </div>
              <div>
                <p className="text-white font-black text-lg leading-none">10+ Years</p>
                <p className="text-slate-400 font-bold text-xs mt-1 uppercase tracking-wider">Of Excellence</p>
              </div>
            </div>

            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-[#1E293B]">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-multiply"></div>
            </div>

            {/* Small Image 1 (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-[#1E293B]">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" 
                alt="Online tutoring" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Image 2 (Bottom Right) */}
            <div className="absolute bottom-10 right-4 w-[35%] h-[35%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-[#1E293B]">
              <img 
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80" 
                alt="Books" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Dots Pattern */}
            <svg className="absolute -bottom-8 -right-8 w-32 h-32 text-[#E59719] opacity-30 z-0" fill="currentColor" viewBox="0 0 100 100">
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill="currentColor" cx="5" cy="5" r="2"></circle>
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#dots)"></rect>
            </svg>

          </div>
          
        </div>

      </div>
    </section>
  );
}
