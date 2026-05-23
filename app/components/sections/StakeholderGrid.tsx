import React from 'react';

const StakeholderGrid = () => {
  const stakeholders = [
    {
      category: "Government Departments",
      icon: "🏛️",
      partners: [
        "Kenya Forest Service",
        "County Government of Kakamega",
        "Ministry of Environment"
      ]
    },
    {
      category: "Research Institutions",
      icon: "🔬",
      partners: [
        "National Museums of Kenya",
        "Universities & Research Centers",
        "Botanical Gardens"
      ]
    },
    {
      category: "Private Sector",
      icon: "💼",
      partners: [
        "Local Businesses",
        "Corporate Partners",
        "Sustainable Enterprises"
      ]
    },
    {
      category: "Development Agencies",
      icon: "🌍",
      partners: [
        "International NGOs",
        "Conservation Organizations",
        "Community Development Groups"
      ]
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D6A4F] mb-2">
            Collaboration Framework
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F2E22] mb-4">
            Our Partners & Stakeholders
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Effective conservation requires collaboration across sectors. We work with diverse partners to achieve our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-[#FAFAFA] p-8 transition-all hover:shadow-lg hover:border-[#2D6A4F]/30 hover:-translate-y-1"
            >
              <div className="mb-6 text-5xl">{stakeholder.icon}</div>
              <h4 className="text-xl font-bold text-[#0F2E22] mb-4 group-hover:text-[#2D6A4F] transition-colors">
                {stakeholder.category}
              </h4>
              <ul className="space-y-3">
                {stakeholder.partners.map((partner, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#40916C] mt-2 flex-shrink-0" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Interested in partnering with us? <span className="text-[#2D6A4F] font-semibold">Contact us</span> to explore collaboration opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StakeholderGrid;
