'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      
      <main>
        {/* Contact Hero Banner */}
        <section className="relative w-full bg-[#0B1120] pt-20 pb-32 overflow-hidden border-b border-white/10 z-0">
          
          {/* Dynamic Background Orbs */}
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none z-[-1]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center text-sm font-medium text-slate-300 gap-3 bg-white/5 backdrop-blur-md w-fit mx-auto px-5 py-2.5 rounded-full border border-white/10 shadow-lg shadow-black/20 mb-8">
              <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <a href="/" className="hover:text-red-400 transition-colors">Home</a>
              <span className="text-white/20">/</span>
              <span className="text-white">Contact</span>
            </div>

            <div className="inline-block bg-red-500/10 backdrop-blur-md border border-red-500/20 text-[#EF4444] font-bold text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm relative tracking-wider">
              👋 We're here to help
              
              {/* Decorative handwritten text pointing to the badge */}
              <div className="absolute -top-12 -left-32 hidden md:block rotate-[-12deg]">
                <span className="text-red-400 font-light text-2xl whitespace-nowrap drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}>Say hello!</span>
                <svg className="w-12 h-12 text-red-500/80 mt-1 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight relative max-w-4xl mx-auto drop-shadow-xl">
              Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-300 drop-shadow-sm">Conversation</span>
              
              {/* Sparkle Icon */}
              <svg className="absolute -top-6 -right-10 w-8 h-8 text-rose-300 hidden sm:block animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed relative">
              Have questions about our courses, pricing, or your learning journey? Our team of experts is ready to answer all your questions and get you started.
            </p>
          </div>
        </section>

        {/* Contact Info Cards & Form Section */}
        <section className="relative -mt-16 z-20 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Contact Info Cards */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                
                {/* Email Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-14 h-14 bg-red-50 text-[#DC2626] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Email Us</h3>
                  <p className="text-slate-500 text-sm mb-4">Our friendly team is here to help.</p>
                  <a href="mailto:ngecsupport@gmail.com" className="text-[#DC2626] font-bold text-lg hover:underline">ngecsupport@gmail.com</a>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-14 h-14 bg-red-50 text-[#DC2626] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Call Us</h3>
                  <p className="text-slate-500 text-sm mb-4">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+917889745674" className="text-[#DC2626] font-bold text-lg hover:underline">+91-7889745674</a>
                </div>

                {/* Office Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-14 h-14 bg-red-50 text-[#DC2626] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Visit Us</h3>
                  <p className="text-slate-500 text-sm mb-4">Come say hello at our center.</p>
                  <p className="text-[#0F172A] font-bold text-base leading-snug">
                    Opposite Punjab National Bank<br/>
                    Duderhama, Ganderbal<br/>
                    Jammu and Kashmir, 191201
                  </p>
                </div>

              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 p-8 sm:p-12 shadow-[0_20px_40px_rgb(0,0,0,0.03)] relative">
                


                <div className="mb-10 relative">
                  <h3 className="text-3xl font-extrabold text-[#0F172A] mb-3">Send us a message</h3>
                  <p className="text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50 focus:border-[#DC2626] transition-all text-slate-700 font-medium"
                        placeholder="John"
                      />
                    </div>
                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50 focus:border-[#DC2626] transition-all text-slate-700 font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50 focus:border-[#DC2626] transition-all text-slate-700 font-medium"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50 focus:border-[#DC2626] transition-all text-slate-700 font-medium"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                    <textarea 
                      id="message" 
                      rows="5"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50 focus:border-[#DC2626] transition-all text-slate-700 font-medium resize-none"
                      placeholder="Tell us a little about what you're looking for..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="button" 
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-lg py-4 rounded-xl shadow-[0_8px_20px_-6px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-center text-sm text-slate-400 mt-4">
                    By submitting this form, you agree to our <a href="#" className="text-[#DC2626] hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[300px] sm:h-[400px] relative">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Punjab%20National%20Bank%20Duderhama,%20Ganderbal,%20Jammu%20and%20Kashmir,%20191201&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </section>

      </main>

      <Footer />
    </div>
  );
}
