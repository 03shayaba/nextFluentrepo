'use client';
import React from 'react';
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

      {/* Floating text top-left */}
      <div 
        className="hidden xl:block absolute top-16 left-12 rotate-[-12deg] text-slate-600 font-medium text-xl leading-tight opacity-80"
        style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
      >
        Fluency<br/>Opens<br/>New Doors
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#E59719]/10 text-[#E59719] text-sm font-bold tracking-wide uppercase mb-6">
            <Star className="w-4 h-4 fill-[#E59719]" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            Why Learn With <span className="text-[#E59719]">NextFluent</span>?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            More than just courses — we give you a complete learning experience 
            to help you speak English confidently in the real world.
          </p>
        </div>

        {}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8 relative">
          
          {/* Left Features Column */}
          <div className="w-full lg:w-[32%] flex flex-col gap-5">
            {featuresLeft.map((feature) => (
              <div 
                key={feature.id} 
                className={`${feature.theme} rounded-[2rem] p-4 pr-6 flex items-start sm:items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-md duration-300`}
              >
                <div className="bg-white/80 rounded-full p-4 shadow-sm shrink-0">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image Area */}
          <div className="w-full lg:w-[36%] relative flex flex-col items-center justify-center mt-10 lg:mt-0">
            
            {/* Paper Airplane Decorative */}
            <div className="absolute -top-12 -right-8 text-[#E59719] rotate-12 opacity-80 animate-pulse hidden md:block">
              <Send className="w-10 h-10" />
              <svg className="absolute top-8 right-6 w-16 h-16 text-[#E59719]/60" fill="none" viewBox="0 0 100 100">
                <path stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" d="M10,90 Q40,50 90,10" />
              </svg>
            </div>

            {/* Dotted Arc with Text */}
            <div className="absolute -top-16 lg:-top-24 w-full h-[200px] pointer-events-none z-0 hidden md:block">
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
                <text className="text-[14px] font-medium fill-slate-500 uppercase tracking-widest">
                  <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
                    Learn · Practice · Grow · Belong
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Main Center Image */}
            <div className="relative z-10 w-full max-w-[320px] mx-auto rounded-t-[8rem] rounded-b-3xl overflow-hidden shadow-2xl border-[6px] border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Student learning on laptop" 
                className="w-full h-[350px] object-cover"
              />
              {/* Laptop mock overlay text */}
              <div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/90 leading-tight drop-shadow-md"
                style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
              >
                <span className="text-xl">Better<br/>English<br/>Brighter You</span>
                <div className="text-xs mt-1 opacity-80">♡</div>
              </div>
            </div>
            
            {/* Small decorative heart/flower absolute positioned */}
            <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-[#E59719] rounded-full flex items-center justify-center text-white text-xs shadow-lg hidden lg:flex">
              ★
            </div>
          </div>

          {/* Right Features Column */}
          <div className="w-full lg:w-[32%] flex flex-col gap-5">
            {featuresRight.map((feature) => (
              <div 
                key={feature.id} 
                className={`${feature.theme} rounded-[2rem] p-4 pr-6 flex items-start sm:items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-md duration-300`}
              >
                <div className="bg-white/80 rounded-full p-4 shadow-sm shrink-0">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {}
        {/* Bottom Area: Stats, Books, CTA */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          
          {/* Bottom Left: Learners Stat */}
          <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-full shadow-sm">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Learner" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Learner" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Learner" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 leading-none">10,000+</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Happy Learners</div>
            </div>
            <div className="text-[#E59719] ml-2 animate-bounce">✨</div>
          </div>

          {/* Bottom Center: Stacked Books Concept */}
          <div className="flex flex-col items-center justify-center -space-y-1 hover:scale-105 transition-transform cursor-default">
            <div className="bg-slate-700 text-white text-xs font-bold py-1.5 px-10 rounded-t-sm shadow-md border-b border-slate-600/50 z-40 transform perspective-[500px] rotateX-12">Learn</div>
            <div className="bg-slate-600 text-white text-xs font-bold py-1.5 px-11 shadow-md border-b border-slate-500/50 z-30">Practice</div>
            <div className="bg-slate-500 text-white text-xs font-bold py-1.5 px-12 shadow-md border-b border-slate-400/50 z-20">Improve</div>
            <div className="bg-slate-800 text-white text-xs font-bold py-1.5 px-14 rounded-b-sm shadow-xl z-10">Succeed</div>
          </div>

          {/* Bottom Right: CTA Button & Handwritten Text */}
          <div className="flex items-center gap-6">
            <div 
              className="hidden sm:block text-slate-600 text-lg leading-tight rotate-[-5deg]"
              style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
            >
              Same<br/>Learning<br/>Brighter<br/>Future
            </div>
            <button className="group flex items-center gap-3 bg-[#E59719] hover:bg-[#C98416] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(229,151,25,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(229,151,25,0.6)] hover:-translate-y-0.5">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
