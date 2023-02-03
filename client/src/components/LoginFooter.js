import React from "react";
import "../styles/Footer.css";
import "../styles/LoginFooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function LoginFooter() {
  return (
    <div className="login-footer-container">
      <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
        <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
        <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
        <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
      </div>

      <div className="footer-columns">
        <ul className="footer-column">
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="footer-column">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul className="footer-column">
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
        <ul className="footer-column">
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <button className="footer-btn">Service Code</button>
      <p className="footer-copyright">ⓒ 1997-2002 Netflix, Inc</p>
    </div>
  );
}

export default LoginFooter;
