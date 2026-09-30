'use client';

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "NextFluent was founded with a vision to make spoken English accessible to everyone through immersive online learning.",
    image: "/t1.avif",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    year: "2022",
    title: "10,000+ Students",
    description: "Reached a major milestone of empowering over 10,000 students across 20 countries with our proprietary curriculum.",
    image: "/t2.avif",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    year: "2024",
    title: "Award-Winning Platform",
    description: "Recognized as the 'Best EdTech Innovator' for our interactive live classes and outstanding student success rates.",
    image: "/t3.avif",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    year: "2026",
    title: "The Future of Learning",
    description: "Launching AI-driven personalized feedback systems and expanding our course offerings to include advanced business communication.",
    image: "/t4.avif",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function OurJourney() {
  return (
    <section className="bg-[#0b101c] py-16 lg:py-24 border-t border-[#1E293B] select-none relative overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      {/* Decorative Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="journey-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#journey-grid)"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4 relative">
          
          {/* Handwritten Text & Arrow */}
          <div className="absolute -top-12 -left-12 lg:-left-24 hidden md:block">
            <span className="text-blue-500 font-bold text-xl rotate-[-12deg] inline-block" style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}>
              It all started with a dream...
            </span>
            <svg className="w-16 h-12 text-amber-400 transform rotate-12 mt-2 ml-10" viewBox="0 0 100 100" fill="none">
              <path d="M10 10 Q 50 80, 90 90 M70 85 L90 90 L85 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <span className="inline-flex items-center gap-2 bg-[#E59719]/20 backdrop-blur-md border border-[#E59719]/30 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wider uppercase">
            📖 Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Journey of <span className="text-[#E59719]">NextFluent</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From a small idea to a global community. Discover how we've evolved over the years to become a leader in language education.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line */}
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-100 via-[#E59719]/40 to-amber-100 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={milestone.year} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group cursor-pointer`}>
                  
                  {/* Timeline Node (Icon) */}
                  <div className="absolute left-10 md:left-1/2 w-14 h-14 bg-[#1E293B] border-4 border-[#E59719] text-[#E59719] group-hover:bg-[#E59719] group-hover:text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(229,151,25,0.3)] transform -translate-x-1/2 z-10 transition-colors duration-300">
                    {milestone.icon}
                  </div>

                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'pl-20' : 'pr-20'}`}>
                    <div className="w-full h-full min-h-[200px] relative rounded-3xl overflow-hidden shadow-sm border-[6px] border-[#111726] group-hover:shadow-xl group-hover:border-slate-800 group-hover:-translate-y-2 transition-all duration-300">
                      <img src={milestone.image} alt={milestone.title} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                    <div className={`relative bg-[#111726] p-8 rounded-3xl shadow-xl border border-slate-700 hover:shadow-2xl hover:border-[#E59719]/40 transition-all duration-300 transform group-hover:-translate-y-2`}>
                      
                      {/* Connecting line to node (desktop only) */}
                      <div className={`hidden md:block absolute top-1/2 w-12 h-0.5 bg-amber-500/20 -z-10 ${isEven ? '-right-12' : '-left-12'}`}></div>

                      <span className="text-slate-800 font-black text-6xl md:text-7xl absolute -top-6 -z-10 right-4 group-hover:text-slate-700 transition-colors pointer-events-none">
                        {milestone.year}
                      </span>
                      
                      <div className="inline-block bg-[#E59719]/10 text-[#E59719] font-black text-lg px-4 py-1 rounded-xl mb-4 shadow-sm border border-[#E59719]/20">
                        {milestone.year}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E59719] transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
