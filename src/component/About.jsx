import React, { useState, useMemo, useCallback } from 'react';
import TeamCard from './Teams';
import about from '../assets/images/about.png';
import InfoBox from './InfoBox';
import '../css/about.css';

const About = () => {
    const [showFullText, setShowFullText] = useState(false);

   
    const teamMembers = useMemo(() => [
        {
            name: "ASHFAQUE KHAN",
            role: "Designer",
            contact: "+1234567890",
            image: "https://via.placeholder.com/80",
            twitterLink: "#",
            linkedinLink: "#",
        },
        {
            name: "FAIZAN KHAN",
            role: "Marketing Manager",
            contact: "+1122334455",
            image: "https://via.placeholder.com/80",
            twitterLink: "#",
            linkedinLink: "#",
        },
        {
            name: "KASHIF KHAN",
            role: "Developer",
            contact: "+0987654321",
            image: "https://via.placeholder.com/80",
            twitterLink: "#",
            linkedinLink: "#",
        },
        {
            name: "TARIQUE KHAN",
            role: "Project Manager",
            contact: "+5544332211",
            image: "https://via.placeholder.com/80",
            twitterLink: "#",
            linkedinLink: "#",
        },
    ], []);

    const toggleText = useCallback(() => {
        setShowFullText(prevState => !prevState);
    }, []);

    return (
        <>
            <div className="about">
                <div className="about_head">
                    <h2>About A.S International</h2>
                </div>

                <p>
                    A.S. International is a top Indian recruitment agency recognized by the government of INDIA, with the ability to recruit unlimited numbers of professionals. Founded by the visionary Mr. Ashfaque Khan over a decade ago, our mission is to connect Indian talent with job opportunities around the world. In the past 30 years, we’ve successfully placed over 100,000 professionals in various global companies and continue to grow. At A S International, we are dedicated to providing excellent service and helping both job seekers and employers succeed.
                    {showFullText && (
                        <>
                            In the past 30 years, we’ve successfully placed over 100,000 professionals in various global companies and continue to grow. At A S International, we are dedicated to providing excellent service and helping both job seekers and employers succeed. A S International is a top name in recruitment, trusted by over 100 companies across Saudi Arabia, UAE, Kuwait, Oman, and Qatar. We fill roles in a variety of fields, including oil, construction, software, and healthcare. Whether it’s engineers, software developers, or other skilled professionals, we are experts at finding the right talent for any industry. Our track record of successful placements shows our commitment to quality and efficiency. Partner with us to discover the best talent and drive your success forward.
                        </>
                    )}
                </p>
                <button className="read-more" onClick={toggleText}>
                    {showFullText ? 'Show Less' : 'Read More'}
                </button>
            </div>

                <InfoBox />


                <div className="logo_text">
                    <div className="container">

                        <div className="about_logo">
                            <img src={about} alt="Company Logo" className="logo-image" loading="lazy" />
                        </div>

                        <div className="ceo_word">
                            <h1>A WORD FROM OUR CEO</h1>
                            <p>
                                A.S International offers a comprehensive range of manpower consultancy services, including recruitment solutions and visa assistance. We manage the entire recruitment process from advertising and interviewing to trade tests, medical examinations, and visa stamping. Additionally, we provide visa services for multiple countries, including Oman, UAE, Bahrain, Saudi Arabia, and Kuwait, covering Visit Visas, Visa Stamping, and various attestations. Our document services include attestation from embassies for certificates and degrees, Ministry of External Affairs attestation, and Apostille services across India.
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="team">
                <TeamCard teamMembers={teamMembers} />
            </div>
        </>
    );
};

export default About;
