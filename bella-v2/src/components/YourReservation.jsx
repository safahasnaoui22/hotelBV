import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaClock, FaEnvelope, FaGenderless, FaPhone, FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import'./Yourreservation.css'
const YourReservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [userData, setUserData] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    if (state) {
      setUserData(state.userData);
      setBookingDetails(state.bookingDetails);
    }
  }, [state]);

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleEditReservation = () => {
    navigate("/edit-reservation", { state });
  };

  const handleDeleteReservation = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this reservation?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/api/bookings/${state.bookingDetails._id}`);
      navigate("/"); // Navigate to home page if deletion is confirmed
    } else {
      // If deletion is not confirmed, do nothing (stay on the same page)
    }
  };

  const handleCompleteReservation = async () => {
    try {
      // Combine userData and bookingDetails into a single object
      const reservationData = {
        userData: userData,
        bookingDetails: bookingDetails
      };

      // Send reservation data to the backend running on port 8080
      await axios.post("http://localhost:8080/api/bookings", reservationData);
      // Display success message to the user
      alert("Your reservation is completed");
    } catch (error) {
      console.error("Error completing reservation:", error);
      // Display error message to the user
      alert("An error occurred while completing your reservation. Please try again later.");
    }
  };

  const buttonStyle = {
    backgroundColor: "#008CBA",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  };

  const confirmButtonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div className="youreservation">
      <div className=" step2Container  userdetails">
      <h2 className=" title font-primary" >Your Reservation : </h2>
      
      {userData && (
        <div>
          <p><FaPhone className="iconromm" /> Phone Number: <span className="databooking" >{userData.phoneNumber}</span></p>
  <p><FaUser  className="iconromm"  /> First Name: <span className="databooking"> {userData.firstName}</span> </p>
  <p><FaUser className="iconromm" /> Last Name: <span className="databooking">{userData.lastName}</span></p>
  <p><FaEnvelope className="iconromm" /> Email: <span className="databooking" >{userData.email}</span></p>
  <p><FaGenderless className="iconromm"  /> Gender: <span className="databooking">{userData.gender}</span> </p>
  <p><FaClock  className="iconromm" /> Check-in Time: <span className="databooking">{userData.checkin}</span> </p>
  <p><FaClock  className="iconromm" /> Check-out Time: <span className="databooking">{userData.checkout}</span> </p>
        </div>
      )}
      </div>
    <div className=" step2form bookingdetails">
    <h3  className=" title font-primary" >Booking Details :</h3>
    <div className="pre">
    <pre>{JSON.stringify(bookingDetails, null, 2)}</pre>
    </div>
 
<div className="yourreservationbtns">
  
<button  className=" btn confirm" onClick={handleCompleteReservation}>
        Confirm
      </button>
<button className=" btn hombtn " onClick={handleBackToHome}>
       Home
      </button>
    {  /*<button  className=" btn Edit" onClick={handleEditReservation}>
        Edit
      </button>
      <button  className=" btn delete" onClick={handleDeleteReservation}>
        Delete
    </button> */}

</div>
      
    </div>
    
    </div>
  );
};

export default YourReservation;
