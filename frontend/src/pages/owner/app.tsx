import { useState } from 'react';

import Navbar from './Navbar';
import Dashboard from './Dashboard';
import ManageVehicles from './ManageVehicle';
import ManageBookings from './ManageBooking';
import AddVehicle from './Addvehicle';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'vehicles':
        return <ManageVehicles />;
      case 'bookings':
        return <ManageBookings />;
      case 'add-vehicle':
        return <AddVehicle />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="ml-0 lg:ml-64 transition-all duration-300">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
