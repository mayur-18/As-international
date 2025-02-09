import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import logo from '../assets/images/logo.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="company-info">
          <img src={logo} alt="AS International" className="footer-logo" />
          <p>
            Offering trusted and critical advice to your HR-related issues and
            queries, however complex they may be.
          </p>
          <div className="social-icons">
            <Link to="#" className="iconn"><i className="fab fa-facebook"></i></Link>
            <Link to="#" className="iconn"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="iconn"><i className="fab fa-google"></i></Link>
            <Link to="#" className="iconn"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><span className="iconm">📍</span><strong>Address:</strong> SAMNATH, Samantbhai Nanji Marg, near children jail, Dongri, Mumbai, Maharashtra 400009</p>
          <p><span className="iconm">📧</span><strong>Email Us:</strong> <Link className="footer_email" to="mailto:admin@asinternational.org.in">admin@asinternational.org.in</Link></p>
          <p><Link to="https://wa.me/919769456956" target="_blank" className="phone_footer" rel="noopener noreferrer"><span className="iconm">📞</span><strong>Phone:</strong> +91 9769456956</Link></p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      {isVisible && <button className="scroll-to-top" onClick={scrollToTop}>&#8593;</button>}
    </footer>
  );
};

export default Footer;
