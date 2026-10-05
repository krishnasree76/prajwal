import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import DeliverySchedule from './components/DeliverySchedule';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import OrderForm from './components/OrderForm';

function App() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openOrderForm = (serviceId = '') => {
    setSelectedService(serviceId);
    setIsOrderFormOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeOrderForm = () => {
    setIsOrderFormOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="app-container">
      <Navbar onOrderClick={() => openOrderForm('')} />
      
      <main>
        <Hero onOrderClick={() => openOrderForm('')} />
        <Services onOrderClick={openOrderForm} />
        <About />
        <DeliverySchedule />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <MobileActionBar onOrderClick={() => openOrderForm('')} />
      
      {isOrderFormOpen && (
        <OrderForm 
          onClose={closeOrderForm} 
          initialService={selectedService} 
        />
      )}
    </div>
  );
}

export default App;
