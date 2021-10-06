import React from "react";
import "./index.css";
import headerImage from "../../assets/images/header-img.jpg";

const HeaderBodyImage = () => {
  return (
    <div id="headerImage">
      <img id="first" src={headerImage} alt="Sell It" />
      <img
        id="second"
        src="https://secure-ds.serving-sys.com/resources///PROD/html5/83961/20210701/1076000309/63507897960650538/image.png"
        alt="Advertisement"
      />
    </div>
  );
};

export default HeaderBodyImage;
