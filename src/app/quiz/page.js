'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col">
      <Header />

      <main className="flex-grow pt-12 lg:pt-20 pb-32 relative overflow-hidden bg-slate-50">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-200/30 to-transparent blur-3xl rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Enhanced Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-100 shadow-sm mb-6 animate-fade-in-up">
              <span className="flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="text-sm font-bold text-slate-700 tracking-wide">AI-Powered Assessment</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
              Discover Your True <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400 relative inline-block">
                English Level
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-amber-300/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Take our interactive, adaptive quizzes to instantly evaluate your grammar, vocabulary, and overall proficiency. Find the perfect course tailored just for you.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-600">
              <div className="flex items-center gap-2"><span className="text-xl">⏱️</span> Quick 10-Min Tests</div>
              <div className="flex items-center gap-2"><span className="text-xl">🎯</span> Instant Results</div>
              <div className="flex items-center gap-2"><span className="text-xl">📈</span> Personalized Path</div>
            </div>
          </div>

          {/* Premium Quiz Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
            
            {/* Card 1 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/40 border border-white hover:border-amber-200 transition-all duration-500 hover:-translate-y-3 overflow-hidden text-left flex flex-col">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl group-hover:bg-amber-400/30 transition-all duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/30 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>

              <div className="inline-flex bg-amber-100 text-amber-700 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-max">Complete Assessment</div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">General Placement</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                A comprehensive test checking your grammar, reading, and vocabulary to find your exact CEFR level (A1-C2).
              </p>
              
              <button className="w-full bg-slate-900 text-white hover:bg-amber-500 font-bold py-4 rounded-2xl transition-colors duration-300 shadow-md flex items-center justify-center gap-2">
                Start Test <span className="text-lg">→</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/40 border border-white hover:border-blue-200 transition-all duration-500 hover:-translate-y-3 overflow-hidden text-left flex flex-col">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </div>

              <div className="inline-flex bg-blue-100 text-blue-700 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-max">Targeted Skill</div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Grammar Check</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                Identify your grammatical weak points. Test your knowledge of advanced tenses and complex structures.
              </p>
              
              <button className="w-full bg-slate-900 text-white hover:bg-blue-600 font-bold py-4 rounded-2xl transition-colors duration-300 shadow-md flex items-center justify-center gap-2">
                Start Test <span className="text-lg">→</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/40 border border-white hover:border-emerald-200 transition-all duration-500 hover:-translate-y-3 overflow-hidden text-left flex flex-col">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-all duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              </div>

              <div className="inline-flex bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-max">Targeted Skill</div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Vocabulary Size</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                Measure your active vocabulary range. From everyday words to high-level academic terminology.
              </p>
              
              <button className="w-full bg-slate-900 text-white hover:bg-emerald-600 font-bold py-4 rounded-2xl transition-colors duration-300 shadow-md flex items-center justify-center gap-2">
                Start Test <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-lg border border-slate-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">How it works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-amber-100 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-amber-100 group-hover:scale-110 transition-transform duration-300">
                  📝
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">1. Take the Quiz</h4>
                <p className="text-slate-500 text-sm">Answer a series of carefully crafted questions designed by experts.</p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-amber-100 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-amber-100 group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">2. Get Your Score</h4>
                <p className="text-slate-500 text-sm">Receive a detailed breakdown of your strengths and areas for improvement.</p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-amber-100 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-amber-100 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">3. Start Learning</h4>
                <p className="text-slate-500 text-sm">Get matched with the perfect course to take your skills to the next level.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
