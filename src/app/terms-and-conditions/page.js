import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col">
      <Header />

      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-r from-[#0F172A] via-slate-900 to-[#1E293B] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E59719]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-4">
            <Link href="/" className="hover:text-[#E59719] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Terms & Conditions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 leading-tight">
            Terms & <span className="text-[#E59719]">Conditions</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal mb-6">
            Please read these terms carefully before accessing NextFluent courses, quizzes, and certificates.
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

            {/* Section 1: Acceptance of Terms */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-[#E59719] font-bold text-xs flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11">
                By accessing, browsing, registering an account, or purchasing any educational course or assessment on NextFluent ("Platform"), you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions along with our Privacy Policy. If you do not agree to any part of these terms, you must discontinue using our services immediately.
              </p>
            </div>

            {/* Section 2: User Accounts & Security */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. User Accounts & Security</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11 mb-3">
                To access premium learning modules, quizzes, and certificates, you must register a personal account. When registering, you agree to:
              </p>
              <ul className="pl-11 list-disc space-y-2 text-xs sm:text-sm text-slate-600">
                <li>Provide accurate, current, and complete details during sign up.</li>
                <li>Safeguard your login credentials and password confidentially.</li>
                <li>Notify us immediately of any security breach or unauthorized access to your account.</li>
                <li>Accounts are non-transferable; selling or sharing accounts with third parties is strictly prohibited.</li>
              </ul>
            </div>

            {/* Section 3: Course Content & Intellectual Property */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-xs flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Course Content & Intellectual Property</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11">
                All content published on NextFluent—including video lectures, audio files, quizzes, downloadable PDFs, logos, software, and curriculum designs—remains the exclusive property of NextFluent or its content licensors. Enrolled learners receive a personal, non-exclusive license to view materials for personal educational use. You may NOT record, reproduce, re-upload, broadcast, or commercialize NextFluent content on third-party platforms.
              </p>
            </div>

            {/* Section 4: Payments & Refunds */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Payments, Subscriptions & Refund Policy</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11 mb-3">
                Course pricing and subscription fees are displayed clearly during checkout. Payment terms include:
              </p>
              <ul className="pl-11 list-disc space-y-2 text-xs sm:text-sm text-slate-600">
                <li>All transactions are processed through encrypted, PCI-DSS compliant payment gateways.</li>
                <li>Eligible courses qualify for a full refund within 7 days of purchase if course completion is below 30%.</li>
                <li>Accounts terminated for community policy violations forfeit refund rights.</li>
              </ul>
            </div>

            {/* Section 5: Prohibited Conduct */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Prohibited Conduct & Code of Ethics</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11 mb-3">
                To maintain a safe, professional learning community, users agree NOT to engage in:
              </p>
              <ul className="pl-11 list-disc space-y-2 text-xs sm:text-sm text-slate-600">
                <li>Harassment, hate speech, or inappropriate comments in student forums.</li>
                <li>Attempting to reverse-engineer, decompile, or hack the NextFluent portal.</li>
                <li>Uploading viruses, malicious code, or commercial spam.</li>
              </ul>
            </div>

            {/* Section 6: Limitation of Liability */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-[#E59719] font-bold text-xs flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Limitation of Liability</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11">
                NextFluent and its instructors shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use our platform services. All services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
              </p>
            </div>

            {/* Section 7: Modifications to Terms */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold text-xs flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. Modifications to Terms</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-11">
                We reserve the right to revise or update these Terms & Conditions at any time. Notice of significant updates will be posted on our platform or sent via registered email. Continued use of NextFluent after changes take effect constitutes your acceptance of the revised terms.
              </p>
            </div>

          </div>

          {/* Simple Contact Footer Box */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-0.5">Questions about our Terms & Conditions?</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Contact our support team anytime.</p>
            </div>
            <a
              href="mailto:ngecsupport@gmail.com"
              className="bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-sm whitespace-nowrap"
            >
              Contact Support
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
