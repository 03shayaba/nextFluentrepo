'use client';

import { useState } from 'react';

const categories = [
  "Grammar",
  "Speaking",
  "Vocabulary",
  "Listening",
  "IELTS Preparation",
  "Business English",
  "Kids English"
];

const featuredCards = [
  {
    id: 1,
    title: "Grammar & Writing",
    courses: "8 Courses",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Spoken English",
    courses: "12 Courses",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "IELTS Preparation",
    courses: "6 Courses",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Business English",
    courses: "10 Courses",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
  }
];

export default function CourseCategories() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Speaking");

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Information Area */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block bg-amber-100/70 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide">
                Self Development & Mastery
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171E2E] leading-tight tracking-tight">
              Get Instant Access To Expert Solutions
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The ultimate learning roadmap for students and professionals to master English communication, grammar, IELTS prep, and career confidence.
            </p>

            {/* Category Pills List */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">
                Explore Learning Pathways
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#E59719] text-white shadow-md shadow-amber-500/20 scale-105'
                        : 'bg-slate-100 hover:bg-slate-200 text-[#171E2E]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                EXPLORE CATEGORIES →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Fanning Card Deck */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[500px]">
            
            {/* Background Accent Glow */}
            <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div 
              className="relative w-full max-w-[520px] h-[500px] cursor-pointer group/container flex flex-col items-center justify-start p-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Instruction badge */}
              <div className="text-center text-xs font-bold text-[#E59719] tracking-wider uppercase flex items-center justify-center gap-1.5 pointer-events-none z-30 mb-2">
                <span className="animate-pulse">✨</span>
                <span>{isHovered ? 'Click any card to explore' : 'Hover over deck to expand categories'}</span>
              </div>

              {/* 4 Cards Deck Area */}
              <div className="relative w-full h-[440px] mt-2">
                {featuredCards.map((card, idx) => {
                  
                  // Unhovered Stacked Deck Transforms (Replicating Image 1's 3D cascade with ample top clearance)
                  const stackedTransforms = [
                    'translate3d(30px, 48px, 0) rotate(-6deg) scale(1)',
                    'translate3d(55px, 63px, 0) rotate(-2deg) scale(0.98)',
                    'translate3d(80px, 78px, 0) rotate(3deg) scale(0.96)',
                    'translate3d(105px, 93px, 0) rotate(8deg) scale(0.94)'
                  ];

                  // Hovered Expanded Grid Transforms (Fan out smoothly to 4 corners)
                  const expandedTransforms = [
                    'translate3d(0px, 15px, 0) rotate(0deg) scale(0.66)',       // Top-Left
                    'translate3d(260px, 30px, 0) rotate(0deg) scale(0.66)',     // Top-Right
                    'translate3d(0px, 230px, 0) rotate(0deg) scale(0.66)',      // Bottom-Left
                    'translate3d(260px, 250px, 0) rotate(0deg) scale(0.66)'     // Bottom-Right
                  ];

                  const transform = isHovered ? expandedTransforms[idx] : stackedTransforms[idx];
                  const zIndex = isHovered ? 10 : (4 - idx);

                  return (
                    <div
                      key={card.id}
                      className="absolute top-0 left-0 w-[360px] h-[290px] origin-top-left rounded-3xl overflow-hidden shadow-2xl border-2 border-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform transform-gpu group cursor-pointer"
                      style={{
                        transform,
                        zIndex,
                      }}
                    >
                      {/* Natural Photo */}
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Soft Bottom Shadow Gradient for Crisp Text Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none"></div>

                      {/* Card Content Overlay */}
                      <div 
                        className={`absolute inset-0 p-6 flex flex-col justify-end text-white pointer-events-none transition-opacity duration-300 ${
                          isHovered || idx === 0 ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <span className="text-xs font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg w-fit mb-2 border border-white/20 text-amber-400">
                          {card.courses}
                        </span>
                        <h4 className="text-xl font-extrabold leading-snug drop-shadow-md text-white">
                          {card.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
