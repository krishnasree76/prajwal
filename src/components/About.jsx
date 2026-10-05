import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          
          <motion.div 
            className="about-image-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-img-wrapper">
              <img src="/images/farm_fresh_eggs_1791211266680.png" alt="Fresh ingredients" />
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">WHY WE DO IT DIFFERENTLY.</h2>
            <h3 className="about-subtitle">WE SKIP THE COLD STORAGE.</h3>
            
            <p className="about-desc">
              At Prajwal Fresh Basket, we believe freshness should reach your kitchen without unnecessary storage.
            </p>
            
            <ul className="about-points-list">
              <li>No freezers.</li>
              <li>No chemical preservatives.</li>
              <li>No overnight refrigeration.</li>
            </ul>
            
            <p className="about-desc-bold">
              Just carefully prepared fresh food, delivered to your doorstep.
            </p>
            
            <div className="about-visual-points">
              <div className="v-point">
                <span>FRESH</span>
              </div>
              <div className="v-point">
                <span>CAREFULLY HANDLED</span>
              </div>
              <div className="v-point">
                <span>DOORSTEP DELIVERY</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
