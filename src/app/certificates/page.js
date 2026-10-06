'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CertificateContent() {
  const searchParams = useSearchParams();
  
  // Read params from URL if shared (e.g. ?name=Elena+Rostova&level=C1&id=NFT-88941C1E9)
  const sharedName = searchParams.get('name');
  const sharedLevel = searchParams.get('level');
  const sharedId = searchParams.get('id');

  const [studentName, setStudentName] = useState("Elena Rostova");
  const [selectedLevel, setSelectedLevel] = useState("C1");
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [isPublicView, setIsPublicView] = useState(false);

  // Sync state with URL query parameters when opened via shared link
  useEffect(() => {
    if (sharedName) {
      setStudentName(sharedName);
      setIsPublicView(true);
    }
    if (sharedLevel) {
      setSelectedLevel(sharedLevel);
    }
    if (sharedId) {
      setVerifyId(sharedId);
    }
  }, [sharedName, sharedLevel, sharedId]);

  // Verification lookup state
  const [verifyId, setVerifyId] = useState(sharedId || "NFT-88941C1E9");
  const [verifyResult, setVerifyResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const levels = [
    { id: "B1", title: "B1 Intermediate", desc: "Independent User", score: "82/100" },
    { id: "B2", title: "B2 Upper-Int.", desc: "Vantage Competence", score: "88/100" },
    { id: "C1", title: "C1 Advanced", desc: "Effective Operational", score: "94/100" },
    { id: "C2", title: "C2 Mastery", desc: "Native Fluency Level", score: "99/100" },
  ];

  const currentSkillData = {
    B1: [
      { name: "Listening & Comprehension", score: 84 },
      { name: "Reading & Analytical Fluency", score: 82 },
      { name: "Spoken Expression & Phonetics", score: 80 },
      { name: "Written Syntax & Tone", score: 82 },
    ],
    B2: [
      { name: "Listening & Comprehension", score: 90 },
      { name: "Reading & Analytical Fluency", score: 88 },
      { name: "Spoken Expression & Phonetics", score: 86 },
      { name: "Written Syntax & Tone", score: 88 },
    ],
    C1: [
      { name: "Listening & Comprehension", score: 96 },
      { name: "Reading & Analytical Fluency", score: 94 },
      { name: "Spoken Expression & Phonetics", score: 92 },
      { name: "Written Syntax & Tone", score: 94 },
    ],
    C2: [
      { name: "Listening & Comprehension", score: 100 },
      { name: "Reading & Analytical Fluency", score: 99 },
      { name: "Spoken Expression & Phonetics", score: 98 },
      { name: "Written Syntax & Tone", score: 99 },
    ],
  }[selectedLevel];

  // Generate shareable URL with parameters
  const handleShare = () => {
    if (navigator.clipboard) {
      const shareUrl = `${window.location.origin}${window.location.pathname}?id=${verifyId}&name=${encodeURIComponent(studentName)}&level=${selectedLevel}`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      window.print();
      setDownloading(false);
    }, 400);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (!verifyId.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setVerifyResult({
        id: verifyId.toUpperCase(),
        name: studentName,
        level: selectedLevel === "C1" ? "C1 Advanced" : `${selectedLevel} Level`,
        status: "VERIFIED & ACTIVE",
        issued: "October 24, 2026",
        authority: "NextFluent Board of Academic Rigor",
        hash: "sha256:88941c1e9f47a012b",
      });
    }, 600);
  };

  const certificateFaqs = [
    { q: "How do I choose the right category?", a: "If you're looking to improve workplace communication, Business English is ideal. If you're preparing for an exam, check out IELTS Preparation. For general speaking confidence, Spoken English & Fluency is our most popular choice." },
    { q: "Can I switch categories later?", a: "Yes! You can enroll in courses across multiple categories at any time. Your progress is saved independently for each course." },
    { q: "Are the courses live or pre-recorded?", a: "We offer a mix of both. Most foundational grammar and vocabulary courses are self-paced, while our Fluency and Public Speaking courses feature interactive live sessions." },
    { q: "Do I get a certificate?", a: "Absolutely. Upon successful completion of any course within these categories, you will receive an accredited certificate that you can add to your resume." }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9FA] text-slate-800 font-sans flex flex-col antialiased">
      {/* Header - Hidden on Print */}
      <div className="no-print print:hidden">
        <Header />
      </div>

      <main className="flex-grow print:py-0 print:px-0">
        
        {/* STANDALONE DARK HERO SECTION - Matched to Contact Page Height & Styling */}
        <section className="no-print print:hidden relative w-full bg-[#0B1120] pt-20 pb-32 overflow-hidden border-b border-white/10 z-0 mb-8 select-none">
          {/* Dynamic Background Orbs */}
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-600/20 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none z-[-1]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center text-xs sm:text-sm font-medium text-slate-300 gap-2.5 bg-white/5 backdrop-blur-md w-fit mx-auto px-5 py-2 rounded-full border border-white/10 shadow-lg shadow-black/20 mb-8">
              <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <a href="/" className="hover:text-red-400 transition-colors">Home</a>
              <span className="text-white/20">/</span>
              <span className="text-white">Certificates</span>
            </div>

            <div className="inline-block bg-red-500/10 backdrop-blur-md border border-red-500/20 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm relative tracking-wider">
              <span>{isPublicView ? "🎓 Verified Public Credential" : "🎓 Official Verifiable Credential"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto drop-shadow-xl">
              {isPublicView ? `${studentName}'s Certified Credential` : <>Certify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-300 drop-shadow-sm">English Proficiency</span></>}
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Inspect, verify, and download accredited language mastery credentials verified by AI-proctored evaluation.
            </p>
          </div>
        </section>

        {/* PAGE CONTENT CONTAINER (LIGHT THEME BODY) */}
        <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto print:max-w-full print:w-full">

          {/* Interactive Tier Level Selector - Hidden on Print */}
          {!isPublicView && (
            <div className="no-print print:hidden bg-white rounded-2xl p-1.5 mb-6 border border-rose-100 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-1.5 max-w-2xl mx-auto">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`py-2 px-3 rounded-xl text-left transition-all ${
                    selectedLevel === lvl.id
                      ? 'bg-[#351D22] text-white shadow-sm'
                      : 'bg-transparent text-slate-600 hover:bg-rose-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${selectedLevel === lvl.id ? 'text-white' : 'text-slate-900'}`}>
                      Tier {lvl.id}
                    </span>
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                      selectedLevel === lvl.id ? 'bg-[#D92338] text-white' : 'bg-rose-50 text-[#D92338]'
                    }`}>
                      {lvl.score}
                    </span>
                  </div>
                  <span className={`block text-[10.5px] truncate mt-0.5 ${
                    selectedLevel === lvl.id ? 'text-rose-200' : 'text-slate-400'
                  }`}>
                    {lvl.desc}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Top Recipient Bar - Hidden on Print */}
          <div className="no-print print:hidden flex items-center justify-between bg-white border border-rose-100/90 rounded-2xl px-5 py-3 mb-6 shadow-xs max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92338]"></span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500">Certificate Recipient:</span>
            </div>
            {!isPublicView && isEditing ? (
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                onBlur={() => setIsEditing(false)}
                onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
                autoFocus
                className="font-semibold text-slate-900 text-xs sm:text-sm focus:outline-none border-b-2 border-[#D92338] px-2 py-0.5 bg-rose-50/60 rounded"
              />
            ) : (
              <button 
                onClick={() => !isPublicView && setIsEditing(true)}
                className="font-semibold text-slate-900 text-xs sm:text-sm hover:text-[#D92338] flex items-center gap-1.5 transition-colors group"
                title={isPublicView ? "Verified Recipient" : "Click to edit recipient name"}
              >
                <span>{studentName}</span>
                {!isPublicView && (
                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D92338] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* DYNAMIC CERTIFICATE CARD */}
          <div className="print-cert-container group relative bg-[#351D22] p-3 sm:p-5 md:p-6 lg:p-7 rounded-[26px] sm:rounded-[34px] shadow-[0_20px_50px_-15px_rgba(45,20,25,0.4)] border border-[#4A2A31]">
            
            {/* Inner White Paper Canvas */}
            <div className="print-cert-card bg-white rounded-[20px] sm:rounded-[26px] p-5 sm:p-8 md:p-10 lg:p-12 text-center relative border border-rose-50/80 shadow-inner overflow-hidden">
              
              {/* Top Header Row */}
              <div className="flex items-center justify-between w-full mb-6 md:mb-8 relative z-10">
                
                {/* Brand Mark */}
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#D92338] text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-4.5 h-4.5 md:w-5.5 md:h-5.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold text-[#D92338] text-xs sm:text-sm md:text-base tracking-wider uppercase leading-none">
                      NEXTFLUENT
                    </span>
                    <span className="block font-semibold text-slate-400 text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-widest uppercase mt-0.5">
                      BOARD OF ACADEMIC RIGOR
                    </span>
                  </div>
                </div>

                {/* Tier Badge */}
                <div className="bg-[#FFEBF0] text-[#D92338] font-semibold text-[11px] sm:text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-full border border-rose-200/60 shadow-xs">
                  TIER {selectedLevel}
                </div>
              </div>

              {/* Certificate Heading */}
              <div className="my-5 md:my-7 relative z-10">
                <span className="text-slate-400 font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.22em] uppercase block mb-1.5">
                  FORMAL ATTESTATION
                </span>
                
                <h2 className="font-serif-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug md:leading-tight md:whitespace-nowrap max-w-xs md:max-w-none mx-auto print:whitespace-nowrap print:text-3xl">
                  Certificate of Language Mastery
                </h2>

                <div className="w-10 md:w-14 h-[2.5px] md:h-[3px] bg-[#D92338] rounded-full mx-auto mt-3 md:mt-4 mb-4 md:mb-6"></div>
              </div>

              {/* Main Certification Paragraph */}
              <p className="text-slate-600 text-xs sm:text-[13px] md:text-base lg:text-lg leading-relaxed max-w-sm md:max-w-2xl mx-auto mb-6 md:mb-8 font-normal relative z-10">
                This certifies that <strong className="text-slate-900 font-semibold">{studentName}</strong> has satisfied all academic standards and proctored examinations demonstrating mastery at the <span className="text-[#D92338] font-semibold">{selectedLevel === "C1" ? "C1 Advanced Level" : `${selectedLevel} Level`}</span> per the Common European Framework of Reference for Languages (CEFR).
              </p>

              {/* Signatures Card */}
              <div className="bg-[#FFF4F6] border border-rose-100/90 rounded-xl md:rounded-2xl p-4 md:px-8 md:py-5 mb-6 md:mb-8 grid grid-cols-2 md:flex md:items-center md:justify-between gap-4 text-left relative z-10 print:flex print:items-center print:justify-between">
                
                {/* Director */}
                <div className="pl-1 md:pl-0">
                  <div className="font-serif-title italic font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D92338] leading-tight mb-0.5">
                    M. Silva
                  </div>
                  <div className="font-semibold text-slate-900 text-xs md:text-sm leading-tight">
                    Dr. Marcos Silva
                  </div>
                  <div className="text-slate-400 text-[10px] md:text-xs font-medium">
                    Academic Director
                  </div>
                </div>

                {/* Assessment */}
                <div className="pl-3 md:pl-0 border-l md:border-l-0 border-rose-200/60 md:text-right">
                  <div className="font-serif-title italic font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D92338] leading-tight mb-0.5">
                    A. Laurent
                  </div>
                  <div className="font-semibold text-slate-900 text-xs md:text-sm leading-tight">
                    Prof. Anne Laurent
                  </div>
                  <div className="text-slate-400 text-[10px] md:text-xs font-medium">
                    Head of Assessment
                  </div>
                </div>

              </div>

              {/* Immutable Record & Gold Seal Footer */}
              <div className="flex items-center justify-between pt-1 md:pt-2 relative z-10">
                
                {/* QR Code & Record Hash */}
                <button
                  onClick={() => setShowQrModal(true)}
                  className="flex items-center gap-2.5 md:gap-3 text-left group/qr hover:opacity-90 transition-opacity"
                  title="Click to view QR details"
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-[#FFEBF0] rounded-lg md:rounded-xl flex items-center justify-center text-slate-800 p-1.5 md:p-2.5 flex-shrink-0 border border-rose-100/80 group-hover/qr:border-rose-300 transition-colors">
                    <svg className="w-full h-full text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v3h-2v-3zm3 3h3v5h-3v-5zm-6 2h3v3h-3v-3zm3 3h2v2h-2v-2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-wide leading-tight group-hover/qr:text-[#D92338] transition-colors">
                      IMMUTABLE RECORD
                    </span>
                    <span className="block text-slate-400 font-mono text-[9px] md:text-[10.5px] tracking-tight">
                      sha256:88941c1e9
                    </span>
                  </div>
                </button>

                {/* Gold Seal Red Badge */}
                <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#E11D48] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>GOLD SEAL</span>
                </div>

              </div>

            </div>
          </div>

          {/* Action Buttons Below Certificate - Hidden on Print */}
          <div className="no-print print:hidden mt-5 md:mt-6 space-y-2.5 sm:space-y-3">
            
            {/* Primary Download Button */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full bg-[#D92338] hover:bg-[#B81A2D] text-white font-semibold py-3.5 sm:py-4 px-5 rounded-xl sm:rounded-2xl transition-all shadow-md sm:shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2.5 text-sm sm:text-base md:text-lg active:scale-[0.99]"
            >
              <svg className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${downloading ? 'animate-bounce' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{downloading ? "Preparing Document..." : "Download Official PDF (Printable)"}</span>
            </button>

            {/* LinkedIn & Share Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              
              <a
                href="https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#351D22] hover:bg-[#251317] text-white font-semibold py-2.5 sm:py-3.5 px-4 sm:px-5 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base border border-[#4A2A31] shadow-xs"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>Add to LinkedIn</span>
              </a>

              <button
                onClick={handleShare}
                className="bg-[#FFEBF0] hover:bg-[#FFD6E0] text-[#D92338] font-semibold py-2.5 sm:py-3.5 px-4 sm:px-5 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base border border-rose-200/70 shadow-xs"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-700">Link Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>Share Link</span>
                  </>
                )}
              </button>

            </div>

          </div>

          {/* Social Proof Trust Bar - Hidden on Print */}
          <div className="no-print print:hidden mt-6 bg-white rounded-2xl p-4 border border-rose-100 shadow-2xs flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-base text-blue-600">🏛️</span>
              <span>CEFR Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-rose-600">🛡️</span>
              <span>SHA-256 Ledger</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-blue-500">💼</span>
              <span>LinkedIn Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-emerald-600">⚡</span>
              <span>Instant HR Lookup</span>
            </div>
          </div>

          {/* WHY OUR CERTIFICATES MATTER (VALUE & BENEFITS SECTION) */}
          <div className="no-print print:hidden mt-14 sm:mt-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-rose-100/70 text-[#D92338] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                <span>🌟</span> VALUE & BENEFITS
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Why Our Certificates Matter
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                More than just a piece of paper. Our credentials are a powerful tool to advance your career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Global Recognition */}
              <div className="group relative rounded-3xl bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col justify-between">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-400/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-5 shadow-md shadow-red-500/20">
                    🌐
                  </div>
                  <div className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    GLOBAL REACH
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Global Recognition</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Accepted by multinational corporations and universities. Prove your English proficiency anywhere in the world with absolute confidence.
                  </p>
                </div>
              </div>

              {/* Card 2: Resume Booster */}
              <div className="group relative rounded-3xl bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col justify-between">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-5 shadow-md shadow-blue-500/20">
                    💼
                  </div>
                  <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    CAREER GROWTH
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Resume Booster</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Seamlessly add your digital certificate to your LinkedIn profile with 1-click. Make your resume stand out to top recruiters.
                  </p>
                </div>
              </div>

              {/* Card 3: Secure & Verifiable */}
              <div className="group relative rounded-3xl bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col justify-between">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-5 shadow-md shadow-emerald-500/20">
                    🛡️
                  </div>
                  <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    VERIFIED ID
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Verifiable</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Every certificate contains a unique cryptographic ID. Employers can instantly verify its authenticity on our platform.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Audited Skill Breakdown Section - Hidden on Print */}
          <div className="no-print print:hidden mt-12 bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 border border-rose-100 shadow-sm">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4 md:mb-6 pb-3 md:pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-sm md:text-base font-bold text-slate-900 leading-none">
                  Audited Skill Breakdown
                </h3>
                <p className="text-[10.5px] md:text-xs font-medium text-slate-400 mt-1">
                  Validated via AI Proctored Examination
                </p>
              </div>

              <div className="text-right">
                <span className="block text-[9px] md:text-[10.5px] font-semibold uppercase text-slate-400 tracking-wider">
                  OVERALL RESULT
                </span>
                <span className="text-lg md:text-2xl font-extrabold text-[#D92338] leading-none">
                  {levels.find(l => l.id === selectedLevel)?.score}
                </span>
              </div>
            </div>

            {/* Skill Bars */}
            <div className="space-y-3 md:space-y-4">
              {currentSkillData.map((skill, idx) => (
                <div key={idx} className="space-y-1 md:space-y-1.5">
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="font-semibold text-slate-700">{skill.name}</span>
                    <span className="font-bold text-[#D92338]">{skill.score}%</span>
                  </div>
                  <div className="w-full h-1.5 md:h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D92338] rounded-full transition-all duration-500"
                      style={{ width: `${skill.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Real-time Employer Credential Verification Lookup */}
          <div className="no-print print:hidden mt-8 md:mt-10 bg-gradient-to-br from-[#351D22] via-[#2A161A] to-[#1E0F12] rounded-2xl md:rounded-3xl p-5 md:p-8 text-white shadow-lg border border-[#4A2A31]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-xs md:max-w-md">
                <span className="inline-block text-[9.5px] md:text-xs font-bold uppercase tracking-widest bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full mb-2 border border-rose-500/30">
                  Instant Verification
                </span>
                <h3 className="text-base md:text-xl font-bold tracking-tight">
                  Verify Any Credential
                </h3>
                <p className="text-xs text-rose-100/70 mt-0.5 leading-relaxed">
                  Enter Credential ID or SHA-256 Hash to verify test logs in real-time.
                </p>
              </div>

              <form onSubmit={handleVerify} className="flex-grow max-w-xs md:max-w-sm flex gap-1.5">
                <input
                  type="text"
                  value={verifyId}
                  onChange={(e) => setVerifyId(e.target.value)}
                  placeholder="e.g. NFT-88941C1E9"
                  className="flex-grow bg-white/10 text-white placeholder:text-rose-200/50 font-mono text-xs px-3 py-2.5 rounded-xl border border-white/20 focus:outline-none focus:border-rose-400"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-[#D92338] hover:bg-[#B81A2D] text-[#FFF9FA] font-bold px-4 py-2.5 rounded-xl transition-all text-xs sm:text-sm whitespace-nowrap flex items-center justify-center gap-1.5"
                >
                  {isSearching ? (
                    <span>Verifying...</span>
                  ) : (
                    <span>Check ID</span>
                  )}
                </button>
              </form>
            </div>

            {/* Verification Result Drawer */}
            {verifyResult && (
              <div className="mt-4 pt-4 border-t border-white/15">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 text-[9px] md:text-[10px] uppercase font-bold tracking-wider block">Status</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {verifyResult.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] md:text-[10px] uppercase font-bold tracking-wider block">Recipient</span>
                    <span className="font-bold text-white mt-0.5 block truncate">{verifyResult.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] md:text-[10px] uppercase font-bold tracking-wider block">Level</span>
                    <span className="font-bold text-rose-300 mt-0.5 block">{verifyResult.level}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] md:text-[10px] uppercase font-bold tracking-wider block">Issuing Body</span>
                    <span className="font-bold text-white mt-0.5 block">{verifyResult.authority}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4-Step Accreditation Journey */}
          <div className="no-print print:hidden mt-8 md:mt-12 mb-8 md:mb-12">
            <div className="text-center mb-6">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#D92338]">ACCREDITATION PROCESS</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                How Our Certificates Work
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 border border-rose-100 shadow-2xs">
                <span className="text-xs font-bold text-[#D92338] block mb-1">01. Exam</span>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5">AI-Proctored Exam</h4>
                <p className="text-[11px] md:text-xs text-slate-500 leading-snug">
                  Evaluates reading, listening, speaking & syntax.
                </p>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 border border-rose-100 shadow-2xs">
                <span className="text-xs font-bold text-[#D92338] block mb-1">02. CEFR</span>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5">Benchmarking</h4>
                <p className="text-[11px] md:text-xs text-slate-500 leading-snug">
                  Scored to CEFR international proficiency standards.
                </p>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 border border-rose-100 shadow-2xs">
                <span className="text-xs font-bold text-[#D92338] block mb-1">03. Ledger</span>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5">SHA-256 Hash</h4>
                <p className="text-[11px] md:text-xs text-slate-500 leading-snug">
                  Cryptographic tamper-proof record security.
                </p>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 border border-rose-100 shadow-2xs">
                <span className="text-xs font-bold text-[#D92338] block mb-1">04. Share</span>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5">LinkedIn & PDF</h4>
                <p className="text-[11px] md:text-xs text-slate-500 leading-snug">
                  Share directly on LinkedIn or download vector PDF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>

      {/* QR Details Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center border border-rose-100 shadow-2xl relative animate-fade-in">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold"
            >
              ×
            </button>
            <div className="w-14 h-14 bg-rose-50 text-[#D92338] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-rose-100 text-2xl">
              🔍
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Cryptographic Ledger Record</h3>
            <p className="text-xs text-slate-500 mb-4">
              Scanned QR verifies the authentic test log for recipient <strong className="text-slate-800">{studentName}</strong>.
            </p>
            <div className="bg-slate-50 rounded-xl p-3 text-left font-mono text-[10px] text-slate-600 break-all mb-5 border border-slate-200">
              HASH: sha256:88941c1e9f47a012b3c4d5e6f7a8b9c0d1e2f3
            </div>
            <button
              onClick={() => setShowQrModal(false)}
              className="w-full bg-[#D92338] text-white font-bold py-2.5 rounded-xl text-xs"
            >
              Close Record Window
            </button>
          </div>
        </div>
      )}

      {/* Shared FAQ Component - Hidden on Print */}
      <div className="no-print print:hidden">
        <FAQ
          faqs={certificateFaqs}
          title="Frequently Asked Questions"
          subtitle="Got Questions?"
        />
      </div>

      {/* Footer - Hidden on Print */}
      <div className="no-print print:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default function CertificatesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FFF9FA]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#D92338] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <span className="text-xs font-semibold text-slate-500">Loading Certificate...</span>
        </div>
      </div>
    }>
      <CertificateContent />
    </Suspense>
  );
}
