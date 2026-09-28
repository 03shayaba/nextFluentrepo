'use client';

export default function Footer() {
  return (
    <footer className="bg-[#FAFBFD] pt-16 lg:pt-20 border-t border-slate-100 select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand Logo, Tagline, About Text, Social Icons (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E59719] to-amber-300 flex items-center justify-center text-white text-xl font-black shadow-md">
                  Y
                </div>
                <span className="text-2xl font-black text-[#111726] tracking-tight">
                  Younus <span className="text-[#E59719]">LMS</span>
                </span>
              </div>
              <p className="text-xs font-semibold text-[#E59719] tracking-wide">
                Learn Today. Brighter Tomorrow.
              </p>
            </div>

            {/* About Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm font-normal">
              Younus LMS is your trusted partner in learning English & modern skills. We help learners worldwide build confidence, improve communication skills, and unlock new opportunities.
            </p>

            {/* Social Icons Row */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <a href="#" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity">📸</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity">in</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity">▶</a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#111726] text-white flex items-center justify-center text-sm hover:opacity-90 transition-opacity">𝕏</a>
              </div>
              <p className="text-xs font-semibold text-[#E59719] italic flex items-center gap-1 pt-1">
                <span>Let's stay connected</span>
                <span>♡</span>
              </p>
            </div>

          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-[#111726] relative inline-block">
              Quick Links
              <span className="block w-6 h-0.5 bg-[#E59719] rounded-full mt-1" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Courses (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-[#111726] relative inline-block">
              Our Courses
              <span className="block w-6 h-0.5 bg-[#E59719] rounded-full mt-1" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Grammar</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Speaking</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Vocabulary</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Listening</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">IELTS Preparation</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Business English</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Kids English</a></li>
            </ul>
          </div>

          {/* Column 4: Stay in the Loop & App Downloads (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Soft Amber Card: Stay in the Loop */}
            <div className="bg-[#FFF8EE] rounded-3xl p-6 border border-amber-100/80 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-[#111726]">Stay in the Loop</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Get the latest tips, resources, and updates delivered to your inbox.
                  </p>
                </div>
                <span className="text-3xl text-[#E59719]">✈️</span>
              </div>

              <div className="flex items-center bg-white rounded-2xl p-1.5 border border-amber-200/80 shadow-inner">
                <input 
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 text-xs text-slate-700 bg-transparent outline-none placeholder-slate-400"
                />
                <button className="bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-xs px-5 py-2.5 rounded-xl flex-shrink-0 transition-colors flex items-center gap-1">
                  <span>Subscribe</span>
                  <span>→</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-400 italic">No spam. Just valuable learning content.</p>
            </div>

            {/* Download Our App */}
            <div className="space-y-3">
              <h5 className="text-sm font-bold text-[#111726]">Download Our App</h5>
              <p className="text-xs text-slate-500">Learn anytime, anywhere.</p>
              
              <div className="flex items-center gap-3">
                {/* App Store Button */}
                <button className="bg-[#111726] hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
                  <span className="text-xl">🍏</span>
                  <div className="text-left leading-none">
                    <span className="text-[9px] uppercase font-semibold text-slate-400 block">Download on the</span>
                    <span className="text-xs font-bold text-white">App Store</span>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="bg-[#111726] hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
                  <span className="text-xl">▶</span>
                  <div className="text-left leading-none">
                    <span className="text-[9px] uppercase font-semibold text-slate-400 block">GET IT ON</span>
                    <span className="text-xs font-bold text-white">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Wave Wavy Dark Navy Footer Bar */}
      <div className="bg-[#111726] text-white pt-10 pb-6 relative overflow-hidden">
        
        {/* Subtle Wave SVG Top Edge */}
        <div className="absolute -top-6 left-0 right-0 h-8 bg-gradient-to-r from-[#111726] via-[#171E2E] to-[#111726]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-300">
          <div>
            © 2026 Younus LMS. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Better English</span>
            <span>•</span>
            <span>Brighter Opportunities</span>
            <span>•</span>
            <span>A More Confident You</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-[#E59719]">🧡</span>
            <span>for global learners</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
