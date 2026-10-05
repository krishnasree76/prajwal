import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './WhyPrajwal.css';

const reasons = [
  {
    num: '01',
    title: 'FRESH',
    desc: 'We focus on delivering fresh products without unnecessary cold-storage dependency.',
    img: '/images/premium_fresh_fish_1791211250954.png' // Using one of the existing premium images as reveal
  },
  {
    num: '02',
    title: 'CAREFUL',
    desc: 'Products are handled with attention from preparation to delivery.',
    img: '/images/premium_fresh_chicken_1791211235743.png'
  },
  {
    num: '03',
    title: 'LOCAL',
    desc: 'Serving the local Vijayawada community with convenient doorstep delivery.',
    img: '/images/farm_fresh_eggs_1791211266680.png'
  },
  {
    num: '04',
    title: 'DELIVERED',
    desc: 'Freshness doesn\'t stop at preparation — it reaches your doorstep.',
    img: '/images/morning_delivery_1791211345508.png'
  }
];

const WhyPrajwal = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="why-prajwal section-padding">
      <div className="container">
        <motion.h2 
          className="section-title why-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WHY<br/>PRAJWAL?
        </motion.h2>

        <div className="reasons-list">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={reason.num}
              className="reason-item"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="reason-header">
                <span className="reason-num">{reason.num}</span>
                <h3 className="reason-title">{reason.title}</h3>
              </div>
              
              <div className="reason-content-wrapper">
                <p className="reason-desc">{reason.desc}</p>
                
                <div className={`reason-image-reveal ${hoveredIdx === idx ? 'visible' : ''}`}>
                  <img src={reason.img} alt={reason.title} />
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPrajwal;
