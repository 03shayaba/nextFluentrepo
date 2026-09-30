'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import React, { useState, useMemo } from 'react';
import TransformHero from "@/components/TransformHero";
import EnrollModal from "@/components/EnrollModal";

const courses = [
  {
    id: 1,
    image: "course1.avif",
    price: "₹1,499",
    category: "English Learning",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    instructorName: "Jill King",
    title: "Certified English Grammar & Writing Masterclass",
    students: "240",
    lessons: "14",
    hours: "4.5",
    level: "Intermediate",
    rating: 4.8
  },
  {
    id: 2,
    image: "course2.avif",
    price: "₹799",
    category: "Vocabulary",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    instructorName: "Jill King",
    title: "Essential English Vocabulary for Daily Fluency",
    students: "180",
    lessons: "10",
    hours: "3",
    level: "Beginner",
    rating: 4.5
  },
  {
    id: 3,
    image: "course3.avif",
    price: "₹1,299",
    category: "Writing & Essays",
    instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    instructorName: "Ana Murphy",
    title: "Expository & Professional Business Writing",
    students: "320",
    lessons: "16",
    hours: "5",
    level: "Advanced",
    rating: 4.9
  },
  {
    id: 4,
    image: "course4.avif",
    price: "₹1,999",
    category: "Technology",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    instructorName: "John Doe",
    title: "Complete Web Development Bootcamp 2024",
    students: "850",
    lessons: "42",
    hours: "12",
    level: "Beginner",
    rating: 4.7
  },
  {
    id: 5,
    image: "course5.avif",
    price: "₹899",
    category: "Design",
    instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    instructorName: "Sarah Smith",
    title: "UI/UX Design Masterclass: From Beginner to Pro",
    students: "420",
    lessons: "24",
    hours: "6.5",
    level: "Intermediate",
    rating: 4.6
  },
  {
    id: 6,
    image: "course6.avif",
    price: "₹1,199",
    category: "Business",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    instructorName: "Mike Johnson",
    title: "Digital Marketing Strategy for Modern Business",
    students: "560",
    lessons: "18",
    hours: "8",
    level: "Intermediate",
    rating: 4.8
  }
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const [viewMode, setViewMode] = useState('grid');
  
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollClick = (e, course) => {
    e.preventDefault();
    setSelectedCourse(course);
    setIsEnrollModalOpen(true);
  };

  const filteredCourses = useMemo(() => {
    return courses
      .filter(course => {
        // Search
        if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;

        // Category
        if (categoryFilter !== 'All' && course.category !== categoryFilter) return false;

        // Level
        if (levelFilter !== 'All' && course.level !== levelFilter) return false;

        // Rating
        if (ratingFilter !== 'All') {
          if (ratingFilter === '4.5+' && course.rating < 4.5) return false;
          if (ratingFilter === '4.8+' && course.rating < 4.8) return false;
        }

        // Price
        const priceNum = parseInt(course.price.replace(/[^0-9]/g, ''));
        if (priceFilter === 'Under ₹1000' && priceNum >= 1000) return false;
        if (priceFilter === '₹1000 - ₹1500' && (priceNum < 1000 || priceNum > 1500)) return false;
        if (priceFilter === 'Above ₹1500' && priceNum <= 1500) return false;

        return true;
      })
      .sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));

        if (sortBy === 'Price: Low to High') return priceA - priceB;
        if (sortBy === 'Price: High to Low') return priceB - priceA;
        return 0; // 'Latest' just keeps default order for now
      });
  }, [searchQuery, categoryFilter, priceFilter, levelFilter, ratingFilter, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        {/* Top Hero Section */}
        <section className="relative bg-[#0B1120] pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-white/10 overflow-hidden z-0">
          
          {/* Dynamic Background Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none z-[-1]"></div>

          {/* Decorative Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-[-1]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="courses-light-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#courses-light-grid)"/>
          </svg>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
              
              {/* Left Side */}
              <div className="relative max-w-2xl">
                
                {/* Handwritten Text & Arrow */}
                <div className="absolute -top-12 -left-4 lg:-left-12 hidden md:block">
                  <span className="text-amber-400 font-light text-2xl rotate-[-8deg] inline-block drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}>
                    Find your perfect course!
                  </span>
                  <svg className="w-16 h-12 text-amber-500/80 transform rotate-12 mt-2 ml-10" viewBox="0 0 100 100" fill="none">
                    <path d="M10 10 Q 50 80, 90 90 M70 85 L90 90 L85 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-500/20 px-4 py-2 rounded-full mb-8 text-amber-400 font-bold text-xs tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span> Master Your Skills
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-xl">
                  Browse Our <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E59719] to-amber-300 drop-shadow-sm">Premium Courses</span>
                </h1>
                
                <div className="flex items-center text-sm font-medium text-slate-300 gap-3 bg-white/5 backdrop-blur-md w-fit px-5 py-2.5 rounded-full border border-white/10 shadow-lg shadow-black/20">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <a href="/" className="hover:text-amber-400 cursor-pointer transition-colors">Home</a>
                  <span className="text-white/20">/</span>
                  <span className="text-white">Courses</span>
                </div>
              </div>
              
              {/* Right Side Stats */}
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* Stat 1 */}
                <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-6 min-w-[160px] transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/[0.06] hover:border-amber-400/30 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white group-hover:text-amber-400 transition-colors drop-shadow-md">9+</h2>
                  </div>
                  <p className="text-sm text-slate-300 font-medium relative z-10 pl-1">Online Courses</p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-6 min-w-[160px] transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/[0.06] hover:border-blue-400/30 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white group-hover:text-blue-400 transition-colors drop-shadow-md">6+</h2>
                  </div>
                  <p className="text-sm text-slate-300 font-medium relative z-10 pl-1">Expert Mentors</p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-6 min-w-[160px] transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/[0.06] hover:border-emerald-400/30 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white group-hover:text-emerald-400 transition-colors drop-shadow-md">10k+</h2>
                  </div>
                  <p className="text-sm text-slate-300 font-medium relative z-10 pl-1">Active Learners</p>
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search course..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all shadow-sm text-slate-700"
                />
              </div>

              {/* Dropdowns */}
              <div className="flex flex-wrap gap-3 flex-1">
                {/* Categories */}
                <div className="relative flex-1 min-w-[130px]">
                  <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="w-full bg-white border border-slate-200 pl-4 pr-10 py-3 rounded-full text-sm text-slate-600 font-medium appearance-none focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-sm cursor-pointer">
                    <option value="All">All Categories</option>
                    <option value="English Learning">English Learning</option>
                    <option value="Vocabulary">Vocabulary</option>
                    <option value="Writing & Essays">Writing & Essays</option>
                    <option value="Technology">Technology</option>
                    <option value="Design">Design</option>
                    <option value="Business">Business</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Prices */}
                <div className="relative flex-1 min-w-[130px]">
                  <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="w-full bg-white border border-slate-200 pl-4 pr-10 py-3 rounded-full text-sm text-slate-600 font-medium appearance-none focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-sm cursor-pointer">
                    <option value="All">All Prices</option>
                    <option value="Under ₹1000">Under ₹1000</option>
                    <option value="₹1000 - ₹1500">₹1000 - ₹1500</option>
                    <option value="Above ₹1500">Above ₹1500</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Levels */}
                <div className="relative flex-1 min-w-[130px]">
                  <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)} className="w-full bg-white border border-slate-200 pl-4 pr-10 py-3 rounded-full text-sm text-slate-600 font-medium appearance-none focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-sm cursor-pointer">
                    <option value="All">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Rating */}
                <div className="relative flex-1 min-w-[130px]">
                  <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className="w-full bg-white border border-slate-200 pl-4 pr-10 py-3 rounded-full text-sm text-slate-600 font-medium appearance-none focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-sm cursor-pointer">
                    <option value="All">All Ratings</option>
                    <option value="4.5+">4.5 & up</option>
                    <option value="4.8+">4.8 & up</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

            </div>

            {/* Sort & View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-slate-200 pb-6">
              <p className="text-sm text-slate-500 font-medium">
                Showing <span className="font-bold text-[#0F172A]">{filteredCourses.length > 0 ? 1 : 0}-{filteredCourses.length}</span> of <span className="font-bold text-[#0F172A]">{courses.length}</span> courses
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center text-sm">
                  <span className="text-slate-500 mr-3">Sort by</span>
                  <div className="relative">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-white border border-slate-200 pl-4 pr-10 py-2 rounded-full text-[#0F172A] font-medium focus:outline-none focus:border-amber-400 shadow-sm transition-colors cursor-pointer">
                      <option value="Latest">Latest</option>
                      <option value="Price: Low to High">Price: Low to High</option>
                      <option value="Price: High to Low">Price: High to Low</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Grid / List Toggles */}
                <div className="flex bg-[#f3edfd]/40 rounded-full p-1 border border-purple-100/50">
                  <button className="p-1.5 bg-white text-purple-600 shadow-sm rounded-full border border-purple-100">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
                    </svg>
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className={`grid gap-6 sm:gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredCourses.length === 0 ? (
                <div className="col-span-full py-16 text-center text-slate-500">
                  <p className="text-lg">No courses found matching your filters.</p>
                  <button onClick={() => { setSearchQuery(''); setCategoryFilter('All'); setPriceFilter('All'); setLevelFilter('All'); setRatingFilter('All'); }} className="mt-4 text-[#E59719] font-bold hover:underline">Clear all filters</button>
                </div>
              ) : (
                filteredCourses.map(course => {
                  // Calculate mock original price & discount since they don't exist in data
                  const priceNum = parseInt(course.price.replace(/[^0-9]/g, ''));
                  const originalPriceNum = Math.floor(priceNum * 1.5);
                  const originalPrice = `₹${originalPriceNum.toLocaleString()}`;
                  const discountPercent = Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100);

                  return (
                    <a href="/course-details" key={course.id} className={`bg-white rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100/60 overflow-hidden flex transition-transform hover:-translate-y-1 duration-300 group ${viewMode === 'grid' ? 'flex-col' : 'flex-col sm:flex-row'}`}>
                      
                      {/* Image Section */}
                      <div className={`relative p-2 ${viewMode === 'grid' ? 'h-48 w-full' : 'h-48 sm:h-auto sm:w-[280px] shrink-0'}`}>
                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10" onClick={(e) => e.preventDefault()}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                        </button>

                        {/* Category Badge */}
                        <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
                          {course.category}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 flex flex-col flex-grow">
                        
                        <h3 className="text-xl font-extrabold text-[#0F172A] mb-4 leading-tight group-hover:text-[#E59719] transition-colors">{course.title}</h3>
                        
                        {/* Rating & Enrollment */}
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 mb-4 pb-4 border-b border-slate-100">
                          <div className="flex items-center gap-1">
                            <span className="text-amber-500">⭐</span> {course.rating} <span className="text-slate-400 font-medium">({course.students} students)</span>
                          </div>
                          <span className="text-slate-300">|</span>
                          <div className="flex items-center gap-1">
                            <span>👥</span> {parseInt(course.students) * 15}+ enrolled
                          </div>
                        </div>

                        {/* Specs */}
                        <div className="flex flex-wrap items-center gap-2 mb-6 text-[11px] font-bold text-slate-600">
                          <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-md">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                            {course.lessons} Lessons
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-md">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            {course.hours} Hours
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-md">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                            {course.level}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center gap-3 mb-6 mt-auto">
                          <span className="text-2xl font-black text-[#E59719]">{course.price}</span>
                          <span className="text-sm font-semibold text-slate-400 line-through">{originalPrice}</span>
                          <span className="text-[10px] font-black bg-emerald-100 text-emerald-600 px-2 py-1 rounded tracking-wide">{discountPercent}% OFF</span>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-3 mt-auto">
                          <button className="flex items-center justify-center py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors pointer-events-none">
                            View Details
                          </button>
                          <button 
                            onClick={(e) => handleEnrollClick(e, course)}
                            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#E59719] text-white font-bold text-sm hover:bg-amber-600 transition-colors shadow-md shadow-amber-500/20"
                          >
                            Enroll Now &rarr;
                          </button>
                        </div>

                      </div>
                    </a>
                  );
                })
              )}
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
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />
        <TransformHero />

      </main>
      <Footer />
      <EnrollModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
        course={selectedCourse} 
      />
    </div>
  );
}
