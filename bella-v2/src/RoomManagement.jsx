import React, { useState } from "react";
import axios from "axios";
import { BsCheckCircle, BsFillGearFill, BsHouseDoor, BsImage, BsInfoCircle, BsPerson, BsWallet } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import'./roommanagment.css'
function RoomManagement() {
  const [roomNumber, setRoomNumber] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [maxPerson, setMaxPerson] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const roomData = {
        roomNumber,
        type,
        price,
        maxPerson,
        description,
        isAvailable,
      };
  
      const response = await axios.post(
        "http://localhost:8080/api/rooms",
        roomData,
        {
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );
      console.log("Room added successfully:", response.data);
      navigate("/roomsdetails"); // Redirect to the rooms page after successfully adding the room
    } catch (error) {
      console.error("Error adding room:", error);
      // Handle error here
    }
  };

  return (
    <div className=" rooMangment ">
    <h1 className=" flightca titleHotel   font-primary text-[45px] ">Add Room</h1>
      <div className="w-50 bg-red rounded p-3">
      <form className="addform" onSubmit={handleSubmit}>
  <div className="mb-2">
    <div className="roomnumber">
      <label className="addname" htmlFor="">
        <BsHouseDoor className="iconromm" /> <h2 className="title font-primary" > Room Number</h2>
      </label>
      <input
        type="text"
        placeholder="Enter room number"
        className="form-control"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
      />
    </div>
  </div>
  <div className="mb-2">
    <div  className="ffff" >
    <label className="addname"  htmlFor="">
      <BsFillGearFill  className="iconromm"/> <h2 className="title font-primary" > Type </h2> 
    </label>
    <input
      type="text"
      placeholder="Enter type"
      className="form-control"
      value={type}
      onChange={(e) => setType(e.target.value)}
    />
    </div>
  
  </div>
  <div className="mb-2">
    <label  className="addname"  htmlFor="">
     <BsWallet className="iconromm" /> <h2 className="title font-primary" > Price </h2> 
    </label>
    <input
      type="number"
      placeholder="Enter price"
      className="form-control"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>
  <div className="mb-2">
    <label  className="addname"  htmlFor="">
      <BsPerson className="iconromm" />  <h2 className="title font-primary" > Max person </h2> 
    </label>
    <input
      type="number"
      placeholder="Enter price"
      className="form-control"
      value={maxPerson}
      onChange={(e) => setMaxPerson(e.target.value)}
    />
  </div>
  <div className="mb-2">
    <label className="addname"   htmlFor="">
      <BsInfoCircle  className="iconromm"/> <h2 className="title font-primary" >Description </h2> 
    </label>
    <input
      type="text"
      placeholder="about the room"
      className="form-control"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>
  <div className="mb-2">
    <label  className="addname"  htmlFor="">
      <BsCheckCircle className="iconromm" /> <h2 className="title font-primary" >Is Available </h2> 
    </label>
    <input
      type="checkbox"
      className="form-check-input"
      checked={isAvailable}
      onChange={(e) => setIsAvailable(e.target.checked)}
    />
  </div>
 
  <button type="submit"  className=" addbtn btn btn-primary ">
    Add Room
  </button>
</form>

      </div>
    </div>
  );
}

export default RoomManagement;
