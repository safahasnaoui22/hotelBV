import React, { useContext, useState } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

function RoomDetails() {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/rooms/${id}/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully:", response.data);
      // You can redirect or perform any other action after uploading the image
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section className="">
      {/* Banner */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center z-1 bg-black/70">
        {/* Overlay */}
        <div className="absolute bg-black/70">
          <img src={imageLg} alt={name} />
        </div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>

      {/* Room Details */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* Left Section */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt={name} />

            {/* Facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, quae.
              </p>
              {/* Grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full h-full lg:w-[40%]">
            {/* Reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your reservation</h3>
                {/* Reservation Inputs */}
                {/* You can include CheckIn, CheckOut, AdultsDropdown, and KidsDropdown components here */}
                <button className="btn btn-lg btn-primary w-full">
                  Book now for ${price}
                </button>
              </div>
            </div>

            {/* Rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Omnis laborum quidem natus.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in : 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out : 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image Upload Form */}
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Upload Room Image</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium">
              Choose Image:
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Upload Image
          </button>
        </form>
      </div>
    </section>
  );
}

export default RoomDetails;
