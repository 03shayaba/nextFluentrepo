'use client';

import { useState, useRef, useEffect } from 'react';

const coursesData = [
  {
    id: 1,
    number: "01",
    title: "Basic English",
    description: "Build strong foundations in grammar, basic sentence structure & vocabulary.",
    icon: "🔤",
    iconBg: "bg-lime-100/70 text-lime-700",
  },
  {
    id: 2,
    number: "02",
    title: "Intermediate English",
    description: "Expand your vocabulary, refine tenses, and speak more fluently.",
    icon: "📈",
    iconBg: "bg-cyan-100/70 text-cyan-700",
  },
  {
    id: 3,
    number: "03",
    title: "Advanced English",
    description: "Master complex grammar, idioms, and high-level conversational nuance.",
    icon: "🎓",
    iconBg: "bg-purple-100/70 text-purple-700",
  },
  {
    id: 4,
    number: "04",
    title: "Spoken English",
    description: "Overcome hesitancy and gain natural accent & speaking confidence.",
    icon: "🎙️",
    iconBg: "bg-green-100/70 text-green-700",
  },
  {
    id: 5,
    number: "05",
    title: "IELTS",
    description: "Complete preparation for IELTS Speaking, Listening, Reading & Writing.",
    icon: "📄",
    iconBg: "bg-amber-100/70 text-amber-700",
  },
  {
    id: 6,
    number: "06",
    title: "Personality & Communication",
    description: "Develop strong interpersonal skills, body language, and workplace etiquette.",
    icon: "🌟",
    iconBg: "bg-emerald-100/70 text-emerald-700",
  },
  {
    id: 7,
    number: "07",
    title: "Public Speaking",
    description: "Conquer stage fear, structure impactful speeches, and engage audiences.",
    icon: "🎤",
    iconBg: "bg-sky-100/70 text-sky-700",
  },
  {
    id: 8,
    number: "08",
    title: "Business English",
    description: "Master professional corporate communication, email writing, and presentations.",
    icon: "💼",
    iconBg: "bg-red-100/70 text-red-700",
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
    <section className="relative bg-slate-50 py-10 lg:py-12 overflow-hidden font-sans border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">

        {/* Header Content */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="bg-red-50 text-[#DC2626] border border-red-200/60 text-xs font-bold px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 uppercase tracking-wider">
            <span className="text-sm">🎓</span> Learning Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A] mb-4">
            Our <span className="text-[#DC2626]">Courses</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl">
            Explore our carefully designed English learning courses to build your skills step by step.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-10 sm:px-12 md:px-20">

          {/* Nav Arrows (Visible on Mobile & Desktop) */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md rounded-full shadow-md sm:shadow-lg flex items-center justify-center text-slate-700 hover:text-[#DC2626] transition-all focus:outline-none border border-slate-200/80 active:scale-95"
            aria-label="Previous Course"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md rounded-full shadow-md sm:shadow-lg flex items-center justify-center text-slate-700 hover:text-[#DC2626] transition-all focus:outline-none border border-slate-200/80 active:scale-95"
            aria-label="Next Course"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-0 sm:gap-4 md:gap-6 py-12 px-0 sm:px-2 snap-x snap-mandatory hide-scrollbar relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >

            {extendedCourses.map((course, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`card-item snap-center shrink-0 w-full sm:w-[240px] md:w-[calc((100%-48px)/3)] xl:w-[calc((100%-96px)/5)] px-3 sm:px-0 group relative transition-all duration-300 ${isActive ? 'scale-105 z-10' : 'scale-100 opacity-90'}`}
                >
                  <div className={`h-full bg-white rounded-[1.5rem] p-6 flex flex-col items-center text-center transition-all duration-300 border ${isActive ? 'border-[#DC2626] shadow-xl shadow-red-500/10 -translate-y-1.5' : 'border-slate-200/80 shadow-sm'}`}>

                    {/* Course Number Badge & Icon Area */}
                    <div className="relative w-full flex flex-col items-center mb-6">
                      {course.number && (
                        <span className="absolute top-0 left-0 bg-slate-900 text-white font-black text-xs px-2.5 py-1 rounded-lg shadow-sm">
                          {course.number}
                        </span>
                      )}
                      <div className={`w-28 h-24 rounded-2xl ${course.iconBg} flex items-center justify-center text-5xl transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
                        {course.icon}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-3">{course.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">{course.description}</p>

                    {/* Bottom Action */}
                    <div className="w-full mt-auto">
                      {!isActive ? (
                        <a href="/courses" className="flex items-center justify-center text-slate-700 font-bold text-sm hover:text-[#DC2626] transition-colors">
                          Explore &rarr;
                        </a>
                      ) : (
                        <a href="/courses" className="flex items-center justify-center w-full bg-[#DC2626] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all hover:bg-[#B91C1C]">
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

      </div>
    </section>
  );
}
