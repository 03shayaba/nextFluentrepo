'use client';

const team = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Founder & Lead Instructor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Ex-IELTS examiner with 15+ years of experience helping students achieve fluency.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Grammar & Writing Expert",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Published author and linguistics specialist. Makes complex grammar simple.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Spoken English Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "TEDx speaker focusing on confidence building and corporate communication.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Business English Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Former corporate executive teaching advanced business negotiation vocabulary.",
  }
];

export default function MeetOurTeam() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-t border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-amber-100/70 text-[#E59719] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
            👨‍🏫 Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Meet the <span className="text-[#E59719]">Mentors</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Learn from the absolute best. Our highly vetted tutors bring decades of real-world experience and linguistic expertise directly to your screen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(229,151,25,0.15)] transition-all duration-300 border border-slate-100 hover:border-[#E59719]/40 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container with overlay */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Social Overlay (Appears on Hover) */}
                <div className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-[#E59719] flex items-center justify-center hover:bg-[#E59719] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-[#E59719] flex items-center justify-center hover:bg-[#E59719] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#E59719] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#E59719] font-semibold text-sm mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed hidden group-hover:block animate-fade-in-up">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
