'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useWishlist } from '@/context/WishlistContext';

export default function WishlistPage() {
  const { wishlistedCourses, toggleWishlist } = useWishlist();
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            My <span className="text-[#DC2626]">Wishlist</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl">
            You have {wishlistedCourses.length} courses saved for later. Enroll in them whenever you're ready!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {course.category}
                </div>
                
                {/* Remove Button */}
                <button 
                  onClick={() => toggleWishlist(course)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-500 shadow-md hover:bg-red-50 transition-colors z-10" 
                  aria-label="Remove from wishlist"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold">
                    <span className="text-amber-400">★</span> <span>{course.rating}</span> <span className="text-white/70">({course.reviews})</span>
                  </div>
                  <div className="bg-[#DC2626] px-2.5 py-1 rounded-lg text-xs font-bold shadow-lg">
                    {course.discount}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 leading-tight group-hover:text-[#DC2626] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-6 pb-6 border-b border-slate-100">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {course.hours} Hrs</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> {course.lessons} Lsn</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#DC2626] leading-none">{course.currentPrice}</span>
                    <span className="text-xs font-bold text-slate-400 line-through mt-1">{course.originalPrice}</span>
                  </div>
                  <Link href="/course-details" className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-md">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
