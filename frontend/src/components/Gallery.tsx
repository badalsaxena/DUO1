import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "City Cruiser Bike",
      category: "City Bikes"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mountain Bike",
      category: "Mountain Bikes"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Road Bike",
      category: "Road Bikes"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1201354/pexels-photo-1201354.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Electric Bike",
      category: "E-Bikes"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/1149146/pexels-photo-1149146.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hybrid Bike",
      category: "Hybrid Bikes"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Sports Bike",
      category: "Sports Bikes"
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Students with Bikes",
      category: "Community"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/1090745/pexels-photo-1090745.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bike Rental Station",
      category: "Locations"
    }
  ];

  const categories = ["All", "City Bikes", "Mountain Bikes", "Road Bikes", "E-Bikes", "Hybrid Bikes", "Sports Bikes", "Community", "Locations"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Bike
          <span className="bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent"> Gallery</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our collection of premium bikes and see what makes RideEasy the perfect choice for students.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-sky-500 to-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => setSelectedImage(image.url)}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white font-medium">{image.alt}</p>
              <p className="text-gray-300 text-sm">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Image" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl p-8 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Experience These Bikes?</h3>
        <p className="text-xl mb-6">
          Choose from our amazing collection and start your next adventure today!
        </p>
        <button className="bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Book Your Bike Now
        </button>
      </div>
    </div>
  );
};

export default Gallery;