import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "../Header/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We provide the best platform to buy and sell your products easily.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: az430@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/feed/">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/"  >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Az Clone | Designed by Az Company
      </div>
    </footer>
  );
};

export default Footer;