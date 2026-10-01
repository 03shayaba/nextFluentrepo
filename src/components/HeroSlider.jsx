'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    tag: "ENGLISH LEARNING",
    title: "EXCEL IN YOUR CAREER & ACADEMICS",
    subtitle: "Crack IELTS, TOEFL, and Spoken English with expert guidance.",
    bgImage: "/banner1.webp"
  },
  {
    id: 2,
    tag: "ONLINE COURSES",
    title: "SPOKEN ENGLISH MASTERY",
    subtitle: "Speak fluently and naturally in professional & daily situations.",
    bgImage: "/banner2.webp"
  },
  {
    id: 3,
    tag: "GRAMMAR & WRITING",
    title: "MASTER ESSENTIAL SKILLS",
    subtitle: "Build confidence, improve communication skills, and unlock new opportunities.",
    bgImage: "/banner3.webp"
  },
  {
    id: 4,
    tag: "EXPERT SOLUTIONS",
    title: "LEARN TODAY. BRIGHTER TOMORROW.",
    subtitle: "Interactive lessons and structured pathways tailored to your goals.",
    bgImage: "/banner4.webp"
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Extended slides array with clone of first item at the end and last item at beginning for seamless infinite loop
  const displaySlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Auto slide forward every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset track position instantly when reaching clone slides
  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 1);
    }
  };

  // Re-enable CSS transition after instant snap
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Active indicator index (0 to slides.length - 1)
  const activeDotIndex = (currentIndex % slides.length + slides.length) % slides.length;

  return (
    <section className="relative w-full h-[500px] sm:h-[580px] lg:h-[620px] overflow-hidden bg-white text-white select-none">
      
      {/* Horizontal Carousel Track (Smooth Infinite Right-to-Left Sliding) */}
      <div 
        className={`flex w-full h-full ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
        style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {displaySlides.map((slide, i) => (
          <div
            key={`${slide.id}-${i}`}
            className="relative w-full h-full flex-shrink-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            {/* Dark Gradient Overlay for perfect text legibility */}
            <div className="absolute inset-0 bg-slate-950/70 sm:bg-slate-950/60"></div>

            {/* Main Content Area */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-center">
              
              {/* Text Content */}
              <div className="max-w-xl space-y-4 pt-6 pl-6 sm:pl-10">
                
                {/* Red Badge */}
                <div>
                  <div className="inline-block bg-[#DC2626] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    {slide.tag}
                  </div>
                </div>

                {/* Main Slide Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-white/95 text-base sm:text-lg lg:text-xl font-medium drop-shadow">
                  {slide.subtitle}
                </p>

                {/* Red Accent Line */}
                <div className="w-14 h-1 bg-[#DC2626] rounded-full mt-3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next Slider Navigation Arrow Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Center Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
              activeDotIndex === index
                ? 'w-9 h-2.5 bg-[#DC2626] shadow-sm'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
