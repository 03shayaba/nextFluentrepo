import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurJourney from "@/components/OurJourney";
import GetInTouch from "@/components/GetInTouch";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";

const aboutFaqs = [
  { q: "How do I choose the right category?", a: "If you're looking to improve workplace communication, Business English is ideal. If you're preparing for an exam, check out IELTS Preparation. For general speaking confidence, Spoken English & Fluency is our most popular choice." },
  { q: "Can I switch categories later?", a: "Yes! You can enroll in courses across multiple categories at any time. Your progress is saved independently for each course." },
  { q: "Are the courses live or pre-recorded?", a: "We offer a mix of both. Most foundational grammar and vocabulary courses are self-paced, while our Fluency and Public Speaking courses feature interactive live sessions." },
  { q: "Do I get a certificate?", a: "Absolutely. Upon successful completion of any course within these categories, you will receive an accredited certificate that you can add to your resume." }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      <Header />
      <main>
        {/* Contact-Style Dark Hero Section */}
        <section className="relative w-full bg-[#0B1120] pt-20 pb-32 overflow-hidden border-b border-white/10 z-0 select-none">
          
          {/* Dynamic Background Orbs */}
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none z-[-1]"></div>
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
              <span className="text-white">About Us</span>
            </div>

            <div className="inline-block bg-red-500/10 backdrop-blur-md border border-red-500/20 text-[#EF4444] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm relative tracking-wider">
              🚀 Empowering Language Learners
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto drop-shadow-xl">
              Transforming Fluency Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-rose-300 drop-shadow-sm">Innovation</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to bridging communication gaps worldwide through accredited interactive courses, adaptive evaluation models, and expert mentorship.
            </p>
          </div>
        </section>

        {/* Existing Sections */}
        <AboutUs />
        <OurJourney />
        <WhyChooseUs />

        {/* Dark Theme FAQ Section */}
        <FAQ 
          faqs={aboutFaqs} 
          title="Frequently Asked Questions" 
          subtitle="Got Questions?" 
        />

        <GetInTouch />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
