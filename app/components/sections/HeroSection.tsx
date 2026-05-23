import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  // Cloudinary placeholder for a lush forest canopy
  const backgroundImage = "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778599859/46862918af3d2a9da7c775ce787d730f.png"; 

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image with Overlay - Using Next.js Image for LCP optimization */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Kakamega Forest Canopy"
          fill
          priority
          quality={85}
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0F2E22]/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white pt-20">
        <div className="max-w-5xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl leading-tight">
            Conserving the Last Fragment of the{' '}
            <span className="text-[#52B788]">Guineo-Congolian</span> Rainforest
          </h1>
          
          <p className="max-w-3xl text-lg md:text-xl text-gray-100 leading-relaxed">
            The Kakamega Forest Ecosystem Consortium (KFE Consortium) is dedicated to protecting this 12,000-year-old biodiversity hotspot while supporting community livelihoods.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link 
              href="#focus" 
              className="rounded-full bg-[#2D6A4F] px-8 py-4 text-lg font-semibold transition-all hover:bg-[#1B4332] hover:shadow-lg hover:shadow-[#2D6A4F]/30 active:scale-95"
            >
              Our Mission
            </Link>
            <Link 
              href="#support" 
              className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all hover:bg-white hover:text-[#0F2E22] active:scale-95"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-white/70 uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-0.5 rounded-full bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;