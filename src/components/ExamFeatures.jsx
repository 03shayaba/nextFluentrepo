'use client';
import Link from 'next/link';

export default function ExamFeatures() {
  const challenges = [
    { title: "Master Vocabulary & Grammar", desc: "Regular interactive exercises help reinforce grammar rules and build a strong vocabulary.", icon: "📖", color: "bg-purple-100 text-purple-600 border-purple-200" },
    { title: "Think & Speak Faster", desc: "Consistent conversational practice trains your brain to think in English, avoiding awkward pauses.", icon: "⚡", color: "bg-red-100 text-red-600 border-red-200" },
    { title: "Fix Pronunciation Errors", desc: "Our speech analysis reveals the sounds you struggle with so you can perfect your accent.", icon: "🗣️", color: "bg-emerald-100 text-emerald-600 border-emerald-200" },
    { title: "Know Your CEFR Level", desc: "Detailed assessments help you understand your current fluency level compared to global standards.", icon: "🏅", color: "bg-blue-100 text-blue-600 border-blue-200" },
    { title: "Build Speaking Confidence", desc: "Practicing in a safe, judgment-free environment helps reduce anxiety when speaking with native speakers.", icon: "🛡️", color: "bg-rose-100 text-rose-600 border-rose-200" },
    { title: "Eliminate Common Mistakes", desc: "Targeted feedback helps you identify recurring grammatical errors and gradually improve your accuracy.", icon: "🎯", color: "bg-indigo-100 text-indigo-600 border-indigo-200" },
    { title: "Ace English Exams", desc: "Exam-simulated mock tests help you manage time and master formats for IELTS, TOEFL, and PTE.", icon: "⏱️", color: "bg-rose-100 text-rose-600 border-rose-200" },
    { title: "Unlock Global Opportunities", desc: "Advanced language skills open doors to better jobs, higher education, and seamless international travel.", icon: "🏆", color: "bg-teal-100 text-teal-600 border-teal-200" },
  ];

  const stats = [
    { value: "94%", label: "SPOKEN FLUENCY", desc: "of learners felt more confident speaking in professional and social settings after our assessments.", icon: "✨" },
    { value: "93%", label: "GRAMMAR ACCURACY", desc: "of students improved their grammar precision and reduced common errors within 4 weeks.", icon: "📈" },
    { value: "79%", label: "BAND SCORE BOOST", desc: "of IELTS/TOEFL aspirants achieved their target band scores on their first attempt.", icon: "📋" },
    { value: "63%", label: "CAREER GROWTH", desc: "of professionals reported better job opportunities due to improved English communication.", icon: "🎓" },
  ];

  const goals = [
    { title: "First-Time Aspirants", desc: "Build the confidence every first-time aspirant needs.", icon: "🌱", color: "bg-purple-100 text-purple-600" },
    { title: "Top Scorers", desc: "Push your score beyond the cutoff.", icon: "⭐", color: "bg-red-100 text-red-600" },
    { title: "Repeaters", desc: "Identify the mistakes costing you marks.", icon: "🔄", color: "bg-green-100 text-green-600" },
    { title: "Busy Professionals", desc: "Practice whenever time allows — on mobile or desktop.", icon: "⌚", color: "bg-blue-100 text-blue-600" },
  ];

  return (
    <div className="w-full font-sans">
      {/* Section 1: Challenges (Light Theme) */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-5 py-2 rounded-full border border-red-200 bg-red-100/50 text-red-700 text-xs font-bold tracking-widest uppercase shadow-sm">
              The Secret to True Fluency
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              How Fluent Speakers Overcome Common <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-500">Language Barriers</span>
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-base md:text-lg">
              Language barriers can hold you back, but they all have one thing in common — they disappear with consistent, targeted practice. That's why our interactive assessments are an essential part of your English learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {challenges.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-6 md:p-8 flex gap-6 items-start border border-slate-100 hover:border-red-300 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300 relative overflow-hidden">
                
                {/* Decorative hover gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`text-3xl p-4 rounded-2xl ${item.color} border group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm relative z-10 flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white border border-slate-100 rounded-[2.5rem] p-10 text-center max-w-4xl mx-auto shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-rose-500 to-red-500"></div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Ready to Experience True Fluency?</h3>
            <p className="text-slate-500 mb-8 text-lg">Don't just read about better pronunciation, speed, and confidence. Experience them in real conversations.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-slate-900 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:-translate-y-1 text-lg cursor-pointer">
              Start Your Free Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Real Results (Dark Theme) */}
      <section className="bg-[#0B1120] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-xs font-bold tracking-widest uppercase">
              Trusted By Learners. Proven By Results.
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Real Results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-400">Real Learners</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              The best way to judge a learning platform is by the results it delivers. Here's how our assessments have helped students achieve fluency and unlock opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-red-500/50 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 relative z-10">{stat.icon}</div>
                <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 relative z-10">{stat.label}</div>
                <div className="text-5xl font-black text-white mb-4 drop-shadow-md relative z-10">{stat.value}</div>
                <p className="text-sm text-slate-300 leading-relaxed relative z-10">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 blur-xl"></div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 relative z-10">Ready to Transform Your English?</h3>
            <p className="text-slate-300 mb-8 text-lg relative z-10">Join thousands of successful learners who use our assessments to identify weak areas, improve accuracy, and speak fluently.</p>
            <Link href="/courses">
              <button className="bg-red-600 hover:bg-red-500 text-white font-extrabold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-500/40 hover:-translate-y-1 text-lg relative z-10 cursor-pointer">
                Start Learning Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Goals (Light Theme) */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-5 py-2 rounded-full border border-red-200 bg-red-100/50 text-red-700 text-xs font-bold tracking-widest uppercase shadow-sm">
              Designed For Every Aspirant
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              One Test Series. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-500">Multiple Goals.</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
              From first-time aspirants to repeaters and top candidates, our Mock Tests provide the practice, performance analysis, and exam experience needed to maximise your score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-md hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/5 hover:border-red-200">
                <div className={`w-16 h-16 rounded-2xl ${goal.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                  {goal.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{goal.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
