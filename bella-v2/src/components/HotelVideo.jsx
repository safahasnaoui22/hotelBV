import "./Video.css";
import React from "react";

function HotelVideo() {
  return (
    <div className="wrappervideo">
      <input className="inputvideo" type="checkbox" id="videoCheckbox" />
      <div className="videovideo">
        <video 
          src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_1.mp4" 
          loop 
          muted 
          autoPlay 
          playsInline 
        ></video>
      </div>
      <div className="textvideo">
        <span data-text="Bella Vista"></span>
      </div>
      
      
    </div>
  );
}

export default HotelVideo;
