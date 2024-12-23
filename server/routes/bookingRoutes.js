const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');

// Route to create a new booking
router.post('/', async (req, res) => {
  try {
    const { userData, bookingDetails } = req.body;

    // Create a new booking document
    const booking = new Booking({
      userData,
      bookingDetails
    });

    // Save the booking document to the database
    await booking.save();

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'An error occurred while creating the booking' });
  }
});

// Route to get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error('Error getting bookings:', error);
    res.status(500).json({ error: 'An error occurred while getting the bookings' });
  }
});

// Route to delete a booking by ID
router.delete('/', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'An error occurred while deleting the booking' });
  }
});

// Route to update a booking by ID
router.put('/', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'An error occurred while updating the booking' });
  }
});

module.exports = router;
