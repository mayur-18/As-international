import React from "react";
import "../css/Location.css";

    const locations = [
        { name: "Saudi Arabia", color: "#4CAF50" }, 
        { name: "UAE", color: "#E91E63" }, 
        { name: "Kuwait", color: "#FF5722" }, 
        { name: "Oman", color: "#673AB7" },
        { name: "Qatar", color: "#9C27B0" },
      ];

const Locations = () => {
  return (
    <div className="locations-container">
      <h1>Locations Across Gulf Countries</h1>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div
            key={index}
            className="location-card"
            style={{
              "--hover-color": location.color,
              border: `2px solid ${location.color}`,
            }}
          >
            <span className="location-name">{location.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
