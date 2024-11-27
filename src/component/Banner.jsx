import React from "react";
import { Link } from "react-router-dom";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/banner.css'


const Banner = () => {
    return (
        <div className="banner">
            <span className="banner_text">Welcome to AS International</span>
            <div className="contact_details">
                <ul>
                    <li><Link to="tel:+919769456956">   <span class="emoji yellow"> 📞 </span>
                    +91 9769456956</Link></li>
                    <li><Link to="mailto:admin@asinternational.org.in">✉️ admin@asinternational.org.in</Link> </li>
                    <li><Link
                            to="https://wa.me/919769456956"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
                            
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Banner;
