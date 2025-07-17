import React from 'react';
import { Zap, Shield, Star, Clock } from 'lucide-react';

interface Bike {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  features: string[];
  rating: number;
  available: boolean;
}

interface BikeListingsProps {
  onBookNow: (bike: Bike) => void;
}

const BikeListings: React.FC<BikeListingsProps> = ({ onBookNow }) => {
  const bikes: Bike[] = [
    {
      id: 1,
      name: "City Cruiser",
      type: "City Bike",
      price: 20,
      image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Comfortable seat", "LED lights", "Basket included", "Easy gear system"],
      rating: 4.8,
      available: true
    },
    {
      id: 2,
      name: "Mountain Explorer",
      type: "Mountain Bike",
      price: 35,
      image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["21-speed gears", "Shock absorbers", "All-terrain tires", "Durable frame"],
      rating: 4.9,
      available: true
    },
    {
      id: 3,
      name: "Speed Demon",
      type: "Road Bike",
      price: 30,
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Lightweight frame", "Racing handlebars", "Quick brakes", "Aerodynamic design"],
      rating: 4.7,
      available: true
    },
    {
      id: 4,
      name: "Electric Glide",
      type: "E-Bike",
      price: 50,
      image: "https://images.pexels.com/photos/1201354/pexels-photo-1201354.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Electric motor", "40km range", "USB charging", "Digital display"],
      rating: 4.9,
      available: true
    },
    {
      id: 5,
      name: "Campus Rider",
      type: "Hybrid",
      price: 25,
      image: "https://images.pexels.com/photos/1149146/pexels-photo-1149146.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Versatile design", "Puncture-resistant tires", "Chain guard", "Reflective strips"],
      rating: 4.6,
      available: false
    },
    {
      id: 6,
      name: "Weekend Warrior",
      type: "Sports Bike",
      price: 40,
      image: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Performance oriented", "Carbon fiber parts", "Premium suspension", "Racing setup"],
      rating: 4.8,
      available: true
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Choose Your Perfect
          <span className="bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent"> Ride</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From city cruisers to mountain bikes, we have the perfect bike for every adventure. 
          All bikes are well-maintained and ready for your next journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <div key={bike.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden">
              <img 
                src={bike.image} 
                alt={bike.name} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Availability badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                bike.available 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {bike.available ? 'Available' : 'Booked'}
              </div>
              
              {/* Price badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full font-bold">
                ₹{bike.price}/hr
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{bike.name}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {bike.type}
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{bike.rating}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">Quick pickup</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {bike.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => onBookNow(bike)}
                  disabled={!bike.available}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    bike.available
                      ? 'bg-gradient-to-r from-sky-500 to-orange-500 text-white hover:from-sky-600 hover:to-orange-600 transform hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {bike.available ? 'Book Now' : 'Not Available'}
                </button>
                
                <button className="p-3 border-2 border-sky-500 text-sky-500 rounded-xl hover:bg-sky-500 hover:text-white transition-all duration-300">
                  <Shield className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Can't find the perfect bike?</h3>
          <p className="text-lg mb-6">Contact us and we'll help you find the ideal ride for your needs!</p>
          <button className="bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeListings;