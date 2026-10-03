'use client';

import React, { useState } from 'react';

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div 
      className={`bg-[#0F172A] border rounded-2xl px-6 py-5 sm:px-8 transition-all duration-300 cursor-pointer ${isOpen ? 'border-[#DC2626] bg-[#0F172A] shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'border-[#1E293B] hover:border-red-500/40'}`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-base sm:text-lg font-extrabold text-white flex items-start sm:items-center gap-3">
          <span className="text-[#EF4444] font-black shrink-0">Q.</span>
          <span>{faq.q}</span>
        </h4>
        <div className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#EF4444]' : 'text-slate-400'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-slate-300 leading-relaxed ml-0 sm:ml-7 pt-2 text-xs sm:text-sm font-medium border-t border-slate-800/80 mt-2">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ({ faqs, title = "Frequently Asked Questions", subtitle = "GOT QUESTIONS?" }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#05030A] relative overflow-hidden text-white border-t border-slate-900 select-none">
      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-block bg-[#DC2626]/10 border border-[#DC2626]/30 px-5 py-1.5 rounded-full mb-5 shadow-sm">
            <span className="text-[#EF4444] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-400">Questions</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem 
              key={idx} 
              faq={faq} 
              isOpen={openIndex === idx} 
              onToggle={() => handleToggle(idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
