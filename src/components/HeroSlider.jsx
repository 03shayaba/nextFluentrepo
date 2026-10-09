'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    bgImage: "/banner1.png",
    heading: (
      <>
        Unlock Your <br />
        <span className="text-[#2563EB]">English</span> <br />
        Potential
      </>
    ),
    subtitle: "Confident communication starts here — join us and speak with clarity."
  },
  {
    id: 2,
    bgImage: "/banner2.png",
    heading: (
      <>
        YOUR WORDS <br />
        <span className="text-[#A3E635]">YOUR MOMENT!</span>
      </>
    ),
    subtitle: "Speak clearly, express freely, and let your confidence do the talking!"
  },
  {
    id: 3,
    bgImage: "/banner3.png",
    heading: (
      <>
        <span className="text-[#2563EB]">ENGLISH BOLNE KA</span> <br />
        SAFAR EK CLICK KI <br />
        DOORI PAR!
      </>
    ),
    subtitle: "Seekhein behtar, bolein behjijak!"
  },
  {
    id: 4,
    bgImage: "/banner4.png",
    heading: (
      <>
        Ready to Sound Like You <br />
        Mean It?
      </>
    ),
    subtitle: "Turn better communication into confidence that actually shows!"
  },
  {
    id: 5,
    bgImage: "/banner5.png",
    heading: (
      <>
        Aapki English, <br />
        Aapki Pehchan
      </>
    ),
    subtitle: "Behtar communication, zyda confidence aur behtareen opportunities— sab ki shuruaat yahi se!"
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
    <section className="relative w-full h-[320px] sm:h-[480px] lg:h-[600px] overflow-hidden bg-slate-950 text-white select-none">

      {/* Horizontal Carousel Track (Smooth Infinite Right-to-Left Sliding) */}
      <div
        className={`flex w-full h-full ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
        style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {displaySlides.map((slide, i) => (
          <div
            key={`${slide.id}-${i}`}
            className="relative w-full h-full flex-shrink-0 overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 transition-all duration-500">
              <Image 
                src={slide.bgImage}
                alt="Hero Banner"
                fill
                priority={i <= 2}
                className="object-cover object-center"
              />
            </div>

            {/* Dark Left Overlay for crisp text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent z-10"></div>

            {/* Standardized Left-Aligned Content Container for ALL Slides */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-12 lg:px-20 flex flex-col justify-center items-start">
              <div className="max-w-xl text-left space-y-3 sm:space-y-4">
                
                {/* Standardized Heading Style */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight text-white drop-shadow-md">
                  {slide.heading}
                </h1>
                
                {/* Standardized Subtitle Style */}
                <p className="text-xs sm:text-base lg:text-lg font-medium text-slate-100 max-w-lg leading-relaxed drop-shadow-sm pt-1">
                  {slide.subtitle}
                </p>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Prev / Next Slider Navigation Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm shadow-md"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm shadow-md"
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
              : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
