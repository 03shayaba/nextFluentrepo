'use client';

import { useState, useEffect, useRef } from 'react';

function CountUpNumber({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    id: 1,
    target: 10000,
    suffix: " +",
    label: "Active Students",
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.61l7.74-4.463M12 4.5L2.25 9.75l9.75 5.25 9.75-5.25L12 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v5.25a6 6 0 0012 0V12" />
      </svg>
    )
  },
  {
    id: 2,
    target: 500,
    suffix: " +",
    label: "Premium Courses",
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    )
  },
  {
    id: 3,
    target: 50,
    suffix: " +",
    label: "Expert Mentors",
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.488-.415.874-.838.618l-4.733-2.868a.563.563 0 00-.586 0l-4.733 2.868c-.423.256-.954-.13-.838-.618l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
  {
    id: 4,
    target: 99,
    suffix: " %",
    label: "Placement Rate",
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387M3.75 14.15a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m4.5 8.006h4.5" />
      </svg>
    )
  }
];

export default function OurAchievements() {
  return (
    <section className="bg-gradient-to-b from-slate-50/50 via-white to-slate-50/80 py-10 lg:py-12 border-b border-slate-100/80 overflow-hidden select-none relative">
      
      {/* Decorative Ambient Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-400/10 via-amber-200/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 space-y-3">
          <span className="inline-block bg-amber-100/70 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide">
            Our Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Empowering Learners Worldwide
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            We are proud of the impact we've made in the education space. Our growing community is a testament to our commitment to quality learning.
          </p>
        </div>

        {/* Clean Stats Row without cards (Image 2 style) */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-10 lg:gap-4 w-full">
          {stats.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col items-center justify-center text-center p-2 group transition-transform duration-300 hover:-translate-y-1 w-[45%] sm:w-[22%]"
            >
              {/* Icon in Golden Yellow */}
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Stat Animated Number in Golden Yellow */}
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#E59719] tracking-tight">
                <CountUpNumber target={item.target} suffix={item.suffix} duration={2200} />
              </h3>

              {/* Label in SemiBold Dark Slate */}
              <p className="text-sm sm:text-base font-semibold text-[#0F172A] mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
