import React from 'react';

const ImpactStats = () => {
  const stats = [
    {
      label: "History of the Ecosystem",
      value: "12,000+",
      suffix: "Years",
      subtext: "Part of the ancient Guineo-Congolian rainforest."
    },
    {
      label: "Avian Biodiversity",
      value: "194+",
      suffix: "Bird Species",
      subtext: "Recognized as an Important Bird Area (IBA)."
    },
    {
      label: "Water Catchment",
      value: "5",
      suffix: "Major Rivers",
      subtext: "Ikuywa, Lugusitsi, Salaza, Isiukhu, and Yala rivers."
    }
  ];

  return (
    <section className="bg-[#0F2E22] py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#52B788]">At a Glance</h2>
          <p className="mt-2 text-lg text-gray-300">The Kakamega Forest Ecosystem by the Numbers</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center border-b border-[#2D6A4F]/30 pb-8 last:border-0 md:border-b-0 md:border-r md:pb-0 md:last:border-r-0"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-extrabold md:text-6xl text-[#52B788]">{stat.value}</span>
                <span className="text-xl font-medium text-[#40916C]">{stat.suffix}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold uppercase tracking-wider text-white">
                {stat.label}
              </h3>
              <p className="mt-2 text-center text-sm text-gray-400 max-w-xs">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;