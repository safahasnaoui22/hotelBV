import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DeleteReservation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this reservation?");
    if (confirmDelete) {
      // If user confirms deletion, navigate to home page
      navigate("/");
    } else {
      // If user cancels deletion, stay on the same page
      // You can optionally add some logic here, like updating state or displaying a message
    }
  };

  return (
    <div>
      <h2>Delete Reservation</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteReservation;
