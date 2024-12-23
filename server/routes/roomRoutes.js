/*const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController.js');
const multer = require('multer');
const Room = require('../models/roomModel.js');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Use the current timestamp as the file name
  }
});

const upload = multer({ storage: storage });

// Route to create a new room
router.post('/rooms', upload.single('image'), roomController.createRoom);

// Route to get all rooms
router.get('/rooms', roomController.getAllRooms);

// Route to get a room by ID
router.get('/rooms/:id', roomController.getRoomById);

// Route to update a room by ID
router.put('/rooms/:id', roomController.updateRoomById);

// Route to delete a room by ID
router.delete('/rooms/:id', roomController.deleteRoomById);

// Route to check room availability
router.post('/rooms/availability', async (req, res) => {
  const { checkInDate, checkOutDate, adults, kids } = req.body;

  try {
    // Query the database to find available rooms
    const availableRooms = await Room.find({
      maxPerson: { $gte: adults + kids },
      _id: {
        $nin: await Booking.find({
          $or: [
            { $and: [{ checkInDate: { $lt: checkOutDate } }, { checkOutDate: { $gt: checkInDate } }] },
            { $and: [{ checkInDate: { $gte: checkOutDate } }, { checkOutDate: { $lte: checkInDate } }] }
          ]
        }).distinct('roomId')
      }
    });

    res.json(availableRooms);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while checking room availability' });
  }
});

module.exports = router;*/
