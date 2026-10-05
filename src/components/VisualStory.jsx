import React from 'react';
import { motion } from 'framer-motion';
import './VisualStory.css';

const VisualStory = () => {
  return (
    <section className="visual-story" style={{ backgroundImage: `url('/images/fresh_basket_full_1791211361365.png')` }}>
      <div className="visual-story-overlay"></div>
      
      <div className="container visual-story-content">
        <motion.h2 
          className="story-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          FRESH DOESN'T<br/>NEED A FREEZER.
        </motion.h2>
        
        <motion.p 
          className="story-desc"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We believe food should reach you the way it deserves to — fresh, carefully handled and ready for your kitchen.
        </motion.p>
        
        <div className="story-features">
          {['NO FREEZER', 'NO OVERNIGHT STORAGE', 'NO CHEMICAL PRESERVATIVES'].map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-dot"></div>
              </div>
              <span className="feature-text">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualStory;
