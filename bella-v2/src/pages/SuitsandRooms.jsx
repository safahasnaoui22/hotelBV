import "./Suits.css";
import React from "react";

function SuitsandRooms() {
    return (
        <div className="suits-container">
            <div className="roomsintro">
                <h1 className="titleHotel restaurenttitle preT font-primary text-[45px] ">Rooms & Suites</h1>
                <p className=" rommdesc">

Welcome to our luxurious rooms and suites! Choose from a variety of options to suit your needs.

Deluxe Room: Experience comfort and elegance in our spacious deluxe rooms, each equipped with modern amenities and stylish furnishings.

Executive Suite: Indulge in luxury with our executive suites, featuring separate living and sleeping areas, perfect for business travelers or those seeking extra space.

Family Suite: Ideal for families, our family suites offer ample room for relaxation and entertainme
</p>
            </div>
           
            <div className="image-container">
                <img src="https://th.bing.com/th/id/R.ff12bdf18a47eb54e620e763ec1f4e21?rik=JldKalTyXRoW%2fQ&riu=http%3a%2f%2fwww.chelseatoronto.com%2fen%2fuploads%2fimages%2f2015%2f08%2fdeluxe-room-double-new.jpg&ehk=eBFB6ipbZGs2%2fNOAsHRTEdRNwgevoMgCFgDTh3sAL%2fw%3d&risl=&pid=ImgRaw&r=0" alt="Room 1" className="room-image" />
            </div>
        </div>
    );
}

export default SuitsandRooms;
