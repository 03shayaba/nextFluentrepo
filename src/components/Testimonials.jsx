'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Globe, Users, ArrowRight } from 'lucide-react';

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
  const [isAnimating, setIsAnimating] = useState(false);



  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="relative bg-[#FDFCF8] pt-16 lg:pt-24 pb-8 lg:pb-12 overflow-hidden font-sans ">
      
      {/* Decorative Background Blob right side */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SECTION: Headers & Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16 relative">
          
          {/* Left Header */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-orange-100/60 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E59719]"></span>
              <span className="text-xs font-bold text-[#E59719] tracking-widest uppercase">Learner Success</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-4 tracking-tight">
              Real Learners.<br/>
              <span className="text-[#E59719]">Real Progress.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
              Thousands of students around the world are improving their English with NextFluent. Here's what they have to say about their journey.
            </p>
          </div>

          {/* Right Stats Block */}
          <div className="relative mt-8 lg:mt-0 w-full lg:w-auto">
            {/* Handwritten Text Left of Stats */}
            <div 
              className="absolute -left-32 -top-12 rotate-[-12deg] text-blue-600 font-medium text-xl leading-snug hidden xl:block"
              style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
            >
              Different<br/>People<br/>Same Goal<br/>Fluency
              <svg className="w-16 h-4 text-orange-400 mt-1" viewBox="0 0 100 20" fill="none">
                <path d="M5 15Q50 0 95 15" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            {/* Stats Box */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-8 lg:gap-12 relative z-10">
              <div className="text-center">
                <div className="flex justify-center mb-2"><Users className="w-6 h-6 text-[#E59719]"/></div>
                <div className="text-2xl font-black text-slate-900">10,000+</div>
                <div className="text-xs font-medium text-slate-400">Happy Learners</div>
              </div>
              <div className="w-[1px] h-12 bg-slate-100"></div>
              <div className="text-center">
                <div className="flex justify-center mb-2"><Star className="w-6 h-6 text-[#E59719] fill-[#E59719]"/></div>
                <div className="text-2xl font-black text-slate-900">4.8/5</div>
                <div className="text-xs font-medium text-slate-400">Average Rating</div>
              </div>
              <div className="w-[1px] h-12 bg-slate-100"></div>
              <div className="text-center">
                <div className="flex justify-center mb-2"><Globe className="w-6 h-6 text-[#E59719]"/></div>
                <div className="text-2xl font-black text-slate-900">50+</div>
                <div className="text-xs font-medium text-slate-400">Countries</div>
              </div>
            </div>

            {/* Decorative Orange Splashes */}
            <div className="absolute -bottom-4 right-10 flex gap-1">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
            </div>
            
            {/* Handwritten Text Right of Stats */}
            <div 
              className="absolute -right-8 -bottom-16 rotate-[-8deg] text-slate-700 font-medium text-xl leading-tight hidden xl:block"
              style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
            >
              "English<br/>changed my<br/>opportunities" ♡
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="relative flex items-center justify-center min-h-[460px] mb-20 overflow-hidden">
          
          {/* Navigation Arrows */}
          <button onClick={handlePrev} className="absolute left-0 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#E59719] transition-colors focus:outline-none ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={handleNext} className="absolute right-0 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#E59719] transition-colors focus:outline-none mr-2">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Track */}
          <div className="w-full absolute top-0 left-0 h-full overflow-hidden pointer-events-none">
            <div 
              className="absolute top-0 left-1/2 h-full flex items-center transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(calc(-${activeIndex * 420 + 210}px))` 
              }}
            >
              {extendedTestimonials.map((card, idx) => {
                const isCenter = idx === activeIndex;
                
                return (
                  <div 
                    key={idx}
                    className={`transition-all duration-500 ease-out relative flex-shrink-0 w-[400px] mx-[10px] pointer-events-auto cursor-pointer ${
                      isCenter 
                        ? 'scale-105 z-20 opacity-100 shadow-2xl border-[#E59719]/50 hover:border-[#E59719]' 
                        : 'scale-90 z-10 opacity-60 shadow-lg border-slate-100'
                    } bg-white rounded-3xl p-6 lg:p-8 border-2`}
                  >
                    
                    {/* Floating Bubble for Center Card */}
                    {isCenter && (
                      <div 
                        className="absolute -top-10 -right-4 bg-orange-50 text-orange-600 font-medium text-sm py-3 px-5 rounded-[2rem] rounded-bl-sm rotate-6 shadow-md border border-orange-100/50 hidden lg:block"
                        style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
                      >
                        My English<br/>My Confidence<br/>My Growth ♡
                      </div>
                    )}

                    <div className="flex gap-4 items-start mb-6">
                      <img src={card.image} alt={card.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                      <div>
                        <div className="flex gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#E59719] text-[#E59719]" />
                          ))}
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">{card.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">{card.role}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 font-medium leading-relaxed mb-8 relative">
                      <span className="text-4xl text-slate-200 absolute -top-4 -left-2 font-serif">"</span>
                      <span className="relative z-10">{card.quote}</span>
                      <span className="text-4xl text-slate-200 absolute -bottom-6 -right-2 font-serif">"</span>
                    </p>

                    {/* Before & After Tracker */}
                    <div className="flex items-center justify-between mt-auto">
                      
                      {/* Level Track */}
                      <div className="flex items-center gap-2 flex-1">
                        <div>
                          <div className="font-bold text-slate-900">{card.beforeLevel}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase">Before</div>
                        </div>
                        
                        {/* Dotted Arrow */}
                        <div className={`flex-1 flex items-center ${card.themeColor}`}>
                          <div className="h-[2px] flex-1 bg-current opacity-40 mx-1" style={{ backgroundImage: 'linear-gradient(to right, currentColor 50%, transparent 50%)', backgroundSize: '8px 2px', backgroundRepeat: 'repeat-x', backgroundColor: 'transparent' }}></div>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-slate-900">{card.afterLevel}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase">After</div>
                        </div>
                      </div>

                      {/* Result Bubble */}
                      <div className={`${card.bgTheme} ${card.themeColor} text-[11px] font-medium px-4 py-2 rounded-2xl rounded-bl-sm ml-4 max-w-[140px] leading-tight`}>
                        {card.outcome}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === i ? 'bg-[#E59719] w-6' : 'bg-slate-300'}`}
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
