import React from "react";
import "./index.css";
import mobile from "../../assets/images/mobile.png";

const FooterTop = () => {
  return (
    <div id="footer-top-container">
      <div id="left">
        <img src={mobile} alt="NextSell" />
      </div>
      <div id="center">
        <h2>TRY THE NEXT SELL APP</h2>
        <p>
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>
      <div id="right">
        <div id="right-box">
          <h3>GET YOUR APP TODAY</h3>
          <div id="download-app-images">
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
    </div>
  );
};

export default FooterTop;
