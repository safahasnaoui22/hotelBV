// controllers/roomController.js

/*const Room = require('../models/roomModel.js');

// Controller to create a new room
exports.createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    console.error('Error creating room:', error);
    console.log('Error type:', typeof error); // Log the type of error
    res.status(500).json({ error: 'An error occurred while creating the room' });
  }
};
// Controller to get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    console.error('Error getting rooms:', error);
    res.status(500).json({ error: 'An error occurred while getting the rooms' });
  }
};

// Controller to get a room by ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    console.error('Error getting room by ID:', error);
    res.status(500).json({ error: 'An error occurred while getting the room' });
  }
};

// Controller to update a room by ID
exports.updateRoomById = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    console.error('Error updating room by ID:', error);
    res.status(500).json({ error: 'An error occurred while updating the room' });
  }
};

// Controller to delete a room by ID
exports.deleteRoomById = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error('Error deleting room by ID:', error);
    res.status(500).json({ error: 'An error occurred while deleting the room' });
  }
};*/
