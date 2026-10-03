'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ExamFeatures from "@/components/ExamFeatures";
import FAQ from "@/components/FAQ";

import { useSearchParams, useRouter } from 'next/navigation';

const quizFaqs = [
  { q: "How do I choose the right category?", a: "If you're looking to improve workplace communication, Business English is ideal. If you're preparing for an exam, check out IELTS Preparation. For general speaking confidence, Spoken English & Fluency is our most popular choice." },
  { q: "Can I switch categories later?", a: "Yes! You can enroll in courses across multiple categories at any time. Your progress is saved independently for each course." },
  { q: "Are the courses live or pre-recorded?", a: "We offer a mix of both. Most foundational grammar and vocabulary courses are self-paced, while our Fluency and Public Speaking courses feature interactive live sessions." },
  { q: "Do I get a certificate?", a: "Absolutely. Upon successful completion of any course within these categories, you will receive an accredited certificate that you can add to your resume." }
];

// Quiz Question Banks with Explanations
const quizData = {
  placement: {
    title: "General Placement Test",
    badge: "Complete Assessment",
    timeLimit: 300, // 5 minutes (1 minute per question)
    questions: [
      {
        id: 1,
        question: "Which sentence demonstrates correct verb tense usage in modern English?",
        options: [
          "She don't like coffee in the morning.",
          "She doesn't likes coffee in the morning.",
          "She doesn't like coffee in the morning.",
          "She isn't like coffee in the morning."
        ],
        answer: 2,
        explanation: "Third-person singular ('she') requires 'does not' combined with the base verb form ('like')."
      },
      {
        id: 2,
        question: "By the time we arrived at the venue, the concert ____.",
        options: [
          "already started",
          "had already started",
          "has already started",
          "was already starting"
        ],
        answer: 1,
        explanation: "Past Perfect ('had started') is used for an action completed before another past event."
      },
      {
        id: 3,
        question: "If I ____ more time, I would travel around the world.",
        options: [
          "have",
          "had",
          "would have",
          "have had"
        ],
        answer: 1,
        explanation: "Second Conditional formula: 'If + simple past, would + base verb' for hypothetical scenarios."
      },
      {
        id: 4,
        question: "Choose the word closest in meaning to 'Meticulous':",
        options: [
          "Careless",
          "Extremely careful & precise",
          "Quick",
          "Hesitant"
        ],
        answer: 1,
        explanation: "'Meticulous' means showing great attention to detail; very careful and precise."
      },
      {
        id: 5,
        question: "Neither the manager nor the employees ____ informed about the schedule change.",
        options: [
          "was",
          "were",
          "has been",
          "is"
        ],
        answer: 1,
        explanation: "In 'neither... nor' structures, the verb agrees with the closer subject ('employees' -> 'were')."
      }
    ]
  },
  grammar: {
    title: "Grammar Check Assessment",
    badge: "Targeted Skill",
    timeLimit: 300, // 5 minutes (1 minute per question)
    questions: [
      {
        id: 1,
        question: "Identify the grammatically correct inverted sentence structure:",
        options: [
          "Scarcely had he entered the room than the phone rang.",
          "Scarcely had he entered the room when the phone rang.",
          "Scarcely he had entered the room when phone rang.",
          "Scarcely did he entered the room when the phone rang."
        ],
        answer: 1,
        explanation: "'Scarcely... when' is the accurate inverted adverbial pair."
      },
      {
        id: 2,
        question: "I suggested that she ____ a specialist immediately.",
        options: [
          "sees",
          "should see",
          "see",
          "saw"
        ],
        answer: 2,
        explanation: "Subjunctive mood after 'suggested that' takes the bare infinitive verb form ('see')."
      },
      {
        id: 3,
        question: "Hardly ____ finished my work when my colleague arrived.",
        options: [
          "I had",
          "had I",
          "I have",
          "did I"
        ],
        answer: 1,
        explanation: "Inversion following 'Hardly' requires placing the auxiliary verb before the subject ('had I')."
      },
      {
        id: 4,
        question: "The reference document is sitting ____ the table.",
        options: [
          "in",
          "on",
          "at",
          "over"
        ],
        answer: 1,
        explanation: "'On' indicates physical contact with a surface."
      },
      {
        id: 5,
        question: "She is one of those professionals who ____ always punctual.",
        options: [
          "is",
          "are",
          "be",
          "was"
        ],
        answer: 1,
        explanation: "'Who' refers to the plural antecedent 'professionals', requiring plural verb 'are'."
      }
    ]
  },
  vocabulary: {
    title: "Vocabulary Size Assessment",
    badge: "Targeted Skill",
    timeLimit: 300, // 5 minutes (1 minute per question)
    questions: [
      {
        id: 1,
        question: "What is the synonym of 'Pragmatic'?",
        options: [
          "Idealistic",
          "Practical",
          "Theoretical",
          "Emotional"
        ],
        answer: 1,
        explanation: "'Pragmatic' means dealing with things sensibly and realistically based on practical considerations."
      },
      {
        id: 2,
        question: "Choose the antonym of 'Ephemeral':",
        options: [
          "Fleeting",
          "Transient",
          "Permanent",
          "Short-lived"
        ],
        answer: 2,
        explanation: "'Ephemeral' means short-lived; its opposite is 'Permanent'."
      },
      {
        id: 3,
        question: "What does 'Ubiquitous' mean?",
        options: [
          "Present everywhere",
          "Rarely found",
          "Uncertain",
          "Dangerous"
        ],
        answer: 0,
        explanation: "'Ubiquitous' means present, appearing, or found everywhere."
      },
      {
        id: 4,
        question: "Select the word that means 'to make something less severe':",
        options: [
          "Aggravate",
          "Mitigate",
          "Escalate",
          "Complicate"
        ],
        answer: 1,
        explanation: "'Mitigate' means to make less severe, serious, or painful."
      },
      {
        id: 5,
        question: "What is the meaning of 'Candid'?",
        options: [
          "Deceitful",
          "Frank and honest",
          "Secretive",
          "Shy"
        ],
        answer: 1,
        explanation: "'Candid' means truthful, straightforward, and frank."
      }
    ]
  }
};

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quizTypeFromUrl = searchParams ? searchParams.get('type') : null;

  const [activeQuiz, setActiveQuiz] = useState(null); // 'placement' | 'grammar' | 'vocabulary' | null
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const QUESTION_TIME_LIMIT = 60; // 1 minute per question
  const [questionTimeLeft, setQuestionTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [showExplanations, setShowExplanations] = useState(false);

  // Sync state with URL parameter ?type=xxx
  useEffect(() => {
    if (quizTypeFromUrl && quizData[quizTypeFromUrl]) {
      setActiveQuiz(quizTypeFromUrl);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setIsCompleted(false);
      setShowExplanations(false);
      setQuestionTimeLeft(QUESTION_TIME_LIMIT);
    } else {
      setActiveQuiz(null);
    }
  }, [quizTypeFromUrl]);

  // Per-Question 1-Minute Countdown Timer Effect
  useEffect(() => {
    if (!activeQuiz || isCompleted) return;

    if (questionTimeLeft <= 0) {
      if (activeQuiz && currentQuestionIndex < quizData[activeQuiz].questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setQuestionTimeLeft(QUESTION_TIME_LIMIT);
      } else {
        setIsCompleted(true);
      }
      return;
    }

    const timer = setInterval(() => {
      setQuestionTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [activeQuiz, isCompleted, questionTimeLeft, currentQuestionIndex]);

  const startTest = (quizKey) => {
    router.push(`/quiz?type=${quizKey}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex
    });
  };

  const handleNext = () => {
    if (activeQuiz && currentQuestionIndex < quizData[activeQuiz].questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setQuestionTimeLeft(QUESTION_TIME_LIMIT);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setQuestionTimeLeft(QUESTION_TIME_LIMIT);
    }
  };

  const calculateScore = () => {
    if (!activeQuiz) return 0;
    const questions = quizData[activeQuiz].questions;
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  const getCefrLevel = (score, total) => {
    const pct = (score / total) * 100;
    if (pct >= 80) return { level: "C1 / C2 (Advanced)", color: "text-emerald-700 bg-emerald-50 border-emerald-200", desc: "Excellent command of English! You understand complex tenses and precise vocabulary." };
    if (pct >= 60) return { level: "B1 / B2 (Intermediate)", color: "text-[#EF4444] bg-red-50 border-red-200", desc: "Good foundation! You can express yourself clearly in common academic and business settings." };
    return { level: "A1 / A2 (Elementary)", color: "text-blue-700 bg-blue-50 border-blue-200", desc: "Solid starting point. Regular practice will help you build stronger confidence!" };
  };

  const closeQuiz = () => {
    router.push('/quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Header />

      {/* IF NO TEST IS ACTIVE: Show Quiz Selection & Hero Section */}
      {!activeQuiz && (
        <main className="flex-grow pt-12 lg:pt-20 pb-0 relative overflow-hidden bg-[#0B1120] z-0">
          
          {/* Dynamic Background Orbs - Red & Black Dark Theme Effect */}
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] rounded-full bg-rose-600/20 blur-[120px] pointer-events-none z-[-1]"></div>
          <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] rounded-full bg-red-900/15 blur-[100px] pointer-events-none z-[-1]"></div>
          
          {/* Decorative Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-[-1]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="courses-light-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#courses-light-grid)"/>
          </svg>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Hero Banner */}
            <div className="text-center max-w-3xl mx-auto mb-20 relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 mb-6">
                <span className="flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#DC2626] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-sm font-bold text-white tracking-wide">AI-Powered Assessment</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-semibold text-white tracking-tight mb-6 leading-tight drop-shadow-xl">
                Discover Your True <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-300 relative inline-block drop-shadow-sm">
                  English Level
                  <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#DC2626]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                Take our clean, interactive assessment tests to evaluate your grammar, vocabulary, and overall proficiency in a dedicated test environment.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-400">
                <div className="flex items-center gap-2"><span className="text-xl">⏱️</span> Real-time Timer</div>
                <div className="flex items-center gap-2"><span className="text-xl">🎯</span> Question Palette Navigator</div>
                <div className="flex items-center gap-2"><span className="text-xl">📈</span> Instant CEFR Results</div>
              </div>
            </div>

            {/* Quiz Cards Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
              
              {/* Card 1: General Placement */}
              <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl shadow-black/5 border border-slate-100 hover:border-red-400/50 hover:shadow-2xl hover:shadow-red-400/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden text-left flex flex-col">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-400/0 via-red-400/5 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-500/30 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>

                <div className="inline-flex bg-red-50 text-red-600 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-max border border-red-200 relative z-10">Complete Assessment</div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors relative z-10">General Placement</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                  A comprehensive test checking your grammar, reading, and vocabulary to find your exact CEFR level (A1-C2).
                </p>
                
                <button 
                  onClick={() => startTest('placement')}
                  className="w-full bg-slate-900 text-white hover:bg-[#DC2626] font-bold py-4 rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 relative z-10"
                >
                  Start Test <span className="text-lg">→</span>
                </button>
              </div>

              {/* Card 2: Grammar Check */}
              <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl shadow-black/5 border border-slate-100 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-400/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden text-left flex flex-col">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2-2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </div>

                <div className="inline-flex bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-max border border-blue-200 relative z-10">Targeted Skill</div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-500 transition-colors relative z-10">Grammar Check</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                  Identify your grammatical weak points. Test your knowledge of advanced tenses and complex structures.
                </p>
                
                <button 
                  onClick={() => startTest('grammar')}
                  className="w-full bg-slate-900 text-white hover:bg-blue-600 font-bold py-4 rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 relative z-10"
                >
                  Start Test <span className="text-lg">→</span>
                </button>
              </div>

              {/* Card 3: Vocabulary Size */}
              <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl shadow-black/5 border border-slate-100 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden text-left flex flex-col">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                </div>

                <div className="inline-flex bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-max border border-emerald-200 relative z-10">Targeted Skill</div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-500 transition-colors relative z-10">Vocabulary Size</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                  Measure your active vocabulary range. From everyday words to high-level academic terminology.
                </p>
                
                <button 
                  onClick={() => startTest('vocabulary')}
                  className="w-full bg-slate-900 text-white hover:bg-emerald-600 font-bold py-4 rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 relative z-10"
                >
                  Start Test <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-lg border border-slate-100 mb-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">How it works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-[#1E293B] border-4 border-slate-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-black/10 group-hover:scale-110 group-hover:border-red-500 group-hover:bg-slate-800 transition-all duration-300">
                    📝
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">1. Take the Quiz</h4>
                  <p className="text-slate-500 text-sm">Answer a series of carefully crafted questions designed by experts.</p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-[#1E293B] border-4 border-slate-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-black/10 group-hover:scale-110 group-hover:border-red-500 group-hover:bg-slate-800 transition-all duration-300">
                    📊
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">2. Get Your Score</h4>
                  <p className="text-slate-500 text-sm">Receive a detailed breakdown of your strengths and areas for improvement.</p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-[#1E293B] border-4 border-slate-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-black/10 group-hover:scale-110 group-hover:border-red-500 group-hover:bg-slate-800 transition-all duration-300">
                    🚀
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">3. Start Learning</h4>
                  <p className="text-slate-500 text-sm">Get matched with the perfect course to take your skills to the next level.</p>
                </div>
              </div>
            </div>
            
          </div>
          <ExamFeatures />
          <FAQ 
            title="Frequently Asked Questions" 
            subtitle="Got Questions?" 
            faqs={quizFaqs} 
          />
        </main>
      )}

      {/* IF TEST IS ACTIVE: Full-Page Light Theme Quiz Interface */}
      {activeQuiz && (
        <div className="flex-grow bg-slate-100/70 min-h-screen py-6 px-4 sm:px-6 lg:px-8 font-sans">
          
          {/* Top Sticky Test Navbar Header */}
          <div className="max-w-7xl mx-auto bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Brand Badge & Test Title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-sm tracking-tight shadow-sm">
                NG
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 leading-tight">
                  {quizData[activeQuiz].title}
                </h2>
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">NextFluent Assessment</span>
              </div>
            </div>

            {/* Right: Timer Badge & Finish/Close Button */}
            <div className="flex items-center gap-3">
              <div className={`px-3.5 py-1.5 rounded-xl border text-sm font-bold flex items-center gap-2 transition-colors ${
                questionTimeLeft <= 15 ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formatTime(questionTimeLeft)}</span>
              </div>

              <button
                onClick={closeQuiz}
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Finish
              </button>
            </div>
          </div>

          {/* Main 2-Column Quiz Layout */}
          {!isCompleted ? (
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Main Question Box (8 Columns) */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 min-h-[500px] flex flex-col justify-between">
                
                <div>
                  {/* Question Meta Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      QUESTION {currentQuestionIndex + 1} OF {quizData[activeQuiz].questions.length}
                    </span>

                    <span className="bg-red-50 text-[#EF4444] border border-red-200/60 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span>❓</span> Multiple Choice
                    </span>
                  </div>

                  {/* Question Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-8">
                    {quizData[activeQuiz].questions[currentQuestionIndex].question}
                  </h3>

                  {/* Options List Cards */}
                  <div className="space-y-4 mb-8">
                    {quizData[activeQuiz].questions[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                            isSelected 
                              ? 'border-[#DC2626] ring-2 ring-[#DC2626]/30 bg-red-50/30 text-slate-900 font-semibold' 
                              : 'border-slate-200/80 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50/60'
                          }`}
                        >
                          <span className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-xl border text-xs font-bold flex items-center justify-center transition-colors ${
                              isSelected 
                                ? 'bg-[#DC2626] text-white border-[#DC2626]' 
                                : 'bg-slate-50 text-slate-400 border-slate-200'
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="text-sm sm:text-base font-medium">{option}</span>
                          </span>
                          
                          {isSelected && <span className="text-[#DC2626] font-bold text-lg">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Card Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      currentQuestionIndex === 0 
                        ? 'text-slate-300 cursor-not-allowed' 
                        : 'text-slate-600 hover:bg-slate-100 cursor-pointer'
                    }`}
                  >
                    ← Previous Question
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className={`px-6 py-3 rounded-xl text-xs font-bold text-white transition-all shadow-sm ${
                      selectedAnswers[currentQuestionIndex] === undefined 
                        ? 'bg-slate-300 cursor-not-allowed opacity-60' 
                        : 'bg-slate-900 hover:bg-red-600 cursor-pointer active:scale-95'
                    }`}
                  >
                    {currentQuestionIndex === quizData[activeQuiz].questions.length - 1 ? 'Submit Test' : 'Next Question →'}
                  </button>
                </div>

              </div>

              {/* Right Sidebar Question Palette (4 Columns) */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-6">
                
                {/* Palette Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">Question Palette</h4>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {Object.keys(selectedAnswers).length}/{quizData[activeQuiz].questions.length} Answered
                  </span>
                </div>

                {/* Palette Buttons Grid */}
                <div className="grid grid-cols-5 gap-3">
                  {quizData[activeQuiz].questions.map((q, idx) => {
                    const isAnswered = selectedAnswers[idx] !== undefined;
                    const isCurrent = currentQuestionIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`h-11 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                          isCurrent
                            ? 'border-[#DC2626] text-[#DC2626] ring-2 ring-[#DC2626]/20 bg-red-50/40'
                            : isAnswered
                            ? 'bg-[#DC2626] text-white border-[#DC2626]'
                            : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Legend Indicators */}
                <div className="pt-2 space-y-2 text-xs font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#DC2626]"></span>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                    <span>Not Answered</span>
                  </div>
                </div>

                {/* Submit Assessment Main Action */}
                <button
                  onClick={() => setIsCompleted(true)}
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-3.5 rounded-2xl transition-all shadow-md text-xs tracking-wide uppercase cursor-pointer"
                >
                  Submit Assessment
                </button>

              </div>

            </div>
          ) : (
            /* Result Screen in Page Mode */
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 text-center my-8">
              <div className="w-20 h-20 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
                🏆
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                Assessment Completed!
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Here is your performance breakdown for {quizData[activeQuiz].title}.
              </p>

              {/* CEFR Level Banner */}
              {(() => {
                const score = calculateScore();
                const total = quizData[activeQuiz].questions.length;
                const result = getCefrLevel(score, total);
                return (
                  <div className={`p-6 rounded-2xl border mb-6 text-center ${result.color}`}>
                    <span className="text-xs font-bold uppercase tracking-widest block mb-1">Your Assessed Level</span>
                    <div className="text-2xl font-black mb-2">{result.level}</div>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto">{result.desc}</p>
                    <div className="mt-3 text-sm font-bold opacity-80">
                      Score: {score} out of {total} ({Math.round((score / total) * 100)}%)
                    </div>
                  </div>
                );
              })()}

              {/* Review Answer Explanations */}
              <div className="mb-6">
                <button
                  onClick={() => setShowExplanations(!showExplanations)}
                  className="text-xs font-bold text-[#DC2626] hover:underline flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
                >
                  <span>{showExplanations ? 'Hide Answer Key & Explanations ↑' : 'Review Answers & Explanations ↓'}</span>
                </button>

                {showExplanations && (
                  <div className="mt-4 space-y-3 text-left max-h-60 overflow-y-auto pr-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    {quizData[activeQuiz].questions.map((q, idx) => {
                      const userChoice = selectedAnswers[idx];
                      const isCorrect = userChoice === q.answer;
                      return (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                          <div className="font-bold text-slate-800 flex items-center justify-between">
                            <span>Q{idx + 1}: {q.question}</span>
                            <span className={isCorrect ? "text-emerald-600 font-bold" : "text-red-500 font-bold"}>
                              {isCorrect ? "✓ Correct" : "✕ Incorrect"}
                            </span>
                          </div>
                          <div className="text-slate-600">
                            Your answer: <strong>{q.options[userChoice] !== undefined ? q.options[userChoice] : "Not answered"}</strong>
                          </div>
                          {!isCorrect && (
                            <div className="text-emerald-700 font-medium">
                              Correct answer: <strong>{q.options[q.answer]}</strong>
                            </div>
                          )}
                          <div className="text-slate-500 italic pt-1 border-t border-slate-100">
                            💡 {q.explanation}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={closeQuiz}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 transition-colors text-sm cursor-pointer"
                >
                  Return to Quizzes
                </button>
                <Link
                  href="/courses"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] font-bold text-white transition-all text-sm shadow-md text-center cursor-pointer"
                >
                  Explore Recommended Courses →
                </Link>
              </div>
            </div>
          )}

        </div>
      )}

      <Footer />
    </div>
  );
}

export default function QuizPage() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#DC2626] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <span className="text-xs font-semibold text-slate-500">Loading Quiz...</span>
        </div>
      </div>
    }>
      <QuizContent />
    </React.Suspense>
  );
}
