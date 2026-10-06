'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { products } from '@/data/storeProducts';
import { useWishlist } from '@/context/WishlistContext';
import { 
  ShoppingBag, 
  Star, 
  Truck, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Share2, 
  ArrowLeft,
  BookOpen,
  CreditCard,
  X,
  Check,
  Award,
  Zap,
  CheckCircle,
  Clock,
  Layers,
  Globe
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
  }
];

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id, 10);

  const product = products.find((p) => p.id === productId) || products[0];
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [activeTab, setActiveTab] = useState('overview');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("📋 Link copied to clipboard!");
    }
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      setOrderComplete(false);
      setCheckoutOpen(false);
      showToast("🎉 Order placed successfully! Check your email for details.");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      <Header />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[200] bg-[#DC2626] text-white text-sm font-bold px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="flex-grow">

        {/* TOP NAVIGATION BREADCRUMB HEADER */}
        <section className="bg-white border-b border-slate-200/80 py-3.5 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            
            <Link 
              href="/store" 
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#DC2626] transition-all bg-slate-100/80 hover:bg-slate-200/80 px-4 py-2 rounded-xl border border-slate-200/80 shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Store Catalog</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 truncate">
              <Link href="/" className="hover:text-[#DC2626] transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <Link href="/store" className="hover:text-[#DC2626] transition-colors">Store</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold truncate max-w-xs">{product.title}</span>
            </div>

          </div>
        </section>

        {/* MAIN PRODUCT SHOWCASE CONTAINER */}
        <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: PRODUCT IMAGE & TRUST ROW (STICKY ON DESKTOP) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
              
              {/* Product Showcase Container */}
              <div className="relative h-80 sm:h-[460px] w-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 group">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />

                {/* Top Badge Tag */}
                <div className="absolute top-4 left-4 text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#DC2626] text-white shadow-lg">
                  {product.tag}
                </div>

                {/* Wishlist Floating Button */}
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition-all ${
                    isInWishlist(product.id) ? 'bg-white text-red-500 scale-105' : 'bg-black/40 text-white hover:bg-white hover:text-red-500'
                  }`}
                  aria-label="Add to Wishlist"
                >
                  <Heart className="w-5 h-5" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                </button>

                {/* Bottom Delivery Banner Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs font-bold text-white flex justify-between items-center shadow-lg">
                  <div className="flex items-center gap-2">
                    {product.type === 'digital' ? <Download className="w-4 h-4 text-amber-400" /> : <Truck className="w-4 h-4 text-[#EF4444]" />}
                    <span>{product.delivery}</span>
                  </div>
                  <span className="text-emerald-400 font-black text-[11px] uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">Verified Item</span>
                </div>
              </div>

              {/* Clean Integrated Trust Bar (3 Features) */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm grid grid-cols-3 gap-3 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-2 shadow-xs">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">Fast Delivery</span>
                  <span className="text-[10px] text-slate-500 font-medium mt-0.5">Pan-India Express</span>
                </div>

                <div className="flex flex-col items-center border-x border-slate-100 px-1">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 shadow-xs">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">Instant PDF</span>
                  <span className="text-[10px] text-slate-500 font-medium mt-0.5">Direct Download</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">100% Quality</span>
                  <span className="text-[10px] text-slate-500 font-medium mt-0.5">Certified Content</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: PRODUCT DETAILS & MASTER PURCHASE CARD */}
            <div className="lg:col-span-7 space-y-6">

              {/* Product Header Information */}
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-red-50 text-[#DC2626] border border-red-200/80 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.tag}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>In Stock & Ready to Ship</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {product.title}
                </h1>

                {/* Star Ratings & Proof Bar */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600">
                  <div className="flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1 rounded-xl border border-amber-200/80">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-slate-900 font-black">{product.rating}</span>
                    <span className="text-slate-500 font-medium">({product.reviewsCount} Reviews)</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#DC2626] font-extrabold flex items-center gap-1">
                    <span>🔥 1,500+ Copies Sold</span>
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                  {product.overview}
                </p>
              </div>

              {/* UNIFIED MASTER PURCHASE CONTAINER */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6">
                
                {/* Price Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">₹{product.price}</span>
                      <span className="text-lg font-bold text-slate-400 line-through">₹{product.originalPrice}</span>
                      <span className="bg-[#DC2626] text-white font-black text-[11px] px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        SAVE {product.discount}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Inclusive of all taxes & instant PDF access</span>
                    </p>
                  </div>
                </div>

                {/* Integrated Specs Bar */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium text-[11px] block">Format</span>
                    <span className="font-bold text-slate-900 truncate block mt-0.5">{product.format}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium text-[11px] block">Length</span>
                    <span className="font-bold text-slate-900 block mt-0.5">{product.pages}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium text-[11px] block">Language</span>
                    <span className="font-bold text-slate-900 block mt-0.5">{product.language}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium text-[11px] block">Publisher</span>
                    <span className="font-bold text-slate-900 truncate block mt-0.5">{product.publisher}</span>
                  </div>
                </div>

                {/* Primary Call-to-Action Buttons */}
                <div className="space-y-3">
                  <button 
                    onClick={() => setCheckoutOpen(true)}
                    className="w-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#991B1B] text-white font-bold text-base py-4 rounded-2xl shadow-xl shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Buy Now - Pay ₹{product.price}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => toggleWishlist(product)}
                      className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs py-3 rounded-xl border border-slate-200/80 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-red-500" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                      <span>{isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}</span>
                    </button>

                    <button 
                      onClick={handleShare}
                      className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs py-3 rounded-xl border border-slate-200/80 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Share2 className="w-4 h-4 text-slate-600" />
                      <span>Share Link</span>
                    </button>
                  </div>
                </div>

                {/* Features List Section */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <h4 className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">WHAT'S INCLUDED IN THIS ITEM:</h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                        <CheckCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* TABBED INFORMATION & CONTENT BREAKDOWN */}
        <section className="py-14 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Tab Pill Buttons */}
            <div className="flex flex-wrap gap-2.5 mb-8 border-b border-slate-200 pb-4">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'overview' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Book Overview & Curriculum
              </button>
              <button 
                onClick={() => setActiveTab('author')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'author' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Author & Mentor Info
              </button>
              <button 
                onClick={() => setActiveTab('shipping')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'shipping' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Shipping & Download Policy
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="max-w-4xl space-y-8">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900">Detailed Description</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900">Module & Chapter Breakdown</h3>
                  <div className="space-y-3">
                    {product.chapters.map((chap, index) => (
                      <div key={index} className="bg-gray-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-4 hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-3.5">
                          <span className="w-8 h-8 rounded-xl bg-red-50 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 border border-red-200/80">
                            0{index + 1}
                          </span>
                          <span className="font-bold text-sm text-slate-900">{chap}</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Author */}
            {activeTab === 'author' && (
              <div className="max-w-2xl bg-gray-50 p-8 rounded-3xl border border-slate-200/80 flex items-center gap-6">
                <img 
                  src={product.author.avatar} 
                  alt={product.author.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200/80 inline-block mb-1">
                    Curated By Expert Faculty
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">{product.author.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold">{product.author.title}</p>
                </div>
              </div>
            )}

            {/* Tab 3: Shipping */}
            {activeTab === 'shipping' && (
              <div className="max-w-3xl space-y-4">
                <div className="bg-gray-50 p-6 rounded-3xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-[#DC2626] font-bold text-base">
                    <Truck className="w-5 h-5" />
                    <span>Physical Order Shipping Policy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Physical printed books and decks are dispatched within 24 hours of order placement. Standard delivery takes 2-4 business days across India via BlueDart/Express Bees with SMS tracking updates.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-3xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-base">
                    <Download className="w-5 h-5" />
                    <span>Instant Digital PDF & Audio Access</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Digital E-books and MP3 audio files are delivered instantly after checkout. You will receive direct high-speed download links on the screen and via email for lifetime unlimited access.
                  </p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* RELATED PRODUCTS */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200/80">
                RECOMMENDED STORE ITEMS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Students Who Bought This Also Bought</h2>
            </div>
            <Link href="/store" className="text-xs font-bold text-[#DC2626] hover:underline hidden sm:inline-block">
              View All Store Items &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-2.5 relative h-48">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-[#DC2626] transition-colors">{rel.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-slate-900">₹{rel.price}</span>
                      <span className="text-xs text-slate-400 line-through">₹{rel.originalPrice}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/store/${rel.id}`} 
                    className="mt-4 w-full bg-slate-100 hover:bg-[#DC2626] hover:text-white text-slate-800 font-bold text-xs py-2.5 rounded-xl text-center transition-colors block shadow-xs"
                  >
                    View Product Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SHARED FAQ ACCORDION */}
        <FAQ faqs={storeFaqs} title="Got Questions About Your Order?" subtitle="STORE HELP & FAQS" />

      </main>

      {/* CHECKOUT / BUY NOW MODAL */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-[150] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-slate-900">
            <button 
              onClick={() => { setCheckoutOpen(false); setOrderComplete(false); }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
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
                  Thank you for your purchase. We have dispatched your order details & access links to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShoppingBag className="w-6 h-6 text-[#DC2626]" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-tight">Complete Your Order</h3>
                    <p className="text-xs text-slate-500 font-medium">{product.title}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-semibold">Total Amount Due:</span>
                  <span className="text-lg font-black text-slate-900">₹{product.price}</span>
                </div>

                <div className="space-y-3 pt-1">
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
                      {product.type === 'digital' ? 'Phone Number (For Instant Download SMS)' : 'Shipping Address'}
                    </label>
                    <textarea 
                      required 
                      rows={2}
                      placeholder={product.type === 'digital' ? "Enter 10-digit mobile number" : "Enter complete street address, city, pincode"} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm py-3 rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay ₹{product.price} & Place Order</span>
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
