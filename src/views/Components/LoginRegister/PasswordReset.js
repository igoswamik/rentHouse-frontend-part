import React, { useState } from "react";
import { useParams } from "react-router";
import Toast from "../../../Components/Toast";
import axios from "axios";
import "./EntryPage.scss";
import env from "react-dotenv";

const Url = "http://localhost:8081";
function PasswordReset() {
  let { tokenId } = useParams();
  console.log(tokenId);
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/api/auth/resetpassword/${tokenId}`, {
        password,
      })
      .then((response) => {
        Toast.success("Password reset successful");
        Toast.info("you can login with new password");
        console.log("response.data=", response.data);
      })
      .catch((err) => {
        Toast.error(err.response.data.error);
        console.log(err.message);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  return (
    <section id="entry-page">
      <form onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <fieldset>
          <legend>Enter new password</legend>
          <ul>
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
      </form>
    </section>
  );
}

export default PasswordReset;
