import React from "react";
import "../css/industriescatered.css";
import retail from '../assets/images/retail.png'
import manufacturing from '../assets/images/manufacturing.png'
import laptop from '../assets/images/laptop.png'
import logistics from '../assets/images/logistics.png'
import shopping from '../assets/images/shopping.png'



const IndustriesCatered = () => {
  const industries = [
    { name: "Retail", icon: retail },
    { name: "Manufacturing", icon: manufacturing },
    { name: "Ecommerce", icon: shopping },
    { name: "Logistics", icon: logistics },
    { name: "IT Industry", icon: laptop},

  ];

  return (
    <div className="industries-container">
      <div className="industries-header">
        <h2>Industries Catered</h2>
      </div>
      <div className="industries-grid">



        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className="industry-ico">
              <img src={industry.icon} alt={industry.name} />
            </div>
            <p>{industry.name}</p>
          </div>
        ))}



      </div>
    </div>
  );
};

export default IndustriesCatered;
