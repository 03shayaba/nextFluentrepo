'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-16 lg:pt-20 border-t border-slate-800 select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand Logo, Tagline, About Text, Clean Vector Social Icons (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <img src="/NextFluentlogo.jpeg" alt="NextFluent Logo" className="h-10 sm:h-12 w-auto object-contain rounded-full shadow-sm" />
              </div>
              <p className="text-xs font-semibold text-[#E59719] tracking-wide">
                Learn Today. Brighter Tomorrow.
              </p>
            </div>

            {/* About Paragraph */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Your Company is a leading platform for online learning, offering a wide range of courses to help you achieve your career goals.
            </p>

            {/* Equal sized SVG Vector Social Icons Row matching 2nd image reference */}
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-slate-400">
                
                {/* LinkedIn */}
                <a href="#" className="hover:text-[#0A66C2] transition-colors inline-flex items-center justify-center" aria-label="LinkedIn">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a href="#" className="hover:text-[#1D9BF0] transition-colors inline-flex items-center justify-center" aria-label="Twitter">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="hover:text-[#FF0000] transition-colors inline-flex items-center justify-center" aria-label="YouTube">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="hover:text-[#1877F2] transition-colors inline-flex items-center justify-center" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>

                {/* WhatsApp (Standard full-size SVG matching 2nd image perfectly) */}
                <a href="#" className="hover:text-[#25D366] transition-colors inline-flex items-center justify-center" aria-label="WhatsApp">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.687-.833-1.947-.928-.26-.095-.45-.143-.639.143-.19.286-.735.928-.902 1.118-.167.19-.333.214-.618.071-.285-.143-1.206-.444-2.298-1.418-.849-.758-1.423-1.694-1.59-1.98-.167-.286-.018-.44.125-.583.129-.129.285-.333.428-.5.143-.167.19-.286.285-.476.095-.19.048-.357-.024-.5-.071-.143-.639-1.543-.876-2.112-.23-.553-.464-.477-.639-.486-.164-.008-.352-.01-.54-.01-.19 0-.499.071-.76.357-.26.286-.998.976-.998 2.38 0 1.404 1.022 2.761 1.164 2.952.143.19 2.012 3.073 4.876 4.309.681.293 1.213.468 1.627.6.684.217 1.307.186 1.8.113.55-.082 1.687-.69 1.924-1.356.237-.666.237-1.237.167-1.356-.07-.119-.26-.19-.545-.333z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="hover:text-[#E4405F] transition-colors inline-flex items-center justify-center" aria-label="Instagram">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

              </div>
            </div>

          </div>

          {/* Column 2: Courses */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white relative inline-block">
              Courses
              <span className="block w-6 h-0.5 bg-[#E59719] rounded-full mt-1" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li><a href="/courses" className="hover:text-[#E59719] transition-colors">Browse Courses</a></li>
              <li><a href="/categories" className="hover:text-[#E59719] transition-colors">Course Categories</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Free Classes</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white relative inline-block">
              Company
              <span className="block w-6 h-0.5 bg-[#E59719] rounded-full mt-1" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li><a href="/about" className="hover:text-[#E59719] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#E59719] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & App Downloads (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white relative inline-block">
                Contact
                <span className="block w-6 h-0.5 bg-[#E59719] rounded-full mt-1" />
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <p>Opposite Punjab National Bank Duderhama, Ganderbal, Jammu and Kashmir, 191201</p>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+917889745674" className="hover:text-[#E59719] transition-colors">+91-7889745674</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:ngecsupport@gmail.com" className="hover:text-[#E59719] transition-colors">ngecsupport@gmail.com</a>
                </li>
              </ul>
            </div>

            {/* Download Our App */}
            <div className="space-y-3">
              <h5 className="text-sm font-bold text-white">Download LMS Mobile Apps for Trainees</h5>
              
              <div className="flex items-center gap-3">
                {/* App Store Button */}
                <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
                  <span className="text-xl">🍏</span>
                  <div className="text-left leading-none">
                    <span className="text-[9px] uppercase font-semibold text-slate-400 block">Download on the</span>
                    <span className="text-xs font-bold text-white">App Store</span>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
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

      {/* Bottom Footer Bar */}
      <div className="bg-[#0F172A] text-white pt-10 pb-6 relative overflow-hidden border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © 2026 NextFluent. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>Better English</span>
            <span>•</span>
            <span>Brighter Opportunities</span>
            <span>•</span>
            <span>A More Confident You</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Design and developed by <strong className="text-white">BTPL soft</strong></span>
          </div>
        </div>
      </div>

    </footer>
  );
}
