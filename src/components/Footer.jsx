'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800/80 select-none overflow-hidden relative">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 12-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand Info & Social Links (lg:col-span-4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <div className="space-y-2">
              <Link href="/" className="inline-flex items-center gap-3 cursor-pointer group">
                <Image src="/logo_transparent.png" alt="NextFluent Logo" width={200} height={56} className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105" />
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Next<span className="text-[#DC2626]">Fluent</span></span>
              </Link>
              <p className="text-xs font-semibold text-[#DC2626] tracking-wide">
                Learn Today. Brighter Tomorrow.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              NextFluent is a leading platform for interactive online learning, offering structured courses, adaptive quizzes, and accredited certifications to accelerate your career growth.
            </p>

            {/* Vector Social Icons */}
            <div className="space-y-2.5">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Connect With Us</p>
              <div className="flex items-center gap-2.5 text-slate-300 flex-wrap">
                {/* LinkedIn */}
                <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-all duration-300 flex items-center justify-center group" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/10 hover:text-[#1D9BF0] transition-all duration-300 flex items-center justify-center group" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#FF0000] hover:bg-[#FF0000]/10 hover:text-[#FF0000] transition-all duration-300 flex items-center justify-center group" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2] transition-all duration-300 flex items-center justify-center group" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] transition-all duration-300 flex items-center justify-center group" aria-label="WhatsApp">
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.687-.833-1.947-.928-.26-.095-.45-.143-.639.143-.19.286-.735.928-.902 1.118-.167.19-.333.214-.618.071-.285-.143-1.206-.444-2.298-1.418-.849-.758-1.423-1.694-1.59-1.98-.167-.286-.018-.44.125-.583.129-.129.285-.333.428-.5.143-.167.19-.286.285-.476.095-.19.048-.357-.024-.5-.071-.143-.639-1.543-.876-2.112-.23-.553-.464-.477-.639-.486-.164-.008-.352-.01-.54-.01-.19 0-.499.071-.76.357-.26.286-.998.976-.998 2.38 0 1.404 1.022 2.761 1.164 2.952.143.19 2.012 3.073 4.876 4.309.681.293 1.213.468 1.627.6.684.217 1.307.186 1.8.113.55-.082 1.687-.69 1.924-1.356.237-.666.237-1.237.167-1.356-.07-.119-.26-.19-.545-.333z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="block w-6 h-0.5 bg-[#DC2626] rounded-full mt-1.5" />
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-400">
              <li><Link href="/" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>Home</span></Link></li>
              <li><Link href="/courses" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>Browse Courses</span></Link></li>
              <li><Link href="/quiz" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>Quizzes & Tests</span></Link></li>
              <li><Link href="/certificates" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>Certificates</span></Link></li>
            </ul>
          </div>

          {/* Column 3: Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider relative inline-block">
              Company
              <span className="block w-6 h-0.5 bg-[#DC2626] rounded-full mt-1.5" />
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-400">
              <li><Link href="/about" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>About Us</span></Link></li>
              <li><Link href="/contact" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>Contact Us</span></Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>Privacy Policy</span></Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5"><span>Terms of Service</span></Link></li>
            </ul>
          </div>

          {/* Column 4: Support & Contact (lg:col-span-4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <div className="space-y-3.5">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider relative inline-block">
                Support & Contact
                <span className="block w-6 h-0.5 bg-[#DC2626] rounded-full mt-1.5" />
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[#DC2626] shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <span className="leading-relaxed">Opposite Punjab National Bank Duderhama, Ganderbal, Jammu and Kashmir, 191201</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[#DC2626] shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <a href="tel:+917889745674" className="hover:text-white transition-colors font-medium">+91-7889745674</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[#DC2626] shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <a href="mailto:ngecsupport@gmail.com" className="hover:text-white transition-colors font-medium">ngecsupport@gmail.com</a>
                </div>
              </div>
            </div>

            {/* App Store Download Badges */}
            <div className="space-y-2.5 pt-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Download LMS App</p>
              <div className="flex items-center gap-3 flex-wrap">
                <a href="#" className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.1zM245.8 97.4c21.1-25.3 35.1-60.6 30.5-97.4-30.3 1.5-67 20.5-88.2 45.4-18.4 21.3-34.6 56.4-29.7 92.5 33.6 2.6 68.3-17.2 87.4-40.5z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[9px] uppercase text-slate-400 font-bold block">Download on the</span>
                    <span className="text-xs font-extrabold text-white">App Store</span>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all text-white">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 512 512">
                    <defs>
                      <linearGradient id="gp_blue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="#00A0FF" />
                      </linearGradient>
                      <linearGradient id="gp_green" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B2FF59" />
                        <stop offset="100%" stopColor="#00E676" />
                      </linearGradient>
                      <linearGradient id="gp_yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD600" />
                        <stop offset="100%" stopColor="#FF9100" />
                      </linearGradient>
                      <linearGradient id="gp_red" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF1744" />
                        <stop offset="100%" stopColor="#D500F9" />
                      </linearGradient>
                    </defs>
                    {/* Left Wing (Blue/Cyan gradient) */}
                    <path fill="url(#gp_blue)" d="M25.3 35.3c0-16.1 8.7-28.5 21.7-35.3L303.6 256 47 512c-13-6.8-21.7-19.2-21.7-35.3V35.3z" />
                    {/* Top Wing (Light Green gradient) */}
                    <path fill="url(#gp_green)" d="M303.6 256L47 0l258.3 149.1L303.6 256z" />
                    {/* Bottom Wing (Red/Purple gradient) */}
                    <path fill="url(#gp_red)" d="M47 512l256.6-256 101.7 106.9L47 512z" />
                    {/* Right Tip (Orange/Yellow gradient) */}
                    <path fill="url(#gp_yellow)" d="M305.3 149.1L472.2 245.6c19.2 11.1 19.2 39.7 0 50.8L405.3 362.9 303.6 256l1.7-106.9z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[9px] uppercase text-slate-400 font-bold block">GET IT ON</span>
                    <span className="text-xs font-extrabold text-white">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium text-center sm:text-left">
          <p>© {new Date().getFullYear()} NextFluent. All rights reserved.</p>
          <p className="text-slate-400 text-xs flex items-center justify-center gap-1.5 font-medium">
            <span className="text-amber-500 font-bold">Better English</span>
            <span>•</span>
            <span>Brighter Opportunities</span>
            <span>•</span>
            <span>A More Confident You</span>
          </p>
          <p className="text-slate-400 text-xs">
            Designed & developed by{' '}
            <a 
              href="https://www.btplsoft.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#DC2626] font-bold transition-colors underline decoration-slate-600 hover:decoration-[#DC2626]"
            >
              BTPL soft
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
