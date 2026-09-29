import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurJourney from "@/components/OurJourney";
import GetInTouch from "@/components/GetInTouch";
import Newsletter from "@/components/Newsletter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        <AboutUs />
        <WhyChooseUs />
        <OurJourney />
        <GetInTouch />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
