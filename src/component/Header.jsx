import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/map.css'
import '../css/header.css'
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setIsMenuOpen(false);


    document.body.classList.remove('open');

  }, [location]);


  const handleResize = () => {
    if (window.innerWidth > 768) {
      document.body.classList.remove('open');
      setIsMenuOpen(false);
    }
  };


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      const newState = !prevState;


      if (newState) {
        document.body.classList.add('open');
      } else {
        document.body.classList.remove('open');
      }

      return newState;
    });
  };

  return (
    <>
      <div className="heading">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-list">
          <ul className={`nav-items ${isMenuOpen ? "responsive" : ""}`}>
            <li>
              <Link
                className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`menu-item ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`menu-item ${location.pathname === "/services" ? "active" : ""}`}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`menu-item ${location.pathname === "/client" ? "active" : ""}`}
                to="/client"
              >
                 Client
              </Link>
            </li>
            <li>
              <Link
                className={`menu-item ${location.pathname === "/contact" ? "active" : ""}`}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
           
            <li>
              <Link
                className={`menu-item ${location.pathname === "/jobs" ? "active" : ""}`}
                to="/jobs"
              >
                Jobs
              </Link>
            </li>
          </ul>
        </div>


        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
