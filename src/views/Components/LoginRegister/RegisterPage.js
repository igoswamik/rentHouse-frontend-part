import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EntryPage.scss";
import axios from "axios";
import Toast from "../../../Components/Toast";
import { Redirect } from "react-router";
import env from "react-dotenv";

const Url = "http://localhost:8081";
function RegisterPage() {
  const [RegistrationDetails, setRegistrationDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      Toast.info("You are already Logged In!!");
      setRedirect(true);
    }
  }, []);

  const register = (e) => {
    e.preventDefault();
    console.log(RegistrationDetails);
    axios
      .post(`${Url}/api/auth/register`, RegistrationDetails)
      .then((response) => {
        Toast.success("Registered!!");
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("currentUserId", response.data.id);
        setRedirect(true);
        console.log("response.data=", response.data);
      })
      .catch((err) => {
        Toast.error(err.response.data.error);
        console.log(err.message);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    RegistrationDetails[e.target.name] = e.target.value;
    setRegistrationDetails(RegistrationDetails);
  };

  const { username, email, password } = RegistrationDetails;

  if (redirect === true) {
    return <Redirect to="/" />;
  }
  return (
    <section id="entry-page">
      <div className="goBack">
        <Link to="/">
          <i class="fa fa-home fa-5x"></i>
        </Link>
      </div>
      <form onSubmit={register}>
        <h2>Sign Up!</h2>
        <fieldset>
          <legend>Create Account</legend>
          <ul>
            <li>
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                defaultValue={username}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={email}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                defaultValue={password}
                onChange={handleChange}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="submit">Submit</button>
        <Link to="/login">
          <button type="button">Have an Account?</button>
        </Link>
      </form>
    </section>
  );
}

export default RegisterPage;
