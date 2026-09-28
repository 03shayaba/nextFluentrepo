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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111726] tracking-tight">
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

            {/* Company Header */}
            <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] border border-amber-100 flex items-center justify-center text-2xl text-[#E59719] shadow-sm flex-shrink-0">
                🏢
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

            {/* Contact Details List */}
            <div className="space-y-4">
              
              {/* Address Item */}
              <div className="bg-[#FAFBFD] rounded-2xl p-5 border border-slate-100/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#E59719] flex items-center justify-center text-lg flex-shrink-0 border border-amber-100">
                  📍
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
              <div className="bg-[#FAFBFD] rounded-2xl p-5 border border-slate-100/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#E59719] flex items-center justify-center text-lg flex-shrink-0 border border-amber-100">
                  ✉️
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
              <div className="bg-[#FAFBFD] rounded-2xl p-5 border border-slate-100/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#E59719] flex items-center justify-center text-lg flex-shrink-0 border border-amber-100">
                  📞
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
