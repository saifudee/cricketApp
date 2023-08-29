import React from 'react'
import logo from "./images/image1.jpg";
import logo1 from "./images/image2.jpg";
import logo2 from "./images/image3.jpg";
import Bottom from './Bottom';
function News() {
  return (
    <>
   
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Bottom/>
</>
  )
}

export default News