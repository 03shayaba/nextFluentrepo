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
            <span className="text-[#E59719] font-bold text-xs sm:text-sm uppercase tracking-widest block">
              EXPLORE NEWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111726] tracking-tight">
              Our Latest Insights
            </h2>
          </div>

          <div>
            <button className="bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span>📖</span>
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

                  <div className="flex items-center gap-1">
                    <span>📅</span>
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
