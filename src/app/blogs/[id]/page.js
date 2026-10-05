import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// In a real application, you would fetch this data based on the ID.
// We are hardcoding a matching detailed article for the demo.
const blogData = {
  tag: "LARGEST",
  author: "David Warner",
  date: "February 1, 2026",
  title: "World largest elephant toothpaste experiment in 2026",
  description: "An incredible display of science and chemistry that broke world records.",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  content: `
    <p>The year 2026 marked an incredible milestone in the world of large-scale chemistry demonstrations. Thousands gathered in the central stadium to witness what would become the largest elephant toothpaste experiment ever conducted.</p>
    
    <h2>The Science Behind the Spectacle</h2>
    <p>Elephant toothpaste is a classic science experiment that demonstrates the rapid decomposition of hydrogen peroxide catalyzed by potassium iodide or yeast. The result is a massive, steaming foam eruption that looks like toothpaste fit for an elephant.</p>
    
    <p>For this world record attempt, organizers used thousands of liters of high-concentration hydrogen peroxide and gallons of dish soap to trap the released oxygen. The entire setup took weeks of planning and strict safety protocols to execute.</p>
    
    <h2>A Moment in History</h2>
    <p>As the catalyst was dropped into the massive central container, a towering pillar of colorful foam erupted hundreds of feet into the air, much to the delight of the spectators and students. It wasn't just a spectacle; it was a powerful statement about the engaging nature of practical science education.</p>
    
    <p>Educators worldwide are now using this record-breaking event as a case study to inspire the next generation of scientists, proving that learning can be both fun and monumental.</p>
  `
};

export default function BlogDetailPage({ params }) {
  // Normally you would use params.id to fetch the specific blog post.
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow">
        
        {/* Dark Hero Header */}
        <section className="bg-[#0b101c] pt-32 pb-48 relative border-b border-[#1E293B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Breadcrumb / Back Link */}
            <div className="mb-8 flex justify-center">
              <Link href="/blogs" className="inline-flex items-center text-slate-400 hover:text-white font-semibold transition-colors gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Insights
              </Link>
            </div>

            {/* Article Meta Header */}
            <div className="space-y-6">
              <span className="text-white bg-[#DC2626] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm inline-block">
                {blogData.tag}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
                {blogData.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium text-slate-400 pt-4">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 rounded-full overflow-hidden inline-block border-2 border-slate-700 shrink-0 shadow-lg">
                    <Image src={blogData.authorAvatar} alt={blogData.author} width={40} height={40} className="w-full h-full object-cover" />
                  </span>
                  <span>By <strong className="text-slate-200 font-semibold">{blogData.author}</strong></span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{blogData.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overlapping Content Section */}
        <section className="-mt-32 pb-20 relative z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Image */}
            <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-8 shadow-2xl border-4 border-white bg-slate-100 relative">
              <Image 
                src={blogData.image} 
                alt={blogData.title} 
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Reading Content */}
            <article className="pt-4 sm:pt-8">
              
              {/* Introduction/Description */}
              <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed mb-10 pb-8 border-b border-slate-100 text-center w-full mx-auto italic">
                "{blogData.description}"
              </p>

              {/* Article Content */}
              <div className="w-full mx-auto text-slate-700 text-base sm:text-lg [&>p]:mb-6 [&>p]:leading-loose [&>h2]:text-slate-900 [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:tracking-tight pb-12"
                   dangerouslySetInnerHTML={{ __html: blogData.content }} />
                   
              {/* Share/Footer of Article */}
              <div className="w-full mx-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#1DA1F2] hover:bg-blue-50 transition-colors border border-slate-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:bg-blue-50 transition-colors border border-slate-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:bg-blue-50 transition-colors border border-slate-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </button>
                  </div>
                </div>
                
                <Link href="/blogs" className="text-[#EF4444] font-bold text-sm hover:text-red-500 transition-colors flex items-center gap-1.5">
                  View More Articles <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>

            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
