import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col">
      <Header />

      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-r from-[#0F172A] via-slate-900 to-[#1E293B] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden select-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E59719]/15 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-4">
            <Link href="/" className="hover:text-[#E59719] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 leading-tight">
            Privacy <span className="text-[#E59719]">Policy</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal mb-6">
            Your privacy is paramount. Learn how NextFluent collects, uses, and safeguards your personal information.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Last Updated: September 30, 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Single Unified Clean Document Container */}
      <main className="max-w-[95%] lg:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl border border-slate-200/80">
          
          {/* Unified Content Section List (Simple & Clean Flow) */}
          <div className="space-y-10">

            {/* Section 1: Information We Collect */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-[#E59719] font-bold text-xs flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Information We Collect</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11 mb-3">
                We collect information necessary to personalize your learning track, process course enrollments, and issue accredited certificates. This includes:
              </p>
              <ul className="pl-11 list-disc space-y-2 text-xs sm:text-sm text-slate-600">
                <li><strong>Identity Information:</strong> Name, email address, phone number, and profile details provided during registration.</li>
                <li><strong>Learning Analytics:</strong> Quiz scores, assessment results, course completions, and certificate issuing history.</li>
                <li><strong>Billing Details:</strong> Encrypted transaction receipts processed securely via authorized payment gateways.</li>
              </ul>
            </div>

            {/* Section 2: How We Use Your Data */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. How We Use Your Data</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11 mb-3">
                The collected information is utilized strictly to provide and improve our educational ecosystem:
              </p>
              <ul className="pl-11 list-disc space-y-2 text-xs sm:text-sm text-slate-600">
                <li>Tailoring course recommendations and vocabulary exercises to your proficiency level.</li>
                <li>Generating tamper-proof digital certificates for employers and LinkedIn verification.</li>
                <li>Sending essential course updates, exam schedules, and customer support resolutions.</li>
              </ul>
            </div>

            {/* Section 3: Data Security */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Data Protection & Security</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11">
                We implement industry-standard technical and organizational security measures to protect your personal data from unauthorized access, alteration, or disclosure. All user data in transit is encrypted using bank-level 256-bit SSL protocols. Database servers are hosted in secure data centers with 24/7 intrusion detection systems and strict role-based access controls.
              </p>
            </div>

            {/* Section 4: Third-Party Sharing */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-xs flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Third-Party Service Providers</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11">
                We only share limited data with essential infrastructure partners (such as Stripe for payments or AWS for cloud hosting) strictly necessary to run the platform. NextFluent does not sell, rent, or trade your personal information to advertising brokers.
              </p>
            </div>

            {/* Section 5: Cookies & Analytics */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-[#E59719] font-bold text-xs flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Cookies & Tracking Technologies</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11">
                Cookies are small data files saved on your browser to maintain active login sessions and remember course progress. You can manage or disable cookie preferences directly through your browser settings.
              </p>
            </div>

            {/* Section 6: Your Rights */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold text-xs flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Your Rights & Data Control</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11 mb-3">
                You maintain complete control over your personal data on NextFluent:
              </p>
              <ul className="pl-11 list-disc space-y-2 text-xs sm:text-sm text-slate-600">
                <li>Request access to your stored personal information.</li>
                <li>Request correction of any inaccurate profile or certificate details.</li>
                <li>Request complete erasure/deletion of your account and learning data.</li>
              </ul>
            </div>

          </div>

          {/* Simple Contact Footer Box */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-0.5">Questions about our Privacy Policy?</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Contact our Data Protection Officer anytime.</p>
            </div>
            <a
              href="mailto:ngecsupport@gmail.com"
              className="bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-sm whitespace-nowrap"
            >
              Contact Data Officer
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
