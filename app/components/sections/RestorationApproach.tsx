import React from 'react';

const RestorationApproach = () => {
  const steps = [
    {
      title: "Assess",
      subtitle: "Biodiversity Monitoring",
      content: "We participate in biodiversity monitoring to understand deforestation patterns, biodiversity loss, and the full extent of land degradation.",
      details: "Scientific tracking of the 194+ forest-dependent bird species and indigenous flora.",
      icon: "🔍"
    },
    {
      title: "Engage",
      subtitle: "Community Hotspot Identification",
      content: "We work directly with local communities to learn how deforestation impacts their daily lives and identify locally viable restoration solutions.",
      details: "Identifying hotspots where forest loss directly threatens local agriculture and water supply.",
      icon: "🤝"
    },
    {
      title: "Evaluate",
      subtitle: "Overcoming Barriers",
      content: "We address economic pressures and the cultural preference for exotic tree species over indigenous ones.",
      details: "Promoting the intrinsic value of forest preservation and restoration in past project evaluations.",
      icon: "⚖️"
    }
  ];

  return (
    <section className="bg-white py-24 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-green-600">Our Strategy</h2>
          <h3 className="mt-2 text-4xl font-bold md:text-5xl">Our Restoration Approaches</h3>
          <p className="mt-6 text-lg text-gray-600">
            While government-led programs exist, lasting restoration requires community engagement alongside scientific and indigenous knowledge.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:left-8 before:top-2 before:h-full before:w-0.5 before:bg-green-100 md:before:left-1/2">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex flex-col items-center md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Connector Dot */}
              <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-green-600 md:left-1/2" />

              {/* Content Card */}
              <div className="ml-16 w-full md:ml-0 md:w-5/12">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 text-3xl">{step.icon}</div>
                  <h4 className="text-xs font-bold uppercase text-green-600">{step.title}</h4>
                  <h5 className="mt-1 text-2xl font-bold">{step.subtitle}</h5>
                  <p className="mt-4 text-gray-600">{step.content} [cite: 33, 34, 35]</p>
                  <div className="mt-4 rounded-lg bg-white p-3 text-sm italic text-gray-500 border-l-4 border-green-500">
                    &quot;{step.details}&qout;
                  </div>
                </div>
              </div>
              
              {/* Spacer for MD screens */}
              <div className="hidden w-2/12 md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestorationApproach;