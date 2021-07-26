import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";
function Header() {
  return (
    <div className="header">
      <div className="header__brand">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        {/* <img
            className="header__logo"
            src="https://img.freepik.com/free-vector/house-logo-icon-negative-space-style_126523-692.jpg?size=626&ext=jpg"
            alt="logo"
          ></img> */}
        <Link to="/">
          <span className="brand__name">RentHouse</span>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne"> Hello Guest</span>
            <span className="header__optionLineTwo"> SignIn</span>
          </div>
        </Link>
        <Link to="/register">
          <div className="header__option">
            <span className="header__optionLineOne">New User?</span>
            <span className="header__optionLineTwo">Register</span>
          </div>
        </Link>

        <div className="header__option">
          <Sidenav />
        </div>
      </div>
    </div>
  );
}

export default Header;
