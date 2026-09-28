'use client';

export default function GetInTouch() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Center Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#E59719] font-extrabold text-xs sm:text-sm uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111726] tracking-tight">
            We'd Love to Hear From You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* 2-Column Layout (Left Contact Info Box | Right Embedded Google Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Info Card with Top Amber Border */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-lg shadow-slate-100 relative overflow-hidden flex flex-col justify-between space-y-8">
            
            {/* Top Amber Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E59719]" />

            {/* Company Header with High Quality SVG Icon */}
            <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] border border-amber-100 flex items-center justify-center text-[#E59719] shadow-sm flex-shrink-0">
                <svg className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                  <path d="M9 22v-4h6v4"/>
                  <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[#E59719] uppercase tracking-widest block">
                  COMPANY
                </span>
                <h3 className="text-2xl font-black text-[#111726]">
                  Younus LMS
                </h3>
              </div>
            </div>

            {/* Contact Details List with SVG Icons */}
            <div className="space-y-4">
              
              {/* Address Item */}
              <div className="bg-[#FAFBFD] rounded-2xl p-5 border border-slate-100/80 flex items-start gap-4 hover:border-amber-200 transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8EE] text-[#E59719] flex items-center justify-center flex-shrink-0 border border-amber-100 shadow-sm">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">
                    ADDRESS
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                    Opposite Punjab National Bank Duderhama, Ganderbal, Jammu and Kashmir, 191201
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="bg-[#FAFBFD] rounded-2xl p-5 border border-slate-100/80 flex items-start gap-4 hover:border-amber-200 transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8EE] text-[#E59719] flex items-center justify-center flex-shrink-0 border border-amber-100 shadow-sm">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">
                    EMAIL
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    ngecsupport@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="bg-[#FAFBFD] rounded-2xl p-5 border border-slate-100/80 flex items-start gap-4 hover:border-amber-200 transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8EE] text-[#E59719] flex items-center justify-center flex-shrink-0 border border-amber-100 shadow-sm">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">
                    PHONE
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    +91-7889745674
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Map Container with Top Amber Border */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100 relative overflow-hidden min-h-[420px] flex flex-col">
            
            {/* Top Amber Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E59719] z-10" />

            {/* Embedded Google Map Iframe */}
            <iframe
              title="Younus LMS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.7516248919637!2d74.779435!3d34.22557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185c7cb17bdf7%3A0x8e83cb2b716aa877!2sGanderbal%2C%20Jammu%20and%20Kashmir%20191201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[420px] border-0 rounded-3xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
