import React, { Component, useEffect, useState } from "react";
import "./EntryPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Toast from "../../../Components/Toast";
import { Redirect } from "react-router";
import env from "react-dotenv";
const Url = "http://localhost:8081";
console.log("inside login url=", Url);
function LoginPage() {
  const [showlogin, setstate] = useState(true);
  const [LogDetails, setLogDetails] = useState({ email: "", password: "" });
  const [redirect, setRedirect] = useState(false);
  const [resetemail, setResetEmail] = useState("");
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      Toast.info("You are already Logged In!!");
      setRedirect(true);
    }
  }, []);

  const Login = (e) => {
    e.preventDefault();
    console.log(LogDetails);
    axios
      .post(`${Url}/api/auth/login`, LogDetails)
      .then((response) => {
        Toast.success("Loged In!!");
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

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log(resetemail);
    axios
      .post(`${Url}/api/auth/forgotpassword`, { email: resetemail })
      .then((response) => {
        Toast.success("reset link sent on your Email!!");
        console.log("response.data=", response.data);
      })
      .catch((err) => {
        Toast.error(err.response.data.error);
        console.log(err.message);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    LogDetails[e.target.name] = e.target.value;
    setLogDetails(LogDetails);
  };

  const { email, password } = LogDetails;
  if (redirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <section id="entry-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="goBack">
        <Link to="/">
          <i class="fa fa-home fa-5x"></i>
        </Link>
      </div>
      {showlogin === true ? (
        <form onSubmit={Login}>
          <h2>Welcome Back!</h2>
          <fieldset>
            <legend>Log In</legend>
            <ul>
              <li>
                <label for="email">Email:</label>
                <input
                  type="text"
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
              <li>
                <i />
                <a onClick={() => setstate(false)} href="#">
                  Forgot Password?
                </a>
              </li>
            </ul>
          </fieldset>
          <button type="submit">Login</button>
          <Link to="/register">
            <button type="button">Create an Account</button>
          </Link>
        </form>
      ) : (
        <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  defaultValue={resetemail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </li>
            </ul>
          </fieldset>
          <button onClick={handleResetPassword}>Send Reset Link</button>
          <button type="button" onClick={() => setstate(true)}>
            Go Back
          </button>
        </form>
      )}
    </section>
  );
}

//   render() {
//     return (
//       <section id="entry-page">
//         {this.currentView()}
//       </section>
//     )
//   }
// }

export default LoginPage;
