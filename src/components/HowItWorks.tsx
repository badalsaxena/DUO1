import React from 'react';
import { Search, Calendar, CreditCard, Bike } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Select",
      description: "Choose from our wide selection of well-maintained bikes perfect for your needs",
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Book Online",
      description: "Select your preferred date, time, and duration. Fill in your details securely",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay online or choose cash on pickup. Your security deposit is fully refundable",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bike,
      title: "Pick Up & Ride",
      description: "Collect your bike from our location and start your adventure with confidence",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How It
          <span className="bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent"> Works</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Getting your perfect bike is easy with our simple 4-step process. Start riding in minutes!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map((step, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-6">
              <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                <span className="text-sm font-bold text-gray-700">{index + 1}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Process Flow */}
      <div className="bg-gradient-to-r from-sky-50 to-orange-50 rounded-2xl p-8 mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Simple Process, Amazing Results</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-600 mb-2">2 min</div>
            <div className="text-gray-600">Average booking time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction guarantee</div>
          </div>
        </div>
      </div>

      {/* Safety and Requirements */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety First</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Regular Maintenance</div>
                <div className="text-gray-600">All bikes undergo daily safety checks</div>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Insurance Coverage</div>
                <div className="text-gray-600">Comprehensive insurance for all riders</div>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Safety Equipment</div>
                <div className="text-gray-600">Free helmet and safety gear included</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Valid ID Proof</div>
                <div className="text-gray-600">College ID or government issued ID</div>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Driving License</div>
                <div className="text-gray-600">Valid driving license required</div>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Age Requirement</div>
                <div className="text-gray-600">Must be 18 years or older</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;