'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden relative select-none border-b border-slate-100">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Story & Stats */}
          <div className="space-y-8">
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-red-100/70 border border-red-200/50 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wider uppercase">
                👋 About NextFluent
              </span>
              
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Empowering Learners to Speak with <span className="text-[#EF4444]">Confidence.</span>
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
                At NextFluent, we believe that language should never be a barrier to your success. Our mission is to provide world-class English training, tailored to your personal and professional goals, using proven methodologies and expert guidance.
              </p>
            </div>

            {/* Stats Grid (2x2) */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              
              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#EF4444]">50K+</h4>
                <p className="text-sm font-bold text-slate-700">Happy Students</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#EF4444]">15+</h4>
                <p className="text-sm font-bold text-slate-700">Expert Tutors</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#EF4444]">4.9</h4>
                <p className="text-sm font-bold text-slate-700">Average Rating</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-3xl sm:text-4xl font-black text-[#EF4444]">100%</h4>
                <p className="text-sm font-bold text-slate-700">Commitment</p>
              </div>
              
            </div>
            
            {/* CTA Button */}
            <div className="pt-2">
              <Link href="/contact">
                <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all transform hover:-translate-y-1 cursor-pointer">
                  Discover Our Story
                </button>
              </Link>
            </div>

          </div>

          {/* Right Side: Staggered Image Grid */}
          <div className="relative h-[500px] sm:h-[600px] w-full hidden sm:block">
            
            {/* Floating Badge */}
            <div className="absolute top-10 -left-8 z-30 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow border border-slate-100">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-2xl border border-red-100">
                🏆
              </div>
              <div>
                <p className="text-[#0F172A] font-black text-lg leading-none">15+ Years</p>
                <p className="text-slate-500 font-bold text-xs mt-1 uppercase tracking-wider">Of Excellence</p>
              </div>
            </div>

            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-3xl overflow-hidden shadow-xl z-10 border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating" 
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply"></div>
            </div>

            {/* Small Image 1 (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" 
                alt="Online tutoring" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Image 2 (Bottom Right) */}
            <div className="absolute bottom-10 right-4 w-[35%] h-[35%] rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80" 
                alt="Books" 
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Dots Pattern */}
            <svg className="absolute -bottom-8 -right-8 w-32 h-32 text-[#DC2626] opacity-20 z-0" fill="currentColor" viewBox="0 0 100 100">
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
