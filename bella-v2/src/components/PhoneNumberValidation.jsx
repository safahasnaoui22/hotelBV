import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";

const PhoneNumberValidation = ({ onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value, country) => {
    // Extract only digits from the phone number value
    const digitsOnlyPhoneNumber = value.replace(/\D/g, '');
    setPhoneNumber(digitsOnlyPhoneNumber);
    setValid(validatePhoneNumber(digitsOnlyPhoneNumber));
    
    // Pass the complete phone number value (including country code) to the parent component
    onChange(value);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <label>
       <h1 className="fr">  Phone Number:</h1>
        <PhoneInput
          country={'tn'} // Set the country code to 'tn' for Tunisia
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
        />
      </label>
      {!valid && (
        <p>Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;
