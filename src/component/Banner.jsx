import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../css/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <span className="banner_text">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
      <div className="contact_details">
        <ul>
          <li>
            <Link to="tel:+919769456956">
              {" "}
              <span class="emoji yellow"> 📞 </span>
              +91 9769456956
            </Link>
          </li>
          <li>
            <Link to="mailto:admin@asinternational.org.in">
              ✉️ admin@asinternational.org.in
            </Link>{" "}
          </li>
          <div className="social_icons">
          <li>
            <Link
              to="https://wa.me/919769456956"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                style={{ color: "#25D366" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://wa.me/919769456956"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: "#1DA1F2" }}
              />
            </Link>
          </li>{" "}
          <li>
            <Link
              to="https://wa.me/919769456956"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{
                  color: "#d62976", 
                   }}
              />
            </Link>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
