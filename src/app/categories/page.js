'use client';
import Image from 'next/image';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    title: "Business English",
    courses: 24,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "IELTS Preparation",
    courses: 18,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Grammar Mastery",
    courses: 32,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Spoken English & Fluency",
    courses: 45,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Creative Writing",
    courses: 14,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Corporate Communication",
    courses: 21,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    id: 7,
    title: "Vocabulary Building",
    courses: 28,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Public Speaking",
    courses: 11,
    icon: (
      <svg className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    )
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        
        {/* Categories Hero Banner - Upgraded Dark Theme Version */}
        <section className="relative w-full bg-[#0B1120] pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden z-0 select-none border-b border-[#1E293B]">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/15 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          {/* Decorative Grid SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="categories-hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#categories-hero-grid)" />
          </svg>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                
                {/* Breadcrumb */}
                <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm font-medium text-slate-400 gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <a href="/" className="hover:text-white transition-colors">Home</a>
                  <span className="text-slate-500">/</span>
                  <span className="text-white">Categories</span>
                </div>

                <div className="inline-block bg-red-500/10 border border-red-500/20 text-[#EF4444] font-bold text-xs sm:text-sm px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-6 shadow-sm">
                  ✨ Find Your Path
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-extrabold text-white tracking-tight mb-4 sm:mb-6 leading-tight sm:leading-[1.1]">
                  Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-400">Categories</span>
                </h1>
                
                <p className="text-xs sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-10 font-normal">
                  Find the perfect curriculum tailored to your specific English learning goals. Whether you want to ace an exam or dominate the boardroom, we have a path for you.
                </p>

                {/* Quick Stats in Hero */}
                <div className="grid grid-cols-3 gap-2 sm:gap-8 border-t border-slate-800/80 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center sm:text-left">
                  <div className="p-2 sm:p-0 bg-slate-900/40 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-800/50 sm:border-none">
                    <h4 className="text-xl sm:text-3xl font-black text-white">8+</h4>
                    <p className="text-[10px] sm:text-sm text-slate-400 font-medium mt-0.5 sm:mt-1">Learning Tracks</p>
                  </div>
                  <div className="p-2 sm:p-0 bg-slate-900/40 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-800/50 sm:border-none">
                    <h4 className="text-xl sm:text-3xl font-black text-white">150+</h4>
                    <p className="text-[10px] sm:text-sm text-slate-400 font-medium mt-0.5 sm:mt-1">Total Courses</p>
                  </div>
                  <div className="p-2 sm:p-0 bg-slate-900/40 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-800/50 sm:border-none">
                    <h4 className="text-xl sm:text-3xl font-black text-white">10k+</h4>
                    <p className="text-[10px] sm:text-sm text-slate-400 font-medium mt-0.5 sm:mt-1">Active Students</p>
                  </div>
                </div>
              </div>

              {/* Right Image/Visual */}
              <div className="flex-1 w-full max-w-lg lg:max-w-none relative hidden md:block">
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-rose-400 rounded-[3rem] rotate-3 opacity-30 blur-sm"></div>
                  <div className="absolute inset-0 bg-[#0F172A] rounded-[3rem] -rotate-3 overflow-hidden border-4 border-slate-700 shadow-2xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                      alt="Students Learning" 
                      width={600}
                      height={600}
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-[#0F172A] p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce border border-slate-700">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center shrink-0 border border-red-500/20">
                      <svg className="w-6 h-6 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Top Rated</p>
                      <p className="text-xs text-slate-400 font-medium">Excellence</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Categories Grid Section */}
        <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20 relative">
              



              <div className="inline-flex items-center gap-2 bg-red-100/70 border border-red-200/50 px-4 py-1.5 rounded-full mb-6">
                <span className="text-[#EF4444] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  ⭐ Top Categories
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-5 leading-tight">
                Choose your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-400">journey</span>
              </h2>
              
              <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Pick a category to see all specialized courses available for your skill level. From beginners to advanced, we have the perfect path tailored just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {categories.map((cat, i) => (
                <a 
                  key={cat.id} 
                  href="/courses"
                  className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 hover:border-red-200 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
                >
                  {/* Top glowing edge on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 w-full flex flex-col items-center">
                    
                    {/* Centered Icon with Background Pop */}
                    <div className="w-20 h-20 rounded-3xl bg-slate-50 text-[#DC2626] flex items-center justify-center transition-all duration-500 group-hover:bg-[#DC2626] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(220,38,38,0.4)] group-hover:-translate-y-2 mb-6">
                      <div className="scale-110">
                        {cat.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#DC2626] transition-colors leading-tight">
                      {cat.title}
                    </h3>

                    {/* Course Count Badge */}
                    <div className="bg-slate-50 text-slate-500 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-slate-100 group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-200 transition-colors duration-300 mb-4">
                      {cat.courses} Courses
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed max-w-[200px] mx-auto opacity-80">
                      Master specialized skills with our industry-leading {cat.title.toLowerCase()} curriculum.
                    </p>
                    
                    {/* Static Clean Link */}
                    <div className="mt-auto flex items-center justify-center gap-2 text-[#DC2626] font-bold text-sm bg-red-50/50 hover:bg-red-100 px-6 py-2.5 rounded-full transition-colors w-full">
                      <span>Explore Path</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQs Section - Using Shared Dark Theme Component */}
        <FAQ faqs={[
          { q: "How do I choose the right category?", a: "If you're looking to improve workplace communication, Business English is ideal. If you're preparing for an exam, check out IELTS Preparation. For general speaking confidence, Spoken English & Fluency is our most popular choice." },
          { q: "Can I switch categories later?", a: "Yes! You can enroll in courses across multiple categories at any time. Your progress is saved independently for each course." },
          { q: "Are the courses live or pre-recorded?", a: "We offer a mix of both. Most foundational grammar and vocabulary courses are self-paced, while our Fluency and Public Speaking courses feature interactive live sessions." },
          { q: "Do I get a certificate?", a: "Absolutely. Upon successful completion of any course within these categories, you will receive an accredited certificate that you can add to your resume." }
        ]} subtitle="Got Questions?" />

        {/* Newsletter Section */}
        <Newsletter />

      </main>
      <Footer />
    </div>
  );
}
