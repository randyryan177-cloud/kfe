import HeroSection from "@/app/components/sections/HeroSection";
import ImpactStats from "@/app/components/sections/ImpactStats";
import CoreFocusAreas from "@/app/components/sections/CoreFocusAreas";
import RestorationApproach from "@/app/components/sections/RestorationApproach";
import ForestGallery from "./components/sections/ForestGallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* 1. Hero: Conserving the Last Fragment [cite: 22, 28] */}
      <HeroSection />

      {/* 2. Social Proof: 12,000+ Years & 194+ Bird Species  */}
      <ImpactStats />

      {/* 3. Core Focus: Restoration, Livelihoods, & Youth [cite: 5, 20] */}
      <CoreFocusAreas />

      {/* 4. The Narrative: Scientific & Indigenous Knowledge [cite: 31] */}
      <RestorationApproach />

      <ForestGallery />

      {/* Footer Placeholder for Contact & Stakeholder Links [cite: 7] */}
      <footer className="bg-zinc-50 py-12 border-t border-zinc-200">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Kakamega Forest Ecosystem Consortium. 
          Registered CBO (2012)[cite: 3, 4].
        </div>
        

      </footer>
    </main>
  );
}