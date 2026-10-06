import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import CourseCategories from "@/components/CourseCategories";
import Footer from "@/components/Footer";

// Dynamically import heavy below-the-fold components for max Lighthouse score & instant lo
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const PopularCourses = dynamic(() => import("@/components/PopularCourses"));
const TrendingCourses = dynamic(() => import("@/components/TrendingCourses"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const LatestInsights = dynamic(() => import("@/components/LatestInsights"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));
const AssessmentSection = dynamic(() => import("@/components/AssessmentSection"));

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        <HeroSlider />
        <CourseCategories />
        <AssessmentSection />
        <WhyChooseUs />
        <PopularCourses />
        <Testimonials />
        <TrendingCourses />
        <LatestInsights />
        <GetInTouch />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
