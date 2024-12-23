import "./presentation.css";
import ChatButton from "./ChatButton";
import HotelVideo from "../components/HotelVideo";
import React, { useEffect, useState } from "react";
import SocialMediaButton from "../components/SocialMediaButton";
import { Link } from "react-router-dom";

function Presentation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Set mounted to true after the component mounts
    setMounted(true);
  }, []);

  return (
    <div className={`presentation ${mounted ? 'fade-in' : ''}`}>
      <div className="presentation-container">
        <div className="image-container move-from-left">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/446374856.jpg?k=6dc2b3dac581b776993c009fa99d0512c5196fd243359f1150275865deebba12&o=&hp=1"
            alt="Hotel Image"
            className="image"
          />
        </div>
        <div className="content-container move-from-right">
          <div className="title-container">
            <h1 className="titleHotel font-primary text-[45px]">Bella Vista Hotel</h1>
            <img
              className="star move-from-left"
              src="https://th.bing.com/th/id/R.159c735cd97cfa5523cb2cbee10982?rik=7JYviMSoaN%2fnIw&riu=http%3a%2f%2fwww.patricia-milton.com%2fwp-content%2fuploads%2f2015%2f02%2ffour-stars.png&ehk=iXcKGTL%2bWTPJXtan6zUNi%2bQcqy0JHKn7%2bkmiPKSVTjs%3d&risl=&pid=ImgRaw&r=0"
              alt="Star Rating"
            />
          </div>
          <div className="description-container move-from-bottom">
            <p className="description">
              Welcome to Bella Vista Hotel, your exclusive retreat on the beautiful coast of Monastir, Tunisia.
              Immerse yourself in luxurious comfort and unparalleled hospitality as you enjoy stunning sea views and
              pristine beaches. Indulge in gourmet dining, unwind by the pool, and explore nearby cultural treasures.
              Experience the essence of Mediterranean elegance at Bella Vista Hotel – where every stay is a journey of
              relaxation and discovery.
            </p>
            <Link to="/more-info" className="btn-more-info move-from-top">
              More Info
            </Link>
          </div>
        </div>
        <div>
          <div>
            <SocialMediaButton />
          </div>
          <ChatButton className="chat" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
