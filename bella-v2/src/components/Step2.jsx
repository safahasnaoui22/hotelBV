import "./step2.css";
import BookingAdmin from "../Dashboard/BookingAdmin";
import CountryFlag from "react-country-flag";
import PhoneNumberValidation from "./PhoneNumberValidation";
import React, { useState } from "react";
import axios from "axios";
import { FaBed, FaCalendarAlt, FaCheckCircle, FaChild, FaMoon, FaUsers } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Step2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [conditionsAccepted, setConditionsAccepted] = useState(false);
  const [reservationData, setReservationData] = useState(null); // New state for reservation data

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (conditionsAccepted) {
      try {
        // Update phoneNumber state
        const phoneNumberValue = phoneNumber;
        // Construct userData object after updating phoneNumber state
        const userData = {
          phoneNumber: phoneNumberValue,
          firstName: document.getElementById("name").value,
          lastName: document.getElementById("lname").value,
          email: document.getElementById("email").value,
          gender: document.querySelector('input[name="gender"]:checked')?.value || "",
          checkin: document.getElementById("checkin").value,
          checkout: document.getElementById("checkout").value,
        };
  




        const bookingDetails = state ? {
          checkInDate: state.checkInDate,
          checkOutDate: state.checkOutDate,
          numberOfNights: state.numberOfNights,
          adults: state.adults,
          kids: state.kids,
          rooms: state.rooms,
          selectedRoomType: state.selectedRoomType ? state.selectedRoomType.type : 'Select a room',
          totalPrice: state.totalPrice
        } : null;
  
        console.log("User Data:", userData);
        console.log("Booking Details:", bookingDetails);
  
        // Update reservationData state with user data and booking details
        setReservationData({ userData, bookingDetails });
  
        // Navigate to the 'your-reservation' page and pass userData and bookingDetails as state
        navigate("/your-reservation", { state: { userData, bookingDetails } });
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    } else {
      const alertStyle = {
        padding: "20px",
        backgroundColor: "#f44336",
        color: "white",
        borderRadius: "5px",
        textAlign: "center",
      };
      alert("Please accept the conditions.", alertStyle);
    }
  };
  
  return (
    <div className="stepp" >
      <div className="step2Container ">
      <h2 className=" title font-primary">Booking Details</h2>
      {state ? (
        <div className="detailsstep2">
          <p  className="da"> <FaCalendarAlt className="iconromm"  />Check-in Date:  <span className="databooking"> {state.checkInDate}</span></p>
          <p  className="da"> <FaCalendarAlt className="iconromm"  /> Check-out Date:  <span className="databooking"> {state.checkOutDate} </span></p>
          <p  className="da"> <FaMoon  className="iconromm"  />  Number of Nights:  <span className="databooking">{state.numberOfNights}</span></p>
          <p  className="da"> <FaUsers  className="iconromm"  /> Adults: <span className="databooking"> {state.adults}</span> </p>
          <p  className="da"> <FaChild className="iconromm"  /> Kids: <span className="databooking"> {state.kids}</span> </p>
          <p  className="da"> <FaBed className="iconromm" />  Rooms: <span className="databooking"> {state.rooms}</span> </p>
          <p  className="selectroom">{state.selectedRoomType ? state.selectedRoomType.type : 'Select a room'}</p>
          <p >Total Price: {state.totalPrice} DT</p>
        </div>
      ) : (
        <p>No booking data found</p>
      )}
      </div>
   <div className="step2form">
   <form onSubmit={handleSubmit}>
    <h2 className=" title font-primary">Your information</h2>
       
 
        <label htmlFor="name" className="fr">First Name</label>
        <input type="text" id="name" name="firstname" placeholder="Your first name.." required style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px" }} />
        
      
        <label htmlFor="lname" className="fr">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." required style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px" }} />

        <label htmlFor="email" className="fr">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email.." required style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px" }} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <PhoneNumberValidation
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="fr"
            style={{ flex: 1, padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px" }}
          />
          {phoneNumber && (
            <CountryFlag countryCode={phoneNumber.split(" ")[0].replace("+", "")} style={{ marginLeft: "10px" }} svg />
          )}
        </div>
        <div className="radio">
        <label>
         
         <input  className="firstradio" type="radio" name="gender" value="Monsieur" />
         Monsieur
       </label>
       <label>
         <input  className="secondradio" type="radio" name="gender" value="Madame" />
         Madame
       </label>
        </div>
     
<div className="time">
<label  className="labeldattone" htmlFor="checkin">Arrival Date</label>
        <input   className="inputdateone " type="time" id="checkin" name="checkin" required />

        <label className="labeldattow" htmlFor="checkout">Departure Date</label>
        <input  className="inputdatetow" type="time" id="checkout" name="checkout" required />
</div>
       

        <label>Terms and Conditions</label>

        <label>
          <input type="checkbox" id="conditions1" value="conditions1" required onChange={() => setConditionsAccepted(!conditionsAccepted)} />
          I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.
        </label>

        <button type="button" onClick={handleSubmit} style={{ backgroundColor: "#04AA6D", color: "white", padding: "12px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "16px" }}>
          Submit
        </button>
      </form>

      {/* Render BookingAdmin component with reservationData */}
      {reservationData && <BookingAdmin reservationData={reservationData} />}
   </div>
    
    </div>
  );
};

export default Step2;
