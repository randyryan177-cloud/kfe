import React from 'react';
import Image from 'next/image';

const ForestGallery = () => {
  // Replace these with your Cloudinary URLs later
  const galleryImages = [
    { src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", alt: "Indigenous tree nursery", caption: "Forest Restoration" },
    { src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", alt: "Community kitchen garden", caption: "Livelihood Support" },
    { src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", alt: "Youth conservation workshop", caption: "Youth Empowerment" },
    { src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", alt: "Kakamega forest canopy", caption: "Biodiversity Hotspot" },
    { src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", alt: "Local river catchment", caption: "Water Security" },
    { src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", alt: "Compost manure preparation", caption: "Sustainable Farming" },
  ];

  return (
    <section className="bg-zinc-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold md:text-4xl text-zinc-900">Conservation in Action</h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            A glimpse into the KFE Consortium’s work in forest restoration, community livelihood improvement, and biodiversity protection across the Kakamega forest landscape[cite: 3, 11].
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative h-80 w-full overflow-hidden rounded-xl bg-zinc-200">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white uppercase tracking-wider">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForestGallery;