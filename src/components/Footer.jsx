import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <img
            src="/assets/logo.png"
            alt="Prajwal Fresh Basket"
            className="footer-logo"
          />

          <h3 className="footer-brand-name">
            PRAJWAL FRESH BASKET
          </h3>

          <p className="footer-tagline">
            FRESHLY SERVED - NEVER REFRIGERATED
          </p>

          <div className="footer-nav">
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>


        {/* Contact */}
        <div className="footer-column">
          <h4 className="footer-heading">CONTACT</h4>

          <div className="footer-contact-list">
            <a href="tel:+916304659343">
              +91 63046 59343
            </a>

            <a href="mailto:Prajwalfreshbasket@gmail.com">
              Prajwalfreshbasket@gmail.com
            </a>

            <p>
              Tadigadapa, Penamaluru,<br />
              Vijayawada - 521137
            </p>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">FOLLOW</h4>

            <a
              href="https://instagram.com/Prajwal.freshbasket"
              target="_blank"
              rel="noreferrer"
              className="instagram-link"
            >
              Instagram ↗
            </a>
          </div>
        </div>


        {/* Delivery */}
        <div className="footer-column footer-delivery">

          <h4 className="footer-heading">DELIVERY</h4>

          <div className="delivery-group">
            <span className="delivery-day">
              Monday - Saturday
            </span>

            <span>5:30 AM - 7:30 AM</span>
            <span>7:30 PM - 10:30 PM</span>
            <span>9:30 PM - 11:30 PM</span>
          </div>

          <div className="delivery-group sunday">
            <span className="delivery-day">
              Sunday
            </span>

            <span>7:30 AM - 10:30 AM</span>
            <span>11:30 AM - 12:30 PM</span>
          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          <span>
            © {new Date().getFullYear()} Prajwal Fresh Basket
          </span>

          <span className="footer-bottom-dot">•</span>

          <span>
            Freshness, straight to your doorstep.
          </span>

        </div>
      </div>

    </footer>
  );
};

export default Footer;