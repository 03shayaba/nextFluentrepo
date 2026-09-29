import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import TransformHero from "@/components/TransformHero";
import StatsBar from "@/components/StatsBar";
import CourseCategories from "@/components/CourseCategories";
import TrendingCategories from "@/components/TrendingCategories";
import LearningProcess from "@/components/LearningProcess";
import OurAchievements from "@/components/OurAchievements";
import PopularCourses from "@/components/PopularCourses";
import TrendingCourses from "@/components/TrendingCourses";
import Testimonials from "@/components/Testimonials";
import LatestInsights from "@/components/LatestInsights";
import GetInTouch from "@/components/GetInTouch";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        <HeroSlider />
        <StatsBar />
        <CourseCategories />
        <TrendingCategories />
        <OurAchievements />
        <PopularCourses />
        <LearningProcess />
        <TrendingCourses />
        <Testimonials />
        <LatestInsights />
        {/* <TransformHero /> */}
        <GetInTouch />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
