'use client';

import { useState, useRef } from 'react';
import EnrollModal from './EnrollModal';

const filterOptions = [
  { id: 'all', label: 'All Courses', icon: '▦' },
  { id: 'spoken', label: 'Spoken English', icon: '🎙️' },
  { id: 'ielts', label: 'IELTS', icon: '📄' },
  { id: 'public-speaking', label: 'Public Speaking', icon: '🎤' },
  { id: 'advanced', label: 'Advanced English', icon: '🎓' },
];

const popularCoursesData = [
  {
    id: 1,
    title: "Spoken English Mastery",
    description: "Build natural fluency, eliminate hesitation, and speak confidently anywhere, anytime.",
    image: "/course5.avif",
    category: "Spoken English",
    rating: "4.9",
    reviews: "2.5K",
    enrolled: "10K+",
    lessons: "30",
    hours: "12",
    level: "All Levels",
    currentPrice: "₹799",
    originalPrice: "₹1,499",
    discount: "47% OFF",
  },
  {
    id: 2,
    title: "IELTS Preparation Masterclass",
    description: "Comprehensive band 8+ training for Speaking, Listening, Reading & Writing modules.",
    image: "/t1.avif",
    category: "IELTS",
    rating: "4.8",
    reviews: "3.2K",
    enrolled: "12K+",
    lessons: "40",
    hours: "20",
    level: "Advanced",
    currentPrice: "₹1,499",
    originalPrice: "₹2,499",
    discount: "40% OFF",
  },
  {
    id: 3,
    title: "Public Speaking & Presentation Skills",
    description: "Conquer stage fear, structure engaging speeches, and captivate any audience with impact.",
    image: "/course6.avif",
    category: "Public Speaking",
    rating: "4.9",
    reviews: "1.8K",
    enrolled: "8K+",
    lessons: "24",
    hours: "10",
    level: "Intermediate",
    currentPrice: "₹1,199",
    originalPrice: "₹1,999",
    discount: "40% OFF",
  },
  {
    id: 4,
    title: "Advanced English & Accent Training",
    description: "Master complex sentence structures, advanced vocabulary, and native accent nuance.",
    image: "/t2.avif",
    category: "Advanced English",
    rating: "4.9",
    reviews: "1.6K",
    enrolled: "6K+",
    lessons: "28",
    hours: "14",
    level: "Advanced",
    currentPrice: "₹1,299",
    originalPrice: "₹2,299",
    discount: "43% OFF",
  }
];

export default function PopularCourses() {
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollRef = useRef(null);
  
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsEnrollModalOpen(true);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#0b101c] py-10 lg:py-12 overflow-hidden font-sans border-t border-[#1E293B]">
      

      
      {/* Dashed curved line decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none hidden md:block">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M0,100 C50,100 80,40 150,80" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 6"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Header Content */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-red-500/15 backdrop-blur-md border border-red-500/30 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide mb-4 uppercase">
            ⭐ LEARN & GROW
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Explore Our <span className="text-[#EF4444]">Popular Courses</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            Choose from expertly designed courses created to build confidence, communication skills, and career-ready English.
          </p>
        </div>



        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Nav Arrows */}
          <button onClick={scrollLeft} className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center text-slate-700 hover:text-[#EF4444] transition-colors focus:outline-none cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <button onClick={scrollRight} className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center text-slate-700 hover:text-[#EF4444] transition-colors focus:outline-none cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Scrollable Area */}
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x snap-mandatory hide-scrollbar relative" style={{ scrollbarWidth: 'none' }}>
            
            {popularCoursesData.map((course) => (
              <div key={course.id} className="group snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 border border-white/10 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-red-500/40">
                
                {/* Image Section */}
                <div className="relative h-52 w-full p-2.5">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Heart Icon */}
                  <button className="absolute top-5 right-5 w-9 h-9 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center shadow-md text-slate-300 hover:text-red-500 hover:bg-white transition-all duration-200 hover:scale-110 z-10" aria-label="Wishlist">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  </button>

                  {/* Category Badge */}
                  <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md text-white text-[11px] font-extrabold tracking-wide px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 z-10">
                    {course.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  <h3 className="text-lg font-extrabold text-white mb-2 leading-snug group-hover:text-red-400 transition-colors line-clamp-1">{course.title}</h3>
                  <p className="text-slate-400 text-xs mb-4 line-clamp-2 leading-relaxed font-normal">{course.description}</p>
                  
                  {/* Rating & Enrollment */}
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-400 mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-md">
                      <span>⭐</span> <span>{course.rating}</span> <span className="text-slate-400 font-semibold text-[11px]">({course.reviews})</span>
                    </div>
                    <span className="text-slate-600">•</span>
                    <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                      <span className="text-slate-200 font-semibold">👥 {course.enrolled}</span> enrolled
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex items-center justify-between gap-2 mb-6 text-[11px] font-bold text-slate-300">
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/5">
                      <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                      {course.lessons} Lessons
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/5">
                      <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      {course.hours} Hours
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/5">
                      <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                      {course.level}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 mb-6 mt-auto">
                    <span className="text-2xl font-black text-[#EF4444]">{course.currentPrice}</span>
                    <span className="text-sm font-bold text-slate-400 line-through">{course.originalPrice}</span>
                    <span className="text-[11px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-lg tracking-wide">{course.discount}</span>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a href="/course-details" className="flex items-center justify-center py-2.5 rounded-2xl border border-white/20 text-slate-200 font-bold text-xs hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer">
                      View Details
                    </a>
                    <button 
                      onClick={() => handleEnrollClick(course)}
                      className="flex items-center justify-center gap-1 py-2.5 rounded-2xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white font-extrabold text-xs hover:from-[#B91C1C] hover:to-[#DC2626] transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.02] cursor-pointer"
                    >
                      Enroll Now &rarr;
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
       
      </div>
      
      <EnrollModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
        course={selectedCourse} 
      />
    </section>
  );
}
