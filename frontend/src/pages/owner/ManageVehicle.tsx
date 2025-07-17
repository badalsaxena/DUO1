import React, { useState } from 'react';
import {
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

interface Vehicle {
  id: string;
  name: string;
  type: string;
  brand: string;
  model: string;
  year: number;
  pricePerHour: number;
  status: 'Available' | 'Rented' | 'Maintenance';
  location: string;
  image: string;
}

const ManageVehicles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const [vehicles] = useState<Vehicle[]>([
    {
      id: '1',
      name: 'Mountain Pro X1',
      type: 'Mountain Bike',
      brand: 'Trek',
      model: 'X-Caliber 9',
      year: 2024,
      pricePerHour: 15,
      status: 'Available',
      location: 'Downtown Store',
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
    },
    {
      id: '2',
      name: 'City Cruiser',
      type: 'City Bike',
      brand: 'Giant',
      model: 'Escape 3',
      year: 2023,
      pricePerHour: 12,
      status: 'Rented',
      location: 'Mall Location',
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'
    },
    {
      id: '3',
      name: 'Sport Racer',
      type: 'Road Bike',
      brand: 'Specialized',
      model: 'Allez Sprint',
      year: 2024,
      pricePerHour: 20,
      status: 'Available',
      location: 'Park Station',
      image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg'
    },
    {
      id: '4',
      name: 'Electric Eco',
      type: 'Electric Bike',
      brand: 'Rad Power',
      model: 'RadCity 5',
      year: 2024,
      pricePerHour: 25,
      status: 'Maintenance',
      location: 'Downtown Store',
      image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg'
    }
  ]);

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || vehicle.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Rented':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Manage Vehicles</h1>
        <p className="text-gray-600">Manage your bike rental fleet</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Status</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Vehicle
          </button>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="relative">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
                {vehicle.status}
              </span>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><span className="font-medium">Type:</span> {vehicle.type}</p>
                <p><span className="font-medium">Brand:</span> {vehicle.brand} {vehicle.model}</p>
                <p><span className="font-medium">Year:</span> {vehicle.year}</p>
                <p><span className="font-medium">Location:</span> {vehicle.location}</p>
                <p className="text-lg font-bold text-blue-600">${vehicle.pricePerHour}/hour</p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  View
                </button>
                <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Edit
                </button>
                <button className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No vehicles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ManageVehicles;