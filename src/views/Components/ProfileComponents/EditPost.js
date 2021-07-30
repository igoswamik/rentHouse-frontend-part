import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import Toast from "../../../Components/Toast";
import history from "../../../history";
import "./CreatePost.css";

const Url = "http://localhost:8081/post";
function EditPost() {
  let { id } = useParams();
  const [Hstate, setState] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
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
      .get(`${Url}/${id}`)
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
    console.log("submit");
    console.log(Hstate);
    const data = JSON.stringify(Hstate);
    console.log(data);
    axios
      .put(`${Url}/${id}`, Hstate)
      .then((response) => {
        Toast.success("Post Edited!!");
        console.log("response.data=", response.data);
        // <Redirect form={`/post/${id}/edit`} to={`/post/${id}`} />;
        history.push(`/post/${id}`);
        setTimeout(window.location.reload(), 2000);
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
    name,
    title,
    email,
    phone,
    configuration,
    duration,
    price,
    zip,
    city,
    facing,
    floor,
    images,
  } = Hstate;

  console.log("before render, hstate=", Hstate);
  return (
    <>
      <div className="container">
        <h3 className="mb-0">Create New Post</h3>

        <form className="myform">
          <div className="form__section">About Owner/Dealer</div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-name">
              Owner Name:
            </label>
            <input
              className="form-control-alternative"
              id="input-name"
              defaultValue={name}
              onChange={onChange}
              name="name"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-email">
              Owner email:
            </label>
            <input
              className="form-control-alternative"
              id="input-email"
              defaultValue={email}
              onChange={onChange}
              name="name"
              //placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-phone">
              Phone number:
            </label>
            <input
              className="form-control-alternative"
              id="input-phone"
              defaultValue={phone}
              onChange={onChange}
              name="name"
              //placeholder="John Doe"
              type="text"
            />
          </div>

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
      </div>
    </>
  );
}

export default withRouter(EditPost);
