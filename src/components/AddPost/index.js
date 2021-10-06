import React, { useState } from "react";
import "./index.css";
import AddPostHeader from "../AddPostHeader";
import { postItem, storeImage } from "../../config/firebase";
import FalseModal from "../modal/False";
import TrueModal from "../modal/True";
import { useSelector } from "react-redux";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

const emptyPost = {
  title: "",
  description: "",
  price: "",
  state: "",
  createrName: "",
  createrNumber: "",
};
const AddPost = ({ redirectPage }) => {
  const [charCountingTitle, setCharCountingTitle] = useState(0);
  const [charCountingTextArea, setCharCountingTextArea] = useState(0);
  const [loading, setloading] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    type: "success",
    message: "",
  });
  const [postObj, setPostObj] = useState(emptyPost);
  const { title, description, price, state, createrName, createrNumber } =
    postObj;
  const userId = useSelector((state) => state.addUser.user);
  console.log();

  const handleInputFields = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      setCharCountingTitle(value.length);
    } else if (name === "description") {
      setCharCountingTextArea(value.length);
    }
    if (name === "images") {
      setPostObj({
        ...postObj,
        images: event.target.files,
        uid: userId.data.user.uid,
      });
    } else {
      setPostObj({ ...postObj, [name]: value });
    }
  };
  const onModalClose = () => {
    setModal({ show: false });
  };
  const postForm = async (event) => {
    event.preventDefault();
    setloading(true);
    const modalState = {
      show: true,
    };
    try {
      const imageUrl = await storeImage(postObj.images);
      await postItem({ ...postObj, images: imageUrl });
      setPostObj(emptyPost);
      setCharCountingTitle(0);
      setCharCountingTextArea(0);
      modalState.type = "success";
    } catch (e) {
      modalState.type = "error";
      modalState.message = e.message;
    }
    setModal(modalState);
    setloading(false);
  };
  return (
    <>
      <ScrollToTopOnMount />
      <div style={{ position: "relative" }}>
        <AddPostHeader
          redirectPage={redirectPage}
          backDirectory="dashboard"
          name={"POST YOUR AD NOW!"}
        />
        <section id="add-detail-container-wrap">
          <div id="add-detail">
            <form onSubmit={postForm}>
              {/* INCLUDE SOME DETAILS */}
              <section className="section">
                <h3>INCLUDE SOME DETAILS</h3>
                <p>Add title</p>
                <input
                  onChange={(e) => {
                    handleInputFields(e);
                  }}
                  type="text"
                  required
                  maxLength="70"
                  name="title"
                  value={title}
                  autoComplete="off"
                />
                <div className="features-content">
                  <p className="media-font-size">
                    Mention the key features of your item (e.g. brand, model,
                    age, type)
                  </p>
                  <p className="media-font-size">{charCountingTitle}/70</p>
                </div>
                <p style={{ marginTop: "20px" }}>Description</p>
                <textarea
                  onChange={(e) => {
                    handleInputFields(e);
                  }}
                  id="textarea"
                  required
                  maxLength="4096"
                  name="description"
                  value={description}
                  autoComplete="off"
                ></textarea>
                <div className="features-content">
                  <p className="media-font-size">
                    Include condition, features and reason for selling
                  </p>
                  <p className="media-font-size">{charCountingTextArea}/4096</p>
                </div>
              </section>
              {/* SET A PRICE */}
              <section className="section">
                <h3>SET A PRICE</h3>
                <p>Price</p>
                <input
                  onChange={handleInputFields}
                  type="number"
                  required
                  maxLength="11"
                  name="price"
                  value={price}
                  autoComplete="off"
                />
              </section>
              {/* UPLOAD UP TO 5 PHOTOS */}
              <section className="section">
                <h3>UPLOAD UP TO 5 PHOTOS</h3>
                <div id="upload-photo">
                  <input
                    id="file"
                    type="file"
                    accept="image/*"
                    multiple
                    required
                    name="images"
                    onChange={(e) => {
                      handleInputFields(e);
                    }}
                  />
                </div>
              </section>
              {/* CONFIRM YOUR LOCATION */}
              <section className="section" style={{ position: "relative" }}>
                <h3>CONFIRM YOUR LOCATION</h3>
                <p>State</p>
                <div id="add-detail-select-container">
                  <select
                    id="add-detail-select"
                    required
                    name="state"
                    onChange={handleInputFields}
                    value={state}
                  >
                    <option value="" disabled></option>
                    <option value="Azad Kashmir">Azad Kashmir</option>
                    <option value="">Balochistan</option>
                    <option value="Islamabad Capital Territory">
                      Islamabad Capital Territory
                    </option>
                    <option value="Khyber Pakhtunkhwan">
                      Khyber Pakhtunkhwan
                    </option>
                    <option value="Northen Areas">Northen Areas</option>
                    <option value="Panjab">Panjab</option>
                    <option value="Sindh">Sindh</option>
                  </select>
                </div>
              </section>
              {/* REVIEW YOUR DETAILS */}
              <section className="section">
                <h3>REVIEW YOUR DETAILS</h3>
                <p>Name</p>
                <input
                  onChange={handleInputFields}
                  type="text"
                  required
                  name="createrName"
                  value={createrName}
                  autoComplete="off"
                />
                <p style={{ marginTop: "20px" }}>
                  Mobile Phone Number (11 Digits Number)
                </p>
                <input
                  onChange={handleInputFields}
                  type="number"
                  maxLength="11"
                  required
                  name="createrNumber"
                  value={createrNumber}
                  autoComplete="off"
                />
              </section>
              {/* SUBMIT BUTTON */}
              <section className="section">
                {!loading ? (
                  <button type="submit" id="post-now-btn">
                    Post now
                  </button>
                ) : (
                  <button id="post-now-btn">
                    <img
                      id="loading-add-post"
                      src="https://i.gifer.com/origin/4a/4a287dd4b9222ebb17dc354257d0ef79_w200.gif"
                      alt="Loading"
                    />
                  </button>
                )}
              </section>
            </form>
          </div>
        </section>
      </div>
      {modal.show ? (
        modal.type === "success" ? (
          <TrueModal onModalClose={onModalClose} text={"Added :)"} />
        ) : (
          <FalseModal error={modal.message} onModalClose={onModalClose} />
        )
      ) : null}
    </>
  );
};

export default AddPost;
