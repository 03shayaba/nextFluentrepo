'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-amber-100/70 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide mb-4">
              Assessments
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0F172A] tracking-tight mb-6 leading-tight">
              Test Your <span className="text-[#E59719]">Knowledge</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Find out where you stand. Take our free assessments to evaluate your current English proficiency and get personalized learning recommendations.
            </p>
          </div>

          {/* Quiz Cards Grid */}
          <div className="max-w-3xl mx-auto">
            {/* The "Check Your Level" Single Card */}
            <div className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300 overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center gap-8">
              
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/40 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-amber-50 rounded-full flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#E59719]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-4">
                  <span className="bg-slate-100 text-slate-600 font-bold text-xs px-3 py-1 rounded-md">20 Questions</span>
                  <span className="bg-slate-100 text-slate-600 font-bold text-xs px-3 py-1 rounded-md">15 Mins</span>
                  <span className="bg-amber-100/50 text-[#E59719] font-bold text-xs px-3 py-1 rounded-md">Highly Recommended</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 group-hover:text-[#E59719] transition-colors">
                  Check Your Level
                </h2>
                
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                  Not sure where to start? Take our comprehensive placement test to find out your exact English proficiency level (A1 to C2) and get personalized course recommendations perfectly suited for you.
                </p>
                
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg transform group-hover:-translate-y-1">
                  Start Assessment
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
