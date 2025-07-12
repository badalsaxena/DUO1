import React from 'react';
import { Clock, Star, CheckCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Hourly",
      price: "₹20",
      duration: "per hour",
      description: "Perfect for short trips and quick errands",
      features: [
        "Basic bike maintenance",
        "Insurance coverage",
        "24/7 customer support",
        "Free helmet",
        "GPS tracking"
      ],
      popular: false,
      color: "from-sky-500 to-blue-500"
    },
    {
      name: "Half Day",
      price: "₹70",
      duration: "4 hours",
      description: "Great for exploring the city or campus",
      features: [
        "All hourly features",
        "Priority customer support",
        "Free bike accessories",
        "Breakdown assistance",
        "Route recommendations"
      ],
      popular: true,
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Full Day",
      price: "₹120",
      duration: "8 hours",
      description: "Best value for day-long adventures",
      features: [
        "All half-day features",
        "Premium bike selection",
        "Free delivery/pickup",
        "Extended insurance",
        "Personal riding guide"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple & Transparent
          <span className="bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent"> Pricing</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your needs. All plans include insurance, maintenance, and 24/7 support.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? 'ring-4 ring-orange-500 ring-opacity-50' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="relative">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                    {plan.price}
                  </div>
                  <div className="text-gray-500 text-sm">{plan.duration}</div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                  : 'border-2 border-gray-300 text-gray-700 hover:border-sky-500 hover:text-sky-500'
              }`}>
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-sky-500" />
            Security Deposit
          </h3>
          <p className="text-gray-600 mb-4">
            A refundable security deposit of ₹500 is required for all rentals. This amount will be returned upon safe return of the bike.
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Deposit is fully refundable</li>
            <li>• No damage = full refund</li>
            <li>• Instant refund on return</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Star className="w-6 h-6 mr-2 text-orange-500" />
            Late Return Policy
          </h3>
          <p className="text-gray-600 mb-4">
            We understand plans can change. Here's our fair late return policy:
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• First 30 minutes: Free</li>
            <li>• After 30 minutes: ₹50/hour</li>
            <li>• 24-hour grace period for emergencies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;