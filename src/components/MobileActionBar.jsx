import React from 'react';
import { Home, Grid, PhoneCall, MessageCircle } from 'lucide-react';
import './MobileActionBar.css';

const MobileActionBar = ({ onOrderClick }) => {
  return (
    <div className="mobile-action-bar d-mobile-only">
      <a href="#top" className="action-item">
        <Home size={20} />
        <span>Home</span>
      </a>
      <button className="action-item" onClick={onOrderClick}>
        <Grid size={20} />
        <span>Services</span>
      </button>
      <a href="https://wa.me/916304659343" target="_blank" rel="noreferrer" className="action-item active">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
      <a href="tel:+916304659343" className="action-item">
        <PhoneCall size={20} />
        <span>Call</span>
      </a>
    </div>
  );
};

export default MobileActionBar;
