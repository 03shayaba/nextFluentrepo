"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { wishlistCount } = useWishlist();
  const { user, logout } = useAuth();

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname?.startsWith(path);
  };

  const activeLinkClass = "text-[#DC2626] border-b-2 border-[#DC2626]";
  const inactiveLinkClass = "text-slate-800 hover:text-[#DC2626] border-b-2 border-transparent hover:border-[#DC2626]";

  return (
    <>
      <div className="bg-[#111726] text-white text-xs sm:text-sm font-semibold py-2.5 overflow-hidden flex items-center relative whitespace-nowrap z-50">
        <div className="animate-marquee flex gap-10 min-w-full">
          <span className="flex items-center gap-2">🚀 Welcome to NextFluent! Enroll now and get <span className="text-[#EF4444] font-bold">50% off</span> on all Premium Courses!</span>
          <span className="flex items-center gap-2">⭐ Join <span className="text-[#EF4444] font-bold">10,000+</span> successful learners today.</span>
          <span className="flex items-center gap-2">🎓 Special <span className="text-[#EF4444] font-bold">IELTS Preparation</span> batches starting this week.</span>
          {/* Duplicate for seamless loop */}
          <span className="flex items-center gap-2">🚀 Welcome to NextFluent! Enroll now and get <span className="text-[#EF4444] font-bold">50% off</span> on all Premium Courses!</span>
          <span className="flex items-center gap-2">⭐ Join <span className="text-[#EF4444] font-bold">10,000+</span> successful learners today.</span>
          <span className="flex items-center gap-2">🎓 Special <span className="text-[#EF4444] font-bold">IELTS Preparation</span> batches starting this week.</span>
        </div>
      </div>

      <header className="sticky w-full top-0 z-50 bg-white shadow-sm border-b border-slate-100 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">

            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer z-10 transition-opacity hover:opacity-90">
              <Image src="/logo_transparent.webp" alt="NextFluent Logo" width={200} height={48} sizes="(max-width: 640px) 160px, 200px" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-[14px] xl:text-[15px] font-semibold" suppressHydrationWarning>
              <Link
                href="/"
                className={`transition-colors py-2 whitespace-nowrap ${isActive('/') ? activeLinkClass : inactiveLinkClass}`}
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div className="relative" onMouseEnter={() => setActiveDropdown('courses')} onMouseLeave={() => setActiveDropdown(null)}>
                <button onClick={() => toggleDropdown('courses')} className={`flex items-center gap-1.5 transition-colors py-2 whitespace-nowrap focus:outline-none ${isActive('/courses') || isActive('/categories') ? activeLinkClass : inactiveLinkClass}`}>
                  <span>Courses</span>
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'courses' && (
                  <div className="absolute left-0 top-full pt-1 w-48 z-50">
                    <div className="bg-white border border-slate-100 rounded-xl shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                      <Link href="/courses" className={`block px-4 py-2 text-sm transition-colors ${isActive('/courses') ? 'text-[#DC2626] font-bold bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-[#DC2626]'}`}>Browse Courses</Link>
                      <Link href="/categories" className={`block px-4 py-2 text-sm transition-colors ${isActive('/categories') ? 'text-[#DC2626] font-bold bg-slate-50' : 'text-slate-600 hover:bg-slate-50 hover:text-[#DC2626]'}`}>Course Category</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Quiz Link */}
              <Link href="/quiz" className={`transition-colors py-2 whitespace-nowrap ${isActive('/quiz') ? activeLinkClass : inactiveLinkClass}`}>Quiz</Link>

              {/* Certificates Link */}
              <Link href="/certificates" className={`transition-colors py-2 whitespace-nowrap ${isActive('/certificates') ? activeLinkClass : inactiveLinkClass}`}>Certificates</Link>

              {/* Store Link */}
              <Link href="/store" className={`transition-colors py-2 whitespace-nowrap ${isActive('/store') ? activeLinkClass : inactiveLinkClass}`}>Store</Link>

              {/* Blogs Link */}
              <Link href="/blogs" className={`transition-colors py-2 whitespace-nowrap ${isActive('/blogs') ? activeLinkClass : inactiveLinkClass}`}>Blogs</Link>

              <Link href="/about" className={`transition-colors py-2 whitespace-nowrap ${isActive('/about') ? activeLinkClass : inactiveLinkClass}`}>About Us</Link>
              <Link href="/contact" className={`transition-colors py-2 whitespace-nowrap ${isActive('/contact') ? activeLinkClass : inactiveLinkClass}`}>Contact Us</Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">

              <Link href="/wishlist" className={`relative transition-colors p-1.5 ${isActive('/wishlist') ? 'text-[#DC2626]' : 'text-slate-600 hover:text-[#DC2626]'}`} aria-label="Wishlist">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#DC2626] text-white text-[9px] font-bold flex items-center justify-center rounded-full border border-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <div className="w-px h-5 bg-slate-200"></div>

              {user ? (
                <div className="flex items-center gap-2 cursor-pointer group relative">
                  <img src={user.avatar} alt="Profile" className="w-9 h-9 rounded-full border-2 border-slate-200 object-cover" />
                  <span className="font-bold text-sm text-slate-800">{user.name}</span>

                  <div className="absolute top-10 right-0 bg-white shadow-xl rounded-xl border border-slate-100 p-2 hidden group-hover:block z-50 min-w-[150px]">
                    <button onClick={logout} className="text-sm font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg w-full text-left">
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/login" className="text-[13.5px] font-bold text-slate-800 hover:text-[#DC2626] transition-colors cursor-pointer whitespace-nowrap">
                    Sign In
                  </Link>

                  <Link href="/signup" className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[13.5px] font-bold px-4 xl:px-5 py-2.5 rounded-full shadow-md shadow-red-500/20 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                    Register <span className="font-normal">&rarr;</span>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile/Tablet Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-800 hover:text-[#DC2626] p-2 rounded-lg focus:outline-none"
                aria-label="Toggle Navigation Menu"
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

          {/* Mobile/Tablet Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4 px-4 space-y-2 bg-white shadow-2xl absolute w-full left-0 top-full z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
              >
                Home
              </Link>

              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown('mobile-courses')}
                  className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/courses') || isActive('/categories') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
                >
                  <span>Courses</span>
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'mobile-courses' && (
                  <div className="pl-6 space-y-1 py-1">
                    <Link href="/courses" onClick={closeMobileMenu} className={`block px-3 py-2 text-sm transition-colors ${isActive('/courses') ? 'text-[#DC2626] font-bold bg-rose-50 rounded-lg' : 'font-semibold text-slate-600 hover:text-[#DC2626]'}`}>Browse Courses</Link>
                    <Link href="/categories" onClick={closeMobileMenu} className={`block px-3 py-2 text-sm transition-colors ${isActive('/categories') ? 'text-[#DC2626] font-bold bg-rose-50 rounded-lg' : 'font-semibold text-slate-600 hover:text-[#DC2626]'}`}>Course Category</Link>
                  </div>
                )}
              </div>

              <Link
                href="/quiz"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/quiz') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
              >
                Quiz
              </Link>

              <Link
                href="/certificates"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/certificates') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
              >
                Certificates
              </Link>

              <Link
                href="/store"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/store') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
              >
                Store
              </Link>

              <Link
                href="/blogs"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/blogs') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
              >
                Blogs
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/about') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/contact') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 mt-2 pb-2">
                <Link href="/wishlist" onClick={closeMobileMenu} className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-bold transition-colors ${isActive('/wishlist') ? 'bg-rose-50 text-[#DC2626]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    My Wishlist
                  </div>
                  {wishlistCount > 0 && (
                    <span className="bg-[#DC2626] text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>
                  )}
                </Link>
                <Link href="/login" onClick={closeMobileMenu} className="w-full text-center border-2 border-slate-200 text-slate-700 text-sm font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  Sign In
                </Link>
                <Link href="/signup" onClick={closeMobileMenu} className="w-full text-center bg-[#DC2626] text-white text-sm font-bold py-2.5 rounded-xl shadow-md shadow-red-500/20 hover:bg-[#B91C1C] transition-colors cursor-pointer">
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
