import React, { useState, useEffect } from "react";
import "./index.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import AddpostHeader from "../AddPostHeader";
import Footer from "../Footer";
import FooterBottom from "../FooterBottom";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../config/firebase";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

const CardDetailPage = () => {
  const [post, setPost] = useState({});
  const [imagess, setImagess] = useState([]);
  const {
    title,
    description,
    price,
    images,
    state,
    createrName,
    createrNumber,
  } = post;
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const postData = await getSinglePost(id);
      setPost(postData.data());
    };
    fetchData();
  }, []);
  useEffect(() => {
    const tempPosts = [];
    images?.forEach((doc) => {
      console.log("DOC ===>", doc);
      const obj = {
        original: doc,
        thumbnail: doc,
      };
      tempPosts.push(obj);
    });
    setImagess(tempPosts);
  }, [post]);

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  return (
    <div id="detail-page-container">
      <ScrollToTopOnMount />
      <AddpostHeader name={"DETAILS"} />
      <div id="detail-container">
        <div id="image-slider">
          <ImageGallery items={post && imagess} />
        </div>
        <div id="detail-content">
          <div id="detail-content-first-row">
            <div id="rupes-and-icon">
              <h1>Rs {post && price}</h1>
              <span>
                <i className="far fa-heart"></i>
              </span>
            </div>
            <h2>{title}</h2>
            <div id="detail-content-description">
              <h3 style={{ padding: "10px 0px" }}>Description</h3>
              <p>{post && description}</p>
            </div>
            <div id="detail-content-location">
              <p>{state}</p>
              <p>3 Week Ago</p>
            </div>
          </div>
          <div id="detail-content-first-row">
            <div id="rupes-and-icon">
              <h3>Seller Description</h3>
            </div>
            <div id="detail-content-description">
              <div className="name-and-number">
                <span>Name:</span>
                <p>{post && createrName}</p>
              </div>
              <div className="name-and-number">
                <span>Number:</span>
                <p>{post && createrNumber}</p>
              </div>
            </div>
            <div id="contact-btn">
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default CardDetailPage;
