'use client';

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
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row (EXPLORE NEWS | Our Latest Insights | Read All Button) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="inline-block bg-amber-100/70 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide">
              Explore News
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111726] tracking-tight">
              Our Latest Insights
            </h2>
          </div>

          <div>
            <button className="bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Read All</span>
            </button>
          </div>
        </div>

        {/* 3 Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-pointer"
            >
              {/* Card Image Header */}
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tag & Meta Info (By Author | Date) */}
              <div className="space-y-3">
                <span className="text-[#E59719] font-extrabold text-xs tracking-wider uppercase block">
                  {item.tag}
                </span>

                <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden inline-block">
                      <img src={item.authorAvatar} alt={item.author} className="w-full h-full object-cover" />
                    </span>
                    <span>By: <strong className="text-slate-600 font-semibold">{item.author}</strong></span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v13a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H8V3a1 1 0 00-1-1zm14 17H4V9h16v10z" />
                    </svg>
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-[#111726] group-hover:text-[#E59719] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Read More Outline Button matching gold theme */}
              <div>
                <button className="border border-[#E59719] text-[#E59719] hover:bg-[#E59719] hover:text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all duration-200">
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
