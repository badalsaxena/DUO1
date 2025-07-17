import React from 'react';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBikes = () => {
    const element = document.getElementById('bikes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-sky-300 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-white text-sm font-medium">Trusted by 10k+ Students</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">Rent Your Perfect</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Bike Today!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Affordable, reliable, and convenient bike rentals for college students. 
              Explore your campus and city with our premium bikes starting at just ₹20/hour.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToBikes}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-sky-400 mr-2" />
                  <span className="text-2xl font-bold text-white">10k+</span>
                </div>
                <p className="text-white/80 text-sm">Happy Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <p className="text-white/80 text-sm">Availability</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <p className="text-white/80 text-sm">Rating</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Premium Bike" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating price tag */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
                <span className="font-bold text-lg">₹20/hr</span>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-orange-400 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;