'use client';
import Link from 'next/link';

const insights = [
  {
    id: 1,
    tag: "LARGEST",
    author: "David Warner",
    date: "February 1, 2026",
    title: "World largest elephant toothpaste experiment in 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    tag: "EDUCATION",
    author: "David Warner",
    date: "February 1, 2026",
    title: "Global education: ideas for the way move forward",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    tag: "EDUCATION",
    author: "David Warner",
    date: "February 1, 2026",
    title: "New report reimagines the broader education workforce",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  }
];

export default function LatestInsights() {
  return (
    <section className="bg-[#0b101c] pt-8 lg:pt-12 pb-16 lg:pb-20 border-b border-[#1E293B] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row (EXPLORE NEWS | Our Latest Insights | Read All Button) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 relative">
          
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide uppercase">
              🗞️ Explore News
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Latest <span className="text-[#EF4444]">Insights</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg">
              Read our latest articles, tips, and tricks to improve your learning journey and stay updated.
            </p>
          </div>

          

          <div>
            <div className="bg-[#1E293B] border border-slate-700 text-slate-300 font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-xs select-none">
              <svg className="w-4 h-4 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Featured Articles</span>
            </div>
          </div>
        </div>

        {/* 3 Insight Cards Grid (2 cards on Tablet, 3 cards on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {insights.map((item, index) => (
            <div 
              key={item.id}
              className={`bg-[#111726] rounded-3xl p-4 sm:p-5 border border-slate-700 shadow-xl hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)] hover:border-[#DC2626]/40 transition-all duration-300 flex flex-col justify-between space-y-4 sm:space-y-5 group cursor-pointer transform hover:-translate-y-1.5 ${
                index === 2 ? 'hidden lg:flex' : 'flex'
              }`}
            >
              {/* Card Image Header */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Tag & Meta Info */}
              <div className="space-y-3 px-1">
                <span className="text-white bg-[#DC2626] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm inline-block">
                  {item.tag}
                </span>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden inline-block border border-slate-100">
                      <img src={item.authorAvatar} alt={item.author} className="w-full h-full object-cover" />
                    </span>
                    <span>By <strong className="text-slate-300 font-semibold">{item.author}</strong></span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#EF4444] transition-colors leading-snug pt-1">
                  {item.title}
                </h3>
              </div>

              {/* Card Footer Tag */}
              <div className="px-1 pt-2">
                <div className="inline-flex items-center gap-2 text-[#EF4444] font-bold text-sm">
                  <span>Featured Insight</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
