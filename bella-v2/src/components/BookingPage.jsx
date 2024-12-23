import Alert from "./Alert";
import React, { useEffect, useState } from "react";
import Room from "./Room";
import { FaBed, FaCalendarAlt, FaCheckCircle, FaChild, FaMoon, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import'./BookingPage.css'
const BookingPage = () => {
  const [bookingData, setBookingData] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(1);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("bookingData");
    if (data) {
      const parsedData = JSON.parse(data);
      setBookingData(parsedData);
      const checkInDate = new Date(parsedData.checkInDate);
      const checkOutDate = new Date(parsedData.checkOutDate);
      const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setNumberOfNights(Math.round(differenceInDays));
    }
  }, []);

  const handleRoomTypeSelect = (type, price) => {
    setSelectedRoomType({ type, price });
  };

  const handleStep2ButtonClick = () => {
    if (bookingData && numberOfNights && selectedRoomType) {
      // Calculate total price
      const totalPrice = selectedRoomType.price * numberOfNights;
  
      // Navigate to Step 2 page with data
      navigate("/step2", {
        state: {
          checkInDate: bookingData.checkInDate,
          checkOutDate: bookingData.checkOutDate,
          adults: bookingData.adults,
          kids: bookingData.kids,
          rooms: bookingData.rooms,
          selectedRoomType: selectedRoomType,
          numberOfNights: numberOfNights, // Include number of nights
          totalPrice: totalPrice, // Include total price in the state
        },
      });
    } else {
      console.error("Error: Booking data is missing");
    }
  };
  

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
      
        <Room
          checkInDate={bookingData ? bookingData.checkInDate : null}
          checkOutDate={bookingData ? bookingData.checkOutDate : null}
          onSelectRoomType={(type, price) => handleRoomTypeSelect(type, price)}
        />
      </div>
      <div className=" bookingdetailas" style={{ flex: 1 }}>
      <div>   
        <Alert/>
      </div>
      <h2 className="bkh2 title font-primary">Your Selection </h2>
   
      
        <div className="BookcContainer">
        {bookingData ? (
          <div>
            <p className="da"><FaCalendarAlt className="iconromm"  />Check-in Date: <span className="databooking">{bookingData.checkInDate}</span></p>
<p className="da"><FaCalendarAlt  className="iconromm"  /> Check-out Date: <span  className="databooking" >{bookingData.checkOutDate}</span></p>
<p className="da"><FaMoon  className="iconromm"  /> Number of Nights: <span  className="databooking" >{numberOfNights}</span></p>
<p className="da"><FaUsers  className="iconromm"  /> Adults: <span  className="databooking">{bookingData.adults}</span></p>
<p className="da"><FaChild className="iconromm"  /> Kids: <span  className="databooking">{bookingData.kids}</span></p>
<p className="da"><FaBed className="iconromm" /> Rooms: <span  className="databooking">{bookingData.rooms}</span></p>

            <p className="selectroom">
            
              {selectedRoomType ? selectedRoomType.type : "Select a room"}
            </p>
            <p>
              Total Price: DT
              {selectedRoomType
                ? selectedRoomType.price * numberOfNights
                : ""}
            </p>
            <button className="btnbk btn-primary"  onClick={handleStep2ButtonClick}>Step 2</button>
            <FaCheckCircle className="iconromm"  />
            
          </div>
        ) : (
          <p>No booking data found</p>
        )}
        </div>
     
      </div>
    </div>
  );
};

export default BookingPage;
