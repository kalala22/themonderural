import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AxesSection from "@/components/AxesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <AxesSection />
        <NewsSection />
      </main>

      <Footer />
    </div>
  );
}


