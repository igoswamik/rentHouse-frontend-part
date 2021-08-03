import React, { useEffect, useState } from "react";
import axios from "axios";
import Toast from "../../../Components/Toast";
import "./CreatePost.css";
import { Redirect } from "react-router";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Url = "http://localhost:8081";
function CreatePost() {
  const userId = localStorage.getItem("currentUserId");
  console.log("userId=", userId);
  const [Hstate, setState] = useState({
    title: "",
    Configuration: "",
    duration: "",
    price: 0,
    zip: "",
    city: "",
    facing: "",
    floor: "",
    images: [],
  });
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Hstate);
    axios
      .post(`${Url}/createpost/${userId}`, Hstate)
      .then((response) => {
        Toast.success("post created!!");
        console.log("response.data=", response.data);
        setRedirect(true);
      })
      .catch((err) => {
        Toast.error("Something went wrong!!");
        console.log(err.message);
      });
  };

  const onChange = (e) => {
    console.log(e);
    Hstate[e.target.name] = e.target.value;
    setState(Hstate);
  };
  const {
    title,
    Configuration,
    duration,
    price,
    zip,
    city,
    facing,
    floor,
    images,
  } = Hstate;

  if (redirect === true) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="container">
        <Header />
        <h3 className="mb-0">Create New Post</h3>

        <form onSubmit={onSubmit} className="myform">
          <div className="form__section">About Property</div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-title">
              Title:
            </label>
            <input
              className="form-control-alternative"
              id="input-title"
              defaultValue={title}
              onChange={onChange}
              name="title"
              //placeholder="John Doe"
              required
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-config">
              Configuration:
            </label>
            <input
              className="form-control-alternative"
              id="input-config"
              defaultValue={Configuration}
              onChange={onChange}
              name="name"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-facing">
              Facing:
            </label>
            <input
              className="form-control-alternative"
              id="input-facig"
              defaultValue={facing}
              onChange={onChange}
              name="Facing"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-floor">
              Floor Number:
            </label>
            <input
              className="form-control-alternative"
              id="input-name"
              defaultValue={floor}
              onChange={onChange}
              name="floorNumber"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-image">
              Upload image:
            </label>
            <input
              className="form-control-alternative"
              type="file"
              id="input-image"
              defaultValue={images}
              onChange={onChange}
              name="images"
              multiple="true"
              //placeholder="John Doe"
            />
          </div>
          <div className="form__section">About Agreement</div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-duration">
              Rent Agreement Duration:
            </label>
            <input
              className="form-control-alternative"
              id="input-duration"
              defaultValue={duration}
              onChange={onChange}
              name="duration"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-price">
              Rent per month:
            </label>
            <input
              className="form-control-alternative"
              id="input-name"
              defaultValue={price}
              onChange={onChange}
              name="price"
              //placeholder="John Doe"
              required
              type="text"
            />
          </div>
          <div className="form__section">Address Details</div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-city">
              City:
            </label>
            <input
              className="form-control-alternative"
              id="input-city"
              defaultValue={city}
              onChange={onChange}
              required
              name="city"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-zip">
              Zip Code:
            </label>
            <input
              className="form-control-alternative"
              id="input-zip"
              defaultValue={zip}
              onChange={onChange}
              required
              name="zip"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <button type="submit" className="submit__button">
            submit
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default CreatePost;
