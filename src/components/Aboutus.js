import React from "react";
import logo from "./skysports.jpeg";

function Aboutus() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={logo} alt="About Us" />
      </div>
      <div className="about-content p-2">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a sports association dedicated to
          promoting fitness and well-being through sports activities. Our
          mission is to...
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
