import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [total, setTotal] = useState(0);
  const [adults, setAdults] = useState('1 ');
  const [kids, setKids] = useState('0 ');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when component mounts

  useEffect(() => {
    setTotal(adults + kids);
  }, [adults, kids]);
  

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/rooms');
      setRooms(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching room data:', error);
      // Handle error
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Filter rooms based on total guests count
    const newRooms = rooms.filter((room) => {
      return total <= room.maxPerson;
    });

    setRooms(newRooms);
  };

  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, loading, handleClick }}>
      {children}
    </RoomContext.Provider>
  );
}

RoomProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoomProvider;
