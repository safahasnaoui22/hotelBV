import React from "react";

import'./map.css'
function Map() {
    return (
        <div className="map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.190113964312!2d10.835119276527262!3d35.77070607255838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212d311e7c681%3A0xb41949b4983d917!2sLe%20Soleil%20Bella%20Vista%20Hotel!5e0!3m2!1sen!2stn!4v1714651281202!5m2!1sen!2stn" 
              
                width="100%"
                height="500" 
                style={{ border: "0" }} 
                allowFullScreen=""
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Map;

