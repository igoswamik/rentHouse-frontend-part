import React from "react";
import "./City.css";
import { Link } from "react-router-dom";
function city(props) {
  return (
    <Link to={"/citydata/" + props.city}>
      <div className="city">
        <img className="city__image" src={props.image} alt="city pic" />
        <span className="city__name">{props.city}</span>
      </div>
    </Link>
  );
}

export default city;
