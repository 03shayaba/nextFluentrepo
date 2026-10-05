'use client';
import Image from 'next/image';
import Link from 'next/link';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopularCourses from "@/components/PopularCourses";
import TransformHero from "@/components/TransformHero";
import React, { useState, useEffect } from 'react';
import { useWishlist } from '@/context/WishlistContext';

const CurriculumModule = ({ section, idx }) => {
  const [isOpen, setIsOpen] = useState(idx === 0);

  return (
    <div className={`border rounded-2xl overflow-hidden mb-4 transition-colors ${isOpen ? 'bg-red-50/30 border-red-200 shadow-sm' : 'bg-white border-slate-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left"
      >
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${isOpen ? 'bg-red-100 text-[#DC2626]' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>
            0{idx + 1}
          </div>
          <div>
            <h4 className={`font-bold text-base sm:text-lg transition-colors pr-4 ${isOpen ? 'text-[#DC2626]' : 'text-[#0F172A]'}`}>
              {section.title}
            </h4>
            <p className="text-sm text-slate-500 mt-1">{section.lessons} lessons</p>
          </div>
        </div>
        <div className="shrink-0 ml-2">
          <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#DC2626]' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-4 sm:px-6 pb-4 pt-2 space-y-3">
            {[...Array(section.lessons)].map((_, i) => {
              const isPreview = idx === 0 && (i === 0 || i === 1);
              return (
                <div key={i} className={`flex items-center justify-between p-3 sm:p-4 bg-white border rounded-xl transition-all shadow-sm ${isPreview ? 'border-l-4 border-l-[#DC2626] border-y-slate-100 border-r-slate-100 cursor-pointer hover:shadow-md' : 'border-slate-100 hover:border-red-200 cursor-not-allowed group'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isPreview ? 'bg-[#DC2626] text-white shadow-sm' : 'bg-slate-50 border border-slate-200 group-hover:bg-red-100 group-hover:border-red-200'}`}>
                      <svg className={`w-3.5 h-3.5 ml-0.5 ${isPreview ? 'text-white' : 'text-slate-400 group-hover:text-[#DC2626]'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className={`text-sm sm:text-base font-medium transition-colors ${isPreview ? 'text-[#0F172A]' : 'text-slate-500 group-hover:text-[#0F172A]'}`}>
                      {section.title.split(':')[0]} Lesson {i + 1}
                    </span>
                  </div>
                  {isPreview ? (
                    <button 
                      className="text-[11px] sm:text-xs font-bold text-[#DC2626] uppercase tracking-wider px-3 py-1.5 bg-red-50 hover:bg-red-100 rounded flex-shrink-0 transition-colors shadow-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle preview logic
                      }}
                    >
                      Preview
                    </button>
                  ) : (
                    <svg className="w-5 h-5 text-slate-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCopied, setIsCopied] = useState(false);
  const { toggleWishlist, isInWishlist } = useWishlist();

  const currentCourse = {
    id: 'master-spoken-english',
    title: "Master Spoken English & Achieve Fluency Bootcamp.",
    description: "This comprehensive program takes you from the fundamentals of English grammar and vocabulary to speaking fluently and confidently in real-world professional scenarios.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    category: "English",
    rating: "4.7",
    reviews: "3",
    currentPrice: "₹1,499",
    originalPrice: "₹2,499",
    discount: "40% OFF",
    lessons: "15",
    hours: "20"
  };

  const isWishlisted = isInWishlist(currentCourse.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Course Details',
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'curriculum', 'instructor', 'reviews', 'faqs'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current && current !== activeTab) {
        setActiveTab(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        
        {/* Course Detail Hero Section */}
        <section className="relative w-full bg-gradient-to-r from-red-50/50 via-white to-rose-50/60 pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-100 overflow-hidden">
          
          {/* Decorative Sparkle (Top Right) */}
          <div className="absolute top-12 right-10 lg:right-32 text-red-300/40 hidden md:block">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 2L13 9L20 11L13 13L11 20L9 13L2 11L9 9L11 2Z" />
              <path d="M19 16L19.5 18.5L22 19L19.5 19.5L19 22L18.5 19.5L16 19L18.5 18.5L19 16Z" opacity="0.6"/>
              <path d="M5 4L5.5 5.5L7 6L5.5 6.5L5 8L4.5 6.5L3 6L4.5 5.5L5 4Z" opacity="0.4"/>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center text-sm font-medium text-slate-500 gap-2 mb-8 sm:mb-10">
              <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <a href="/" className="hover:text-[#DC2626] cursor-pointer transition-colors">Home</a>
              <span className="text-slate-300">/</span>
              <a href="/courses" className="hover:text-[#DC2626] cursor-pointer transition-colors">Courses</a>
              <span className="text-slate-300">/</span>
              <span className="text-[#0F172A]">Course details</span>
            </div>

            {/* Category */}
            <div className="mb-4">
              <span className="text-[#EF4444] font-bold text-xs sm:text-sm tracking-widest uppercase">
                ENGLISH
              </span>
            </div>

            {/* Course Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0F172A] leading-[1.15] tracking-tight max-w-4xl mb-6">
              Master Spoken English & Achieve Fluency Bootcamp.
            </h1>

            {/* Course Description */}
            <p className="text-base sm:text-lg text-slate-500 max-w-3xl leading-relaxed mb-8">
              This comprehensive program takes you from the fundamentals of English grammar and vocabulary to speaking fluently and confidently in real-world professional scenarios.
            </p>

            {/* Info Badges Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
              {/* Rating */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                <svg className="w-4 h-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.7 <span className="text-slate-400 font-normal">(3)</span>
              </div>
              
              {/* Lessons */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 shadow-sm">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                15 Lesson
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 shadow-sm">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                20h 50m
              </div>

              {/* Students */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 shadow-sm">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                3 Students
              </div>

              {/* Level */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 shadow-sm">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Expert
              </div>
            </div>

            {/* Bottom Row: Creator & Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              {/* Creator Profile */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Devoin Lanee" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-0.5">Created by</p>
                  <p className="text-sm font-bold text-[#0F172A]">Devoin Lanee</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button 
                  onClick={handleShare}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-red-400 hover:text-[#DC2626] text-[#0F172A] font-semibold py-2.5 px-6 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
                >
                  {isCopied ? (
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  )}
                  {isCopied ? 'Copied!' : 'Share'}
                </button>
                <button 
                  onClick={() => toggleWishlist(currentCourse)}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 border font-semibold py-2.5 px-6 rounded-full shadow-sm transition-all duration-300 ${
                    isWishlisted 
                      ? 'bg-rose-50 border-red-300 text-[#DC2626]' 
                      : 'bg-white border-slate-200 hover:border-red-400 hover:text-red-500 text-[#0F172A]'
                  }`}
                >
                  <svg className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {isWishlisted ? 'Saved' : 'Wishlist'}
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Column: Video and Tabs */}
            <div className="flex-1 min-w-0">
              
              {/* Video Player Dummy */}
              <div className="relative w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-sm mb-8 group cursor-pointer border border-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" 
                  alt="Course Preview" 
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#DC2626] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4 mb-8 sticky top-[64px] bg-slate-50 z-30 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'curriculum', label: 'Curriculum' },
                  { id: 'instructor', label: 'Instructor' },
                  { id: 'reviews', label: 'Reviews' },
                  { id: 'faqs', label: 'FAQs' }
                ].map(tab => (
                  <button 
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`${activeTab === tab.id ? 'bg-[#DC2626] text-white shadow-sm' : 'bg-red-50/50 text-slate-600 hover:bg-red-100 border border-red-100/50'} px-5 py-2 rounded-full text-sm font-semibold transition-colors`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Overview Content */}
              <div className="space-y-8">
                
                {/* Introduction */}
                <div id="overview" className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm scroll-mt-32">
                   <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Course Overview</h3>
                   <p className="text-slate-600 leading-relaxed mb-4">
                     Welcome to the Master Spoken English & Achieve Fluency Bootcamp. This course is designed to take you from a basic understanding to complete fluency. You will learn the core mechanics of English grammar, how to naturally string together complex sentences, and build the confidence necessary to speak in any professional or casual real-world scenario.
                   </p>
                   <p className="text-slate-600 leading-relaxed">
                     By the end of this journey, you'll be able to communicate ideas clearly, actively participate in meetings, and converse with native speakers without hesitation.
                   </p>
                </div>

                {/* Learning Goals */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Learning goals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                    {[
                      "Master advanced English grammar and sentence structures.",
                      "Speak fluently in professional corporate environments.",
                      "Expand vocabulary for daily and business conversations.",
                      "Perfect pronunciation and eliminate heavy accents.",
                      "Understand native speakers and cultural nuances.",
                      "Write clear, concise, and professional emails.",
                      "Engage confidently in debates and group discussions.",
                      "Prepare effectively for IELTS/TOEFL speaking tests."
                    ].map((goal, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-600 text-sm leading-relaxed">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills you'll gain */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Skills you'll gain</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Public Speaking", "Business English", "Active Listening", "Vocabulary Expansion", "Grammar Mastery", "Pronunciation", "Creative Writing", "Interview Prep", "Confidence Building", "Debating"].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors cursor-pointer">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Curriculum / Videos */}
                <div id="curriculum" className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm scroll-mt-32">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Course curriculum</h3>
                    <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                      <span>5 modules</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>42 lessons</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>8h 35m total</span>
                    </div>
                  </div>
                  
                  <div className="space-y-0">
                    {[
                      { title: "Section 1: The Foundations of Fluency", lessons: 6 },
                      { title: "Section 2: Mastering Complex Sentences", lessons: 8 },
                      { title: "Section 3: Business & Corporate English", lessons: 10 },
                      { title: "Section 4: Perfecting Pronunciation", lessons: 7 },
                      { title: "Section 5: Real-World Conversation Practice", lessons: 11 }
                    ].map((section, idx) => (
                      <CurriculumModule key={idx} section={section} idx={idx} />
                    ))}
                  </div>
                </div>

                {/* Instructor Section */}
                <div id="instructor" className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Your Instructor</h3>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm">
                      <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Devoin Lanee" width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0F172A]">Devoin Lanee</h4>
                      <p className="text-[#EF4444] text-sm font-semibold mb-3">Senior ESL Expert & Corporate Communication Coach</p>
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                        <span className="flex items-center gap-1"><svg className="w-4 h-4 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> 4.9 Rating</span>
                        <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> 12,450 Students</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        With over 10 years of experience teaching English across the globe, Devoin specializes in helping professionals break language barriers. He has trained executives from Fortune 500 companies, enabling them to speak with authority, clarity, and confidence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div id="reviews" className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm scroll-mt-32">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-[#0F172A]">Student Reviews</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#0F172A]">4.7</span>
                      <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { name: "Sarah Jenkins", role: "Marketing Manager", review: "This course completely changed how I communicate at work. I no longer hesitate before speaking in board meetings, and my pronunciation has improved significantly. Highly recommended!", rating: 5 },
                      { name: "Rahul Sharma", role: "Software Engineer", review: "Very structured and easy to follow. The real-world scenarios were exactly what I needed to prepare for my interviews abroad. The instructor is fantastic.", rating: 5 },
                      { name: "Maria Garcia", role: "Sales Executive", review: "Great content and lots of practical exercises. I wish the curriculum had a few more advanced email templates, but overall it's a stellar program for gaining fluency.", rating: 4 }
                    ].map((review, idx) => (
                      <div key={idx} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#1F293D] text-white flex items-center justify-center font-bold text-sm shrink-0">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h5 className="font-bold text-[#0F172A] text-sm">{review.name}</h5>
                              <span className="text-xs text-slate-400">{review.role}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-red-500">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed pl-13 mt-3">{review.review}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs Section */}
                <div id="faqs" className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      { q: "Do I get lifetime access to the materials?", a: "Yes, once you enroll in the bootcamp, you have lifetime access to all current and future updates to the course content." },
                      { q: "Is this course suitable for beginners?", a: "This course is best suited for intermediate learners who know basic grammar but struggle with fluency, speaking speed, and vocabulary in professional settings." },
                      { q: "Will I get a certificate upon completion?", a: "Absolutely! You will receive an accredited certificate of fluency that you can add to your LinkedIn profile and resume." },
                      { q: "What if I'm not satisfied with the course?", a: "We offer a 30-day, no-questions-asked money-back guarantee. If you don't find value in the course, simply email us for a full refund." }
                    ].map((faq, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-2xl p-4 sm:p-5">
                        <h5 className="font-bold text-[#0F172A] mb-2">{faq.q}</h5>
                        <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Pricing Sidebar */}
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 sticky top-28">
                
                {/* Price Header */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl font-bold text-[#0F172A]">{currentCourse.currentPrice}</span>
                  <span className="text-lg text-slate-400 line-through mb-1">{currentCourse.originalPrice}</span>
                  <span className="bg-red-100 text-[#DC2626] text-xs font-bold px-2.5 py-1 rounded-full mb-2.5">{currentCourse.discount}</span>
                </div>

                {/* Buttons */}
                <div className="space-y-3 mb-6">
                  <Link href="/login" className="block">
                    <button className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 rounded-full transition-colors shadow-md cursor-pointer">
                      Add to cart
                    </button>
                  </Link>
                  <Link href="/login" className="block">
                    <button className="w-full bg-white border-2 border-slate-200 hover:border-[#DC2626] hover:text-[#DC2626] text-[#0F172A] font-bold py-3 rounded-full transition-colors cursor-pointer">
                      Buy Now
                    </button>
                  </Link>
                </div>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-2 text-sm text-emerald-600 font-medium mb-8 pb-8 border-b border-slate-100">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30-day money-back guarantee
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-bold text-[#0F172A] mb-3">This course includes:</h4>
                  
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span>Lifetime access to all lessons</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <span>Fluency guide cheat sheet</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </div>
                    <span>33 downloadable resources</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <span>Access on mobile & desktop</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <span>8 hands-on capstone projects</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Related Courses Section (Using PopularCourses) */}
        <PopularCourses />

        {/* Transform Hero Section */}
        <TransformHero />

      </main>
      <Footer />
    </div>
  );
}
