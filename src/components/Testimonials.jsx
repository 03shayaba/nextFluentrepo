'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great."
  },
  {
    id: 2,
    name: "David Warner",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "The difference between school and life? In school, you're taught a lesson and then given a test. In life, you're given a test that teaches you a lesson."
  },
  {
    id: 3,
    name: "Lina D'Souza",
    role: "Copywriter",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote: "If a man empties his purse into his head, no man can take it away from him. An investment in knowledge always pays the best interest."
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "UI/UX Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    quote: "Education is the most powerful weapon which you can use to change the world. Learning here gave me direct practical skills for my dream job."
  },
  {
    id: 5,
    name: "Robert Smith",
    role: "Frontend Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "The structured course path and interactive feedback from instructors completely accelerated my career transition in less than six months."
  },
  {
    id: 6,
    name: "Emily Watson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote: "Clear instructions, beautiful platform, and incredible community support. Highly recommended for anyone wanting to level up their skills!"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Group testimonials into pages of 3 (for desktop display)
  const totalPages = Math.ceil(testimonials.length / 3);

  // Unconditional automatic sliding every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000); // Auto-slides every 3 seconds continuously

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="bg-[#FAFBFD] py-16 lg:py-24 border-b border-slate-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row (Left Title | Right View All Button) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[#E59719] font-bold text-xs sm:text-sm uppercase tracking-widest block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111726] tracking-tight">
              Happy Students Says
            </h2>
          </div>

          <div>
            <button className="bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span>🎯</span>
              <span>View All Testimonials</span>
            </button>
          </div>
        </div>

        {/* Sliding Carousel Track Container */}
        <div className="relative overflow-hidden py-2">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageTestimonials = testimonials.slice(pageIdx * 3, pageIdx * 3 + 3);

              return (
                <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 px-1">
                  {pageTestimonials.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer"
                    >
                      {/* Card Header (Avatar + Name & Role + 5 Stars) */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3.5">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 shadow-sm group-hover:scale-105 transition-transform"
                          />
                          <div>
                            <h3 className="text-base font-bold text-[#111726] group-hover:text-[#E59719] transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-xs font-semibold text-[#E59719]">
                              {item.role}
                            </p>
                          </div>
                        </div>

                        {/* 5 Rating Stars */}
                        <div className="flex items-center gap-0.5 text-[#E59719] text-sm">
                          ★★★★★
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                        "{item.quote}"
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Interactive Pagination Dots / Pills */}
        <div className="mt-12 flex items-center justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx 
                  ? 'w-8 h-2.5 bg-[#E59719]' 
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
