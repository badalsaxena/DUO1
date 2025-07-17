import React from 'react';
import {
  TruckIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Vehicles',
      value: '24',
      change: '+2',
      changeType: 'increase',
      icon: TruckIcon,
      color: 'bg-blue-500'
    },
    {
      name: 'Active Bookings',
      value: '18',
      change: '+5',
      changeType: 'increase',
      icon: CalendarIcon,
      color: 'bg-green-500'
    },
    {
      name: 'Monthly Revenue',
      value: '$12,450',
      change: '+12%',
      changeType: 'increase',
      icon: CurrencyDollarIcon,
      color: 'bg-purple-500'
    },
    {
      name: 'Total Customers',
      value: '156',
      change: '-2',
      changeType: 'decrease',
      icon: UsersIcon,
      color: 'bg-orange-500'
    }
  ];

  const recentBookings = [
    { id: '001', customer: 'John Doe', bike: 'Mountain Pro X1', date: '2025-01-10', status: 'Active' },
    { id: '002', customer: 'Jane Smith', bike: 'City Cruiser', date: '2025-01-09', status: 'Completed' },
    { id: '003', customer: 'Mike Johnson', bike: 'Sport Racer', date: '2025-01-08', status: 'Active' },
    { id: '004', customer: 'Sarah Wilson', bike: 'Electric Eco', date: '2025-01-07', status: 'Pending' },
  ];

  const topVehicles = [
    { name: 'Mountain Pro X1', bookings: 28, revenue: '$3,200' },
    { name: 'City Cruiser', bookings: 24, revenue: '$2,880' },
    { name: 'Sport Racer', bookings: 22, revenue: '$3,540' },
    { name: 'Electric Eco', bookings: 19, revenue: '$2,660' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your bike rental business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h3>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{booking.customer}</p>
                  <p className="text-sm text-gray-600">{booking.bike}</p>
                  <p className="text-xs text-gray-500">{booking.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  booking.status === 'Active' ? 'bg-green-100 text-green-800' :
                  booking.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Vehicles */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Vehicles</h3>
          <div className="space-y-4">
            {topVehicles.map((vehicle, index) => (
              <div key={vehicle.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{vehicle.name}</p>
                    <p className="text-sm text-gray-600">{vehicle.bookings} bookings</p>
                  </div>
                </div>
                <span className="font-semibold text-green-600">{vehicle.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
        <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;