import React from 'react'
import SlidingBanner from "./SlidingBanner";
import Content from "./Content";
import Bottom from "./Bottom";
import logo4 from "./images/image5.jpg";
import logo5 from "./skysports.jpeg";
import logo6 from "./images/img4.jpg";


function Home({text}) {
  const images = [
    logo4,
    logo5,
    logo6,
    // Add more image URLs here
  ];
  return (
    <>
          <div className="banner">
           {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
           <marquee width="90%" direction="right" scrollamount="10"><p className="banner-text">{text}</p></marquee> 
          </div>
          <div className='App'>
            <SlidingBanner images={images} intervalTime={2000}/>
            <Content title="Join us to get instant updates of your premier team" />
            <Bottom />
            </div>
          </>
        );
}

export default Home