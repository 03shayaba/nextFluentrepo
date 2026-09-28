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

      {/* Bottom Right Floating WhatsApp Action Button */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
        <a 
          href="https://wa.me/917889745674" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#1eb956] text-white rounded-full flex items-center justify-center shadow-xl transition-transform transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001l-1.416 5.171 5.291-1.387c1.472.802 3.13 1.224 4.781 1.225h.004c5.506 0 9.99-4.478 9.99-9.985 0-2.668-1.039-5.176-2.928-7.066s-4.397-2.943-7.064-2.943zm5.836 14.159c-.247.697-1.439 1.33-1.979 1.399-.54.069-1.242.096-2.002-.146-.462-.148-1.06-.347-1.834-.682-3.238-1.405-5.35-4.664-5.512-4.88-.162-.216-1.314-1.748-1.314-3.333 0-1.585.836-2.364 1.133-2.688.297-.324.648-.405.864-.405.216 0 .432.002.62.01.203.008.474-.077.742.567.27.648.918 2.242.998 2.404.081.162.135.351.027.567-.108.216-.162.351-.324.54-.162.189-.34.423-.486.567-.162.162-.331.339-.142.663.189.324.839 1.385 1.801 2.242 1.236 1.101 2.278 1.442 2.602 1.604.324.162.513.135.702-.081.189-.216.81-.945 1.026-1.269.216-.324.432-.27.729-.162.297.108 1.89.891 2.214 1.053.324.162.54.243.621.378.081.135.081.783-.166 1.48z"/>
          </svg>
        </a>
      </div>

    </section>
  );
}
