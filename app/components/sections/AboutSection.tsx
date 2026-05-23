import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Historical Context */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D6A4F] mb-2">
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2E22] leading-tight">
                A Relic of Ancient Rainforest
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The Kakamega Forest is a relic of an ancient Central and East African rainforest that once stretched across the continent. Today, it stands as the last fragment of the Guineo-Congolian rainforest ecosystem in Kenya, representing over 12,000 years of evolutionary history.
              </p>
              <p>
                As a registered Community-Based Organization (CBO) since 2012, the KFE Consortium works at the intersection of conservation and community development, recognizing that sustainable biodiversity protection must go hand-in-hand with supporting local livelihoods.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-[#2D6A4F] pl-4">
                <h4 className="font-semibold text-[#0F2E22] text-lg">Our Mission</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Promote sustainable biodiversity conservation while supporting community livelihoods
                </p>
              </div>
              <div className="border-l-4 border-[#40916C] pl-4">
                <h4 className="font-semibold text-[#0F2E22] text-lg">Our Vision</h4>
                <p className="text-sm text-gray-600 mt-2">
                  A thriving forest ecosystem where communities and nature flourish together
                </p>
              </div>
            </div>
          </div>

          {/* Right: Modern Threats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-[#0F2E22] mb-6">
              Critical Threats We Face
            </h4>
            
            <div className="space-y-6">
              {[
                {
                  title: "Deforestation",
                  description: "Uncontrolled logging and timber extraction continue to fragment the forest, threatening habitat connectivity.",
                  icon: "🌲"
                },
                {
                  title: "Land Encroachment",
                  description: "Agricultural expansion into forest boundaries reduces critical habitat and disrupts ecosystem services.",
                  icon: "🏠"
                },
                {
                  title: "Soil Erosion",
                  description: "Loss of forest cover leads to degraded soil quality, affecting both forest health and agricultural productivity.",
                  icon: "🌍"
                },
                {
                  title: "Biodiversity Loss",
                  description: "Habitat destruction threatens the 194+ forest-dependent bird species and countless endemic plant species.",
                  icon: "🦜"
                }
              ].map((threat, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4F4F5] flex items-center justify-center text-2xl">
                    {threat.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F2E22]">{threat.title}</h5>
                    <p className="text-sm text-gray-600 mt-1">{threat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
