"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CoreFocusAreas = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Array for your Cloudinary community & forest photos
  const backgrounds = [
    "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778600249/08c97c40e061211c6624964c2e107e7a.png", 
    "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778599859/46862918af3d2a9da7c775ce787d730f.png",
    "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778585239/d68699b04d9d3e473c8e58fc70172b96.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const focusAreas = [
    {
      title: "Forest Restoration",
      description: "Engaging in biodiversity monitoring and indigenous tree planting to restore the delicate balance of the ecosystem, replacing exotic species with native flora.",
      icon: "🌳",
      highlights: ["Biodiversity Monitoring", "Indigenous Tree Planting", "Exotic Species Replacement"]
    },
    {
      title: "Community Livelihoods",
      description: "Supporting local families through sustainable practices that reduce pressure on forest resources while improving household resilience.",
      icon: "🏡",
      highlights: ["Kitchen Gardening", "Compost Manure Production", "Fuel-Efficient Stoves"]
    },
    {
      title: "Youth Empowerment",
      description: "Developing youth leadership and empowering the next generation to lead conservation and development efforts in their communities.",
      icon: "🤝",
      highlights: ["Leadership Development", "Climate Change Awareness", "Community Engagement"]
    }
  ];

  return (
    <section id="focus" className="relative min-h-[700px] w-full overflow-hidden py-24">
      {/* Dynamic Background Slider */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={bg}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0F2E22]/85 backdrop-blur-sm" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#52B788] mb-2">
            Our Core Focus
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Three Pillars of Conservation</h3>
          <p className="text-lg text-gray-300">
            Sustainable conservation and livelihood improvement for the local community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-[#0F2E22]/30 hover:-translate-y-1"
            >
              <div className="mb-6 text-5xl">{area.icon}</div>
              <h3 className="mb-4 text-2xl font-bold group-hover:text-[#52B788] transition-colors">
                {area.title}
              </h3>
              <p className="leading-relaxed text-gray-300 mb-6">
                {area.description}
              </p>
              <div className="space-y-2">
                {area.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFocusAreas;