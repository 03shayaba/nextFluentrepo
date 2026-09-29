'use client';

const trendingCourses = [
  {
    id: 1,
    title: "Sales Training: Practical Sales Techniques",
    instructor: "Masum Billah",
    lessons: "14 Lessons",
    price: "Free",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Information About UI/UX Design Degree",
    instructor: "Masum Billah",
    lessons: "15 Lessons",
    price: "₹2,499",
    originalPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Advanced Spoken English & Accent Training",
    instructor: "Dr. Sarah Khan",
    lessons: "18 Lessons",
    price: "₹1,899",
    originalPrice: "₹2,699",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Complete IELTS Academic Prep Masterclass",
    instructor: "John Miller",
    lessons: "20 Lessons",
    price: "Free",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  }
];

export default function TrendingCourses() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="inline-block bg-amber-100/70 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide">
            Trending Courses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111726] tracking-tight">
            Over 200+ Online Courses
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed pt-1">
            The ultimate learning solution for students and professionals looking to reach their personal goals.
          </p>
        </div>

        {/* 2-Column Grid of Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {trendingCourses.map((course) => (
            <a 
              href="/course-details"
              key={course.id}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group cursor-pointer block sm:flex"
            >
              {/* Left Circular Photo Thumbnail */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Course Information */}
              <div className="space-y-1.5 flex-1">
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
                <h3 className="text-base sm:text-lg font-bold text-[#111726] group-hover:text-[#E59719] transition-colors leading-snug">
                  {course.title}
                </h3>

                {/* Metadata (Instructor & Lessons) */}
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium pt-1">
                  <span>By <strong className="text-slate-600 font-semibold">{course.instructor}</strong></span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
