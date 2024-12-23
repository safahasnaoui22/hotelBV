const mongoose = require('mongoose');

// Define the schema for the Room model
const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
   
  },
  type: {
    type: String,
    enum: ['single', 'double', 'deluxe', 'suite'],
    required: true,
  },
  maxPerson: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the Room model
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
