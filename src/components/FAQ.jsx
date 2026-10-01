'use client';

import React, { useState } from 'react';

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`bg-[#1E293B] border rounded-2xl px-6 py-5 sm:px-8 transition-colors cursor-pointer ${isOpen ? 'border-[#DC2626]' : 'border-slate-700 hover:border-[#DC2626]/50'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-lg font-bold text-white flex items-start sm:items-center gap-3">
          <span className="text-[#EF4444] font-black shrink-0">Q.</span>
          <span>{faq.q}</span>
        </h4>
        <div className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-slate-400 leading-relaxed ml-0 sm:ml-7 pt-1">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ({ faqs, title = "Frequently Asked Questions", subtitle = "Got questions? We've got answers." }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="bg-[#111726] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E293B]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}
