import React, { useState } from "react";
import "../css/servicesinfo.css"; // Importing separate CSS file

const industriesData = [
  {
    name: "End-to-End Recruitment",
    description:
      "Innovating solutions for the aerospace and defense sectors...",
    image:
      "data:image/jpeg;base64,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", // Replace with actual image path
  },
  {
    name: "Visa Assistance",
    description: "Driving the future of mobility with sustainable practices...",
    image:
      "https://cdn.pixabay.com/photo/2018/01/26/21/23/visa-3109800_1280.jpg", // Replace with actual image path
    // Example image path
  },
  {
    name: "Document Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto libero voluptatibus magnam reprehenderit...",
    image:
      "https://media.istockphoto.com/id/1902034840/photo/electronic-document-management-system-concept-searching-and-business-managing-files-online.jpg?s=2048x2048&w=is&k=20&c=oUFUZ7B3ecPate-IU-A_oDFxwg4oGqmVzshBylMCY0I=",
    // Example image path
  },
  {
    name: "Capital Markets",
    description:
      "A growing number of retail investors. The transition to low-carbon economies...",
    image: "/images/capital-markets.jpg", // Example image path
  },
  // Add more industries as needed
];

const ServicesInfo = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <div className="servi">
    <h2 className="servce">Services</h2>
    <div className="industries-page">
      
      <div className="industry-list">
        {industriesData.map((industry, index) => (
          <div
            key={index}
            className={`industry-item ${
              selectedIndustry === index ? "active" : ""
            }`}
            onClick={() => setSelectedIndustry(index)}
          >
            {industry.name}
          </div>
        ))}
      </div>

      {/* Description and image display */}
      <div className="industry-description">
        {selectedIndustry !== null ? (
          <>
            <h2>{industriesData[selectedIndustry].name}</h2>
            <div className="serviceimage">
              <img
                src={industriesData[selectedIndustry].image}
                alt={industriesData[selectedIndustry].name}
                className="industry-image"
              />
            </div>

            <p>{industriesData[selectedIndustry].description}</p>
          </>
        ) : (
          <>
            <h2>{industriesData[0].name}</h2>
            <img
              src={industriesData[0].image}
              alt={industriesData[0].name}
              className="industry-image"
            />

            <p>{industriesData[0].description}</p>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default ServicesInfo;
