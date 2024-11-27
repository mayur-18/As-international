import React from "react";

import visio from '../assets/images/visio.jpg';
import choose from '../assets/images/choose.jpg';

import '../css/infobox.css';

const InfoBox = () => {
  const infoCardsData = [
    {
      title: "Vision & Mission",
      imageSrc: visio,
      content: [
        "To become the leading recruitment agency connecting Indian talent with top global opportunities.",
        "To become the most trusted name in recruitment, known for our integrity and excellence.",
        "To deliver exceptional recruitment services by understanding and meeting the needs of both employers and job seekers.",
        "To match skilled professionals with the right job opportunities, helping both individuals and companies succeed.",
      ],
    },
    {
      title: "Why Choose Us",
      imageSrc: choose,
      content: [
        "We are dedicated towards providing excellent service and helping both job seekers and employers succeed.",
        "In the past 30 years, we’ve successfully placed over 100,000 professionals in various global companies and continue to grow.",
        "Our track record of successful placements shows our commitment to quality and efficiency.",
        "We have strong connections with top companies in countries like Saudi Arabia, UAE, Kuwait, Oman, and Qatar.",
      ],
    },
  ];

  return (
    <div className="info-box-section">
      {infoCardsData.map((data, index) => (
        <div key={index} className="info-box">
          <div className="info-box-image">
            <img src={data.imageSrc} alt={data.title} />
          </div>
          <div className="info-box-content">
            <h3 className="info-box-title">{data.title}</h3>
            <ul className="info-box-list">
              {data.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoBox;
