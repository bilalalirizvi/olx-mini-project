import React, { useState, useEffect } from "react";
import "./index.css";
import {
  register,
  login,
  currentUserData,
  getAllPosts,
} from "../../config/firebase";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AllCategoriesHeader from "../../components/AllCategoriesHeader";
import HeaderBodyImage from "../../components/HeaderBodyImage";
import Card from "../../components/Card";
import Advertisment from "../../components/Advertisment";
import FooterTop from "../../components/FooterTop";
import FooterBottom from "../../components/FooterBottom";
import AddButton from "./../../components/AddButton";
import TrueModal from "../../components/modal/True";
import FalseModal from "../../components/modal/False";
import { storeUser, currUserData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

const loginObjEmpty = {
  email: "",
  password: "",
};
const signupObjEmpty = {
  userName: "",
  phone: "",
  email: "",
  password: "",
};
const Dashboard = () => {
  const [loginFormSwitch, setLoginFormSwitch] = useState(false);
  const [onSignUp, setOnSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginObj, setLoginObj] = useState(loginObjEmpty);
  const [signupObj, setSignupObj] = useState(signupObjEmpty);
  const [modal, setModal] = useState({
    show: false,
    type: "success",
    errorMessage: "",
  });
  const dispatch = useDispatch();
  // const history = useHistory();

  // -------------------------------------------------------
  // const [redirect, setRedirect] = useState("dashboard");
  // const [item, setItem] = useState({});
  const [posts, setPosts] = useState([]);
  const [userLogged, setUserLogged] = useState(false); // if user login change the state

  const user = useSelector((state) => state.addUser.user);

  useEffect(() => {
    setUserLogged(!!user);
  }, [user]);
  useEffect(() => {
    async function fetchData() {
      const postsData = await getAllPosts();
      const tempPosts = [];
      postsData.forEach((doc) => {
        const obj = { ...doc.data(), id: doc.id };
        // console.log(doc.id);
        tempPosts.push(obj);
      });
      setPosts(tempPosts);
    }
    fetchData();
  }, []);
  const userLoggedIn = () => {
    setUserLogged(true);
  };
  // -------------------------------------------------------

  const formSwitch = () => {
    setLoginFormSwitch(true);
  };
  const loginInputsHandle = (e) => {
    setLoginObj({ ...loginObj, [e.target.name]: e.target.value });
  };

  const loginForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const modalState = {
      show: true,
    };
    try {
      const userLogin = await login(loginObj.email, loginObj.password);
      dispatch(storeUser(userLogin));
      const crData = await currentUserData(userLogin.user.uid);
      crData.forEach((doc) => {
        dispatch(
          currUserData({
            type: "CURRENT_USER_DATA",
            data: doc.data(),
          })
        );
      });
      modalState.type = "login";
      modalState.message = "Your Login Successfuly!";
      userLoggedIn();
      setLoginFormSwitch(false);
    } catch (error) {
      modalState.type = "error";
      modalState.errorMessage = error.message;
    }
    setModal(modalState);
    setLoading(false);
  };
  const signupInputsHandle = (e) => {
    setSignupObj({ ...signupObj, [e.target.name]: e.target.value });
  };
  const onModalClose = () => {
    setModal({ show: false });
  };
  const signupForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const modalState = {
      show: true,
    };
    try {
      await register(signupObj);
      setSignupObj(signupObjEmpty);
      setOnSignUp(false);
      modalState.type = "success";
      modalState.message = "Create Account Successfuly!";
    } catch (error) {
      modalState.type = "error";
      modalState.errorMessage = error.message;
    }
    setModal(modalState);
    setLoading(false);
  };
  return (
    <>
      <ScrollToTopOnMount />;
      <div id="dashboard-container" style={{ position: "relative" }}>
        <Header
          userLogged={userLogged}
          formSwitch={formSwitch}
          setUserLogged={setUserLogged}
        />
        <AllCategoriesHeader />
        <HeaderBodyImage />
        <div id="items-container">
          <div id="items-render">
            {posts.length > 0 ? (
              posts.map((item, index) => {
                // console.log(item);
                return <Card item={item} key={index} />;
              })
            ) : (
              <img
                id="loading"
                src="https://newarkarts.org/wp-content/plugins/interactive-3d-flipbook-powered-physics-engine/assets/images/dark-loader.gif"
                alt="Loading..."
              />
            )}
          </div>
        </div>
        {userLogged && <AddButton userLogged={userLogged} />}
        <Advertisment />
        <FooterTop />
        <Footer />
        <FooterBottom />
      </div>
      {loginFormSwitch ? (
        <div id="form-signup-login">
          <div id="box-wrap">
            <div>
              <div className="close-form">
                <i
                  onClick={() => {
                    setLoginFormSwitch(false);
                    setOnSignUp(false);
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
            {!onSignUp ? (
              <div id="form-box">
                <div className="fields avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="fields fields-p1">
                  <p>Save all your favorite items in one place</p>
                </div>
                <div className="fields">
                  <h2>Login</h2>
                </div>
                <form onSubmit={loginForm}>
                  <div className="fields">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      autoComplete="off"
                      onChange={loginInputsHandle}
                      value={loginObj.email}
                    />
                  </div>
                  <div className="fields">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                      onChange={loginInputsHandle}
                      value={loginObj.password}
                    />
                  </div>
                  <div className="fields btn-field">
                    {!loading ? (
                      <button type="submit">Submit</button>
                    ) : (
                      <img
                        id="loading-gif"
                        src="https://i.gifer.com/origin/4a/4a287dd4b9222ebb17dc354257d0ef79_w200.gif"
                        alt="Loading"
                      />
                    )}
                  </div>
                  <div className="fields fields-p2">
                    <p>
                      Don't have an account? &nbsp;
                      <span onClick={() => setOnSignUp(true)} id="signup-span">
                        Signup
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div id="form-box">
                  <div className="fields avatar" style={{ fontSize: "50px" }}>
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="fields fields-p1">
                    <p>Save all your favorite items in one place</p>
                  </div>
                  <div className="fields">
                    <h2>SignUp</h2>
                  </div>
                  <form onSubmit={signupForm}>
                    <div className="fields">
                      <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        autoComplete="off"
                        onChange={signupInputsHandle}
                        value={signupObj.userName}
                        maxLength="30"
                        required
                      />
                    </div>

                    <div className="fields">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone number (11 digits number)"
                        autoComplete="off"
                        onChange={signupInputsHandle}
                        value={signupObj.phone}
                        required
                      />
                    </div>
                    <div className="fields">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        autoComplete="off"
                        onChange={signupInputsHandle}
                        value={signupObj.email}
                        required
                      />
                    </div>
                    <div className="fields">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password (must be 6 characters)"
                        autoComplete="off"
                        onChange={signupInputsHandle}
                        value={signupObj.password}
                        required
                        minLength="6"
                      />
                    </div>
                    <div className="fields">
                      {!loading ? (
                        <button type="submit">Submit</button>
                      ) : (
                        <img
                          id="loading-gif"
                          src="https://i.gifer.com/origin/4a/4a287dd4b9222ebb17dc354257d0ef79_w200.gif"
                          alt="Loading"
                        />
                      )}
                    </div>
                    <div className="fields fields-p2">
                      <p>
                        Already have an account? &nbsp;
                        <span
                          onClick={() => {
                            setOnSignUp(false);
                          }}
                          id="signup-span"
                        >
                          LogIn
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
      {/* if loginFormSwitch false form screen is null.... after true swicth login form */}
      {modal.show ? (
        modal.type === "success" || modal.type === "login" ? (
          <TrueModal onModalClose={onModalClose} text={modal.message} />
        ) : (
          <FalseModal error={modal.errorMessage} onModalClose={onModalClose} />
        )
      ) : null}
    </>
  );
};

export default Dashboard;
