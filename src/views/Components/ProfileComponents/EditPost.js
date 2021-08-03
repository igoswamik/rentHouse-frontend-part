import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Toast from "../../../Components/Toast";
import "./CreatePost.css";
import { Redirect } from "react-router";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Url = "http://localhost:8081";
function EditPost() {
  let { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [Hstate, setState] = useState({
    title: "",
    configuration: "",
    duration: "",
    price: "",
    zip: "",
    city: "",
    facing: "",
    floor: "",
    images: [],
  });
  const getPostDetailsFromServer = () => {
    axios
      .get(`${Url}/post/${id}`)
      .then((response) => {
        setState(response.data);
        console.log("response.data=", response.data);
      })
      .catch((err) => {
        Toast.error("Something went wrong!!");
        console.log(err.message);
      });
  };
  useEffect(() => {
    getPostDetailsFromServer();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Hstate);
    axios
      .put(`${Url}/${id}`, Hstate)
      .then((response) => {
        Toast.success("Post Edited!!");
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
    configuration,
    duration,
    price,
    zip,
    city,
    facing,
    floor,
    images,
  } = Hstate;

  if (redirect === true) {
    return <Redirect to={`/post/${id}`} />;
  }
  return (
    <>
      <div className="container">
        <Header />
        <h3 className="mb-0">Create New Post</h3>

        <form className="myform">
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
              defaultValue={configuration}
              onChange={onChange}
              name="configuration"
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
              name="facing"
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
              name="floor"
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
              // defaultValue={price}
              onChange={onChange}
              name="price"
              //placeholder="John Doe"
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
              name="zip"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <button type="submit" className="submit__button" onClick={onSubmit}>
            update
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default EditPost;
