const mongoose = require('mongoose');

// Define the schema for the Booking model
const bookingSchema = new mongoose.Schema({
  userData: {
    phoneNumber: {
      type: String,
    
    },
    firstName: {
      type: String,
    
    },
    lastName: {
      type: String,
    
    },
    email: {
      type: String,
     
    },
    gender: {
      type: String,
    
    },
    checkin: {
      type: Date,
    
    },
    checkout: {
      type: Date,
    
    }
  },
  bookingDetails: {
    checkInDate: {
      type: Date,
    
    },
    checkOutDate: {
      type: Date,
     
    },
    numberOfNights: {
      type: Number,
     
    },
    adults: {
      type: Number,
    
    },
    kids: {
      type: Number,
    
    },
    rooms: {
      type: Number,
      
    },
    selectedRoomType: {
      type: String,
     
    },
    totalPrice: {
      type: Number,
      
    }
  }
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

