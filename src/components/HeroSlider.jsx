'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    tag: "ENGLISH LEARNING",
    title: "EXCEL IN YOUR CAREER & ACADEMICS",
    subtitle: "Crack IELTS, TOEFL, and Spoken English with expert guidance.",
    bgImage: "/banner.png",
    bgMobile: "bg-[position:80%_center]"
  },
  {
    id: 2,
    tag: "ONLINE COURSES",
    title: "SPOKEN ENGLISH MASTERY",
    subtitle: "Speak fluently and naturally in professional & daily situations.",
    bgImage: "/banner2.webp",
    bgMobile: "bg-[position:85%_center]"
  },
  {
    id: 3,
    tag: "GRAMMAR & WRITING",
    title: "MASTER ESSENTIAL SKILLS",
    subtitle: "Build confidence, improve communication skills, and unlock new opportunities.",
    bgImage: "/banner3.webp",
    bgMobile: "bg-[position:85%_center]"
  },
  {
    id: 4,
    tag: "EXPERT SOLUTIONS",
    title: "LEARN TODAY. BRIGHTER TOMORROW.",
    subtitle: "Interactive lessons and structured pathways tailored to your goals.",
    bgImage: "/banner4.webp",
    bgMobile: "bg-[position:85%_center]"
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
            {/* Background Image (Per-slide mobile focus positioning) */}
            <div
              className={`absolute inset-0 bg-cover ${slide.bgMobile || 'bg-[position:85%_center]'} sm:bg-center bg-no-repeat transition-all duration-500`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            {/* Subtle Gradient Overlay: Dark on left for crisp text contrast, clear on right for instructor face visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent sm:from-slate-950/85 sm:via-slate-950/35 sm:to-transparent"></div>

            {/* Main Content Area */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col items-center sm:items-start text-center sm:text-left justify-center">

              {/* Text Content with Spacious Padding */}
              <div className="max-w-xl space-y-3 sm:space-y-4 pt-2 sm:pt-4 px-2 sm:px-6 flex flex-col items-center sm:items-start">

                {/* Red Badge */}
                <div>
                  <div className="inline-block bg-[#DC2626] text-white text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md">
                    {slide.tag}
                  </div>
                </div>

                {/* Main Slide Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-snug sm:leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-slate-100 text-xs sm:text-base lg:text-lg font-medium drop-shadow-md leading-relaxed max-w-md">
                  {slide.subtitle}
                </p>

                {/* Red Accent Line */}
                <div className="w-12 sm:w-16 h-1 bg-[#DC2626] rounded-full mt-2 sm:mt-3 shadow-sm"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next Slider Navigation Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
            className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${activeDotIndex === index
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
