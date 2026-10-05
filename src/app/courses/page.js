'use client';
import Image from 'next/image';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import TransformHero from "@/components/TransformHero";
import EnrollModal from "@/components/EnrollModal";
import Newsletter from "@/components/Newsletter";

const CustomDropdown = ({ value, onChange, options, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => opt.value === value)?.label || value;

  return (
    <div className="relative w-full" ref={ref}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} flex items-center justify-between select-none transition-colors ${isOpen ? 'ring-1 ring-red-400 border-red-400 bg-slate-50' : ''}`}
      >
        <span className="truncate pr-2">{selectedLabel}</span>
        <svg className={`w-4 h-4 text-slate-400 transform transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div className="absolute z-[100] w-full mt-1.5 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-1 animate-in fade-in slide-in-from-top-2 duration-200 max-h-60 overflow-auto">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`px-3.5 py-2.5 text-xs sm:text-sm font-semibold cursor-pointer transition-colors ${
                value === opt.value 
                  ? 'bg-red-50 text-[#DC2626]' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const courses = [
  {
    id: 1,
    image: "/course1.avif",
    price: "₹799",
    category: "Basic English",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    instructorName: "Jill King",
    title: "Basic English Grammar & Vocabulary Foundation",
    description: "Master fundamental English grammar, daily conversation sentence patterns, essential vocabulary, and pronunciation basics.",
    students: "1,240",
    lessons: "16",
    hours: "5.5",
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 2,
    image: "/course2.avif",
    price: "₹999",
    category: "Intermediate English",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    instructorName: "Jill King",
    title: "Intermediate English Tenses & Sentence Fluency",
    description: "Master all English tenses, complex sentence structures, and natural speaking patterns for seamless everyday fluency.",
    students: "980",
    lessons: "20",
    hours: "7.0",
    level: "Intermediate",
    rating: 4.7
  },
  {
    id: 3,
    image: "/course3.avif",
    price: "₹1,299",
    category: "Advanced English",
    instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    instructorName: "Ana Murphy",
    title: "Advanced English Expressions, Idioms & Nuance",
    description: "Elevate your vocabulary with native idioms, phrasal verbs, advanced expressions, and subtle conversational nuances.",
    students: "820",
    lessons: "24",
    hours: "8.5",
    level: "Advanced",
    rating: 4.9
  },
  {
    id: 4,
    image: "/course4.avif",
    price: "₹1,499",
    category: "Spoken English",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    instructorName: "John Miller",
    title: "Spoken English & Real-Time Conversation Practice",
    description: "Practice real-life conversations, accent reduction, active listening, and spontaneous speaking with interactive drills.",
    students: "2,450",
    lessons: "30",
    hours: "12.0",
    level: "All Levels",
    rating: 4.9
  },
  {
    id: 5,
    image: "/course5.avif",
    price: "₹1,999",
    category: "IELTS",
    instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    instructorName: "Sarah Smith",
    title: "Complete IELTS Academic & General Band 8+ Masterclass",
    description: "Comprehensive preparation covering Listening, Reading, Writing, and Speaking modules with proven Band 8+ strategies.",
    students: "3,120",
    lessons: "40",
    hours: "18.0",
    level: "Advanced",
    rating: 4.9
  },
  {
    id: 6,
    image: "/course6.avif",
    price: "₹1,199",
    category: "Personality & Communication",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    instructorName: "Mike Johnson",
    title: "Personality Development & Interpersonal Communication",
    description: "Develop strong body language, executive presence, active listening skills, and impactful interpersonal communication.",
    students: "1,560",
    lessons: "22",
    hours: "9.0",
    level: "Intermediate",
    rating: 4.8
  },
  {
    id: 7,
    image: "/t1.avif",
    price: "₹1,299",
    category: "Public Speaking",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    instructorName: "Dr. Sarah Khan",
    title: "Public Speaking & Presentation Masterclass",
    description: "Overcome stage fear, structure compelling speeches, deliver powerful presentations, and captivate any audience.",
    students: "1,140",
    lessons: "18",
    hours: "6.5",
    level: "All Levels",
    rating: 4.8
  },
  {
    id: 8,
    image: "/t2.avif",
    price: "₹1,499",
    category: "Business English",
    instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    instructorName: "Elena Rostova",
    title: "Business English Pro: Corporate Email & Speech",
    description: "Master professional email writing, high-stakes negotiation skills, corporate terminology, and formal business speech.",
    students: "1,890",
    lessons: "28",
    hours: "11.0",
    level: "Intermediate",
    rating: 4.9
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
        <section className="relative bg-[#0B1120] pt-12 pb-12 sm:pt-24 sm:pb-20 border-b border-white/10 overflow-hidden z-0 select-none">
          
          {/* Dynamic Background Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none z-[-1]"></div>

          {/* Decorative Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-[-1]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="courses-light-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#courses-light-grid)"/>
          </svg>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
              
              {/* Left Side Header */}
              <div className="relative max-w-2xl">
                
                {/* Handwritten Text & Arrow */}
                

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/15 to-rose-500/15 backdrop-blur-md border border-red-500/30 px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 text-[#EF4444] font-bold text-xs tracking-[0.15em] uppercase shadow-[0_0_15px_rgba(220,38,38,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Master Your Skills
                </div>
                
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.15] drop-shadow-xl">
                  Browse Our <br className="hidden sm:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-rose-400 to-amber-300 drop-shadow-sm">Premium Courses</span>
                </h1>
                
                <div className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-300 gap-2.5 bg-white/5 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 shadow-lg shadow-black/20">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <a href="/" className="hover:text-red-400 cursor-pointer transition-colors">Home</a>
                  <span className="text-white/30">/</span>
                  <span className="text-white font-semibold">Courses</span>
                </div>
              </div>
              
              {/* Right Side Stats Grid (3 Side-by-Side Compact Cards on Mobile & Responsive Desktop) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full lg:w-auto mt-2 lg:mt-0">
                
                {/* Stat 1 */}
                <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-xl rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 text-center sm:text-left transform hover:-translate-y-1.5 transition-all duration-300 hover:bg-white/[0.08] hover:border-red-500/40 group relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-red-500/20 flex items-center justify-center text-red-400 mx-auto sm:mx-0 mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <div>
                    <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-red-400 transition-colors drop-shadow-md leading-tight">9+</h2>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1 leading-tight">Online Courses</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-xl rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 text-center sm:text-left transform hover:-translate-y-1.5 transition-all duration-300 hover:bg-white/[0.08] hover:border-blue-500/40 group relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mx-auto sm:mx-0 mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-blue-400 transition-colors drop-shadow-md leading-tight">6+</h2>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1 leading-tight">Expert Mentors</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-xl rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 text-center sm:text-left transform hover:-translate-y-1.5 transition-all duration-300 hover:bg-white/[0.08] hover:border-emerald-500/40 group relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto sm:mx-0 mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  
                  <div>
                    <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-emerald-400 transition-colors drop-shadow-md leading-tight">10k+</h2>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1 leading-tight">Active Learners</p>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </section>

        {/* Filters & Content Section */}
        <section className="py-8 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Filters Bar */}
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">

              {/* Search */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <svg className="w-4.5 h-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search course..."
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-2xl sm:rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-xs text-slate-700 font-medium"
                />
              </div>

              {/* Dropdowns Grid (2 Columns on Mobile, 4 Columns on Desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 flex-[2]">
                {/* Categories */}
                <div className="relative">
                  <CustomDropdown 
                    value={categoryFilter}
                    onChange={setCategoryFilter}
                    className="w-full bg-white border border-slate-200 px-3.5 py-2.5 sm:py-3 rounded-2xl sm:rounded-full text-xs sm:text-sm text-slate-700 font-semibold shadow-xs cursor-pointer"
                    options={[
                      { value: "All", label: "All Categories" },
                      { value: "Basic English", label: "Basic English" },
                      { value: "Intermediate English", label: "Intermediate English" },
                      { value: "Advanced English", label: "Advanced English" },
                      { value: "Spoken English", label: "Spoken English" },
                      { value: "IELTS", label: "IELTS" },
                      { value: "Business English", label: "Business English" },
                      { value: "Public Speaking", label: "Public Speaking" }
                    ]}
                  />
                </div>

                {/* Prices */}
                <div className="relative">
                  <CustomDropdown 
                    value={priceFilter}
                    onChange={setPriceFilter}
                    className="w-full bg-white border border-slate-200 px-3.5 py-2.5 sm:py-3 rounded-2xl sm:rounded-full text-xs sm:text-sm text-slate-700 font-semibold shadow-xs cursor-pointer"
                    options={[
                      { value: "All", label: "All Prices" },
                      { value: "Under ₹1000", label: "Under ₹1000" },
                      { value: "₹1000 - ₹1500", label: "₹1000 - ₹1500" },
                      { value: "Above ₹1500", label: "Above ₹1500" }
                    ]}
                  />
                </div>

                {/* Levels */}
                <div className="relative">
                  <CustomDropdown 
                    value={levelFilter}
                    onChange={setLevelFilter}
                    className="w-full bg-white border border-slate-200 px-3.5 py-2.5 sm:py-3 rounded-2xl sm:rounded-full text-xs sm:text-sm text-slate-700 font-semibold shadow-xs cursor-pointer"
                    options={[
                      { value: "All", label: "All Levels" },
                      { value: "Beginner", label: "Beginner" },
                      { value: "Intermediate", label: "Intermediate" },
                      { value: "Advanced", label: "Advanced" }
                    ]}
                  />
                </div>

                {/* Rating */}
                <div className="relative">
                  <CustomDropdown 
                    value={ratingFilter}
                    onChange={setRatingFilter}
                    className="w-full bg-white border border-slate-200 px-3.5 py-2.5 sm:py-3 rounded-2xl sm:rounded-full text-xs sm:text-sm text-slate-700 font-semibold shadow-xs cursor-pointer"
                    options={[
                      { value: "All", label: "All Ratings" },
                      { value: "4.5+", label: "4.5 & up" },
                      { value: "4.8+", label: "4.8 & up" }
                    ]}
                  />
                </div>
              </div>

            </div>

            {/* Sort & View Options Header Bar */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-slate-200/80 gap-2">
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Showing <span className="font-bold text-[#0F172A]">{filteredCourses.length > 0 ? `1-${filteredCourses.length}` : 0}</span> of <span className="font-bold text-[#0F172A]">{courses.length}</span>
              </p>

              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center text-xs sm:text-sm">
                  <span className="text-slate-500 mr-2 hidden sm:inline">Sort by</span>
                  <div className="relative min-w-[140px]">
                    <CustomDropdown 
                      value={sortBy}
                      onChange={setSortBy}
                      className="bg-white border border-slate-200 px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-full text-xs sm:text-sm text-[#0F172A] font-bold shadow-xs cursor-pointer w-full"
                      options={[
                        { value: "Latest", label: "Latest" },
                        { value: "Price: Low to High", label: "Price: Low to High" },
                        { value: "Price: High to Low", label: "Price: High to Low" }
                      ]}
                    />
                  </div>
                </div>

                {/* Grid / List Toggles - Hidden on mobile screens */}
                <div className="hidden sm:flex bg-slate-200/60 rounded-full p-0.5 border border-slate-200">
                  <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-white text-red-600 shadow-xs font-bold' : 'text-slate-500 hover:text-slate-800'}`} aria-label="Grid View">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
                    </svg>
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-full transition-colors ${viewMode === 'list' ? 'bg-white text-red-600 shadow-xs font-bold' : 'text-slate-500 hover:text-slate-800'}`} aria-label="List View">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                  <button onClick={() => { setSearchQuery(''); setCategoryFilter('All'); setPriceFilter('All'); setLevelFilter('All'); setRatingFilter('All'); }} className="mt-4 text-[#DC2626] font-bold hover:underline">Clear all filters</button>
                </div>
              ) : (
                filteredCourses.map(course => {
                  // Calculate mock original price & discount since they don't exist in data
                  const priceNum = parseInt(course.price.replace(/[^0-9]/g, ''));
                  const originalPriceNum = Math.floor(priceNum * 1.5);
                  const originalPrice = `₹${originalPriceNum.toLocaleString()}`;
                  const discountPercent = Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100);

                  if (viewMode === 'list') {
                    return (
                      <a 
                        href="/course-details" 
                        key={course.id} 
                        className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 overflow-hidden flex flex-row items-stretch group transition-all duration-300 hover:-translate-y-1 hover:border-red-200"
                      >
                        {/* List Image Left Column */}
                        <div className="relative w-28 min-h-[140px] sm:w-[240px] md:w-[280px] shrink-0 overflow-hidden bg-slate-900 flex items-center justify-center">
                          <Image 
                            src={course.image} 
                            alt={course.title} 
                            width={280}
                            height={140}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-slate-950/85 backdrop-blur-md text-white border border-white/20 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md flex items-center gap-1 z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse"></span>
                            <span className="truncate max-w-[80px] sm:max-w-none">{course.category}</span>
                          </div>

                          {/* Heart Icon */}
                          <button 
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6.5 h-6.5 sm:w-8 sm:h-8 bg-slate-950/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg text-slate-200 hover:text-red-400 transition-all z-10" 
                            onClick={(e) => e.preventDefault()} 
                            aria-label="Save to Wishlist"
                          >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                          </button>
                        </div>

                        {/* List Content Right Column */}
                        <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between bg-white text-slate-900 min-w-0">
                          <div>
                            {/* Title */}
                            <h3 className="text-xs sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#DC2626] transition-colors mb-1 sm:mb-2 line-clamp-2">
                              {course.title}
                            </h3>

                            {/* Description - hidden on mobile screens to keep list row compact */}
                            <p className="hidden sm:block text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-3 line-clamp-2">
                              {course.description}
                            </p>

                            {/* Rating & Enrolled Row */}
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-600 mb-2 sm:mb-3">
                              <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded border border-amber-200/80 font-bold">
                                <svg className="w-3 h-3 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                {course.rating}
                              </div>
                              <span className="hidden xs:inline text-slate-500 font-medium text-[10px] sm:text-[11px]">({course.students})</span>
                              <span className="hidden xs:inline text-slate-300">•</span>
                              <span className="text-slate-600 text-[10px] sm:text-[11px] font-medium">👥 <strong className="text-slate-900">{course.students}+</strong></span>
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-slate-50 border border-slate-200/80 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl mb-2 sm:mb-4 text-center max-w-md">
                              <div className="flex flex-col items-center justify-center p-0.5">
                                <div className="flex items-center gap-1 text-slate-500 text-[9px] sm:text-[10px] uppercase font-bold mb-0.5">
                                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                  <span className="hidden sm:inline">Lessons</span>
                                </div>
                                <span className="text-[10px] sm:text-xs font-extrabold text-slate-900">{course.lessons} <span className="sm:hidden text-[9px]">L</span></span>
                              </div>
                              <div className="flex flex-col items-center justify-center p-0.5 border-x border-slate-200/70">
                                <div className="flex items-center gap-1 text-slate-500 text-[9px] sm:text-[10px] uppercase font-bold mb-0.5">
                                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                  <span className="hidden sm:inline">Duration</span>
                                </div>
                                <span className="text-[10px] sm:text-xs font-extrabold text-slate-900">{course.hours} H</span>
                              </div>
                              <div className="flex flex-col items-center justify-center p-0.5">
                                <div className="flex items-center gap-1 text-slate-500 text-[9px] sm:text-[10px] uppercase font-bold mb-0.5">
                                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                                  <span className="hidden sm:inline">Level</span>
                                </div>
                                <span className="text-[10px] sm:text-xs font-extrabold text-slate-900 truncate max-w-full px-1">{course.level}</span>
                              </div>
                            </div>
                          </div>

                          {/* Pricing & Buttons Row */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pt-2 sm:pt-3 border-t border-slate-100">
                            <div className="flex items-baseline gap-1.5 sm:gap-2">
                              <span className="text-base sm:text-2xl font-black text-[#DC2626] tracking-tight">{course.price}</span>
                              <span className="text-[10px] sm:text-xs font-bold text-slate-400 line-through">{originalPrice}</span>
                              <span className="text-[9px] sm:text-[10px] font-black bg-emerald-100 text-emerald-700 border border-emerald-200/80 px-1.5 py-0.5 rounded uppercase">{discountPercent}% OFF</span>
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-2.5">
                              <button className="hidden sm:block flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-extrabold text-xs hover:bg-slate-900 hover:text-white transition-all shadow-xs">
                                Details
                              </button>
                                <button 
                                  onClick={(e) => handleEnrollClick(e, course)}
                                  className="w-full sm:w-auto px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:from-[#B91C1C] hover:to-[#DC2626] text-white font-extrabold text-xs shadow-sm shadow-red-500/20 hover:shadow-lg transition-all cursor-pointer text-center"
                                >
                                  Enroll Now &rarr;
                                </button>
                              </div>
                            </div>

                          </div>
                        </a>
                      );
                    }

                  // Default Grid Mode Rendering
                  return (
                    <a href="/course-details" key={course.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200/90 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200">
                      
                      {/* Top Header Image & Dark Gradient Title Container */}
                      <div className="relative w-full h-64 bg-[#0A0710] overflow-hidden">
                        <div className="w-full h-full overflow-hidden relative bg-[#0A0710]">
                          <Image src={course.image} alt={course.title} width={400} height={250} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out block select-none transform-gpu" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0710] via-[#0A0710]/60 to-transparent pointer-events-none"></div>
                        </div>
                        
                        {/* Glass Category Badge */}
                        <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                          <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></span>
                          {course.category}
                        </div>

                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 w-9 h-9 bg-slate-950/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-xl text-slate-200 hover:text-red-400 hover:scale-110 transition-all z-20" onClick={(e) => e.preventDefault()} aria-label="Save to Wishlist">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                        </button>

                        {/* Title overlayed over bottom of dark image gradient */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 pt-10 bg-gradient-to-t from-[#0A0710] via-[#0A0710]/90 to-transparent z-10">
                          <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug group-hover:text-red-300 transition-colors line-clamp-2">{course.title}</h3>
                        </div>
                      </div>

                      {/* LOWER SECTION: CLEAN PURE WHITE BACKGROUND */}
                      <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white text-slate-900">
                        
                        {/* Course Description Paragraph */}
                        <p className="text-slate-800 text-xs sm:text-[13px] font-medium leading-relaxed mb-3.5 line-clamp-2">{course.description}</p>

                        {/* Rating & Enrolled Row */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 mb-3.5">
                          <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-md border border-amber-200/80 font-bold shadow-sm">
                            <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            {course.rating}
                          </div>
                          <span className="text-slate-500 font-medium text-[11px]">({course.students} reviews)</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-600 text-[11px] font-medium">👥 <strong className="text-slate-900">{course.students}+</strong> learners</span>
                        </div>

                        {/* White Spec Grid */}
                        <div className="grid grid-cols-3 gap-1.5 bg-slate-50 border border-slate-200/80 p-2.5 rounded-2xl mb-4 text-center shadow-xs">
                          <div className="flex flex-col items-center justify-center p-1">
                            <div className="flex items-center gap-1 text-slate-500 text-[10px] uppercase font-bold mb-0.5">
                              <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                              <span>Lessons</span>
                            </div>
                            <span className="text-xs font-extrabold text-slate-900">{course.lessons}</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-1 border-x border-slate-200/70">
                            <div className="flex items-center gap-1 text-slate-500 text-[10px] uppercase font-bold mb-0.5">
                              <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                              <span>Duration</span>
                            </div>
                            <span className="text-xs font-extrabold text-slate-900">{course.hours} Hrs</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-1">
                            <div className="flex items-center gap-1 text-slate-500 text-[10px] uppercase font-bold mb-0.5">
                              <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                              <span>Level</span>
                            </div>
                            <span className="text-xs font-extrabold text-slate-900 truncate max-w-full px-1">{course.level}</span>
                          </div>
                        </div>

                        {/* Value Add Badges */}
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mb-4">
                          <span className="text-emerald-600 flex items-center gap-1">
                            <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                            Certificate Included
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-600">⚡ Lifetime Access</span>
                        </div>

                        {/* Price & Savings Bar */}
                        <div className="flex items-baseline gap-2 mb-5 mt-auto pt-1">
                          <span className="text-2xl font-black text-[#DC2626] tracking-tight">{course.price}</span>
                          <span className="text-xs font-bold text-slate-400 line-through">{originalPrice}</span>
                          <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 border border-emerald-200/80 px-2 py-0.5 rounded tracking-wider uppercase ml-auto">{discountPercent}% OFF</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2.5 mt-auto">
                          <button className="flex items-center justify-center py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-extrabold text-xs hover:bg-slate-900 hover:text-white transition-all duration-300 pointer-events-none shadow-sm">
                            View Details
                          </button>
                          <button 
                            onClick={(e) => handleEnrollClick(e, course)}
                            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:from-[#B91C1C] hover:to-[#DC2626] text-white font-extrabold text-xs shadow-md shadow-red-500/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
              <button className="bg-white border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white font-semibold py-2 px-6 text-sm rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
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
        <Newsletter />

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
