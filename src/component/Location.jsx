import React from "react";
import "../css/Location.css";

    const locations = [
        { name: "Saudi Arabia", color: "#B4121B" }, 
        { name: "UAE", color: "#B4121B" }, 
        { name: "Kuwait", color: "#B4121B" }, 
        { name: "Oman", color: "#B4121B" },
        { name: "Qatar", color: "#B4121B" },
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
