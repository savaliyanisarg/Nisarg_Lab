import React, { useState, useEffect } from "react";

const ImageChanger = () => {
  // List of images (replace with your image URLs)
  const images = [
    "Nisarg_Lab/public/vite.svg",
    "Nisarg_Lab/public/vite.svg",
    "Nisarg_Lab/public/vite.svg",
    "Nisarg_Lab/public/vite.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        style={{ width: "300px", height: "200px" }}
      />
      <div>Current Image: {currentImageIndex + 1}</div>
    </div>
  );
};

export default ImageChanger;
