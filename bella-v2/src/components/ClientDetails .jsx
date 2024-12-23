import "./clientDT.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/bookings/${id}`);
        setBooking(response.data);
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };

    fetchBooking();
  }, [id]);

  // Function to handle printing
  const handlePrint = () => {
    const content = document.getElementById("client-details").innerHTML;
    const timestamp = new Date().toLocaleString();
    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.write("<html><head><title>Client Details</title></head><body>");
    printWindow.document.write(`<h1>Client Details - ${timestamp}</h1>`);
    printWindow.document.write(content);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="admindt">
  
 <div id="client-details">
  <div className=" step2Container  ">
  <h2  className=" title font-primary" >User Data</h2>

      {booking && (
        <>
           <h1>Your reservation Id: {id}</h1>
          <p>Phone Number: {booking.userData.phoneNumber}</p>
          <p>First Name: {booking.userData.firstName}</p>
          <p>Last Name: {booking.userData.lastName}</p>
          <p>Email: {booking.userData.email}</p>
          <p>Gender: {booking.userData.gender}</p>
          <p>Check-in Time: {booking.userData.checkin}</p>
          <p>Check-out Time: {booking.userData.checkout}</p>
        </>
      )}
  </div>
  <div className="clientdt step2form ">
  <div className="pre" >
<h2 className=" title font-primary" >Booking Details</h2>
      {booking && (
        <>
          <p>Check-in Date: {booking.bookingDetails.checkInDate}</p>
          <p>Check-out Date: {booking.bookingDetails.checkOutDate}</p>
          <p>Number of Nights: {booking.bookingDetails.numberOfNights}</p>
          <p>Adults: {booking.bookingDetails.adults}</p>
          <p>Kids: {booking.bookingDetails.kids}</p>
          <p>Rooms: {booking.bookingDetails.rooms}</p>
          <p>Selected Room Type: {booking.bookingDetails.selectedRoomType}</p>
          <p>Total Price: {booking.bookingDetails.totalPrice}</p>
        </>
      )}

      {/* Print button */}
</div>

<button  className=" btn confirm" onClick={handlePrint} style={{ marginTop: "20px" }}>Print</button>
    </div>  

     
    </div>
    </div>
   
  );
};

export default ClientDetails;
