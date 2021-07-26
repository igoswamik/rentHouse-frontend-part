import React from "react";
import "./CitySubHeader.css";
function CitySubHeader({ city }) {
  return (
    <div className="top__row">
      <img
        className="top__image"
        src="https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100%"
        alt="top landscape"
      />
      <div className="top__heading">List of Houses in {city} city</div>
    </div>
  );
}

export default CitySubHeader;
