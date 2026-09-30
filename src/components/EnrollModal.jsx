'use client';

import React, { useState } from 'react';

export default function EnrollModal({ isOpen, onClose, course }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold mb-1">Enroll in Course</h2>
          <p className="text-slate-400 text-sm">{course?.title || "Premium Course"}</p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 bg-slate-50">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enrollment Request Sent!</h3>
              <p className="text-slate-500">Our team will contact you shortly to complete the enrollment process.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#E59719] focus:ring-2 focus:ring-[#E59719]/20 transition-all outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#E59719] focus:ring-2 focus:ring-[#E59719]/20 transition-all outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#E59719] focus:ring-2 focus:ring-[#E59719]/20 transition-all outline-none"
                />
              </div>

              {course && (
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 flex justify-between items-center">
                  <span className="text-sm font-bold text-amber-800">Total Price:</span>
                  <span className="text-lg font-black text-[#E59719]">{course.currentPrice}</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg mt-6 ${
                  isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#E59719] hover:bg-[#D48E12] shadow-[#E59719]/20 cursor-pointer'
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Enrollment'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
