'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Star, 
  Users, 
  MonitorPlay, 
  TrendingUp, 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  ArrowRight,
  Send
} from 'lucide-react';

const featuresLeft = [
  {
    id: 1,
    title: 'Expert Trainers',
    description: 'Learn from certified and experienced English instructors.',
    icon: Users,
    theme: 'bg-[#FDF6EA]',
    iconColor: 'text-[#E59719]',
  },
  {
    id: 2,
    title: 'Flexible Learning',
    description: 'Study anytime, anywhere — on any device.',
    icon: MonitorPlay,
    theme: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    id: 3,
    title: 'Personalized Progress',
    description: 'Get customized learning paths based on your goals and level.',
    icon: TrendingUp,
    theme: 'bg-green-50',
    iconColor: 'text-green-500',
  }
];

const featuresRight = [
  {
    id: 4,
    title: 'Comprehensive Courses',
    description: 'Grammar, vocabulary, speaking, listening and more — all in one place.',
    icon: BookOpen,
    theme: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    id: 5,
    title: 'Supportive Community',
    description: 'Join a community of learners and grow together.',
    icon: Heart,
    theme: 'bg-[#FDF6EA]',
    iconColor: 'text-[#E59719]',
  },
  {
    id: 6,
    title: 'Real-World Results',
    description: 'Gain confidence and use English in everyday life, work and study.',
    icon: ShieldCheck,
    theme: 'bg-blue-50',
    iconColor: 'text-blue-500',
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#fdfbf9] py-10 lg:py-12 overflow-hidden font-sans text-slate-800">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E59719]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#B91C1C] border border-red-200/60 text-sm font-bold tracking-wide uppercase mb-6">
            <Star className="w-4 h-4 fill-[#B91C1C]" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            Why Learn With <span className="text-[#DC2626]">Next Gen. English Classes</span>?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            "We don’t teach you to speak English. We help you find your voice."
          </p>
        </div>

        {/* Features Container for Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 items-center relative">
          
          {/* Left Features Column */}
          <div className="flex flex-col gap-4 md:gap-5 order-2 md:order-1">
            {featuresLeft.map((feature) => (
              <div 
                key={feature.id} 
                className={`${feature.theme} rounded-2xl md:rounded-[2rem] p-4 md:p-4 lg:p-5 flex items-start sm:items-center gap-3.5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300`}
              >
                <div className="bg-white/90 rounded-2xl md:rounded-full p-3 md:p-3.5 lg:p-4 shadow-sm shrink-0">
                  <feature.icon className={`w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm md:text-sm lg:text-base mb-0.5">{feature.title}</h3>
                  <p className="text-xs md:text-xs lg:text-sm text-slate-600 leading-snug font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image Area */}
          <div className="relative flex flex-col items-center justify-center my-4 md:my-0 order-1 md:order-2">
            
            {/* Paper Airplane Decorative */}
            <div className="absolute -top-12 -right-8 text-[#E59719] rotate-12 opacity-80 animate-pulse hidden md:block">
              <Send className="w-8 h-8 lg:w-10 lg:h-10" />
            </div>

            {/* Dotted Arc with Text */}
            <div className="absolute -top-16 md:-top-20 lg:-top-24 w-full h-[200px] pointer-events-none z-0 hidden md:block">
              <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                <path 
                  id="text-curve" 
                  d="M 20 180 Q 200 -20 380 180" 
                  fill="transparent" 
                  stroke="#E59719" 
                  strokeWidth="2" 
                  strokeDasharray="4,6" 
                  strokeLinecap="round"
                  className="opacity-40"
                />
                <text className="text-[12px] lg:text-[14px] font-medium fill-slate-500 uppercase tracking-widest">
                  <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
                    Learn · Practice · Grow · Belong
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Main Center Image */}
            <div className="relative z-10 w-full max-w-[240px] md:max-w-[260px] lg:max-w-[300px] mx-auto rounded-t-[6rem] md:rounded-t-[7rem] lg:rounded-t-[8rem] rounded-b-3xl overflow-hidden shadow-xl border-[5px] border-white/80">
              <Image 
                src="/whychoose.webp" 
                alt="Student learning on laptop" 
                width={300}
                height={340}
                className="w-full h-[260px] md:h-[290px] lg:h-[340px] object-cover"
              />
              {/* Laptop mock overlay text */}
              <div 
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white/90 leading-tight drop-shadow-md"
                style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
              >
                <span className="text-lg md:text-xl">Better<br/>English<br/>Brighter You</span>
                <div className="text-xs mt-0.5 opacity-80">♡</div>
              </div>
            </div>
            
            {/* Small decorative heart/flower absolute positioned */}
            <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-[#E59719] rounded-full flex items-center justify-center text-white text-xs shadow-lg hidden md:flex">
              ★
            </div>
          </div>

          {/* Right Features Column */}
          <div className="flex flex-col gap-4 md:gap-5 order-3">
            {featuresRight.map((feature) => (
              <div 
                key={feature.id} 
                className={`${feature.theme} rounded-2xl md:rounded-[2rem] p-4 md:p-4 lg:p-5 flex items-start sm:items-center gap-3.5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300`}
              >
                <div className="bg-white/90 rounded-2xl md:rounded-full p-3 md:p-3.5 lg:p-4 shadow-sm shrink-0">
                  <feature.icon className={`w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm md:text-sm lg:text-base mb-0.5">{feature.title}</h3>
                  <p className="text-xs md:text-xs lg:text-sm text-slate-600 leading-snug font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {}
        {/* Bottom Area: Stats, Books, CTA */}
        <div className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/50 relative overflow-hidden">
          
          {/* Bottom Left: Learners Stat */}
          <div className="flex items-center gap-3 sm:gap-4 bg-slate-50 border border-slate-100 px-5 py-3 rounded-full shadow-xs shrink-0">
            <div className="flex -space-x-3 shrink-0">
              <Image width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Learner" />
              <Image width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Learner" />
              <Image width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Learner" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-none">10,000+</div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1">Happy Learners</div>
            </div>
            <div className="text-[#E59719] ml-1 sm:ml-2 animate-bounce text-xs sm:text-base">✨</div>
          </div>

          {/* Bottom Center: Stacked Books Concept */}
          <div className="hidden lg:flex flex-col items-center justify-center -space-y-1 hover:scale-105 transition-transform cursor-default shrink-0">
            <div className="bg-slate-700 text-white text-xs font-bold py-1.5 px-9 rounded-t-sm shadow-md border-b border-slate-600/50 z-40 transform perspective-[500px] rotateX-12">Learn</div>
            <div className="bg-slate-600 text-white text-xs font-bold py-1.5 px-10 shadow-md border-b border-slate-500/50 z-30">Practice</div>
            <div className="bg-slate-500 text-white text-xs font-bold py-1.5 px-11 shadow-md border-b border-slate-400/50 z-20">Improve</div>
            <div className="bg-slate-800 text-white text-xs font-bold py-1.5 px-12 rounded-b-sm shadow-xl z-10">Succeed</div>
          </div>

          {/* Bottom Right: CTA Button & Handwritten Text */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <div 
              className="hidden sm:block text-slate-600 text-base lg:text-lg leading-tight rotate-[-5deg]"
              style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
            >
              Smart<br/>Learning<br/>Brighter<br/>Future
            </div>
            <Link href="/courses">
              <button className="group flex items-center gap-2.5 sm:gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 px-6 sm:px-8 text-sm sm:text-base rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(220,38,38,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 cursor-pointer">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
