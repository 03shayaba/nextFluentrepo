'use client';

const leftCategories = [
  {
    id: 1,
    name: "Technology",
    courses: "12 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <line x1="6" y1="6" x2="18" y2="6" strokeWidth="2" />
        <line x1="6" y1="6" x2="12" y2="18" strokeWidth="2" />
        <line x1="18" y1="6" x2="12" y2="18" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 2,
    name: "Health & Care",
    courses: "8 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    )
  },
  {
    id: 3,
    name: "Mathematics",
    courses: "6 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 4,
    name: "Languages",
    courses: "15 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a24.12 24.12 0 017.5 0m-7.5 0l3.75 3.75M3 5.621l3.75 3.75M6.75 9.371a24.12 24.12 0 013.75 0" />
      </svg>
    )
  }
];

const rightCategories = [
  {
    id: 5,
    name: "Science",
    courses: "10 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.605 15.13a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 6,
    name: "Business",
    courses: "14 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387M3.75 14.15a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m4.5 8.006h4.5" />
      </svg>
    )
  },
  {
    id: 7,
    name: "Graphics Design",
    courses: "18 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 7.5l5.571 2.25m0 0L21.75 12l-4.179 2.25m0 0l-5.571 3-5.571-3m11.142 0L12 16.5l-5.571-2.25" />
      </svg>
    )
  },
  {
    id: 8,
    name: "Marketing",
    courses: "9 Courses",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M21.75 12h-2.25m-.166 5.834l-1.591-1.591" />
      </svg>
    )
  }
];

const arcIcons = [
  // 1. Coffee Cup
  (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 8.25h1.875a1.875 1.875 0 010 3.75H18.5m-15-3.75h15v9a3.75 3.75 0 01-3.75 3.75h-7.5A3.75 3.75 0 013.5 17.25v-9zM8.25 3v2.25M12 3v2.25M15.75 3v2.25" />
    </svg>
  ),
  // 2. Chat Bubble
  (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
  // 3. Gear Cog
  (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  // 4. Document Page
  (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  // 5. Envelope
  (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  // 6. Alarm Clock
  (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  // 7. Lightbulb
  (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  )
];

export default function TrendingCategories() {
  return (
    <section className="bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 py-10 lg:py-12 border-b border-slate-100/80 overflow-hidden select-none relative">
      
      {/* Decorative Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-400/10 via-amber-200/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Decorative Text Left */}
      <div className="absolute top-24 left-10 hidden xl:block transform -rotate-12 z-0">
        <div className="font-serif italic text-2xl font-bold text-slate-400/80 leading-tight">
          Find<br/>Your<br/>Path
        </div>
        <div className="mt-1 w-12 h-0.5 bg-[#E59719]"></div>
      </div>

      {/* Decorative Text Right */}
      <div className="absolute top-28 right-16 hidden xl:block transform rotate-12 z-0">
        <div className="font-serif italic text-2xl font-bold text-slate-400/80 leading-tight">
          Discover<br/>New Skills
        </div>
        <div className="mt-1 w-12 h-0.5 bg-[#E59719] ml-auto"></div>
      </div>

      {/* Dashed background arc */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 overflow-hidden -z-10 hidden lg:block opacity-40">
        <svg viewBox="0 0 800 200" className="w-full h-full">
          <path d="M 0 200 Q 400 -50 800 200" fill="none" stroke="#E59719" strokeWidth="2" strokeDasharray="6 8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 space-y-3 relative z-20">
          <div>
            <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#E59719]/10 text-[#E59719] font-bold text-xs sm:text-sm tracking-widest uppercase shadow-sm border border-[#E59719]/20">
              <span>⭐</span> TRENDING CATEGORIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Browse Trending <span className="text-[#E59719]">Categories</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Explore high-demand learning paths designed to build real-world skills
          </p>
        </div>

        {/* Main 3-Column Layout with Balanced Heights & Mirrored Horizontal Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* Left Category Cards Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4 sm:gap-4.5">
            {leftCategories.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-amber-400/50 flex items-center justify-between h-[80px] sm:h-[84px] overflow-hidden transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative"
              >
                {/* Left Dark Capsule Icon Container */}
                <div className="w-16 sm:w-20 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 group-hover:from-[#E59719] group-hover:to-amber-600 flex items-center justify-center rounded-r-[32px] shrink-0 transition-all duration-300 shadow-md group-hover:shadow-amber-500/30">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Card Title & Course Counter */}
                <div className="flex-1 px-4 py-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#E59719] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-slate-500 group-hover:text-amber-700 bg-slate-100 group-hover:bg-amber-50 px-2.5 py-0.5 rounded-full transition-colors">
                    {item.courses}
                  </span>
                </div>

                {/* Right Arrow Indicator */}
                <div className="pr-4 text-slate-300 group-hover:text-[#E59719] group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Perfectly Proportioned 7 Yellow Arc Skill Badges + 3D Vector Character */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-4 lg:py-0">
            
            {/* Background Soft Yellow Radial Aura */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-amber-400/15 rounded-full blur-3xl z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            {/* Arch Container for 7 Yellow Skill Badges with Perfect Equal Arc Spacing */}
            <div className="relative w-[320px] sm:w-[360px] h-[180px] sm:h-[195px] flex items-center justify-between z-20 mx-auto">
              {arcIcons.map((iconSvg, index) => {
                const total = 7;
                // Evenly distributed angles from 12 deg to 168 deg for a smooth, uniform semi-circle curve
                const angleDeg = 12 + (index / (total - 1)) * 156;
                const angleRad = (angleDeg * Math.PI) / 180;
                
                const centerX = 180;
                const centerY = 172;
                const radiusX = 146;
                const radiusY = 120;
                
                const x = centerX - Math.cos(angleRad) * radiusX - 22; // 22px is half badge width
                const y = centerY - Math.sin(angleRad) * radiusY - 22; // 22px is half badge height

                return (
                  <div
                    key={index}
                    className="absolute w-11 h-11 sm:w-11.5 sm:h-11.5 bg-gradient-to-br from-amber-400 to-[#E59719] rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25 border-2 border-white transform hover:scale-115 hover:-translate-y-1 transition-all duration-300 cursor-pointer z-20 group"
                    style={{ left: `${x}px`, top: `${y}px` }}
                  >
                    <div className="transform group-hover:rotate-12 transition-transform duration-300">
                      {iconSvg}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clean Vector Character Sitting Cross-Legged with Laptop */}
            <div className="relative z-10 -mt-12 sm:-mt-14 flex justify-center items-center w-full">
              <div className="w-52 h-56 sm:w-64 sm:h-72 relative flex flex-col items-center justify-center">
                <svg className="w-full h-full filter drop-shadow-xl" viewBox="0 0 260 280" fill="none">
                  {/* Soft Radial Base Shadow */}
                  <ellipse cx="130" cy="248" rx="85" ry="12" fill="#CBD5E1" opacity="0.6" />
                  <ellipse cx="130" cy="248" rx="55" ry="8" fill="#94A3B8" opacity="0.4" />

                  {/* Character Head & Skin */}
                  <path d="M130 35C108 35 92 52 92 72C92 90 106 106 130 106C154 106 168 90 168 72C168 52 152 35 130 35Z" fill="#5A3825" />
                  <ellipse cx="130" cy="76" rx="30" ry="34" fill="#F4C29F" />
                  
                  {/* Hair Style */}
                  <path d="M100 60C105 45 125 40 135 48C145 42 160 52 160 62C155 60 148 65 145 70C135 62 120 64 115 70C110 65 102 62 100 60Z" fill="#3D2314" />

                  {/* Eyes & Smile */}
                  <circle cx="118" cy="74" r="3.5" fill="#29180E" />
                  <circle cx="142" cy="74" r="3.5" fill="#29180E" />
                  <path d="M123 88C127 92 133 92 137 88" stroke="#C87550" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Body / Suit Jacket */}
                  <path d="M72 195C72 145 90 115 130 115C170 115 188 145 188 195L130 215L72 195Z" fill="#1E293B" />
                  <path d="M110 115L130 155L150 115H110Z" fill="#FFFFFF" />
                  <path d="M126 115L130 170L134 118H126Z" fill="#E59719" />
                  
                  {/* Laptop Screen & Glow */}
                  <rect x="75" y="158" width="110" height="66" rx="8" fill="#334155" />
                  <rect x="80" y="163" width="100" height="54" rx="5" fill="#0F172A" />
                  
                  {/* Laptop Screen Content Visual Accent */}
                  <rect x="88" y="172" width="45" height="4" rx="2" fill="#E59719" opacity="0.9" />
                  <rect x="88" y="180" width="70" height="3" rx="1.5" fill="#38BDF8" opacity="0.7" />
                  <rect x="88" y="187" width="55" height="3" rx="1.5" fill="#94A3B8" opacity="0.5" />
                  <circle cx="160" cy="198" r="8" fill="#E59719" opacity="0.3" />

                  {/* Laptop Base Keyboard */}
                  <polygon points="55,224 205,224 190,235 70,235" fill="#94A3B8" />
                  
                  {/* Crossed Legs & Pants */}
                  <path d="M50 228C50 210 80 216 130 216C180 216 210 210 210 228C210 245 180 252 130 252C80 252 50 245 50 228Z" fill="#0F172A" />
                  
                  {/* Shoes */}
                  <ellipse cx="65" cy="242" rx="14" ry="7" fill="#58351D" />
                  <ellipse cx="195" cy="242" rx="14" ry="7" fill="#58351D" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Category Cards Grid - Mirrored Layout for Perfect Symmetry */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4 sm:gap-4.5">
            {rightCategories.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-amber-400/50 flex items-center justify-between h-[80px] sm:h-[84px] overflow-hidden transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative"
              >
                {/* Left Arrow Indicator (Pointed Inward) */}
                <div className="pl-4 text-slate-300 group-hover:text-[#E59719] group-hover:-translate-x-1 transition-all duration-300 order-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>

                {/* Card Title & Course Counter (Right Aligned to Face Inward) */}
                <div className="flex-1 px-4 py-2 text-right order-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#E59719] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-slate-500 group-hover:text-amber-700 bg-slate-100 group-hover:bg-amber-50 px-2.5 py-0.5 rounded-full transition-colors">
                    {item.courses}
                  </span>
                </div>

                {/* Right Dark Capsule Icon Container (Mirrored Capsule) */}
                <div className="w-16 sm:w-20 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 group-hover:from-[#E59719] group-hover:to-amber-600 flex items-center justify-center rounded-l-[32px] shrink-0 transition-all duration-300 shadow-md group-hover:shadow-amber-500/30 order-3">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

