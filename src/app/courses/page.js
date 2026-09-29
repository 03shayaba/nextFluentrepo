'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearningProcess from "@/components/LearningProcess";
import Testimonials from "@/components/Testimonials";
import React from 'react';
import TransformHero from "@/components/TransformHero";

const courses = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    price: "₹1,499",
    category: "English Learning",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    instructorName: "Jill King",
    title: "Certified English Grammar & Writing Masterclass",
    students: "240",
    lessons: "14",
    hours: "4.5"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    price: "₹799",
    category: "Vocabulary",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    instructorName: "Jill King",
    title: "Essential English Vocabulary for Daily Fluency",
    students: "180",
    lessons: "10",
    hours: "3"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=600&h=400&fit=crop",
    price: "₹1,299",
    category: "Writing & Essays",
    instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    instructorName: "Ana Murphy",
    title: "Expository & Professional Business Writing",
    students: "320",
    lessons: "16",
    hours: "5"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    price: "₹1,999",
    category: "Technology",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    instructorName: "John Doe",
    title: "Complete Web Development Bootcamp 2024",
    students: "850",
    lessons: "42",
    hours: "12"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    price: "₹899",
    category: "Design",
    instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    instructorName: "Sarah Smith",
    title: "UI/UX Design Masterclass: From Beginner to Pro",
    students: "420",
    lessons: "24",
    hours: "6.5"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    price: "₹1,199",
    category: "Business",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    instructorName: "Mike Johnson",
    title: "Digital Marketing Strategy for Modern Business",
    students: "560",
    lessons: "18",
    hours: "8"
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        {/* Top Hero Section */}
        <section className="bg-gradient-to-r from-amber-50 via-white to-amber-50/40 pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              
              {/* Left Side */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">Our Courses</h1>
                <div className="flex items-center text-sm font-medium text-slate-500 gap-2">
                  <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <a href="/" className="hover:text-[#E59719] cursor-pointer transition-colors">Home</a>
                  <span className="text-slate-300">/</span>
                  <span className="text-[#0F172A]">Courses</span>
                </div>
              </div>
              
              {/* Right Side Stats */}
              <div className="flex gap-8 sm:gap-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">9+</h2>
                  <p className="text-sm text-slate-500 mt-1">Online courses</p>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">6+</h2>
                  <p className="text-sm text-slate-500 mt-1">Expert Instructors</p>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">13+</h2>
                  <p className="text-sm text-slate-500 mt-1">Online Learners</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Filters & Content Section */}
        <section className="py-8 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filters Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              
              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Search course..." 
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all shadow-sm text-slate-700" 
                />
              </div>
              
              {/* Dropdowns */}
              <div className="flex flex-wrap gap-3 flex-1">
                {['Categories', 'Prices', 'Levels', 'Rating', 'Instructor'].map(filter => (
                  <button key={filter} className="flex-1 min-w-[130px] bg-white border border-slate-200 px-4 py-3 rounded-full text-sm text-slate-600 font-medium flex justify-between items-center hover:border-amber-400 hover:text-[#E59719] transition-colors shadow-sm">
                    {filter}
                    <svg className="w-4 h-4 ml-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ))}
              </div>
              
            </div>

            {/* Sort & View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-slate-200 pb-6">
              <p className="text-sm text-slate-500 font-medium">
                Showing <span className="font-bold text-[#0F172A]">1-6</span> of <span className="font-bold text-[#0F172A]">9</span> course
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center text-sm">
                  <span className="text-slate-500 mr-3">Sort by</span>
                  <button className="bg-white border border-slate-200 px-4 py-2 rounded-full text-[#0F172A] font-medium flex items-center hover:border-amber-400 shadow-sm transition-colors">
                    Latest
                    <svg className="w-4 h-4 ml-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {/* Grid / List Toggles */}
                <div className="flex bg-[#f3edfd]/40 rounded-full p-1 border border-purple-100/50">
                  <button className="p-1.5 bg-white text-purple-600 shadow-sm rounded-full border border-purple-100">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"/>
                    </svg>
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {courses.map(course => (
                <a href="/course-details" key={course.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col p-4">
                  
                  {/* Image & Price */}
                  <div className="relative h-[220px] w-full overflow-hidden rounded-2xl mb-5">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-3 right-3 bg-[#E59719] text-white font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-white text-sm">
                      {course.price}
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="px-2 flex-1 flex flex-col">
                    <span className="text-[#0F172A] font-medium text-xs mb-4 hover:text-[#E59719] cursor-pointer transition-colors">
                      {course.category}
                    </span>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <img src={course.instructorImage} alt={course.instructorName} className="w-6 h-6 rounded-full object-cover" />
                      <span className="text-xs font-semibold text-slate-500">{course.instructorName}</span>
                    </div>

                    <h3 className="text-[17px] font-bold text-[#E59719] leading-snug mb-5 flex-1 hover:text-amber-600 cursor-pointer transition-colors">
                      {course.title}
                    </h3>
                    
                    <hr className="border-slate-100 mb-4" />

                    {/* Stats Footer */}
                    <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-1.5 hover:text-[#E59719] transition-colors">
                        <svg className="w-4 h-4 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {course.students} Students
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-[#E59719] transition-colors">
                        <svg className="w-4 h-4 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {course.lessons} Lessons
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-[#E59719] transition-colors">
                        <svg className="w-4 h-4 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.hours} hours
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination / Load More (Optional) */}
            <div className="mt-12 flex justify-center">
               <button className="bg-white border-2 border-[#E59719] text-[#E59719] hover:bg-[#E59719] hover:text-white font-semibold py-2 px-6 text-sm rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                 Load More Courses
               </button>
            </div>
            
          </div>
        </section>

        {/* Working Process Section */}
        <LearningProcess />

        {/* Testimonials Section */}
        <Testimonials />
        <TransformHero />
        
      </main>
      <Footer />
    </div>
  );
}
