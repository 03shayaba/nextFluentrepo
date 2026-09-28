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
            <span className="text-[#E59719] font-bold text-xs sm:text-sm uppercase tracking-widest block">
              SELF DEVELOPMENT & MASTERY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171E2E] leading-tight tracking-tight">
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

          {/* Right Column: Natural Clear Image Cards with Staggered Uppar-Neeche Expansion */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[480px]">
            
            {/* Background Accent Glow */}
            <div className="absolute w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>

            <div 
              className="relative w-full max-w-lg h-[440px] cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-center text-xs font-bold text-[#E59719] mb-3 tracking-wider uppercase flex items-center justify-center gap-1.5">
                <span>✨ Hover over cards to expand categories</span>
              </div>

              {/* 4 Cards Container */}
              <div className="relative w-full h-[400px]">
                {featuredCards.map((card, idx) => {
                  
                  let transformStyle = {};

                  if (!isHovered) {
                    // STACKED STATE (Natural 3D Layered Deck)
                    const offset = idx * 16;
                    const rotate = (idx - 1.5) * 5;
                    const scale = 1 - idx * 0.03;
                    transformStyle = {
                      transform: `translate(${offset}px, ${offset}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex: 4 - idx,
                      top: '15px',
                      left: '25px',
                      width: '82%',
                      height: '82%'
                    };
                  } else {
                    // STAGGERED EXPANDED LAYOUT (Uppar-Neeche / Offset arrangement)
                    // Card 1: Top-Left (top: 0px, left: 0px)
                    // Card 2: Top-Right (top: 25px, left: 225px) -> Slightly lower (Neeche)
                    // Card 3: Bottom-Left (top: 215px, left: 0px) -> Slightly higher (Uppar)
                    // Card 4: Bottom-Right (top: 235px, left: 225px) -> Offset staggered
                    const positions = [
                      { top: '0px', left: '0px', width: '210px', height: '195px' },
                      { top: '30px', left: '225px', width: '210px', height: '185px' },
                      { top: '215px', left: '0px', width: '210px', height: '185px' },
                      { top: '235px', left: '225px', width: '210px', height: '195px' }
                    ];
                    
                    const pos = positions[idx];
                    transformStyle = {
                      transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
                      zIndex: 10,
                      top: pos.top,
                      left: pos.left,
                      width: pos.width,
                      height: pos.height
                    };
                  }

                  return (
                    <div
                      key={card.id}
                      className="absolute rounded-2xl overflow-hidden shadow-xl border-2 border-white transition-all duration-500 ease-out group"
                      style={transformStyle}
                    >
                      {/* Natural Clean Photo (No Solid Color Tint Overlays!) */}
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Soft Bottom Shadow Gradient for Crisp Text Contrast Only */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                      {/* Card Content Overlay */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md w-fit mb-1 border border-white/20 text-amber-400">
                          {card.courses}
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold leading-snug drop-shadow-md text-white">
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
