import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  // Cloudinary placeholder for a lush forest canopy
  const backgroundImage = "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"; 

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="max-w-4xl animate-fade-in text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Conserving the Last Fragment of the <span className="text-green-400">Guineo-Congolian</span> Rainforest
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          The Kakamega Forest Ecosystem Consortium (KFE Consortium) is dedicated to protecting this 12,000-year-old biodiversity hotspot while supporting community livelihoods. [cite: 3, 4, 28]
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link 
            href="#mission" 
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold transition-all hover:bg-green-700 hover:shadow-lg active:scale-95"
          >
            Our Mission
          </Link>
          <Link 
            href="#involvement" 
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all hover:bg-white hover:text-green-900 active:scale-95"
          >
            Get Involved
          </Link>
        </div>

        {/* Scroll Indicator (Optional) */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="h-6 w-1 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;