'use client';

import { useState, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { products } from '@/data/storeProducts';
import { useWishlist } from '@/context/WishlistContext';
import { 
  ShoppingBag, 
  Search, 
  Star, 
  Truck, 
  Download, 
  Filter, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  X, 
  CreditCard,
  Check,
  Eye,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  SlidersHorizontal,
  LayoutGrid,
  BookOpen,
  FileText,
  Package,
  Layers,
  Flame,
  Zap
} from 'lucide-react';

const storeFaqs = [
  {
    q: "How do I access digital E-Books and Audio downloads after purchase?",
    a: "Instantly upon checkout, you will receive a direct high-speed download link on your order confirmation screen and via email. Digital products are available in PDF and MP3 formats for lifetime access."
  },
  {
    q: "What are the estimated delivery times for printed physical books?",
    a: "Physical books and flashcard decks are dispatched within 24 hours of order placement. Standard delivery takes 2-4 business days across India with full SMS tracking."
  },
  {
    q: "Can I get both physical books and digital copies together?",
    a: "Yes! All our physical books and Combo Bundles automatically include complimentary instant digital PDF downloads so you can start studying right away while your package is in transit."
  },
  {
    q: "What payment methods are supported in the Store?",
    a: "We support 100% secure payments via UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and major mobile wallets."
  }
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const catalogRef = useRef(null);
  const searchInputRef = useRef(null);
  const sortRef = useRef(null);

  const { toggleWishlist, isInWishlist } = useWishlist();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Live autocomplete suggestions based on inputValue
  const suggestions = useMemo(() => {
    if (!inputValue.trim() || inputValue.length < 2) return [];
    const q = inputValue.toLowerCase();
    const seen = new Set();
    const results = [];
    products.forEach((p) => {
      const words = [p.title, p.description, p.category, p.tag].join(' ');
      if (words.toLowerCase().includes(q) && !seen.has(p.title)) {
        seen.add(p.title);
        results.push({ label: p.title, category: p.tag });
      }
    });
    return results.slice(0, 6);
  }, [inputValue]);

  const scrollToCatalog = useCallback(() => {
    if (catalogRef.current) {
      const y = catalogRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  const handleSearch = useCallback(() => {
    setSearchQuery(inputValue);
    setShowSuggestions(false);
    setTimeout(scrollToCatalog, 50);
  }, [inputValue, scrollToCatalog]);

  const handleSuggestionClick = useCallback((label) => {
    setInputValue(label);
    setSearchQuery(label);
    setShowSuggestions(false);
    setTimeout(scrollToCatalog, 50);
  }, [scrollToCatalog]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    setSearchQuery(val);
    setShowSuggestions(true);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
    if (e.key === 'Escape') setShowSuggestions(false);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return a.id - b.id; // default featured
      });
  }, [activeCategory, searchQuery, sortBy]);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      setOrderComplete(false);
      setCheckoutProduct(null);
      showToast("🎉 Order placed successfully! Check your email for details.");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Header />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[200] bg-[#DC2626] text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="flex-grow">

        {/* SECTION 1: DARK HERO BANNER */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-[#0b101c] border-b border-[#1E293B] text-white">
          
          {/* Glowing Accents */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide uppercase mb-6 shadow-sm">
              <ShoppingBag className="w-4 h-4" />
              <span>Official Learning Store</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
              Empower Your Fluency With <br className="hidden sm:inline" />
              <span className="text-[#EF4444]">Official Study Books & Kits</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Explore expertly crafted workbooks, instant PDF e-books, vocabulary flashcards, and complete test prep bundles designed for fast results.
            </p>

            {/* Search Bar in Hero */}
            <div className="max-w-2xl mx-auto relative mb-10">
              <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 shadow-2xl focus-within:border-red-500/50 transition-all">
                <Search className="w-5 h-5 text-slate-300 ml-4 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  onFocus={() => inputValue.length >= 2 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  placeholder="Search books, IELTS prep kits, flashcards..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                {inputValue && (
                  <button
                    onClick={() => { setInputValue(''); setSearchQuery(''); setShowSuggestions(false); }}
                    className="p-1 text-slate-400 hover:text-white mr-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={handleSearch}
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-md shrink-0"
                >
                  Search
                </button>
              </div>

              {/* Live Autocomplete Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0f1829] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <div className="px-4 py-2 border-b border-white/10">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Suggestions</span>
                  </div>
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onMouseDown={() => handleSuggestionClick(s.label)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-500/15 border border-red-500/20 flex items-center justify-center shrink-0">
                        <Search className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors truncate">{s.label}</p>
                        <p className="text-[11px] text-slate-400 font-medium">{s.category}</p>
                      </div>
                      <svg className="w-4 h-4 text-slate-500 group-hover:text-red-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Trust Pills Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300 pt-2">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Truck className="w-4 h-4 text-[#EF4444]" />
                <span>Fast Home Shipping</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Download className="w-4 h-4 text-amber-400" />
                <span>Instant PDF Access</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Quality Guaranteed</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: LIGHT STATS BAR */}
        <section className="bg-white py-8 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">15,000+</div>
                <div className="text-xs text-slate-500 font-semibold">Books & Kits Delivered</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">4.9 / 5.0</div>
                <div className="text-xs text-slate-500 font-semibold">Average Student Rating</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-semibold">Verified Study Content</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">Instant</div>
                <div className="text-xs text-slate-500 font-semibold">Digital PDF Downloads</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DARK FEATURED BANNER OFFER */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-red-950 via-[#0e1526] to-[#0e1526] border border-red-500/30 overflow-hidden p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-xl space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#DC2626] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                <Flame className="w-3.5 h-3.5 text-orange-300" /> SPECIAL COMBO DEAL - 50% OFF
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Fluency Master All-in-One Super Combo Pack
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                Get all 3 physical printed workbooks, 500 vocabulary flashcard deck, HD audio listening suite, and complete PDF collection at an unbeatable bundled price!
              </p>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-3xl font-black text-white">₹1,499</span>
                <span className="text-lg font-bold text-slate-400 line-through">₹2,999</span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full">Save ₹1,500</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link 
                  href="/store/8"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#DC2626]" />
                  <span>View Details Page</span>
                </Link>
                <button 
                  onClick={() => setCheckoutProduct(products[7])}
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-xl transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Buy Now &rarr;</span>
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-sm h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shrink-0 bg-slate-950">
              <Image 
                src="/store1.png" 
                alt="Fluency Combo" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs font-bold text-white flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-emerald-300"><Truck className="w-4 h-4" /> <span className="text-white">Free Express Shipping</span></span>
                <span className="text-amber-400 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400" /> <span className="text-white">5.0</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: LIGHT MAIN CATALOG & FILTERS */}
        <section ref={catalogRef} className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Controls Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-slate-200 pb-6">
              
              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === 'all' ? 'bg-[#DC2626] text-white shadow-lg shadow-red-500/20' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <LayoutGrid className={`w-4 h-4 ${activeCategory === 'all' ? 'text-red-100' : 'text-slate-400'}`} />
                  All Products ({products.length})
                </button>
                <button 
                  onClick={() => setActiveCategory('books')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === 'books' ? 'bg-[#DC2626] text-white shadow-lg shadow-red-500/20' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <BookOpen className={`w-4 h-4 ${activeCategory === 'books' ? 'text-red-100' : 'text-slate-400'}`} />
                  Printed Workbooks
                </button>
                <button 
                  onClick={() => setActiveCategory('ebooks')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === 'ebooks' ? 'bg-[#DC2626] text-white shadow-lg shadow-red-500/20' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <FileText className={`w-4 h-4 ${activeCategory === 'ebooks' ? 'text-red-100' : 'text-slate-400'}`} />
                  Digital E-Books
                </button>
                <button 
                  onClick={() => setActiveCategory('bundles')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === 'bundles' ? 'bg-[#DC2626] text-white shadow-lg shadow-red-500/20' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <Package className={`w-4 h-4 ${activeCategory === 'bundles' ? 'text-red-100' : 'text-slate-400'}`} />
                  Combo Kits
                </button>
                <button 
                  onClick={() => setActiveCategory('flashcards')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === 'flashcards' ? 'bg-[#DC2626] text-white shadow-lg shadow-red-500/20' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <Layers className={`w-4 h-4 ${activeCategory === 'flashcards' ? 'text-red-100' : 'text-slate-400'}`} />
                  Flashcards
                </button>
              </div>

              {/* Custom Sort Dropdown */}
              <div ref={sortRef} className="relative shrink-0 self-end md:self-auto">
                <button
                  onClick={() => setShowSortDropdown((v) => !v)}
                  onBlur={() => setTimeout(() => setShowSortDropdown(false), 150)}
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200/90 hover:border-red-500/40 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 transition-colors" />
                  <span className="text-slate-400 font-medium">Sort:</span>
                  <span className="text-slate-800 font-semibold flex items-center gap-1.5">
                    {sortBy === 'featured' && (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Featured</span>
                      </>
                    )}
                    {sortBy === 'price-low' && (
                      <>
                        <ArrowUp className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Price: Low → High</span>
                      </>
                    )}
                    {sortBy === 'price-high' && (
                      <>
                        <ArrowDown className="w-3.5 h-3.5 text-rose-500" />
                        <span>Price: High → Low</span>
                      </>
                    )}
                    {sortBy === 'rating' && (
                      <>
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>Top Rated</span>
                      </>
                    )}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${showSortDropdown ? 'rotate-180 text-slate-700' : ''}`} />
                </button>

                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-900/10 z-50 overflow-hidden py-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1.5 mb-1 border-b border-slate-100/80 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sort Products</span>
                      <span className="text-[10px] font-medium text-slate-300">4 options</span>
                    </div>
                    {[
                      { 
                        value: 'featured', 
                        label: 'Featured', 
                        icon: Sparkles
                      },
                      { 
                        value: 'price-low', 
                        label: 'Price: Low to High', 
                        icon: ArrowUp
                      },
                      { 
                        value: 'price-high', 
                        label: 'Price: High to Low', 
                        icon: ArrowDown
                      },
                      { 
                        value: 'rating', 
                        label: 'Top Rated', 
                        icon: Star
                      },
                    ].map((opt) => {
                      const IconComponent = opt.icon;
                      const isActive = sortBy === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onMouseDown={() => { setSortBy(opt.value); setShowSortDropdown(false); }}
                          className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                            isActive
                              ? 'bg-red-50/70 text-red-600 font-semibold'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                            isActive ? 'bg-red-100/60' : 'bg-slate-100/80'
                          }`}>
                            <IconComponent className={`w-3 h-3 ${isActive ? 'text-red-600' : 'text-slate-500'}`} />
                          </div>
                          <span className="flex-1 text-left">{opt.label}</span>
                          {isActive && (
                            <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* Products Grid */}
            {searchQuery && (
              <div className="mb-5 flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-slate-700">
                  {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for
                </span>
                <span className="bg-red-50 border border-red-200 text-[#DC2626] font-bold text-sm px-3 py-0.5 rounded-full">
                  &ldquo;{searchQuery}&rdquo;
                </span>
                <button
                  onClick={() => { setSearchQuery(''); setInputValue(''); }}
                  className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
                >
                  <X className="w-3.5 h-3.5" /> Clear
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">No products found for &ldquo;{searchQuery}&rdquo;</h3>
                <p className="text-slate-500 text-xs">Try searching for something else or reset filters.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); setInputValue(''); }}
                  className="mt-4 bg-[#DC2626] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-2xl shadow-sm"
                  >
                    <div>
                      {/* Image Area */}
                      <Link href={`/store/${product.id}`} className="block relative h-52 w-full p-2.5">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900">
                          <Image 
                            src={product.image} 
                            alt={product.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>

                        {/* Tag Badge */}
                        <div className={`absolute top-5 left-5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${product.badgeBg}`}>
                          {product.tag}
                        </div>

                        {/* Wishlist Heart Icon */}
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleWishlist(product);
                          }}
                          className={`absolute top-5 right-5 w-9 h-9 backdrop-blur-md rounded-full flex items-center justify-center shadow-md transition-all z-10 ${
                            isInWishlist(product.id) ? 'bg-white text-red-500' : 'bg-black/40 text-white hover:text-red-500 hover:bg-white'
                          }`}
                          aria-label="Wishlist"
                        >
                          <Heart className="w-4 h-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                        </button>

                        {/* Format Tag */}
                        <div className="absolute bottom-5 left-5 right-5 text-[11px] font-bold text-white truncate bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-center gap-1.5">
                          {product.type === 'digital' ? <><Zap className="w-3.5 h-3.5 text-blue-400" /> Digital Instant PDF</> : <><Truck className="w-3.5 h-3.5 text-emerald-400" /> Physical Delivery</>}
                        </div>
                      </Link>

                      {/* Content Section */}
                      <div className="p-5">
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500 mb-2">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{product.rating}</span>
                          <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                        </div>

                        <Link href={`/store/${product.id}`} className="block">
                          <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#DC2626] transition-colors">
                            {product.title}
                          </h3>
                        </Link>

                        <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed font-normal mb-4">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-5 pb-5 pt-0 mt-auto border-t border-slate-100">
                      <div className="flex items-center justify-between my-3">
                        <div>
                          <span className="text-xl font-black text-slate-900">₹{product.price}</span>
                          <span className="text-xs text-slate-400 line-through ml-2">₹{product.originalPrice}</span>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          {product.discount}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          href={`/store/${product.id}`}
                          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-500" />
                          <span>View Details</span>
                        </Link>
                        <button 
                          onClick={() => setCheckoutProduct(product)}
                          className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* SECTION 5: LIGHT SEAMLESS BACKGROUND WITH DARK CARDS */}
        <section className="py-16 bg-white text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
                WHY BUY FROM US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Guaranteed Excellence & Fast Delivery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-[#0b101c] p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-[#EF4444] mb-5">
                  <Truck className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Fast Nationwide Delivery</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  All physical books and decks ship within 24 hours with express SMS tracking delivered straight to your doorstep.
                </p>
              </div>

              <div className="bg-[#0b101c] p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                  <Download className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Instant PDF & Audio Downloads</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  Digital E-books and MP3 audio files are available instantly upon purchase with lifetime unlimited downloads.
                </p>
              </div>

              <div className="bg-[#0b101c] p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">100% Quality & Security</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  Content created by certified language experts. Encrypted payments via UPI, Cards, and Net Banking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: STORE FAQ SECTION (SHARED FAQ COMPONENT) */}
        <FAQ 
          faqs={storeFaqs} 
          title="Got Questions About Your Order?" 
          subtitle="STORE HELP & FAQS" 
        />

      </main>

      {/* CHECKOUT / BUY NOW MODAL */}
      {checkoutProduct && (
        <div className="fixed inset-0 z-[150] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-slate-900">
            <button 
              onClick={() => { setCheckoutProduct(null); setOrderComplete(false); }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {orderComplete ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Order Confirmed!</h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto">
                  Thank you for your purchase. We have dispatched your order details to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShoppingBag className="w-6 h-6 text-[#DC2626]" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-tight">Complete Your Order</h3>
                    <p className="text-xs text-slate-500 font-medium">{checkoutProduct.title}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-semibold">Total Amount Due:</span>
                  <span className="text-lg font-black text-slate-900">₹{checkoutProduct.price}</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your name" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@example.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {checkoutProduct.type === 'digital' ? 'Phone Number (For Instant Download SMS)' : 'Shipping Address'}
                    </label>
                    <textarea 
                      required 
                      rows={2}
                      placeholder={checkoutProduct.type === 'digital' ? "Enter 10-digit mobile number" : "Enter complete street address, city, pincode"} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button 
                    type="submit" 
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm py-3 rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay ₹{checkoutProduct.price} & Place Order</span>
                  </button>
                </div>

                <p className="text-[10px] text-center text-slate-500 font-medium">
                  🔒 256-Bit SSL Encrypted & 100% Secure Checkout
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
