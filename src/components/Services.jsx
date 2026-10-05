import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const servicesData = [
  { id: 'fresh-chicken', title: 'Fresh Chicken', desc: 'Freshly prepared chicken delivered fresh to your doorstep.', img: '/images/premium_fresh_chicken_1791211235743.png' },
  { id: 'fresh-fish', title: 'Fresh Fish', desc: 'Fresh fish selected for quality and delivered straight to your doorstep.', img: '/images/premium_fresh_fish_1791211250954.png' },
  { id: 'farm-fresh-eggs', title: 'Farm Fresh Eggs', desc: 'Fresh eggs carefully selected for your everyday breakfast preparation.', img: '/images/farm_fresh_eggs_1791211266680.png' },
  { id: 'idly-batter', title: 'Idly Batter', desc: 'Freshly prepared batter for soft, fluffy idlis at home.', img: '/images/premium_idli_1791211282748.png' },
  { id: 'dosa-batter', title: 'Dosa Batter', desc: 'Freshly prepared batter for delicious homemade dosas.', img: '/images/premium_dosa_1791211305262.png' },
  { id: 'pesara-batter', title: 'Pesara Batter', desc: 'Freshly prepared pesara batter for nutritious and tasty breakfasts.', img: '/images/premium_pesara_1791211327407.png' }
];

const Services = ({ onOrderClick }) => {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">WHAT WOULD YOU LIKE<br/>FRESH TODAY?</h2>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={service.id}
              className="service-clean-card"
              onClick={() => onOrderClick(service.id)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="card-img-wrapper">
                <img src={service.img} alt={service.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
                <button 
                  className="card-cta-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOrderClick(service.title);
                  }}
                >
                  ORDER NOW &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
