import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/actions";
import { useHistory } from "react-router-dom";

const Header = ({ userLogged, formSwitch, setUserLogged }) => {
  const [rotate, setrotate] = useState(false);
  const [profileRotate, setProfileRotate] = useState(false);
  const arrowRotate = (location) => {
    if (location === "searchCity") {
      setrotate(!rotate);
    } else if (location === "profile") {
      setProfileRotate(!profileRotate);
    }
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const uName = useSelector((state) => state.currentUserData.currData);

  return (
    <header>
      <div id="header">
        <img id="logo" src={logo} alt="Olx Logo" />
        {/* DROPDOWN */}
        <div id="search-city">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <input
            spellCheck="false"
            autoComplete="off"
            placeholder="Search city, area or locality"
          />
          <div className="search-icon">
            <i
              onClick={() => {
                arrowRotate("searchCity");
              }}
              className={
                rotate ? "fas fa-chevron-down open" : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <div id="drop-down" style={{ display: rotate ? "block" : "none" }}>
            <div id="drop-down-option-top">
              <div className="drop-down-icon">
                <img
                  src="https://www.olx.com.pk/assets/iconCurrentLocation_noinline.6acc646ec0e4ecdee696b5588b92c859.svg"
                  alt="Location"
                />
              </div>
              <div
                className="drop-down-content"
                style={{ color: "rgb(52, 52, 255)" }}
              >
                <p>
                  <b>Use Current Location</b>
                </p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
            <div id="popular-locations">
              <p>POPULAR LOCATIONS</p>
            </div>
            {/* <div id="drop-down-body"> */}
            <div className="drop-down-options">
              <div className="drop-down-icon">
                <img
                  src="https://www.olx.com.pk/assets/iconLocation_noinline.dd275c9d8c1ed5d1f8c45bd6859ca4df.svg"
                  alt="Icon"
                />
              </div>
              <div className="drop-down-content">
                <p>Lahore</p>
              </div>
            </div>
            <div className="drop-down-options">
              <div className="drop-down-icon">
                <img
                  src="https://www.olx.com.pk/assets/iconLocation_noinline.dd275c9d8c1ed5d1f8c45bd6859ca4df.svg"
                  alt="Icon"
                />
              </div>
              <div className="drop-down-content">
                <p>Peshawar</p>
              </div>
            </div>
            <div className="drop-down-options">
              <div className="drop-down-icon">
                <img
                  src="https://www.olx.com.pk/assets/iconLocation_noinline.dd275c9d8c1ed5d1f8c45bd6859ca4df.svg"
                  alt="Icon"
                />
              </div>
              <div className="drop-down-content">
                <p>Islamabad</p>
              </div>
            </div>
            <div className="drop-down-options">
              <div className="drop-down-icon">
                <img
                  src="https://www.olx.com.pk/assets/iconLocation_noinline.dd275c9d8c1ed5d1f8c45bd6859ca4df.svg"
                  alt="Icon"
                />
              </div>
              <div className="drop-down-content">
                <p>Multan</p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* DROPDOWN END */}
        <div id="search-input">
          <input
            type="search"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <div className="search-input-icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div id="chat-noti-profile">
          {!userLogged ? (
            <button
              onClick={() => {
                formSwitch();
              }}
              id="login-with-email"
            >
              Login with Email
            </button>
          ) : (
            <>
              <i className="far fa-comment"></i>
              <i className="far fa-bell"></i>
              <div id="profile">
                <div id="profile-image">
                  <img
                    src="https://www.kahanihindi.com/wp-content/uploads/2020/02/Whatsapp-DP-images-1.jpg"
                    alt="Profile"
                  />
                </div>
                &nbsp; &nbsp;
                <i
                  onClick={() => {
                    arrowRotate("profile");
                  }}
                  className={
                    profileRotate
                      ? "fas fa-chevron-down open"
                      : "fas fa-chevron-down"
                  }
                ></i>
                <div
                  id="user-profile"
                  style={{ display: profileRotate ? "block" : "none" }}
                >
                  <div id="user-profile-header">
                    <div id="avatar">
                      <img
                        src="https://www.kahanihindi.com/wp-content/uploads/2020/02/Whatsapp-DP-images-1.jpg"
                        alt="Profile"
                      />
                    </div>
                    <div id="header-content">
                      <p>Hello,</p>
                      <h3>{uName && uName.data.userName}</h3>
                      <span>
                        <u
                          onClick={() => {
                            history.push("./userprofile");
                          }}
                        >
                          View your profile
                        </u>
                      </span>
                    </div>
                  </div>
                  <div id="user-profile-body">
                    <div className="user-profile-body-fields">
                      <img
                        src="https://www.olx.com.pk/assets/iconMyAds_noinline.81f6b0cc8a3d16d363fb142e1489d035.svg"
                        alt="profile"
                      />
                      &nbsp;&nbsp; My Ads
                    </div>
                    <div className="user-profile-body-fields">
                      <img
                        src="https://www.olx.com.pk/assets/iconBusinessPackages_noinline.64a7db94ef2eb1776d43916ce82b1a40.svg"
                        alt="profile"
                      />
                      &nbsp;&nbsp; Buy Bussiness Packages
                    </div>
                    <div
                      className="user-profile-body-fields"
                      style={{ borderBottom: "1px solid rgb(209, 208, 208)" }}
                    >
                      <img
                        src="https://www.olx.com.pk/assets/iconBoughtPackages_noinline.b29b2b61c39def95f4bf58ac5b6dbb59.svg"
                        alt="profile"
                      />
                      &nbsp;&nbsp; Bought Packages & Billing
                    </div>
                    <div className="user-profile-body-fields">
                      <img
                        src="https://www.olx.com.pk/assets/iconHelp_noinline.f07d255148323e318808a50c52097d0c.svg"
                        alt="profile"
                      />
                      &nbsp;&nbsp;Help
                    </div>
                    <div
                      className="user-profile-body-fields"
                      style={{ borderBottom: "1px solid rgb(209, 208, 208)" }}
                    >
                      <img
                        src="https://www.olx.com.pk/assets/iconFilters_noinline.0aa1e7bd623dcbcc065196fa3ccba789.svg"
                        alt="profile"
                      />
                      &nbsp;&nbsp;Settings
                    </div>
                    <div
                      className="user-profile-body-fields"
                      onClick={() => {
                        dispatch(removeUser());
                        setUserLogged(false);
                        setProfileRotate(false);
                      }}
                    >
                      <img
                        src="https://www.olx.com.pk/assets/iconLogout_noinline.9da9ed94dfe84e900cc1ae3198b0375b.svg"
                        alt="profile"
                      />
                      &nbsp;&nbsp;Logout
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
