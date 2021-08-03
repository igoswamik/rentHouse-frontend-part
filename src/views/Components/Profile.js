import React, { useState } from "react";
// import { Container, Row, Col } from 'reactstrap';
import "./Profile.css";
import Post from "./Post";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
function Profile() {
  var houses = [
    { price: 20000, size: 3, bedroom: 5 },
    { price: 20000, size: 3, bedroom: 5 },
    { price: 20000, size: 3, bedroom: 5 },
  ];

  return (
    <div>
      <Header />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <ProfileHeader />
      <div className="grid">
        {houses.map((idx) => (
          <Post key={idx} id={idx} post={{}} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
