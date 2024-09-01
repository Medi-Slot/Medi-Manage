import React from "react";
import Wave from "react-wavify";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <Wave
        fill="rgb(17, 155, 248,0.7)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 50,
          amplitude: 80,
          speed: 0.15,
          points: 3,
        }}
        className="footer-svg-style"
      />
      <div className="footerMain-content">
        <div className="footer-header">
          <h2>Medi-Manage</h2>
        </div>
        <div className="footer-section-content">
          <div className="footer-section-line1">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
                <li>Affiliate Program</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Get Help</h3>
              <ul>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Order Status</li>
                <li>Payment Options</li>
              </ul>
            </div>
            <div className="footer-section follow-us">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
