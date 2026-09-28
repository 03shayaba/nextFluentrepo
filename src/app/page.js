import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import CourseCategories from "@/components/CourseCategories";
import TrendingCategories from "@/components/TrendingCategories";
import PopularCourses from "@/components/PopularCourses";
import TrendingCourses from "@/components/TrendingCourses";
import Testimonials from "@/components/Testimonials";
import LatestInsights from "@/components/LatestInsights";
import GetInTouch from "@/components/GetInTouch";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        <HeroSlider />
        <StatsBar />
        <CourseCategories />
        <TrendingCategories />
        <PopularCourses />
        <TrendingCourses />
        <Testimonials />
        <LatestInsights />
        <GetInTouch />
        <Newsletter />
      </main>
    </div>
  );
}
