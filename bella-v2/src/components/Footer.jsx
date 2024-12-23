import "./footer.css";
import React from "react";
import SocialMediaButton from "./SocialMediaButton";
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-bottom">
            <a href="/"><img src="./logo.png" alt="logo" /></a>
            
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Hotel</h4>
            <ul className="footer-col-list">
              <li className="footer-col-item"><a href="./pre" className="footer-col-link">about us</a></li>
              <li className="footer-col-item"><a href="./services" className="footer-col-link">our services</a></li>
              <li className="footer-col-item"><a href="./policy" className="footer-col-link">privacy policy</a></li>
          
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">get help</h4>
            <ul className="footer-col-list">
             
             
              <li className="footer-col-item"><a href="./contact" className="footer-col-link">Contact</a></li>
              <li className="footer-col-item"><a href="./gallery" className="footer-col-link">Gallery</a></li>
              <li className="footer-col-item"><a href="./flight" className="footer-col-link">Rooms</a></li>
            </ul>
          </div>

        
          <div className="footer-col">
            <h4 className="footer-col-title">follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/AbouSofianeHotelSousse" className="social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
             
              <a href="https://www.instagram.com/abousofianehotel/" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.tiktok.com/@abou.sofiane.hotel" className="social-link"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>
          </div>
       
          <div className="footer-bottom">
            <p>copyright &copy; 2024. Powered by safa</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
