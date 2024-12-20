import React, { useState } from "react";

const galleryImages = [
  { src: "images/room-1.jpg", alt: "Luxurious hotel room", category: "Rooms" },
  { src: "images/image_1.jpg", alt: "Elegant event hall", category: "Events" },
  { src: "images/room-1.jpg", alt: "Modern conference room", category: "Events" },
  { src: "images/person_1.jpg", alt: "Relaxing spa area", category: "Events" },
  { src: "images/menu-1.jpg", alt: "Gourmet restaurant", category: "Events" },
  { src: "images/insta-1.jpg", alt: "Outdoor swimming pool", category: "Rooms" },
  { src: "images/room-1.jpg", alt: "Scenic hotel exterior", category: "Rooms" },
  { src: "images/menu-3.jpg", alt: "Cozy hotel bar", category: "Rooms" },
  { src: "images/room-2.jpg", alt: "Spacious suite", category: "Rooms" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState(null);

  const filteredImages = filter
    ? galleryImages.filter((img) => img.category === filter)
    : galleryImages;

  const categories = Array.from(new Set(galleryImages.map((img) => img.category)));

  return (
    <div className="container mt-4 mb-4 mx-auto px-4 py-16">
      <h2 className="text-[#293941] md:text-4xl text-xl font-bold text-center mb-8">Our Gallery</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            filter === null ? "bg-[#c59a63] text-white focus:outline-none" : "focus:outline-none bg-[#c2c3c7] text-[#293941]"
          }`}
          onClick={() => setFilter(null)}
        >
          All categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              filter === category ? "bg-[#c59a63] text-white focus:outline-none" : "focus:outline-none bg-[#c2c3c7] text-[#293941]"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain max-h-[90vh] w-full"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
