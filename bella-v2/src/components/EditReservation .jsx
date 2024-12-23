import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditReservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [userData, setUserData] = useState(state.userData || {});
  const [editedData, setEditedData] = useState({}); // Track changes made by the user

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Merge the changes with the original userData
    const updatedUserData = { ...userData, ...editedData };
    // Here you can send the updatedUserData to your backend or update your state if it's only frontend
    // For demonstration purposes, let's just update the local state
    setUserData(updatedUserData);

    // Display an alert indicating that the reservation has been edited successfully
    const editedFields = Object.keys(editedData).join(", ");
    alert(`Your ${editedFields} have been edited successfully`);

    // Navigate back to the reservation details page with the updated data
    navigate("/your-reservation", { state: { userData: updatedUserData, bookingDetails: state.bookingDetails } });
  };

  return (
    <div>
      <h2>Edit Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={editedData.phoneNumber || userData.phoneNumber} onChange={handleChange} />

        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={editedData.firstName || userData.firstName} onChange={handleChange} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={editedData.lastName || userData.lastName} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={editedData.email || userData.email} onChange={handleChange} />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={editedData.gender || userData.gender} onChange={handleChange}>
          <option value="Monsieur">Monsieur</option>
          <option value="Madame">Madame</option>
        </select>

        <label htmlFor="checkin">Check-in Time:</label>
        <input type="time" id="checkin" name="checkin" value={editedData.checkin || userData.checkin} onChange={handleChange} />

        <label htmlFor="checkout">Check-out Time:</label>
        <input type="time" id="checkout" name="checkout" value={editedData.checkout || userData.checkout} onChange={handleChange} />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditReservation;
