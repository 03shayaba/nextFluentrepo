import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const allBlogs = [
  {
    id: 1,
    tag: "LARGEST",
    author: "David Warner",
    date: "February 1, 2026",
    title: "World largest elephant toothpaste experiment in 2026",
    description: "An incredible display of science and chemistry that broke world records.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    tag: "EDUCATION",
    author: "David Warner",
    date: "February 1, 2026",
    title: "Global education: ideas for the way move forward",
    description: "Discussing modern approaches to accessible and scalable education.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    tag: "EDUCATION",
    author: "David Warner",
    date: "February 1, 2026",
    title: "New report reimagines the broader education workforce",
    description: "How educators, administrators, and tech are reshaping learning environments.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 4,
    tag: "TECHNOLOGY",
    author: "Sarah Smith",
    date: "March 15, 2026",
    title: "AI in Classrooms: What Teachers Really Think",
    description: "A deep dive into the integration of artificial intelligence in daily lesson plans.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 5,
    tag: "COMMUNITY",
    author: "John Doe",
    date: "April 10, 2026",
    title: "Building study communities for better remote learning",
    description: "The importance of social connections when studying from home.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 6,
    tag: "CAREER",
    author: "David Warner",
    date: "April 22, 2026",
    title: "Top 10 skills employers look for in 2026",
    description: "Ensure your resume stands out by mastering these essential modern skills.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  }
];

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow">
        
        {/* Dark Hero Section */}
        <section className="bg-[#0b101c] pt-32 pb-28 border-b border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-wide uppercase">
                🗞️ Insights & News
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Our Latest <span className="text-[#EF4444]">Articles</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Dive deep into expert insights, trends, and advice to empower your learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Light Cards Section */}
        <section className="-mt-14 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {allBlogs.map((item) => (
                <Link 
                  href={`/blogs/${item.id}`}
                  key={item.id}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between space-y-4 sm:space-y-5 group cursor-pointer transform hover:-translate-y-1.5"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="space-y-3 px-1 flex-grow">
                    <span className="text-white bg-[#DC2626] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm inline-block">
                      {item.tag}
                    </span>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden inline-block border border-slate-100 shrink-0">
                          <Image src={item.authorAvatar} alt={item.author} width={20} height={20} className="w-full h-full object-cover" />
                        </span>
                        <span>By <strong className="text-slate-900 font-bold">{item.author}</strong></span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-[#EF4444] transition-colors leading-snug pt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
