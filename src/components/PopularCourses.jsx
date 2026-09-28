'use client';

const courses = [
  {
    id: 1,
    category: "English Learning",
    instructor: "Jill King",
    title: "Certified English Grammar & Writing Masterclass",
    price: "$55",
    students: "240 Students",
    lessons: "14 Lessons",
    duration: "4.5 hours",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Vocabulary",
    instructor: "Jill King",
    title: "Essential English Vocabulary for Daily Fluency",
    price: "$20",
    students: "180 Students",
    lessons: "10 Lessons",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Writing & Essays",
    instructor: "Ana Murphy",
    title: "Expository & Professional Business Writing",
    price: "$45",
    students: "320 Students",
    lessons: "16 Lessons",
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
  }
];

export default function PopularCourses() {
  return (
    <section className="relative bg-[#FAFBFD] py-16 lg:py-24 border-b border-slate-100 overflow-hidden select-none">
      
      {/* Background Watermark Landmarks */}
      <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
        <svg className="w-64 h-96 text-slate-400 fill-current" viewBox="0 0 200 300">
          <path d="M100 20L80 80H120L100 20ZM90 90V280H110V90H90Z" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
        <svg className="w-80 h-96 text-slate-400 fill-current" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[#E59719] font-serif italic text-lg sm:text-xl block font-semibold">
            What's New
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111726] tracking-tight">
            Popular Online Courses
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed pt-2">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.
          </p>
        </div>

        {/* Courses Grid matching Image 1 Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Course Image Container with Circular Floating Price Badge */}
                <div className="relative h-56 sm:h-60 rounded-2xl overflow-hidden bg-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Circular Floating Price Badge at Bottom-Right of Image */}
                  <div className="absolute bottom-3 right-3 w-16 h-16 rounded-full bg-[#E59719] text-white flex items-center justify-center font-black text-lg shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform">
                    {course.price}
                  </div>
                </div>

                {/* Course Body Content */}
                <div className="p-4 pt-5 space-y-3">
                  {/* Category Subtitle */}
                  <span className="text-xs font-semibold text-slate-500 block">
                    {course.category}
                  </span>

                  {/* Instructor Avatar + Name */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs">
                      👤
                    </div>
                    <span className="text-xs font-semibold text-slate-600">
                      {course.instructor}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-[#E59719] group-hover:text-[#d48d12] transition-colors leading-snug pt-1">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Divider & 3 Stats Row (Students | Lessons | Duration) */}
              <div className="px-4 py-3 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                {/* Students */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>{course.students}</span>
                </div>

                {/* Lessons */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>{course.lessons}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
