import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { BsCalendar } from "react-icons/bs";

function CheckIn({ selected, onChange }) {
  return (
    <div className='relative flex items-center justify-end h-full'>
      {/**icon */}
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={selected}
        placeholderText='Check In'
        onChange={onChange}
        dateFormat="dd/MM/yyyy" // Specify the date format
      />
    </div>
  );
}

export default CheckIn;