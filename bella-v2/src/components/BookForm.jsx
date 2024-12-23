import "react-datepicker/dist/react-datepicker.css";
import "./BookForm.css";
import DatePicker from "react-datepicker";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();
    // Set the check-in date to the current date
    setCheckInDate(formatDate(currentDate));
    // Calculate the next day for the check-out date
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    // Set the check-out date to the next day
    setCheckOutDate(formatDate(nextDay));
  }, []);

  const formatDate = (date) => {
    // Format the date as "YYYY-MM-DD"
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingData = { checkInDate, checkOutDate, adults, kids, rooms };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    navigate('/booking');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-row">
        <label className="form-label">
        <h1 className="formname">Check-in:</h1>
        <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            className="form-input"
            dateFormat="yyyy-MM-dd" // Set the desired date format
          />
        </label>
        <div className="form-divider"></div> 
        <label className="form-label">
          <h1 className="formname"> Check-out : </h1>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            className="form-input"
            dateFormat="yyyy-MM-dd" // Set the desired date format
            minDate={checkInDate} // Ensure check-out date is after check-in date
          />

         
          
        </label>
        <div className="form-divider"></div> 
        <label className="form-label">
          <h1 className="formname">Adults:</h1>
          <input
            type="number"
            value={adults}
            min={1}
            onChange={(event) => setAdults(parseInt(event.target.value))}
            required
            className="form-input"
          />
        </label>
        <div className="form-divider"></div> 
        <label className="form-label">
          <h1 className="formname">Kids:</h1>
          <input
            type="number"
            value={kids}
            min={0}
            onChange={(event) => setKids(parseInt(event.target.value))}
            required
            className="form-input"
          />
        </label>
        <div className="form-divider"></div> 
        <label className="form-label">
          <h1 className="formname">  Rooms:</h1>
          <input
            type="number"
            value={rooms}
            min={1}
            onChange={(event) => setRooms(parseInt(event.target.value))}
            required
            className="form-input"
          />
        </label>

        <button type="submit" className="formbtn btn btn-primary ">Submit</button>
      </div>
    </form>
  );
};

export default BookForm;
