import React, { Component, useState } from "react";
import "./EntryPage.scss";
import { Link } from "react-router-dom";
function LoginPage() {
  const [showlogin, setstate] = useState(true);

  const onClick = () => {
    console.log("clicked");
  };
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
        <form>
          <h2>Welcome Back!</h2>
          <fieldset>
            <legend>Log In</legend>
            <ul>
              <li>
                <label for="username">Username:</label>
                <input type="text" id="username" required />
              </li>
              <li>
                <label for="password">Password:</label>
                <input type="password" id="password" required />
              </li>
              <li>
                <i />
                <a onClick={() => setstate(false)} href="#">
                  Forgot Password?
                </a>
              </li>
            </ul>
          </fieldset>
          <button>Login</button>
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
                <input type="email" id="email" required />
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
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
