import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Hotel Management System</h2>
      <ul>
       
     
        <li><Link to="/bookR">Bookings</Link></li>
        <li><Link to="/chart">Rooms</Link></li>
        <li><Link to="/roomMan">RoomMangment</Link></li>
        <li><Link to="/customers">Customers</Link></li>
     
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
