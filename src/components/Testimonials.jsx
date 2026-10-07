'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Globe, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Rohit Mehta",
    role: "Working Professional, Bengaluru",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote: "The interactive lessons and speaking practice helped me become more confident in just a few months!",
    beforeLevel: "A2",
    afterLevel: "B2",
    themeColor: "text-emerald-500",
    bgTheme: "bg-emerald-50",
    outcome: "Now I can speak confidently in meetings!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Student, Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote: "NextFluent made learning English fun and practical. The live classes, study materials and constant support really helped me improve.",
    beforeLevel: "A1",
    afterLevel: "B1",
    themeColor: "text-[#E59719]",
    bgTheme: "bg-amber-50",
    outcome: "Now I can speak freely and express my ideas!",
  },
  {
    id: 3,
    name: "Arjun Nair",
    role: "Student, Kochi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    quote: "I used to struggle with grammar and speaking, but NextFluent's structured courses and feedback system made a big difference.",
    beforeLevel: "A2",
    afterLevel: "B1",
    themeColor: "text-indigo-500",
    bgTheme: "bg-indigo-50",
    outcome: "More confident in college and daily conversations!",
  },
  {
    id: 4,
    name: "Aisha Khan",
    role: "Freelancer, Delhi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    quote: "Amazing platform! I passed my IELTS with a 7.5 band score thanks to the excellent tutors here.",
    beforeLevel: "B1",
    afterLevel: "C1",
    themeColor: "text-blue-500",
    bgTheme: "bg-blue-50",
    outcome: "Ready for my international career!",
  },
  {
    id: 5,
    name: "Vijay Singh",
    role: "Entrepreneur, Pune",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    quote: "Pitching to international clients used to be scary. Now, I have the vocabulary and confidence to close deals.",
    beforeLevel: "B2",
    afterLevel: "C1",
    themeColor: "text-rose-500",
    bgTheme: "bg-rose-50",
    outcome: "Closed 3 international deals this month!",
  }
];

const extendedTestimonials = Array(40).fill(testimonials).flat();

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(testimonials.length * 20);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  // Reset index to stay near middle range for seamless infinite looping
  useEffect(() => {
    if (activeIndex >= extendedTestimonials.length - testimonials.length) {
      setActiveIndex(testimonials.length * 20 + (activeIndex % testimonials.length));
    } else if (activeIndex < testimonials.length) {
      setActiveIndex(testimonials.length * 20 + (activeIndex % testimonials.length));
    }
  }, [activeIndex]);

  // Auto-slide interval (every 1.3 seconds for fast sliding)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative bg-[#FDFCF8] pt-16 lg:pt-24 pb-8 lg:pb-12 overflow-hidden font-sans ">
      
      {/* Decorative Background Blob right side */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SECTION: Headers & Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16 relative">
          
          {/* Left Header */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/60 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
              <span className="text-xs font-bold text-[#DC2626] tracking-widest uppercase">Learner Success</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-4 tracking-tight">
              Real Learners.<br/>
              <span className="text-[#DC2626]">Real Progress.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
              Thousands of students around the world are improving their English with NextFluent. Here's what they have to say about their journey.
            </p>
          </div>

          {/* Right Stats Block */}
          <div className="relative mt-4 lg:mt-0 w-full lg:w-auto">
            {/* Stats Box */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center justify-around sm:justify-center gap-3 sm:gap-8 lg:gap-12 relative z-10">
              <div className="text-center">
                <div className="flex justify-center mb-1 sm:mb-2"><Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#DC2626]"/></div>
                <div className="text-lg sm:text-2xl font-black text-slate-900">10,000+</div>
                <div className="text-[10px] sm:text-xs font-medium text-slate-400">Happy Learners</div>
              </div>
              <div className="w-[1px] h-8 sm:h-12 bg-slate-100"></div>
              <div className="text-center">
                <div className="flex justify-center mb-1 sm:mb-2"><Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#DC2626] fill-[#DC2626]"/></div>
                <div className="text-lg sm:text-2xl font-black text-slate-900">4.8/5</div>
                <div className="text-[10px] sm:text-xs font-medium text-slate-400">Average Rating</div>
              </div>
              <div className="w-[1px] h-8 sm:h-12 bg-slate-100"></div>
              <div className="text-center">
                <div className="flex justify-center mb-1 sm:mb-2"><Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#DC2626]"/></div>
                <div className="text-lg sm:text-2xl font-black text-slate-900">50+</div>
                <div className="text-[10px] sm:text-xs font-medium text-slate-400">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="relative flex flex-col items-center justify-center min-h-[460px] mb-8 sm:mb-16 max-w-[1080px] mx-auto px-1 sm:px-12 md:px-14">
          
          {/* Soft Left & Right Edge Vignette Gradient Overlays */}
          <div className="absolute top-0 left-0 w-8 sm:w-28 h-full bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/90 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-28 h-full bg-gradient-to-l from-[#FDFCF8] via-[#FDFCF8]/90 to-transparent z-30 pointer-events-none"></div>

          {/* Navigation Arrows */}
          <button 
            type="button"
            onClick={handlePrev} 
            className="hidden sm:flex absolute -left-2 sm:-left-4 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl border border-slate-200/80 items-center justify-center text-slate-700 hover:text-[#DC2626] hover:border-[#DC2626]/40 transition-all focus:outline-none active:scale-95 cursor-pointer hover:shadow-2xl"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button 
            type="button"
            onClick={handleNext} 
            className="hidden sm:flex absolute -right-2 sm:-right-4 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl border border-slate-200/80 items-center justify-center text-slate-700 hover:text-[#DC2626] hover:border-[#DC2626]/40 transition-all focus:outline-none active:scale-95 cursor-pointer hover:shadow-2xl"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Track Container */}
          <div className="w-full relative h-[430px] sm:h-[460px] overflow-hidden [--card-step:284px] sm:[--card-step:340px]">
            <div 
              className="absolute top-0 left-1/2 h-full flex items-center transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(calc(-${activeIndex} * var(--card-step) - (var(--card-step) / 2)))`,
              }}
            >
              {extendedTestimonials.map((card, idx) => {
                const isCenter = idx === activeIndex;
                
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => { if (isCenter) setIsPaused(true); }}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`transition-all duration-300 ease-out relative flex-shrink-0 w-[268px] sm:w-[316px] mx-[8px] sm:mx-[12px] cursor-pointer ${
                      isCenter 
                        ? 'scale-100 z-20 opacity-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-2 border-[#DC2626]' 
                        : 'scale-95 z-10 opacity-40 blur-[0.3px] border border-slate-200/60 shadow-sm hover:opacity-70'
                    } bg-white rounded-3xl p-5 sm:p-7 flex flex-col justify-between h-[410px] select-none`}
                  >
                    
                    <div>
                      {/* User Avatar & Stars */}
                      <div className="flex gap-4 items-center mb-5">
                        <Image 
                          src={card.image} 
                          alt={card.name} 
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 shadow-sm shrink-0" 
                        />
                        <div>
                          <div className="flex gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[#DC2626] text-[#DC2626]" />
                            ))}
                          </div>
                          <h3 className="font-bold text-slate-900 text-lg leading-tight">{card.name}</h3>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">{card.role}</p>
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4 relative min-h-[72px]">
                        <span className="text-3xl text-slate-200 font-serif leading-none select-none">“</span>
                        {card.quote}
                        <span className="text-3xl text-slate-200 font-serif leading-none select-none">”</span>
                      </p>
                    </div>

                    {/* Before & After Level Tracker */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      
                      {/* Level Track */}
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{card.beforeLevel}</div>
                          <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">BEFORE</div>
                        </div>
                        
                        {/* Dotted Arrow */}
                        <div className={`flex-1 flex items-center justify-center ${card.themeColor} px-1`}>
                          <div className="h-[2px] w-full border-b-2 border-dashed border-current opacity-40"></div>
                          <svg className="w-4 h-4 fill-current shrink-0 -ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-slate-900 text-sm">{card.afterLevel}</div>
                          <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">AFTER</div>
                        </div>
                      </div>

                      {/* Result Bubble */}
                      <div className={`${card.bgTheme} ${card.themeColor} text-[11px] font-semibold px-3 py-1.5 rounded-xl ml-3 max-w-[130px] leading-tight text-center shrink-0`}>
                        {card.outcome}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls Row for Mobile */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-4 z-40 relative">
            <button 
              type="button"
              onClick={handlePrev} 
              className="w-10 h-10 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#DC2626] active:scale-95 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5 px-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  type="button"
                  onClick={() => setActiveIndex(testimonials.length * 20 + i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    (activeIndex % testimonials.length) === i ? 'bg-[#DC2626] w-6' : 'bg-slate-300 w-2'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>

            <button 
              type="button"
              onClick={handleNext} 
              className="w-10 h-10 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#DC2626] active:scale-95 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator for Desktop */}
          <div className="hidden sm:flex justify-center items-center gap-2 mt-6 z-30">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                type="button"
                onClick={() => setActiveIndex(testimonials.length * 20 + i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  (activeIndex % testimonials.length) === i ? 'bg-[#DC2626] w-7' : 'bg-slate-300 w-2.5'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>

        </div>

        {/* BOTTOM SECTION */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12 pt-10 border-t border-slate-100/60">
          
          {/* Avatar Group 
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Learner" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Learner" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Learner" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Learner" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">+2K</div>
            </div>
            <p className="text-sm text-slate-500 font-medium max-w-[200px] leading-tight">
              <strong className="text-slate-800">Join 10,000+ learners</strong> who are building a brighter future with better English.
            </p>
          </div>

          {/* CTA & Handwritten Arrow 
          <div className="flex items-center gap-6 relative">
            <div 
              className="hidden sm:block text-slate-600 text-lg leading-tight rotate-[-6deg]"
              style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
            >
              Your Success<br/>Could Be Next!
              <svg className="absolute -bottom-2 -right-4 w-8 h-8 text-slate-400 rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <button className="group flex items-center gap-2 bg-[#E59719] hover:bg-[#C98416] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-[0_8px_20px_-6px_rgba(229,151,25,0.5)] hover:-translate-y-0.5">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div> */}

      </div>
    </section>
  );
}
