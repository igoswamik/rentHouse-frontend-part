import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ImageGallary from "./ImageGallary";
import "./PostDetailsPage.css";
import Review from "./Review";
import Toast from "../../Components/Toast";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
const Url = "http://localhost:8081/post";
function PostDetailsPage() {
  let { id } = useParams();
  const [PostDetail, setPostDetail] = useState({});
  const [showDetail, setShowDetails] = useState([]);

  const getPostDetailsFromServer = () => {
    axios
      .get(`${Url}/${id}`)
      .then((response) => {
        let arr = [];
        Object.keys(response.data).forEach(function (key) {
          if (
            key !== "geometry" &&
            key !== "_id" &&
            key !== "reviews" &&
            key !== "__v" &&
            key !== "images"
          ) {
            arr.push({ k: key, val: response.data[key] });
          }
        });
        setPostDetail(response.data);
        setShowDetails(arr);
        console.log("post details page response.data=", response.data);
      })
      .catch((err) => {
        //err.message
        Toast.error("Something went wrong!!");
        console.log(err.message);
      });
  };
  useEffect(() => {
    getPostDetailsFromServer();
  }, []);

  const deletePost = () => {
    axios
      .delete(`${Url}/${id}`)
      .then((response) => {
        console.log("post deleted=", response);
        return <Redirect to="/" />;
      })
      .catch((err) => {
        //err.message
        Toast.error("Something went wrong!!");
        console.log(err.message);
      });
  };
  console.log("postdetail=", PostDetail);
  return (
    <div className="container">
      <Header />
      <div className="gallary__row">
        <ImageGallary />
      </div>

      <div className="details__row table">
        <div className="row">
          {showDetail
            ? showDetail.map((prop) => {
                return (
                  <div className="col">
                    <span className="key">{prop.k}</span>
                    <span className="value">{prop.val}</span>
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <div className="owner__row table">
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/rAKbT3jRVw7KDkGq42ClJOKVaW8rrCUqSnWqsudNLE_2cRAjiFMUu8cX-cUJBaTWT_C5Ie2IFJhnsTjmy0WgSh7vRX7Q2s5jU_upphPVoHj9yjsPnElrrjc"
            alt="owner"
            className="owner__img"
          ></img>
          <div className="col">
            <span className="key">name</span>
            <span className="value">Kulbhushan Goswami</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="key">email</span>
            <span className="value">owner@email.com</span>
          </div>
          <div className="col">
            <span className="key">phone no:</span>
            <span className="value">+916754328965</span>
          </div>
        </div>
      </div>
      <div className="review__row">
        {PostDetail ? <Review postid={id} reviews={PostDetail.reviews} /> : ""}
      </div>
      <div className="owner__control">
        <Link to={`/post/${id}/edit`}>
          <button className="primary">Edit</button>
        </Link>
        <button className="danger" onClick={deletePost}>
          Delete
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetailsPage;
