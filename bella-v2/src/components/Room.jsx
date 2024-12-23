import "./Room.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBed, FaClock, FaFire, FaGlassMartini, FaPlus, FaSnowflake, FaSun, FaUsers, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

// Room.jsx


function Room({ onSelectRoomType }) {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const [showConditions, setShowConditions] = useState(false);

  const [tooltipText, setTooltipText] = useState("");

  const handleIconMouseEnter = (title) => {
    setTooltipText(title);
  };

  const handleIconMouseLeave = () => {
    setTooltipText("");
  };

  useEffect(() => {
    console.log("Room component rendered");
    axios.get(`http://localhost:8080/api/rooms/`)
      .then(response => {
        setRooms(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching rooms:', error);
        setError('Error fetching room data. Please try again later.');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (rooms.length === 0) {
    return <div>No rooms available</div>;
  }

  return (
    <div className="roomList">
     <div className="titlestar">
      <h1 className="titlerom font-primary">Bella Vista Hotel</h1>
      <img
            className="star"
            src="https://th.bing.com/th/id/R.159c735cd97cfa5523cb2cbee10982?rik=7JYviMSoaN%2fnIw&riu=http%3a%2f%2fwww.patricia-milton.com%2fwp-content%2fuploads%2f2015%2f02%2ffour-stars.png&ehk=iXcKGTL%2bWTPJXtan6zUNi%2bQcqy0JHKn7%2bkmiPKSVTjs%3d&risl=&pid=ImgRaw&r=0"
            alt="Star Rating"
          />

     </div>
     <div>
      <h1 className="addresRom">
        Monastir , Tunisia 
      </h1>
     </div>
     <div>
      <h1 className="selectRom">
        Select Your Room 
        <div className="sun">
        <FaSun className="summerIcon"/>
        <FaSun className="summerIcon"/>
        <FaSun className="summerIcon"/> <FaSun className="summerIcon"/>

        </div>
      </h1>
     </div>
     {/*<h2 className="room-title font-primary text-[45px] ">Room & suites</h2>*/ } 
      <div className="room-container">
        {rooms.map(room => (
          <div key={room._id} className="room-card">
            <div className="room-content">
              <div className="divisecard">
                <div className="sectiononeroom">
                <img 
                src={`https://i.pinimg.com/originals/bc/5b/78/bc5b780990cd800137855a5b7f121156.jpg`} 
                alt="Room" 
                className="roomimage"
              />
                </div>
                <div className="sectiontowroom"> 


                  <div className="roomtypeavailble">
                  <h3 className="roomtype">{room.type} Room</h3>
                <p className="available">{room.isAvailable ? 'Available' : 'Not Available'}</p>
                  </div>
                
                <p>Max People: {room.maxPerson} <FaUsers className="iconromm" /></p>
                <p>Room Number: {room.roomNumber} <FaBed  className="iconromm" /></p>
                <p className="">{room.description}</p>
                <p className="icons">
        <FaSnowflake className="iconroom" title="Climatisation" />
        <FaFire className="iconroom" title="Chauffage" />
        <FaWifi className="iconroom" title="WiFi" />
        <FaGlassMartini className="iconroom" title="Mini Bar" />
        <FaClock className="iconroom" title="Réveil" />
    
        <FaPlus
        className="iconroom pluss"
        title="Tv douche terrase alarme "
        onMouseEnter={() => handleIconMouseEnter("Tv douche terrase alarme")}
        onMouseLeave={handleIconMouseLeave}
      />
      {tooltipText && <div className="tooltip">{tooltipText}</div>}
      </p>
               
      <h1 className="anulation" onMouseEnter={() => setShowConditions(true)} onMouseLeave={() => setShowConditions(false)}>Anulation condition</h1>
      <hr/>
      {showConditions && (
        <p className="condtionanulation">
          you have to pay 100% if anulation after ...
        </p>
      )}
                </div>
                <div className="sectionthreeroom">
                <select className="selectoption">
    <option value="logement">Logement</option>
    <option value="petit-dejeuner">Petit Déjeuner</option>
    <option value="demi-pension">Demi Pension</option>
    <option value="pension-complete">Pension Complète</option>
    <option value="all-inclusive-soft">All Inclusive Soft</option>
  </select>

                <p className="price">Price: {room.price} Dt</p>
                <div className="roomsbtns">
                <button onClick={() => onSelectRoomType(room.type, room.price)} className=" select">Selected</button>
                 
                </div>
            <div>
            <Link to={`/roomDt/${room._id}`} className="Detail"> Details</Link>
            </div>
                </div>
              </div>
             
          
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Room;
