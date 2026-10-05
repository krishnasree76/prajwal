import React, { useState, useEffect } from 'react';
import { X, MapPin, Loader2, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './OrderForm.css';

const SERVICES = [
  'Fresh Chicken',
  'Fresh Fish',
  'Farm Fresh Eggs',
  'Idly Batter',
  'Dosa Batter',
  'Pesara Batter'
];

const WEEKDAY_SLOTS = [
  '5:30 AM - 7:30 AM',
  '7:30 PM - 10:30 PM',
  '9:30 PM - 11:30 PM'
];

const SUNDAY_SLOTS = [
  '7:30 AM - 10:30 AM',
  '11:30 AM - 12:30 PM'
];

const OrderForm = ({ onClose, initialService }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: initialService && SERVICES.includes(initialService) ? initialService : 'Fresh Chicken',
    date: '',
    slot: '',
    quantity: '',
    requirements: '',
    name: '',
    phone: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');

  // Handle Input Changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    
    // Clear slot if date is changed because valid slots change
    if (name === 'date') {
      setFormData(prev => ({...prev, slot: ''}));
    }
  };

  // Determine available slots based on date
  const getAvailableSlots = () => {
    if (!formData.date) return [];
    const dateObj = new Date(formData.date);
    const day = dateObj.getDay(); // 0 = Sunday
    return day === 0 ? SUNDAY_SLOTS : WEEKDAY_SLOTS;
  };

  // Geolocation using Nominatim API
  const handleGetLocation = () => {
    setLocationError('');
    setIsLocating(true);
    
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser. Please enter manually.");
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
            if (errors.address) setErrors(prev => ({ ...prev, address: '' }));
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

  // Validation
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.date) newErrors.date = 'Please select a delivery date.';
    if (!formData.slot) newErrors.slot = 'Please select a delivery slot.';
    if (!formData.quantity) newErrors.quantity = 'Please enter required quantity.';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setStep(2);
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number.';
    }
    if (!formData.address.trim()) newErrors.address = 'Please enter your delivery address.';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setStep(3); // Go to review
  };

  // Generate WhatsApp Message
  const handleWhatsApp = () => {
    const text = `Hello Prajwal Fresh Basket! 👋

I would like to place an order.

*Order Details*
Service: ${formData.service}
Quantity: ${formData.quantity}

*Delivery*
Date: ${new Date(formData.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
Slot: ${formData.slot}

*Customer Details*
Name: ${formData.name}
Phone: ${formData.phone}

*Delivery Address*
${formData.address}

*Additional Requirements*
${formData.requirements || 'None'}

Please confirm my order. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/916304659343?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
  };

  // Min date logic string
  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      <div className="order-modal-backdrop">
        <motion.div 
          className="order-modal-content"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="order-header">
            <h2 className="order-title">ORDER FRESH</h2>
            <button className="close-btn" onClick={onClose}><X size={24} /></button>
          </div>

          <div className="order-body">
            
            {/* STEP 1: Details */}
            {step === 1 && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="order-step">
                <h3 className="step-title">WHAT DO YOU NEED?</h3>
                
                <div className="form-group">
                  <label>Selected Service</label>
                  <select name="service" value={formData.service} onChange={handleInput} className="form-control">
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="error-text">{errors.service}</span>}
                </div>

                <div className="form-group">
                  <label>WHEN SHOULD WE DELIVER?</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleInput} 
                    min={today}
                    className="form-control"
                  />
                  {errors.date && <span className="error-text">{errors.date}</span>}
                </div>

                {formData.date && (
                  <div className="form-group slide-in">
                    <label>DELIVERY SLOT</label>
                    <div className="radio-group">
                      {getAvailableSlots().map(slot => (
                        <label key={slot} className={`radio-card ${formData.slot === slot ? 'selected' : ''}`}>
                          <input 
                            type="radio" 
                            name="slot" 
                            value={slot} 
                            checked={formData.slot === slot} 
                            onChange={handleInput} 
                          />
                          <span>{slot}</span>
                        </label>
                      ))}
                    </div>
                    {errors.slot && <span className="error-text">{errors.slot}</span>}
                  </div>
                )}

                <div className="form-group">
                  <label>HOW MUCH DO YOU NEED?</label>
                  <input 
                    type="text" 
                    name="quantity" 
                    value={formData.quantity} 
                    onChange={handleInput} 
                    placeholder="Example: 2 kg / 1 tray / 2 packets"
                    className="form-control"
                  />
                  {errors.quantity && <span className="error-text">{errors.quantity}</span>}
                </div>

                <div className="form-group">
                  <label>Additional Requirements (Optional)</label>
                  <textarea 
                    name="requirements" 
                    value={formData.requirements} 
                    onChange={handleInput} 
                    placeholder="Any special instructions for your order?"
                    className="form-control"
                    rows="2"
                  ></textarea>
                </div>
                
                <button className="btn btn-primary full-width" onClick={validateStep1}>
                  CONTINUE <ArrowRight size={18} style={{marginLeft: '8px'}} />
                </button>
              </motion.div>
            )}


            {/* STEP 2: Customer Details */}
            {step === 2 && (
              <motion.div initial={{opacity:0, x: 20}} animate={{opacity:1, x:0}} className="order-step">
                <h3 className="step-title">WHERE SHOULD WE DELIVER?</h3>
                
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInput} className="form-control" />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInput} placeholder="10-digit number" className="form-control" />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="flex-between">
                    Address *
                    <button type="button" className="location-btn" onClick={handleGetLocation} disabled={isLocating}>
                      {isLocating ? <Loader2 size={14} className="spin" /> : <MapPin size={14} />}
                      USE MY CURRENT LOCATION
                    </button>
                  </label>
                  {locationError && <span className="error-text info-text">{locationError}</span>}
                  <textarea 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInput} 
                    placeholder="Complete delivery address"
                    className="form-control"
                    rows="3"
                  ></textarea>
                  {errors.address && <span className="error-text">{errors.address}</span>}
                </div>

                <div className="step-actions">
                  <button className="btn btn-outline" onClick={() => setStep(1)}>BACK</button>
                  <button className="btn btn-primary flex-1" onClick={validateStep2}>REVIEW ORDER</button>
                </div>
              </motion.div>
            )}


            {/* STEP 3: Review */}
            {step === 3 && (
              <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="order-step">
                <div className="review-box">
                  <h3 className="step-title text-center text-primary">YOUR ORDER</h3>
                  
                  <div className="review-grid">
                    <div className="r-item">
                      <span className="r-label">Service</span>
                      <span className="r-value">{formData.service}</span>
                    </div>
                    <div className="r-item">
                      <span className="r-label">Quantity</span>
                      <span className="r-value">{formData.quantity}</span>
                    </div>
                    <div className="r-item">
                      <span className="r-label">Delivery Date</span>
                      <span className="r-value">{new Date(formData.date).toLocaleDateString()}</span>
                    </div>
                    <div className="r-item">
                      <span className="r-label">Delivery Slot</span>
                      <span className="r-value">{formData.slot}</span>
                    </div>
                    
                    <div className="r-divider"></div>
                    
                    <div className="r-item">
                      <span className="r-label">Customer</span>
                      <span className="r-value">{formData.name}</span>
                    </div>
                    <div className="r-item">
                      <span className="r-label">Phone</span>
                      <span className="r-value">{formData.phone}</span>
                    </div>
                    <div className="r-item w-full">
                      <span className="r-label">Delivery Address</span>
                      <span className="r-value">{formData.address}</span>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-notice">
                  <CheckCircle size={20} color="#25D366" />
                  <p>Your order details are ready in WhatsApp. Please send the message to confirm your order.</p>
                </div>

                <div className="step-actions">
                  <button className="btn btn-outline" onClick={() => setStep(2)}>EDIT</button>
                  <button className="btn btn-whatsapp flex-1" onClick={handleWhatsApp}>
                    SEND ORDER ON WHATSAPP
                  </button>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OrderForm;
