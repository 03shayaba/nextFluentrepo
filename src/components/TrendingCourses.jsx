'use client';

const trendingCourses = [
  {
    id: 1,
    title: "Sales Training: Practical Sales Techniques",
    instructor: "Masum Billah",
    lessons: "14 Lessons",
    price: "Free",
    originalPrice: null,
    image: "/course1.avif"
  },
  {
    id: 2,
    title: "Information About UI/UX Design Degree",
    instructor: "Masum Billah",
    lessons: "15 Lessons",
    price: "₹2,499",
    originalPrice: "₹3,499",
    image: "/course2.avif"
  },
  {
    id: 3,
    title: "Advanced Spoken English & Accent Training",
    instructor: "Dr. Sarah Khan",
    lessons: "18 Lessons",
    price: "₹1,899",
    originalPrice: "₹2,699",
    image: "/course3.avif"
  },
  {
    id: 4,
    title: "Complete IELTS Academic Prep Masterclass",
    instructor: "John Miller",
    lessons: "20 Lessons",
    price: "Free",
    originalPrice: null,
    image: "/course4.avif"
  }
];

export default function TrendingCourses() {
  return (
    <section className="bg-[#111726] py-10 lg:py-12 border-b border-[#1E293B] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          
          {/* Decorative Handwritten Text Left */}
          <div 
            className="absolute -left-10 -top-8 rotate-[-10deg] text-orange-500 font-medium text-lg leading-tight hidden lg:block"
            style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
          >
            Find your match!
            <svg className="w-10 h-10 text-orange-400 absolute -bottom-6 left-12 rotate-[-40deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* Decorative Handwritten Text Right */}
          <div 
            className="absolute -right-16 top-4 rotate-[8deg] text-blue-500 font-medium text-lg leading-tight hidden lg:block"
            style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
          >
            Start Learning Today
            <svg className="w-12 h-6 text-blue-400 mt-1 ml-4" viewBox="0 0 100 20" fill="none">
              <path d="M5 15Q50 0 95 15" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Dotted Arc Behind Header */}
          <svg className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] h-36 text-slate-700 pointer-events-none hidden md:block z-0" viewBox="0 0 500 100" fill="none">
            <path d="M50 80 Q250 -10 450 80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
          </svg>

          <span className="relative z-10 inline-flex items-center gap-2 bg-[#E59719]/20 backdrop-blur-md border border-[#E59719]/30 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide mb-4 uppercase">
            ⭐ Trending Courses
          </span>
          <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
            Over 200+ <span className="text-[#E59719]">Online Courses</span>
          </h2>
          <p className="relative z-10 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            The ultimate learning solution for students and professionals looking to reach their personal goals.
          </p>
        </div>

        {/* 2-Column Grid of Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {trendingCourses.map((course) => (
            <a 
              href="/course-details"
              key={course.id}
              className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-5 border border-slate-700 hover:border-[#E59719]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 group cursor-pointer block sm:flex overflow-hidden"
            >
              {/* Left Border Accent on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E59719] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-center"></div>

              {/* Top Right Tags */}
              {course.id % 2 !== 0 ? (
                <div className="absolute top-0 right-0 bg-[#E59719] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-sm">
                  Bestseller
                </div>
              ) : (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-sm">
                  Trending
                </div>
              )}

              {/* Left Circular Photo Thumbnail */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-slate-700 shadow-sm group-hover:border-[#E59719]/30 group-hover:scale-105 transition-all duration-300">
                <img 
                  src={course.image} 
                  alt={course.title}
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
                  <span className="text-[#E59719] font-black text-base sm:text-lg">
                    {course.price}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E59719] transition-colors leading-snug">
                  {course.title}
                </h3>

                {/* Metadata (Instructor & Lessons) */}
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium pt-1">
                  <span>By <strong className="text-slate-300 font-semibold">{course.instructor}</strong></span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span>{course.lessons}</span>
                  </div>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
