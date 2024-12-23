import "./restaurent.css";
import React from "react";

function Restaurent() {
    return (
        <div className="test">
            <div className="book">
                <input className="input" type="checkbox" id="c1" /> 
                <input className="input" type="checkbox" id="c2" /> 
                <input className="input" type="checkbox" id="c3" /> 
                <div id="cover"> 
                    <img className="restImg" src="https://fthmb.tqn.com/EtiF7VJDcXVEgodV7sX3HIw-S34=/960x0/filters:no_upscale()/crepes-2500-56a210a33df78cf772719028.jpg" alt="Restaurant cover"></img>
                </div>
            
                <div className="flip-book">
                    <div className="flip" id="p1">
                        <div className="back">
                            <img className="restImg" src="https://yimages360.s3.amazonaws.com/products/2021/09/613c920aac96b/preview/v01h01.jpg" alt="Spaghetti"></img>
                            <label className="back-btn" htmlFor="c1">Back</label>
                        </div>
                        <div className="front">
                            <h2 className="h2Rest title text-[15px] tracking-[6px] font-primary text-[50px]">Spaghetti</h2>
                            <p>Enjoy delicious spaghetti at the Oasis Restaurant.</p>
                            <p>Schedule:</p>
                            <p>Breakfast buffet - From 06:15 a.m. to 10:00 a.m.</p>
                            <p>Late breakfast - From 10:00 a.m. to 12:00 p.m.</p>
                            <label className="next-btn" htmlFor="c1">Next</label>
                        </div>
                    </div>
                
                    <div className="flip" id="p2">
                        <div className="back">
                            <img className="restImg" src="https://yimages360.s3.amazonaws.com/products/2021/09/613c920aac96b/preview/v01h01.jpg" alt="Spaghetti"></img>
                            <label className="back-btn" htmlFor="c2">Back</label>
                        </div>
                        <div className="front">
                            <h2>Lobby Bar</h2>
                            <p>Enjoy a lunch buffet at the Lobby Bar.</p>
                            <p>Schedule:</p>
                            <p>Lunch buffet - From 12:30 p.m. to 03:00 p.m.</p>
                            <label className="next-btn" htmlFor="c2">Next</label>
                        </div>
                    </div>
                
                    <div className="flip" id="p3">
                        <div className="back">
                            <label className="back-btn" htmlFor="c3">Back</label>
                        </div>
                        <div className="front">
                            <h2>Le Baron</h2>
                            <p>Experience themed dining at Le Baron.</p>
                            <p>Schedule:</p>
                            <p>Theme Restaurant - From 07:00 p.m. to 09:00 p.m.</p>
                            <label className="next-btn" htmlFor="c3">Next</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurent;
