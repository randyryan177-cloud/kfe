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
      subtext: "Supporting local agriculture and water supply."
    }
  ];

  return (
    <section className="bg-green-900 py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center border-b border-green-800 pb-8 last:border-0 md:border-b-0 md:border-r md:pb-0 md:last:border-r-0"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold md:text-5xl">{stat.value}</span>
                <span className="text-xl font-medium text-green-300">{stat.suffix}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold uppercase tracking-wider text-green-100">
                {stat.label}
              </h3>
              <p className="mt-2 text-center text-sm text-green-200/80">
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