'use client';

const stats = [
  {
    id: 1,
    number: "1912",
    label: "Success Stories",
    icon: (
      <svg className="w-10 h-10 text-[#E59719] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    )
  },
  {
    id: 2,
    number: "123",
    label: "Dedicated Tutors",
    icon: (
      <svg className="w-10 h-10 text-[#E59719] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    id: 3,
    number: "89",
    label: "Scheduled Events",
    icon: (
      <svg className="w-10 h-10 text-[#E59719] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-.64.04-1.29.06-1.95.06h-5.25c-.66 0-1.31-.02-1.95-.06l-3 3v-3.091c-.34-.02-.68-.045-1.02-.072C2.347 16.989 1.5 16.025 1.5 14.894v-4.286c0-.97.616-1.813 1.5-2.097" />
      </svg>
    )
  },
  {
    id: 4,
    number: "56",
    label: "Available Courses",
    icon: (
      <svg className="w-10 h-10 text-[#E59719] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    )
  }
];

export default function StatsBar() {
  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center p-4 group">
              {/* Icon */}
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              
              {/* Gold/Orange Number matching LMS brand theme */}
              <span className="text-3xl sm:text-4xl font-extrabold text-[#E59719] tracking-tight">
                {item.number}
              </span>

              {/* Label */}
              <span className="mt-1 text-sm sm:text-base font-semibold text-slate-700 tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
