import React, { useState } from "react";
import "../css/job.css";
import { Link } from 'react-router-dom';
import useJobData from "../utils/useJobData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBriefcase, faDollarSign, faBuilding, faUser } from "@fortawesome/free-solid-svg-icons";
const InteractiveJobCard = ({jobdata}) => {
   
    const jobData = useJobData();

   
    const [expandedJobs, setExpandedJobs] = useState({});
    const [savedJobs, setSavedJobs] = useState({});

   
    const toggleDescription = (id) => {
        setExpandedJobs((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };


    return (
        <div className="job-list">  
            <header className="job-list-header">
                <h1>Available Jobs</h1>
            </header>

            {jobData.map((job) => (
                <div className="combined-job-card" key={job.id}>
                  
                    <div className="header">
                        <div className="title-section">
                            <h2>{job.title}</h2>
                            <p className="location">  <FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location} </p>
                            
                        </div>
                        <div className="count-section"> <span><FontAwesomeIcon icon={faUser} /> Positions: {job.count}</span></div>
                    </div>

                    {/* Job Details Section */}
                    <div className="details">
                        <p>
                            <span className="detail"><FontAwesomeIcon icon={faBriefcase} /> <strong>Experience: </strong> {job.experience}</span>
                            <br></br>
                            <span className="detail"><FontAwesomeIcon icon={faDollarSign} /><strong> Salary:</strong> {job.salary}</span>
                            <br></br>
                            <span className="detail"> <FontAwesomeIcon icon={faBuilding} /><strong> Benefits:</strong> {job.benefits}</span>
                            <span className="detail"> <FontAwesomeIcon icon={faBriefcase} /><strong> Gulf Experience: </strong> {job.gulfexperienece}</span>

                        </p>
                        <p
                            className="description"
                            onClick={() => toggleDescription(job.id)}
                        >
                            {expandedJobs[job.id]
                                ? job.description
                                : `${job.description.substring(0, 100)}...`}
                            <span className="toggle-btn">
                                {expandedJobs[job.id] ? " Show less" : " Read more"}
                            </span>
                        </p>
                    </div>

                   
                    <div className="tags">
                        {job.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="tag"
                                
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    

                    
                    <div className="foter">
                        <p className="post-date">{job.postDate}</p>
                        <div className="actions">
                            <Link
                                to="https://wa.me/919769456956"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className={`save-btn ${savedJobs[job.id] ? "saved" : ""}`}
                                    disabled={savedJobs[job.id]} 
                                >
                                    {savedJobs[job.id] ? "Applied" : "Apply"}
                                </button>
                            </Link>
                            {savedJobs[job.id] && (
                                <p className="confirmation-msg">
                                    You have successfully applied for this job!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InteractiveJobCard;
