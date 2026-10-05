'use client';

import Link from 'next/link';

export default function TrendingCategories() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 font-sans border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="text-amber-500">⭐</span> TRENDING CATEGORIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Browse Trending <span className="text-[#DC2626]">Categories</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Explore high-demand learning paths designed to build real-world skills
          </p>
        </div>

        {/* Top Featured 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Spoken English Card */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 relative overflow-hidden flex flex-col h-full group">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-rose-500 shadow-md relative group-hover:scale-105 transition-transform">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 0014 0h-2z"/><path d="M11 18v3h2v-3h-2z"/></svg>
                   <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white"></div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                     <span className="bg-rose-50 text-rose-600 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-rose-100">🔥 Most Popular</span>
                     <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-slate-200">15 Courses</span>
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Spoken English</h3>
                 </div>
              </div>
              <div className="hidden sm:flex bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-full items-center gap-2 shadow-sm">
                 <div className="flex gap-[3px] items-end h-3">
                   <div className="w-1 bg-rose-500 h-2 rounded-full"></div>
                   <div className="w-1 bg-amber-500 h-3 rounded-full"></div>
                   <div className="w-1 bg-emerald-500 h-1.5 rounded-full"></div>
                 </div>
                 Live Speaking Labs
              </div>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-[15px] mb-6 max-w-[420px] font-medium leading-relaxed">
              Daily fluency, real-life conversations & public speaking confidence. Practice 1-on-1 with certified coaches and interactive AI pronunciation feedback.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-bold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm bg-white"><span className="text-rose-500 text-sm">👩‍🏫</span> 1-on-1 Live Practice</span>
              <span className="text-xs font-bold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm bg-white"><span className="text-amber-500 text-sm">✨</span> AI Speech Coach</span>
              <span className="text-xs font-bold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm bg-white"><span className="text-blue-500 text-sm">🌍</span> Real-World Scenarios</span>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-100 gap-4">
               <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                 <div className="flex -space-x-2">
                   <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">A</div>
                   <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">R</div>
                   <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">S</div>
                   <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">+12k</div>
                 </div>
                 <div>
                   <div className="flex flex-wrap items-center gap-1">
                     <span className="text-amber-400 text-sm">★</span>
                     <span className="font-bold text-slate-900 text-[13px]">4.9</span>
                     <span className="text-slate-500 text-[11px] font-medium">(12.4k active learners)</span>
                   </div>
                   <div className="text-[11px] text-slate-500 font-medium">Beginner to Advanced • Certificate</div>
                 </div>
               </div>
               <Link href="/courses" className="bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-md w-full sm:w-auto">
                 Explore 15 Courses <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
               </Link>
            </div>
          </div>

          {/* IELTS Prep Card */}
          <div className="bg-[#1e293b] rounded-[2rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full text-white group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-rose-500/15 to-indigo-500/15 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-rose-400 shadow-sm backdrop-blur-sm group-hover:scale-105 transition-transform">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                     <span className="bg-rose-500/20 text-rose-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-rose-500/30">🎯 High Demand</span>
                     <span className="bg-white/10 text-slate-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-white/10">12 Courses</span>
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">IELTS Preparation</h3>
                 </div>
              </div>
            </div>
            
            <p className="text-slate-300/90 text-sm sm:text-[15px] mb-8 max-w-[420px] font-medium leading-relaxed relative z-10">
              Band 8+ strategies, full-length speaking mock tests & academic writing mastery with former IELTS examiners.
            </p>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-4 mb-8 relative z-10 shadow-inner">
              <div className="flex justify-between items-end mb-2.5">
                <span className="text-[11px] font-bold text-slate-300">Avg. Student Score Improvement</span>
                <span className="text-[11px] font-bold text-emerald-400">+1.5 Bands in 6 Weeks</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full w-[85%] relative shadow-[0_0_10px_rgba(52,211,153,0.4)]"></div>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/10 relative z-10 gap-4 sm:gap-0">
               <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                 <div className="flex flex-wrap items-center gap-1">
                   <span className="text-amber-400 text-sm">★</span>
                   <span className="font-bold text-white text-[13px]">4.9</span>
                   <span className="text-slate-400 text-[11px] font-medium">(9.8k learners)</span>
                 </div>
                 <div className="hidden sm:block text-slate-500 font-bold">•</div>
                 <div className="text-[11px] text-slate-400 font-medium">Academic & General Training</div>
               </div>
               <Link href="/courses" className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-lg shadow-red-500/30 w-full sm:w-auto">
                 View 12 Courses <span className="text-[15px] leading-none font-normal transform -translate-y-[1px]">&rarr;</span>
               </Link>
            </div>
          </div>

        </div>

        {/* Small Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 group flex flex-col h-full cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-indigo-50 border border-indigo-100/50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">Career Boost</span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">8 Courses</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Business English</h3>
            <p className="text-sm text-slate-500 mb-6 flex-grow font-medium leading-relaxed">Executive communication, client pitches, emails & boardroom fluency.</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold">
                <span className="text-amber-400 text-sm">★ <span className="font-bold text-slate-700">4.8</span></span> <span className="text-slate-300">•</span> 6.2k learners
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors border border-slate-200 group-hover:border-transparent shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 group flex flex-col h-full cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100/50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">Foundation</span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">20 Courses</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">English Grammar</h3>
            <p className="text-sm text-slate-500 mb-6 flex-grow font-medium leading-relaxed">Complete foundation from basic tenses and syntax to advanced sentence structure.</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold">
                <span className="text-amber-400 text-sm">★ <span className="font-bold text-slate-700">4.9</span></span> <span className="text-slate-300">•</span> 15.1k learners
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors border border-slate-200 group-hover:border-transparent shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 group flex flex-col h-full cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-purple-50 border border-purple-100/50 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">Essential</span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">14 Courses</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Vocabulary Building</h3>
            <p className="text-sm text-slate-500 mb-6 flex-grow font-medium leading-relaxed">Contextual word power, idioms, phrasal verbs & articulate expression.</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold">
                <span className="text-amber-400 text-sm">★ <span className="font-bold text-slate-700">4.8</span></span> <span className="text-slate-300">•</span> 8.4k learners
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors border border-slate-200 group-hover:border-transparent shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 group flex flex-col h-full cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100/50 rounded-xl flex items-center justify-center text-cyan-600 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-100">Job Ready</span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">10 Courses</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Interview Prep</h3>
            <p className="text-sm text-slate-500 mb-6 flex-grow font-medium leading-relaxed">Crack HR & leadership rounds with structured answers and mock drills.</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold">
                <span className="text-amber-400 text-sm">★ <span className="font-bold text-slate-700">4.9</span></span> <span className="text-slate-300">•</span> 7.9k learners
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors border border-slate-200 group-hover:border-transparent shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 group flex flex-col h-full cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-amber-50 border border-amber-100/50 rounded-xl flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">Ages 5-14</span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">6 Courses</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Kids English</h3>
            <p className="text-sm text-slate-500 mb-6 flex-grow font-medium leading-relaxed">Gamified phonics, interactive storytelling & early speaking confidence.</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold">
                <span className="text-amber-400 text-sm">★ <span className="font-bold text-slate-700">4.9</span></span> <span className="text-slate-300">•</span> 5.3k learners
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors border border-slate-200 group-hover:border-transparent shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Card 6 (Highlighted) */}
          <div className="bg-white rounded-[1.75rem] p-6 shadow-[0_4px_30px_rgba(220,38,38,0.08)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.15)] border border-rose-200 transition-all duration-300 group flex flex-col h-full cursor-pointer relative overflow-hidden hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-400"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-rose-50 border border-rose-100 rounded-xl flex items-center justify-center text-rose-600 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Audio Labs</span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">9 Courses</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-rose-600 mb-2 tracking-tight">Accent Training</h3>
            <p className="text-sm text-slate-500 mb-6 flex-grow font-medium leading-relaxed">Phonetics, intonation, syllable stress & neutral global pronunciation.</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold">
                <span className="text-amber-400 text-sm">★ <span className="font-bold text-slate-700">4.8</span></span> <span className="text-slate-300">•</span> 4.7k learners
              </div>
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors border border-rose-200 group-hover:border-transparent shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
