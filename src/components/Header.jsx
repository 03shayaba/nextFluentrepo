'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const isActive = (path) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname?.startsWith(path);
  };

  const activeLinkClass = "text-[#E59719] border-b-2 border-[#E59719]";
  const inactiveLinkClass = "text-slate-800 hover:text-[#E59719] border-b-2 border-transparent hover:border-[#E59719]";

  return (
    <header className="sticky w-full top-0 z-50 bg-white shadow-sm border-b border-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/NextFluentlogo.jpeg" alt="NextFluent Logo" className="h-10 sm:h-12 w-auto object-contain rounded-full shadow-sm" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-semibold">
            <a 
              href="/" 
              className={`transition-colors py-2 ${isActive('/') ? activeLinkClass : inactiveLinkClass}`}
            >
              Home
            </a>

            {/* Courses Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('courses')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => toggleDropdown('courses')} className={`flex items-center gap-1.5 transition-colors py-2 focus:outline-none ${isActive('/courses') || isActive('/categories') ? activeLinkClass : inactiveLinkClass}`}>
                <span>Courses</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'courses' && (
                <div className="absolute left-0 top-full pt-1 w-48 z-50">
                  <div className="bg-white border border-slate-100 rounded-xl shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="/courses" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E59719]">Browse Courses</a>
                    <a href="/categories" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E59719]">Course Category</a>
                  </div>
                </div>
              )}
            </div>

            {/* Quiz Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('quiz')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => toggleDropdown('quiz')} className={`flex items-center gap-1.5 transition-colors py-2 focus:outline-none ${isActive('/quiz') ? activeLinkClass : inactiveLinkClass}`}>
                <span>Quiz</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'quiz' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'quiz' && (
                <div className="absolute left-0 top-full pt-1 w-48 z-50">
                  <div className="bg-white border border-slate-100 rounded-xl shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="/quiz" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E59719]">Check Your Level</a>
                  </div>
                </div>
              )}
            </div>

            {/* Certificates Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('certificates')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => toggleDropdown('certificates')} className={`flex items-center gap-1.5 transition-colors py-2 focus:outline-none ${isActive('/certificates') ? activeLinkClass : inactiveLinkClass}`}>
                <span>Certificates</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'certificates' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'certificates' && (
                <div className="absolute left-0 top-full pt-1 w-48 z-50">
                  <div className="bg-white border border-slate-100 rounded-xl shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="#verify" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E59719]">Verify Certificate</a>
                    <a href="#my-certificates" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#E59719]">My Certificates</a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/contact" className={`transition-colors py-2 ${isActive('/contact') ? activeLinkClass : inactiveLinkClass}`}>Contact</a>
            <a href="/about" className={`transition-colors py-2 ${isActive('/about') ? activeLinkClass : inactiveLinkClass}`}>About</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Search Icon */}
            <button className="text-slate-800 hover:text-[#E59719] transition-colors focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Divider */}
            <div className="w-[1px] h-6 bg-slate-300"></div>

            {/* Login Link */}
            <a href="/login" className="text-[13.5px] font-bold text-slate-800 hover:text-[#E59719] transition-colors cursor-pointer">
              Log In
            </a>

            {/* Get Started Button */}
            <button className="bg-[#E59719] hover:bg-[#D48E12] text-white text-[13.5px] font-bold px-6 py-2.5 rounded-full shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5">
              Get Started <span className="font-normal">&rarr;</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-800 hover:text-[#E59719] p-2 rounded-lg focus:outline-none"
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
          <div className="md:hidden border-t border-slate-200 py-4 px-4 space-y-3 bg-white shadow-xl absolute w-full left-0">
            <a 
              href="/" 
              className={`block px-3 py-2 rounded-md font-bold transition-colors ${isActive('/') ? 'bg-amber-50 text-[#E59719]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#E59719]'}`}
            >
              Home
            </a>
            
            <div className="space-y-1">
              <button 
                onClick={() => toggleDropdown('mobile-courses')}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md font-bold transition-colors ${isActive('/courses') || isActive('/categories') ? 'bg-amber-50 text-[#E59719]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#E59719]'}`}
              >
                <span>Courses</span>
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'mobile-courses' && (
                <div className="pl-6 space-y-1 py-1">
                  <a href="/courses" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-[#E59719]">Browse Courses</a>
                  <a href="/categories" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-[#E59719]">Course Category</a>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button 
                onClick={() => toggleDropdown('mobile-quiz')}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md font-bold transition-colors ${isActive('/quiz') ? 'bg-amber-50 text-[#E59719]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#E59719]'}`}
              >
                <span>Quiz</span>
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-quiz' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'mobile-quiz' && (
                <div className="pl-6 space-y-1 py-1">
                  <a href="/quiz" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-[#E59719]">Check Your Level</a>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button 
                onClick={() => toggleDropdown('mobile-certificates')}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md font-bold transition-colors ${isActive('/certificates') ? 'bg-amber-50 text-[#E59719]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#E59719]'}`}
              >
                <span>Certificates</span>
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-certificates' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'mobile-certificates' && (
                <div className="pl-6 space-y-1 py-1">
                  <a href="#verify" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-[#E59719]">Verify Certificate</a>
                  <a href="#my-certificates" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-[#E59719]">My Certificates</a>
                </div>
              )}
            </div>

            <a 
              href="/contact" 
              className={`block px-3 py-2 rounded-md font-bold transition-colors ${isActive('/contact') ? 'bg-amber-50 text-[#E59719]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#E59719]'}`}
            >
              Contact
            </a>
            
            <a 
              href="/about" 
              className={`block px-3 py-2 rounded-md font-bold transition-colors ${isActive('/about') ? 'bg-amber-50 text-[#E59719]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#E59719]'}`}
            >
              About
            </a>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 mt-2 pb-2">
              <a href="/login" className="w-full text-center border-2 border-slate-200 text-slate-700 text-sm font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                Sign In
              </a>
              <button className="w-full bg-[#E59719] text-white text-sm font-bold py-2.5 rounded-xl shadow-md shadow-amber-500/20 hover:bg-[#D48E12] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
