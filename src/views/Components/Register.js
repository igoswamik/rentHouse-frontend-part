import React from "react";

import "./Register.css"

function Register() {
  return (
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="goBack">
      <a href='/'><i class="fa fa-home fa-5x"></i></a>
    </div>
    <form className="loginForm">
      <div className="box">
        <div className="inputItem">
          <label>Name: </label> 
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="inputItem">
          <label>Email: </label> 
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="inputItem">
          <label>Password:</label>
          <input type="password" placeholder="Password" required></input>
        </div>
        <div className="inputItem">
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm Password" required></input>
        </div>
      </div>
      <p>Already registered? Login <a href='/login'>here</a></p>
      <button className="loginBtn">Submit</button>
    </form>
  </div>);
}
export default Register;
