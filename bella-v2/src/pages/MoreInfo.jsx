import "./moreInfo.css";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/446374856.jpg?k=6dc2b3dac581b776993c009fa99d0512c5196fd243359f1150275865deebba12&o=&hp=1",
    name: "Hotel Image 1",
  },
  {
    src: "https://cdn2.tqsan.com/booking/abou-sofiane/Section-3533-20130326-021348.JPG",
    name: "Second Image",
  },
  {
    src: "https://dcontent.inviacdn.net/shared/img/web-1200x1024/2019/4/17/d5/19354743-abou-sofiane.jpg",
    name: "Third Image",
  },
  {
    src: "https://th.bing.com/th/id/OIP.ws-SoA1eEkxG2thNOGOk2QHaE5?&rs=1&pid=ImgDetMain",
    name: "Fourth Image",
  },
];

function Moreinfo() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePointClick = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="more-info-container">
      <div className="text-container">
        <h1 className="info-title titleHotel font-primary  ">The Best Vacations Start Here!</h1>
        <p className="info-description">

         Discover unparalleled luxury and breathtaking views at Bella Vista Monastir. 
         Our rooms and suites offer modern comforts with stunning sea or city vistas.
          Indulge in exquisite dining, relax by the pool, and experience personalized service for a memorable stay
        </p>
      </div>
      <div className="gallerycontainer">
        <div className="main-image-container">
          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].name}
            className="main-image"
          />
          <div className="image-name">{images[selectedImageIndex].name}</div>
        </div>
        <div className="points-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`point ${selectedImageIndex === index ? 'selected' : ''}`}
              onClick={() => handlePointClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Moreinfo;
