import React from 'react';
import { Heart, Users, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About
          <span className="bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent"> RideEasy</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about making transportation accessible, affordable, and fun for students. 
          Our mission is to provide the best bike rental experience while promoting eco-friendly travel.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2020 by a group of college students, RideEasy was born from the simple idea that 
            getting around campus and the city shouldn't be expensive or complicated. We started with just 
            5 bikes and a dream to make transportation accessible to every student.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Today, we serve thousands of students across multiple campuses, providing reliable, 
            well-maintained bikes for every type of journey. From quick trips to class to 
            weekend adventures, we've got you covered.
          </p>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600">10k+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Bikes Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Team Photo" 
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-sky-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold">4+ Years</div>
            <div className="text-sm">Serving Students</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Student-Centric</h3>
          <p className="text-gray-600">Built by students, for students. We understand your needs and budget.</p>
        </div>

        <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
          <p className="text-gray-600">Regular maintenance and safety checks ensure a smooth ride every time.</p>
        </div>

        <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Community Focused</h3>
          <p className="text-gray-600">We're part of your campus community and care about your experience.</p>
        </div>

        <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Locations</h3>
          <p className="text-gray-600">Multiple pickup points across campus for easy access.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
        <p className="text-xl mb-6 max-w-4xl mx-auto">
          To make sustainable, affordable transportation accessible to every student while building a 
          community that values eco-friendly travel and shared experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">Affordable</h4>
            <p className="text-sky-100">Student-friendly pricing for everyone</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Sustainable</h4>
            <p className="text-sky-100">Eco-friendly transportation solutions</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Reliable</h4>
            <p className="text-sky-100">Always available when you need us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;