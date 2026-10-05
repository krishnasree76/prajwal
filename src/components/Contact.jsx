import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Loader2, PhoneCall, ExternalLink, MessageCircle } from 'lucide-react';
import './Contact.css';

const SERVICES = [
  'Fresh Chicken',
  'Fresh Fish',
  'Farm Fresh Eggs',
  'Idly Batter',
  'Dosa Batter',
  'Pesara Batter'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    requirement: '',
    message: '',
    address: ''
  });
  
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleGetLocation = () => {
    setLocationError('');
    setIsLocating(true);
    
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if (data && data.display_name) {
            setFormData(prev => ({ ...prev, address: data.display_name }));
          } else {
            setLocationError("Couldn't exact address. Please enter manually.");
          }
        } catch (err) {
          setLocationError("Address lookup failed. Please enter manually.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setIsLocating(false);
        setLocationError("Couldn't access your location. Please enter it manually.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const text = `Hello Prajwal Fresh Basket! 👋

I have an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service || 'N/A'}
Requirement: ${formData.requirement || 'N/A'}
Message: ${formData.message}
Address: ${formData.address || 'N/A'}

Please get back to me.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916304659343?text=${encodedText}`, '_blank');
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container contact-grid">
        
        <motion.div 
          className="contact-info-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="contact-subtitle">Have a question or a special request? We're here to help.</p>

          <div className="contact-details-box">
            <p className="c-label">PHONE</p>
            <p className="c-value">6304659343</p>
            
            <p className="c-label">EMAIL</p>
            <p className="c-value">Prajwalfreshbasket@gmail.com</p>
            
            <p className="c-label">LOCATION</p>
            <p className="c-value">Tadigadapa, Penamaluru,<br/>Vijayawada - 521137</p>
            
            <p className="c-label">INSTAGRAM</p>
            <p className="c-value">@Prajwal.freshbasket</p>
          </div>

          <div className="contact-quick-actions">
            <a href="tel:+916304659343" className="btn btn-outline quick-btn">
              <PhoneCall size={18} style={{marginRight: '8px'}} /> CALL NOW
            </a>
            <a href="https://wa.me/916304659343" target="_blank" rel="noreferrer" className="btn btn-primary quick-btn">
              <MessageCircle size={18} style={{marginRight: '8px'}} /> WHATSAPP
            </a>
            <a href="https://instagram.com/Prajwal.freshbasket" target="_blank" rel="noreferrer" className="btn btn-outline quick-btn">
              <ExternalLink size={18} style={{marginRight: '8px'}} /> INSTAGRAM
            </a>
            <a href="https://maps.google.com/?q=Tadigadapa,+Penamaluru,+Vijayawada+-+521137" target="_blank" rel="noreferrer" className="btn btn-outline quick-btn">
              <MapPin size={18} style={{marginRight: '8px'}} /> GET DIRECTIONS
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label>Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInput} className="form-control" />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInput} className="form-control" />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>Select Service (Optional)</label>
                <select name="service" value={formData.service} onChange={handleInput} className="form-control">
                  <option value="">Select a service</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Requirement (Optional)</label>
                <input type="text" name="requirement" value={formData.requirement} onChange={handleInput} className="form-control" />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleInput} className="form-control" rows="3"></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <div className="form-group">
                <label className="flex-between">
                  Address (Optional)
                  <button type="button" className="location-btn" onClick={handleGetLocation} disabled={isLocating}>
                    {isLocating ? <Loader2 size={14} className="spin" /> : <MapPin size={14} />}
                    USE MY CURRENT LOCATION
                  </button>
                </label>
                {locationError && <span className="error-text info-text">{locationError}</span>}
                <textarea name="address" value={formData.address} onChange={handleInput} className="form-control" rows="2"></textarea>
              </div>

              <button type="submit" className="btn btn-primary full-width" style={{marginTop: '10px'}}>
                SEND ENQUIRY ON WHATSAPP
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
