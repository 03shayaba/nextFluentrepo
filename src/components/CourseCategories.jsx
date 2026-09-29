'use client';

import { useState, useRef, useEffect } from 'react';

const coursesData = [
  {
    id: 1,
    title: "Speaking Practice",
    description: "Build fluency with real conversation practice.",
    icon: "💬",
    iconBg: "bg-orange-50",
  },
  {
    id: 2,
    title: "English Basics",
    description: "Start with grammar, vocabulary and more.",
    icon: "📚",
    iconBg: "bg-blue-50",
  },
  {
    id: 3,
    title: "Listening Skills",
    description: "Improve comprehension with real audio lessons.",
    icon: "🎧",
    iconBg: "bg-green-50",
  },
  {
    id: 4,
    title: "Vocabulary Builder",
    description: "Learn new words and use them confidently.",
    icon: "📖",
    iconBg: "bg-amber-50",
  },
  {
    id: 5,
    title: "Grammar Foundation",
    description: "Master the rules for better communication.",
    icon: "📜",
    iconBg: "bg-red-50",
  },
  {
    id: 6,
    title: "Reading Practice",
    description: "Develop reading skills with engaging content.",
    icon: "📕",
    iconBg: "bg-blue-50",
  },
  {
    id: 7,
    title: "Writing Skills",
    description: "Express your ideas clearly and effectively.",
    icon: "✍️",
    iconBg: "bg-blue-50",
  },
  {
    id: 8,
    title: "IELTS Preparation",
    description: "Get exam-ready with expert guidance.",
    icon: "🎯",
    iconBg: "bg-red-50",
  }
];

export default function CourseCategories() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Create an array with many duplicates to simulate infinite scrolling
  const extendedCourses = Array(10).fill(coursesData).flat();

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = Array.from(container.children).filter(child => child.classList.contains('card-item'));
    if (cards.length === 0) return;
    
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    // Jump to the middle of the list on mount without smooth scrolling
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = Array.from(container.children).filter(child => child.classList.contains('card-item'));
      
      if (cards.length > 0) {
        const middleIndex = Math.floor(cards.length / 2);
        const middleCard = cards[middleIndex];
        
        // Calculate exact scroll position to center the middle card
        const containerCenter = container.clientWidth / 2;
        const cardCenter = middleCard.offsetLeft + middleCard.offsetWidth / 2;
        
        container.scrollLeft = cardCenter - containerCenter;
      }
    }
    
    handleScroll();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cards = Array.from(scrollRef.current.children).filter(child => child.classList.contains('card-item'));
      if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth;
        const gap = window.innerWidth >= 768 ? 24 : 16;
        scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cards = Array.from(scrollRef.current.children).filter(child => child.classList.contains('card-item'));
      if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth;
        const gap = window.innerWidth >= 768 ? 24 : 16;
        scrollRef.current.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative bg-[#FFFDF8] py-10 lg:py-12 overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 hidden lg:block transform -rotate-12">
        <div className="font-serif italic text-2xl font-bold text-slate-700 leading-tight">
          Learn<br/>Practice<br/>Grow
        </div>
        <div className="mt-1 w-16 h-1 bg-amber-400 rounded-full transform -rotate-3"></div>
      </div>

      <div className="absolute top-10 right-10 hidden lg:block transform rotate-6">
        <div className="font-serif italic text-2xl font-bold text-slate-700 leading-tight">
          Better<br/>English<br/>Brighter<br/>Future
        </div>
      </div>

      {/* Airplane and dashed line SVG */}
      <div className="absolute top-8 right-32 hidden xl:block opacity-60">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
          <path d="M10 80 Q 50 10 180 30" stroke="#FBBF24" strokeWidth="2" strokeDasharray="6 6" fill="transparent"/>
          <path d="M170 20 L195 32 L175 45 Z" fill="#F59E0B" />
        </svg>
      </div>
      
      {/* Circle decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 border-[1px] border-amber-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-amber-50 rounded-full translate-y-1/2 opacity-70"></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Header Content */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="bg-amber-100 text-[#D97706] text-xs font-bold px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 uppercase tracking-wider">
            <span className="text-sm">🎓</span> Learning Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A] mb-4">
            Our <span className="text-[#E59719]">Courses</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl">
            Explore our carefully designed English learning courses to build your skills step by step.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-8 md:px-20">
          
          {/* Nav Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute -left-2 md:left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-amber-500 transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute -right-2 md:right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-amber-500 transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-4 md:gap-6 py-12 px-2 snap-x snap-mandatory hide-scrollbar relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            
            {extendedCourses.map((course, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={index}
                  className={`card-item snap-center shrink-0 w-[80vw] sm:w-[240px] md:w-[calc((100%-48px)/3)] xl:w-[calc((100%-96px)/5)] group relative transition-all duration-300 ${isActive ? 'scale-110 z-10' : 'scale-100 opacity-90'}`}
                >
                  <div className={`h-full bg-white rounded-[1.5rem] p-6 flex flex-col items-center text-center transition-all duration-300 border ${isActive ? 'border-amber-400 shadow-xl shadow-amber-500/20 -translate-y-2' : 'border-slate-100 shadow-sm'}`}>
                    
                    {/* Icon Area */}
                    <div className={`w-28 h-24 rounded-2xl ${course.iconBg} flex items-center justify-center mb-6 text-5xl transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                      {course.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-800 mb-3">{course.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">{course.description}</p>
                    
                    {/* Bottom Action */}
                    <div className="w-full mt-auto">
                      {!isActive ? (
                        <a href="/courses" className="flex items-center justify-center text-amber-500 font-bold text-sm hover:text-amber-600 transition-colors">
                          Explore &rarr;
                        </a>
                      ) : (
                        <a href="/courses" className="flex items-center justify-center w-full bg-amber-500 text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all hover:bg-amber-600">
                          Explore Course &rarr;
                        </a>
                      )}
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between px-4">
          
          {/* Happy Learners */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs shadow-sm z-10">
                +
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-800 text-[15px] leading-tight">10K+</span>
              <span className="text-slate-500 text-xs">Happy Learners</span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mb-6 md:mb-0">
            <div className="w-10 h-2 bg-amber-500 rounded-full"></div>
            <div className="w-4 h-2 bg-slate-200 rounded-full"></div>
            <div className="w-4 h-2 bg-slate-200 rounded-full"></div>
            <div className="w-4 h-2 bg-slate-200 rounded-full"></div>
          </div>

          {/* View All */}
          <a href="/courses" className="font-bold text-amber-500 text-sm flex items-center gap-1 hover:text-amber-600 transition-colors">
            View All Courses &rarr;
          </a>
          
        </div>
      </div>
    </section>
  );
}
