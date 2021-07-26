import React from "react";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return <div className="footer">RentHouse &copy; {year}</div>;
}

export default Footer;
