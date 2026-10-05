import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ onOrderClick }) => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="top">
      {/* Fallback pattern bg */}
      <div className="hero-bg-texture" />
      
      <div className="hero-container container">
        
        {/* Left Side: Text */}
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            <span className="dot"></span> NO COLD STORAGE
            <span className="dot" style={{marginLeft: '15px'}}></span> NO OVERNIGHT REFRIGERATION
          </div>
          
          <h1 className="hero-headline">
            FRESHNESS,<br />
            STRAIGHT TO<br />
            YOUR DOOR.
          </h1>
          
          <p className="hero-subheading">
            Fresh chicken, fish, eggs and traditional batters —
            carefully prepared and delivered fresh to your doorstep.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onOrderClick}>ORDER FRESH</button>
            <button className="btn btn-outline" onClick={scrollToServices}>VIEW SERVICES</button>
          </div>
        </motion.div>

        {/* Right Side: Static Premium Photography */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <img 
              src="/images/fresh_basket_full_1791211361365.png" 
              alt="Fresh vegetables, eggs, and groceries in a wicker basket" 
              className="hero-img"
            />
            {/* Subtle organic decorations */}
            <div className="leaf-decoration leaf-1" />
            <div className="leaf-decoration leaf-2" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
