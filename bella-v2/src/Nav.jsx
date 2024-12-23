import "./Navb.css";
import React from "react";

// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg" alt="Hotel Logo" />
        <span>Larana Hotel</span>
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
