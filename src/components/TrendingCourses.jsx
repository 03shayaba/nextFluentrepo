'use client';
import Image from 'next/image';
import Link from 'next/link';
import { trendingCoursesData } from '@/data/coursesData';



export default function TrendingCourses() {
  return (
    <section className="bg-[#111726] py-10 lg:py-12 border-b border-[#1E293B] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
          <span className="inline-flex items-center gap-2 bg-red-500/15 backdrop-blur-md border border-red-500/30 text-[#F87171] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide mb-4 uppercase">
            ⭐ Trending Courses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
            Our BestSeller <span className="text-[#F87171]">Online Courses</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            The ultimate learning solution for students and professionals looking to reach their personal goals.
          </p>
        </div>

        {/* 2-Column Grid of Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {trendingCoursesData.map((course) => (
            <Link 
              href={`/course-details/${course.slug}`}
              key={course.id}
              className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-5 border border-slate-700 hover:border-[#DC2626]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 group cursor-pointer block sm:flex overflow-hidden"
            >
              {/* Left Border Accent on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-center"></div>

              {/* Top Right Tags */}
              {course.id % 2 !== 0 ? (
                <div className="absolute top-0 right-0 bg-[#DC2626] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-sm">
                  Bestseller
                </div>
              ) : (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-sm">
                  Trending
                </div>
              )}

              {/* Left Circular Photo Thumbnail */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-slate-700 shadow-sm group-hover:border-[#DC2626]/40 group-hover:scale-105 transition-all duration-300">
                <Image 
                  src={course.image} 
                  alt={course.title}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Course Information */}
              <div className="space-y-1.5 flex-1 pr-4">
                {/* Price Display */}
                <div className="flex items-center gap-2">
                  {course.originalPrice && (
                    <span className="text-slate-400 line-through text-xs font-semibold">
                      {course.originalPrice}
                    </span>
                  )}
                  <span className="text-[#EF4444] font-black text-base sm:text-lg">
                    {course.price}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#EF4444] transition-colors leading-snug">
                  {course.title}
                </h3>

                {/* Metadata (Instructor & Lessons) */}
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium pt-1">
                  <span>By <strong className="text-slate-300 font-semibold">{course.instructor}</strong></span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span>{course.lessons}</span>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
