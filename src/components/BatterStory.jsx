import React from 'react';
import { motion } from 'framer-motion';
import './BatterStory.css';

const BatterStory = () => {
  const batters = [
    {
      id: 'idly',
      title: 'IDLY',
      desc: ['Soft.', 'Fresh.', 'Fluffy.'],
      img: '/images/premium_idli_1791211282748.png',
      cta: 'SHOP IDLY'
    },
    {
      id: 'dosa',
      title: 'DOSA',
      desc: ['Crispy.', 'Golden.', 'Fresh.'],
      img: '/images/premium_dosa_1791211305262.png',
      cta: 'SHOP DOSA'
    },
    {
      id: 'pesara',
      title: 'PESARA',
      desc: ['Nutritious.', 'Traditional.', 'Delicious.'],
      img: '/images/premium_pesara_1791211327407.png',
      cta: 'SHOP PESARA'
    }
  ];

  return (
    <section className="batter-story section-padding" id="batters">
      <div className="container">
        <div className="batter-panels">
          {batters.map((batter, i) => (
            <motion.div 
              key={batter.id}
              className="batter-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="batter-img-container">
                <img src={batter.img} alt={batter.title} className="batter-img" />
                <div className="batter-overlay"></div>
              </div>
              
              <div className="batter-content">
                <h3 className="batter-title">{batter.title}</h3>
                <div className="batter-desc">
                  {batter.desc.map((line, j) => (
                    <span key={j} className="desc-line">{line}</span>
                  ))}
                </div>
                <button className="btn btn-outline batter-cta">{batter.cta}</button>
                <div className="botanical-graphic"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatterStory;
