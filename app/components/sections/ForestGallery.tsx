import React from 'react';
import Image from 'next/image';

const ForestGallery = () => {
  const galleryImages = [
    { 
      src: "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778600249/08c97c40e061211c6624964c2e107e7a.png", 
      alt: "Indigenous tree nursery", 
      caption: "Forest Restoration",
      description: "Growing indigenous saplings for reforestation efforts"
    },
    { 
      src: "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778585140/5073c76026fd5ec7cb28c22516ab43c8.jpg", 
      alt: "Community kitchen garden", 
      caption: "Livelihood Support",
      description: "Sustainable agriculture for local families"
    },
    { 
      src: "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778599859/46862918af3d2a9da7c775ce787d730f.png", 
      alt: "Kakamega forest canopy", 
      caption: "Biodiversity Hotspot",
      description: "Home to 194+ forest-dependent bird species"
    },
    { 
      src: "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778585239/d68699b04d9d3e473c8e58fc70172b96.jpg", 
      alt: "Local river catchment", 
      caption: "Water Security",
      description: "Protecting vital water sources for communities"
    },
    { 
      src: "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778585140/5073c76026fd5ec7cb28c22516ab43c8.jpg", 
      alt: "Compost manure preparation", 
      caption: "Sustainable Farming",
      description: "Organic farming practices for soil health"
    },
    { 
      src: "https://res.cloudinary.com/dfckq0ksp/image/upload/v1778599859/46862918af3d2a9da7c775ce787d730f.png", 
      alt: "Youth conservation workshop", 
      caption: "Youth Empowerment",
      description: "Building the next generation of conservation leaders"
    }
  ];

  return (
    <section id="gallery" className="bg-[#F4F4F5] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D6A4F] mb-2">
            Action Gallery
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F2E22] mb-4">
            Conservation in Action
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            A glimpse into the KFE Consortium&apos;s work in forest restoration, community livelihood improvement, and biodiversity protection across the Kakamega forest landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative h-96 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading={index < 2 ? "eager" : "lazy"}
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E22]/90 via-[#0F2E22]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-[#52B788] uppercase tracking-wider mb-2">
                  {image.caption}
                </p>
                <p className="text-sm text-gray-200">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForestGallery;