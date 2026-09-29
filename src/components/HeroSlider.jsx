'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    tag: "ENGLISH LEARNING",
    title: "EXCEL IN YOUR CAREER & ACADEMICS",
    subtitle: "Crack IELTS, TOEFL, and Spoken English with expert guidance.",
    bgImage: "/h2.jpg"
  },
  {
    id: 2,
    tag: "ONLINE COURSES",
    title: "SPOKEN ENGLISH MASTERY",
    subtitle: "Speak fluently and naturally in professional & daily situations.",
    bgImage: "/h3.jpg"
  },
  {
    id: 3,
    tag: "GRAMMAR & WRITING",
    title: "MASTER ESSENTIAL SKILLS",
    subtitle: "Build confidence, improve communication skills, and unlock new opportunities.",
    bgImage: "/h4.jpg"
  },
  {
    id: 4,
    tag: "EXPERT SOLUTIONS",
    title: "LEARN TODAY. BRIGHTER TOMORROW.",
    subtitle: "Interactive lessons and structured pathways tailored to your goals.",
    bgImage: "/h5.jpg"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide right-to-left transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] sm:h-[580px] lg:h-[620px] overflow-hidden bg-white text-white select-none">
      
      {/* Horizontal Carousel Track (Smooth Right-to-Left Sliding) */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-full flex-shrink-0"
          >
            {/* Background Image from public folder (/h2.jpg, /h3.jpg, /h4.jpg, /h5.jpg) */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            {/* Subtle Gradient Overlay for Clean Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

            {/* Main Content Area */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-center">
              
              {/* Top-Left Yellow Dot Matrix */}
              <div className="absolute top-8 left-6 sm:left-10 z-20">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#E59719]"></span>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="max-w-xl space-y-4 pt-6 pl-6 sm:pl-10">
                
                {/* Orange Badge */}
                <div>
                  <span className="inline-block bg-[#E59719] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    {slide.tag}
                  </span>
                </div>

                {/* Main Slide Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-white/95 text-base sm:text-lg lg:text-xl font-medium drop-shadow">
                  {slide.subtitle}
                </p>

                {/* Orange Accent Line */}
                <div className="w-14 h-1 bg-[#E59719] rounded-full mt-3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Center Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-2.5 bg-black/25 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === index
                ? 'w-10 h-2.5 bg-[#E59719]'
                : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>



    </section>
  );
}
