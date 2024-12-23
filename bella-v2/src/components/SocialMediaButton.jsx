import "./Social.css";
import React, { useState } from "react";
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// SocialMediaButton.jsx


const SocialMediaButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="social-media-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button className="share-button">

      <img src="https://www.freeiconspng.com/uploads/heart-png-21.png" alt="Heart" className="heart-icon" /> {/* Use the heart image */}
  
      </button>
      {isHovered && (
        <div className="social-media-links">
          <div className="social-media-link facebook">
            <a href="https://www.facebook.com/AbouSofianeHotelSousse" title="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
         
          <div className="social-media-link instagram">
            <a href="https://www.instagram.com/abousofianehotel/" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <div className="social-media-link linkedin">
            <a href="https://www.tiktok.com/@abou.sofiane.hotel" title="LinkedIn"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaButton; // Make sure to export the component

