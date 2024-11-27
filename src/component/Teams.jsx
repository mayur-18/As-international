import React from "react";
import '../css/team.css'
import {Link} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';



const TeamCard = ({ teamMembers }) => {
  return (
    <div className="team-section">
      <h1>MEET OUR TEAM</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={`${member.name}'s Logo`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="contact">Contact: {member.contact}</div>
            <div className="social-iconss">
              <Link
                to={member.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
              >
              <i className="fab fa-twitter"></i>

                
              </Link>
              <a
                href={member.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>

                
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
