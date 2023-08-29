/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";


function SlidingBanner({ images, intervalTime }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [images, intervalTime]);
  return (
    <>
      <div className="auto-slider">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="slider-image p-3"
        />
      </div>
    </>
  );
}

export default SlidingBanner;
