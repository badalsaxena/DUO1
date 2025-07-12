import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BikeListings from './components/BikeListings';
import BookingForm from './components/BookingForm';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null);

  const handleBookNow = (bike) => {
    setSelectedBike(bike);
    setShowBooking(true);
  };

  const closeBooking = () => {
    setShowBooking(false);
    setSelectedBike(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-orange-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <section id="home" className="relative">
          <Hero />
        </section>
        
        <section id="bikes" className="py-20 bg-white">
          <BikeListings onBookNow={handleBookNow} />
        </section>
        
        <section id="pricing" className="py-20 bg-gradient-to-r from-sky-100 to-yellow-100">
          <Pricing />
        </section>
        
        <section id="how-it-works" className="py-20 bg-white">
          <HowItWorks />
        </section>
        
        <section id="about" className="py-20 bg-gradient-to-r from-orange-100 to-sky-100">
          <About />
        </section>
        
        <section id="testimonials" className="py-20 bg-white">
          <Testimonials />
        </section>
        
        <section id="gallery" className="py-20 bg-gradient-to-r from-yellow-100 to-orange-100">
          <Gallery />
        </section>
      </main>
      
      <Footer />
      
      {showBooking && (
        <BookingForm 
          bike={selectedBike} 
          onClose={closeBooking} 
        />
      )}
    </div>
  );
}

export default App;