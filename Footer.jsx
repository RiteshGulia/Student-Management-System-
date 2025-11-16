import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} NIC International School. All rights reserved.</p>
        <p>
          Contact: info@nicinternationalschool.com | Phone: +91-123-456-7890
        </p>
        <div>
          <a href="#">About</a> | <a href="#">Admissions</a> | <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
