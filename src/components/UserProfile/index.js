import "./index.css";
import Header from "../AddPostHeader";
import { useSelector } from "react-redux";

const UserProfile = ({ redirectPage }) => {
  const data = useSelector((state) => state.currentUserData.currData.data);
  const { userName, phone, email, userId } = data;

  return (
    <div id="user-profile-container">
      <Header
        redirectPage={() => redirectPage("dashboard")}
        name={"User Profile"}
      />
      <div id="user-profile-heading">
        <h2>Got User data from Redux</h2>
      </div>
      <div id="user-profile-body-centent">
        <div className="body-content-fields">
          <p>User Name :</p>
          <input defaultValue={userName} readOnly />
        </div>
        <div className="body-content-fields">
          <p>Phone Number :</p>
          <input defaultValue={phone} readOnly />
        </div>
        <div className="body-content-fields">
          <p>Email address :</p>
          <input defaultValue={email} readOnly />
        </div>
        <div className="body-content-fields">
          <p>User Id :</p>
          <input defaultValue={userId} readOnly />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
