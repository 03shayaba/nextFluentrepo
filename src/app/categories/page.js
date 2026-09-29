'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
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

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`bg-[#FAFBFD] border rounded-2xl px-6 py-5 sm:px-8 transition-colors cursor-pointer ${isOpen ? 'border-[#E59719]' : 'border-slate-200 hover:border-amber-200'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-lg font-bold text-[#0F172A] flex items-start sm:items-center gap-3">
          <span className="text-[#E59719] font-black shrink-0">Q.</span>
          <span>{faq.q}</span>
        </h4>
        <div className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-slate-600 leading-relaxed ml-0 sm:ml-7 pt-1">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        
        {/* Categories Hero Banner - Upgraded for more "Jaan" (Minimal Light Version) */}
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-amber-50/50 pt-20 pb-28 overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E59719]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-200/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                
                {/* Breadcrumb */}
                <div className="flex items-center justify-center lg:justify-start text-sm font-medium text-slate-500 gap-2 mb-8">
                  <svg className="w-4 h-4 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <a href="/" className="hover:text-[#0F172A] transition-colors">Home</a>
                  <span className="text-slate-400">/</span>
                  <span className="text-[#0F172A]">Categories</span>
                </div>

                <div className="inline-block bg-[#E59719]/10 border border-[#E59719]/20 text-[#E59719] font-bold text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
                  ✨ Find Your Path
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#0F172A] tracking-tight mb-6 leading-[1.1]">
                  Explore Our <span className="text-[#E59719]">Categories</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                  Find the perfect curriculum tailored to your specific English learning goals. Whether you want to ace an exam or dominate the boardroom, we have a path for you.
                </p>

                {/* Quick Stats in Hero */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-200 pt-8 mt-8">
                  <div>
                    <h4 className="text-3xl font-black text-[#0F172A]">8+</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">Learning Tracks</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-[#0F172A]">150+</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">Total Courses</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-[#0F172A]">10k+</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">Active Students</p>
                  </div>
                </div>
              </div>

              {/* Right Image/Visual */}
              <div className="flex-1 w-full max-w-lg lg:max-w-none relative hidden md:block">
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E59719] to-amber-300 rounded-[3rem] rotate-3 opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 bg-white rounded-[3rem] -rotate-3 overflow-hidden border-8 border-white shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                      alt="Students Learning" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce border border-slate-100">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0F172A]">Top Rated</p>
                      <p className="text-xs text-slate-500 font-medium">Excellence</p>
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
              {/* Decorative Handwritten Text Left */}
              <div 
                className="absolute -left-12 -top-6 rotate-[-10deg] text-orange-500 font-medium text-lg leading-tight hidden lg:block"
                style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
              >
                Find your perfect fit!
                <svg className="w-8 h-8 text-orange-400 absolute -bottom-5 left-10 rotate-[-30deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Decorative Handwritten Text Right */}
              <div 
                className="absolute -right-12 top-0 rotate-[8deg] text-blue-500 font-medium text-lg leading-tight hidden lg:block"
                style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
              >
                Start Learning
                <svg className="w-10 h-6 text-blue-400 mt-1 ml-2" viewBox="0 0 100 20" fill="none">
                  <path d="M5 15Q50 0 95 15" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              <div className="inline-flex items-center gap-2 bg-amber-100/70 border border-amber-200/50 px-4 py-1.5 rounded-full mb-6">
                <span className="text-[#E59719] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  ⭐ Top Categories
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-5 leading-tight">
                Choose your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E59719] to-amber-400">journey</span>
              </h2>
              
              <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Pick a category to see all specialized courses available for your skill level. From beginners to advanced, we have the perfect path tailored just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {categories.map((cat, i) => (
                <a 
                  key={cat.id} 
                  href="/courses"
                  className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(229,151,25,0.1)] hover:-translate-y-2 hover:border-amber-200 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
                >
                  {/* Top glowing edge on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E59719] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 w-full flex flex-col items-center">
                    
                    {/* Centered Icon with Background Pop */}
                    <div className="w-20 h-20 rounded-3xl bg-slate-50 text-[#E59719] flex items-center justify-center transition-all duration-500 group-hover:bg-[#E59719] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(229,151,25,0.4)] group-hover:-translate-y-2 mb-6">
                      <div className="scale-110">
                        {cat.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#E59719] transition-colors leading-tight">
                      {cat.title}
                    </h3>

                    {/* Course Count Badge */}
                    <div className="bg-slate-50 text-slate-500 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-slate-100 group-hover:bg-amber-100 group-hover:text-amber-700 group-hover:border-amber-200 transition-colors duration-300 mb-4">
                      {cat.courses} Courses
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed max-w-[200px] mx-auto opacity-80">
                      Master specialized skills with our industry-leading {cat.title.toLowerCase()} curriculum.
                    </p>
                    
                    {/* Static Clean Link */}
                    <div className="mt-auto flex items-center justify-center gap-2 text-[#E59719] font-bold text-sm bg-amber-50/50 hover:bg-amber-100 px-6 py-2.5 rounded-full transition-colors w-full">
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

        {/* FAQs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#E59719] font-bold text-sm tracking-widest uppercase mb-3 block">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "How do I choose the right category?", a: "If you're looking to improve workplace communication, Business English is ideal. If you're preparing for an exam, check out IELTS Preparation. For general speaking confidence, Spoken English & Fluency is our most popular choice." },
                { q: "Can I switch categories later?", a: "Yes! You can enroll in courses across multiple categories at any time. Your progress is saved independently for each course." },
                { q: "Are the courses live or pre-recorded?", a: "We offer a mix of both. Most foundational grammar and vocabulary courses are self-paced, while our Fluency and Public Speaking courses feature interactive live sessions." },
                { q: "Do I get a certificate?", a: "Absolutely. Upon successful completion of any course within these categories, you will receive an accredited certificate that you can add to your resume." }
              ].map((faq, idx) => (
                <FaqItem key={idx} faq={faq} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
