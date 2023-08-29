/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Bottom from './Bottom';

function Gallerys({ images, interval}) {
  const [shouldShowSlider, setShouldShowSlider] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 412) {
        setShouldShowSlider(true);
      } else {
        setShouldShowSlider(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!shouldShowSlider) {
    return null; // Don't render the slider if screen width is less than 412px
  }
  return (
    <>
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={interval}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
    <Bottom/>
    </>
  );
}

export default Gallerys;
