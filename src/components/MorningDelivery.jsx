import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './MorningDelivery.css';

const MorningDelivery = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="morning-delivery">
      <motion.div 
        className="morning-bg"
        style={{ 
          y: yParallax,
          backgroundImage: `url('/images/morning_delivery_1791211345508.png')`
        }}
      />
      <div className="morning-overlay" />
      
      <div className="container morning-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="morning-text-box"
        >
          <div className="sun-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </div>
          
          <h2 className="morning-headline">YOUR MORNING<br/>STARTS FRESH.</h2>
          <div className="morning-time">5:30 AM — 7:30 AM</div>
          
          <div className="morning-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-time">5:30 AM</div>
              <div className="timeline-label">Preparation</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-time">6:00 AM</div>
              <div className="timeline-label">On the move</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-time">7:30 AM</div>
              <div className="timeline-label">At your doorstep</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MorningDelivery;
