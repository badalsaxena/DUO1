import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      college: "Delhi University",
      rating: 5,
      comment: "RideEasy has been a game-changer for my daily commute. The bikes are well-maintained and the pricing is perfect for students like me. Highly recommend!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Rahul Patel",
      college: "IIT Mumbai",
      rating: 5,
      comment: "Love the convenience! Booked a bike for my weekend trip to explore the city. The whole process was smooth and the customer service was excellent.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ananya Singh",
      college: "Bangalore University",
      rating: 4,
      comment: "Great service and affordable prices. I use RideEasy regularly for campus trips. The bikes are always clean and ready to ride.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Arjun Kumar",
      college: "JNU Delhi",
      rating: 5,
      comment: "Amazing experience! The booking process is super easy and the bikes are in excellent condition. Perfect for students on a budget.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sneha Gupta",
      college: "Pune University",
      rating: 5,
      comment: "I've been using RideEasy for 6 months now. The variety of bikes and flexible timing makes it perfect for my schedule. Highly satisfied!",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Vikram Joshi",
      college: "Christ University",
      rating: 4,
      comment: "Reliable and affordable. The customer support team is always helpful. I recommend RideEasy to all my friends.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What Students
          <span className="bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent"> Say</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our amazing community of students has to say about RideEasy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.college}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-sky-200" />
              <p className="text-gray-600 italic pl-6">{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-sky-50 to-orange-50 rounded-2xl p-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Happy Community</h3>
        <p className="text-xl text-gray-600 mb-6">
          Over 10,000 students trust RideEasy for their transportation needs. Be part of our growing community!
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">10k+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50k+</div>
            <div className="text-gray-600">Rides Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;