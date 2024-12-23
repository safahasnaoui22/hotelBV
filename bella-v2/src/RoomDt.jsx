import "./RoomDt.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { faBath, faCocktail, faCoffee, faDumbbell, faParking, faSwimmingPool, faUtensils, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const RoomDt = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/rooms/${id}`);
        setRoom(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching room details:", error);
        setError("Error fetching room details. Please try again later.");
      }
    };

    fetchRoom();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="sectionone">
        <img className="imsectionone" src="https://th.bing.com/th/id/R.3926e4c562d6c52b76c5dfd7893cd099?rik=ICmZtGP4QiRSXA&riu=http%3a%2f%2fwww.le-monde-de-lea.fr%2fwp-content%2fuploads%2f2017%2f03%2fmaison20de20luxe20184886.jpg&ehk=RaWR7fR7ums1SNXdBmEMUVZo3J%2fiOZJ9UfLQSphRSi0%3d&risl=&pid=ImgRaw&r=0" alt="Room"></img>
      </div>
      <div className="sectiontow">
        <div className="roomDetails">
          <h3 className="font-primary text-[45px]">{room.type} Room</h3>
          <p className="roominfo">Room Number: {room.roomNumber}</p>
          <p className="roominfo">Price: ${room.price}</p>
          <p className="roominfo">Max People: {room.maxPerson}</p>
          <p className="roomdescription">{room.description}</p>
          <p className="roomstatus">{room.isAvailable ? 'Available' : 'Not Available'}</p>
          <Link to="/booking" className="RoomDtBtn">Back</Link>
        </div>
        <div className="">
          <img className="imageroomdt" src="https://th.bing.com/th/id/OIP.NMZkgnQAPflYLX6KeqG9lAHaEo?rs=1&pid=ImgDetMain" alt="Room"></img>
        </div>
      </div>
      <div className="sectionthree">
      <div className="sectionthreepart1">
        <h3 className='font-primary text-[45px]'>Room Facilities</h3>
        <div className='flex flex-wrap gap-20'>
  <div className="roomIcons gap-20">
    <Facility icon={faWifi} text="Wifi" />
    <Facility icon={faCoffee} text="Coffee" />
  </div>
  
  <div className="roomIcons gap-20">
    <Facility icon={faParking} text="Parking Space" />
    <Facility icon={faSwimmingPool} text="Swimming Pool" />
    <Facility icon={faUtensils} text="Breakfast" />
  </div>
  
  <div className="roomIcons gap-20">
    <Facility icon={faDumbbell} text="GYM" />
    <Facility icon={faCocktail} text="Drinks" />
  </div>
</div>
      </div>
      <div className="sectionthreeparttow">
        <h3 className='font-primary text-[45px]'>Hotels Rules</h3>
        <p className='mb-6'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis laborum quidem natus.
        </p>
        <ul className='flex flex-col gap-y-4'>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-in: 3:00 PM - 9:00 PM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-out: 10:30 AM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            No pets
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            No smoking
          </li>
        </ul>
      </div>
      </div>
     
    </div>
  );
};

function Facility({ icon, text }) {
  return (
    <div className="facility">
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </div>
  );
}

export default RoomDt;
