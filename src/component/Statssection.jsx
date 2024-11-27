import React from "react";
import "../css/StatsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUsers, faTrophy, faHandshake } from "@fortawesome/free-solid-svg-icons";

const StatsSection = () => {
  const stats = [
    { icon: faHouse, value: "30", label: "Years of Excellence" },
    { icon: faUsers, value: "100,000+", label: "Professionals Placed Globally" },
    { icon: faTrophy, value: "Govt. Recognized", label: "Recruitment Expertise" },
    { icon: faHandshake, value: "Global", label: "Mission: Connecting Talent Worldwide" },
  ];

  return (
    <div className="stats-container">
        
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stats-card">
            <div className="stats-icon">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="stats-value">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
