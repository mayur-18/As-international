import React, { useState } from "react";
import "../css/Asinternational.css";
import logo from "../assets/images/logo.png";
const Asinternational = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => setIsExpanded((prevState) => !prevState);

  return (
    <div className="consultants">
      <div className="image">
        <img src={logo} alt="A.S International" loading="lazy" />
      </div>
      <div className="content">
        <h2>A.S International</h2>
        <p>
          {isExpanded
            ? "A.S. International is a top Indian recruitment agency recognized by the government of INDIA, with the ability to recruit unlimited numbers of professionals. A S International is a top name in recruitment, trusted by over 100 companies across Saudi Arabia, UAE, Kuwait, Oman, and Qatar. We fill roles in a variety of fields, including oil, construction, software, and healthcare. Whether it’s engineers, software developers, or other skilled professionals, we are experts at finding the right talent for any industry. Partner with us to discover the best talent and drive your success forward"
            : "A.S. International is a top Indian recruitment agency recognized by the government of INDIA, with the ability to recruit unlimited numbers of professionals. We fill roles in a variety of fields, including oil, construction, software, and healthcare. Whether it’s engineers, software developers, or other skilled professionals, we are experts at finding the right talent."}
        </p>

        <button
          className="read-more-btn"
          onClick={toggleContent}
          aria-expanded={isExpanded}
          aria-label={
            isExpanded
              ? "Read less about A.S. International"
              : "Read more about A.S. International"
          }
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Asinternational;
