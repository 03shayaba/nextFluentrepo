'use client';

import { useState } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 py-16 lg:py-24 border-b border-slate-100 overflow-hidden select-none relative">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Bullets, Paragraph & 3 Quick Contact Cards */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            
            {/* Contact Us Badge */}
            <div>
              <span className="inline-block bg-amber-100/70 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide">
                Contact Us
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] leading-tight tracking-tight">
              Let's Solve Your Learning & Skill Challenges— <span className="text-[#E59719]">Start Today!</span>
            </h2>

            {/* 3 Feature Bullets */}
            <div className="space-y-4 pt-2">
              
              {/* Bullet 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-[#E59719] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-700">
                  24/7 Online Support
                </span>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-[#E59719] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-700">
                  Free Consultation
                </span>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-[#E59719] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a24.12 24.12 0 017.5 0m-7.5 0l3.75 3.75M3 5.621l3.75 3.75M6.75 9.371a24.12 24.12 0 013.75 0" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-700">
                  Multilingual Support
                </span>
              </div>

            </div>

            {/* Descriptive Paragraph */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed pt-2">
              Fill out the form below, and one of our experts will contact you within 24 hours to discuss your needs. We're here to tailor a plan that works for you.
            </p>

            {/* 3 Quick Contact Action Cards at Bottom-Left */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
              
              {/* Call Us Card */}
              <a 
                href="tel:+917889745674"
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-amber-50 text-[#E59719] group-hover:bg-[#E59719] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#E59719] transition-colors">
                  Call Us
                </span>
              </a>

              {/* Chat with Us Card */}
              <a 
                href="https://wa.me/917889745674"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-amber-50 text-[#E59719] group-hover:bg-[#E59719] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#E59719] transition-colors">
                  Chat with Us
                </span>
              </a>

              {/* See Location Card */}
              <a 
                href="#location-map"
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-amber-50 text-[#E59719] group-hover:bg-[#E59719] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#E59719] transition-colors">
                  See Location
                </span>
              </a>

            </div>

          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-100">
            
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="bg-amber-50 text-amber-900 font-bold text-sm p-6 rounded-2xl border border-amber-200 text-center space-y-2">
                <span className="text-3xl block">🎉</span>
                <p>Thank you! Your message has been sent successfully. One of our experts will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Your Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-slate-50/70 rounded-xl border border-slate-200 outline-none focus:border-[#E59719] focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Email Address <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-slate-50/70 rounded-xl border border-slate-200 outline-none focus:border-[#E59719] focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Service Select */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-slate-50/70 rounded-xl border border-slate-200 outline-none focus:border-[#E59719] focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Select Service <span className="text-amber-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-slate-50/70 rounded-xl border border-slate-200 outline-none focus:border-[#E59719] focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all text-slate-700"
                    >
                      <option value="">Choose a service</option>
                      <option value="english-speaking">Spoken English & Fluency</option>
                      <option value="ielts-prep">IELTS Preparation</option>
                      <option value="grammar-masterclass">Grammar & Writing Masterclass</option>
                      <option value="business-english">Business Communication</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Your Message <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-slate-50/70 rounded-xl border border-slate-200 outline-none focus:border-[#E59719] focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E59719] hover:bg-[#d48d12] text-white font-bold text-base py-3.5 sm:py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
                >
                  Send Message
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

      {/* Embedded Location Map Section */}
      <div id="location-map" className="w-full relative mt-16 sm:mt-20">
        <div className="w-full h-[400px] sm:h-[450px] bg-slate-100 relative">
          <iframe
            title="Younus LMS Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.7516248919637!2d74.779435!3d34.22557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185c7cb17bdf7%3A0x8e83cb2b716aa877!2sGanderbal%2C%20Jammu%20and%20Kashmir%20191201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </section>
  );
}
