import React from 'react';
import ContactUs from './Contact';
import '../css/map.css'


const GoogleMapEmbed = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6898.197990059421!2d72.836361!3d18.959116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf007c9e17ff%3A0xcff34ac251cd4209!2sA.S%20International!5e1!3m2!1sen!2sin!4v1732006686757!5m2!1sen!2sin";

  return (
    <>
    <div className="map-container">

      <h1>Our Location</h1>

      <iframe 
        src={mapSrc} 
        width="600" 
        height="450" 
        style={{ border: '0' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

      <div className="line"> </div>

      
    </div>

        <ContactUs />
        </>
  );
};

export default GoogleMapEmbed;
