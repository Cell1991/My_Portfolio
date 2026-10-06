import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#07080d] text-[#f0f4fc] selection:bg-cyan-500 selection:text-black">
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <InteractiveTerminal />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
