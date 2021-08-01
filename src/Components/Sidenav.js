import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Sidenav.css";
import Toast from "./Toast";
import { Redirect } from "react-router";

function Sidenav() {
  const [redirect, setRedirect] = useState(false);
  const openNav = () => {
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.width = "250px";
    }
  };

  const closeNav = () => {
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.width = "0px";
    }
  };
  const handleSignOut = () => {
    localStorage.clear();
    Toast.success("Logged out!!");
    window.location.reload();
    // setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div id="mySidenav" class="sidenav">
        <span class="closebtn" onClick={closeNav}>
          &times;
        </span>
        <div className="side__profile">
          <img
            src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
            alt="side profile"
          ></img>
          <a href="/profile">
            <span>Profile</span>
          </a>
        </div>
        <span className="sidenav__link">Setting</span>
        <span className="sidenav__link">About</span>
        <span className="sidenav__link" onClick={handleSignOut}>
          SignOut
        </span>
      </div>

      <span className="open__button" onClick={openNav}>
        <AccountCircleIcon id="profile__icon" />
      </span>
    </div>
  );
}

export default Sidenav;
