import React, { useState } from "react";

function TablePage({ onDataSubmit }) {
  const [roomBookingData, setRoomBookingData] = useState([
    { label: "single", value: "" },
    { label: "double", value: "" },
    { label: "deluxe", value: "" },
    { label: "suite", value: "" }
  ]);

  const handleDataSubmit = () => {
    // Filter out entries with empty values and convert value to integer
    const filteredData = roomBookingData
      .filter(entry => entry.value !== "")
      .map(entry => ({ label: entry.label, y: parseInt(entry.value) }));

    onDataSubmit(filteredData);
  };

  return (
    <div>
      <h2>Enter Room Booking Data</h2>
      {roomBookingData.map((entry, index) => (
        <div key={index}>
          <label>{entry.label}: </label>
          <input
            type="number"
            value={entry.value}
            onChange={e => {
              const newValue = e.target.value;
              setRoomBookingData(prevData =>
                prevData.map((item, i) =>
                  index === i ? { ...item, value: newValue } : item
                )
              );
            }}
          />
        </div>
      ))}
      <button onClick={handleDataSubmit}>Submit</button>
    </div>
  );
}

export default TablePage;
