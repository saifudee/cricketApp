/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo4 from "./images/image5.jpg";
import logo5 from "./skysports.jpeg";
import logo6 from "./images/img4.jpg";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

function Content({ title }) {
  
  return (
    <>
      <div className="image-card">
        <h2 className="card-title">{title}</h2>
        <div className="card-images">
          <div className="card">
            <img src={logo4}/>
          </div>
          <div className="card">
            <img src={logo6} />
          </div>
          <div className="card">
            <img src={logo5} />
          </div>
        </div>
        <Link className="btn btn-primary m-5" to='/contact' >Join Now</Link>
      </div>
      <Gallery/>
    </>
  );
}

export default Content;
