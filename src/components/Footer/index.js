import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-box">
        <h4>POPULAR CATEGORIES</h4>
        <p>Cars</p>
        <p>Flats for rent</p>
        <p>Mobile Phones</p>
        <p>Jobs</p>
      </div>
      <div className="footer-box">
        <h4>TRENDING SEARCHES</h4>
        <p>Bikes</p>
        <p>Watches</p>
        <p>Books</p>
        <p>Dogs</p>
      </div>
      <div className="footer-box">
        <h4>ABOUT US</h4>
        <p>About EMPG</p>
        <p>Next Sell Blog</p>
        <p>Contact Us</p>
        <p>Next Sell for Businesses</p>
      </div>
      <div className="footer-box">
        <h4>NEXT SELL</h4>
        <p>Help</p>
        <p>Sitemap</p>
        <p>Legal and Privacy information</p>
      </div>
      <div className="footer-box" id="footer-box-div">
        <div id="follow-us">
          <h4>FOLLOW US</h4>
          <div id="follow-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="far fa-play-circle"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div id="download-app-images-bottom">
          <img
            src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
            alt="Download"
          />
          &nbsp;
          <img
            src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
            alt="Download"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
