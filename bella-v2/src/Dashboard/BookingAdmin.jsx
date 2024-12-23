import React from "react";

const BookingAdmin = ({ reservationData }) => {
  if (!reservationData) {
    return null; // If no reservation data is provided, don't render anything
  }

  const { userData, bookingDetails } = reservationData;

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      <h2>Reservation Details</h2>
      <h3>User Data</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Phone Number</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{userData.phoneNumber}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>First Name</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{userData.firstName}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Last Name</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{userData.lastName}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Email</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{userData.email}</td>
          </tr>
          {/* Add more user data fields as needed */}
        </tbody>
      </table>

      <h3 style={{ marginTop: "20px" }}>Booking Details</h3>
      <pre style={{ backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px", borderRadius: "5px", whiteSpace: "pre-wrap" }}>{bookingDetails}</pre>
    </div>
  );
};

export default BookingAdmin;





