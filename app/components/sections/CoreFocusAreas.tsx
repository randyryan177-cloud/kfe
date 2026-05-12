"use client";
import React, { useState, useEffect } from 'react';

const CoreFocusAreas = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Array for your Cloudinary community & forest photos
  const backgrounds = [
    "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", 
    "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const focusAreas = [
    {
      title: "Forest Restoration",
      description: "Engaging in biodiversity monitoring and indigenous tree planting to restore the delicate balance of the ecosystem.",
      icon: "🌳"
    },
    {
      title: "Community Livelihoods",
      description: "Supporting local families through kitchen gardening, making compost manure, and installing fuel-efficient stoves[cite: 4, 5].",
      icon: "🏡"
    },
    {
      title: "Youth Empowerment",
      description: "Developing youth leadership and empowering the next generation to lead conservation and development efforts[cite: 6, 20].",
      icon: "🤝"
    }
  ];

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden py-24">
      {/* Dynamic Background Slider */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Our Core Focus Areas</h2>
          <p className="mt-4 text-green-200">Sustainable conservation and livelihood improvement for the local community[cite: 11].</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-2xl"
            >
              <div className="mb-6 text-4xl">{area.icon}</div>
              <h3 className="mb-4 text-2xl font-bold group-hover:text-green-400">{area.title}</h3>
              <p className="leading-relaxed text-gray-300">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFocusAreas;