import React from 'react';
import { motion } from 'framer-motion';
import { Sunrise, Moon, Sun } from 'lucide-react';
import './DeliverySchedule.css';

const DeliverySchedule = () => {
  return (
    <section className="delivery-schedule section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">WHEN CAN WE DELIVER?</h2>
        </motion.div>

        <div className="schedule-container">
          
          <motion.div 
            className="schedule-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="schedule-day">MONDAY — SATURDAY</h3>
            
            <div className="schedule-slots">
              <div className="slot-item">
                <div className="slot-icon"><Sunrise size={24} /></div>
                <div className="slot-times">
                  <span className="slot-label">MORNING</span>
                  <span className="slot-time">5:30 AM — 7:30 AM</span>
                </div>
              </div>
              
              <div className="slot-item">
                <div className="slot-icon"><Moon size={24} /></div>
                <div className="slot-times">
                  <span className="slot-label">EVENING</span>
                  <span className="slot-time">7:30 PM — 10:30 PM</span>
                </div>
              </div>
              
              <div className="slot-item">
                <div className="slot-icon"><Moon size={24} /></div>
                <div className="slot-times">
                  <span className="slot-label">LATE EVENING</span>
                  <span className="slot-time">9:30 PM — 11:30 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="schedule-box sunday-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="schedule-day">SUNDAY</h3>
            
            <div className="schedule-slots">
              <div className="slot-item">
                <div className="slot-icon"><Sunrise size={24} /></div>
                <div className="slot-times">
                  <span className="slot-label">MORNING</span>
                  <span className="slot-time">7:30 AM — 10:30 AM</span>
                </div>
              </div>
              
              <div className="slot-item">
                <div className="slot-icon"><Sun size={24} /></div>
                <div className="slot-times">
                  <span className="slot-label">LATE MORNING</span>
                  <span className="slot-time">11:30 AM — 12:30 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeliverySchedule;
