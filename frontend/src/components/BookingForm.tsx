import React, { useState } from 'react';
import { X, Calendar, Clock, CreditCard, User, Phone, Car as IdCard, FileText } from 'lucide-react';

interface BookingFormProps {
  bike: any;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ bike, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collegeId: '',
    drivingLicense: '',
    startDate: '',
    startTime: '',
    duration: '1',
    securityDeposit: 500,
    paymentMethod: 'card'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Booking submitted successfully! You will receive a confirmation email shortly.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const totalCost = bike.price * parseInt(formData.duration) + formData.securityDeposit;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Bike</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Bike Details */}
          <div className="bg-gradient-to-r from-sky-50 to-orange-50 p-4 rounded-xl">
            <div className="flex items-center space-x-4">
              <img 
                src={bike.image} 
                alt={bike.name} 
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{bike.name}</h3>
                <p className="text-sky-600 font-medium">₹{bike.price}/hour</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">College ID</label>
                <input
                  type="text"
                  name="collegeId"
                  value={formData.collegeId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Driving License */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <IdCard className="w-5 h-5 mr-2" />
              Driving License
            </h3>
            <input
              type="text"
              name="drivingLicense"
              value={formData.drivingLicense}
              onChange={handleChange}
              placeholder="Enter your driving license number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>

          {/* Rental Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Rental Details
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration (hours)</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours</option>
                  <option value="4">4 Hours (Half Day)</option>
                  <option value="8">8 Hours (Full Day)</option>
                  <option value="24">24 Hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Rental ({formData.duration} hours)</span>
                <span>₹{bike.price * parseInt(formData.duration)}</span>
              </div>
              <div className="flex justify-between">
                <span>Security Deposit</span>
                <span>₹{formData.securityDeposit}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{totalCost}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Method
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Credit/Debit Card</div>
                  <div className="text-sm text-gray-500">Secure payment</div>
                </div>
              </label>
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">UPI</div>
                  <div className="text-sm text-gray-500">Instant payment</div>
                </div>
              </label>
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Cash</div>
                  <div className="text-sm text-gray-500">Pay on pickup</div>
                </div>
              </label>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-yellow-50 p-4 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Important Notes:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Security deposit is refundable upon safe return of the bike</li>
              <li>• Late return charges: ₹50 per hour</li>
              <li>• Damage charges will be deducted from security deposit</li>
              <li>• Valid ID proof required for pickup</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-6 bg-gradient-to-r from-sky-500 to-orange-500 text-white rounded-lg hover:from-sky-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;