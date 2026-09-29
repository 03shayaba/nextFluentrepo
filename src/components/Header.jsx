'use client';

import { useState } from 'react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-[#171E2E] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-[#E69D19] flex items-center justify-center">
              {/* Graduation Cap Logo Icon */}
              <svg 
                className="w-8 h-8" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#E69D19]">
              Younus LMS
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a 
              href="/" 
              className="text-gray-200 hover:text-white transition-colors py-2"
            >
              Home
            </a>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('courses')}
                className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors py-2 focus:outline-none"
              >
                <span>Courses</span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'courses' && (
                <div className="absolute left-0 top-full pt-1 w-48 z-50">
                  <div className="bg-[#1F293D] border border-gray-700/60 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="/courses" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2A3752] hover:text-white">Browse Courses</a>
                    <a href="#course-category" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2A3752] hover:text-white">Course Category</a>
                  </div>
                </div>
              )}
            </div>

            {/* Quiz Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('quiz')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('quiz')}
                className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors py-2 focus:outline-none"
              >
                <span>Quiz</span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'quiz' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'quiz' && (
                <div className="absolute left-0 top-full pt-1 w-48 z-50">
                  <div className="bg-[#1F293D] border border-gray-700/60 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="#daily-quiz" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2A3752] hover:text-white">Daily Quizzes</a>
                    <a href="#practice-test" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2A3752] hover:text-white">Practice Tests</a>
                    <a href="#mock-exam" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2A3752] hover:text-white">Mock Exams</a>
                  </div>
                </div>
              )}
            </div>

            {/* Certificates Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('certificates')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => toggleDropdown('certificates')}
                className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors py-2 focus:outline-none"
              >
                <span>Certificates</span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'certificates' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'certificates' && (
                <div className="absolute left-0 top-full pt-1 w-48 z-50">
                  <div className="bg-[#1F293D] border border-gray-700/60 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="#verify" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2A3752] hover:text-white">Verify Certificate</a>
                    <a href="#my-certificates" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2A3752] hover:text-white">My Certificates</a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="border border-slate-600 hover:border-slate-400 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all hover:bg-slate-800/50 focus:outline-none">
              Sign In
            </button>
            <button className="bg-[#E69D19] hover:bg-[#D48E12] text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-md transition-all focus:outline-none active:scale-[0.98]">
              Register
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700/60 py-4 px-2 space-y-3 bg-[#171E2E]">
            <a href="/" className="block px-3 py-2 text-gray-200 hover:bg-[#2A3752] rounded-md font-medium">Home</a>
            
            <div className="space-y-1">
              <button 
                onClick={() => toggleDropdown('mobile-courses')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-200 hover:bg-[#2A3752] rounded-md font-medium"
              >
                <span>Courses</span>
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'mobile-courses' && (
                <div className="pl-6 space-y-1 py-1">
                  <a href="/courses" className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white">Browse Courses</a>
                  <a href="#course-category" className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white">Course Category</a>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button 
                onClick={() => toggleDropdown('mobile-quiz')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-200 hover:bg-[#2A3752] rounded-md font-medium"
              >
                <span>Quiz</span>
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-quiz' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'mobile-quiz' && (
                <div className="pl-6 space-y-1 py-1">
                  <a href="#daily-quiz" className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white">Daily Quizzes</a>
                  <a href="#practice-test" className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white">Practice Tests</a>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button 
                onClick={() => toggleDropdown('mobile-certificates')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-200 hover:bg-[#2A3752] rounded-md font-medium"
              >
                <span>Certificates</span>
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-certificates' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'mobile-certificates' && (
                <div className="pl-6 space-y-1 py-1">
                  <a href="#verify" className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white">Verify Certificate</a>
                  <a href="#my-certificates" className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white">My Certificates</a>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-2">
              <button className="w-full border border-slate-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-slate-800">
                Sign In
              </button>
              <button className="w-full bg-[#E69D19] text-white text-sm font-semibold py-2 rounded-lg shadow">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
