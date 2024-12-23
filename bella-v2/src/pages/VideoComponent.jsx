import "./video.css";
import React from "react";

const VideoComponent = () => {
  return (
    <div className="containervideo">
      <div className="video1">
        <div className="videoframe">
          <video className="videocomponent"
            src="./hotelvideo.mp4" 
            autoPlay
            controls
            width="100%" 
            height="auto" 
            title="Hotel Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
