import React from 'react';
import '../css/client.css';


import logo6 from '../assets/client images/ADWAN.png';
import logo8 from '../assets/client images/alkhalidiya.jpg';
import logo7 from '../assets/client images/DC.jpg';
import logo1 from '../assets/client images/Gloria.jpg';
import logo9 from '../assets/client images/OSERKa.png';
import logo3 from '../assets/client images/PSC.jpg';
import logo2 from '../assets/client images/Rasass.jpg';
import logo5 from '../assets/client images/Stepco.png';



const ClientLogos = () => {
  const logos = [
    logo1,
    logo2,   logo3,logo5,logo6,logo7,logo8,logo9
    // Add more logos here
  ];

  return (
    <div className="client-logos-page">
      <h1>Our Clients</h1>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img 
              src={logo} 
              alt={`Client logo ${index + 1}`} 
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;