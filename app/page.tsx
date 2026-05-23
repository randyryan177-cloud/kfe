import HeroSection from "@/app/components/sections/HeroSection";
import ImpactStats from "@/app/components/sections/ImpactStats";
import AboutSection from "@/app/components/sections/AboutSection";
import CoreFocusAreas from "@/app/components/sections/CoreFocusAreas";
import RestorationApproach from "@/app/components/sections/RestorationApproach";
import StakeholderGrid from "@/app/components/sections/StakeholderGrid";
import ForestGallery from "./components/sections/ForestGallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Metrics Bar */}
      <ImpactStats />

      {/* About Us & Landscape Context */}
      <AboutSection />

      {/* Core Focus Grid (3 Pillars) */}
      <CoreFocusAreas />

      {/* Methodology Timeline */}
      <RestorationApproach />

      {/* Stakeholder & Partnership Grid */}
      <StakeholderGrid />

      {/* Action Media Gallery */}
      <ForestGallery />
    </main>
  );
}