import React from "react";
import { Link } from "react-router-dom";
import "./EntryPage.scss";
function RegisterPage() {
  return (
    <section id="entry-page">
      <div className="goBack">
        <Link to="/">
          <i class="fa fa-home fa-5x"></i>
        </Link>
      </div>
      <form>
        <h2>Sign Up!</h2>
        <fieldset>
          <legend>Create Account</legend>
          <ul>
            <li>
              <label for="username">Username:</label>
              <input type="text" id="username" required />
            </li>
            <li>
              <label for="email">Email:</label>
              <input type="email" id="email" required />
            </li>
            <li>
              <label for="password">Password:</label>
              <input type="password" id="password" required />
            </li>
          </ul>
        </fieldset>
        <button>Submit</button>
        <Link to="/login">
          <button type="button">Have an Account?</button>
        </Link>
      </form>
    </section>
  );
}

export default RegisterPage;
