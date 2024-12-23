import "./adminpage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2 className="ourservice h2booking font-primary text-[45px]"> Bookings Page</h2>
      <div className="admintable">
        {Array.isArray(bookings) && bookings.length > 0 ? (
          <table className="tableAdmin">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Data</th>
                <th>Booking Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td className="tradmin">
                    <p>ID: {booking._id.substring(0, 5)}</p>
                  </td>
                  <td className="tradmin">
                    <p>Phone Number: {booking.userData.phoneNumber}</p>
                    <p>First Name: {booking.userData.firstName}</p>
                    <p>Last Name: {booking.userData.lastName}</p>
                    <p>Email: {booking.userData.email}</p>
                    <p>Gender: {booking.userData.gender}</p>
                    <p>Check-in Time: {booking.userData.checkin}</p>
                    <p>Check-out Time: {booking.userData.checkout}</p>
                  </td>
                  <td className="tradmin">
                    <p>Check-in Date: {booking.bookingDetails.checkInDate}</p>
                    <p>Check-out Date: {booking.bookingDetails.checkOutDate}</p>
                    <p>Number of Nights: {booking.bookingDetails.numberOfNights}</p>
                    <p>Adults: {booking.bookingDetails.adults}</p>
                    <p>Kids: {booking.bookingDetails.kids}</p>
                    <p>Rooms: {booking.bookingDetails.rooms}</p>
                    <p>Selected Room Type: {booking.bookingDetails.selectedRoomType}</p>
                    <p>Total Price: {booking.bookingDetails.totalPrice}</p>
                  </td>
                  <td>
                    <Link to={`/client-details/${booking._id}`}>
                      <button style={{ backgroundColor: "#04AA6D", color: "white", padding: "12px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "16px" }}>View Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No bookings available</p>
        )}
      </div>
    </div>
  );
};

export default AdminBooking;

